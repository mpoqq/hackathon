import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MapModule } from './map/map.module';
import { AppRoutingModule } from './app-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { MatInputModule } from '@angular/material/input';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'; 
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatGridListModule,
    MatCheckboxModule,
    MapModule,
    MatTooltipModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
