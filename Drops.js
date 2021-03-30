class Drops{
constructor(x,y,radius){
var options={
    isStatic : true,
    friction : 0.1
}
 

this.body = Bodies.circle(this.x,this.y,this.r,options);
this.x = x
this.y = y
this.radius = 10

World.add(world,this.body);
}
display() {
    if(framecount % 60 === 0)
    
    {
        var pos=this.body.position;		

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER)
        
        fill(rgb(0,21,64));
        
        pop();
    }

} 






}