"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("@angular/router");
var user_view_model_1 = require("~/app/core/models/user-view-model");
var exemplo_service_1 = require("~/app/core/services/exemplo.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_page, _router, _exemploService) {
        this._page = _page;
        this._router = _router;
        this._exemploService = _exemploService;
        this._page.actionBarHidden = true;
        this.user = new user_view_model_1.UserViewModel();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('Login()');
        console.log(this.user);
        this._exemploService.obterLista().subscribe(function (resp) {
            console.log(resp);
            if (resp.success) {
                _this._router.navigate(['/Almoxarifado']);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ns-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.Router,
            exemplo_service_1.ExemploService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFxRDtBQUNyRCwwQ0FBeUM7QUFFekMscUVBQWtFO0FBQ2xFLHVFQUFxRTtBQVFyRTtJQUlFLHdCQUNVLEtBQVcsRUFDWCxPQUFlLEVBQ2YsZUFBK0I7UUFGL0IsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFFdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSwrQkFBYSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQVdDO1FBVkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVsQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzthQUMxQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTNCVSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQU1pQixXQUFJO1lBQ0YsZUFBTTtZQUNFLGdDQUFjO09BUDlCLGNBQWMsQ0E2QjFCO0lBQUQscUJBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclZpZXdNb2RlbCB9IGZyb20gJ34vYXBwL2NvcmUvbW9kZWxzL3VzZXItdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBFeGVtcGxvU2VydmljZSB9IGZyb20gJ34vYXBwL2NvcmUvc2VydmljZXMvZXhlbXBsby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB1c2VyOiBVc2VyVmlld01vZGVsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3BhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfZXhlbXBsb1NlcnZpY2U6IEV4ZW1wbG9TZXJ2aWNlXG4gICkgeyBcbiAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXJWaWV3TW9kZWwoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgY29uc29sZS5sb2coJ0xvZ2luKCknKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIpO1xuXG4gICAgdGhpcy5fZXhlbXBsb1NlcnZpY2Uub2J0ZXJMaXN0YSgpLnN1YnNjcmliZSgocmVzcDogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwKTtcblxuICAgICAgaWYgKHJlc3Auc3VjY2Vzcykge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvQWxtb3hhcmlmYWRvJ10pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==