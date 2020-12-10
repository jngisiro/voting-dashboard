import { Component, OnInit } from '@angular/core';
import * as highcharts from 'highcharts';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'angular-voting-dashbaord',
  templateUrl: './angular-voting-dashbaord.component.html',
  styleUrls: ['./angular-voting-dashbaord.component.scss'],
})
export class AngularVotingDashbaordComponent implements OnInit {
  title = 'Angular 9.x Framework Voting Visualization';
  updateFlag = false;
  Highcharts = highcharts;
  angularVotes;
  options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Angular 9.x Framework Votes',
    },

    xAxis: {
      categories: [],
    },

    yAxis: {
      title: {
        text: 'Ratings',
      },
    },

    series: [
      {
        name: 'Angular 9.x Framework',
        data: null,
      },
    ],
  };

  constructor(private dashboardService: DashboardService) {}

  mongoError = null;

  ngOnInit(): void {
    this.dashboardService.getErrorInfo().subscribe((error) => {
      this.mongoError = error;
    });
    this.dashboardService.getAngularAvgVotes().subscribe((ngVotes) => {
      console.log(ngVotes);
      this.updateFlag = true;
      delete ngVotes[0]['_id'];
      this.angularVotes = ngVotes[0];
      this.options.xAxis.categories = Object.keys(this.angularVotes);
      this.options.series[0].data = Object.values(this.angularVotes);
    });
  }
}
