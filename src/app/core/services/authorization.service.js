"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AuthorizationService = /** @class */ (function () {
    function AuthorizationService(_httpClient) {
        this._httpClient = _httpClient;
        this.server = 'https://praxio-invent.azurewebsites.net/Api/';
    }
    AuthorizationService.prototype.autenticar = function (body) {
        return this._httpClient.post(this.server + 'Authorization', body);
    };
    AuthorizationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthorizationService);
    return AuthorizationService;
}());
exports.AuthorizationService = AuthorizationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aG9yaXphdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQU1sRDtJQUdJLDhCQUNZLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBSDNCLFdBQU0sR0FBRyw4Q0FBOEMsQ0FBQztJQUk1RCxDQUFDO0lBRUwseUNBQVUsR0FBVixVQUFXLElBQWdDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQVRRLG9CQUFvQjtRQUhoQyxpQkFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQzt5Q0FLMkIsaUJBQVU7T0FKMUIsb0JBQW9CLENBVWhDO0lBQUQsMkJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBBdXRlbnRpY2FyVXN1YXJpb1ZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvYXV0ZW50aWNhci11c3VhcmlvLXZpZXctbW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aG9yaXphdGlvblNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzZXJ2ZXIgPSAnaHR0cHM6Ly9wcmF4aW8taW52ZW50LmF6dXJld2Vic2l0ZXMubmV0L0FwaS8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2h0dHBDbGllbnQ6IEh0dHBDbGllbnRcclxuICAgICkgeyB9XHJcblxyXG4gICAgYXV0ZW50aWNhcihib2R5OiBBdXRlbnRpY2FyVXN1YXJpb1ZpZXdNb2RlbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwQ2xpZW50LnBvc3QodGhpcy5zZXJ2ZXIgKyAnQXV0aG9yaXphdGlvbicsIGJvZHkpO1xyXG4gICAgfVxyXG59Il19