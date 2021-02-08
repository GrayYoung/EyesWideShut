(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ios-ios-module"],{

/***/ "1hRm":
/*!*********************************************************************!*\
  !*** ./src/app/admin/bank-features/ge/fdp/ios/bro/bro.component.ts ***!
  \*********************************************************************/
/*! exports provided: BROComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROComponent", function() { return BROComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var app_admin_bank_features_services_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/admin/bank-features/services/database */ "RCPW");
/* harmony import */ var _shared_components_operation_toolbar_operation_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/components/operation-toolbar/operation-toolbar.component */ "k0md");
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/breadcrumb/breadcrumb.component */ "+803");
/* harmony import */ var _shared_layout_two_cols_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/layout/two-cols-layout.component */ "ebNL");
/* harmony import */ var _shared_layout_start_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/layout/start-content.directive */ "EQKW");
/* harmony import */ var _shared_database_table_database_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/database-table/database-table.component */ "ShUE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_grid_form_field_row_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/grid-form/field-row.directive */ "gg2w");
/* harmony import */ var _shared_grid_form_field_group_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/grid-form/field-group.directive */ "nHjH");
/* harmony import */ var _shared_grid_form_field_label_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/grid-form/field-label.directive */ "ecEg");
/* harmony import */ var _shared_grid_form_field_control_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/grid-form/field-control.directive */ "GF1x");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _shared_grid_form_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/grid-form/search-input/search-input.component */ "Y4NN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _shared_monitoring_logs_monitoring_logs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/monitoring-logs/monitoring-logs.component */ "uo1O");


















const _c0 = function () { return ["branchName", "manager", "branchNO"]; };
const _c1 = function () { return ["\u5206\u652F\u884C\u540D\u79F0", "\u7ECF\u7406", "\u5206\u652F\u884C\u7F16\u7801"]; };
class BROComponent {
    constructor() {
        this.database = new app_admin_bank_features_services_database__WEBPACK_IMPORTED_MODULE_1__["MockBankBranchesDatabase"]();
    }
    ngOnInit() {
    }
}
BROComponent.ɵfac = function BROComponent_Factory(t) { return new (t || BROComponent)(); };
BROComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BROComponent, selectors: [["app-bro"]], hostAttrs: [1, "d-flex", "flex-column", "flex-nowrap", "w-100"], decls: 37, vars: 5, consts: [["appStartContent", "", 1, "d-flex", "flex-column", "h-100"], [3, "database", "displayedColumns", "displayedHeads"], [1, "w-100"], [1, "mb-4"], ["appFieldRow", ""], ["appFieldGroup", ""], ["appFieldLabel", ""], ["appFieldControl", ""], ["appearance", "outline"], ["type", "text", "matInput", "", "readonly", "", "value", "000999"], ["type", "text", "matInput", "", "readonly", "", "value", "\u6240\u6709"], ["showPrefix", "true"], [1, "mat-form-field"], [1, "mr-2"], ["href", "javascript: void(0);"]], template: function BROComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-operation-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-two-cols-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-database-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u5206\u652F\u884C\u7F16\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u5206\u652F\u884C\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u5206\u516C\u53F8\u7ECF\u7406\u7528\u6237\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-search-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u6587\u4EF6\u7F51\u5740URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "www.xxxx.no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u6D3B\u52A8 Pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-monitoring-logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("database", ctx.database)("displayedColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("displayedHeads", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_shared_components_operation_toolbar_operation_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["OperationToolbarComponent"], _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], _shared_layout_two_cols_layout_component__WEBPACK_IMPORTED_MODULE_4__["TwoColsLayoutComponent"], _shared_layout_start_content_directive__WEBPACK_IMPORTED_MODULE_5__["StartContentDirective"], _shared_database_table_database_table_component__WEBPACK_IMPORTED_MODULE_6__["DatabaseTableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _shared_grid_form_field_row_directive__WEBPACK_IMPORTED_MODULE_8__["FieldRowDirective"], _shared_grid_form_field_group_directive__WEBPACK_IMPORTED_MODULE_9__["FieldGroupDirective"], _shared_grid_form_field_label_directive__WEBPACK_IMPORTED_MODULE_10__["FieldLabelDirective"], _shared_grid_form_field_control_directive__WEBPACK_IMPORTED_MODULE_11__["FieldControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _shared_grid_form_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_14__["SearchInputComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _shared_monitoring_logs_monitoring_logs_component__WEBPACK_IMPORTED_MODULE_16__["MonitoringLogsComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BROComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bro',
                templateUrl: './bro.component.html',
                host: {
                    'class': 'd-flex flex-column flex-nowrap w-100'
                }
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "c3FG":
/*!*********************************************************************!*\
  !*** ./src/app/admin/bank-features/ge/fdp/ios/scn/scn.component.ts ***!
  \*********************************************************************/
/*! exports provided: SCNComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCNComponent", function() { return SCNComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var app_admin_bank_features_services_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/admin/bank-features/services/database */ "RCPW");
/* harmony import */ var _shared_components_operation_toolbar_operation_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/components/operation-toolbar/operation-toolbar.component */ "k0md");
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/breadcrumb/breadcrumb.component */ "+803");
/* harmony import */ var _shared_layout_two_cols_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/layout/two-cols-layout.component */ "ebNL");
/* harmony import */ var _shared_layout_start_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/layout/start-content.directive */ "EQKW");
/* harmony import */ var _shared_database_table_database_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/database-table/database-table.component */ "ShUE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_grid_form_field_row_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/grid-form/field-row.directive */ "gg2w");
/* harmony import */ var _shared_grid_form_field_group_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/grid-form/field-group.directive */ "nHjH");
/* harmony import */ var _shared_grid_form_field_label_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/grid-form/field-label.directive */ "ecEg");
/* harmony import */ var _shared_grid_form_field_control_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/grid-form/field-control.directive */ "GF1x");
/* harmony import */ var _shared_monitoring_logs_monitoring_logs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/monitoring-logs/monitoring-logs.component */ "uo1O");














