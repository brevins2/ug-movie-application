import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  delete: string;
  edit: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', delete: 'delete', edit: 'edit'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', delete: 'delete', edit: 'edit'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', delete: 'delete', edit: 'edit'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', delete: 'delete', edit: 'edit'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', delete: 'delete', edit: 'edit'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', delete: 'delete', edit: 'edit'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', delete: 'delete', edit: 'edit'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', delete: 'delete', edit: 'edit'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', delete: 'delete', edit: 'edit'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', delete: 'delete', edit: 'edit'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', delete: 'delete', edit: 'edit'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', delete: 'delete', edit: 'edit'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', delete: 'delete', edit: 'edit'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', delete: 'delete', edit: 'edit'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', delete: 'delete', edit: 'edit'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', delete: 'delete', edit: 'edit'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', delete: 'delete', edit: 'edit'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', delete: 'delete', edit: 'edit'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', delete: 'delete', edit: 'edit'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', delete: 'delete', edit: 'edit'},
];

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {


	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'delete', 'edit'];
  	dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
