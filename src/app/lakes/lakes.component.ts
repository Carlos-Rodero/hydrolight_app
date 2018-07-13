import { Component, OnInit } from '@angular/core';
import { LakeService } from '../lake.service';
import { Lake } from '../lake';


@Component({
  selector: 'app-lakes',
  templateUrl: './lakes.component.html',
  styleUrls: ['./lakes.component.css']
})
export class LakesComponent implements OnInit {

  lakes: Lake[];

  constructor(private lakeService: LakeService) { }

  ngOnInit() {
    this.getLakes();
  }

  getLakes(): void {
    this.lakeService.getLakes()
    .subscribe(lakes => this.lakes = lakes);
  }



}
