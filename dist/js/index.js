let practiceData=[{name:"學學廣告 DM",description:"練習 CSS position 排版。",link:"XueXueDM"},{name:"Pantone 年度代表色",description:"使用 CSS flex-box 使元素水平、垂直置中。",link:"pantoneColorOfTheYear"},{name:"新垣結依照片牆",description:"模仿 GMO 證券廣告頁面，練習 CSS grid-box 排版。",link:"gakkiWall"},{name:"Grid Box Responsive Layout Practice",description:"練習 CSS grid-box 響應式排版，縮小視窗寬度檢視效果。",link:"gridResponsiveLayout/dist"},{name:"Remember To Breathe",description:"實作全螢幕影片背景效果。",link:"rememberToBreathe"},{name:"彈跳球",description:"練習 JavaScript class。",link:"bouncingBall"},{name:"Super Hero Squad",description:"練習串接 API。",link:"superHeroSquad"},{name:"身分證",description:"Hahow 動畫互動網頁程式入門課程練習，使用 SCSS @mixin, @function 語法。",link:"IDCard/dist"},{name:"CSS background 顏色選擇器",description:"列出所有 HTML 顏色名，方便選色。<br>使用 overflow 與給定 height 值，讓頁面滾動到邊界彈回，看起來更具穩定性。實作 Tooltip，偵測滑鼠在元素的位置，並顯示。實作複製頁面內容到使用者剪貼板功能，方便操作。",link:"backgroundColorPicker/dist"},{name:"Read Clipboard",description:"使用 JavaScript 讀取使用者的 clipboard 內容。",link:"readClipboard"},{name:"Todo List",description:"使用 JQuery 實作簡易備忘錄，將資料儲存在 localStorage，使網頁重載後不會消失。<br>用來比較使用 Vue.js 後的優點。",link:"todoList/dist"},{name:"sprite image with CSS animation",description:"使用 sprite 圖片，搭配 CSS animation 達到動畫圖片效果。",link:"cssAnimation/dist"},{name:"可收合 sidebar",description:"使用 CSS transition 搭配 flex 實作 sidebar slide in 特效",link:"collapseSidebar/dist"}];window.onload=function(){const i=document.getElementById("practice-content");practiceData=practiceData.reverse();for(let e=0;e<practiceData.length;e+=1){const a=document.createElement("a");a.setAttribute("href",practiceData[e].link),a.classList.add("table-row"),a.innerHTML=`<div>${practiceData[e].name}</div><div>${practiceData[e].description}</div>`,i.appendChild(a)}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByYWN0aWNlRGF0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJ3aW5kb3ciLCJvbmxvYWQiLCJ0YWJsZUJvZHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmV2ZXJzZSIsImkiLCJsZW5ndGgiLCJuZXdEYXRhIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxhQUFlLENBQUMsQ0FDbEJDLEtBQU0sVUFDTkMsWUFBYSxzQkFDYkMsS0FBTSxZQUNMLENBQ0RGLEtBQU0sZ0JBQ05DLFlBQWEsOEJBQ2JDLEtBQU0seUJBQ0wsQ0FDREYsS0FBTSxVQUNOQyxZQUFhLG9DQUNiQyxLQUFNLGFBQ0wsQ0FDREYsS0FBTSxzQ0FDTkMsWUFBYSxvQ0FDYkMsS0FBTSw2QkFDTCxDQUNERixLQUFNLHNCQUNOQyxZQUFhLGVBQ2JDLEtBQU0scUJBQ0wsQ0FDREYsS0FBTSxNQUNOQyxZQUFhLHVCQUNiQyxLQUFNLGdCQUNMLENBQ0RGLEtBQU0sbUJBQ05DLFlBQWEsWUFDYkMsS0FBTSxrQkFDTCxDQUNERixLQUFNLE1BQ05DLFlBQWEscURBQ2JDLEtBQU0sZUFDTCxDQUNERixLQUFNLHVCQUNOQyxZQUFhLHdIQUNiQyxLQUFNLDhCQUNMLENBQ0RGLEtBQU0saUJBQ05DLFlBQWEscUNBQ2JDLEtBQU0saUJBQ0wsQ0FDREYsS0FBTSxZQUNOQyxZQUFhLDJFQUNiQyxLQUFNLGlCQUNMLENBQ0RGLEtBQU0sa0NBQ05DLFlBQWEsMENBQ2JDLEtBQU0scUJBQ0wsQ0FDREYsS0FBTSxjQUNOQyxZQUFhLG1EQUNiQyxLQUFNLHlCQUdSQyxPQUFPQyxPQUFTLFdBQ2QsTUFBTUMsRUFBWUMsU0FBU0MsZUFBZSxvQkFDMUNSLGFBQWVBLGFBQWFTLFVBQzVCLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJVixhQUFhVyxPQUFRRCxHQUFLLEVBQUcsQ0FDL0MsTUFBTUUsRUFBVUwsU0FBU00sY0FBYyxLQUN2Q0QsRUFBUUUsYUFBYSxPQUFRZCxhQUFhVSxHQUFHUCxNQUM3Q1MsRUFBUUcsVUFBVUMsSUFBSSxhQUN0QkosRUFBUUssa0JBQW9CakIsYUFBYVUsR0FBR1Qsa0JBQWtCRCxhQUFhVSxHQUFHUixvQkFDOUVJLEVBQVVZLFlBQVlOIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHByYWN0aWNlRGF0YSA9IFt7XG4gIG5hbWU6ICflrbjlrbjlu6PlkYogRE0nLFxuICBkZXNjcmlwdGlvbjogJ+e3tOe/kiBDU1MgcG9zaXRpb24g5o6S54mI44CCJyxcbiAgbGluazogJ1h1ZVh1ZURNJyxcbn0sIHtcbiAgbmFtZTogJ1BhbnRvbmUg5bm05bqm5Luj6KGo6ImyJyxcbiAgZGVzY3JpcHRpb246ICfkvb/nlKggQ1NTIGZsZXgtYm94IOS9v+WFg+e0oOawtOW5s+OAgeWeguebtOe9ruS4reOAgicsXG4gIGxpbms6ICdwYW50b25lQ29sb3JPZlRoZVllYXInLFxufSwge1xuICBuYW1lOiAn5paw5Z6j57WQ5L6d54Wn54mH54mGJyxcbiAgZGVzY3JpcHRpb246ICfmqKHku78gR01PIOitieWIuOW7o+WRiumggemdou+8jOe3tOe/kiBDU1MgZ3JpZC1ib3gg5o6S54mI44CCJyxcbiAgbGluazogJ2dha2tpV2FsbCcsXG59LCB7XG4gIG5hbWU6ICdHcmlkIEJveCBSZXNwb25zaXZlIExheW91dCBQcmFjdGljZScsXG4gIGRlc2NyaXB0aW9uOiAn57e057+SIENTUyBncmlkLWJveCDpn7/mh4nlvI/mjpLniYjvvIznuK7lsI/oppbnqpflr6zluqbmqqLoppbmlYjmnpzjgIInLFxuICBsaW5rOiAnZ3JpZFJlc3BvbnNpdmVMYXlvdXQvZGlzdCcsXG59LCB7XG4gIG5hbWU6ICdSZW1lbWJlciBUbyBCcmVhdGhlJyxcbiAgZGVzY3JpcHRpb246ICflr6bkvZzlhajonqLluZXlvbHniYfog4zmma/mlYjmnpzjgIInLFxuICBsaW5rOiAncmVtZW1iZXJUb0JyZWF0aGUnLFxufSwge1xuICBuYW1lOiAn5b2I6Lez55CDJyxcbiAgZGVzY3JpcHRpb246ICfnt7Tnv5IgSmF2YVNjcmlwdCBjbGFzc+OAgicsXG4gIGxpbms6ICdib3VuY2luZ0JhbGwnLFxufSwge1xuICBuYW1lOiAnU3VwZXIgSGVybyBTcXVhZCcsXG4gIGRlc2NyaXB0aW9uOiAn57e057+S5Liy5o6lIEFQSeOAgicsXG4gIGxpbms6ICdzdXBlckhlcm9TcXVhZCcsXG59LCB7XG4gIG5hbWU6ICfouqvliIborYknLFxuICBkZXNjcmlwdGlvbjogJ0hhaG93IOWLleeVq+S6kuWLlee2sumggeeoi+W8j+WFpemWgOiqsueoi+e3tOe/ku+8jOS9v+eUqCBTQ1NTIEBtaXhpbiwgQGZ1bmN0aW9uIOiqnuazleOAgicsXG4gIGxpbms6ICdJRENhcmQvZGlzdCcsXG59LCB7XG4gIG5hbWU6ICdDU1MgYmFja2dyb3VuZCDpoY/oibLpgbjmk4flmagnLFxuICBkZXNjcmlwdGlvbjogJ+WIl+WHuuaJgOaciSBIVE1MIOmhj+iJsuWQje+8jOaWueS+v+mBuOiJsuOAgjxicj7kvb/nlKggb3ZlcmZsb3cg6IiH57Wm5a6aIGhlaWdodCDlgLzvvIzorpPpoIHpnaLmu77li5XliLDpgornlYzlvYjlm57vvIznnIvotbfkvobmm7TlhbfnqanlrprmgKfjgILlr6bkvZwgVG9vbHRpcO+8jOWBtea4rOa7kem8oOWcqOWFg+e0oOeahOS9jee9ru+8jOS4pumhr+ekuuOAguWvpuS9nOikh+ijvemggemdouWFp+WuueWIsOS9v+eUqOiAheWJquiyvOadv+WKn+iDve+8jOaWueS+v+aTjeS9nOOAgicsXG4gIGxpbms6ICdiYWNrZ3JvdW5kQ29sb3JQaWNrZXIvZGlzdCcsXG59LCB7XG4gIG5hbWU6ICdSZWFkIENsaXBib2FyZCcsXG4gIGRlc2NyaXB0aW9uOiAn5L2/55SoIEphdmFTY3JpcHQg6K6A5Y+W5L2/55So6ICF55qEIGNsaXBib2FyZCDlhaflrrnjgIInLFxuICBsaW5rOiAncmVhZENsaXBib2FyZCcsXG59LCB7XG4gIG5hbWU6ICdUb2RvIExpc3QnLFxuICBkZXNjcmlwdGlvbjogJ+S9v+eUqCBKUXVlcnkg5a+m5L2c57Ch5piT5YKZ5b+Y6YyE77yM5bCH6LOH5paZ5YSy5a2Y5ZyoIGxvY2FsU3RvcmFnZe+8jOS9v+e2sumggemHjei8ieW+jOS4jeacg+a2iOWkseOAgjxicj7nlKjkvobmr5TovIPkvb/nlKggVnVlLmpzIOW+jOeahOWEqum7nuOAgicsXG4gIGxpbms6ICd0b2RvTGlzdC9kaXN0Jyxcbn0sIHtcbiAgbmFtZTogJ3Nwcml0ZSBpbWFnZSB3aXRoIENTUyBhbmltYXRpb24nLFxuICBkZXNjcmlwdGlvbjogJ+S9v+eUqCBzcHJpdGUg5ZyW54mH77yM5pCt6YWNIENTUyBhbmltYXRpb24g6YGU5Yiw5YuV55Wr5ZyW54mH5pWI5p6c44CCJyxcbiAgbGluazogJ2Nzc0FuaW1hdGlvbi9kaXN0Jyxcbn0sIHtcbiAgbmFtZTogJ+WPr+aUtuWQiCBzaWRlYmFyJyxcbiAgZGVzY3JpcHRpb246ICfkvb/nlKggQ1NTIHRyYW5zaXRpb24g5pCt6YWNIGZsZXgg5a+m5L2cIHNpZGViYXIgc2xpZGUgaW4g54m55pWIJyxcbiAgbGluazogJ2NvbGxhcHNlU2lkZWJhci9kaXN0Jyxcbn1dO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gaW5zdGVydERhdGEoKSB7XG4gIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmFjdGljZS1jb250ZW50Jyk7XG4gIHByYWN0aWNlRGF0YSA9IHByYWN0aWNlRGF0YS5yZXZlcnNlKCk7IC8vIGZyb20gbmV3IHRvIG9sZFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByYWN0aWNlRGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbmV3RGF0YS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBwcmFjdGljZURhdGFbaV0ubGluayk7XG4gICAgbmV3RGF0YS5jbGFzc0xpc3QuYWRkKCd0YWJsZS1yb3cnKTtcbiAgICBuZXdEYXRhLmlubmVySFRNTCA9IGA8ZGl2PiR7cHJhY3RpY2VEYXRhW2ldLm5hbWV9PC9kaXY+PGRpdj4ke3ByYWN0aWNlRGF0YVtpXS5kZXNjcmlwdGlvbn08L2Rpdj5gO1xuICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChuZXdEYXRhKTtcbiAgfVxufTtcbiJdfQ==
