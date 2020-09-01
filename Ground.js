class Ground {
    constructor(x, y, width, height) {

        var  handsup={
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, handsup);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    Display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("Red");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}