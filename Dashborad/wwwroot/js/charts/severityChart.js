function drawSeverityChart() {
    const ctx = document.getElementById("severityChart").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["","2023/1/3", "2023/7/1", "2024/1/1", "2024/6/30", "W 37 2023"],
            datasets: [
                {
                    label: "FEV1 %pred",
                    data: [null, 70, 68, 65.2, 65],
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
                    grid: { display: false },
                    ticks: { color: "#008080" }
                },
                y: {
                    title: { display: true, text: "FEV1 %pred", color: "#333", font: { size: 14} },
                    min: 60,
                    max: 100,
                    ticks: { stepSize: 5, color: "#008080" },
                    grid: { drawOnChartArea: false, drawTicks: true, tickLength: 10, borderTicks: true  }
                }
            },
            plugins: {
                datalabels: {  // Hiển thị giá trị trên mỗi nốt
                    align: 'top',
                    color: 'white',
                    font: { weight: 'bold' },
                    backgroundColor: 'lightblack',
                    offset: 10, 
                    formatter: (value, ctx) => value // Hiển thị giá trị trực tiếp
                },
                legend: { display: false },
                tooltip: { enabled: true }
            }

        },
        plugins: [ChartDataLabels]
    });
}
