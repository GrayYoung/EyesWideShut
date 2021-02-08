(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mas-mas-module"],{

/***/ "j0GQ":
/*!**********************************************************!*\
  !*** ./src/app/admin/bank-features/ge/mas/mas.module.ts ***!
  \**********************************************************/
/*! exports provided: MASModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MASModule", function() { return MASModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _mas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mas-routing.module */ "n9p0");




class MASModule {
}
MASModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MASModule });
MASModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MASModule_Factory(t) { return new (t || MASModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _mas_routing_module__WEBPACK_IMPORTED_MODULE_2__["MASRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MASModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _mas_routing_module__WEBPACK_IMPORTED_MODULE_2__["MASRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MASModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _mas_routing_module__WEBPACK_IMPORTED_MODULE_2__["MASRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "n9p0":
/*!******************************************************************!*\
  !*** ./src/app/admin/bank-features/ge/mas/mas-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: MASRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MASRoutingModule", function() { return MASRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");





const routes = [{
        path: 'aut',
        loadChildren: () => Promise.all(/*! import() | aut-aut-module */[__webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~lo~27dc882d"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~10ab2071"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~79141c55"), __webpack_require__.e("aut-aut-module")]).then(__webpack_require__.bind(null, /*! ./aut/aut.module */ "hSNX")).then(m => m.AUTModule)
    }, {
        path: 'uis',
        loadChildren: () => Promise.all(/*! import() | uis-uis-module */[__webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~lo~27dc882d"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~10ab2071"), __webpack_require__.e("default~aut-aut-module~bai-bai-module~bpr-bpr-module~cui-cui-module~geo-geo-module~ios-ios-module~pa~79141c55"), __webpack_require__.e("uis-uis-module")]).then(__webpack_require__.bind(null, /*! ./uis/uis.module */ "5iLR")).then(m => m.UISModule)
    }];
class MASRoutingModule {
}
MASRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MASRoutingModule });
MASRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MASRoutingModule_Factory(t) { return new (t || MASRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MASRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MASRoutingModule, [{
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


/***/ })

}]);
//# sourceMappingURL=mas-mas-module.js.map