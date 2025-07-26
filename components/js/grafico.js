// Radar Chart Customizado em Canvas

// Dados de exemplo (pode alterar para o que quiser)
const radarData = [
  { label: "Estrutura de dados", value: 10 },
  { label: "Debbuging", value: 20 },
  { label: "Versionamento", value: 30 },
  { label: "Algoritmo e resolução", value: 40 },
  { label: "Sql e Querries", value: 50 },
  { label: "Conhecimento Web", value: 99 }
];

function drawRadarChart(canvasId, data, options = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  const padding = 0;
  canvas.width = rect.width;
  canvas.height = rect.height + padding;
  const ctx = canvas.getContext('2d');
  const w = rect.width;
  const h = rect.height + padding;
  ctx.clearRect(0, 0, w, h);
  const cx = w / 2;
  const cy = h / 2;
  const labelPadding = 48; // espaço extra para os textos
  const radius = Math.min(w, h) / 2 - labelPadding;
  const steps = 5;
  const maxValue = 100;
  const axisCount = data.length;
  const angleStep = (2 * Math.PI) / axisCount;

  // Desenhar grades poligonais (hexágonos, etc.)
  ctx.save();
  ctx.strokeStyle = '#e0e6ef';
  for (let s = 1; s <= steps; s++) {
    ctx.beginPath();
    for (let i = 0; i < axisCount; i++) {
      const angle = angleStep * i - Math.PI / 2;
      const r = (radius / steps) * s;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }
  ctx.restore();

  // Desenhar eixos e rótulos
  ctx.save();
  ctx.strokeStyle = '#b0b0b0';
  ctx.fillStyle = '#2A2A2A';
  ctx.font = '13px Noto Sans, Arial, sans-serif';
  for (let i = 0; i < axisCount; i++) {
    const angle = angleStep * i - Math.PI / 2;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.stroke();
    // Rótulo
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = y < cy ? 'bottom' : (y > cy ? 'top' : 'middle');
    ctx.fillText(data[i].label, cx + Math.cos(angle) * (radius + 18), cy + Math.sin(angle) * (radius + 18));
    ctx.restore();
  }
  ctx.restore();

  // Desenhar área dos dados (poligonal)
  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < axisCount; i++) {
    const angle = angleStep * i - Math.PI / 2;
    const r = (data[i].value / maxValue) * radius;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = '#7DB5DA'; // azul-ui chapado
  ctx.fill();
  ctx.restore();
}

// Responsivo: redesenha ao redimensionar
function resizeRadar() {
  drawRadarChart('chart-radar', radarData);
}
window.addEventListener('resize', resizeRadar);
window.addEventListener('DOMContentLoaded', resizeRadar);
  