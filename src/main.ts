import Phaser from 'phaser';
import './style.css'
import { Boot } from './scene/boot';
import { DESIGN_HEIGHT, DESIGN_WIDTH } from './config';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: DESIGN_WIDTH,
  height: DESIGN_HEIGHT,
  parent: 'app',
  backgroundColor: '#028af8',
  scene: [
    Boot,
    // Preloader,
    // MainMenu,
    // MainGame,
    // GameOver
  ]
};

window.onload = () => {
  const game = StartGame('app');
  console.log(`Start game: `, game.device);

}

const StartGame = (parent: string) => {

  return new Phaser.Game({ ...config, parent: parent });
}
