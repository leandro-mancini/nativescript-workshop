"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("@angular/router");
var autenticar_usuario_view_model_1 = require("~/app/core/models/autenticar-usuario-view-model");
var authorization_service_1 = require("~/app/core/services/authorization.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_page, _router, _authorizationService) {
        this._page = _page;
        this._router = _router;
        this._authorizationService = _authorizationService;
        this.loading = false;
        this._page.actionBarHidden = true;
        this.user = new autenticar_usuario_view_model_1.AutenticarUsuarioViewModel();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.user.usuario && this.user.senha) {
            this.loading = true;
            this._authorizationService.autenticar(this.user).subscribe(function (resp) {
                console.log(resp);
                if (resp.success) {
                    _this._router.navigate(['/Almoxarifado']);
                }
                else {
                    alert(resp.message);
                }
                _this.loading = false;
            });
        }
        else {
            alert('Preencha todos os campos.');
        }
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
            authorization_service_1.AuthorizationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFxRDtBQUNyRCwwQ0FBeUM7QUFFekMsaUdBQTZGO0FBQzdGLG1GQUFpRjtBQVFqRjtJQUtFLHdCQUNVLEtBQVcsRUFDWCxPQUFlLEVBQ2YscUJBQTJDO1FBRjNDLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtRQUxyRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBT2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSwwREFBMEIsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFrQkM7UUFqQkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUVwQixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTO2dCQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVsQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztpQkFDMUM7cUJBQU07b0JBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDckI7Z0JBRUQsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBbkNVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBT2lCLFdBQUk7WUFDRixlQUFNO1lBQ1EsNENBQW9CO09BUjFDLGNBQWMsQ0FxQzFCO0lBQUQscUJBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBBdXRlbnRpY2FyVXN1YXJpb1ZpZXdNb2RlbCB9IGZyb20gJ34vYXBwL2NvcmUvbW9kZWxzL2F1dGVudGljYXItdXN1YXJpby12aWV3LW1vZGVsJztcclxuaW1wb3J0IHsgQXV0aG9yaXphdGlvblNlcnZpY2UgfSBmcm9tICd+L2FwcC9jb3JlL3NlcnZpY2VzL2F1dGhvcml6YXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25zLWxvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXSxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICB1c2VyOiBBdXRlbnRpY2FyVXN1YXJpb1ZpZXdNb2RlbDtcclxuICBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfcGFnZTogUGFnZSxcclxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBfYXV0aG9yaXphdGlvblNlcnZpY2U6IEF1dGhvcml6YXRpb25TZXJ2aWNlXHJcbiAgKSB7IFxyXG4gICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy51c2VyID0gbmV3IEF1dGVudGljYXJVc3VhcmlvVmlld01vZGVsKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGxvZ2luKCkge1xyXG4gICAgaWYgKHRoaXMudXNlci51c3VhcmlvICYmIHRoaXMudXNlci5zZW5oYSkge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5fYXV0aG9yaXphdGlvblNlcnZpY2UuYXV0ZW50aWNhcih0aGlzLnVzZXIpLnN1YnNjcmliZSgocmVzcDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcCk7XHJcbiAgXHJcbiAgICAgICAgaWYgKHJlc3Auc3VjY2Vzcykge1xyXG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL0FsbW94YXJpZmFkbyddKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQocmVzcC5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ1ByZWVuY2hhIHRvZG9zIG9zIGNhbXBvcy4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==