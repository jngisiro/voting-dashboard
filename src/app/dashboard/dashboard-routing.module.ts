import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularVotingDashbaordComponent } from './angular-voting-dashbaord/angular-voting-dashbaord.component';

const routes: Routes = [
  {
    path: 'ng9',
    component: AngularVotingDashbaordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
