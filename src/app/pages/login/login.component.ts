import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { Router } from '@angular/router';

import { AutenticarUsuarioViewModel } from '~/app/core/models/autenticar-usuario-view-model';
import { AuthorizationService } from '~/app/core/services/authorization.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

  user: AutenticarUsuarioViewModel;

  constructor(
    private _page: Page,
    private _router: Router,
    private _authorizationService: AuthorizationService
  ) { 
    this._page.actionBarHidden = true;
    this.user = new AutenticarUsuarioViewModel();
  }

  ngOnInit() {
  }

  login() {
    this._authorizationService.autenticar(this.user).subscribe((resp: any) => {
      console.log(resp);

      if (resp.success) {
        this._router.navigate(['/Almoxarifado']);
      } else {
        alert(resp.message);
      }
    });
  }

}
