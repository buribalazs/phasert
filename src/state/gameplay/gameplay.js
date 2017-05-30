import * as Phaser from 'phaser';

class GamePlay extends Phaser.State{
    preload() {
        this.load.image("logo", "./assets/images/mushroom2.png");
    }

    create() {
        this.logo = this.add.sprite(this.world.centerX, this.world.centerY, "logo");
        this.logo.anchor.setTo(0.5, 0.5);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.input.update();

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

export {GamePlay};