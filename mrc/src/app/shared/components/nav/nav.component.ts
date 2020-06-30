import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  filter: string;
  constructor(
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
  }

  // changeFilter() {
  //   this.filterService.updateValue(this.filter);
  // }


}
