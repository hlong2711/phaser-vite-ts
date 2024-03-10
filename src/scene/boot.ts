import { Scene } from "phaser";
import { DESIGN_HEIGHT, DESIGN_WIDTH } from "../config";

export class Boot extends Scene {

  constructor() {
    super('Boot');
  }

  private _bar: Phaser.GameObjects.Rectangle | null = null;
  private progress = 0;

  private readonly loadingWidth = 460;
  private readonly loadingBorder = 4;
  init() {
    console.log(`Boot init`);
  }

  preload() {
    console.log(`Boot preload`);
    const x = DESIGN_WIDTH / 2;
    const y = DESIGN_HEIGHT / 2;
    this.add.rectangle(x, y, this.loadingWidth + this.loadingBorder * 2, 32)
      .setStrokeStyle(2, 0x0);

    this._bar = this.add.rectangle(x - this.loadingWidth / 2, y, 4, 28, 0xffffff);
  }

  create() {
    console.log(`Boot create`);
  }

  update(_time: number, delta: number): void {
    this.progress += delta / 100;
    this.progress = Math.min(this.progress, 100);

    if (this._bar) {
      this._bar.width = 4 + (this.progress / 100 * this.loadingWidth);
    }
  }
}