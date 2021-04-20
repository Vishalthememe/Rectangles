//class otherwise called blueprint

class Box{
    //properties
    constructor(x,y,width,height){
        //made a body
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;

        //added to game world
        World.add(world,this.body);

    }
     




    //functions
  display(){
      var pos=this.body.position;
      var angle=this.body.angle

      push();
      translate(pos.x,pos.y);
      rotate(angle);


      fill("green")
      rectMode(CENTER)
      rect(0,0,this.width,this.height);
      pop();
  }


}