window.drawActivityChart = function () {
    const ctx = document.getElementById("activityChart").getContext("2d");

    new Chart(ctx, { //tạo biểu đồ
        type: "line", 
        data: { //dữ liệu
            labels: ["", "2023/1/3", "2023/7/1", "2024/1/1", "2024/6/30", "W 37 2023"],
            datasets: [
                {
                    data: [null, 150, 100, 250, 300],
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
        options: { //cấu hình hiển thị
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
                    max: 600,
                    ticks: { size: 10, stepSize: 100, color: "#008080" }, 
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
                legend: { display: false }, //chú thích
                tooltip: { enabled: true }, //orverMousePoint

            }
        },
        plugins: [ChartDataLabels] //nhãn trên biểu đồ
    });
}