const _c0 = function () { return ["centerNO", "lossCenter"]; };
const _c1 = function () { return ["\u7AE0\u8282\u4EE3\u7801", "\u7AE0\u8282\u540D\u79F0"]; };
class SCNComponent {
    constructor() {
        this.database = new app_admin_bank_features_services_database__WEBPACK_IMPORTED_MODULE_1__["MockProfitsDatabase"]();
    }
    ngOnInit() {
    }
}
SCNComponent.ɵfac = function SCNComponent_Factory(t) { return new (t || SCNComponent)(); };
SCNComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SCNComponent, selectors: [["app-scn"]], hostAttrs: [1, "d-flex", "flex-column", "flex-nowrap", "w-100"], decls: 26, vars: 5, consts: [["appStartContent", "", 1, "d-flex", "flex-column", "h-100"], [3, "database", "displayedColumns", "displayedHeads"], [1, "w-100"], [1, "mb-4"], ["appFieldRow", ""], ["appFieldGroup", ""], ["appFieldLabel", ""], ["appFieldControl", ""]], template: function SCNComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-operation-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-two-cols-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-database-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u7AE0\u8282\u4EE3\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u7AE0\u8282\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u7AE0\u8282\u6269\u5C55\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u7AE0\u8282\u540D\u79F03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-monitoring-logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("database", ctx.database)("displayedColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("displayedHeads", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_shared_components_operation_toolbar_operation_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["OperationToolbarComponent"], _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], _shared_layout_two_cols_layout_component__WEBPACK_IMPORTED_MODULE_4__["TwoColsLayoutComponent"], _shared_layout_start_content_directive__WEBPACK_IMPORTED_MODULE_5__["StartContentDirective"], _shared_database_table_database_table_component__WEBPACK_IMPORTED_MODULE_6__["DatabaseTableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _shared_grid_form_field_row_directive__WEBPACK_IMPORTED_MODULE_8__["FieldRowDirective"], _shared_grid_form_field_group_directive__WEBPACK_IMPORTED_MODULE_9__["FieldGroupDirective"], _shared_grid_form_field_label_directive__WEBPACK_IMPORTED_MODULE_10__["FieldLabelDirective"], _shared_grid_form_field_control_directive__WEBPACK_IMPORTED_MODULE_11__["FieldControlDirective"], _shared_monitoring_logs_monitoring_logs_component__WEBPACK_IMPORTED_MODULE_12__["MonitoringLogsComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SCNComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scn',
                templateUrl: './scn.component.html',
                host: {
                    'class': 'd-flex flex-column flex-nowrap w-100'
                }
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cBKQ":
/*!**********************************************************************!*\
  !*** ./src/app/admin/bank-features/ge/fdp/ios/ios-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: IOSRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOSRoutingModule", function() { return IOSRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _bro_bro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bro/bro.component */ "1hRm");
/* harmony import */ var _plc_plc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plc/plc.component */ "fJVZ");
/* harmony import */ var _scn_scn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scn/scn.component */ "c3FG");








