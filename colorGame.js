let game, menu, font, bFont, logo, inputField
function preload() {
  inputField = createInput('tu_correo@massa.com')
  menu = loadImage('assets/menu.png')
  logo = loadImage('assets/logo.png')
  font = loadFont('assets/acidgroteskregular.otf')
  bFont = loadFont('assets/acidgroteskbold.otf')

}

function setup() {
    
  //  createCanvas(1080, 1920)
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
function touchStarted(){
  game.mouseClicked()
}
function mouseClicked() {
  game.mouseClicked()
}
