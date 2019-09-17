const practiceData = [{
  name: '學學廣告DM',
  description: 'CSS 排版',
  link: 'XueXueDM',
}, {
  name: 'Pantone 年度代表色',
  description: 'CSS flex-box 史元素置中',
  link: 'pantoneColorOfTheYear',
}, {
  name: '新垣結依照片牆',
  description: 'CSS grid-box 排版',
  link: 'gakkiWall',
}, {
  name: 'Remember To Breathe',
  description: '全螢幕影片背景',
  link: 'rememberToBreathe',
}, {
  name: '彈跳球',
  description: 'JavaScript class 練習',
  link: 'bouncingBall',
}, {
  name: 'Super Hero Squad',
  description: '練習使用 API',
  link: 'superHeroSquad',
}, {
  name: '身分證',
  description: 'Hahow 動畫互動網頁程式入門課程練習',
  link: 'IDCard/dist',
}, {
  name: 'cssAnimation',
  description: 'CSS animation 練習',
  link: 'cssAnimation',
}, {
  name: 'CSS background 顏色選擇器',
  description: '使用 overflow 與給定 height 值，讓頁面滾動到邊界彈回，看起來更具穩定性。實作 Tooltip，偵測滑鼠在元素的位置，並顯示。實作複製頁面內容到使用者剪貼板功能，方便操作。',
  link: 'backgroundColorPicker/dist',
}, {
  name: 'Read Clipboard',
  description: '讀取使用者的 Clipboard 內容',
  link: 'readClipBoard',
}];

window.onload = function instertData() {
  const tableBody = document.getElementById('practice-content');
  for (let i = 0; i < practiceData.length; i += 1) {
    const newData = document.createElement('a');
    newData.setAttribute('href', practiceData[i].link);
    newData.classList.add('table-row');
    newData.innerHTML = `<div>${practiceData[i].name}</div><div>${practiceData[i].description}</div>`;
    tableBody.appendChild(newData);
  }
};
