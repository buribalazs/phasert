import 'pixi';
import 'p2';
import IO from '../node_modules/socket.io-client';
import * as Phaser from 'phaser';
import {Debugger} from './util/debug.js';
import {GamePlay} from './state/gameplay/gameplay.js';

class Game {
    constructor() {
        this.game = new Phaser.Game(1920, 1080, Phaser.AUTO, 'phaser-example', {
            preload: this.preload,
            create: this.create
        });
    }

    preload() {
        this.game.stage.backgroundColor = "#261c2f";
        this.game.time.advancedTiming = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    }

    create() {
        Debugger.init();
        game.state.add('gameplay', new GamePlay());
        game.state.start('gameplay');
    }
}

console.log(IO);

export let game = new Game().game;