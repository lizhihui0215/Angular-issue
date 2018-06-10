import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../shared/auth.guard';
// import { BaseInfoMaintenanceModule } from './base-info-maintenance/base-info-maintenance.module';

const routes: Routes = [
  {
    path: 'pages',
    // canActivate: [AuthGuard],
    component: PagesComponent,
    children: [
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      // { path: 'base-info-maintenance', loadChildren: './base-info-maintenance/base-info-maintenance.module#BaseInfoMaintenanceModule'},
      // { path: 'mine-maintenance', loadChildren: './mine-maintenance/mine-maintenance.module#MineMaintenanceModule'},
      // { path: 'device-management', loadChildren: './device-management/device-management.module#DeviceManagementModule' },
      // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
