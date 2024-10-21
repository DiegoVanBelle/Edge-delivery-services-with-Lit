import {html, css, LitElement} from 'lit';

export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    name: {type: String},
    title: {type: String}
  };

  constructor() {
    super();
    this.name = 'Somebody';
    this.title = properties.title;
  }

  render() {
    console.log(this.title);
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
customElements.define('simple-greeting', SimpleGreeting);