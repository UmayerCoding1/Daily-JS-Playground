// Chart data
const data = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            name: 'Sales',
            color: '#4CAF50',
            values: [65, 59, 80, 81, 56, 55, 40, 70, 85, 90, 75, 88]
        },
        {
            name: 'Revenue',
            color: '#2196F3',
            values: [28, 48, 40, 19, 86, 27, 90, 65, 75, 85, 95, 70]
        },
        {
            name: 'Profit',
            color: '#FFC107',
            values: [45, 35, 60, 45, 65, 40, 50, 55, 70, 80, 65, 75]
        }
    ]
};

// Chart configuration
const config = {
    padding: { top: 20, right: 30, bottom: 30, left: 40 },
    gridLines: 5
};

// Initialize chart
function initChart() {
    const svg = document.getElementById('lineChart');
    const width = svg.clientWidth;
    const height = svg.clientHeight;

    // Calculate scales
    const xScale = (width - config.padding.left - config.padding.right) / (data.months.length - 1);
    const yMax = Math.max(...data.datasets.flatMap(d => d.values));
    const yScale = (height - config.padding.top - config.padding.bottom) / yMax;

    // Draw grid lines
    drawGridLines(svg, width, height, yMax, yScale);

    // Draw lines and points
    data.datasets.forEach((dataset, index) => {
        drawLine(svg, dataset, xScale, yScale, index);
        drawPoints(svg, dataset, xScale, yScale, index);
    });

    // Draw labels
    drawLabels(svg, width, height);

    // Add interactivity
    addInteractivity(svg, xScale, yScale);
}

// Draw grid lines
function drawGridLines(svg, width, height, yMax, yScale) {
    const gridLines = svg.querySelector('.grid-lines');
    const step = yMax / config.gridLines;

    for (let i = 0; i <= config.gridLines; i++) {
        const y = height - config.padding.bottom - (i * step * yScale);
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', config.padding.left);
        line.setAttribute('y1', y);
        line.setAttribute('x2', width - config.padding.right);
        line.setAttribute('y2', y);
        line.setAttribute('class', 'grid-line');
        gridLines.appendChild(line);
    }
}

// Draw line
function drawLine(svg, dataset, xScale, yScale, index) {
    const lines = svg.querySelector('.lines');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    
    let d = `M ${config.padding.left} ${svg.clientHeight - config.padding.bottom - dataset.values[0] * yScale}`;
    
    dataset.values.forEach((value, i) => {
        const x = config.padding.left + (i * xScale);
        const y = svg.clientHeight - config.padding.bottom - (value * yScale);
        d += ` L ${x} ${y}`;
    });

    path.setAttribute('d', d);
    path.setAttribute('class', 'line');
    path.setAttribute('stroke', dataset.color);
    path.setAttribute('data-index', index);
    lines.appendChild(path);
}

// Draw points
function drawPoints(svg, dataset, xScale, yScale, index) {
    const points = svg.querySelector('.points');
    
    dataset.values.forEach((value, i) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        const x = config.padding.left + (i * xScale);
        const y = svg.clientHeight - config.padding.bottom - (value * yScale);
        
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', 4);
        circle.setAttribute('class', 'point');
        circle.setAttribute('fill', dataset.color);
        circle.setAttribute('data-value', value);
        circle.setAttribute('data-month', data.months[i]);
        circle.setAttribute('data-dataset', dataset.name);
        points.appendChild(circle);
    });
}

// Draw labels
function drawLabels(svg, width, height) {
    const labels = svg.querySelector('.labels');
    
    data.months.forEach((month, i) => {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const x = config.padding.left + (i * (width - config.padding.left - config.padding.right) / (data.months.length - 1));
        const y = height - config.padding.bottom + 20;
        
        text.setAttribute('x', x);
        text.setAttribute('y', y);
        text.setAttribute('class', 'label');
        text.setAttribute('text-anchor', 'middle');
        text.textContent = month;
        labels.appendChild(text);
    });
}

// Add interactivity
function addInteractivity(svg, xScale, yScale) {
    const tooltip = document.getElementById('tooltip');
    const points = svg.querySelectorAll('.point');
    const lines = svg.querySelectorAll('.line');
    const legendItems = document.querySelectorAll('.legend-item');

    // Point hover effect
    points.forEach(point => {
        point.addEventListener('mouseover', (e) => {
            const value = e.target.getAttribute('data-value');
            const month = e.target.getAttribute('data-month');
            const dataset = e.target.getAttribute('data-dataset');
            
            tooltip.style.opacity = '1';
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
            tooltip.textContent = `${dataset}: ${value} (${month})`;
        });

        point.addEventListener('mouseout', () => {
            tooltip.style.opacity = '0';
        });
    });

    // Legend click effect
    legendItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const line = lines[index];
            const points = svg.querySelectorAll(`.point[data-dataset="${data.datasets[index].name}"]`);
            
            const isVisible = line.style.opacity !== '0';
            line.style.opacity = isVisible ? '0' : '1';
            points.forEach(point => {
                point.style.opacity = isVisible ? '0' : '1';
            });
            item.style.opacity = isVisible ? '0.5' : '1';
        });
    });
}

// Initialize chart when window loads
window.addEventListener('load', initChart);
window.addEventListener('resize', () => {
    const svg = document.getElementById('lineChart');
    svg.innerHTML = '';
    initChart();
}); 