var demo = {}, centerX = 1500 / 6, centerY = 1000 / 1.4, eastw, speed = 4;
demo.state0 = function() {};
demo.state0.prototype = {
    preload: function() {
        game.load.spritesheet('eastw', '/assets/spritesheets/eastwspritesheet.png', 250, 386);
        game.load.image('background', '/assets/backgrounds/background.png');
    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE); //создание рамок
        game.stage.backgroundColor = '#123456';
        console.log('state0');
        addChangeStateEventListeners ();// переключатель сцен
        game.world.setBounds (0, 0, 2288, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //экран по размеру окна
        var background = game.add.sprite(0, 0, 'background');
        eastw = game.add.sprite(centerX, centerY, 'eastw'); //добавления спрайта на сцену
        eastw.anchor.setTo(0.5, 0.5); //выравнивание спрайта
        eastw.scale.setTo(0.5, 0.5);
        game.physics.enable(eastw); //включение рамок для спрайта
        eastw.body.collideWorldBounds = true; //включение коллизий спрайта
        //проверка позиции спрайта - в консоли "name.y" 756.2857142857143|630.2857142857143
        eastw.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7]); //инициализация анимации с указанием будущего названия и фреймов
        
        
        game.camera.follow(eastw);//привязка камеры
        //game.camera.deadzone = new Phaser.Rectangle(centerX -300, 0, 600, 1000); //мертвая зона камеры
        
    },
    update: function() {
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            eastw.x += speed;
            eastw.scale.setTo(0.5, 0.5);
            eastw.animations.play('walk', 6, true);//walk - название добавленой анимации; 7 - fps; true - is loop.
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            eastw.x -= speed;
            eastw.scale.setTo(-0.5, 0.5);
            eastw.animations.play('walk', 6, true);
        }
        else {
            eastw.animations.stop('walk'); //остановка анимации на последнем кадре
            //eastw.frame = 0;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            eastw.y -= speed;
            if (eastw.y < 630){
                eastw.y = 630;
            }
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            eastw.y += speed;
            
        }
    }
    
};

function changeState (i, stateNum){
    //console.log(i);
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners () {
        addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
        addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
        addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
        addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
        addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
        addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
        addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
        addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
        addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
        addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}