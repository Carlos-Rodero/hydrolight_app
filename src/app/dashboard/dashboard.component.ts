import { Component, OnInit } from '@angular/core';
import { Lake } from '../lake';
import { LakeService } from '../lake.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lakes: Lake[] = [];

  constructor(private lakeService: LakeService) { }

  ngOnInit() {
    this.getLakes();
  }

  getLakes(): void {
    this.lakeService.getLakes()
      .subscribe(lakes => this.lakes = lakes);
  }

}
