class Car{
  constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    // better moment of car initlizing speed and accleration etc
    this.speed = 0;
    this.accleration = 0.6;
    this.maxSpeed = 2;
    this.friction = 0.2; 
    this.angle = 0;

    this.controls = new Controls();
    
  }

  // library (Box2D)

  // to move the car with the keyboard press 
  update(){
    this.#move();
  }

  #move(){
    if(this.controls.forword){
        this.speed += this.accleration;
    }
    if(this.controls.reverse){
        this.speed -= this.accleration;
    }
    if(this.speed>this.maxSpeed){
        this.speed = this.maxSpeed;
    }
    if(this.speed<-this.maxSpeed/2){
        this.speed =- this.maxSpeed/2;
    }
    if(this.speed>0){
        this.speed -= this.friction;
    }
    if(this.speed<0){
        this.speed += this.friction;
    }
    if(Math.abs(this.speed)<this.friction){ // see 
        this.speed = 0;
    }

    if(this.speed!=0){
        const flip = this.speed>0?1:-1;

    // left and right 
    if(this.controls.left){
        this.angle += 0.03*flip;
    }
    if(this.controls.right){
        this.angle -= 0.03*flip;
    }


    }
    this.x -= Math.sin(this.angle)*this.speed;
    this.y -= Math.cos(this.angle)*this.speed;
    // this.y -= this.speed; // see 
  }

  draw(ctx){
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(-this.angle);

    ctx.beginPath();
    ctx.rect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );

    ctx.fill();

    ctx.restore();
  }

}
