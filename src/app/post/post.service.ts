import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiURL = 'http://127.0.0.1:8000/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private errorHandler(error: HttpErrorResponse) {
    if (error.message) {
      // A client-side or network error occurred. Handle accordingly.
      console.error('An error occurred:', error.message);
    } else if (error.status) {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }

    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }


  constructor(private httpClient: HttpClient) {}
  
  
  // ---------------------get all method----------------
  getAll(): Observable<any> {
    return this.httpClient
      .get(this.apiURL + '/items/')
      .pipe(catchError(this.errorHandler));
  }

  // -------------------create-------------
  create(post: Post): Observable<any> {
   return this.httpClient
      .post(this.apiURL + '/items/', JSON.stringify(post), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  // -------------------- Find ------------------------
  find(id: number): Observable<Post> {
    return this.httpClient
      .get<Post>(`${this.apiURL}/items/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  update(id: number, post: Post): Observable<any> {
    return this.httpClient
      .put(`${this.apiURL}/items/${id}`, JSON.stringify(post), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }


  // ---------------------- Delete -------------------------

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiURL}/items/${id}/`)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  
}
