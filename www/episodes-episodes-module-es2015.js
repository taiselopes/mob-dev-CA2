(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episodes-episodes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar color=\"primary\">\r\n\t\t<ion-title>Episodes</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n        loadingSpinner=\"bubbles\"\r\n        loadingText=\"Loading more episodes...\">\r\n\t\t\r\n\t\t\t<ion-card button detail lines=\"inset\" *ngFor=\"let episode of episodes | async\"\r\n\t\t\t\t(click)=\"openDetails(episode)\">\r\n                <ion-item>\r\n\t\t\t\t<h2>{{ episode.title }}</h2>\r\n                </ion-item>\r\n                <ion-item>\r\n\t\t\t\t<p>{{ episode.series}} - Season: {{ episode.season }}</p>\r\n\r\n                </ion-item>\r\n\r\n                \r\n                \r\n\t\t\t</ion-card>\r\n\t\t\r\n        </ion-infinite-scroll-content>\r\n\t</ion-infinite-scroll>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/episodes/episodes-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/episodes/episodes-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EpisodesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPageRoutingModule", function() { return EpisodesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _episodes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./episodes.page */ "./src/app/pages/episodes/episodes.page.ts");




const routes = [
    {
        path: '',
        component: _episodes_page__WEBPACK_IMPORTED_MODULE_3__["EpisodesPage"]
    }
];
let EpisodesPageRoutingModule = class EpisodesPageRoutingModule {
};
EpisodesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EpisodesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/episodes/episodes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/episodes/episodes.module.ts ***!
  \***************************************************/
/*! exports provided: EpisodesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPageModule", function() { return EpisodesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./episodes-routing.module */ "./src/app/pages/episodes/episodes-routing.module.ts");
/* harmony import */ var _episodes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./episodes.page */ "./src/app/pages/episodes/episodes.page.ts");







let EpisodesPageModule = class EpisodesPageModule {
};
EpisodesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodesPageRoutingModule"]
        ],
        declarations: [_episodes_page__WEBPACK_IMPORTED_MODULE_6__["EpisodesPage"]]
    })
], EpisodesPageModule);



/***/ }),

/***/ "./src/app/pages/episodes/episodes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/episodes/episodes.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  color: black;\n  font-size: 18px;\n  padding: 5px;\n  font-weight: bold;\n}\n\np {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXBpc29kZXMvQzpcXHpcXG1vYkNBMy9zcmNcXGFwcFxccGFnZXNcXGVwaXNvZGVzXFxlcGlzb2Rlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VwaXNvZGVzL2VwaXNvZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0E7RUFDSSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lcGlzb2Rlcy9lcGlzb2Rlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59IiwiaDIge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/episodes/episodes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/episodes/episodes.page.ts ***!
  \*************************************************/
/*! exports provided: EpisodesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPage", function() { return EpisodesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




let EpisodesPage = class EpisodesPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
    }
    ngOnInit() {
        this.episodes = this.api.getEpisodes();
        this.episodes.subscribe(data => {
            console.log('my data: ', data);
        });
    }
    openDetails(episode) {
        let episodeId = episode.episode_id;
        this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
        console.log('my dataEpisodeDetails: ', episodeId);
    }
    loadData(event) {
    }
};
EpisodesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
EpisodesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-episodes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./episodes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./episodes.page.scss */ "./src/app/pages/episodes/episodes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], EpisodesPage);



/***/ })

}]);
//# sourceMappingURL=episodes-episodes-module-es2015.js.map