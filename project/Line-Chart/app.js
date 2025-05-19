// Sample data for the line chart
const data = [
    { label: "Jan", value: 30 },
    { label: "Feb", value: 50 },
    { label: "Mar", value: 40 },
    { label: "Apr", value: 70 },
    { label: "May", value: 60 },
    { label: "Jun", value: 80 },
    { label: "Jul", value: 65 }
];

// Create canvas
const canvas = document.createElement('canvas');
canvas.width = 600;
canvas.height = 350;
canvas.style.display = "block";
canvas.style.margin = "40px auto";
canvas.id = "lineChart";
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');

// Animation variables
let progress = 0;
const animationSteps = 60;

// Tooltip
const tooltip = document.createElement('div');
tooltip.style.position = 'absolute';
tooltip.style.background = '#222';
tooltip.style.color = '#fff';
tooltip.style.padding = '6px 12px';
tooltip.style.borderRadius = '4px';
tooltip.style.pointerEvents = 'none';
tooltip.style.fontSize = '14px';
tooltip.style.opacity = 0;
tooltip.style.transition = 'opacity 0.2s';
document.body.appendChild(tooltip);

// Chart drawing function
function drawChart(progressRatio) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Chart area
    const padding = 50;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;

    // Find max value
    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));

    // Draw axes
    ctx.strokeStyle = "#aaa";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();

    // Draw labels
    ctx.fillStyle = "#333";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    data.forEach((d, i) => {
        const x = padding + (i * (chartWidth / (data.length - 1)));
        ctx.fillText(d.label, x, canvas.height - padding + 25);
    });

    // Draw Y axis labels
    ctx.textAlign = "right";
    ctx.fillText(maxValue, padding - 10, padding + 5);
    ctx.fillText(minValue, padding - 10, canvas.height - padding);

    // Draw line
    ctx.strokeStyle = "#007bff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    data.forEach((d, i) => {
        const x = padding + (i * (chartWidth / (data.length - 1)));
        const y = padding + (1 - (d.value - minValue) / (maxValue - minValue)) * chartHeight;
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            // Animate line drawing
            const prevX = padding + ((i - 1) * (chartWidth / (data.length - 1)));
            const prevY = padding + (1 - (data[i - 1].value - minValue) / (maxValue - minValue)) * chartHeight;
            const animX = prevX + (x - prevX) * progressRatio;
            const animY = prevY + (y - prevY) * progressRatio;
            if (progressRatio < 1 && i === Math.floor(progressRatio * (data.length - 1)) + 1) {
                ctx.lineTo(animX, animY);
            } else if (progressRatio >= (i / (data.length - 1))) {
                ctx.lineTo(x, y);
            }
        }
    });
    ctx.stroke();

    // Draw points
    data.forEach((d, i) => {
        const x = padding + (i * (chartWidth / (data.length - 1)));
        const y = padding + (1 - (d.value - minValue) / (maxValue - minValue)) * chartHeight;
        if (progressRatio >= (i / (data.length - 1))) {
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, Math.PI * 2);
            ctx.fillStyle = "#fff";
            ctx.fill();
            ctx.strokeStyle = "#007bff";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    });
}

// Animation loop
function animate() {
    progress++;
    const progressRatio = Math.min(progress / animationSteps, 1);
    drawChart(progressRatio);
    if (progress < animationSteps) {
        requestAnimationFrame(animate);
    }
}
animate();

// Tooltip logic
canvas.addEventListener('mousemove', function (e) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const padding = 50;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;
    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));

    let found = false;
    data.forEach((d, i) => {
        const x = padding + (i * (chartWidth / (data.length - 1)));
        const y = padding + (1 - (d.value - minValue) / (maxValue - minValue)) * chartHeight;
        if (
            Math.abs(mouseX - x) < 10 &&
            Math.abs(mouseY - y) < 10 &&
            progress >= animationSteps
        ) {
            tooltip.style.opacity = 1;
            tooltip.textContent = `${d.label}: ${d.value}`;
            tooltip.style.left = `${e.clientX + 10}px`;
            tooltip.style.top = `${e.clientY - 30}px`;
            found = true;
        }
    });
    if (!found) {
        tooltip.style.opacity = 0;
    }
});

canvas.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
});