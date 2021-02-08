(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bank-features-ge-ge-module"],{

/***/ "q8CX":
/*!*****************************************************!*\
  !*** ./src/app/admin/bank-features/ge/ge.module.ts ***!
  \*****************************************************/
/*! exports provided: GEModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEModule", function() { return GEModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");






const routes = [{
        path: 'fdp',
        loadChildren: () => __webpack_require__.e(/*! import() | fdp-fdp-module */ "fdp-fdp-module").then(__webpack_require__.bind(null, /*! ./fdp/fdp.module */ "PCao")).then(m => m.FDPModule)
    },
    {
        path: 'mas',
        loadChildren: () => __webpack_require__.e(/*! import() | mas-mas-module */ "mas-mas-module").then(__webpack_require__.bind(null, /*! ./mas/mas.module */ "j0GQ")).then(m => m.MASModule)
    }, {
        path: 'opo',
        loadChildren: () => __webpack_require__.e(/*! import() | opo-opo-module */ "opo-opo-module").then(__webpack_require__.bind(null, /*! ./opo/opo.module */ "jBbZ")).then(m => m.OPOModule)
    }, {
        path: '',
        redirectTo: 'opo',
        pathMatch: 'full'
    }, {
        path: '**',
        redirectTo: 'opo'
    }];
class GEModule {
}
GEModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GEModule });
GEModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GEModule_Factory(t) { return new (t || GEModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GEModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GEModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=bank-features-ge-ge-module.js.map