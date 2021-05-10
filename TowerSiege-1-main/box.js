class Box {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.7,
          friction:0.8
      }
      this.image=loadImage("images/Walking Frame/walking_1.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
    
 
        
          var pos =this.body.position;
          push();
          imageMode(CENTER);
        
          image(this.image,pos.x, pos.y, this.width, this.height);
          pop(); 
     
    }
  };
