$('.counter-up').counterUp({
    time: 1500
});
var op = document.getElementById('op');
var opChart = new Chart(op, {
    type: 'doughnut',
    data: {
        labels: ['YGN', 'MDY', 'TGI', 'NPT'],
        datasets: [{
            label: '# of Votes',
            data: [25, 32, 12, 15],
            backgroundColor: [
                '#dc3545b9',
                '#28a745b9',
                '#ffc107b9',
                '#17a2b8b9'
            ],
            borderColor: [
                '#dc3545',
                '#28a745',
                '#ffc107',
                '#17a2b8'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display: true
            }],
            xAxes: [{
                display: true

            }]
        },
        legend: {
            labels: {
                usePointStyle: true,
            },
            position: 'bottom'
        },
        animation: {
            duration: 1000,
        },
    }
});
// ----------------------Chart---------------------------------------------//
// Chart.Legend.prototype.afterFit = function () {
//     this.height = this.height + 10;
// };
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'],
        datasets: [{
            label: 'Viewers',
            data: [12, 24, 13, 25, 12, 33, 20],
            backgroundColor: [
                '#007bff40'
            ],
            borderColor: [
                '#007bff'
            ],
            borderWidth: 1,
            lineTension: 0.2
        }, {
            label: 'Orders',
            data: [40, 30, 35, 28, 40, 30, 33],
            backgroundColor: [
                '#ffc10740'
            ],
            borderColor: [
                '#ffc107'
            ],
            borderWidth: 1,
            lineTension: 0.2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                    display: false,
                },
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        },
        legend: {
            labels: {
                usePointStyle: true
            }
        },
        animation: {
            duration: 4000,
        }
    }
});

// ---------------------------------------Data Table-----------------------------------------//
$('#sub-table').DataTable({
    "aLengthMenu": [
        [5, 10, 15, -1],
        [5, 10, 15, "All"]
    ],
    "iDisplayLength": 5,
    "bLengthChange": false,
    "searching": false
});