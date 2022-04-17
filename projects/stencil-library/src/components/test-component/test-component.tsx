import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.css',
  shadow: true,
})
export class TestComponent {

  render() {
    return (
      <Host>
        test-component works
        <slot/>
      </Host>
    );
  }

}
