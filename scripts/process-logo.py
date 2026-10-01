from PIL import Image
from pathlib import Path

src = Path(
    r"C:\Users\devur\.cursor\projects\c-Users-devur-Downloads-star-enterprises\assets"
    r"\c__Users_devur_AppData_Roaming_Cursor_User_workspaceStorage_52b454f87ac66c6086a2dccfede46fe1_images_final__-c92cae76-6232-4242-874e-2c1b8112b4c2.png"
)
out_dir = Path(r"c:\Users\devur\Downloads\star-enterprises\public")

im = Image.open(src).convert("RGBA")
w, h = im.size
px = im.load()

min_x, min_y, max_x, max_y = w, h, 0, 0
for y in range(h):
    for x in range(w):
        r, g, b, _a = px[x, y]
        if r + g + b > 28:
            min_x = min(min_x, x)
            min_y = min(min_y, y)
            max_x = max(max_x, x)
            max_y = max(max_y, y)

pad = 16
min_x = max(0, min_x - pad)
min_y = max(0, min_y - pad)
max_x = min(w - 1, max_x + pad)
max_y = min(h - 1, max_y + pad)
cropped = im.crop((min_x, min_y, max_x + 1, max_y + 1))
cw, ch = cropped.size
cp = cropped.load()
text_start = max(0, 295 - min_x)


def process_pixel(r: int, g: int, b: int):
    lum = r + g + b
    # Fully transparent black plate
    if lum <= 24:
        return (0, 0, 0, 0)
    # Soften dark fringe around shapes against black
    if lum < 70 and r < 25 and g < 25 and b < 90:
        alpha = int(max(0, min(255, (lum - 24) * 6)))
        if alpha < 18:
            return (0, 0, 0, 0)
        return (r, g, b, alpha)
    return (r, g, b, 255)


on_light = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))
op = on_light.load()
for y in range(ch):
    for x in range(cw):
        r, g, b, _a = cp[x, y]
        op[x, y] = process_pixel(r, g, b)

light = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))
lp = light.load()
for y in range(ch):
    for x in range(cw):
        r, g, b, a = op[x, y]
        if a == 0:
            continue
        # Right-side wordmark -> white for dark headers
        if x >= text_start and r < 50 and g < 50 and b >= 45:
            strength = max(a / 255.0, min(1.0, (b - 30) / 150.0))
            lp[x, y] = (255, 255, 255, int(255 * strength))
        else:
            lp[x, y] = (r, g, b, a)

on_light.save(out_dir / "logo-on-light.png", "PNG")
light.save(out_dir / "logo-light.png", "PNG")
on_light.save(out_dir / "logo.png", "PNG")
print("ok", on_light.size, "text_start", text_start)
