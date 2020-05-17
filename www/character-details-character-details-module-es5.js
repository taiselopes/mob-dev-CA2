function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-details-character-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCharacterDetailsCharacterDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar color=\"primary\">\r\n\t\t<ion-buttons slot=\"start\" defaulthref=\"/tabs/episodes\">\r\n\t\t\t<ion-back-button></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Character Details</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n\t<ion-card *ngIf=\"character\">\r\n\r\n\t\t<ion-card-content>\r\n\t\t\t<ion-card-content class=\"charTitle\">\r\n\t\t\t\t{{ character.name }}\r\n\r\n\t\t\t\t<ion-icon (click)=\"unfavouriteCharacter()\" *ngIf=\"isFavourite\" class=\"heartIcon\" name=\"heart\"></ion-icon>\r\n\t\t\t\t<ion-icon (click)=\"favouriteCharacter()\" *ngIf=\"!isFavourite\" class=\"heartIconOut\" name=\"heart-outline\">\r\n\t\t\t\t</ion-icon>\r\n\r\n\t\t\t</ion-card-content>\r\n\r\n\t\t\t<img src=\"{{character.img}}\">\r\n\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\tName: {{ character.name }}\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-icon name=\"happy-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\tNick Name: {{ character.nickname }}\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\tBirthday: {{ character.birthday }}\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-icon name=\"camera-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\tPortrayed: {{ character.portrayed }}\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-icon name=\"videocam-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\tCategory: {{ character.category }}\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-icon name=\"alarm-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\tStatus: {{ character.status }}\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-icon name=\"briefcase-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\tOccupation: {{ character.occupation }}\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-icon name=\"eye-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\tAppearance: {{ character.appearance }}\r\n\t\t\t</ion-item>\r\n\r\n\t\t</ion-card-content>\r\n\t</ion-card>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/character-details/character-details-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/character-details/character-details-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: CharacterDetailsPageRoutingModule */

  /***/
  function srcAppPagesCharacterDetailsCharacterDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageRoutingModule", function () {
      return CharacterDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _character_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./character-details.page */
    "./src/app/pages/character-details/character-details.page.ts");

    var routes = [{
      path: '',
      component: _character_details_page__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailsPage"]
    }];

    var CharacterDetailsPageRoutingModule = function CharacterDetailsPageRoutingModule() {
      _classCallCheck(this, CharacterDetailsPageRoutingModule);
    };

    CharacterDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CharacterDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/character-details/character-details.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/character-details/character-details.module.ts ***!
    \*********************************************************************/

  /*! exports provided: CharacterDetailsPageModule */

  /***/
  function srcAppPagesCharacterDetailsCharacterDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageModule", function () {
      return CharacterDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./character-details-routing.module */
    "./src/app/pages/character-details/character-details-routing.module.ts");
    /* harmony import */


    var _character_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./character-details.page */
    "./src/app/pages/character-details/character-details.page.ts");

    var CharacterDetailsPageModule = function CharacterDetailsPageModule() {
      _classCallCheck(this, CharacterDetailsPageModule);
    };

    CharacterDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharacterDetailsPageRoutingModule"]],
      declarations: [_character_details_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsPage"]]
    })], CharacterDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/character-details/character-details.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/character-details/character-details.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCharacterDetailsCharacterDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".heartIcon {\n  color: #D93425;\n  position: absolute;\n  right: 15px;\n  font-size: 30px;\n}\n\n.heartIconOut {\n  position: absolute;\n  right: 15px;\n  font-size: 30px;\n}\n\nimg {\n  width: 180px;\n  height: auto;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n\n.charTitle {\n  background: #F29544;\n  font-size: 20px;\n  font-weight: bold;\n  color: #292525;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhcmFjdGVyLWRldGFpbHMvQzpcXHpcXG1vYkNBMy9zcmNcXGFwcFxccGFnZXNcXGNoYXJhY3Rlci1kZXRhaWxzXFxjaGFyYWN0ZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXJhY3Rlci1kZXRhaWxzL2NoYXJhY3Rlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSDs7QURJQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhcmFjdGVyLWRldGFpbHMvY2hhcmFjdGVyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFydEljb24ge1xyXG4gICAgY29sb3I6ICNEOTM0MjU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmhlYXJ0SWNvbk91dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgd2lkdGg6IDE4MHB4O1xyXG4gICBoZWlnaHQ6IGF1dG87XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gXHJcbn1cclxuXHJcbi5jaGFyVGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogI0YyOTU0NDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6cmdiKDQxLCAzNywgMzcpO1xyXG5cclxufVxyXG5cclxuIiwiLmhlYXJ0SWNvbiB7XG4gIGNvbG9yOiAjRDkzNDI1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5oZWFydEljb25PdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNoYXJUaXRsZSB7XG4gIGJhY2tncm91bmQ6ICNGMjk1NDQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjkyNTI1O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/character-details/character-details.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/character-details/character-details.page.ts ***!
    \*******************************************************************/

  /*! exports provided: CharacterDetailsPage */

  /***/
  function srcAppPagesCharacterDetailsCharacterDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterDetailsPage", function () {
      return CharacterDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_favourites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/favourites.service */
    "./src/app/services/favourites.service.ts");

    var CharacterDetailsPage = /*#__PURE__*/function () {
      function CharacterDetailsPage(activatedRoute, api, favouritesService) {
        _classCallCheck(this, CharacterDetailsPage);

        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouritesService = favouritesService;
        this.isFavourite = false;
        this.characterId = null;
      }

      _createClass(CharacterDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
          this.api.getCharacter(this.characterId).subscribe(function (res) {
            _this.character = res[0];
            console.log(JSON.stringify(_this.characterId));
            console.log(_this.character);
          });
          this.favouritesService.isFavouriteCharacters(this.characterId).then(function (isFav) {
            _this.isFavourite = isFav;
          });
        }
      }, {
        key: "favouriteCharacter",
        value: function favouriteCharacter() {
          var _this2 = this;

          this.favouritesService.favouriteCharacters(this.characterId).then(function () {
            _this2.isFavourite = true;
          });
        }
      }, {
        key: "unfavouriteCharacter",
        value: function unfavouriteCharacter() {
          var _this3 = this;

          this.favouritesService.unfavouriteCharacters(this.characterId).then(function () {
            _this3.isFavourite = false;
          });
        }
      }]);

      return CharacterDetailsPage;
    }();

    CharacterDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _services_favourites_service__WEBPACK_IMPORTED_MODULE_4__["FavouritesService"]
      }];
    };

    CharacterDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-character-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./character-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./character-details.page.scss */
      "./src/app/pages/character-details/character-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _services_favourites_service__WEBPACK_IMPORTED_MODULE_4__["FavouritesService"]])], CharacterDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=character-details-character-details-module-es5.js.map