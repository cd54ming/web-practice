let practiceData = [{
  name: '學學廣告 DM',
  description: '練習 CSS position 排版。',
  link: 'XueXueDM',
  date: '2019/10/14',
}, {
  name: 'Pantone 年度代表色',
  description: '使用 CSS flex-box 使元素水平、垂直置中。',
  link: 'pantoneColorOfTheYear',
  date: '2019/10/14',
}, {
  name: '新垣結依照片牆',
  description: '模仿 GMO 證券廣告頁面，練習 CSS grid-box 排版。',
  link: 'gakkiWall',
  date: '2019/10/14',
}, {
  name: 'Grid Box Responsive Layout Practice',
  description: '練習 CSS grid-box 響應式排版，縮小視窗寬度檢視效果。',
  link: 'gridResponsiveLayout/dist',
  date: '2019/10/14',
}, {
  name: 'Remember To Breathe',
  description: '實作全螢幕影片背景效果。',
  link: 'rememberToBreathe',
  date: '2019/10/14',
}, {
  name: '彈跳球',
  description: '練習 JavaScript class。',
  link: 'bouncingBall',
  date: '2019/10/14',
}, {
  name: 'Super Hero Squad',
  description: '練習串接 API。',
  link: 'superHeroSquad',
  date: '2019/10/14',
}, {
  name: '身分證',
  description: 'Hahow 動畫互動網頁程式入門課程練習，使用 SCSS @mixin, @function 語法。',
  link: 'IDCard/dist',
  date: '2019/10/14',
}, {
  name: 'CSS background 顏色選擇器',
  description: '列出所有 HTML 顏色名，方便選色。<br>使用 overflow 與給定 height 值，讓頁面滾動到邊界彈回，看起來更具穩定性。實作 Tooltip，偵測滑鼠在元素的位置，並顯示。實作複製頁面內容到使用者剪貼板功能，方便操作。',
  link: 'backgroundColorPicker/dist',
  date: '2019/10/14',
}, {
  name: 'Read Clipboard',
  description: '使用 JavaScript 讀取使用者的 clipboard 內容。',
  link: 'readClipboard',
  date: '2019/10/14',
}, {
  name: 'To-Do List',
  description: '使用 JQuery 實作簡易備忘錄，將資料儲存在 localStorage，使網頁重載後不會消失。<br>用來比較使用 Vue.js 後的優點。',
  link: 'todoList/dist/index.html',
  date: '2019/10/14',
}, {
  name: 'To-Do List',
  description: '複習 To-Do List',
  link: 'todoList2/dist/index.html',
  date: '2019/10/14',
}, {
  name: 'To-Do List Vue version',
  description: '使用 Vue 實作 To-Do list, 學習 Vue 開發',
  link: 'todoListVue/dist',
  date: '2019/10/14',
}, {
  name: 'sprite image with CSS animation',
  description: '使用 sprite 圖片，搭配 CSS animation 達到動畫圖片效果。',
  link: 'cssAnimation/dist/index.html',
  date: '2019/10/14',
}, {
  name: '可收合 sidebar',
  description: '使用 CSS transition 搭配 flex 實作 sidebar slide in 特效',
  link: 'collapseSidebar/dist',
  date: '2019/10/14',
}, {
  name: '排序 Table',
  description: '點選 table 標題，排序 table 中的資料。 練習 Vue',
  link: 'sortTable/dist',
  date: '2019/10/14',
}, {
  name: 'Vue Router',
  description: '練習使用 vue router 來切換頁面',
  link: 'VueRouter/',
  date: '2019/10/24',
}, {
  name: '空氣品質指標',
  description: '串接行政院環境保護署opendata API，顯示各縣市監測站 AQI，並可添加關注城市，練習使用 Vue component, props 與 $emit',
  link: 'airQuality/dist',
  date: '2019/10/24',
}];

window.onload = function instertData() {
  const tableBody = document.getElementById('practice-content');
  practiceData = practiceData.reverse(); // from new to old
  for (let i = 0; i < practiceData.length; i += 1) {
    const newData = document.createElement('a');
    newData.setAttribute('href', practiceData[i].link);
    newData.classList.add('table-row');
    newData.innerHTML = `<div>${practiceData[i].name}</div><div>${practiceData[i].description}</div><div class="date">${practiceData[i].date}</div>`;
    tableBody.appendChild(newData);
  }
};
