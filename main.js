var game = new Phaser.Game(600, 400, Phaser.AUTO);
game.state.add('state1', demo.state);
game.state.add('state2', demo.state2);
game.state.start('state1');