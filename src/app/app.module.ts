import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from'@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DndModule} from 'ng2-dnd';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CrmComponent } from './components/crm/crm.component';
import { SourcingComponent } from './components/sourcing/sourcing.component';
import { SalesComponent } from './components/sales/sales.component';
import { CrmHeaderComponent } from './components/crm/crm-header/crm-header.component';
import { CrmFooterComponent } from './components/crm/crm-footer/crm-footer.component';
import { CrmPoComponent } from './components/crm/crm-po/crm-po.component';
import { PoEntryComponent } from './components/crm/crm-po/po-entry/po-entry.component';
import { PoTypeEntryComponent } from './components/crm/crm-po/po-entry/po-type-entry/po-type-entry.component';
import { PoEntryCustomerSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-customer-selection/po-entry-customer-selection.component';
import { PoEntryRequesterSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-requester-selection/po-entry-requester-selection.component';
import { PoEntryReceiverSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-receiver-selection/po-entry-receiver-selection.component';
import { PoEntrySupportingInfoComponent } from './components/crm/crm-po/po-entry/po-entry-supporting-info/po-entry-supporting-info.component';
import { PoEntryProductComponent } from './components/crm/crm-po/po-entry/po-entry-product/po-entry-product.component';
import { CrmHomeComponent } from './components/crm/crm-home/crm-home.component';

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'crm/crmheader',component:CrmHeaderComponent},
  {path:'crm/crmheader/crmpo-type',component: PoTypeEntryComponent},
  {path:'crm/crmheader/crm-Customer',component: PoTypeEntryComponent},
  {path:'crm/po-entry/po-entry-customer-selection', component:PoEntryCustomerSelectionComponent},
  {path:'crm/po-entry/po-entry-product', component:PoEntryProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrmComponent,
    SourcingComponent,
    SalesComponent,
    CrmHeaderComponent,
    CrmFooterComponent,
    CrmPoComponent,
    PoEntryComponent,
    PoTypeEntryComponent,
    PoEntryCustomerSelectionComponent,
    PoEntryRequesterSelectionComponent,
    PoEntryReceiverSelectionComponent,
    PoEntrySupportingInfoComponent,
    PoEntryProductComponent,
    CrmHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   ReactiveFormsModule, 
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    DndModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
