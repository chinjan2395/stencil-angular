import {Component, Event, EventEmitter, h, Listen, Prop, State} from '@stencil/core';
import {format} from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  @State() clicks = 0;

  @Event({
    eventName: 'todoCompleted',
    composed: true,
    cancelable: true,
    bubbles: true
  }) todoCompleted: EventEmitter<any>;

  @Listen('todoCompleted')
  todoCompletedHandler(): void {
    this.clicks = this.clicks + 1;
    console.log('todoCompletedHandler', this.clicks);
  }

  connectedCallback(): void {
    console.log('MyComponent => connectedCallback');
  }

  componentWillLoad(): void {
    console.log('MyComponent => componentWillLoad');
  }

  componentDidLoad(): void {
    console.log('MyComponent => componentDidLoad');
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private getClicks(): number {
    return this.clicks;
  }

  render(): any {
    console.log('MyComponent => render');
    return (
      <div>
        <h1>Hello, World! I'm {this.getText()}</h1>
        <h3>Power level : {this.getClicks()}</h3>
        <p onClick={() => this.todoCompleted.emit()}>Click me to power up</p>
      </div>
    );
  }
}
