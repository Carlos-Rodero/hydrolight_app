import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Lake } from '../lake';
import { LakeService } from '../lake.service';

@Component({
  selector: 'app-lake-search',
  templateUrl: './lake-search.component.html',
  styleUrls: ['./lake-search.component.css']
})
export class LakeSearchComponent implements OnInit {

  lakes$: Observable<Lake[]>;
  private searchTerms = new Subject<string>();

  constructor(private lakeService: LakeService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    //this.searchTerms.subscribe(value=>{
    //  console.log(value);
    //});
  }

  ngOnInit(): void {
    this.lakes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.lakeService.searchLakes(term)),
    );
  }

}
