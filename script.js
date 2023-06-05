let fiels = [
    null,
  'circle',
  'circle',
  'circle',
  null,
  null,
  'cross',
  'cross',
  null,
];

function init(){
    render();
}

// render function
function render(fields) {
    const content = document.getElementById('content');
    const table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
        const cell = document.createElement('td');
        const fieldValue = fiels[i * 3 + j];
        if (fieldValue) {
            cell.textContent = fieldValue === 'circle' ? 'o' : 'x';
        }
        row.appendChild(cell);
    }
        table.appendChild(row);
    }

    content.innerHTML = '';
    content.appendChild(table);
}

