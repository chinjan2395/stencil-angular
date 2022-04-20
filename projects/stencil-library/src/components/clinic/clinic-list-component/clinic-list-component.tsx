import {Component, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'clinic-list-component',
  styleUrl: 'clinic-list-component.css',
  shadow: true,
})
export class ClinicListComponent {
  @Prop() clinicList: Array<any>;
  @Prop() search: string;

  render(): any {
    return (
      <Host>
        <h3>{this.clinicList.length} Clinic(s) found near "{this.search}"</h3>
        {
          this.clinicList.map((clinic, index) => {
            return (
              <div>
                <h4>#{index + 1} {clinic.athlete} <small>({clinic.date})</small></h4>
                <p>{clinic.country}</p>
                <p>Inside CVS Pharmacy</p>
                <button>Schedule a visit</button>
                <p>Check flu vaccine availability</p>
                <button>Directions</button>
                <button>Clinic Details</button>
                <hr/>
              </div>
            );
          })
        }
        <slot/>
      </Host>
    );
  }

}
