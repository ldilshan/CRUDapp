import { Component, OnInit,Output, EventEmitter, Input} from '@angular/core';
import { Customer } from '../customer';
import { CustomerService} from '../customer.service';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';
import { Observable, Subject, pipe } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

 

  model: any = {};
  customers: Customer[] = [];

 
 // customers$: Observable<Customer[]>;
  private searchTerms = new Subject<string>();
  constructor(private customerService: CustomerService , private router: Router) { }
  ngOnInit() {
    this.getCustomers();
    // this.customers$ = this.searchTerms.pipe(
      
    //   debounceTime(300),

     
    //   distinctUntilChanged(),

    
    //   switchMap((term: string) => this.customerService.searchHeroes(term)),
    // );
  }

  add(form: NgForm) {
    this.customerService.AddCustomer( JSON.stringify(this.model))
      .subscribe(customer => {

        this.getCustomers();        //this.customerForm.reset();
       
      });
      form.resetForm();
      // this.model.nic = "";
      // this.model.cname = "";
  }
  delete(customer: Customer): void {
       
        this.customers = this.customers.filter(h => h !== customer);
        this.customerService.deleteCustomer(customer).subscribe();
  }

  getCustomers(): void {
    this.customerService.getCustomers()

    .subscribe(customer => this.customers = customer);
  }

  rowClick(customer) : void{
    // alert(customer.cname)
    // this.custDetails = customer;
    this.router.navigateByUrl('/custupdate/' + customer.nic);

  }
  




}
