import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import {
  // callbackCell,
  // callbackIconCell,
  Column,
  ColumnModel, dateCell, iconCell, simpleStringCell, stringCell,
  // daysCell,
  // iconCell,
  // stringCell
} from '@nx-workspace/layout';

type element = { position: number, name: string, weight: number, symbol: string }

const dateTimeExamples = ["2021-10-13T13:53:39.000+00:00", "2021-10-13T13:54:39.000+00:00", "2021-10-13T13:55:39.000+00:00"];

@Component({
  selector: 'nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  elementData = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];
  columns: Array<ColumnModel<element>> = [
    // new Column({
    //   columnDef: 'position',
    //   header: 'No.',
    //   cell: (ele) => callbackCell({value: ele.position, callback: this.log, returnValue: ele.position})
    // }),
    new Column({
      columnDef: 'name', header: 'Name', cell: ele => stringCell({value: ele.name}), isSortable: true
    }),
    new Column({columnDef: 'weight', header: 'Weight', cell: ele => simpleStringCell(ele.weight)}),
    // new Column({columnDef: 'weight', header: 'Weight', cell: ele => stringCell({value: ele.weight})}),
    // new Column({columnDef: 'days', header: 'Days', cell: ele => daysCell({value: ele.weight})}),
    new Column({columnDef: 'symbol', header: 'Symbol', cell: ele => stringCell({value: ele.symbol})}),
    new Column({columnDef: 'ic', header: 'icon', cell: () => iconCell({icon: 'email'})}),




    new Column({columnDef: 'date', header: 'Date', cell: () => dateCell({value: dateTimeExamples[0]})})





    // new Column({columnDef: 'icon', header: 'icon test', cell: () => iconCell({value: 'home', icon: 'home'})}),
    // new Column({
    //   columnDef: 'iconCall',
    //   header: '',
    //   cell: (ele) => callbackIconCell({callback: this.delete, returnValue: ele.position, icon: 'home'})
    // })
  ];

  constructor(public dialog: MatDialog) {}

  openForm() {
    this.dialog.open(FormComponent, {
      height: '800px',
      width: '800px'
    });
  }

  log(input: string | number) {
    console.log(`log ${input}`);
  }

  delete(input: string | number) {
    console.log(`delete ${input}`);
  }

}
