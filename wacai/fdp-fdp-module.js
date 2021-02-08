(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fdp-fdp-module"],{

/***/ "Kcob":
/*!******************************************************************!*\
  !*** ./src/app/admin/bank-features/ge/fdp/fdp-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: FDPRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FDPRoutingModule", function() { return FDPRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");





const routes = [{
        path: 'bai',
        loadChildren: () => Promise.all(/*! import() | bai-bai-module */[__webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~lo~27dc882d"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~10ab2071"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~79141c55"), __webpack_require__.e("bai-bai-module")]).then(__webpack_require__.bind(null, /*! ./bai/bai.module */ "FctT")).then(m => m.BAIModule)
    }, {
        path: 'bpr',
        loadChildren: () => Promise.all(/*! import() | bpr-bpr-module */[__webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~lo~27dc882d"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~10ab2071"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~79141c55"), __webpack_require__.e("bpr-bpr-module")]).then(__webpack_require__.bind(null, /*! ./bpr/bpr.module */ "4jvs")).then(m => m.BPRModule)
    }, {
        path: 'cui',
        loadChildren: () => Promise.all(/*! import() | cui-cui-module */[__webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~lo~27dc882d"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~10ab2071"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~79141c55"), __webpack_require__.e("cui-cui-module")]).then(__webpack_require__.bind(null, /*! ./cui/cui.module */ "97Ph")).then(m => m.CUIModule)
    }, {
        path: 'geo',
        loadChildren: () => Promise.all(/*! import() | geo-geo-module */[__webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~lo~27dc882d"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~10ab2071"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~79141c55"), __webpack_require__.e("geo-geo-module")]).then(__webpack_require__.bind(null, /*! ./geo/geo.module */ "bnr4")).then(m => m.GEOModule)
    }, {
        path: 'ios',
        loadChildren: () => Promise.all(/*! import() | ios-ios-module */[__webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~lo~27dc882d"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~10ab2071"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~79141c55"), __webpack_require__.e("ios-ios-module")]).then(__webpack_require__.bind(null, /*! ./ios/ios.module */ "weSW")).then(m => m.IOSModule)
    }, {
        path: 'pct',
        loadChildren: () => Promise.all(/*! import() | pct-pct-module */[__webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~lo~27dc882d"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~10ab2071"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~79141c55"), __webpack_require__.e("pct-pct-module")]).then(__webpack_require__.bind(null, /*! ./pct/pct.module */ "FnG4")).then(m => m.PCTModule)
    }];
class FDPRoutingModule {
}
FDPRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FDPRoutingModule });
FDPRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FDPRoutingModule_Factory(t) { return new (t || FDPRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FDPRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FDPRoutingModule, [{
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

/***/ "PCao":
/*!**********************************************************!*\
  !*** ./src/app/admin/bank-features/ge/fdp/fdp.module.ts ***!
  \**********************************************************/
/*! exports provided: FDPModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FDPModule", function() { return FDPModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _fdp_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fdp-routing.module */ "Kcob");




class FDPModule {
}
FDPModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FDPModule });
FDPModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FDPModule_Factory(t) { return new (t || FDPModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fdp_routing_module__WEBPACK_IMPORTED_MODULE_2__["FDPRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FDPModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fdp_routing_module__WEBPACK_IMPORTED_MODULE_2__["FDPRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FDPModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fdp_routing_module__WEBPACK_IMPORTED_MODULE_2__["FDPRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=fdp-fdp-module.js.map