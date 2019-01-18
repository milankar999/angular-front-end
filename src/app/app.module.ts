import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from'@angular/router';
import { AppRoutingModule } from './app-routing.module';
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
  {
    path:'login',component:LoginComponent
  }
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
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
