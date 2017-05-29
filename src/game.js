import 'pixi';
import 'p2';
import * as Phaser from 'phaser';
import {Debugger} from './util/debug.js'

class Game {
    constructor(){
        this.game = new Phaser.Game(1920, 1080, Phaser.AUTO, 'phaser-example', { preload:this.preload, create:this.create, update:this.update });
    }
    preload() {
        this.game.stage.backgroundColor = "#261c2f";
        this.game.time.advancedTiming = true;
        this.game.load.image("logo", "./assets/images/mushroom2.png");
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    }

    create() {
        Debugger.init();
        this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
        this.logo.anchor.setTo(0.5, 0.5);
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }

    update() {
        this.game.input.update();

        if (this.cursors.down.isDown)
            this.logo.position.y += 10;
        if (this.cursors.up.isDown)
            this.logo.position.y -= 10;
        if (this.cursors.left.isDown)
            this.logo.position.x -= 10;
        if (this.cursors.right.isDown)
            this.logo.position.x += 10;
    }
}



export let game = new Game().game;