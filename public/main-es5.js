(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">{{title}}</mat-toolbar>\r\n<div id=\"chartContainer\">\r\n    <app-dependencies-tree></app-dependencies-tree>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dependencies-input/dependencies-input.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dependencies-input/dependencies-input.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"InputsForm\">\n    <div class=\"container\">\n        <mat-form-field>\n            <input matInput formControlName=\"packageName\" placeholder=\"{{packageNameMsg}}\">\n            <mat-error *ngIf=\"!InputsForm.controls['packageName'].valid\">\n                {{fieldIsRequiredMsg}}\n            </mat-error>\n        </mat-form-field>\n        <button type=\"button\" (click)=\"onGetPackageDependenciesClick()\" mat-button\n            color=\"primary\">{{getPkgDependenciesMsg}}</button>\n\n    </div>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/npm-dependencies-tree/npm-dependencies-tree.component.html": 
        /*!*****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/npm-dependencies-tree/npm-dependencies-tree.component.html ***!
          \*****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-dependencies-input (onSubmitEvent)=\"getPackageDependencies($event)\"></app-dependencies-input>\n<app-tree-chart [loading]=\"isLoading\"></app-tree-chart>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tree-chart/tree-chart.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tree-chart/tree-chart.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div #chart id=\"chart\"></div>\r\n<img src=\"https://loading.io/spinners/balls/index.circle-slack-loading-icon.gif\" *ngIf=\"loading\" class=\"loadingSpinner\">\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _components_tree_chart_tree_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tree-chart/tree-chart.component */ "./src/app/components/tree-chart/tree-chart.component.ts");
            /* harmony import */ var _components_npm_dependencies_tree_npm_dependencies_tree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/npm-dependencies-tree/npm-dependencies-tree.component */ "./src/app/components/npm-dependencies-tree/npm-dependencies-tree.component.ts");
            /* harmony import */ var _components_dependencies_input_dependencies_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dependencies-input/dependencies-input.component */ "./src/app/components/dependencies-input/dependencies-input.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [
                        _components_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                        _components_tree_chart_tree_chart_component__WEBPACK_IMPORTED_MODULE_10__["TreeChartComponent"],
                        _components_npm_dependencies_tree_npm_dependencies_tree_component__WEBPACK_IMPORTED_MODULE_11__["DependenciesTreeComponent"],
                        _components_dependencies_input_dependencies_input_component__WEBPACK_IMPORTED_MODULE_12__["DependenciesInputComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
                    ],
                    providers: [],
                    bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/app/app.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/components/app/app.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#chartContainer {\n  height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAvQzpcXGRlcGVuZGVjeS1ncmFwaFxcZGVwZW5kZW5jeS1ncmFwaC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXJ0Q29udGFpbmVyIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICB9IiwiI2NoYXJ0Q29udGFpbmVyIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/app/app.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/components/app/app.component.ts ***!
          \*************************************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Dependency Graph Project';
                    //
                }
                AppComponent.prototype.ngOnInit = function () {
                    //
                };
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dependencies-input/dependencies-input.component.scss": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/dependencies-input/dependencies-input.component.scss ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin-left: 25px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXBlbmRlbmNpZXMtaW5wdXQvQzpcXGRlcGVuZGVjeS1ncmFwaFxcZGVwZW5kZW5jeS1ncmFwaC1wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxkZXBlbmRlbmNpZXMtaW5wdXRcXGRlcGVuZGVuY2llcy1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kZXBlbmRlbmNpZXMtaW5wdXQvZGVwZW5kZW5jaWVzLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXBlbmRlbmNpZXMtaW5wdXQvZGVwZW5kZW5jaWVzLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/dependencies-input/dependencies-input.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/components/dependencies-input/dependencies-input.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: DependenciesInputComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependenciesInputComponent", function () { return DependenciesInputComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var DependenciesInputComponent = /** @class */ (function () {
                function DependenciesInputComponent(formBuilder) {
                    this.formBuilder = formBuilder;
                    this.fieldIsRequiredMsg = 'Field is required.';
                    this.packageNameMsg = 'Package Name';
                    this.getPkgDependenciesMsg = 'Get Dependencies';
                    this.onSubmitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.InputsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
                    //
                }
                DependenciesInputComponent.prototype.ngOnInit = function () {
                    this.createForm();
                };
                DependenciesInputComponent.prototype.createForm = function () {
                    this.InputsForm = this.formBuilder.group({
                        packageName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                    });
                };
                DependenciesInputComponent.prototype.onGetPackageDependenciesClick = function () {
                    this.InputsForm.get('packageName').markAsTouched();
                    if (this.InputsForm.get('packageName').valid) {
                        var pkgName = this.InputsForm.get('packageName').value;
                        this.onSubmitEvent.emit(pkgName);
                    }
                };
                return DependenciesInputComponent;
            }());
            DependenciesInputComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DependenciesInputComponent.prototype, "onSubmitEvent", void 0);
            DependenciesInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dependencies-input',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dependencies-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dependencies-input/dependencies-input.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dependencies-input.component.scss */ "./src/app/components/dependencies-input/dependencies-input.component.scss")).default]
                })
            ], DependenciesInputComponent);
            /***/ 
        }),
        /***/ "./src/app/components/npm-dependencies-tree/npm-dependencies-tree.component.scss": 
        /*!***************************************************************************************!*\
          !*** ./src/app/components/npm-dependencies-tree/npm-dependencies-tree.component.scss ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnBtLWRlcGVuZGVuY2llcy10cmVlL25wbS1kZXBlbmRlbmNpZXMtdHJlZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/npm-dependencies-tree/npm-dependencies-tree.component.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/app/components/npm-dependencies-tree/npm-dependencies-tree.component.ts ***!
          \*************************************************************************************/
        /*! exports provided: DependenciesTreeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependenciesTreeComponent", function () { return DependenciesTreeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _services_npm_dependency_retriever_npm_dependency_retriever_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/npm-dependency-retriever/npm-dependency-retriever.service */ "./src/app/services/npm-dependency-retriever/npm-dependency-retriever.service.ts");
            /* harmony import */ var _tree_chart_tree_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tree-chart/tree-chart.component */ "./src/app/components/tree-chart/tree-chart.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_npm_dependency_manager_npm_dependency_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/npm-dependency-manager/npm-dependency-manager.service */ "./src/app/services/npm-dependency-manager/npm-dependency-manager.service.ts");
            /* harmony import */ var src_app_types_Package__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/types/Package */ "./src/app/types/Package.ts");
            var DependenciesTreeComponent = /** @class */ (function () {
                function DependenciesTreeComponent(depManager, depRetriever) {
                    this.depManager = depManager;
                    this.depRetriever = depRetriever;
                }
                DependenciesTreeComponent.prototype.ngOnInit = function () {
                    //
                };
                DependenciesTreeComponent.prototype.getPackageDependencies = function (pkgName) {
                    var _this = this;
                    this.depRetriever.getPackageLatestVersion(pkgName).subscribe(function (pkgVersion) {
                        var pkg = new src_app_types_Package__WEBPACK_IMPORTED_MODULE_5__["Package"](pkgName, pkgVersion);
                        _this.isLoading = true;
                        _this.depManager.getPackageDependencies(pkg).subscribe(function (treeData) {
                            _this.isLoading = false;
                            _this.treeChartComponent.buildTree(treeData);
                        }, function () {
                            _this.isLoading = false;
                        });
                    });
                };
                return DependenciesTreeComponent;
            }());
            DependenciesTreeComponent.ctorParameters = function () { return [
                { type: src_app_services_npm_dependency_manager_npm_dependency_manager_service__WEBPACK_IMPORTED_MODULE_4__["NpmDependencyManagerService"] },
                { type: _services_npm_dependency_retriever_npm_dependency_retriever_service__WEBPACK_IMPORTED_MODULE_1__["NpmDependencyRetrieverService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_tree_chart_tree_chart_component__WEBPACK_IMPORTED_MODULE_2__["TreeChartComponent"], { static: false })
            ], DependenciesTreeComponent.prototype, "treeChartComponent", void 0);
            DependenciesTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
                    selector: 'app-dependencies-tree',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./npm-dependencies-tree.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/npm-dependencies-tree/npm-dependencies-tree.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./npm-dependencies-tree.component.scss */ "./src/app/components/npm-dependencies-tree/npm-dependencies-tree.component.scss")).default]
                })
            ], DependenciesTreeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/tree-chart/tree-chart.component.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/tree-chart/tree-chart.component.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#chart {\n  height: 100%;\n  width: inherit;\n}\n\n.node circle {\n  fill: #fff;\n  stroke: steelblue;\n  stroke-width: 3px;\n}\n\n.node text {\n  font: 11px sans-serif;\n}\n\n.link {\n  fill: none;\n  stroke: #ccc;\n  stroke-width: 2px;\n}\n\n.loadingSpinner {\n  position: fixed;\n  top: 25%;\n  left: 25%;\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWNoYXJ0L0M6XFxkZXBlbmRlY3ktZ3JhcGhcXGRlcGVuZGVuY3ktZ3JhcGgtcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdHJlZS1jaGFydFxcdHJlZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90cmVlLWNoYXJ0L3RyZWUtY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREdFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRTtFQUNFLHFCQUFBO0FDQUo7O0FER0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmVlLWNoYXJ0L3RyZWUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hhcnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLm5vZGUgY2lyY2xlIHtcclxuICAgIGZpbGw6ICNmZmY7XHJcbiAgICBzdHJva2U6IHN0ZWVsYmx1ZTtcclxuICAgIHN0cm9rZS13aWR0aDogM3B4O1xyXG4gIH1cclxuICBcclxuICAubm9kZSB0ZXh0IHtcclxuICAgIGZvbnQ6IDExcHggc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLmxpbmsge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogI2NjYztcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gIH1cclxuICBcclxuICAubG9hZGluZ1NwaW5uZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH0iLCIjY2hhcnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuXG4ubm9kZSBjaXJjbGUge1xuICBmaWxsOiAjZmZmO1xuICBzdHJva2U6IHN0ZWVsYmx1ZTtcbiAgc3Ryb2tlLXdpZHRoOiAzcHg7XG59XG5cbi5ub2RlIHRleHQge1xuICBmb250OiAxMXB4IHNhbnMtc2VyaWY7XG59XG5cbi5saW5rIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAjY2NjO1xuICBzdHJva2Utd2lkdGg6IDJweDtcbn1cblxuLmxvYWRpbmdTcGlubmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDI1JTtcbiAgbGVmdDogMjUlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/tree-chart/tree-chart.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/tree-chart/tree-chart.component.ts ***!
          \***************************************************************/
        /*! exports provided: TreeChartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeChartComponent", function () { return TreeChartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
            var TreeChartComponent = /** @class */ (function () {
                function TreeChartComponent() {
                    this.margin = { top: 10, right: 50, bottom: 40, left: 100 };
                    //
                }
                TreeChartComponent.prototype.ngOnInit = function () {
                    this.width = this.chartContainer.nativeElement.offsetWidth;
                    this.height = this.chartContainer.nativeElement.offsetHeight;
                    this.element = this.chartContainer.nativeElement;
                };
                TreeChartComponent.prototype.buildTree = function (treeData) {
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg').remove();
                    var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.element).append('svg')
                        .attr('width', this.width)
                        .attr('height', this.height)
                        .append('g')
                        .attr('transform', 'translate('
                        + this.margin.left + ',' + this.margin.top + ')');
                    // declares a tree layout and assigns the size
                    var treeMap = d3__WEBPACK_IMPORTED_MODULE_2__["tree"]().size([this.height - this.margin.top - this.margin.bottom, this.width - this.margin.left - this.margin.right]);
                    // Assigns parent, children, height, depth
                    var root, i = 0, duration;
                    root = d3__WEBPACK_IMPORTED_MODULE_2__["hierarchy"](treeData, function (d) { return d.dependencies; });
                    root.x0 = this.height / 2;
                    root.y0 = 0;
                    update(root);
                    function update(source) {
                        // Assigns the x and y position for the nodes
                        var treeData = treeMap(root);
                        // Compute the new tree layout.
                        var nodes = treeData.descendants(), links = treeData.descendants().slice(1);
                        // Normalize for fixed-depth.
                        nodes.forEach(function (d) { d.y = d.depth * 180; });
                        // ****************** Nodes section ***************************
                        // Update the nodes...
                        var node = svg.selectAll('g.node')
                            .data(nodes, function (d) { return d.id || (d.id = ++i); });
                        // Enter any new modes at the parent's previous position.
                        var nodeEnter = node.enter().append('g')
                            .attr('class', 'node')
                            .attr('transform', function (d) {
                            return 'translate(' + source.y0 + ',' + source.x0 + ')';
                        })
                            .on('click', click);
                        // Add Circle for the nodes
                        nodeEnter.append('circle')
                            .attr('class', 'node')
                            .attr('r', 1e-15)
                            .style('fill', function (d) {
                            return d._children ? 'lightsteelblue' : '#fff';
                        });
                        // Add labels for the nodes
                        nodeEnter.append('text')
                            .attr('dy', '.35em')
                            .attr('x', function (d) {
                            return d.children || d._children ? -13 : 13;
                        })
                            .attr('text-anchor', function (d) {
                            return d.children || d._children ? 'end' : 'start';
                        })
                            .text(function (d) { return d.data.package.name + ' ' + d.data.package.version; });
                        // UPDATE
                        var nodeUpdate = nodeEnter.merge(node);
                        // Transition to the proper position for the node
                        nodeUpdate.transition()
                            .duration(duration)
                            .attr('transform', function (d) {
                            return 'translate(' + d.y + ',' + d.x + ')';
                        });
                        // Update the node attributes and style
                        nodeUpdate.select('circle.node')
                            .attr('r', 1)
                            .style('fill', function (d) {
                            return d._children ? 'lightsteelblue' : '#fff';
                        })
                            .attr('cursor', 'pointer');
                        // Remove any exiting nodes
                        var nodeExit = node.exit().transition()
                            .duration(duration)
                            .attr('transform', function (d) {
                            return 'translate(' + source.y + ',' + source.x + ')';
                        })
                            .remove();
                        // On exit reduce the node circles size to 0
                        nodeExit.select('circle')
                            .attr('r', 1e-6);
                        // On exit reduce the opacity of text labels
                        nodeExit.select('text')
                            .style('fill-opacity', 1e-6);
                        // ****************** links section ***************************
                        // Update the links...
                        var link = svg.selectAll('path.link')
                            .data(links, function (d) { return d.id; });
                        // Enter any new links at the parent's previous position.
                        var linkEnter = link.enter().insert('path', 'g')
                            .attr('class', 'link')
                            .attr('d', function (d) {
                            var o = { x: source.x0, y: source.y0 };
                            return diagonal(o, o);
                        });
                        // UPDATE
                        var linkUpdate = linkEnter.merge(link);
                        // Transition back to the parent element position
                        linkUpdate.transition()
                            .duration(duration)
                            .attr('d', function (d) { return diagonal(d, d.parent); });
                        // Remove any exiting links
                        var linkExit = link.exit().transition()
                            .duration(duration)
                            .attr('d', function (d) {
                            var o = { x: source.x, y: source.y };
                            return diagonal(o, o);
                        }).remove();
                        // Store the old positions for transition.
                        nodes.forEach(function (d) {
                            d.x0 = d.x;
                            d.y0 = d.y;
                        });
                        // Creates a curved (diagonal) path from parent to the child nodes
                        function diagonal(s, d) {
                            var path = "M " + s.y + " " + s.x + "\n                C " + (s.y + d.y) / 2 + " " + s.x + ",\n                  " + (s.y + d.y) / 2 + " " + d.x + ",\n                  " + d.y + " " + d.x;
                            return path;
                        }
                        // Toggle children on click.
                        function click(d) {
                            if (d.children) {
                                d._children = d.children;
                                d.children = null;
                            }
                            else {
                                d.children = d._children;
                                d._children = null;
                            }
                            update(d);
                        }
                    }
                };
                return TreeChartComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: true })
            ], TreeChartComponent.prototype, "chartContainer", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TreeChartComponent.prototype, "loading", void 0);
            TreeChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tree-chart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tree-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tree-chart/tree-chart.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tree-chart.component.scss */ "./src/app/components/tree-chart/tree-chart.component.scss")).default]
                })
            ], TreeChartComponent);
            /***/ 
        }),
        /***/ "./src/app/enums/errorCodes.ts": 
        /*!*************************************!*\
          !*** ./src/app/enums/errorCodes.ts ***!
          \*************************************/
        /*! exports provided: ErrorCodes */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCodes", function () { return ErrorCodes; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ErrorCodes;
            (function (ErrorCodes) {
                ErrorCodes["REQUEST_TIMEOUT"] = "TimeoutError";
                ErrorCodes["METHOD_NOT_ALLOWED"] = "MethodNotAllowedError";
            })(ErrorCodes || (ErrorCodes = {}));
            /***/ 
        }),
        /***/ "./src/app/services/npm-dependency-manager/npm-dependency-manager.service.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/services/npm-dependency-manager/npm-dependency-manager.service.ts ***!
          \***********************************************************************************/
        /*! exports provided: NpmDependencyManagerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpmDependencyManagerService", function () { return NpmDependencyManagerService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _types_dependencyTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/dependencyTree */ "./src/app/types/dependencyTree.ts");
            /* harmony import */ var _npm_dependency_retriever_npm_dependency_retriever_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../npm-dependency-retriever/npm-dependency-retriever.service */ "./src/app/services/npm-dependency-retriever/npm-dependency-retriever.service.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NpmDependencyManagerService = /** @class */ (function () {
                function NpmDependencyManagerService(depRetrieverService) {
                    this.depRetrieverService = depRetrieverService;
                    this._pkgToPkgDepsCache = new Map();
                }
                Object.defineProperty(NpmDependencyManagerService.prototype, "pkgToPkgDepsCache", {
                    get: function () {
                        return this._pkgToPkgDepsCache;
                    },
                    enumerable: true,
                    configurable: true
                });
                NpmDependencyManagerService.prototype.getPackageDependencies = function (pkg) {
                    var depTree = new _types_dependencyTree__WEBPACK_IMPORTED_MODULE_2__["DependencyTree"]();
                    return this.getPackageDependenciesRecursively(pkg, depTree);
                };
                NpmDependencyManagerService.prototype.getPackageDependenciesRecursively = function (pkg, root) {
                    var _this = this;
                    root.package = pkg;
                    if (!root.dependencies) {
                        root.dependencies = [];
                    }
                    var obsArray$ = [];
                    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer$) {
                        if (_this._pkgToPkgDepsCache.get(pkg.name + pkg.version)) {
                            root.dependencies = _this._pkgToPkgDepsCache.get(pkg.name + pkg.version);
                            observer$.next(root);
                            observer$.complete();
                        }
                        else {
                            _this.depRetrieverService.getPackageDependecies(pkg).subscribe(function (pkgDependencies) {
                                if (pkgDependencies.length === 0) {
                                    _this._pkgToPkgDepsCache.set(pkg.name + pkg.version, root.dependencies);
                                    observer$.next(root);
                                    observer$.complete();
                                }
                                else {
                                    _this.iterateDependenciesAndCallRecursively(pkgDependencies, obsArray$, root);
                                    Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(obsArray$).subscribe(function () {
                                        _this._pkgToPkgDepsCache.set(pkg.name + pkg.version, root.dependencies);
                                        observer$.next(root);
                                        observer$.complete();
                                    });
                                }
                            });
                        }
                    });
                };
                NpmDependencyManagerService.prototype.iterateDependenciesAndCallRecursively = function (pkgDependencies, promisesArr, root) {
                    for (var _i = 0, pkgDependencies_1 = pkgDependencies; _i < pkgDependencies_1.length; _i++) {
                        var pkgDependecy = pkgDependencies_1[_i];
                        var newDepTree = new _types_dependencyTree__WEBPACK_IMPORTED_MODULE_2__["DependencyTree"]();
                        var depsLength = root.dependencies.push(newDepTree);
                        var obs$ = this.getPackageDependenciesRecursively(pkgDependecy, root.dependencies[depsLength - 1]);
                        promisesArr.push(obs$);
                    }
                };
                return NpmDependencyManagerService;
            }());
            NpmDependencyManagerService.ctorParameters = function () { return [
                { type: _npm_dependency_retriever_npm_dependency_retriever_service__WEBPACK_IMPORTED_MODULE_3__["NpmDependencyRetrieverService"] }
            ]; };
            NpmDependencyManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
                    providedIn: 'root'
                })
            ], NpmDependencyManagerService);
            /***/ 
        }),
        /***/ "./src/app/services/npm-dependency-retriever/npm-dependency-retriever.service.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/services/npm-dependency-retriever/npm-dependency-retriever.service.ts ***!
          \***************************************************************************************/
        /*! exports provided: NpmDependencyRetrieverService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpmDependencyRetrieverService", function () { return NpmDependencyRetrieverService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _types_Package__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/Package */ "./src/app/types/Package.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _enums_errorCodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../enums/errorCodes */ "./src/app/enums/errorCodes.ts");
            var NpmDependencyRetrieverService = /** @class */ (function () {
                function NpmDependencyRetrieverService(httpClient, toaster) {
                    this.httpClient = httpClient;
                    this.toaster = toaster;
                    this.REGISTRY_BASE_URL = 'https://registry.npmjs.org/';
                    this.MINUTE_IN_MILLISECOND = 60000;
                }
                NpmDependencyRetrieverService.prototype.buildRequestUrl = function (pkg) {
                    var pkgUrlSuffix;
                    if (pkg.version) {
                        pkgUrlSuffix = pkg.name + "/" + pkg.version;
                    }
                    else {
                        pkgUrlSuffix = "" + pkg.name;
                    }
                    var requestUrl = "" + this.REGISTRY_BASE_URL + pkgUrlSuffix;
                    return requestUrl;
                };
                NpmDependencyRetrieverService.prototype.getPackageLatestVersion = function (pkgName) {
                    var _this = this;
                    var pkg = new _types_Package__WEBPACK_IMPORTED_MODULE_3__["Package"](pkgName, '');
                    var requestUrl = this.buildRequestUrl(pkg);
                    return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer$) {
                        _this.httpClient.get(requestUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(_this.MINUTE_IN_MILLISECOND), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return (response.versions); }))
                            .subscribe(function (versionsObj) {
                            try {
                                var latestVersion = Object.keys(versionsObj)[Object.keys(versionsObj).length - 1];
                                observer$.next(latestVersion);
                                observer$.complete();
                            }
                            catch (err) {
                                _this.throwErrorWrapper(err, observer$);
                            }
                        }, function (err) {
                            _this.throwErrorWrapper(err, observer$);
                        });
                    });
                };
                NpmDependencyRetrieverService.prototype.getPackageDependecies = function (pkg) {
                    var _this = this;
                    var requestUrl = this.buildRequestUrl(pkg);
                    return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer$) {
                        _this.httpClient.get(requestUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(_this.MINUTE_IN_MILLISECOND), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return (response.dependencies); }))
                            .subscribe(function (dependenciesObject) {
                            try {
                                observer$.next(_this.parsePackageDependencies(dependenciesObject));
                                observer$.complete();
                            }
                            catch (err) {
                                _this.throwErrorWrapper(err, observer$);
                            }
                        }, function (err) {
                            if (err.error && err.error.code === _enums_errorCodes__WEBPACK_IMPORTED_MODULE_7__["ErrorCodes"].METHOD_NOT_ALLOWED) {
                                //this means that the packge version could not be found.
                                //empty package dependencies is returned because we want to show
                                //the package itself, even if it doesn't exist in the registry
                                observer$.next([]);
                                observer$.complete();
                            }
                            else {
                                _this.throwErrorWrapper(err, observer$);
                            }
                        });
                    });
                };
                NpmDependencyRetrieverService.prototype.parsePackageDependencies = function (dependenciesObject) {
                    var _this = this;
                    if (!dependenciesObject) { // no deps found
                        return [];
                    }
                    var pkgDependencies = [];
                    Object.keys(dependenciesObject).map(function (key) {
                        var pkg = new _types_Package__WEBPACK_IMPORTED_MODULE_3__["Package"](key, _this.parsePackageVersion(dependenciesObject[key]));
                        pkgDependencies.push(pkg);
                    });
                    return pkgDependencies;
                };
                NpmDependencyRetrieverService.prototype.parsePackageVersion = function (version) {
                    return version.replace(/[><=^~ ]/g, '');
                };
                NpmDependencyRetrieverService.prototype.getErrorMessage = function (error) {
                    var errorMessage = '';
                    if (error.name === _enums_errorCodes__WEBPACK_IMPORTED_MODULE_7__["ErrorCodes"].REQUEST_TIMEOUT) {
                        errorMessage = "Request timeout";
                    }
                    else if (error && error.error) {
                        if (error.error.includes && error.error.includes('version not found')) {
                            errorMessage = "version " + error.url.split('/')[4] + " for package " + error.url.split('/')[3] + " not found!";
                        }
                        else if ((error.error === 'Not Found') || (error.error.error && error.error.error.toLocaleLowerCase() === 'not found')) {
                            errorMessage = "package " + error.url.split('/')[3] + " not found!";
                        }
                        else {
                            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
                        }
                    }
                    else {
                        errorMessage = " Failed to parse results from API";
                    }
                    return errorMessage;
                };
                NpmDependencyRetrieverService.prototype.throwErrorWrapper = function (err, observer$) {
                    var errMsg = this.handleError(err);
                    observer$.error(errMsg);
                    observer$.complete();
                };
                NpmDependencyRetrieverService.prototype.handleError = function (error) {
                    var errorMessage = this.getErrorMessage(error);
                    this.toaster.error(errorMessage, 'Error', {
                        timeOut: 200000
                    });
                    return errorMessage;
                };
                return NpmDependencyRetrieverService;
            }());
            NpmDependencyRetrieverService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
            ]; };
            NpmDependencyRetrieverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], NpmDependencyRetrieverService);
            /***/ 
        }),
        /***/ "./src/app/types/Package.ts": 
        /*!**********************************!*\
          !*** ./src/app/types/Package.ts ***!
          \**********************************/
        /*! exports provided: Package */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Package", function () { return Package; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Package = /** @class */ (function () {
                function Package(pkgName, pkgVersion) {
                    this.name = pkgName;
                    this.version = pkgVersion;
                }
                return Package;
            }());
            /***/ 
        }),
        /***/ "./src/app/types/dependencyTree.ts": 
        /*!*****************************************!*\
          !*** ./src/app/types/dependencyTree.ts ***!
          \*****************************************/
        /*! exports provided: DependencyTree */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyTree", function () { return DependencyTree; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DependencyTree = /** @class */ (function () {
                function DependencyTree() {
                }
                return DependencyTree;
            }());
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\dependecy-graph\dependency-graph-project\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map