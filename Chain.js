class Chain {
    constructor(bodyA,bodyB,offsetX){
        this.offsetX=offsetX;
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB :{x : offsetX,y : 0},
            stiffness : 1,
            length : 500
        }
        this.constraint = Matter.Constraint.create(options);
        World.add(world,this.constraint);
    }
    display(){
        var posA=this.constraint.bodyA.position;
        var posB=this.constraint.bodyB.position;
        strokeWeight(5);
        line(posA.x,posA.y-50,posB.x+this.offsetX,posB.y+25);
    }
}