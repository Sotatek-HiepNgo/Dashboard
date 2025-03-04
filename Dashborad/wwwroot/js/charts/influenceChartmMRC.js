window.drawInfluenceChartmMRC = function () {
    const ctx = document.getElementById("influenceChartmMRC").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["", "2023/1/3", "2023/7/1", "2024/1/1", "2024/6/30", "W 37 2023"],
            datasets: [
                {
                    data: [null, 2, 2, 3, 4],
                    borderColor: "#4B2354",
                    backgroundColor: "rgba(75, 35, 84, 0.2)",
                    borderWidth: 2,
                    pointBackgroundColor: "#fff",
                    pointBorderColor: "#4B2354",
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: { display: true, text: "Check date", color: "#333", font: { size: 14 } },
                    ticks: { size: 10, color: "#008080" },
                    grid: { display: false }
                },
                y: {
                    min: 0,
                    max: 5,
                    ticks: { size: 10, stepSize: 1, color: "#008080" },
                    grid: { drawOnChartArea: false, drawTicks: true, tickLength: 10, borderTicks: true }
                }
            },
            plugins: {
                datalabels: {
                    align: 'top',
                    color: 'white',
                    font: { weight: 'bold' },
                    backgroundColor: 'black',
                    offset: 10,
                    formatter: (value) => value
                },
                legend: { display: false },
                tooltip: { enabled: true },

            }
        },
        plugins: [ChartDataLabels]
    });
}
