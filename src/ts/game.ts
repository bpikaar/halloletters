import { subjectSelect } from "./subjectSelect.js";

export class game {
  constructor() {
    console.log("Game started");
    this.drawBackground();
    
    new subjectSelect();
  }
  
  drawBackground() {
    let root: HTMLElement = document.querySelector("gameContainer")!;
    root.style.backgroundImage = `url("./assets/background.png")`;
  }
}
