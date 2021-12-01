import { Component, NgZone } from '@angular/core';
import { EmscriptenLoaderService, EmscriptenModule } from '@puregeniusness/wasm/script-loader';

interface PersonalInfo {
  name: string;
  age: number;
}

interface Body {
  height: number;
  weight: number;
}

interface PersonRecord {
  id: number;
  avatar: string;
  personalInfo: PersonalInfo;
  body: Body;
}

interface MyEmscriptenModule extends EmscriptenModule {
  createRecord(personalInfo: PersonalInfo, body: Body): PersonRecord;
}

@Component({
  selector: 'pg-eight-queens',
  templateUrl: './eight-queens.component.html',
  styleUrls: ['./eight-queens.component.css']
})
export class EightQueensComponent {

  model!: {
    personalInfo: PersonalInfo;
    body: Body;
  };
  record?: PersonRecord;

  moduleLoaded = false;

  module!: MyEmscriptenModule;

  createRecord: any = {};

  constructor(ngZone: NgZone, private loader: EmscriptenLoaderService) {
    this.loadModule();
    this.resetModel();
  }

  private async loadModule() {
    if (this.moduleLoaded) {
      return;
    }
    this.module = await this.loader.loadScript('EightQueensModule', 'eight-queens.js');
    console.log(this.module);
    this.moduleLoaded = true;
    this.createRecord = (info: PersonalInfo, body: Body) => {
      this.record = this.module.createRecord(info, body);
      return this.record;
    };
    const b = this.createRecord({ name: 'Sam', age: 27 }, { height: 200, weight: 170 });
    console.log(b);
  }

  private resetModel() {
    this.model = {
      personalInfo: {
        name: '',
        age: 0
      },
      body: {
        height: 0,
        weight: 0
      }
    };
  }

}
