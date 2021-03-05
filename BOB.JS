class Bob{
    constructor(x,y){

        var Options={
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body=Bodies.circle(x,y,30,Options)
        this.radius=30
        World.add(world,this.body)

    }
    display(){
     push()
     
     translate(this.body.position.x,this.body.position.y)
     angleMode(RADIANS)
     rotate(this.body.angle)
     fill("red")
     ellipseMode(RADIUS)
     ellipse(0,0,this.radius,this.radius)   
     pop()
     
    }
}
   
