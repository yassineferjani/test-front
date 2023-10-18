import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
  private host = 'http://127.0.0.1:8080/person';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private errorMessage!:string;

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.host, person)
      .pipe(
        catchError((error: any) => {
          this.errorMessage = error.message; 
          throw error;
        })
      );
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.host)
      .pipe(
        catchError((error: any) => {
          this.errorMessage = error.message;
          throw error;
        })
      );
  }

  deletePerson(id: string): Observable<any> {
    return this.http.delete(this.host + '/' + id)
    .pipe(
      catchError((error: any) => {
        this.errorMessage = error.message; 
        throw error;
      })
    );
  }

  UpdatePerson(id: string, person: Person): Observable<object> {
    return this.http.put(this.host + '/' + id, person)
    .pipe(
      catchError((error: any) => {
        this.errorMessage = error.message; 
        throw error;
      })
    );
  }

  get1Person(id: string): Observable<any> {
    return this.http.get(this.host + '/'+ id).pipe(
      catchError((error: any) => {
        this.errorMessage = error.message; 
        throw error;
      })
    );
  }
}
