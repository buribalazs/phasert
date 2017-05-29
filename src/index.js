import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

const game = new Phaser.Game(1920, 1080, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('einstein', 'assets/images/mushroom2.png');

}

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    var s = game.add.sprite(80, 0, 'einstein');

    s.rotation = 0.14;

}

window.onload = () => {

}