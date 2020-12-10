import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';

import { AngularVotingDashbaordComponent } from './angular-voting-dashbaord/angular-voting-dashbaord.component';
import { DashboardService } from './services/dashboard.service';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [AngularVotingDashbaordComponent],
  imports: [CommonModule, HighchartsChartModule, DashboardRoutingModule],
  providers: [DashboardService],
})
export class DashboardModule {}
