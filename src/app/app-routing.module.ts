import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LakesComponent }      from './lakes/lakes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LakeSearchComponent }   from './lake-search/lake-search.component';
import { LakeDetailComponent }  from './lake-detail/lake-detail.component';
import { LakeProcessComponent } from './lake-process/lake-process.component';
import { ClusterComponent } from './cluster/cluster.component';
import { DatabaseComponent } from './database/database.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'lakes', component: LakesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: LakeDetailComponent },
  { path: 'search', component: LakeSearchComponent },
  { path: 'process', component: LakeProcessComponent },
  { path: 'cluster', component: ClusterComponent },
  { path: 'database', component: DatabaseComponent },
  { path: 'db/:id', component: DatabaseComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
