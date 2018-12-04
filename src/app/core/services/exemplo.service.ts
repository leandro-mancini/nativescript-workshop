import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ExemploService {
    private server = 'https://cpereira-escala.azurewebsites.net/Api/';

    constructor(
        private httpClient: HttpClient
    ) { }

    obterLista() {
        return this.httpClient.get(this.server + 'EscalaDiaria/ObterDias/2018-12-04T01:55:10.463Z');
    }
}