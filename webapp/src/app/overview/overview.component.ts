import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { map, filter } from "rxjs/operators";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  city: string;
  work: string;

  appService: AppService;

  constructor(appService: AppService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.appService = appService
   }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(fragment => this.city = fragment);
  }

  updateCity() {
    this.router.navigate(['overview'], { fragment: this.city });
  }

  updateWork() {
  }

  formatLabel(value: number) {
    if (value > 7) {
      return "++";
    } else if (value <= 7 && value > 5) {
      return "+";
    } else if (value == 5)  {
      return "0";
    } else if (value < 5 && value > 3) {
      return "-";
    } else {
      return "--";
    }
  }
}
