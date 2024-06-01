class Game {

  constructor() {

    this.animation = new Animation()
      this.gState = 0
      this.lvl  = 1
      this.div = 3
      this.life = 1
      this.tamX = width/this.div/5
      this.tamY = height/this.div/5
      this.canClick = false
      this.circleCount = 0
      this.isOk = false
      this.calculateRandom()
      this.fadeReturn = true
      this.fadeValue = 1
      this.initialEffect = 0
      this.buttonMenuW = 0
      this.fadeRestart = 0
      this.activateRestart  = false

      this.canplay = 0
  }

  calculateRandom() {

    let changed = false
      this.total = this.div * this.div
      this.total = this.total-1
      this.diff = 255 / (this.lvl + 1)

      if (this.lvl % 2 != 0 && this.lvl % 3 != 0  && changed != true) {


      this.r =  0
        this.g =  0
        this.b =  255
        changed = true

        this.realColor = color(this.r, this.g, this.b)
        this.fakeColor = color(this.r, this.g, this.b - this.diff)

        this.randomCircle = int(random(0, this.total))
    } else if (this.lvl % 2 == 0 && changed!= true) {

      this.r =  0
        this.g =  255
        this.b =  0
        changed = true
        this.realColor = color(this.r, this.g, this.b)
        this.fakeColor = color(this.r, this.g - this.diff, this.b )
        this.randomCircle = int(random(0, this.total))
    } else if (this.lvl % 3 == 0 && changed!= true) {

      this.r =  255
        this.g =  127
        this.b =  255
        changed = true
        this.realColor = color(this.r, this.g, this.b)
        this.fakeColor = color(this.r, this.g - this.diff, this.b)
        this.randomCircle = int(random(0, this.total))
    }

    if (this.randomCircle < 0) {

      this.randomCircle = 0
    }
  }

  draw() {

    this.canplay++
      if (this.activateRestart) {
      this.fadeRestart++
        if (this.fadeRestart >= 255) {
        if (this.gState != 2) {
          this.restart()
        }
      }
    }

    if (this.gState == 0) {

      this.drawMenu()
    }
    if (this.gState == 1) {

      this.drawGame()
    }

    if (this.gState == 2) {

      this.drawWin()
    }
    if (this.gState == 3) {

      this.drawLoos()
    }

    if (this.gState == 4) {

      this.drawScoreScreen()
    }
  }

  drawScoreScreen () {
    background(0)
  }

  drawLoos() {

    push()
      background(0)
      fill(255, 0, 0, this.fadeRestart)
      rect(0, 0, width, height)
      fill(255, this.fadeRestart)
      textSize(12)
      textAlign(CENTER, CENTER)
      text(":( ¡PERDISTE!", width/2, height/2)
      text("Gracias por jugar,", width/2, height/2+24)
      text("intentalo de nuevo", width/2, height/2+48)
      pop()
  }

  drawWin() {

    background(0)

      push()

      fill(0, 255, 0, this.fadeRestart)
      rect(0, 0, width, height)
      fill(255)

      textSize(12)

      textAlign(CENTER, CENTER)

      text(":) ¡GANASTE!", width/2, height/2)
      text("Gracias por jugar.", width/2, height/2+24)
      text("Deja tu correo para contactarnos", width/2, height/2+48)



      pop()
  }

  restart() {

    this.gState = 0
      this.lvl  = 1
      this.div = 3
      this.life = 1
      this.tamX = width/this.div
      this.tamY  = height/this.div
      this.circleCount = 0
      this.activateRestart = false
      this.fadeRestart = 0
      this.randomCircle = this.calculateRandom()

  }

  addMail() {
    //
    let val = inputField.value()
      //console.log(document.getElementsByTagName['input'][0])
      //  alert(this.input.value())
      saveJSON(val, 'mail.json', true)
      game.restart()
  }
  drawGame() {

    background(255)

      if (this.activateRestart) {
    } else {

      this.tamX = width/this.div
        this.tamY = height/this.div
        if (this.randomCircle == undefined) {

        this.calculateRandom()
      }

      this.circleCount=0

        for (let i = 0; i < this.div; i++) {
        for (let j = 0; j < this.div; j++) {

          if (this.circleCount == this.randomCircle) {
            fill(this.fakeColor)
              circle(i * this.tamX + this.tamX / 2, height/2.5 + j  * this.tamY/2, width/6)
          } else {
            fill(this.realColor)
              circle(i * this.tamX + this.tamX / 2, height/2.5 + j  * this.tamY/2, width/6)
          }

          if (dist(mouseX, mouseY, i * this.tamX + this.tamX / 2, height/2.5 + j  * this.tamY/2) < width/6/2) {

            //   rect(mouseX,mouseY, 200,200)
          }
          this.circleCount++
        }
      }

      this.drawLifes()
        this.circleCount = 0
    }
  }

  drawLifes() {

    push()
      rectMode(CENTER)
      textAlign(CENTER, CENTER)
      fill(0, 0, 255)
      rect(width/2, height - height/10, width/4, height/20, 180)
      textSize(32)
      fill(255)
      textFont(bFont)
      fill(0)
      image(logo, width/2, height/8, logo.width/2, logo.height/2)
      text("ENCONTRÁ EL COLOR ", width/2, height/5)
      text("QUE ESTÁ FUERA DE TONO", width/2, height/4)

      textAlign(CENTER, CENTER)
      fill(255)
      text("NIVEL "+ this.lvl, width/2, height - height/10 - 8)
      //text("Circle: "+ this.randomCircle, width/2, 144)
      pop()
  }



  fadeIn() {

    if (this.initialEffect == 0) {

      if ( this.fadeValue < 1 &&  this.fadeReturn == false) {

        this.fadeValue  =   this.fadeValue + 0.01

          if (this.fadeValue  >= 1) {

          this.fadeReturn = true
        }
      } else  if ( this.fadeValue  > 0 && this.fadeReturn == true) {

        if (this.fadeValue  >= 0) {
          this.fadeValue  =   this.fadeValue - 0.01

            if (this.fadeValue == 0) {
          }
        }
      }

      fill(255, this.fadeValue )

        rect(0, 0, width, height)
    }
  }

  menuButtonAnimation () {
    this.buttonMenuW++
      if (this.buttonMenuW > 100) {
      this.buttonMenuW = 0
    }
  }

  drawMenu() {

    background(0)

      // image(menu, width/2, height/2, width, height)

      push()
      this.animation.playAnimation()
      //  fill(0, 0, 255)
      //  this.menuButtonAnimation()

      pop()

      this.fadeIn()
  }

  clickOnMenu () {
    if (dist(mouseX, mouseY, this.animation.initialXCircle, height/2) < this.animation.sizeCircle/2) {
      this.gState = 1
    }
  }

  clickOnPlay() {

    let countOnClick = 0
      for (let i = 0; i < this.div; i++) {
      for (let j = 0; j < this.div; j++) {
        i * this.tamX + this.tamX / 2, height/2.5 + j  * this.tamY/2, width/6

          if (dist(mouseX, mouseY, i * this.tamX + this.tamX / 2, height/2.5 + j  * this.tamY/2) < width/6/2) {

          if (countOnClick == this.randomCircle) {
            this.lvl++
              if (this.lvl >= 12) {
              this.gState = 2
                this.activateRestart = true
                this.button = createButton("enviar")
                inputField = createInput('tu_correo@massa.com')
                inputField.position(width/3, height/1.5)
                this.button.position(inputField.x+inputField.width, height/1.5)
                this.button.mousePressed(this.addMail)
            } else {
              this.calculateRandom()
            }
          } else {
            this.life--
              if (this.life <= 0) {
              this.gState = 3
                this.activateRestart = true
            }
          }
        }
        countOnClick++
      }
    }
  }


  mouseClicked() {

      if (this.gState == 0 && this.canplay > 30) {
      this.canplay  = 0
        this.clickOnMenu()
    }

    if ( this.gState == 1 && this.canplay > 30) {
      this.canplay = 0

        this.clickOnPlay()
    }
  }
}
