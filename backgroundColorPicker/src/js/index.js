const colors = [
  // white colors
  'White',
  'Snow',
  'HoneyDew',
  'MintCream',
  'Azure',
  'AliceBlue',
  'GhostWhite',
  'WhiteSmoke',
  'SeaShell',
  'Beige',
  'OldLace',
  'FloralWhite',
  'Ivory',
  'AntiqueWhite',
  'Linen',
  'LavenderBlush',
  'MistyRose',
  // gray colors
  'Gainsboro',
  'LightGray',
  'Silver',
  'DarkGray',
  'Gray',
  'DimGray',
  'LightSlateGray',
  'SlateGray',
  'DarkSlateGray',
  'Black',
  // red colors
  'IndianRed',
  'LightCoral',
  'Salmon',
  'DarkSalmon',
  'LightSalmon',
  'Crimson',
  'Red',
  'FireBrick',
  'DarkRed',
  // pink colors
  'Pink',
  'LightPink',
  'HotPink',
  'DeepPink',
  'MediumVioletRed',
  'PaleVioletRed',
  // orange colors
  'Coral',
  'Tomato',
  'OrangeRed',
  'DarkOrange',
  'Orange',
  'Gold',
  'Yellow',
  'LightYellow',
  'LemonChiffon',
  'LightGoldenRodYellow',
  'PapayaWhip',
  'Moccasin',
  'PeachPuff',
  'PaleGoldenRod',
  'Khaki',
  'DarkKhaki',
  // purple colors
  'Lavender',
  'Thistle',
  'Plum',
  'Violet',
  'Orchid',
  'Fuchsia',
  'Magenta',
  'MediumOrchid',
  'MediumPurple',
  'RebeccaPurple',
  'BlueViolet',
  'DarkViolet',
  'DarkOrchid',
  'DarkMagenta',
  'Purple',
  'Indigo',
  'SlateBlue',
  'DarkSlateBlue',
  'MediumSlateBlue',
  'GreenYellow',
  'ChartReuse',
  'LawnGreen',
  'Lime',
  'LimeGreen',
  'PaleGreen',
  'LightGreen',
  'MediumSpringGreen',
  'SpringGreen',
  'MediumSeaGreen',
  'SeaGreen',
  'ForestGreen',
  'Green',
  'DarkGreen',
  'YellowGreen',
  'OlivedRab',
  'Olive',
  'DarkOliveGreen',
  'MediumAquamarine',
  'DarkSeaGreen',
  'LightSeaGreen',
  'DarkCyan',
  'Teal',
  // blue colors
  'Aqua',
  'Cyan',
  'LightCyan',
  'PaleturQuoise',
  'Aquamarine',
  'Turquoise',
  'MediumTurquoise',
  'DarkTurquoise',
  'CadetBlue',
  'SteelBlue',
  'LightSteelBlue',
  'PowderBlue',
  'LightBlue',
  'SkyBlue',
  'LightSkyBlue',
  'DeepSkyBlue',
  'DodgerBlue',
  'CornFlowerBlue',
  'MediumSlateBlue',
  'RoyalBlue',
  'Blue',
  'MediumBlue',
  'DarkBlue',
  'Navy',
  'MidnightBLue',
  // brown colors
  'CornSilk',
  'BlanchedAlmond',
  'Bisque',
  'NavajoWhite',
  'Wheat',
  'BurlyWood',
  'Tan',
  'RosyBrown',
  'SandyBrown',
  'GoldenRod',
  'DarkGoldenRod',
  'Peru',
  'Chocolate',
  'SaddleBrown',
  'Sienna',
  'Brown',
  'Maroon',
];

HTMLElement.prototype.fadeOut = function fadeOut(duration) {
  this.style.opacity = 1;
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      this.style.opacity -= 0.01; // -100 times, opacity will equals 0
      if (i === 99) { // last time, delete element
        this.remove();
      }
    }, i * (duration / 100)); // delay i ms, divide to 100 times.
  }
};

function copyToClipboard(content) {
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = `background-color: ${content};`;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('Copy');
  tempTextArea.remove();
}
function showTooltip(text) {
  const tooltip = document.createElement('span');
  tooltip.classList.add('tooltip');
  tooltip.textContent = text;
  const clickPositionY = document.querySelector('.container').scrollTop - document.querySelector('.header').offsetHeight + event.clientY;
  const offsetX = -36;
  const offsetY = 24;
  tooltip.style.left = `${event.clientX + offsetX}px`;
  tooltip.style.top = `${clickPositionY + offsetY}px`;
  tooltip.fadeOut(1500);
  document.querySelector('.container').append(tooltip);
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementsByClassName('header')[0];
  const container = document.getElementsByClassName('container')[0];

  header.addEventListener('click', () => {
    container.scrollTop = 0;
  });

  for (let i = 0; i < colors.length; i += 1) {
    const colorPalette = document.createElement('div');
    colorPalette.classList.add('color-palette');
    colorPalette.innerHTML = '<div class="color-palette__color"></div><p class="color-palette__text"></p>';
    colorPalette.getElementsByClassName('color-palette__color')[0].style.backgroundColor = colors[i];
    colorPalette.getElementsByClassName('color-palette__text')[0].innerHTML = colors[i];
    container.appendChild(colorPalette);
  }

  const colorPalette = document.querySelectorAll('.color-palette');
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].addEventListener('click', () => {
      const color = colorPalette[i].querySelector('.color-palette__text').textContent;
      copyToClipboard(color);
      showTooltip('Copied!');
      // navigator.clipboard.writeText(color);
    });
  }
});
