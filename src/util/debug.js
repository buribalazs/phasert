import {game} from '../game.js';
import * as Phaser from 'phaser';

let text;
let messages = {};

class DebuggerText extends Phaser.Text{
    constructor() {
        super(game, 10, 10, 'debugger', {
            font: 'monospace',
            fontSize: 14,
            fill: '#FFFFFF'
        });
    }

    update(){
        this.text = `${game.time.fps}\n` + Object.keys(messages).map(k => `${k}: ${messages[k]}`).slice(0,30).join('\n');
    }


}

export class Debugger{
    static init(){
        if (!text){
            text = new DebuggerText();
            game.stage.addChild(text);
        }
    }

    static log(key, value){
        messages[key] = value;
    }

    static clear(){
        Object.keys(messages).forEach(k => delete messages[k]);
    }
}

// let debug = game.add.text(10,10,'asd', {
//     font:'monospace',
//     fontSize:14,
//     fill:'#FFFFFF'
// });