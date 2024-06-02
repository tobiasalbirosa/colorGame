let game, menu, font, bFont, logo, logoSimple, inputField, inputs, buttons

function preload() {
  
    menu = loadImage('assets/menu.png')
    logo = loadImage('assets/logo.png')
    logoSimple = loadImage('assets/simplelogo.png')
    font = loadFont('assets/acidgroteskregular.otf')
    bFont = loadFont('assets/acidgroteskbold.otf')
}

function setup() {

    createCanvas(windowWidth, windowHeight)
    background(255, 0, 255)
    game = new Game()
    noStroke()
    ellipseMode(CENTER)
    imageMode(CENTER)
    textFont(font)
}

function draw() {
  game.draw()
}
function touchStarted() {
  game.mouseClicked()
}
function mouseClicked() {
  game.mouseClicked()
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
