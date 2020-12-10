import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbaordMenuComponent } from './dashbaord-menu/dashbaord-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashbaordMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [DashbaordMenuComponent],
})
export class NavigationModule {}
