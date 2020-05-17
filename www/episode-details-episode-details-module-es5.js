function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episode-details-episode-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEpisodeDetailsEpisodeDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar color=\"primary\">\r\n\t\t<ion-buttons slot=\"start\" defaulthref=\"/tabs/episodes\">\r\n\t\t\t<ion-back-button></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Episode Details</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n\r\n\t<ion-card *ngIf=\"episode\">\r\n\r\n\t\t<ion-card-content>\r\n\t\t\t<ion-card-content class=\"episodeTitle\">\r\n\t\t\t\t{{ episode.title }}\r\n\r\n\t\t\t\t<ion-icon (click)=\"unfavouriteEpisode()\" *ngIf=\"isFavourite\" class=\"heartIcon\" name=\"heart\"></ion-icon>\r\n\t\t\t\t<ion-icon (click)=\"favouriteEpisode()\" *ngIf=\"!isFavourite\" class=\"heartIconOut\" name=\"heart-outline\">\r\n\t\t\t\t</ion-icon>\r\n\r\n\t\t\t</ion-card-content>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-icon name=\"film-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\tTitle: {{ episode.title }}\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-icon name=\"videocam-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\tSeason: {{ episode.season }}\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\tDate: {{ episode.air_date }}\r\n\t\t\t</ion-item>\r\n\r\n\t\t\t<ion-item>\r\n\t\t\t\t<ion-icon name=\"people-circle-outline\" slot=\"start\"></ion-icon>\r\n\t\t\t\tCharacters: {{ episode.characters }}\r\n\t\t\t</ion-item>\r\n\r\n\r\n\r\n\t\t</ion-card-content>\r\n\t</ion-card>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: EpisodeDetailsPageRoutingModule */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageRoutingModule", function () {
      return EpisodeDetailsPageRoutingModule;
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


    var _episode_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./episode-details.page */
    "./src/app/pages/episode-details/episode-details.page.ts");

    var routes = [{
      path: '',
      component: _episode_details_page__WEBPACK_IMPORTED_MODULE_3__["EpisodeDetailsPage"]
    }];

    var EpisodeDetailsPageRoutingModule = function EpisodeDetailsPageRoutingModule() {
      _classCallCheck(this, EpisodeDetailsPageRoutingModule);
    };

    EpisodeDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EpisodeDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details.module.ts ***!
    \*****************************************************************/

  /*! exports provided: EpisodeDetailsPageModule */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageModule", function () {
      return EpisodeDetailsPageModule;
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


    var _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./episode-details-routing.module */
    "./src/app/pages/episode-details/episode-details-routing.module.ts");
    /* harmony import */


    var _episode_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./episode-details.page */
    "./src/app/pages/episode-details/episode-details.page.ts");

    var EpisodeDetailsPageModule = function EpisodeDetailsPageModule() {
      _classCallCheck(this, EpisodeDetailsPageModule);
    };

    EpisodeDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodeDetailsPageRoutingModule"]],
      declarations: [_episode_details_page__WEBPACK_IMPORTED_MODULE_6__["EpisodeDetailsPage"]]
    })], EpisodeDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".heartIcon {\n  color: #D93425;\n  position: absolute;\n  right: 15px;\n  font-size: 30px;\n}\n\n.heartIconOut {\n  position: absolute;\n  right: 15px;\n  font-size: 30px;\n}\n\n.episodeTitle {\n  background: #F29544;\n  font-size: 20px;\n  font-weight: bold;\n  color: #292525;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXBpc29kZS1kZXRhaWxzL0M6XFx6XFxtb2JDQTMvc3JjXFxhcHBcXHBhZ2VzXFxlcGlzb2RlLWRldGFpbHNcXGVwaXNvZGUtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VwaXNvZGUtZGV0YWlscy9lcGlzb2RlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXBpc29kZS1kZXRhaWxzL2VwaXNvZGUtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhlYXJ0SWNvbiB7XHJcbiAgICBjb2xvcjogI0Q5MzQyNTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uaGVhcnRJY29uT3V0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uZXBpc29kZVRpdGxlIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMjk1NDQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOnJnYig0MSwgMzcsIDM3KTtcclxuXHJcbn0iLCIuaGVhcnRJY29uIHtcbiAgY29sb3I6ICNEOTM0MjU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmhlYXJ0SWNvbk91dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmVwaXNvZGVUaXRsZSB7XG4gIGJhY2tncm91bmQ6ICNGMjk1NDQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjkyNTI1O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details.page.ts ***!
    \***************************************************************/

  /*! exports provided: EpisodeDetailsPage */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPage", function () {
      return EpisodeDetailsPage;
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

    var EpisodeDetailsPage = /*#__PURE__*/function () {
      function EpisodeDetailsPage(activatedRoute, api, favouritesService) {
        _classCallCheck(this, EpisodeDetailsPage);

        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouritesService = favouritesService;
        this.isFavourite = false;
        this.episodeId = null;
      }

      _createClass(EpisodeDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
          this.api.getEpisode(this.episodeId).subscribe(function (res) {
            _this.episode = res[0];
            console.log(JSON.stringify(_this.episodeId.id));
          });
          this.favouritesService.isFavourite(this.episodeId).then(function (isFav) {
            _this.isFavourite = isFav;
          });
        }
      }, {
        key: "favouriteEpisode",
        value: function favouriteEpisode() {
          var _this2 = this;

          this.favouritesService.favouriteEpisode(this.episodeId).then(function () {
            _this2.isFavourite = true;
          });
        }
      }, {
        key: "unfavouriteEpisode",
        value: function unfavouriteEpisode() {
          var _this3 = this;

          this.favouritesService.unfavouriteEpisode(this.episodeId).then(function () {
            _this3.isFavourite = false;
          });
        }
      }]);

      return EpisodeDetailsPage;
    }();

    EpisodeDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _services_favourites_service__WEBPACK_IMPORTED_MODULE_4__["FavouritesService"]
      }];
    };

    EpisodeDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-episode-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./episode-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./episode-details.page.scss */
      "./src/app/pages/episode-details/episode-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _services_favourites_service__WEBPACK_IMPORTED_MODULE_4__["FavouritesService"]])], EpisodeDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=episode-details-episode-details-module-es5.js.map