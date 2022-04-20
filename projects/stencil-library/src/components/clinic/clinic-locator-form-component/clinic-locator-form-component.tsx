import {Component, Event, h, Host, Prop, State} from '@stencil/core';
import {EventEmitter} from '@stencil/core/internal';

@Component({
  tag: 'clinic-locator-form-component',
  styleUrl: 'clinic-locator-form-component.css',
  shadow: true,
})
export class ClinicLocatorFormComponent {
  @Prop() label: string;
  @State() model: string;
  @Prop() type = 'text';
  @Event() valueChanged: EventEmitter<string>;

  handleChange(event): void {
    this.model = event.target.value;
  }

  render(): any {
    return (
      <Host>
        <p>Find a clinic</p>
        <label>{this.label}</label><br/>
        <input
          type={this.type}
          value={this.model}
          onInput={(event) => this.handleChange(event)}
        />
        <br/>
        <small> Zip code, or city and state</small>
        <br/>
        <button
          type={'button'}
          onClick={() => this.valueChanged.emit(this.model)}
        >
          Find a Clinic
        </button>
      </Host>
    );
  }

}
