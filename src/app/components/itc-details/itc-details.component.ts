import { Component, Input, OnInit } from '@angular/core';
import { ITC } from 'src/app/types';
import typeColors from '../../../assets/colors.json';

@Component({
  selector: 'app-itc-details',
  templateUrl: './itc-details.component.html',
  styleUrls: ['./itc-details.component.scss']
})
export class ItcDetailsComponent implements OnInit {
  @Input() itc!: ITC;
  colors:any = typeColors;

  constructor() { }

  ngOnInit(): void {
  }

}
