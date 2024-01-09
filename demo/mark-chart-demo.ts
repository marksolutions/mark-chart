import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../src/mark-chart';

@customElement('mark-chart-demo')
export class MarkChartDemo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`<mark-chart></mark-chart>`;
  }
}
