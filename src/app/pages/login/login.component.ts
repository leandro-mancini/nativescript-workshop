import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { Router } from '@angular/router';

import { UserViewModel } from '~/app/core/models/user-view-model';
import { ExemploService } from '~/app/core/services/exemplo.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

  user: UserViewModel;

  constructor(
    private _page: Page,
    private _router: Router,
    private _exemploService: ExemploService
  ) { 
    this._page.actionBarHidden = true;
    this.user = new UserViewModel();
  }

  ngOnInit() {
  }

  login() {
    console.log('Login()');
    console.log(this.user);

    this._exemploService.obterLista().subscribe((resp: any) => {
      console.log(resp);

      if (resp.success) {
        this._router.navigate(['/Almoxarifado']);
      }
    });
  }

}
