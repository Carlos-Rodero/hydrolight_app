import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LakeService } from '../lake.service';

import { Lake } from '../lake';

@Component({
  selector: 'app-lake-detail',
  templateUrl: './lake-detail.component.html',
  styleUrls: ['./lake-detail.component.css']
})
export class LakeDetailComponent implements OnInit {

  @Input() lake: Lake;

  constructor(
    private route: ActivatedRoute,
    private lakeService: LakeService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getLake();
  }

  getLake(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.lakeService.getLake(id)
      .subscribe(lake => this.lake = lake);
  }

  goBack(): void {
    this.location.back();
  }

  /*
  getData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.lakeService.getData(id)
      .subscribe(lake => this.lake = lake);
    this.getLake();
  }
  */

}