const routes = [{
        path: 'bro',
        component: _bro_bro_component__WEBPACK_IMPORTED_MODULE_3__["BROComponent"]
    }, {
        path: 'plc',
        component: _plc_plc_component__WEBPACK_IMPORTED_MODULE_4__["PLCComponent"]
    }, {
        path: 'scn',
        component: _scn_scn_component__WEBPACK_IMPORTED_MODULE_5__["SCNComponent"]
    }];
class IOSRoutingModule {
}
IOSRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IOSRoutingModule });
IOSRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IOSRoutingModule_Factory(t) { return new (t || IOSRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IOSRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IOSRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fJVZ":
/*!*********************************************************************!*\
  !*** ./src/app/admin/bank-features/ge/fdp/ios/plc/plc.component.ts ***!
  \*********************************************************************/
/*! exports provided: PLCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLCComponent", function() { return PLCComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var app_admin_bank_features_services_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/admin/bank-features/services/database */ "RCPW");
/* harmony import */ var _shared_components_operation_toolbar_operation_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/components/operation-toolbar/operation-toolbar.component */ "k0md");
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/components/breadcrumb/breadcrumb.component */ "+803");
/* harmony import */ var _shared_layout_two_cols_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/layout/two-cols-layout.component */ "ebNL");
/* harmony import */ var _shared_layout_start_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/layout/start-content.directive */ "EQKW");
/* harmony import */ var _shared_database_table_database_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/database-table/database-table.component */ "ShUE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_grid_form_field_row_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/grid-form/field-row.directive */ "gg2w");
/* harmony import */ var _shared_grid_form_field_group_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/grid-form/field-group.directive */ "nHjH");
/* harmony import */ var _shared_grid_form_field_label_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/grid-form/field-label.directive */ "ecEg");
/* harmony import */ var _shared_grid_form_field_control_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/grid-form/field-control.directive */ "GF1x");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _shared_grid_form_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/grid-form/search-input/search-input.component */ "Y4NN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _shared_monitoring_logs_monitoring_logs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/monitoring-logs/monitoring-logs.component */ "uo1O");



















