import { getFrequencyData } from "./audio.js";

let canvas, ctx;
let centerX, centerY, radius;

export function initVisualizer() {
  canvas = document.getElementById("visualizer");
  ctx = canvas.getContext("2d");

  canvas.width = 400;
  canvas.height = 400;

  centerX = canvas.width / 2;
  centerY = canvas.height / 2;
  radius = 120;

  console.log("🎨 Visualizer initialized");
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  const dataArray = getFrequencyData();
  if (!dataArray) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const bars = dataArray.length;
  const angleStep = (Math.PI * 2) / bars;

  for (let i = 0; i < bars; i++) {
    const value = dataArray[i];
    const barLength = value * 0.8;

    const angle = i * angleStep;

    const x1 = centerX + Math.cos(angle) * radius;
    const y1 = centerY + Math.sin(angle) * radius;

    const x2 = centerX + Math.cos(angle) * (radius + barLength);
    const y2 = centerY + Math.sin(angle) * (radius + barLength);

    ctx.strokeStyle = `hsl(${i * 4}, 100%, 60%)`;
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}
