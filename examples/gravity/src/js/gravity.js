const gravity=1;
const friction =0.9;

class Ball{

    constructor(x,y,dx,dy,radius,color){

    }

    update(){
        if(this.y+this.radius+this.dy>CanvasGradient.height){
            this.dy-=this.dy*friction;
        }else{
            this.dy+=gravity;
        }

        // ignore x axis

        this.y+=this.dy;
        this.draw();
    }
}