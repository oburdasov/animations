let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
document.body.style.margin = 0;
document.body.style.background = 'black';
document.body.style.overflow = 'hidden'
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let field = []
let size = 25;
let rowLength = Math.floor(window.innerWidth / size);
let columnLength = Math.floor(window.innerHeight / size);

for (let index = 0; index < columnLength; index++) {
  field.push(new Array(rowLength).fill(null));
}
let event;
let update = animationOne;

function animationOne() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      let x = i * size;
      let y = j * size;
      let coefX = x - event.clientX;
      let coefY = y - event.clientY;
      let shift = 400 / Math.abs(coefX)
      ctx.strokeStyle = `rgba(${shift * 100},106,173, ${shift / 5}`;

      ctx.beginPath();
      ctx.arc(x + (500 / coefX * coefY), y + (500 / coefX * coefY), Math.min(shift, 50), 0, 2 * Math.PI);
      ctx.stroke();
    }
  }
}

function animationTwo() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      let x = i * size;
      let y = j * size;
      let coefX = x - event.clientX;
      let coefY = y - event.clientY;
      let shift = 400 / Math.abs(coefX)
      ctx.strokeStyle = `rgba(${shift * 100},106,173, ${shift / 5}`;

      ctx.beginPath();
      ctx.arc(x + (500 / Math.sqrt(coefX)), y + (500 / coefX * coefY), Math.min(shift, 50), 0, 2 * Math.PI);
      ctx.stroke();
    }
  }
}

function animationThree() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      let x = i * size;
      let y = j * size;
      let coefX = event.clientX - x;
      let coefY = event.clientY - y;
      let commonCoef = Math.abs(coefY) + Math.abs(coefX);
      let shift = 500 / Math.abs(commonCoef);
      ctx.strokeStyle = `rgba(0,${shift * 50},100, ${shift / 2}`;

      ctx.beginPath();
      ctx.arc(x + (500 / commonCoef * coefX), y + (500 / commonCoef * Math.sin(coefY)), Math.min(shift, 10), 0, 2 * Math.PI);
      ctx.stroke();
    }
  }
}

function animationFour() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      let x = i * size;
      let y = j * size;
      let coefX = event.clientX - x;
      let coefY = event.clientY - y;
      let commonCoef = Math.abs(coefY) + Math.abs(coefX);
      let shift = 200 / Math.abs(commonCoef) + 0.1;
      ctx.strokeStyle = `rgba(${shift * 20},${commonCoef / 5},${commonCoef / 5}, ${shift / 2}`;

      ctx.beginPath();
      ctx.arc(x + (1000 / commonCoef * coefX), y + (500 / commonCoef * coefY), Math.min(500 / commonCoef, 10), 0, 2 * Math.PI);
      ctx.stroke();
    }
  }
}

document.addEventListener('keydown', ev => {
  if (ev.key === '1') {
    update = animationOne;
  } else if (ev.key === '2') {
    update = animationTwo;
  } else if (ev.key === '3') {
    update = animationThree;
  } else if (ev.key === '4') {
    update = animationFour;
  }
  update();
})

document.addEventListener('mousemove', ev => {event = ev; update()})
