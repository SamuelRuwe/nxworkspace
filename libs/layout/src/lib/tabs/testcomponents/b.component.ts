import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'pg-layout-a',
  template: `<h1>B</h1>`
})

export class BComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
    console.log("B");
  }

}