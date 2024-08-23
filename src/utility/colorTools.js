// colorTools.js
export function rgbToHex(r, g, b) {
  let curHEX = `${r.toString(16).padStart(2, 0)}${g
    .toString(16)
    .padStart(2, 0)}${b.toString(16).padStart(2, 0)}`;
  curHEX = '#' + curHEX.toUpperCase();
  return curHEX;
}

export function rgbToHsl(rr, gg, bb) {
  // Make r, g, and b fractions of 1
  let r = rr / 255;
  let g = gg / 255;
  let b = bb / 255;
  // Find greatest and smallest channel values
  let min = Math.min(r, g, b),
    max = Math.max(r, g, b),
    delta = max - min,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  if (delta == 0) {
    // No difference
    h = 0;
  } else if (max == r) {
    // Red is max
    h = ((g - b) / delta) % 6;
  } else if (max == g) {
    // Green is max
    h = (b - r) / delta + 2;
  } else {
    // Blue is max
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);
  // Make negative hues positive behind 360°
  if (h < 0) {
    h += 360;
  }

  // Calculate lightness
  l = (max + min) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(0);
  l = +(l * 100).toFixed(0);
  return { h, s, l };
}
