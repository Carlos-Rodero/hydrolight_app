import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import { Lake } from '../lake';
import { LakeService } from '../lake.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  databases: any[];
  database : any;

  constructor(
    private lakeService: LakeService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getDBs();
  }

  getDBs() {
    this.lakeService.getDataBases()
      .subscribe(
        data => this.databases = data);
  }

  getDB(id) {
    //const id = this.route.snapshot.paramMap.get('id');
    this.lakeService.getDataBase(id)
      .subscribe(
        data => this.database = data);
  }

}
