let grid = document.getElementById('grid');

function createGrid(height, width) {
    for (let i = 0; i < height; i++) {
        var newRow = document.createElement('div');
        newRow.classList.add('row');
        for (let j = 0; j < width; j++) {
            var newSquare = document.createElement('div');
            newSquare.classList.add('square')
            newRow.appendChild(newSquare);

        }
        grid.appendChild(newRow);
    }

}
createGrid(50, 50);

let currentColor = '';

function changeColor(event) {
    event.srcElement.style.backgroundColor = currentColor;
    event.srcElement.style.border = `${currentColor}`

}


function selectColor(event) {
    circleClasses = event.srcElement.className;
    currentColor = circleClasses.split(' ')[1];
    console.log(currentColor)
    console.log(event);
}

function refresh() {
    //for "Clear" button
}