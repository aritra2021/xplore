import { Component, OnInit } from '@angular/core';
import { ITC, Search } from 'src/app/types';
import data from '../../../assets/data.json';
import searchSet from '../../../assets/search.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTypes: String[] = data.types;
  results: Search[] = searchSet;
  selected: number = 0; 
  showResults: Boolean = false;
  searchquery!: String;

  constructor() { }

  ngOnInit(): void { }

  selectType(index: number) {
    this.selected = index
  }

  search() {
    this.showResults = this.searchquery.length > 0;
  }

}
