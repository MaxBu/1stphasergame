demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){
        //game.load.image('test','assets/sprites/eastw.png', 250, 386);
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateEventListeners ();
    },
    update: function(){}
};