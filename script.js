let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
document.body.style.margin = 0;
document.body.style.background = 'black';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;
let ctx = canvas.getContext('2d');

let field = []
let size = 25;
let rowLength = Math.floor(window.innerWidth / size);
let columnLength = Math.floor(window.innerHeight / size);

for (let index = 0; index < columnLength; index++) {
  field.push(new Array(rowLength).fill(null));
}

function update(ev) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      let x = i * size;
      let y = j * size;
      let coefX = x / ev.clientX;
      let coefY = y / ev.clientY;
      ctx.strokeStyle = `rgba(140,106,173, ${(coefX * coefY)}`;
      
      ctx.beginPath();
      ctx.arc(x + ((ev.clientX - x) * coefX), y + ((ev.clientX - x) * coefY), coefX * coefY * 10, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }
}

document.addEventListener('mousemove', ev => update(ev))

// for (let i = 0; i < rowLength; i++) {
//   for (let j = 0; j < columnLength; j++) {
//     let x = i * size;
//     let y = j * size;
//     let coefX = x / ev.clientX;
//     let coefY = y / ev.clientY;
//     ctx.strokeStyle = `rgba(140,106,173, ${(coefX * coefY)}`;
    
//     ctx.beginPath();
//     ctx.arc(x + ((ev.clientX - x) * coefX), y + ((ev.clientX - x) * coefY), coefX * coefY * 10, 0, 2 * Math.PI);
//     ctx.stroke();
//   }
// }
