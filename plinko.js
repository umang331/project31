class plinko{
    constructor(x,y){
        var option  = {
            isStatic : true
        }
        this.r= 10;
        this.body = Bodies.circle(x,y,this.r,option);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}