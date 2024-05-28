import Chart, { ChartData, ChartTypeRegistry, Plugin } from 'chart.js/auto';
import { AnyObject } from 'chart.js/dist/types/basic';
import { LitElement, PropertyValueMap, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('mark-chart')
export class MarkChart extends LitElement {
  static override styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property({ type: String })
  type: keyof ChartTypeRegistry = 'line';

  @property({ type: Object })
  data: ChartData<keyof ChartTypeRegistry>;

  @property({ type: Object })
  chart: Chart;

  @property({ type: Object })
  options: object = {};

  @property({ type: Array })
  plugins: Plugin<keyof ChartTypeRegistry, AnyObject>[] = [];

  @query('#myChart')
  _chartElement: HTMLCanvasElement;

  override render() {
    return html`
      <div>
        <canvas id="myChart"></canvas>
      </div>
    `;
  }

  protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.chart = new Chart(this._chartElement, {
      type: this.type,
      data: this.data,
      options: this.options,
      plugins: this.plugins,
    });
  }

  protected override willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('data') && this.data && this.chart) {
      this.chart.data = this.data;
      this.chart.update();
    }
  }
}
