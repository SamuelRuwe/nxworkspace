import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'nx-workspace-content-project',
  templateUrl: './content-project.component.html',
  styleUrls: ['./content-project.component.css']
})
export class ContentProjectComponent {
  form = new FormGroup({
    controlOne: new FormControl()
  });

}
