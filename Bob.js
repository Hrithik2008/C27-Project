class Bob{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 1,
            friction : 0,
            density : 0.6
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
       
        push();
        
        translate(pos.x,pos.y);
        rotate(angle);

        fill("hotpink");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);

        pop();
    }
}