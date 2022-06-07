import {NgModule, Optional, SkipSelf} from '@angular/core';
import {PublicModule} from '../public/public.module';
import {ProtectedModule} from '../protected/protected.module';
import {AdminModule} from '../admin/admin.module';
import {SharedModule} from "../shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicModule,
    ProtectedModule,
    AdminModule,
    BrowserAnimationsModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
