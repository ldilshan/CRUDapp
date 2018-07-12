import { Injectable } from '@angular/core';
import { Customer} from './customer';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { tap, map} from 'rxjs/operators';
const httpOptions = {
  headers : new HttpHeaders ({'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerUrl = 'http://localhost:1337/api/Customers';
  constructor(private http: HttpClient) { }


  AddCustomer (customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerUrl, customer, httpOptions);
  }
  // deleteHero (customer: Customer | string): Observable<Customer> {
  //   const name = typeof customer === 'string' ? customer : customer.name;
  //   const url = `${this.customerUrl}/${name}`;

  //   return this.http.delete<Customer>(url, httpOptions);
  // }
  deleteCustomer (customer: Customer | string): Observable<Customer> {
      const nic = typeof customer === 'string' ? customer : customer.nic;
      const url = `${this.customerUrl + '/deleteCustomer' }?nic=${nic}`;
      return this.http.delete<Customer>(url, httpOptions);
    }
  getCustomers (): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl + '/loadCustomers');
  }
  // searchHeroes(term: string): Observable<Customer[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Customer[]>(`${this.customerUrl + '/findCustomer'}/?nic=${term}`);
  // }


  updateCustomer (customer): Observable<any> {
    return this.http.put(this.customerUrl+ '/updateCustomer', customer, httpOptions);
  }
  getCustomer(nic: number): Observable<Customer>{
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));

    const url = `${this.customerUrl + '/findCustomer'}/?nic=${nic}`;
    return this.http.get<Customer>(url);
  }
}


