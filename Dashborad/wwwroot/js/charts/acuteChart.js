window.drawAcuteChart = function () {
    var canvas = document.getElementById("acuteChart");
    var ctx = canvas.getContext("2d");

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [0.58, 0.42], // Đổi thành số thực để dễ đọc
                backgroundColor: ["#BE0000", "transparent"],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "80%",
            plugins: {
                legend: { display: false },
                tooltip: { enabled: true }
            }
        },
        plugins: [{
            id: 'textCenter',
            afterDraw: function (chart) { // Hook beforeDraw chạy sau khi vẽ biểu đồ
                var width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx;

                ctx.restore();
                var fontSize = (height / 5).toFixed(2); // Kích thước chữ theo tỷ lệ biểu đồ
                ctx.font = "bold " + fontSize + "px Arial"; // Đặt font chữ
                ctx.textBaseline = "middle"; // Căn chữ theo chiều dọc

                var text = chart.data.datasets[0].data[0]; // Lấy dữ liệu đầu tiên
                var textX = Math.round((width - ctx.measureText(text).width) / 2); // Căn giữa theo chiều ngang
                var textY = height / 2; // Căn giữa theo chiều dọc

                ctx.fillStyle = "#B20000";
                ctx.fillText(text, textX, textY); // Vẽ số liệu ở giữa biểu đồ
                ctx.save();
            }
        }]

    });
};



