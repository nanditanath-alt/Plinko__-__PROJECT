class Particles{
    constructor(x,y){
        var parameters={
            isStatic: false,
            restitution: 0.4,
            friction: 0.1,
            density: 1.2
        }
        this.r = 5
        this.body = Bodies.circle(x,y,this.r,parameters);
        this.color = color(random(0,255), random(0,255), random(0,255));
        this.trajectory = []

        World.add(world, this.body);
    }

    display(){
        
        var post = [this.body.position.x, this.body.position.y];
        //this.trajectory.push(post)
        var ang = this.body.angle;

      push();
      translate(post.x, post.y);
      rotate(ang);
      imageMode(CENTER);
      noStroke();
      ellipseMode(RADIUS);
     // ellipse(0,0,this.r,this.r);
      pop();

        


        //for(var a = 0; a < this.trajectory.length; a++){
          //  ellipse(this.body, this.trajectory[0][0], this.trajectory[a][1])
        //}
    }
}