import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AuthService } from './shared/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './shared/user.service';
// import { RoleService } from './shared/role.service';
import { SERVER_URL } from './shared/server-url';
// import {DeviceService} from './shared/device.service';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
// import {DeviceTypeService} from './shared/device-type.service';
// import {DevicePriceRuleService} from './shared/device-price-rule.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgZorroAntdModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    AuthModule,
    PagesModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    // UserService,
    // RoleService,
    // DeviceService,
    // DeviceTypeService,
    // DevicePriceRuleService,
    // RoleService,
    { provide: SERVER_URL, useValue:   'http://localhost:8080/camile-web' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
