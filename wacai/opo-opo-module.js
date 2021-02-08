(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["opo-opo-module"],{

/***/ "WnpF":
/*!******************************************************************!*\
  !*** ./src/app/admin/bank-features/ge/opo/opo-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: OPORoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPORoutingModule", function() { return OPORoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");





const routes = [{
        path: 'pac',
        loadChildren: () => Promise.all(/*! import() | pac-pac-module */[__webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~lo~27dc882d"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~10ab2071"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~79141c55"), __webpack_require__.e("pac-pac-module")]).then(__webpack_require__.bind(null, /*! ./pac/pac.module */ "KgmH")).then(m => m.PACModule)
    }];
class OPORoutingModule {
}
OPORoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OPORoutingModule });
OPORoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OPORoutingModule_Factory(t) { return new (t || OPORoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OPORoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OPORoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jBbZ":
/*!**********************************************************!*\
  !*** ./src/app/admin/bank-features/ge/opo/opo.module.ts ***!
  \**********************************************************/
/*! exports provided: OPOModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPOModule", function() { return OPOModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _opo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opo-routing.module */ "WnpF");





class OPOModule {
}
OPOModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OPOModule });
OPOModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OPOModule_Factory(t) { return new (t || OPOModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _opo_routing_module__WEBPACK_IMPORTED_MODULE_3__["OPORoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OPOModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _opo_routing_module__WEBPACK_IMPORTED_MODULE_3__["OPORoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OPOModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _opo_routing_module__WEBPACK_IMPORTED_MODULE_3__["OPORoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=opo-opo-module.js.map