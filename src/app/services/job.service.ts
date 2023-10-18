import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../model/job';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }
  private host = 'http://127.0.0.1:8080/person';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private errorMessage!:string;

  addperson(job: Job): Observable<Job> {
    return this.http.post<Job>(this.host, job)
      .pipe(
        catchError((error: any) => {
          this.errorMessage = error.message; 
          throw error;
        })
      );
  }

  getpersons(): Observable<Job[]> {
    return this.http.get<Job[]>(this.host)
      .pipe(
        catchError((error: any) => {
          this.errorMessage = error.message;
          throw error;
        })
      );
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.host + '/' + id)
    .pipe(
      catchError((error: any) => {
        this.errorMessage = error.message; 
        throw error;
      })
    );
  }

  UpdateUsers(id: number, job: Job): Observable<object> {
    return this.http.put(this.host + '/' + id, job)
    .pipe(
      catchError((error: any) => {
        this.errorMessage = error.message; 
        throw error;
      })
    );
  }

  get1User(id: string): Observable<any> {
    return this.http.get(this.host + '/'+ id).pipe(
      catchError((error: any) => {
        this.errorMessage = error.message; 
        throw error;
      })
    );
  }
}
