var data = {
    labels: ['해운대 해수욕장', '광안리해변', '자갈치시장', '국제시장', 'BIFF광장', '태종대'],
    datasets: [
        {
            label: '21년 통합',
            data: [58.4, 31.7, 31.5, 29.7, 22.6, 24.4],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
        {
            label: '21년 내국인',
            data: [51.3, 16.5, 13.8, 8.6, 0.9, 24.1],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        },
        {
            label: '21년 외국인',
            data: [65.5, 46.9, 49.1, 50.6, 44.1, 24.6],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
        }
    ]
};

// 차트 생성
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 100
                }
            }]
        },
        maintainAspectRatio: false,
        responsive:true
    }
});
