import { Component } from '@angular/core';

type PartialOmit<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// function PartialOmit<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
interface Test {
  a: string;
  b: string;
}

type c = PartialOmit<Test, 'b'>;
const te: c = {
  a: '1',
}
type test = Omit<Test, 'a'>;
type test2 = Partial<Pick<Test, 'b'>>;
type test3 = Omit<Test, 'a'> & Partial<Pick<Test, 'a'>>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  NavOptions = {
    routes: [
      { name: 'Counter', route: '/counter' },
      { name: 'Users', route: '/users' }
    ]
  }

}
