import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [
    CommonModule,
    AppComponent
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
