class DrawableObject {

    width = 100;
    height = 150;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
    offsetY = 0;
    x = 100;
    y = 95;
    img;
    imageCache = {};
    currentImage = 0;
   

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    loadImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    drawBorder(ctx) {
        if (this.objects()) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - (this.offset.left + this.offset.right),
                this.height - (this.offset.top + this.offset.bottom));
            ctx.stroke();
        }
    }

    
    objects() {
        this instanceof Character ||
        this instanceof Chicken ||
        this instanceof Chick ||
        this instanceof Coin ||
        this instanceof Bottle ||
        this instanceof ThrowableObject ||
        this instanceof Endboss
    }
}