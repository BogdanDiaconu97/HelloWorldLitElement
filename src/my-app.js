import { html, LitElement} from 'lit-element';

export class MyApp extends LitElement {
  render(){
    return html`Hello world!`;
  }
}

window.customElements.define('my-app', MyApp);