document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("pie-chart");
  const ctx = canvas.getContext("2d");
  const legend = document.getElementById("pei-chart-legend");
  const form = document.getElementById("slice-form");

  const chartData = [
    { label: "Slice A", value: 50, color: "blue" },
    { label: "Slice B", value: 150, color: "green" },
  ];

  let animationProgress = 0;
  const animationSpeed = 0.02;

  function drawPieChart(data, animation = true) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const total = data.reduce((acc, item) => acc + item.value, 0);
    let startAngle = 0;

    data.forEach((slice) => {
      const sliceAngle =
        (slice.value / total) * Math.PI * 2 * animationProgress;
      const endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
        startAngle,
        endAngle
      );
      ctx.closePath();
      ctx.fillStyle = slice.color;
      ctx.fill();
      startAngle += sliceAngle;
    });

    if (animation && animationProgress < 1) {
      animationProgress = animationProgress + animationSpeed;
      requestAnimationFrame(() => drawPieChart(chartData));
    }
  }

  function updateLegend(data) {
    const total = data.reduce((acc, item) => acc + item.value, 0);
    legend.innerHTML = "";

    data.forEach((slice) => {
      const percent = ((slice.value / total) * 100).toFixed(2);

      legend.innerHTML += `
            <div class="legend-item">
                <span class="legend-color" style="background-color: ${slice.color};"></span>
                <span class="legend-label">${slice.label}: ${percent}%</span>
            </div>
        `;
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const label = form.elements["label"].value;
    const value = parseInt(form.elements["value"].value);
    const color = form.elements["color"].value;
    const newSlice = { label, value, color };

    if (label && value && color) {
      chartData.push(newSlice);
      animationProgress = 0; // Reset animation progress
      drawPieChart(chartData);
      updateLegend(chartData);
      form.reset();
    }
  });

  drawPieChart(chartData);
  updateLegend(chartData);
});
