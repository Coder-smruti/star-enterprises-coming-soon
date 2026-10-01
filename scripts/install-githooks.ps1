$root = git rev-parse --show-toplevel
if (-not $root) { exit 0 }
$hooks = Join-Path $root ".git\hooks"
$src = Join-Path $root ".githooks\prepare-commit-msg"
if (Test-Path $src) {
  Copy-Item $src (Join-Path $hooks "prepare-commit-msg") -Force
}
