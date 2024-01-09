import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('mark-chart')
export class MarkChart extends LitElement {
  static override styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  override render() {
    return html`Mark Chart`;
  }
}
