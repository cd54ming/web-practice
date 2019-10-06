let practiceData = [{
  name: '學學廣告 DM',
  description: '練習 CSS position 排版。',
  link: 'XueXueDM',
}, {
  name: 'Pantone 年度代表色',
  description: '使用 CSS flex-box 使元素水平、垂直置中。',
  link: 'pantoneColorOfTheYear',
}, {
  name: '新垣結依照片牆',
  description: '模仿 GMO 證券廣告頁面，練習 CSS grid-box 排版。',
  link: 'gakkiWall',
}, {
  name: 'Grid Box Responsive Layout Practice',
  description: '練習 CSS grid-box 響應式排版，縮小視窗寬度檢視效果。',
  link: 'gridResponsiveLayout/dist',
}, {
  name: 'Remember To Breathe',
  description: '實作全螢幕影片背景效果。',
  link: 'rememberToBreathe',
}, {
  name: '彈跳球',
  description: '練習 JavaScript class。',
  link: 'bouncingBall',
}, {
  name: 'Super Hero Squad',
  description: '練習串接 API。',
  link: 'superHeroSquad',
}, {
  name: '身分證',
  description: 'Hahow 動畫互動網頁程式入門課程練習，使用 SCSS @mixin, @function 語法。',
  link: 'IDCard/dist',
}, {
  name: 'CSS background 顏色選擇器',
  description: '列出所有 HTML 顏色名，方便選色。<br>使用 overflow 與給定 height 值，讓頁面滾動到邊界彈回，看起來更具穩定性。實作 Tooltip，偵測滑鼠在元素的位置，並顯示。實作複製頁面內容到使用者剪貼板功能，方便操作。',
  link: 'backgroundColorPicker/dist',
}, {
  name: 'Read Clipboard',
  description: '使用 JavaScript 讀取使用者的 clipboard 內容。',
  link: 'readClipboard',
}, {
//   name: 'Todo List',
//   description: '使用 JQuery 實作簡易備忘錄，將資料儲存在 localStorage，使網頁重載後不會消失。<br>用來比較使用 Vue.js 後的優點。',
//   link: 'todoList/dist',
// }, {
//   name: 'sprite image with CSS animation',
//   description: '使用 sprite 圖片，搭配 CSS animation 達到動畫圖片效果。',
//   link: 'cssAnimation/dist',
// }, {
  name: '可收合 sidebar',
  description: '使用 CSS transition 搭配 flex 實作 sidebar slide in 特效',
  link: 'collapseSidebar/dist',
}];

window.onload = function instertData() {
  const tableBody = document.getElementById('practice-content');
  practiceData = practiceData.reverse(); // from new to old
  for (let i = 0; i < practiceData.length; i += 1) {
    const newData = document.createElement('a');
    newData.setAttribute('href', practiceData[i].link);
    newData.classList.add('table-row');
    newData.innerHTML = `<div>${practiceData[i].name}</div><div>${practiceData[i].description}</div>`;
    tableBody.appendChild(newData);
  }
};
