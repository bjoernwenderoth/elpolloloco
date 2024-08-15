class Cloud extends MovableObject {
    y = 10;
    width = 600;
    height = 350;
    speed = 0.23;

    constructor() {
        super().loadImage('../img/img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 500;
        this.animation();
    }

    
    animation() {
        setInterval(() => {
            this.moveLeft();
        }, 50);
    }
}