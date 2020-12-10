import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './home/dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
  },

  {
    path: 'home',
    component: DashboardHomeComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
