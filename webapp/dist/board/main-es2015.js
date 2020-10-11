(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/animus/Projekte/hackathon/webapp/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BPwi":
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/app.service */ "OaWH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _map_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/rest.service */ "t7eW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map/map.component */ "cNoH");









class OverviewComponent {
    constructor(appService, activatedRoute, router, restService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.restService = restService;
        this.appService = appService;
    }
    ngOnInit() {
        this.activatedRoute.fragment.subscribe(fragment => this.appService.city = fragment);
    }
    updateCity() {
        this.router.navigate(['overview'], { fragment: this.appService.city });
    }
    updateWork() {
    }
    formatLabel(value) {
        if (value > 7) {
            return "+++";
        }
        else if (value < 8 && value > 3) {
            return "++";
        }
        else {
            return "+";
        }
    }
    change() {
        const tiles = JSON.parse(JSON.stringify(this.restService.initialTiles));
        for (const tile of tiles) {
            //console.log(tile.barScore)
            tile.barScore += tile.barScore / 0.04 * this.appService.barsValue;
            if (this.appService.barsValue === 0) {
                tile.barScore = 0;
            }
            tile.groceriesScore += tile.groceriesScore / 0.04 * this.appService.groceriesValue;
            if (this.appService.groceriesValue === 0) {
                tile.groceriesValue = 0;
            }
            tile.parkingLotScore += tile.parkingLotScore / 0.04 * this.appService.parkingLotsValue;
            if (this.appService.parkingLotsValue === 0) {
                tile.parkingLotsValue = 0;
            }
            tile.restaurantScore += tile.restaurantScore / 0.04 * this.appService.restaurantsValue;
            if (this.appService.restaurantsValue === 0) {
                tile.restaurantsValue = 0;
            }
            tile.transportationScore += tile.transportationScore / 0.04 * this.appService.transportationValue;
            if (this.appService.transportationValue === 0) {
                tile.transportationValue = 0;
            }
        }
        console.log(tiles);
        this.restService.tiles.next(tiles);
    }
    getVal(value) {
        if (value === 6) {
            return 0.2;
        }
        else if (value === 7) {
            return 0.3;
        }
        else if (value === 8) {
            return 0.4;
        }
        else if (value === 9) {
            return 0.5;
        }
        else if (value === 10) {
            return 0.6;
        }
        if (value === 4) {
            return -0.1;
        }
        else if (value === 3) {
            return -0.2;
        }
        else if (value === 2) {
            return -0.3;
        }
        else if (value === 1) {
            return -0.4;
        }
        else if (value === 0) {
            return -0.5;
        }
        return 1;
    }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"])); };
OverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["app-overview"]], decls: 67, vars: 22, consts: [[1, "d-flex", "flex-column", "h-100", "w-100", "main"], [1, "row", "w-100", "flex-nowrap"], [1, "col-3", "pt-1", "display-flex", "justify-content-center"], ["src", "../../assets/logo.svg", "routerLink", "/", 1, "logo"], [1, "col"], [1, "container", "d-flex", "justify-content-between"], [1, "col-md-auto", "d-flex", "pb-3", "pt-3"], ["placeholder", "Enter your City", 1, "city-input", "xl-font", 3, "ngModel", "ngModelChange", "keyup.enter", "blur"], ["placeholder", "Enter your working address", 1, "city-input", "xl-font", 3, "ngModel", "ngModelChange", "keyup.enter", "blur"], [1, "row", "w-100", "bg", "flex-grow-1"], [1, "col-3", "pt-5", "display-flex", "justify-content-center", "menu-bg"], [1, "container", "d-flex", "justify-content-center", "align-items-center"], [1, "col", "scoring"], [1, "row"], [3, "ngModel", "ngModelChange"], ["min", "0", "max", "10", "step", "1", "thumbLabel", "", 3, "displayWith", "ngModel", "ngModelChange", "change"], ["min", "0", "max", "10", "step", "1", "thumbLabel", "", 3, "displayWith"], [1, "col", "p-0", "justify-content-center"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_Template_input_ngModelChange_7_listener($event) { return ctx.appService.city = $event; })("keyup.enter", function OverviewComponent_Template_input_keyup_enter_7_listener() { return ctx.updateCity(); })("blur", function OverviewComponent_Template_input_blur_7_listener() { return ctx.updateCity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_Template_input_ngModelChange_9_listener($event) { return ctx.work = $event; })("keyup.enter", function OverviewComponent_Template_input_keyup_enter_9_listener() { return ctx.updateWork(); })("blur", function OverviewComponent_Template_input_blur_9_listener() { return ctx.updateWork(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_Template_mat_checkbox_ngModelChange_15_listener($event) { return ctx.appService.groceriesChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Groceries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_Template_mat_checkbox_ngModelChange_18_listener($event) { return ctx.appService.transportationChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Transportation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_Template_mat_checkbox_ngModelChange_21_listener($event) { return ctx.appService.barsChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Bars/Cafe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_Template_mat_checkbox_ngModelChange_24_listener($event) { return ctx.appService.parkingLotsChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Parking lots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_Template_mat_checkbox_ngModelChange_27_listener($event) { return ctx.appService.restaurantsChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Restaurants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Nature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Crime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Air Quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-slider", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_Template_mat_slider_ngModelChange_46_listener($event) { return ctx.appService.groceriesValue = $event; })("change", function OverviewComponent_Template_mat_slider_change_46_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-slider", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_Template_mat_slider_ngModelChange_48_listener($event) { return ctx.appService.transportationValue = $event; })("change", function OverviewComponent_Template_mat_slider_change_48_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-slider", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_Template_mat_slider_ngModelChange_50_listener($event) { return ctx.appService.barsValue = $event; })("change", function OverviewComponent_Template_mat_slider_change_50_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-slider", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_Template_mat_slider_ngModelChange_52_listener($event) { return ctx.appService.parkingLotsValue = $event; })("change", function OverviewComponent_Template_mat_slider_change_52_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-slider", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_Template_mat_slider_ngModelChange_54_listener($event) { return ctx.appService.restaurantsValue = $event; })("change", function OverviewComponent_Template_mat_slider_change_54_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "mat-slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "mat-slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "mat-slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "mat-slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "mat-slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "app-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.appService.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.work);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.appService.groceriesChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.appService.transportationChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.appService.barsChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.appService.parkingLotsChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.appService.restaurantsChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel)("ngModel", ctx.appService.groceriesValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel)("ngModel", ctx.appService.transportationValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel)("ngModel", ctx.appService.barsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel)("ngModel", ctx.appService.parkingLotsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel)("ngModel", ctx.appService.restaurantsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSlider"], _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  background-color: #F5F3F7;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background: #b2b0c0;\n}\n\n.menu-bg[_ngcontent-%COMP%] {\n  background: #9390a6;\n}\n\n.xl-font[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n  cursor: pointer;\n}\n\n.scoring[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  align-content: center;\n  height: 50px;\n}\n\n.city-input[_ngcontent-%COMP%] {\n  width: 360px;\n  background: #fff;\n  color: #534f6d;\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);\n  border: 0;\n  outline: 0;\n  padding: 10px 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkNIUztBREViOztBQUlBO0VBQ0ksYUFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREo7O0FBS0k7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFGUjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRiYWNrZ3JvdW5kO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYmcge1xuICAgIGJhY2tncm91bmQ6ICNiMmIwYzA7XG59XG5cbi5tZW51LWJnIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTM5MGE2O1xufVxuXG4ueGwtZm9udCB7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zY29yaW5nICB7XG4gICAgLnJvdyB7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbn1cblxuLmNpdHktaW5wdXQge1xuICAgIHdpZHRoOiAzNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjNTM0ZjZkO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAgLCAuMSk7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xufVxuIiwiJGJhY2tncm91bmQ6ICNGNUYzRjdcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-overview',
                templateUrl: './overview.component.html',
                styleUrls: ['./overview.component.scss']
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _map_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] }]; }, null); })();


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class LandingComponent {
    constructor(router) {
        this.router = router;
        this.cityFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
    }
    ngOnInit() {
    }
    search() {
        this.router.navigate(['overview'], { fragment: this.cityFormControl.value });
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 22, vars: 1, consts: [[1, "container-fluid", "w-100", "h-100", "main"], [1, "container", "h-10", "d-flex", "justify-content-center", "align-items-center"], ["src", "../../assets/logo.svg", 1, "logo"], [1, "city-form", 3, "ngSubmit"], ["placeholder", "Enter your City", 1, "city-input", 3, "formControl"], [1, "container", "h-10", "d-flex", "justify-content-center", "align-items-center", "button-container"], ["mat-flat-button", "", "color", "accent", 3, "click"], [1, "blockquote-wrapper"], [1, "blockquote"], [2, "color", "#fdcd5c"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LandingComponent_Template_form_ngSubmit_4_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_7_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Match me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Don\u2019t buy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "the house");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ", buy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "the neighborhood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u2014Russian Proverb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.cityFormControl);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".main[_ngcontent-%COMP%] {\n  background-color: #F5F3F7;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 250px;\n  padding-right: 100px;\n}\n\n.city-form[_ngcontent-%COMP%] {\n  width: 400px;\n  font-size: x-large;\n}\n\n.city-input[_ngcontent-%COMP%] {\n  width: 360px;\n  background: #fff;\n  color: #534f6d;\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);\n  border: 0;\n  outline: 0;\n  padding: 15px 18px;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-right: 100px;\n}\n\n.blockquote-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 20px;\n}\n\n\n\n.blockquote[_ngcontent-%COMP%] {\n  position: relative;\n  font-family: \"Barlow Condensed\", sans-serif;\n  max-width: 620px;\n  margin: 80px auto;\n  align-self: center;\n}\n\n\n\n.blockquote[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Abril Fatface\", cursive;\n  position: relative;\n  \n  color: #534f6d;\n  font-size: 1.5rem;\n  font-weight: normal;\n  line-height: 1;\n  margin: 0;\n  border: 2px solid #fff;\n  border: solid 2px;\n  border-radius: 20px;\n  padding: 25px;\n}\n\n\n\n.blockquote[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  border: 2px solid #534f6d;\n  border-radius: 0 50px 0 0;\n  width: 60px;\n  height: 60px;\n  bottom: -60px;\n  left: 50px;\n  border-bottom: none;\n  border-left: none;\n  z-index: 3;\n}\n\n.blockquote[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 80px;\n  border: 6px solid #F5F3F7;\n  bottom: -3px;\n  left: 50px;\n  z-index: 2;\n}\n\n\n\n@media all and (min-width: 600px) {\n  .blockquote[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    line-height: 1;\n  }\n}\n\n\n\n.blockquote[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  position: relative;\n  color: #534f6d;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.2;\n  margin: 0;\n  padding-top: 15px;\n  z-index: 1;\n  margin-left: 150px;\n  padding-left: 12px;\n}\n\n.blockquote[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:first-letter {\n  margin-left: -12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJDSFM7QURFYjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQywwQkFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFETDs7QUFJQyxzQkFBQTs7QUFDQTtFQUNJLHFDQUFBO0VBQ0Esa0JBQUE7RUFBb0IsZ0JBQUE7RUFDcEIsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFBTDs7QUFHQyxtQ0FBQTs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFBTDs7QUFHQztFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUFMOztBQUdDLHFDQUFBOztBQUNBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGNBQUE7RUFBUDtBQUNGOztBQUlDLHlCQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZMOztBQU1DO0VBQ0Usa0JBQUE7QUFISCIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4ubWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokYmFja2dyb3VuZDtcbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xufVxuXG4uY2l0eS1mb3JtIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG4uY2l0eS1pbnB1dCB7XG4gICAgd2lkdGg6IDM2MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICM1MzRmNmQ7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCAsIC4xKTtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBwYWRkaW5nOiAxNXB4IDE4cHg7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweCAgICAgICAgICAgICAgICAgICAgICAgIDtcbn1cblxuLmJsb2NrcXVvdGUtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gfVxuIFxuIC8qIEJsb2NrcXVvdGUgbWFpbiBzdHlsZSAqL1xuIC5ibG9ja3F1b3RlIHtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICAgICBtYXgtd2lkdGg6IDYyMHB4O1xuICAgICBtYXJnaW46IDgwcHggYXV0bztcbiAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuIH1cbiBcbiAvKiBCbG9ja3F1b3RlIGhlYWRlciAqL1xuIC5ibG9ja3F1b3RlIGgxIHtcbiAgICAgZm9udC1mYW1pbHk6ICdBYnJpbCBGYXRmYWNlJywgY3Vyc2l2ZTtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBmb3IgcHNldWRvcyAqL1xuICAgICBjb2xvcjogIzUzNGY2ZDtcbiAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICBtYXJnaW46IDA7XG4gICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgIGJvcmRlcjogc29saWQgMnB4O1xuICAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgIHBhZGRpbmc6IDI1cHg7XG4gfVxuIFxuIC8qIEJsb2NrcXVvdGUgcmlnaHQgZG91YmxlIHF1b3RlcyAqL1xuIC5ibG9ja3F1b3RlIGgxOmFmdGVyIHtcbiAgICAgY29udGVudDpcIlwiO1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MzRmNmQ7XG4gICAgIGJvcmRlci1yYWRpdXM6IDAgNTBweCAwIDA7XG4gICAgIHdpZHRoOiA2MHB4O1xuICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgIGJvdHRvbTogLTYwcHg7XG4gICAgIGxlZnQ6IDUwcHg7XG4gICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICB6LWluZGV4OiAzOyBcbiB9XG4gXG4gLmJsb2NrcXVvdGUgaDE6YmVmb3JlIHtcbiAgICAgY29udGVudDpcIlwiO1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIHdpZHRoOiA4MHB4O1xuICAgICBib3JkZXI6IDZweCBzb2xpZCAkYmFja2dyb3VuZDtcbiAgICAgYm90dG9tOiAtM3B4O1xuICAgICBsZWZ0OiA1MHB4O1xuICAgICB6LWluZGV4OiAyO1xuIH1cbiBcbiAvKiBpbmNyZWFzZSBoZWFkZXIgc2l6ZSBhZnRlciA2MDBweCAqL1xuIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgIC5ibG9ja3F1b3RlIGgxIHtcbiAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuIFxuIH1cbiBcbiAvKiBCbG9ja3F1b3RlIHN1YmhlYWRlciAqL1xuIC5ibG9ja3F1b3RlIGg0IHtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBjb2xvcjogIzUzNGY2ZDtcbiAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICBtYXJnaW46IDA7XG4gICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICB6LWluZGV4OiAxO1xuICAgICBtYXJnaW4tbGVmdDoxNTBweDtcbiAgICAgcGFkZGluZy1sZWZ0OjEycHg7XG4gfVxuIFxuICBcbiAuYmxvY2txdW90ZSBoNDpmaXJzdC1sZXR0ZXIge1xuICAgbWFyZ2luLWxlZnQ6LTEycHg7XG4gfVxuIiwiJGJhY2tncm91bmQ6ICNGNUYzRjdcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "OaWH":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AppService {
    constructor() {
        this.groceriesValue = 1;
        this.transportationValue = 1;
        this.barsValue = 1;
        this.parkingLotsValue = 1;
        this.restaurantsValue = 1;
        this.groceriesChecked = true;
        this.transportationChecked = true;
        this.barsChecked = true;
        this.parkingLotsChecked = true;
        this.restaurantsChecked = true;
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 0, consts: [[1, "container-fluid", "d-flex", "w-100", "main", "footer"], [1, "col", "w-50"], [1, "col", "w-50", "d-flex", "flex-row-reverse"], ["href", "http://", 1, "link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A9 2020 - 2020 GoodHood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sitemap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Imprint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cookie Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\n  background-color: #F5F3F7;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: #4e4e4e;\n  padding-right: 50px;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJDSFM7QURFYjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4ubWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokYmFja2dyb3VuZDtcbn1cbi5mb290ZXIge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbn1cblxuLmxpbmsge1xuICAgIGNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSIsIiRiYWNrZ3JvdW5kOiAjRjVGM0Y3XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map/map.module */ "yX1w");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overview/overview.component */ "BPwi");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/app.service */ "OaWH");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_17__["AppService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _map_map_module__WEBPACK_IMPORTED_MODULE_10__["MapModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _overview_overview_component__WEBPACK_IMPORTED_MODULE_12__["OverviewComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_14__["LandingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _map_map_module__WEBPACK_IMPORTED_MODULE_10__["MapModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _overview_overview_component__WEBPACK_IMPORTED_MODULE_12__["OverviewComponent"],
                    _landing_landing_component__WEBPACK_IMPORTED_MODULE_14__["LandingComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                    _map_map_module__WEBPACK_IMPORTED_MODULE_10__["MapModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                ],
                providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_17__["AppService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cNoH":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet_heat_dist_leaflet_heat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet.heat/dist/leaflet-heat.js */ "pmIE");
/* harmony import */ var leaflet_heat_dist_leaflet_heat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_heat_dist_leaflet_heat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rest.service */ "t7eW");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "OwhE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["tooltip"];
function MapComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Neugierig? Finde ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "hier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Wohnungen in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://www.kalaydo.de/immobilien/mietwohnungen/o/3/4/?geoName=" + ctx_r1.address, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.address);
} }
function MapComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "W\u00E4hle links deine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pr\u00E4ferenzen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " f\u00FCr die ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "perfekte Nachbarschaft!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MapComponent {
    constructor(chRef, restService) {
        this.chRef = chRef;
        this.restService = restService;
        this.inKm = 1 / 111 / 10;
        this.centerLong = 48.4060822;
        this.centerLat = 9.9876076;
        this.address = "";
        this.options = {
            layers: [
                leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    maxZoom: 16,
                    attribution: "...",
                }),
            ],
            zoom: 14,
            center: leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"](this.centerLong - this.inKm * 13, this.centerLat + this.inKm * 13),
        };
        this.layers = [];
        this.newAddressPoints = [];
    }
    ngOnInit() { }
    onMapReady(map) {
        this.restService.getAllTiles().subscribe();
        this.restService.tiles.subscribe((tiles) => {
            this.newAddressPoints = [];
            let max = 0;
            tiles.forEach((tile) => {
                if (avg(tile) > max) {
                    max = avg(tile);
                }
                this.newAddressPoints.push([tile.latitude, tile.longitude, avg(tile)]);
            });
            this.newAddressPoints.forEach((x) => (x[2] = x[2] / max));
            console.log(max);
            if (this.heat) {
                this.heat.remove();
            }
            this.heat = leaflet__WEBPACK_IMPORTED_MODULE_1__["heatLayer"](this.newAddressPoints, {
                radius: 30,
                blur: 20,
                gradient: {
                    0.0: "red",
                    0.9: "yellow",
                    1.0: "green",
                },
            });
            this.heat = this.heat.addTo(map);
        });
        map.on("mousemove", this.mouseMv.bind(this));
    }
    mouseMv(e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        const rect = [
            [lat - (lat % this.inKm), lng - (lng % this.inKm)],
            [lat - (lat % this.inKm) + this.inKm, lng - (lng % this.inKm)],
            [
                lat - (lat % this.inKm) + this.inKm,
                lng - (lng % this.inKm) + this.inKm,
            ],
            [lat - (lat % this.inKm), lng - (lng % this.inKm) + this.inKm],
        ];
        if (JSON.stringify(this.curRect) == JSON.stringify(rect)) {
            return;
        }
        this.restService.getDetails([1, 2]).subscribe((x) => {
            this.tooltipRef.nativeElement.innerHTML = "";
            const types = new Map();
            x.forEach((t) => {
                let amount = 0;
                if (types.has(t.type)) {
                    amount = types.get(t.type);
                }
                types.set(t.type, amount + 1);
            });
            this.tooltipRef.nativeElement.innerHTML = "<b>Ø 3km</b><br>";
            types.forEach((val, key) => {
                this.tooltipRef.nativeElement.innerHTML += `${key}: ${val}<br>`;
            });
        });
        this.curRect = rect;
        this.layers = [];
        const polygon = leaflet__WEBPACK_IMPORTED_MODULE_1__["polygon"](this.curRect, {
            color: "white",
        });
        const popup = polygon.bindPopup("Infos");
        popup.addEventListener("click", () => {
            this.restService.getSpecificInfos().subscribe((x) => {
                let res = "";
                for (const elem of x.elements) {
                    res += elem.tags.name;
                }
                popup.setPopupContent(res);
            });
            this.restService.reverseGeocode(this.curRect[0]).subscribe((x) => {
                this.address = x;
            });
        });
        this.layers.push(polygon);
        this.chRef.detectChanges();
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tooltipRef = _t.first);
    } }, decls: 6, vars: 4, consts: [["leaflet", "", "id", "mapid", 2, "height", "97%", 3, "leafletOptions", "leafletLayers", "leafletMapReady"], [1, "tooltip"], ["tooltip", ""], ["src", "assets/avatar.png", 1, "avatar"], ["class", "speechbubble", 4, "ngIf"], [1, "speechbubble"], ["target", "_blank", 3, "href"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("leafletMapReady", function MapComponent_Template_div_leafletMapReady_0_listener($event) { return ctx.onMapReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapComponent_div_4_Template, 7, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MapComponent_div_5_Template, 7, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("leafletOptions", ctx.options)("leafletLayers", ctx.layers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.address);
    } }, directives: [_asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__["LeafletDirective"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__["LeafletLayersDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".tooltip[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n  padding: 10px;\n  border-radius: 10px;\n  z-index: 1100;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  opacity: 1;\n  pointer-events: none;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 30px;\n  left: 10px;\n  width: 100px;\n  height: 100px;\n  opacity: 1;\n  z-index: 1100;\n}\n\n.speechbubble[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 140px;\n  left: 50px;\n  width: auto;\n  max-width: 300px;\n  height: auto;\n  opacity: 1;\n  z-index: 1100;\n  font-size: 1.2em;\n  background: white;\n  padding: 10px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHotaW5kZXg6IDExMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYXZhdGFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB6LWluZGV4OiAxMTAwO1xufVxuXG5cbi5zcGVlY2hidWJibGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE0MHB4O1xuICAgIGxlZnQ6IDUwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3BhY2l0eTogMTtcbiAgICB6LWluZGV4OiAxMTAwO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-map",
                templateUrl: "./map.component.html",
                styleUrls: ["./map.component.scss"],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] }]; }, { tooltipRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["tooltip"]
        }] }); })();
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function avg(tile) {
    return ((tile.parkingLotScore +
        tile.restaurantScore +
        tile.transportationScore +
        tile.groceriesScore +
        tile.barScore) /
        5 /
        100);
}


