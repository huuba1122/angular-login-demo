import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable()
export class ServiceNameService {
  
  constructor(private http: HttpClient) { }

}

  const httpOption = {
    headers: new HttpHeaders({'Content-Type': 'Application/json'})
  }

  const apiUrl = 'https://5f0c7a5911b7f60016055e6c.mockapi.io/Api/ahihi';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Product[]>{
      return this.httpClient.get<Product[]>(apiUrl).pipe();
  }
  
}
