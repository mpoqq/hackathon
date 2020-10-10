import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  checked = true;
  title = 'board';

  appService: AppService;

  constructor(appService: AppService) { 
    this.appService = appService
   }

  ngOnInit(): void {
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