/***/ }),

/***/ "t7eW":
/*!*************************************!*\
  !*** ./src/app/map/rest.service.ts ***!
  \*************************************/
/*! exports provided: Tile, Details, RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class Tile {
}
class Details {
    constructor(id, tilesId, type, distance, nodeId) {
        this.id = id;
        this.tilesId = tilesId;
        this.type = type;
        this.distance = distance;
        this.nodeId = nodeId;
    }
}
class RestService {
    constructor(client) {
        this.client = client;
        this.tiles = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.initialTiles = [];
    }
    getDetails(coords) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([
            new Details("ID", "TilesID", "Bar", "" + Math.random() * 10000, "1015047079"),
            new Details("ID", "TilesID", "Bar", "" + Math.random() * 10000, "1015047079"),
            new Details("ID", "TilesID", "Studio", "" + Math.random() * 10000, "1015047079"),
        ]);
    }
    getSpecificInfos() {
        return this.client.get("https://api.openstreetmap.org/api/0.6/node/1015047079.json");
    }
    getAllTiles() {
        return this.client
            .get("https://e97cdbfd571e.ngrok.io/api/tiles")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((tiles) => {
            this.initialTiles = tiles;
            this.tiles.next(JSON.parse(JSON.stringify(tiles)));
        }));
    }
    reverseGeocode(coord) {
        return this.client
            .get(`https://api.opencagedata.com/geocode/v1/json?key=255440e4c59440e09a2c30126391b76a&q=${coord[0]},${coord[1]}&pretty=1`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((g) => {
            if (g.results.length === 0) {
                return "";
            }
            const comp = g.results[0].components;
            let firstPart;
            if (comp.road) {
                firstPart = comp.road;
            }
            if (comp.neighbourhood) {
                firstPart = comp.neighbourhood;
            }
            if (!firstPart) {
                return "";
            }
            if (!comp.city) {
                return "";
            }
            return `${firstPart}, ${comp.postcode} ${comp.city}`;
        }));
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview/overview.component */ "BPwi");






const routes = [
    {
        path: '',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
    },
    {
        path: 'overview',
        component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yX1w":
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "OwhE");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.component */ "cNoH");





class MapModule {
}
MapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapModule });
MapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapModule_Factory(t) { return new (t || MapModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapModule, { declarations: [_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletModule"]], exports: [_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletModule"],
                ],
                exports: [
                    _map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map