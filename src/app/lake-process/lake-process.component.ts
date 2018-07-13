import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import { Lake } from '../lake';
import { LakeService } from '../lake.service';

@Component({
  selector: 'app-lake-process',
  templateUrl: './lake-process.component.html',
  styleUrls: ['./lake-process.component.css']
})
export class LakeProcessComponent implements OnInit {

  lake: Lake;

  constructor(private lakeService: LakeService) { }

  ngOnInit() {
  }

  generateCSVAll() {
    this.lakeService.getData("all")
      .subscribe(lake => this.lake = lake);
  }

  generateCSVRGB() {
    this.lakeService.getSensorData("all")
      .subscribe(lake => this.lake = lake);
  }

  generateCSVRGBSensor() {
    this.lakeService.getSensorData("4")
      .subscribe(lake => this.lake = lake);
  }

  generateCSVRGBSensorError20() {
    this.lakeService.getSensorDataError("4", "20")
      .subscribe(lake => this.lake = lake);
  }

  generateCSVRGBDoubleSensorError20() {
    this.lakeService.getSensorDoubleDataError("4", "20")
      .subscribe(lake => this.lake = lake);
  }

  generateCSVRGBSensorError10() {
    this.lakeService.getSensorDataError("4", "10")
      .subscribe(lake => this.lake = lake);
  }

  generateCSVRGBDoubleSensorError10() {
    this.lakeService.getSensorDoubleDataError("4", "10")
      .subscribe(lake => this.lake = lake);
  }


}



