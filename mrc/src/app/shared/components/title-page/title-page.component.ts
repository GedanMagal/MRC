import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {

  @Input() title: string;

  verifyRoute: boolean = false;

  constructor(
    private router : Router
  ) { }

  ngOnInit() {

    console.log(this.router.url);

    if(!this.router.url.includes('http://localhost:4200/') || !this.router.url.includes('http://localhost:4200/admin')){
      this.verifyRoute = true;
    }else{
      this.verifyRoute = false;
    }

    console.log();

  }

}
