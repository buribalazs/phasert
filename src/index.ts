/// <reference path="../node_modules/phaser/typescript/phaser.d.ts"/>
/// <reference path="../node_modules/phaser/typescript/pixi.d.ts"/>
import 'pixi';
import 'p2';
import * as Phaser from 'phaser';

class SimpleGame {
    game: Phaser.Game;
    logo: Phaser.Sprite;
    debug: Phaser.Text;
    cursors: Phaser.CursorKeys;

    constructor() {
        this.game = new Phaser.Game(1280, 720, Phaser.AUTO, "content", this);
    }

    preload() {
        this.game.stage.backgroundColor = "#261c2f";
        this.game.time.advancedTiming = true;
        this.game.load.image("logo", "./assets/images/mushroom2.png");
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    }

    create() {
        this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
        this.logo.anchor.setTo(0.5, 0.5);
        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.debug = this.game.add.text(10,10,'asd', {
            font:'monospace',
            fontSize:12,
            fill:'#FFFFFF'
        });
    }

    update() {
        this.debug.text = `${this.game.time.fps} fps`;
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

window.onload = () => {
    const game = new SimpleGame();
};