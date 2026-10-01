"""Remove Cursor co-author lines from stdin (for git msg-filter / hooks)."""
import sys

msg = sys.stdin.read()
lines = [
    line
    for line in msg.splitlines(keepends=True)
    if "Co-authored-by: Cursor" not in line and "cursoragent@cursor.com" not in line
]
sys.stdout.write("".join(lines))
