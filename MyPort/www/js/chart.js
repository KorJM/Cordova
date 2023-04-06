var data = {
    labels: ['1학년 1학기', '1학년 2학기','2학년 1학기', '2학년 2학기',
    '3학년 1학기', '3학년 2학기','4학년 1학기', '4학년 2학기',],
    datasets: [
        {
            label: '학점',
            data: [3.0, 2.5, 4.2, 4.3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ]
  };
  
  var options = {
    responsive: true,
    maintainAspectRatio: false
  };

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });