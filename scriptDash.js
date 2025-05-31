
// Gráfico de Barras
new Chart(document.getElementById("earningsChart"), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Ganhos (R$)',
            data: [1200, 1900, 3000, 5000, 2300, 3900],
            backgroundColor: 'rgba(37, 99, 235, 0.7)',
            borderColor: 'rgba(37, 99, 235, 1)',
            borderWidth: 1,
            borderRadius: 5,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white',
                    callback: function (value) {
                        return 'R$' + value;
                    }
                },
                grid: { color: '#374151' }
            },
            x: {
                ticks: { color: 'white' },
                grid: { color: '#374151' }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                    boxWidth: 0
                }
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: 'white',
                bodyColor: 'white',
                borderColor: '#374151',
                borderWidth: 1
            }
        }
    }
});

// Gráfico de Pizza
new Chart(document.getElementById("distributionChart"), {
    type: 'pie',
    data: {
        labels: ['Aluguel', 'Venda', 'Serviços'],
        datasets: [{
            data: [40, 30, 30],
            backgroundColor: [
                'rgba(34, 197, 94, 0.7)',
                'rgba(249, 115, 22, 0.7)',
                'rgba(59, 130, 246, 0.7)',
            ],
            borderColor: [
                'rgba(34, 197, 94, 1)',
                'rgba(249, 115, 22, 1)',
                'rgba(59, 130, 246, 1)',
            ],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                    boxWidth: 15
                }
            },
            tooltip: {
                backgroundColor: '#1f2937',
                titleColor: 'white',
                bodyColor: 'white',
                borderColor: '#374151',
                borderWidth: 1,
                callbacks: {
                    label: function (context) {
                        return ` ${context.label}: ${context.raw}%`;
                    }
                }
            }
        }
    }
});