import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import {Location} from '@angular/common';
import { NumberValueAccessor } from '@angular/forms/src/directives';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  // @Input() customer: Customer;


 private customer: any;
  private sub: any;
  private id: number;
username : string;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location ) 
    { }

  ngOnInit() {
      this.getCustomer();
  }


  getCustomer(): void{
    // const nic = +this.route.params.subscribe(params => this.nic = +params['nic'])
   this.route.params.subscribe(params =>{
      console.log(params);
      this.customerService.getCustomer(params.nic)
      .subscribe(
        customer =>{
           this.customer = customer;
        });
      });
     
  // this.route.paramMap.subscribe(params => {
  //   console.log(params.get('nic'));
  //   this.username = params.get('nic');
  // });
//   this.sub = this.route.params.subscribe(params => {
//     this.id = +params['id']; // (+) converts string 'id' to a number

//     // In a real app: dispatch action to load the details here.
//  });


    // });
    // const nic = + this.route.snapshot.paramMap.get('nic');
   
      
  }
  update() {
    this.customerService.updateCustomer(this.customer)
      .subscribe(() => console.log('sa'));
      this.location.back();
  }







}
