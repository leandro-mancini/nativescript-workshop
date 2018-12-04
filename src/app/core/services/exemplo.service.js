"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ExemploService = /** @class */ (function () {
    function ExemploService(httpClient) {
        this.httpClient = httpClient;
        this.server = 'https://cpereira-escala.azurewebsites.net/Api/';
    }
    ExemploService.prototype.obterLista = function () {
        return this.httpClient.get(this.server + 'EscalaDiaria/ObterDias/2018-12-04T01:55:10.463Z');
    };
    ExemploService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ExemploService);
    return ExemploService;
}());
exports.ExemploService = ExemploService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlbXBsby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhlbXBsby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUtsRDtJQUdJLHdCQUNZLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIMUIsV0FBTSxHQUFHLGdEQUFnRCxDQUFDO0lBSTlELENBQUM7SUFFTCxtQ0FBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLGlEQUFpRCxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQVRRLGNBQWM7UUFIMUIsaUJBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7eUNBSzBCLGlCQUFVO09BSnpCLGNBQWMsQ0FVMUI7SUFBRCxxQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGVtcGxvU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHNlcnZlciA9ICdodHRwczovL2NwZXJlaXJhLWVzY2FsYS5henVyZXdlYnNpdGVzLm5ldC9BcGkvJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnRcclxuICAgICkgeyB9XHJcblxyXG4gICAgb2J0ZXJMaXN0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldCh0aGlzLnNlcnZlciArICdFc2NhbGFEaWFyaWEvT2J0ZXJEaWFzLzIwMTgtMTItMDRUMDE6NTU6MTAuNDYzWicpO1xyXG4gICAgfVxyXG59Il19