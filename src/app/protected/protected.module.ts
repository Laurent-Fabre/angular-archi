import {NgModule} from '@angular/core';

import {ProtectedRoutingModule} from './protected-routing.module';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule {
}
