import { NgModule } from '@angular/core';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MyAccountComponent
  ],
  imports: [
    SharedModule,
    MyAccountRoutingModule
  ]
})
export class MyAccountModule { }
