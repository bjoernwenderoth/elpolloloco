

let level1;

function initLevel1() {

    level1 = new Level1(
        [
            new Endboss(),
            new Chicken(),
            new Chick(),
      
        ],
        
        [
            new Coin(0, -300, 100),
            new Coin(1, -300, 200),
            new Coin(2, -300, 300),
            new Coin(3, 500, 200),
        ],
        
        [
            new Bottle(0, -100, 330),
            new Bottle(0, -200, 330),
            new Bottle(0, 0, 330),
            new Bottle(0, 100, 330),
            new Bottle(0, 200, 330),
            new Bottle(0, 300, 330),
            new Bottle(0, 400, 330),
            new Bottle(0, 500, 330),
            new Bottle(0, 600, 330),
            new Bottle(0, 700, 330),

        ],

        [
            new Cloud(),
        ],

        [
            //FOR-SCHLEIFE EINFÜGEN?!
            new BackgroundObject('img/img/5_background/layers/air.png', -719),
            new BackgroundObject('img/img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('img/img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('img/img/5_background/layers/1_first_layer/2.png', -719),

            new BackgroundObject('img/img/5_background/layers/air.png', 0),
            new BackgroundObject('img/img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/img/5_background/layers/1_first_layer/1.png', 0),

            new BackgroundObject('img/img/5_background/layers/air.png', 719),
            new BackgroundObject('img/img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('img/img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('img/img/5_background/layers/1_first_layer/2.png', 719),

            new BackgroundObject('img/img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('img/img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('img/img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('img/img/5_background/layers/1_first_layer/1.png', 719 * 2),

            new BackgroundObject('img/img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('img/img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('img/img/5_background/layers/1_first_layer/2.png', 719 * 3),

            new BackgroundObject('img/img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('img/img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new BackgroundObject('img/img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new BackgroundObject('img/img/5_background/layers/1_first_layer/1.png', 719 * 4),

            new BackgroundObject('img/img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('img/img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObject('img/img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObject('img/img/5_background/layers/1_first_layer/2.png', 719 * 5),

            new BackgroundObject('img/img/5_background/layers/air.png', 719 * 6),
            new BackgroundObject('img/img/5_background/layers/3_third_layer/1.png', 719 * 6),
            new BackgroundObject('img/img/5_background/layers/2_second_layer/1.png', 719 * 6),
            new BackgroundObject('img/img/5_background/layers/1_first_layer/1.png', 719 * 6),
        ],
    )
}