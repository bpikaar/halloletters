
export interface Element {
  name: string;
  word: string;
  image: string | undefined;
  sound: string;
}

export class gameElement {
  private _x: number = 0
  private _y: number = 0

  div: HTMLElement;
  data: Element;

  constructor(el : Element) {
    console.log("New game element");
    this.data = el;
    this.create();
  }

  create() {
    this.div = document.createElement("gameelement");
    
    let game = document.querySelector("gamecontainer");
    game?.appendChild(this.div);
    console.log("width", this.div.clientWidth);
    
    this.div.id = this.data.name;
    this.div.style.backgroundImage = `url("${
        this.data.image || "./assets/logo.png"
      }")`;
      
      
    this._x = Math.floor(
      Math.random() * (window.innerWidth - this.div.clientWidth));
    this._y = Math.floor(
      Math.random() * (window.innerHeight - this.div.clientHeight));
    this.div.style.transform = `translate(${this._x}px, ${this._y}px)`;
  }
}
