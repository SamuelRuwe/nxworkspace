import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'pg-layout-a',
  template: `<h1>A</h1>`
})

export class AComponent implements OnInit {

//   constructor() { }

  ngOnInit(): void {
      console.log("A");
  }

}