import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  cityFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    this.router.navigate(['overview'], { fragment: this.cityFormControl.value });
  }
}
