class pig {
   
    constructor(x,y) {
      var option = {
        'restitution' : 0.8,
        'friction' : 1.0,
        'density' : 1.0
      }
       this.body = Bodies.rectangle(x,y,50,50,option);
       this.w = 50;
       this.h = 50;
       World.add(world,this.body);
       
     }
      display() {
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       rectMode(CENTER);
       fill("green");
       rect(0,0,this.w,this.h);
       pop()
      }
    }
    