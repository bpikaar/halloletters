import themes from "./themes.js";
import { gameElement, Element } from "./gameElement.js";

interface Theme {
  name: string;
  elements: Element[];
}

export class subjectSelect {
  currentTheme: Theme;
  themes: Theme[];

  constructor() {
    console.log("Start subjectSelector");
    this.themes = themes;
    this.randomTheme();
  }

  randomTheme() {
    this.currentTheme = themes[Math.floor(Math.random() * themes.length)];
  }

  generateHTML() {
    // TODO: Generate every theme element
  }
}
