System.register(['angular2/core', 'angular2/router', "./components/static.component", "./components/consonant.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, static_component_1, consonant_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (static_component_1_1) {
                static_component_1 = static_component_1_1;
            },
            function (consonant_component_1_1) {
                consonant_component_1 = consonant_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/index',
                            name: 'Index',
                            component: static_component_1.StaticComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/consonant',
                            name: 'Consonant',
                            component: consonant_component_1.ConsonantComponent
                        },
                        new router_1.AsyncRoute({
                            path: "/sub",
                            name: "Sub",
                            loader: function () { return System.import("app/components/mvc.component").then(function (c) { return c["MvcComponent"]; }); }
                        }),
                        new router_1.AsyncRoute({
                            path: "/numbers",
                            name: "Numbers",
                            loader: function () { return System.import("app/components/api.component").then(function (c) { return c["ApiComponent"]; }); }
                        })
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map