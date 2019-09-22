const colors=["White","Snow","HoneyDew","MintCream","Azure","AliceBlue","GhostWhite","WhiteSmoke","SeaShell","Beige","OldLace","FloralWhite","Ivory","AntiqueWhite","Linen","LavenderBlush","MistyRose","Gainsboro","LightGray","Silver","DarkGray","Gray","DimGray","LightSlateGray","SlateGray","DarkSlateGray","Black","IndianRed","LightCoral","Salmon","DarkSalmon","LightSalmon","Crimson","Red","FireBrick","DarkRed","Pink","LightPink","HotPink","DeepPink","MediumVioletRed","PaleVioletRed","Coral","Tomato","OrangeRed","DarkOrange","Orange","Gold","Yellow","LightYellow","LemonChiffon","LightGoldenRodYellow","PapayaWhip","Moccasin","PeachPuff","PaleGoldenRod","Khaki","DarkKhaki","Lavender","Thistle","Plum","Violet","Orchid","Fuchsia","Magenta","MediumOrchid","MediumPurple","RebeccaPurple","BlueViolet","DarkViolet","DarkOrchid","DarkMagenta","Purple","Indigo","SlateBlue","DarkSlateBlue","MediumSlateBlue","GreenYellow","ChartReuse","LawnGreen","Lime","LimeGreen","PaleGreen","LightGreen","MediumSpringGreen","SpringGreen","MediumSeaGreen","SeaGreen","ForestGreen","Green","DarkGreen","YellowGreen","OlivedRab","Olive","DarkOliveGreen","MediumAquamarine","DarkSeaGreen","LightSeaGreen","DarkCyan","Teal","Aqua","Cyan","LightCyan","PaleturQuoise","Aquamarine","Turquoise","MediumTurquoise","DarkTurquoise","CadetBlue","SteelBlue","LightSteelBlue","PowderBlue","LightBlue","SkyBlue","LightSkyBlue","DeepSkyBlue","DodgerBlue","CornFlowerBlue","MediumSlateBlue","RoyalBlue","Blue","MediumBlue","DarkBlue","Navy","MidnightBLue","CornSilk","BlanchedAlmond","Bisque","NavajoWhite","Wheat","BurlyWood","Tan","RosyBrown","SandyBrown","GoldenRod","DarkGoldenRod","Peru","Chocolate","SaddleBrown","Sienna","Brown","Maroon"];function copyToClipboard(e){const t=document.createElement("textarea");t.value=`background-color: ${e};`,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.remove()}function showTooltip(e){const t=document.createElement("span");t.classList.add("tooltip"),t.textContent=e;const o=document.querySelector(".container").scrollTop-document.querySelector(".header").offsetHeight+event.clientY;t.style.left=`${event.clientX+-36}px`,t.style.top=`${o+24}px`,t.fadeOut(1500),document.querySelector(".container").append(t)}HTMLElement.prototype.fadeOut=function(e){this.style.opacity=1;for(let t=0;t<100;t++)setTimeout(()=>{this.style.opacity-=.01,99===t&&this.remove()},t*(e/100))},document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementsByClassName("header")[0],t=document.getElementsByClassName("container")[0];e.addEventListener("click",()=>{t.scrollTop=0});for(let e=0;e<colors.length;e+=1){const o=document.createElement("div");o.classList.add("color-palette"),o.innerHTML='<div class="color-palette__color"></div><p class="color-palette__text"></p>',o.getElementsByClassName("color-palette__color")[0].style.backgroundColor=colors[e],o.getElementsByClassName("color-palette__text")[0].innerHTML=colors[e],t.appendChild(o)}const o=document.querySelectorAll(".color-palette");for(let e=0;e<o.length;e+=1)o[e].addEventListener("click",()=>{copyToClipboard(o[e].querySelector(".color-palette__text").textContent),showTooltip("Copied!")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsImNvcHlUb0NsaXBib2FyZCIsImNvbnRlbnQiLCJ0ZW1wVGV4dEFyZWEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlIiwic2hvd1Rvb2x0aXAiLCJ0ZXh0IiwidG9vbHRpcCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiY2xpY2tQb3NpdGlvblkiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG9wIiwib2Zmc2V0SGVpZ2h0IiwiZXZlbnQiLCJjbGllbnRZIiwic3R5bGUiLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImZhZGVPdXQiLCJhcHBlbmQiLCJIVE1MRWxlbWVudCIsInByb3RvdHlwZSIsImR1cmF0aW9uIiwidGhpcyIsIm9wYWNpdHkiLCJpIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoZWFkZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY29udGFpbmVyIiwibGVuZ3RoIiwiY29sb3JQYWxldHRlIiwiaW5uZXJIVE1MIiwiYmFja2dyb3VuZENvbG9yIiwicXVlcnlTZWxlY3RvckFsbCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBUyxDQUViLFFBQ0EsT0FDQSxXQUNBLFlBQ0EsUUFDQSxZQUNBLGFBQ0EsYUFDQSxXQUNBLFFBQ0EsVUFDQSxjQUNBLFFBQ0EsZUFDQSxRQUNBLGdCQUNBLFlBRUEsWUFDQSxZQUNBLFNBQ0EsV0FDQSxPQUNBLFVBQ0EsaUJBQ0EsWUFDQSxnQkFDQSxRQUVBLFlBQ0EsYUFDQSxTQUNBLGFBQ0EsY0FDQSxVQUNBLE1BQ0EsWUFDQSxVQUVBLE9BQ0EsWUFDQSxVQUNBLFdBQ0Esa0JBQ0EsZ0JBRUEsUUFDQSxTQUNBLFlBQ0EsYUFDQSxTQUNBLE9BQ0EsU0FDQSxjQUNBLGVBQ0EsdUJBQ0EsYUFDQSxXQUNBLFlBQ0EsZ0JBQ0EsUUFDQSxZQUVBLFdBQ0EsVUFDQSxPQUNBLFNBQ0EsU0FDQSxVQUNBLFVBQ0EsZUFDQSxlQUNBLGdCQUNBLGFBQ0EsYUFDQSxhQUNBLGNBQ0EsU0FDQSxTQUNBLFlBQ0EsZ0JBQ0Esa0JBQ0EsY0FDQSxhQUNBLFlBQ0EsT0FDQSxZQUNBLFlBQ0EsYUFDQSxvQkFDQSxjQUNBLGlCQUNBLFdBQ0EsY0FDQSxRQUNBLFlBQ0EsY0FDQSxZQUNBLFFBQ0EsaUJBQ0EsbUJBQ0EsZUFDQSxnQkFDQSxXQUNBLE9BRUEsT0FDQSxPQUNBLFlBQ0EsZ0JBQ0EsYUFDQSxZQUNBLGtCQUNBLGdCQUNBLFlBQ0EsWUFDQSxpQkFDQSxhQUNBLFlBQ0EsVUFDQSxlQUNBLGNBQ0EsYUFDQSxpQkFDQSxrQkFDQSxZQUNBLE9BQ0EsYUFDQSxXQUNBLE9BQ0EsZUFFQSxXQUNBLGlCQUNBLFNBQ0EsY0FDQSxRQUNBLFlBQ0EsTUFDQSxZQUNBLGFBQ0EsWUFDQSxnQkFDQSxPQUNBLFlBQ0EsY0FDQSxTQUNBLFFBQ0EsVUFlRixTQUFTQyxnQkFBZ0JDLEdBQ3ZCLE1BQU1DLEVBQWVDLFNBQVNDLGNBQWMsWUFDNUNGLEVBQWFHLDJCQUE2QkosS0FDMUNFLFNBQVNHLEtBQUtDLFlBQVlMLEdBQzFCQSxFQUFhTSxTQUNiTCxTQUFTTSxZQUFZLFFBQ3JCUCxFQUFhUSxTQUVmLFNBQVNDLFlBQVlDLEdBQ25CLE1BQU1DLEVBQVVWLFNBQVNDLGNBQWMsUUFDdkNTLEVBQVFDLFVBQVVDLElBQUksV0FDdEJGLEVBQVFHLFlBQWNKLEVBQ3RCLE1BQU1LLEVBQWlCZCxTQUFTZSxjQUFjLGNBQWNDLFVBQVloQixTQUFTZSxjQUFjLFdBQVdFLGFBQWVDLE1BQU1DLFFBRy9IVCxFQUFRVSxNQUFNQyxRQUFVSCxNQUFNSSxTQUZiLE9BR2pCWixFQUFRVSxNQUFNRyxPQUFTVCxFQUZQLE9BR2hCSixFQUFRYyxRQUFRLE1BQ2hCeEIsU0FBU2UsY0FBYyxjQUFjVSxPQUFPZixHQTlCOUNnQixZQUFZQyxVQUFVSCxRQUFVLFNBQWlCSSxHQUMvQ0MsS0FBS1QsTUFBTVUsUUFBVSxFQUNyQixJQUFLLElBQUlDLEVBQUksRUFBR0EsRUFBSSxJQUFLQSxJQUN2QkMsV0FBVyxLQUNUSCxLQUFLVCxNQUFNVSxTQUFXLElBQ1osS0FBTkMsR0FDRkYsS0FBS3RCLFVBRU53QixHQUFLSCxFQUFXLE9BeUJ2QjVCLFNBQVNpQyxpQkFBaUIsbUJBQW9CLEtBQzVDLE1BQU1DLEVBQVNsQyxTQUFTbUMsdUJBQXVCLFVBQVUsR0FDbkRDLEVBQVlwQyxTQUFTbUMsdUJBQXVCLGFBQWEsR0FFL0RELEVBQU9ELGlCQUFpQixRQUFTLEtBQy9CRyxFQUFVcEIsVUFBWSxJQUd4QixJQUFLLElBQUllLEVBQUksRUFBR0EsRUFBSW5DLE9BQU95QyxPQUFRTixHQUFLLEVBQUcsQ0FDekMsTUFBTU8sRUFBZXRDLFNBQVNDLGNBQWMsT0FDNUNxQyxFQUFhM0IsVUFBVUMsSUFBSSxpQkFDM0IwQixFQUFhQyxVQUFZLDhFQUN6QkQsRUFBYUgsdUJBQXVCLHdCQUF3QixHQUFHZixNQUFNb0IsZ0JBQWtCNUMsT0FBT21DLEdBQzlGTyxFQUFhSCx1QkFBdUIsdUJBQXVCLEdBQUdJLFVBQVkzQyxPQUFPbUMsR0FDakZLLEVBQVVoQyxZQUFZa0MsR0FHeEIsTUFBTUEsRUFBZXRDLFNBQVN5QyxpQkFBaUIsa0JBQy9DLElBQUssSUFBSVYsRUFBSSxFQUFHQSxFQUFJTyxFQUFhRCxPQUFRTixHQUFLLEVBQzVDTyxFQUFhUCxHQUFHRSxpQkFBaUIsUUFBUyxLQUV4Q3BDLGdCQURjeUMsRUFBYVAsR0FBR2hCLGNBQWMsd0JBQXdCRixhQUVwRUwsWUFBWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbG9ycyA9IFtcbiAgLy8gd2hpdGUgY29sb3JzXG4gICdXaGl0ZScsXG4gICdTbm93JyxcbiAgJ0hvbmV5RGV3JyxcbiAgJ01pbnRDcmVhbScsXG4gICdBenVyZScsXG4gICdBbGljZUJsdWUnLFxuICAnR2hvc3RXaGl0ZScsXG4gICdXaGl0ZVNtb2tlJyxcbiAgJ1NlYVNoZWxsJyxcbiAgJ0JlaWdlJyxcbiAgJ09sZExhY2UnLFxuICAnRmxvcmFsV2hpdGUnLFxuICAnSXZvcnknLFxuICAnQW50aXF1ZVdoaXRlJyxcbiAgJ0xpbmVuJyxcbiAgJ0xhdmVuZGVyQmx1c2gnLFxuICAnTWlzdHlSb3NlJyxcbiAgLy8gZ3JheSBjb2xvcnNcbiAgJ0dhaW5zYm9ybycsXG4gICdMaWdodEdyYXknLFxuICAnU2lsdmVyJyxcbiAgJ0RhcmtHcmF5JyxcbiAgJ0dyYXknLFxuICAnRGltR3JheScsXG4gICdMaWdodFNsYXRlR3JheScsXG4gICdTbGF0ZUdyYXknLFxuICAnRGFya1NsYXRlR3JheScsXG4gICdCbGFjaycsXG4gIC8vIHJlZCBjb2xvcnNcbiAgJ0luZGlhblJlZCcsXG4gICdMaWdodENvcmFsJyxcbiAgJ1NhbG1vbicsXG4gICdEYXJrU2FsbW9uJyxcbiAgJ0xpZ2h0U2FsbW9uJyxcbiAgJ0NyaW1zb24nLFxuICAnUmVkJyxcbiAgJ0ZpcmVCcmljaycsXG4gICdEYXJrUmVkJyxcbiAgLy8gcGluayBjb2xvcnNcbiAgJ1BpbmsnLFxuICAnTGlnaHRQaW5rJyxcbiAgJ0hvdFBpbmsnLFxuICAnRGVlcFBpbmsnLFxuICAnTWVkaXVtVmlvbGV0UmVkJyxcbiAgJ1BhbGVWaW9sZXRSZWQnLFxuICAvLyBvcmFuZ2UgY29sb3JzXG4gICdDb3JhbCcsXG4gICdUb21hdG8nLFxuICAnT3JhbmdlUmVkJyxcbiAgJ0RhcmtPcmFuZ2UnLFxuICAnT3JhbmdlJyxcbiAgJ0dvbGQnLFxuICAnWWVsbG93JyxcbiAgJ0xpZ2h0WWVsbG93JyxcbiAgJ0xlbW9uQ2hpZmZvbicsXG4gICdMaWdodEdvbGRlblJvZFllbGxvdycsXG4gICdQYXBheWFXaGlwJyxcbiAgJ01vY2Nhc2luJyxcbiAgJ1BlYWNoUHVmZicsXG4gICdQYWxlR29sZGVuUm9kJyxcbiAgJ0toYWtpJyxcbiAgJ0RhcmtLaGFraScsXG4gIC8vIHB1cnBsZSBjb2xvcnNcbiAgJ0xhdmVuZGVyJyxcbiAgJ1RoaXN0bGUnLFxuICAnUGx1bScsXG4gICdWaW9sZXQnLFxuICAnT3JjaGlkJyxcbiAgJ0Z1Y2hzaWEnLFxuICAnTWFnZW50YScsXG4gICdNZWRpdW1PcmNoaWQnLFxuICAnTWVkaXVtUHVycGxlJyxcbiAgJ1JlYmVjY2FQdXJwbGUnLFxuICAnQmx1ZVZpb2xldCcsXG4gICdEYXJrVmlvbGV0JyxcbiAgJ0RhcmtPcmNoaWQnLFxuICAnRGFya01hZ2VudGEnLFxuICAnUHVycGxlJyxcbiAgJ0luZGlnbycsXG4gICdTbGF0ZUJsdWUnLFxuICAnRGFya1NsYXRlQmx1ZScsXG4gICdNZWRpdW1TbGF0ZUJsdWUnLFxuICAnR3JlZW5ZZWxsb3cnLFxuICAnQ2hhcnRSZXVzZScsXG4gICdMYXduR3JlZW4nLFxuICAnTGltZScsXG4gICdMaW1lR3JlZW4nLFxuICAnUGFsZUdyZWVuJyxcbiAgJ0xpZ2h0R3JlZW4nLFxuICAnTWVkaXVtU3ByaW5nR3JlZW4nLFxuICAnU3ByaW5nR3JlZW4nLFxuICAnTWVkaXVtU2VhR3JlZW4nLFxuICAnU2VhR3JlZW4nLFxuICAnRm9yZXN0R3JlZW4nLFxuICAnR3JlZW4nLFxuICAnRGFya0dyZWVuJyxcbiAgJ1llbGxvd0dyZWVuJyxcbiAgJ09saXZlZFJhYicsXG4gICdPbGl2ZScsXG4gICdEYXJrT2xpdmVHcmVlbicsXG4gICdNZWRpdW1BcXVhbWFyaW5lJyxcbiAgJ0RhcmtTZWFHcmVlbicsXG4gICdMaWdodFNlYUdyZWVuJyxcbiAgJ0RhcmtDeWFuJyxcbiAgJ1RlYWwnLFxuICAvLyBibHVlIGNvbG9yc1xuICAnQXF1YScsXG4gICdDeWFuJyxcbiAgJ0xpZ2h0Q3lhbicsXG4gICdQYWxldHVyUXVvaXNlJyxcbiAgJ0FxdWFtYXJpbmUnLFxuICAnVHVycXVvaXNlJyxcbiAgJ01lZGl1bVR1cnF1b2lzZScsXG4gICdEYXJrVHVycXVvaXNlJyxcbiAgJ0NhZGV0Qmx1ZScsXG4gICdTdGVlbEJsdWUnLFxuICAnTGlnaHRTdGVlbEJsdWUnLFxuICAnUG93ZGVyQmx1ZScsXG4gICdMaWdodEJsdWUnLFxuICAnU2t5Qmx1ZScsXG4gICdMaWdodFNreUJsdWUnLFxuICAnRGVlcFNreUJsdWUnLFxuICAnRG9kZ2VyQmx1ZScsXG4gICdDb3JuRmxvd2VyQmx1ZScsXG4gICdNZWRpdW1TbGF0ZUJsdWUnLFxuICAnUm95YWxCbHVlJyxcbiAgJ0JsdWUnLFxuICAnTWVkaXVtQmx1ZScsXG4gICdEYXJrQmx1ZScsXG4gICdOYXZ5JyxcbiAgJ01pZG5pZ2h0Qkx1ZScsXG4gIC8vIGJyb3duIGNvbG9yc1xuICAnQ29yblNpbGsnLFxuICAnQmxhbmNoZWRBbG1vbmQnLFxuICAnQmlzcXVlJyxcbiAgJ05hdmFqb1doaXRlJyxcbiAgJ1doZWF0JyxcbiAgJ0J1cmx5V29vZCcsXG4gICdUYW4nLFxuICAnUm9zeUJyb3duJyxcbiAgJ1NhbmR5QnJvd24nLFxuICAnR29sZGVuUm9kJyxcbiAgJ0RhcmtHb2xkZW5Sb2QnLFxuICAnUGVydScsXG4gICdDaG9jb2xhdGUnLFxuICAnU2FkZGxlQnJvd24nLFxuICAnU2llbm5hJyxcbiAgJ0Jyb3duJyxcbiAgJ01hcm9vbicsXG5dO1xuXG5IVE1MRWxlbWVudC5wcm90b3R5cGUuZmFkZU91dCA9IGZ1bmN0aW9uIGZhZGVPdXQoZHVyYXRpb24pIHtcbiAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5IC09IDAuMDE7IC8vIC0xMDAgdGltZXMsIG9wYWNpdHkgd2lsbCBlcXVhbHMgMFxuICAgICAgaWYgKGkgPT09IDk5KSB7IC8vIGxhc3QgdGltZSwgZGVsZXRlIGVsZW1lbnRcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9LCBpICogKGR1cmF0aW9uIC8gMTAwKSk7IC8vIGRlbGF5IGkgbXMsIGRpdmlkZSB0byAxMDAgdGltZXMuXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZChjb250ZW50KSB7XG4gIGNvbnN0IHRlbXBUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRlbXBUZXh0QXJlYS52YWx1ZSA9IGBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbnRlbnR9O2A7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcFRleHRBcmVhKTtcbiAgdGVtcFRleHRBcmVhLnNlbGVjdCgpO1xuICBkb2N1bWVudC5leGVjQ29tbWFuZCgnQ29weScpO1xuICB0ZW1wVGV4dEFyZWEucmVtb3ZlKCk7XG59XG5mdW5jdGlvbiBzaG93VG9vbHRpcCh0ZXh0KSB7XG4gIGNvbnN0IHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRvb2x0aXAuY2xhc3NMaXN0LmFkZCgndG9vbHRpcCcpO1xuICB0b29sdGlwLnRleHRDb250ZW50ID0gdGV4dDtcbiAgY29uc3QgY2xpY2tQb3NpdGlvblkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuc2Nyb2xsVG9wIC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLm9mZnNldEhlaWdodCArIGV2ZW50LmNsaWVudFk7XG4gIGNvbnN0IG9mZnNldFggPSAtMzY7XG4gIGNvbnN0IG9mZnNldFkgPSAyNDtcbiAgdG9vbHRpcC5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQuY2xpZW50WCArIG9mZnNldFh9cHhgO1xuICB0b29sdGlwLnN0eWxlLnRvcCA9IGAke2NsaWNrUG9zaXRpb25ZICsgb2Zmc2V0WX1weGA7XG4gIHRvb2x0aXAuZmFkZU91dCgxNTAwKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmFwcGVuZCh0b29sdGlwKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyJylbMF07XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRhaW5lcicpWzBdO1xuXG4gIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjb2xvclBhbGV0dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2xvclBhbGV0dGUuY2xhc3NMaXN0LmFkZCgnY29sb3ItcGFsZXR0ZScpO1xuICAgIGNvbG9yUGFsZXR0ZS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImNvbG9yLXBhbGV0dGVfX2NvbG9yXCI+PC9kaXY+PHAgY2xhc3M9XCJjb2xvci1wYWxldHRlX190ZXh0XCI+PC9wPic7XG4gICAgY29sb3JQYWxldHRlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbG9yLXBhbGV0dGVfX2NvbG9yJylbMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JzW2ldO1xuICAgIGNvbG9yUGFsZXR0ZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2xvci1wYWxldHRlX190ZXh0JylbMF0uaW5uZXJIVE1MID0gY29sb3JzW2ldO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvclBhbGV0dGUpO1xuICB9XG5cbiAgY29uc3QgY29sb3JQYWxldHRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbG9yLXBhbGV0dGUnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvclBhbGV0dGUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb2xvclBhbGV0dGVbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjb2xvciA9IGNvbG9yUGFsZXR0ZVtpXS5xdWVyeVNlbGVjdG9yKCcuY29sb3ItcGFsZXR0ZV9fdGV4dCcpLnRleHRDb250ZW50O1xuICAgICAgY29weVRvQ2xpcGJvYXJkKGNvbG9yKTtcbiAgICAgIHNob3dUb29sdGlwKCdDb3BpZWQhJyk7XG4gICAgICAvLyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2xvcik7XG4gICAgfSk7XG4gIH1cbn0pO1xuIl19
