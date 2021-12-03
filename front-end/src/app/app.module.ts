import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './main/menu/menu.component';
import { HomeComponent } from './main/home/home.component';

import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { LoginComponent } from './main/login/login.component';
import { CadastroComponent } from './main/cadastro/cadastro.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { PrestadorFormComponent } from './main/prestador/prestador-form/prestador-form.component';
import {IConfig, NgxMaskModule} from "ngx-mask";
import {ERROR} from "@angular/compiler-cli/src/ngtsc/logging/src/console_logger";
import {ErrorMsgComponent} from "./main/shared/error-msg/error-msg.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule} from "@angular/material/snack-bar";
import { UsuarioFormComponent } from './main/usuario/usuario-form/usuario-form.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import { ExcluirComponent } from './main/excluir/excluir.component';
import { ServicosListComponent } from './main/servicos/servicos-list/servicos-list.component';
import { SolicitarDialogComponent } from './main/servicos/solicitar-dialog/solicitar-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ServicosSolicitadosComponent } from './main/servicos/servicos-solicitados/servicos-solicitados.component';
import { ContatosComponent } from './main/contatos/contatos.component';
import {TokenInterceptor} from "./main/shared/token.interceptor";

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ErrorMsgComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    PrestadorFormComponent,
    UsuarioFormComponent,
    ExcluirComponent,
    ServicosListComponent,
    SolicitarDialogComponent,
    ServicosSolicitadosComponent,
    ContatosComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule,
        NgxMaskModule.forRoot(maskConfigFunction),
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [     {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    defineLordIconElement(lottie.loadAnimation);

  }

}
