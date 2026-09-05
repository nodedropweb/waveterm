<#
.SYNOPSIS
    Builds a Windows installer/executable for Wave Terminal.

.DESCRIPTION
    Wraps the project's Task-based build pipeline (`task package`) to produce
    Windows artifacts (.exe / .msi / .zip) in the `make/` directory.

    This script must be run on a Windows machine. Cross-compiling a working
    Windows installer from Linux/macOS is not supported by this project's
    build tooling.

    Prerequisites (see BUILD.md for full details):
      - Node.js 22 LTS          https://nodejs.org/en/download
      - Go                      https://go.dev/doc/install
      - Zig (for CGO)           https://ziglang.org/learn/getting-started/#managers
      - Task                    https://taskfile.dev/installation/

    The resulting build is unsigned unless you set the code-signing
    environment variables electron-builder expects (CSC_LINK / CSC_KEY_PASSWORD,
    or the DigiCert Keylocker SM_* variables used in CI - see
    .github/workflows/build-helper.yml for reference).

.PARAMETER Clean
    Remove the `make/` and `dist/` directories before building.

.EXAMPLE
    ./scripts/build-windows.ps1

.EXAMPLE
    ./scripts/build-windows.ps1 -Clean
#>

[CmdletBinding()]
param(
    [switch]$Clean
)

$ErrorActionPreference = "Stop"

function Test-Command {
    param([string]$Name)
    return [bool](Get-Command $Name -ErrorAction SilentlyContinue)
}

if ($env:OS -ne "Windows_NT") {
    Write-Host "This script must be run on Windows (it builds a native Windows installer)." -ForegroundColor Red
    exit 1
}

Write-Host "==> Checking prerequisites..." -ForegroundColor Cyan

$missing = @()
if (-not (Test-Command "node")) { $missing += "Node.js 22 LTS - https://nodejs.org/en/download" }
if (-not (Test-Command "go")) { $missing += "Go - https://go.dev/doc/install" }
if (-not (Test-Command "zig")) { $missing += "Zig - https://ziglang.org/learn/getting-started/#managers" }
if (-not (Test-Command "task")) { $missing += "Task - https://taskfile.dev/installation/" }

if ($missing.Count -gt 0) {
    Write-Host "Missing required tools:" -ForegroundColor Red
    foreach ($m in $missing) { Write-Host "  - $m" -ForegroundColor Red }
    Write-Host ""
    Write-Host "See BUILD.md ('Windows' section) for setup instructions." -ForegroundColor Yellow
    exit 1
}

# Repo root is one directory up from this script.
$repoRoot = Split-Path -Parent $PSScriptRoot
Push-Location $repoRoot
try {
    if ($Clean) {
        Write-Host "==> Cleaning make/ and dist/..." -ForegroundColor Cyan
        task clean
    }

    Write-Host "==> Building and packaging Wave Terminal for Windows (task package)..." -ForegroundColor Cyan
    Write-Host "    This installs npm/go dependencies, builds wavesrv + wsh, then runs electron-builder." -ForegroundColor DarkGray
    task package

    Write-Host ""
    $artifacts = Get-ChildItem -Path (Join-Path $repoRoot "make") -Include *.exe, *.msi, *.zip -File -Recurse -ErrorAction SilentlyContinue
    if ($artifacts) {
        Write-Host "==> Build complete. Artifacts:" -ForegroundColor Green
        foreach ($a in $artifacts) { Write-Host "  $($a.FullName)" -ForegroundColor Green }
    }
    else {
        Write-Host "==> Build finished, but no .exe/.msi/.zip files were found under make/." -ForegroundColor Yellow
        Write-Host "    Check the output above for errors." -ForegroundColor Yellow
    }
}
finally {
    Pop-Location
}
