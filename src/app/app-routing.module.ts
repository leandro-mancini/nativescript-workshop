import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { AlmoxarifadoComponent } from "./pages/almoxarifado/almoxarifado.component";

const routes: Routes = [
    { path: "", redirectTo: "/Login", pathMatch: "full" },
    { path: "Login", component: LoginComponent },
    { path: "Almoxarifado", component: AlmoxarifadoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }