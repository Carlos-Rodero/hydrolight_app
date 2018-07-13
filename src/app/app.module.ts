import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LakesComponent } from './lakes/lakes.component';
import { LakeDetailComponent } from './lake-detail/lake-detail.component';
import { LakeService } from './lake.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient } from 'selenium-webdriver/http';
import { LakeSearchComponent } from './lake-search/lake-search.component';
import { LakeProcessComponent } from './lake-process/lake-process.component';
import { LakeChartComponent } from './lake-chart/lake-chart.component';
import { ClusterComponent } from './cluster/cluster.component';
import { DatabaseComponent } from './database/database.component';


@NgModule({
  declarations: [
    AppComponent,
    LakesComponent,
    LakeDetailComponent,
    DashboardComponent,
    LakeSearchComponent,
    LakeProcessComponent,
    LakeChartComponent,
    ClusterComponent,
    DatabaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
