import '../node_modules/chart.js/dist/chart.umd.js';

const ctx = document.getElementById('pie-chart');
let chart;
let statesAndCounts = new Map();


export function updatePieChart(state, count) {
    
    statesAndCounts.set(state, count);
    
    if (chart) chart.destroy();

    chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: Array.from(statesAndCounts.keys()),
        datasets: [{
            label: 'Task Distribution',
            data: Array.from(statesAndCounts.values()),
        }]
    }
}); 
}
