import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { LoginComponent } from './login/login.component';
import { AlmoxarifadoComponent } from './almoxarifado/almoxarifado.component';

@NgModule({
  declarations: [LoginComponent, AlmoxarifadoComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PagesModule { }
