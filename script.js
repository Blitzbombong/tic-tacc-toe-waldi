let fields = [
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
        const fieldValue = fields[i * 3 + j];
        
        if (fieldValue === 'circle') {
            const circleSVG = generateCircleSVG();
            cell.innerHTML = circleSVG;
        } else if (fieldValue === 'cross') {
            const crossSVG = generateCrossSVG();
            cell.innerHTML = crossSVG;
        }
        
        row.appendChild(cell);
        }
        table.appendChild(row);
    }

    content.innerHTML = '';
    content.appendChild(table);
}

render(fields);


//SVG HTML Animation
function generateCircleSVG() {
    const color = "#00B0EF";
    const width = 70;
    const height = 70;

    const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
        <circle cx="${width / 2}" cy="${height / 2}" r="${width / 2}" fill="${color}">
        <animate attributeName="r" from="0" to="${width / 2}" dur="70ms" fill="freeze" />
        </circle>
    </svg>`;

    return svgCode;
}


function generateCrossSVG() {
    const color = "#FFC000";
    const width = 70;
    const height = 70;

    const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
        <line x1="0" y1="0" x2="${width}" y2="${height}" stroke="${color}" stroke-width="5">
            <animate attributeName="stroke-dasharray" from="0,${Math.sqrt(width ** 2 + height ** 2)}" to="${Math.sqrt(width ** 2 + height ** 2)},${Math.sqrt(width ** 2 + height ** 2)}" dur="40ms" fill="freeze" />
        </line>
        <line x1="0" y1="${height}" x2="${width}" y2="0" stroke="${color}" stroke-width="5">
            <animate attributeName="stroke-dasharray" from="0,${Math.sqrt(width ** 2 + height ** 2)}" to="${Math.sqrt(width ** 2 + height ** 2)},${Math.sqrt(width ** 2 + height ** 2)}" dur="40ms" fill="freeze" />
        </line>
    </svg>`;

    return svgCode;
}