const _c0 = function () { return ["lossCenter", "manager", "centerNO"]; };
const _c1 = function () { return ["\u5229\u6DA6\u635F\u5931\u4E2D\u5FC3", "\u7BA1", "\u5229\u6DA6\u4E2D\u5FC3\u53F7\u7801"]; };
class PLCComponent {
    constructor() {
        this.database = new app_admin_bank_features_services_database__WEBPACK_IMPORTED_MODULE_1__["MockProfitsDatabase"]();
    }
    ngOnInit() {
    }
}
PLCComponent.ɵfac = function PLCComponent_Factory(t) { return new (t || PLCComponent)(); };
PLCComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PLCComponent, selectors: [["app-plc"]], hostAttrs: [1, "d-flex", "flex-column", "flex-nowrap", "w-100"], decls: 59, vars: 5, consts: [["appStartContent", "", 1, "d-flex", "flex-column", "h-100"], [3, "database", "displayedColumns", "displayedHeads"], [1, "w-100"], [1, "mb-4"], ["appFieldRow", ""], ["appFieldGroup", ""], ["appFieldLabel", ""], ["appFieldControl", ""], ["appearance", "outline"], ["type", "text", "matInput", "", "readonly", "", "value", "999990"], ["type", "text", "matInput", "", "readonly", "", "value", "\u9ED8\u8BA4\u5229\u6DA6\u635F\u5931\u4E2D\u5FC3"], ["showPrefix", "true"], ["appearance", "outline", 1, "mr-2"], ["type", "text", "matInput", ""], [1, "mat-form-field", "mr-2"], [1, "mat-form-field"], ["color", "primary"], ["label", "\u8D44\u91D1"]], template: function PLCComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-operation-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-two-cols-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-database-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u5229\u6DA6\u4E2D\u5FC3\u53F7\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u5229\u6DA6\u4E2D\u5FC3\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u7AE0\u8282\u4EE3\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-search-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u7528\u6237\u7F29\u5199");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-search-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u6587\u4EF6\u7F51\u5740URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u8D26\u6237\u7EA7\u522B\u7F16\u7801");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u6D3B\u52A8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-tab-group", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u672C\u56FD\u8D27\u5E01\u5229\u6DA6\u4E2D\u5FC3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "app-search-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u5916\u56FD\u8D27\u5E01\u5229\u6DA6\u4E2D\u5FC3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-search-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-monitoring-logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("database", ctx.database)("displayedColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("displayedHeads", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_shared_components_operation_toolbar_operation_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["OperationToolbarComponent"], _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], _shared_layout_two_cols_layout_component__WEBPACK_IMPORTED_MODULE_4__["TwoColsLayoutComponent"], _shared_layout_start_content_directive__WEBPACK_IMPORTED_MODULE_5__["StartContentDirective"], _shared_database_table_database_table_component__WEBPACK_IMPORTED_MODULE_6__["DatabaseTableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _shared_grid_form_field_row_directive__WEBPACK_IMPORTED_MODULE_8__["FieldRowDirective"], _shared_grid_form_field_group_directive__WEBPACK_IMPORTED_MODULE_9__["FieldGroupDirective"], _shared_grid_form_field_label_directive__WEBPACK_IMPORTED_MODULE_10__["FieldLabelDirective"], _shared_grid_form_field_control_directive__WEBPACK_IMPORTED_MODULE_11__["FieldControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _shared_grid_form_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_14__["SearchInputComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTab"], _shared_monitoring_logs_monitoring_logs_component__WEBPACK_IMPORTED_MODULE_17__["MonitoringLogsComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PLCComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-plc',
                templateUrl: './plc.component.html',
                host: {
                    'class': 'd-flex flex-column flex-nowrap w-100'
                }
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "weSW":
/*!**************************************************************!*\
  !*** ./src/app/admin/bank-features/ge/fdp/ios/ios.module.ts ***!
  \**************************************************************/
/*! exports provided: IOSModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOSModule", function() { return IOSModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var app_shared_material_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/material-form.module */ "GOc8");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var app_admin_bank_features_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/admin/bank-features/shared/shared.module */ "lRXa");
/* harmony import */ var _ios_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ios-routing.module */ "cBKQ");
/* harmony import */ var _bro_bro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bro/bro.component */ "1hRm");
/* harmony import */ var _plc_plc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plc/plc.component */ "fJVZ");
/* harmony import */ var _scn_scn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scn/scn.component */ "c3FG");











class IOSModule {
}
IOSModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IOSModule });
IOSModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IOSModule_Factory(t) { return new (t || IOSModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            app_shared_material_form_module__WEBPACK_IMPORTED_MODULE_3__["MaterialFormModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            app_admin_bank_features_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ios_routing_module__WEBPACK_IMPORTED_MODULE_6__["IOSRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IOSModule, { declarations: [_bro_bro_component__WEBPACK_IMPORTED_MODULE_7__["BROComponent"], _plc_plc_component__WEBPACK_IMPORTED_MODULE_8__["PLCComponent"], _scn_scn_component__WEBPACK_IMPORTED_MODULE_9__["SCNComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
        app_shared_material_form_module__WEBPACK_IMPORTED_MODULE_3__["MaterialFormModule"],
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        app_admin_bank_features_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _ios_routing_module__WEBPACK_IMPORTED_MODULE_6__["IOSRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IOSModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_bro_bro_component__WEBPACK_IMPORTED_MODULE_7__["BROComponent"], _plc_plc_component__WEBPACK_IMPORTED_MODULE_8__["PLCComponent"], _scn_scn_component__WEBPACK_IMPORTED_MODULE_9__["SCNComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                    app_shared_material_form_module__WEBPACK_IMPORTED_MODULE_3__["MaterialFormModule"],
                    app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    app_admin_bank_features_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _ios_routing_module__WEBPACK_IMPORTED_MODULE_6__["IOSRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=ios-ios-module.js.map