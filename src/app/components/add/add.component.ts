import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data.json';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  newItemTypes: String[] = data.types;
  selected: number = 0; 

  constructor() { }

  ngOnInit(): void { }

  selectType(index: number) {
    this.selected = index
  }
}
