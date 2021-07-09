import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nx-workspace-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private sv: UsersService, private ar: ActivatedRoute) {
    this.ar.fragment.subscribe(frag => console.log(frag));
    this.ar.queryParams.subscribe(qry => console.log(qry));
  }

  onClick(value: string) {
    console.log(value);
    console.log(this.sv.getCurrentRoute());
  }
}
