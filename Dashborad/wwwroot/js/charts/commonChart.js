// Chart.js - General Charts (Line, Bar, etc.)
window.createChart = function (canvasId, chartType, labels, data, labelName, color) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: labelName,
                data: data,
                borderColor: color,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { title: { display: true, text: 'X-Axis' } },
                y: { title: { display: true, text: 'Y-Axis' } }
            }
        }
    });
};

// Google Charts - Donut Chart
window.drawCommonChart = (elementId, value, options) => {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ["Label", "Value"],
            ["Actual", value],
            ["Remaining", 1 - value],
        ]);

        var chartOptions = {
            width: options.size,
            height: options.size,
            pieHole: options.pieHole,
            pieSliceText: "none",
            slices: {
                0: { color: options.actualColor },
                1: { color: options.backgroundColor },
            },
            legend: "none",
        };

        var chart = new google.visualization.PieChart(document.getElementById(elementId));
        chart.draw(data, chartOptions);

        document.getElementById("center_text_" + elementId).innerHTML = value.toFixed(2);
    }
};