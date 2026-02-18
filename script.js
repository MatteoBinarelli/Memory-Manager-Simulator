let button; 
let p1;
let coordinate = [];

function setup(){
    createCanvas(1200, 600);

    coordinate.push({ 'x': 200, 'y': 100 });
    coordinate.push({ 'x': 200, 'y': 250 });
    coordinate.push({ 'x': 200, 'y': 400 });

    button = createButton('invia processi');
    button.position(100, 100);
    button.mousePressed(partizione)

}

function partizione(){
    for(let i=0; i<coordinate.length; i++){
        rect(coordinate[i].x + 350, coordinate[i].y, 100, 100)
        text('Processo ' + (i + 1), coordinate[i].x+350, coordinate[i].y+20);
    }
}

function draw(){
    background(220);
    text('Memory Manager Simulator - Schema a partizioni fisse', 10, 20);   

    for(let i=0; i<coordinate.length; i++){
        rect(coordinate[i].x, coordinate[i].y, 100, 100);
        text('Processo ' + (i + 1), coordinate[i].x+10, coordinate[i].y+20);
    }

    rect(500, 100, 600, 400);
    text('RAM', 510, 120);
}