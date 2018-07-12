import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
// import { CommonModule } from '@angular/common';
import { CustomersComponent }  from  './customers/customers.component'
import { CustomerUpdateComponent} from './customer-update/customer-update.component';
import { TestComponent } from './test/test.component'

const routes: Routes = [
    { path: '', redirectTo: '/customers', pathMatch: 'full'},
    { path: 'customers', component: CustomersComponent },
    { path: 'custupdate/:nic', component: CustomerUpdateComponent},
    { path: "test", component: TestComponent}

]

@NgModule({
  // imports: [
  //   CommonModule
  // ],
  // declarations: []
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
