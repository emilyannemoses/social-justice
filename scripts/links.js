// const linkData = "https://spreadsheets.google.com/feeds/cells/1OKTkpcqKmjqDCo8fTbnjSpQpX_Kdn95gaVDwft3Ljo4/1/public/full?alt=json"
// const myData = [];
//
// _GET = (url, callback) => {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//       if (callback) callback(JSON.parse(xhr.responseText))
//     }
//   }
//   xhr.send(null)
// }
//
// _GET(linkData, (data) => {
//   data = data.feed.entry
//   const column = document.getElementById("columns")
//   const link = document.getElementById("link")
//   for (var i = 0; i < data.length; i++) {
//     let row = data[i].gs$cell.row;
//     if (!myData[row]) {
//       myData[row] = [];
//     }
//     myData[row].push(data[i].gs$cell.inputValue);
//   }
//   myData.shift();
//   for (const links of myData) {
//     let link = {
//       title: links[0],
//       tags: links[1],
//       link: links[2]
//     }
//     column.innerHTML += `
//     <div class="figure">
//       <div class="terms">
//         <div class="text">
//           <a class="link link-style" href=${link.link} target="_blank" alt="Demilitarize neighborhoods">
//             <span class="vertical-align"> ${link.title} </span>
//             <div class="tags">${link.tags}</div>
//           </a>
//         </div>
//       </div>
//     </div>
//     `;
//   }
// })
