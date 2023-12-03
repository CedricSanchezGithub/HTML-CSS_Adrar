/*
// A1
// Initialisation (ce qui était directement sur le site)
setPos(300,300);
changeColor(color.red);
faceDown();

// Réalisation (ce que moi j'ai fait avec les blocs)
forward(200);
faceRight();
forward(100);

// A2
// Initialisation
setPos(300,300);
changeColor(color.yellow); 

// Réalisation
faceLeft(); // regard à gauche
forward(100); // Avancer de 100px
faceDown(); // regard en bas
forward(100); // Avancer de 100px
faceRight(); // regard à droite
forward(200); // Avancer de 200px
faceUp(); // regard en haut
forward(200); // Avancer de 200px


// A3
// Initialisation
setPos(300,300);
changeColor(color.fuchsia); 

// Réalisation
// forward = avancer(pixel)
// faceX = direction
forward(100);
faceUp();
forward(100);
faceDown();
forward(50);
faceLeft();
forward(50);
faceRight();
forward(100);

// A4
// Initialisation
setPos(300,300);
changeColor(color.blue); 

// Réalisation
// faceX = direction
// forward = avancer(pixel)
// arcRight(50,180) = arcDirection(rayon, angle)
faceRight();
forward(100);
arcLeft(50,180)
forward(50);
arcRight(50,180)
forward(100);


// A5
// Initialisation
setPos(300,300);
changeColor(color.aqua); 

// Réalisation
// arcRight(50,180) = arcDirection(rayon, angle)
// faceX = direction
faceRight();
arcLeft(100,180);
arcLeft(100,180);
faceLeft();
arcRight(50,180);
arcLeft(50,180);


// A6
// Initialisation
setPos(300, 400); // fix de l'axe y pour mieux centrer l'élément
changeColor("#8b22b5"); 

// Réalisation
// faceX = direction
// up() = stop écrire
// start() = commencer à écrire
// forward = avancer(pixel)


faceUp();
forward(50);
up();
forward(50);
down();
forward(100);


// A7
// Initialisation
setPos(300, 400); 
changeColor(color.green); 

// Réalisation
// faceX = direction
// up() = stop écrire
// down() = commencer à écrire
// forward = avancer(pixel)

faceDown();
forward(100);
arcLeft(50,180);
forward(50);
up();
forward(50);
down();
forward(100);
arcLeft(50, 180);
forward(50);
up();


// B1
// Initialisation
setPos(100,100);
faceRight();
changeColor(color.green);
setLineWidth(5);

// Réalisation
for(let i = 0; i < 4 ; i++) {
    // Une marche
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}


// B1
// Initialisation
setPos(200, 200);
faceRight();
changeColor(color.green);
setLineWidth(5);

// Réalisation
faceUp();
for(let i = 0; i < 4; i++) {
    faceUp();
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight()
    forward(50);
}

// B3
// Initialisation
setPos(200, 200);
changeColor(color.green);
setLineWidth(10);

// Réalisation
faceRight();
for(let i = 0; i < 4; i++)  {
    forward(100);
    right(90);
}

// B4
// Initialisation
setPos(200, 200);
changeColor(color.green);
setLineWidth(10);

// Réalisation
faceRight();

for (let i = 0; i <3; i++) {
    forward(100);
    right(-120);
}


// B5
// Initialisation
setPos(200, 300);
changeColor(color.black);
setLineWidth(10);

// Réalisation
faceUp();
forward(100);
changeColor(color.red)
for (let i = 0; i < 3; i++) {
    forward(50);
    right(120);
}


// B6
// Initialisation
setPos(200, 300);
setLineWidth(10);

// Réalisation
faceRight();

// Escaliers rouge
changeColor(color.red);
for(let i=0; i<3; i++){
    forward(50);
    left(90)
    forward(50);
    right(90)
}

// Escaliers vert
changeColor(color.green);
for(let i=0; i<4; i++){
    forward(50);
    right(90);
    forward(50);
    left(90);
}


// B6
// Initialisation
setPos(200, 300);
setLineWidth(10);
faceRight();

// Réalisation
// Toit
for (let i = 0; i < 3; i++) {
    forward(100);
    left(120);
}
faceDown(); 
// Bas de la maison
for (let i=0; i < 4; i++) {
    forward(100);
    left(90);
}

// B8
// Initialisation
setPos(200, 300);
setLineWidth(10);
faceRight();

// Une belle Étoile
for (let i = 0; i < 10; i++){
    forward(100);
    right(135)
}


// B10
// Initialisation
setPos(200, 300);
setLineWidth(5);
faceRight();

// Une belle étoile 1
changeColor(color.blue);
for (let i = 0; i < 8; i++) {
    forward(50);
    right(135);
}

// Initialisation 2
changeColor(color.yellow);
up();
forward(100);
down();

// Une belle étoile 2
for (let i = 0; i < 8; i++) {
    forward(100);
    left(135);
}

// Initialisation 3
changeColor(color.fuchsia);
faceDown();
up();
forward(100);
down();

// Une belle étoile 3 
for (let i = 0; i < 8; i++) {
    forward(50);
    right(135);
}

// B13
// Initialisation
setPos(200, 100);
setLineWidth(5);
faceRight();

// Réalisation & répétition du bloc
for (let i = 0; i < 8; i++) {
    forward(100);
    left(135);
    forward(50);
    right(90);
    forward(50);
    right(90);
    forward(100);
}

// C1
// Initialisation
setPos(200, 100);
setLineWidth(5);
faceRight();

//Réalisation
for (let j = 0; j < 4; j++) { // triangle x 4
    for (let i = 0; i < 3; i++) { // 1 triangle
        forward(100);
        right(120);
    }
    faceRight();
    forward(100);
}


// C4
// Initialisation
setPos(100, 200);
setLineWidth(5);
faceRight();

// Réalisation
for (i = 0; i < 5; i++) { // Maison x 5
    changeColor(color.red);
    for (j = 0; j < 3; j++) { // Toit d'une Maison
        forward(50);
        left(120);
    }
    changeColor(color.black);
    faceRight();
    for (j = 0; j < 4; j++) { // Bloc d'une Maison
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}


// C5
// Initialisation
setPos(100, 200);
setLineWidth(5);
faceRight();
shiftColor(0.15);

//Réalisation
for (let i = 0; i < 4; i++) { // étoiles x4
  for (let i = 0; i < 8; i++) { // étoile
    forward(100);
    left(135);
}
right(90);
shiftColor(0.25); // décaler la couleur de 25% à chaque occurence 
}

*/

// // C5
// // Initialisation
// let fractal = 10;

// setPos(200, 300);
// setLineWidth(5);
// faceRight();
// shiftColor(0);

// for (let i = 0; i < 100; i++) {
//   fractal = fractal + 1;

//   for (let j = 0; j < 3; j++) {
//     forward(100 - fractal);
//     right(120);
//     shiftColor(0.01);
//   }
//   forward(100 - fractal);
//   left(45);
// }


// Initialisation
setPos(200, 200);
setLineWidth(50);
faceRight();

changeColor(color.aqua);
arcRight(50,360);

faceRight();
up();
forward(100);
down();
arcRight(50,360);


