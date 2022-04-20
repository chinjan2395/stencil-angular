import {Component, h, Host, State} from '@stencil/core';

@Component({
  tag: 'clinic-locator-component',
  styleUrl: 'clinic-locator-component.css',
  shadow: true,
})
export class ClinicLocatorComponent {
  @State() clinicList = [];
  @State() showList = false;
  search: string;

  somethingChange(value: CustomEvent): any {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((response: Response) => response.json())
      .then(response => {
        this.clinicList = response;
        this.search = value.detail;
        this.showList = this.clinicList?.length > 0;
      });
  }

  render(): any {
    return (
      <Host>
        <clinic-locator-form-component
          label={'See locations near you'}
          onValueChanged={this.somethingChange.bind(this)}
        />
        <br/>
        {
          this.showList
            ? <clinic-list-component
              clinicList={this.clinicList}
              search={this.search}
            />
            : null
        }
        <slot/>
      </Host>
    );
  }
}
