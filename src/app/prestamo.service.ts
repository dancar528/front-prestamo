import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PrestamoService {

  private prestamoUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    const url = `${this.prestamoUrl}/clientes`
    return this.http.get<any>(url, httpOptions)
    .pipe(
      catchError(this.handleError('getClientes', []))
    )
  }

  addCliente(cliente: any): Observable<any>{
    console.log(cliente)
    const url = `${this.prestamoUrl}/clientes`;
    return this.http.post<any>(url, cliente, httpOptions)
    .pipe(
      catchError(this.handleError('addCliente', []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('error aqui')
      console.error(error)
      
      return of(result as T);
    }
  }

}
