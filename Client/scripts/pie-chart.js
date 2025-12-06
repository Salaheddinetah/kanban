import '../node_modules/chart.js/dist/chart.umd.js';

const ctx = document.getElementById('pie-chart');

let statesAndCounts = new Map();

statesAndCounts.set('To Do', 19);
statesAndCounts.set('In Progress', 9);
statesAndCounts.set('Done', 12);

let chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: Array.from(statesAndCounts.keys()),
        datasets: [{
            label: 'Task Distribution',
            data: Array.from(statesAndCounts.values()),
        }]
    }
}); 