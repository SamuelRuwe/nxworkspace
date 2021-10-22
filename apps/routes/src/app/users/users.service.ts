import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private activatedRoute: ActivatedRoute) { }

  getCurrentRoute() {
    console.log(this.activatedRoute);
    return this.activatedRoute.snapshot.queryParams;
  }

}
