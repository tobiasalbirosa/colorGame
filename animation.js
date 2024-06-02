class Animation {

  constructor() {
    this.sizeCircle = width/20
      this.initialXCircle = width/3-this.sizeCircle
      this.opacity = 0
      this.xLogo = this.initialXCircle
  }
  restart() {
    this.sizeCircle = width/20
      this.initialXCircle = width/3-this.sizeCircle
      this.opacity = 0
      this.xLogo = this.initialXCircle
  }
  playAnimation() {
    background(0, 0, 255)
      if (this.opacity < 255) {
      this.opacity+=2
    } else {
      if (this.xLogo <= width * 2) {
        this.xLogo+=10
      }
      if (this.initialXCircle <= width/2) {
        this.initialXCircle+=3
      } else {

        this.sizeCircle+=1
          if (this.sizeCircle > width/5) {
          this.sizeCircle = width/10
        }
      }
    }
    fill(255, this.opacity)
      tint(255, this.opacity)
      circle(this.initialXCircle, height/2, this.sizeCircle)
      image(logoSimple, this.xLogo + logoSimple.width/3, height/2, logoSimple.width/2, logoSimple.height/2)
  }
}
