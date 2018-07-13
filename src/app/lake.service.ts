import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Lake } from './lake';
import { Data } from './data';
//import { LAKES } from './mock-lakes';

@Injectable()
export class LakeService {

  private lakesUrl = 'http://127.0.0.1:5000/lake';  // URL to web api
  private dbUrl = 'http://127.0.0.1:5000/db';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /** GET lakes from the server */
  getLakes(): Observable<Lake[]> {
    return this.http.get<Lake[]>(this.lakesUrl).pipe(
      catchError(this.handleError('getLakes', []))
    );
  }

  /** GET lake by id. Will 404 if id not found */
  getLake(id: number): Observable<Lake> {
    const url = `${this.lakesUrl}/${id}`;
    return this.http.get<Lake>(url).pipe(
      catchError(this.handleError<Lake>(`getLake id=${id}`))
    );
  }

  /** GET data lake by id. Will 404 if id not found */
  getData(id: any): Observable<Lake> {
    const url = `${this.lakesUrl}?data=${id}`;
    console.log(url);
    return this.http.get<Lake>(url).pipe(
      catchError(this.handleError<Lake>(`getLake id=${id}`))
    );
  }

  /** GET data lake by id. Will 404 if id not found */
  getDataBases(): Observable<any[]> {
    return this.http.get<any[]>(this.dbUrl).pipe(
      catchError(this.handleError('getDataBases', []))
    );
  }

  /** GET lake by id. Will 404 if id not found */
  getDataBase(id: string): Observable<any> {
    const url = `${this.dbUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError<any>(`getDataBase id=${id}`))
    );
  }

  /** GET data lake by id. Will 404 if id not found */
  getCluster(id: any): Observable<Lake> {
    const url = `${this.lakesUrl}?cluster=${id}`;
    console.log(url);
    return this.http.get<Lake>(url).pipe(
      catchError(this.handleError<Lake>(`getLake id=${id}`))
    );
  }

  /** GET data lake by id. Will 404 if id not found */
  getSensorData(id: any): Observable<Lake> {
    const url = `${this.lakesUrl}?sensor_data=${id}`;
    console.log(url);
    return this.http.get<Lake>(url).pipe(
      catchError(this.handleError<Lake>(`getLake id=${id}`))
    );
  }

  /** GET data lake by id. Will 404 if id not found */
  getSensorDataError(id: any, error: any): Observable<Lake> {
    const url = `${this.lakesUrl}?sensor_data_error=${id}&error=${error}`;
    console.log(url);
    return this.http.get<Lake>(url).pipe(
      catchError(this.handleError<Lake>(`getLake id=${id}`))
    );
  }

    /** GET data lake by id. Will 404 if id not found */
    getSensorDoubleDataError(id: any, error: any): Observable<Lake> {
      const url = `${this.lakesUrl}?sensor_double_data_error=${id}&error=${error}`;
      console.log(url);
      return this.http.get<Lake>(url).pipe(
        catchError(this.handleError<Lake>(`getLake id=${id}`))
      );
    }

  /** GET data lake by id. Will 404 if id not found */
  getDataList(id: number): Observable<Data[]> {
    const url = `${this.lakesUrl}?data=${id}`;
    console.log(url);
    return this.http.get<Data[]>(url).pipe(
      catchError(this.handleError<Data[]>('getDataList', []))
    );
  }

  /* GET heroes whose name contains search term */
  searchLakes(term: string): Observable<Lake[]> {
    if (!term.trim()) {
      // if not search term, return empty lake array.
      return of([]);
    }
    return this.http.get<Lake[]>(`${this.lakesUrl}?bottom=${term}`).pipe(
      catchError(this.handleError<Lake[]>('searchLakes', []))
    );
  }

  /* GET heroes whose name contains search term */
  processLakes(term: string): Observable<Lake[]> {
    if (!term.trim()) {
      // if not search term, return empty lake array.
      return of([]);
    }
    return this.http.get<Lake[]>(`${this.lakesUrl}/${term}`).pipe(
      catchError(this.handleError<Lake[]>('searchLakes', []))
    );
  }



  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
