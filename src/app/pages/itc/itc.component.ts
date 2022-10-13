import { Component, OnInit } from '@angular/core';
import { XploreService } from '../../services/xplore.service';
import { Observable } from 'rxjs';
import { ITC } from 'src/app/types';
import typeColors from 'src/assets/colors.json';

@Component({
  selector: 'app-itc',
  templateUrl: './itc.component.html',
  styleUrls: ['./itc.component.scss']
})
export class HomeComponent implements OnInit {

  itcs$!: Observable<ITC[]>;
  page: number = 1; 
  colors:any = typeColors;
  itcDetails!: ITC;
  
  constructor(private xploreService: XploreService) { }

  ngOnInit(): void {
    this.itcs$ = this.xploreService.getITCs(this.page);
  }

  showDetails(itc: ITC) {
    this.itcDetails = itc;
  }
}
