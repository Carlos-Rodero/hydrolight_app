import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import { Lake } from '../lake';
import { LakeService } from '../lake.service';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {

  lake: Lake;

  constructor(private lakeService: LakeService) { }

  ngOnInit() {
  }

  generateClusterAll() {
    this.lakeService.getCluster("all")
      .subscribe(lake => this.lake = lake);
  }

  generateClusterRGB() {
    this.lakeService.getCluster("all_sensor")
      .subscribe(lake => this.lake = lake);
  }

  generateClusterRGBDistancesSensor() {
    this.lakeService.getCluster("distances_sensor")
      .subscribe(lake => this.lake = lake);
  }

  generateClusterRGBDistancesSensorError20() {
    this.lakeService.getCluster("distances_sensor_error_20")
      .subscribe(lake => this.lake = lake);
  }

  generateClusterRGBDistancesSensorError10() {
    this.lakeService.getCluster("distances_sensor_error_10")
      .subscribe(lake => this.lake = lake);
  }

  generateClusterRGBDistancesDoubleSensorError20() {
    this.lakeService.getCluster("distances_double_sensor_error_20")
      .subscribe(lake => this.lake = lake);
  }

  generateClusterRGBDistancesDoubleSensorError10() {
    this.lakeService.getCluster("distances_double_sensor_error_10")
      .subscribe(lake => this.lake = lake);
  }

}
