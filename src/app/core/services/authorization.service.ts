import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AutenticarUsuarioViewModel } from "../models/autenticar-usuario-view-model";

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    private server = 'https://praxio-invent.azurewebsites.net/Api/';

    constructor(
        private _httpClient: HttpClient
    ) { }

    autenticar(body: AutenticarUsuarioViewModel) {
        return this._httpClient.post(this.server + 'Authorization', body);
    }
}