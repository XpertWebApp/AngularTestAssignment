import { Component, Input, OnInit } from "@angular/core";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {

  @Input()
  name!: string;
}
