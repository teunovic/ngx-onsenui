import { PageLoader, _internal, notification, platform } from 'onsenui';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { __spread } from 'tslib';
import { Injector, Directive, ElementRef, ComponentFactoryResolver, Input, ViewContainerRef, NgZone, Output, EventEmitter, HostListener, forwardRef, TemplateRef, Injectable, ApplicationRef, NgModule } from '@angular/core';
export { ɵangular_packages_core_core_t, ɵangular_packages_core_core_q, ɵangular_packages_core_core_r, ɵangular_packages_core_core_s, ɵangular_packages_core_core_h, ɵangular_packages_core_core_o, ɵangular_packages_core_core_p, ɵangular_packages_core_core_n, ɵangular_packages_core_core_m, ɵangular_packages_core_core_c, ɵangular_packages_core_core_d, ɵangular_packages_core_core_e, ɵangular_packages_core_core_f, ɵangular_packages_core_core_g, ɵangular_packages_core_core_l, ɵangular_packages_core_core_u, ɵangular_packages_core_core_w, ɵangular_packages_core_core_v, ɵangular_packages_core_core_z, ɵangular_packages_core_core_x, ɵangular_packages_core_core_y, ɵangular_packages_core_core_bc, ɵangular_packages_core_core_bj, ɵangular_packages_core_core_bd, ɵangular_packages_core_core_be, ɵangular_packages_core_core_bf, ɵangular_packages_core_core_bi, ɵangular_packages_core_core_bm, ɵangular_packages_core_core_i, ɵangular_packages_core_core_j, ɵangular_packages_core_core_k, ɵangular_packages_core_core_a, ɵangular_packages_core_core_b, ɵangular_packages_core_core_bk, ɵangular_packages_core_core_ba, ɵangular_packages_core_core_bb, createPlatform, assertPlatform, destroyPlatform, getPlatform, PlatformRef, ApplicationRef, createPlatformFactory, NgProbeToken, enableProdMode, isDevMode, APP_ID, PACKAGE_ROOT_URL, PLATFORM_INITIALIZER, PLATFORM_ID, APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, ApplicationInitStatus, DebugElement, DebugNode, asNativeElements, getDebugNode, Testability, TestabilityRegistry, setTestabilityGetter, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, MissingTranslationStrategy, ApplicationModule, wtfCreateScope, wtfLeave, wtfStartTimeRange, wtfEndTimeRange, Type, EventEmitter, ErrorHandler, Sanitizer, SecurityContext, ANALYZE_FOR_ENTRY_COMPONENTS, Attribute, ContentChild, ContentChildren, Query, ViewChild, ViewChildren, Component, Directive, HostBinding, HostListener, Input, Output, Pipe, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule, ViewEncapsulation, Version, VERSION, defineInjectable, defineInjector, forwardRef, resolveForwardRef, Injectable, INJECTOR, Injector, inject, InjectFlags, ReflectiveInjector, createInjector, ResolvedReflectiveFactory, ReflectiveKey, InjectionToken, Inject, Optional, Self, SkipSelf, Host, NgZone, ɵNoopNgZone, RenderComponentType, Renderer, Renderer2, RendererFactory2, RendererStyleFlags2, RootRenderer, COMPILER_OPTIONS, Compiler, CompilerFactory, ModuleWithComponentFactories, ComponentFactory, ComponentRef, ComponentFactoryResolver, ElementRef, NgModuleFactory, NgModuleRef, NgModuleFactoryLoader, getModuleFactory, QueryList, SystemJsNgModuleLoader, SystemJsNgModuleLoaderConfig, TemplateRef, ViewContainerRef, EmbeddedViewRef, ViewRef, ChangeDetectionStrategy, ChangeDetectorRef, DefaultIterableDiffer, IterableDiffers, KeyValueDiffers, SimpleChange, WrappedValue, platformCore, ɵALLOW_MULTIPLE_PLATFORMS, ɵAPP_ID_RANDOM_PROVIDER, ɵdefaultIterableDiffers, ɵdefaultKeyValueDiffers, ɵdevModeEqual, ɵisListLikeIterable, ɵChangeDetectorStatus, ɵisDefaultChangeDetectionStrategy, ɵConsole, ɵgetInjectableDef, ɵinject, ɵsetCurrentInjector, ɵAPP_ROOT, ɵivyEnabled, ɵComponentFactory, ɵCodegenComponentFactoryResolver, ɵresolveComponentResources, ɵReflectionCapabilities, ɵRenderDebugInfo, ɵ_sanitizeHtml, ɵ_sanitizeStyle, ɵ_sanitizeUrl, ɵglobal, ɵlooseIdentical, ɵstringify, ɵmakeDecorator, ɵisObservable, ɵisPromise, ɵclearOverrides, ɵinitServicesIfNeeded, ɵoverrideComponentView, ɵoverrideProvider, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, ɵdefineBase, ɵdefineComponent, ɵdefineDirective, ɵdefinePipe, ɵdefineNgModule, ɵdetectChanges, ɵrenderComponent, ɵRender3ComponentFactory, ɵRender3ComponentRef, ɵdirectiveInject, ɵinjectAttribute, ɵgetFactoryOf, ɵgetInheritedFactory, ɵtemplateRefExtractor, ɵProvidersFeature, ɵInheritDefinitionFeature, ɵNgOnChangesFeature, ɵLifecycleHooksFeature, ɵRender3NgModuleRef, ɵmarkDirty, ɵNgModuleFactory, ɵNO_CHANGE, ɵcontainer, ɵnextContext, ɵelementStart, ɵnamespaceHTML, ɵnamespaceMathML, ɵnamespaceSVG, ɵelement, ɵlistener, ɵtext, ɵembeddedViewStart, ɵquery, ɵregisterContentQuery, ɵprojection, ɵbind, ɵinterpolation1, ɵinterpolation2, ɵinterpolation3, ɵinterpolation4, ɵinterpolation5, ɵinterpolation6, ɵinterpolation7, ɵinterpolation8, ɵinterpolationV, ɵpipeBind1, ɵpipeBind2, ɵpipeBind3, ɵpipeBind4, ɵpipeBindV, ɵpureFunction0, ɵpureFunction1, ɵpureFunction2, ɵpureFunction3, ɵpureFunction4, ɵpureFunction5, ɵpureFunction6, ɵpureFunction7, ɵpureFunction8, ɵpureFunctionV, ɵgetCurrentView, ɵgetHostElement, ɵrestoreView, ɵcontainerRefreshStart, ɵcontainerRefreshEnd, ɵqueryRefresh, ɵloadQueryList, ɵelementEnd, ɵelementProperty, ɵcomponentHostSyntheticProperty, ɵprojectionDef, ɵreference, ɵenableBindings, ɵdisableBindings, ɵallocHostVars, ɵelementAttribute, ɵelementContainerStart, ɵelementContainerEnd, ɵelementStyling, ɵelementHostAttrs, ɵelementStylingMap, ɵelementStyleProp, ɵelementStylingApply, ɵelementClassProp, ɵtextBinding, ɵtemplate, ɵembeddedViewEnd, ɵstore, ɵload, ɵpipe, ɵwhenRendered, ɵi18n, ɵi18nAttributes, ɵi18nExp, ɵi18nStart, ɵi18nEnd, ɵi18nApply, ɵi18nPostprocess, ɵsetClassMetadata, ɵcompileComponent, ɵcompileDirective, ɵcompileNgModule, ɵcompileNgModuleDefs, ɵpatchComponentDefWithScope, ɵresetCompiledComponents, ɵcompilePipe, ɵsanitizeHtml, ɵsanitizeStyle, ɵdefaultStyleSanitizer, ɵsanitizeScript, ɵsanitizeUrl, ɵsanitizeResourceUrl, ɵbypassSanitizationTrustHtml, ɵbypassSanitizationTrustStyle, ɵbypassSanitizationTrustScript, ɵbypassSanitizationTrustUrl, ɵbypassSanitizationTrustResourceUrl, ɵgetLContext, ɵbindPlayerFactory, ɵaddPlayer, ɵgetPlayers, ɵcompileNgModuleFactory__POST_R3__, ɵSWITCH_COMPILE_COMPONENT__POST_R3__, ɵSWITCH_COMPILE_DIRECTIVE__POST_R3__, ɵSWITCH_COMPILE_PIPE__POST_R3__, ɵSWITCH_COMPILE_NGMODULE__POST_R3__, ɵgetDebugNode__POST_R3__, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__, ɵSWITCH_IVY_ENABLED__POST_R3__, ɵSWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__, ɵCompiler_compileModuleSync__POST_R3__, ɵCompiler_compileModuleAsync__POST_R3__, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__, ɵSWITCH_ELEMENT_REF_FACTORY__POST_R3__, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__, ɵSWITCH_RENDERER2_FACTORY__POST_R3__, ɵgetModuleFactory__POST_R3__, ɵpublishGlobalUtil, ɵpublishDefaultGlobalUtils, ɵSWITCH_INJECTOR_FACTORY__POST_R3__, ɵregisterModuleFactory, ɵEMPTY_ARRAY, ɵEMPTY_MAP, ɵand, ɵccf, ɵcmf, ɵcrt, ɵdid, ɵeld, ɵelementEventFullName, ɵgetComponentViewDefinitionFactory, ɵinlineInterpolate, ɵinterpolate, ɵmod, ɵmpd, ɵncd, ɵnov, ɵpid, ɵprd, ɵpad, ɵpod, ɵppd, ɵqud, ɵted, ɵunv, ɵvid } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Params = /** @class */ (function () {
    function Params(_data) {
        if (_data === void 0) { _data = {}; }
        this._data = _data;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    Params.prototype.at = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._data[key];
    };
    Object.defineProperty(Params.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    return Params;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavigatorPage = /** @class */ (function () {
    function NavigatorPage(elementRef, destroy, animator, params) {
        if (elementRef === void 0) { elementRef = null; }
        if (destroy === void 0) { destroy = function () { }; }
        if (animator === void 0) { animator = null; }
        if (params === void 0) { params = new Params(); }
        this.elementRef = elementRef;
        this.destroy = destroy;
        this.animator = animator;
        this.params = params;
    }
    return NavigatorPage;
}());
/**
 * \@element ons-navigator
 * \@directive OnsNavigator
 * \@selector ons-navigator
 * \@codpen KgvAvx
 * \@description
 *   [en]Angular directive for `<ons-navigator>` component.[/en]
 *   [ja]`<ons-navigator>`要素のAngularディレクティブです。[/ja]
 * \@example
 * \@Component({
 *     selector: 'ons-page',
 *     template: `
 *       <ons-toolbar>
 *         <div class="center">Page</div>
 *       </ons-toolbar>
 *       <div class="content">...</div>
 *     `
 *   })
 *   class DefaultPageComponent { }
 *
 * \@Component({
 *     selector: 'navigator-app',
 *     template: `
 *     <ons-navigator [page]="page"></ons-navigator>
 *     `
 *   })
 *   export class AppComponent {
 *     page = DefaultPageComponent
 *   }
 */
var OnsNavigator = /** @class */ (function () {
    function OnsNavigator(_elementRef, _resolver, _viewContainer, _injector, _zone) {
        this._elementRef = _elementRef;
        this._resolver = _resolver;
        this._viewContainer = _viewContainer;
        this._injector = _injector;
        this._zone = _zone;
        this._lastPageLoader = this.element.pageLoader;
        this.element.pageLoader = this._createPageLoader();
    }
    Object.defineProperty(OnsNavigator.prototype, "pageComponentType", {
        /**
         * @input page
         * @desc
         *   [en]Type of the page component.[/en]
         *   [ja]ページコンポーネントのクラスを指定します。[/ja]
         */
        set: /**
         * \@input page
         * @desc
         *   [en]Type of the page component.[/en]
         *   [ja]ページコンポーネントのクラスを指定します。[/ja]
         * @param {?} page
         * @return {?}
         */
        function (page) {
            this.element.page = page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsNavigator.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsNavigator.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OnsNavigator.prototype._createPageLoader = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var componentRefMap = new WeakMap();
        return new PageLoader(function (_a, done) {
            var page = _a.page, parent = _a.parent, params = _a.params;
            _this._zone.run(function () {
                /** @type {?} */
                var pageParams = new Params(params || {});
                /** @type {?} */
                var injector = Injector.create({
                    providers: [
                        { provide: Params, useValue: pageParams },
                        { provide: OnsNavigator, useValue: _this }
                    ],
                    parent: _this._injector
                });
                /** @type {?} */
                var factory = _this._resolver.resolveComponentFactory(page);
                /** @type {?} */
                var pageComponentRef = factory.create(injector, undefined);
                _this._viewContainer.insert(pageComponentRef.hostView);
                /** @type {?} */
                var pageElement = pageComponentRef.location.nativeElement;
                componentRefMap.set(pageElement, pageComponentRef);
                _this.element.appendChild(pageElement); // dirty fix to insert in correct position
                done(pageElement);
            });
        }, function (element) {
            /** @type {?} */
            var componentRef = componentRefMap.get(element);
            if (componentRef) {
                componentRef.destroy();
                componentRefMap.delete(element);
            }
        });
    };
    /**
     * @return {?}
     */
    OnsNavigator.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.element.pageLoader = this._lastPageLoader;
    };
    OnsNavigator.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-navigator'
                },] }
    ];
    /** @nocollapse */
    OnsNavigator.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef },
        { type: Injector },
        { type: NgZone }
    ]; };
    OnsNavigator.propDecorators = {
        pageComponentType: [{ type: Input, args: ['page',] }]
    };
    return OnsNavigator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@element ons-tabbar
 * \@directive OnsTabbar
 * \@selector ons-tabbar
 * \@description
 *   [en]Angular directive for `<ons-tabbar>` component.[/en]
 *   [ja]`<ons-tabbar>`要素のためのディレクティブです。[/ja]
 * \@example
 * \@Component({
 *     selector: 'ons-page',
 *     template: `
 *       <ons-toolbar>
 *         <div class="center">Page</div>
 *       </ons-toolbar>
 *       <div class="content">...</div>
 *     `
 *   })
 *   class PageComponent {
 *   }
 *
 * \@Component({
 *     selector: 'app',
 *     template: `
 *     <ons-tabbar swipeable (swipe)="onSwipe($event)">
 *       <div class="tabbar__content"></div>
 *       <div class="tabbar">
 *         <ons-tab label="Page1" icon="ion-home" [page]="page" active></ons-tab>
 *         <ons-tab label="Page2" icon="ion-help" [page]="page"></ons-tab>
 *         <ons-tab label="Page3" icon="ion-stop" [page]="page"></ons-tab>
 *       </div>
 *     </ons-tabbar>
 *     `
 *   })
 *   export class AppComponent {
 *     page = PageComponent
 *
 *     onSwipe(event) {
 *       console.log(event);
 *     }
 *   }
 */
var OnsTabbar = /** @class */ (function () {
    function OnsTabbar(_elementRef) {
        var _this = this;
        this._elementRef = _elementRef;
        /**
         * \@output swipe
         * @param $event
         * @param $event.index
         * @param $event.options
         * @desc
         *   [en]Triggers when the tabbar is swiped.[/en]
         *   [ja]`<ons-tabbar>`がスワイプされた時に発火します。[/ja]
         */
        this._swipe = new EventEmitter();
        this._element = _elementRef.nativeElement;
        this._element.onSwipe = function (index, options) { return _this._swipe.emit({ index: index, options: options }); };
    }
    OnsTabbar.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-tabbar'
                },] }
    ];
    /** @nocollapse */
    OnsTabbar.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OnsTabbar.propDecorators = {
        _swipe: [{ type: Output, args: ['swipe',] }]
    };
    return OnsTabbar;
}());
/**
 * \@element ons-tab
 * \@directive OnsTab
 * \@selector ons-tab
 * \@description
 *   [en]Angular directive for `<ons-tab>` component.[/en]
 *   [ja]`<ons-tab>`要素のためのディレクティブです。[/ja]
 * \@example
 * \@Component({
 *     selector: 'ons-page',
 *     template: `
 *       <ons-toolbar>
 *         <div class="center">Page</div>
 *       </ons-toolbar>
 *       <div class="content">...</div>
 *     `
 *   })
 *   class PageComponent {
 *   }
 *
 * \@Component({
 *     selector: 'app',
 *     template: `
 *     <ons-tabbar>
 *       <div class="tabbar__content"></div>
 *       <div class="tabbar">
 *         <ons-tab label="Page1" icon="ion-home" [page]="page" active></ons-tab>
 *         <ons-tab label="Page2" icon="ion-help" [page]="page"></ons-tab>
 *         <ons-tab label="Page3" icon="ion-stop" [page]="page"></ons-tab>
 *       </div>
 *     </ons-tabbar>
 *     `
 *   })
 *   export class AppComponent {
 *     page = PageComponent
 *   }
 */
var OnsTab = /** @class */ (function () {
    function OnsTab(_elementRef, _viewContainer, _resolver, _zone) {
        this._elementRef = _elementRef;
        this._viewContainer = _viewContainer;
        this._resolver = _resolver;
        this._zone = _zone;
        this._pageComponent = null;
        // set up ons-tab's page loader
        this._elementRef.nativeElement.pageLoader = this._createPageLoader();
    }
    Object.defineProperty(OnsTab.prototype, "page", {
        /**
         * @input page
         * @desc
         *   [en]Specify the page component that is displayed when the tab is active.[/en]
         *   [ja]読み込むページコンポーネントを指定します。[/ja]
         */
        set: /**
         * \@input page
         * @desc
         *   [en]Specify the page component that is displayed when the tab is active.[/en]
         *   [ja]読み込むページコンポーネントを指定します。[/ja]
         * @param {?} pageComponentType
         * @return {?}
         */
        function (pageComponentType) {
            this._elementRef.nativeElement.page = pageComponentType;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OnsTab.prototype._createPageLoader = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var PageLoader$$1 = (/** @type {?} */ (PageLoader));
        return new PageLoader$$1(function (_a, done) {
            var page = _a.page, parent = _a.parent;
            _this._zone.run(function () {
                /** @type {?} */
                var factory = _this._resolver.resolveComponentFactory(page);
                /** @type {?} */
                var pageComponentRef = _this._viewContainer.createComponent(factory, 0);
                if (_this._pageComponent) {
                    _this._pageComponent.destroy();
                }
                _this._pageComponent = pageComponentRef;
                /** @type {?} */
                var pageElement = pageComponentRef.location.nativeElement;
                parent.appendChild(pageElement); // dirty fix to insert in correct position
                done(pageElement);
            });
        }, function () {
            if (_this.hasOwnProperty('_pageComponent')) {
                if (_this._pageComponent) {
                    _this._pageComponent.destroy();
                    _this._pageComponent = null;
                }
            }
        });
    };
    /**
     * @return {?}
     */
    OnsTab.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._pageComponent) {
            this._pageComponent.destroy();
            this._pageComponent = null;
        }
    };
    OnsTab.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-tab'
                },] }
    ];
    /** @nocollapse */
    OnsTab.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: NgZone }
    ]; };
    OnsTab.propDecorators = {
        page: [{ type: Input, args: ['page',] }]
    };
    return OnsTab;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@element ons-switch
 * \@directive OnsSwitch
 * \@selector ons-switch
 * \@description
 *   [en]Angular directive for `<ons-switch>` component.[/en]
 *   [ja]`<ons-switch>`要素のAngularディレクティブです。[/ja]
 * \@example
 *   <ons-switch [(value)]="target"></ons-switch>
 */
var OnsSwitch = /** @class */ (function () {
    function OnsSwitch(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = function (_) { };
        this._propagateTouched = function () { };
        /**
         * \@output valueChange
         * @desc
         *   [en]Triggers when the value is changed.[/en]
         *   [ja]値が変更された時に発火します。[/ja]
         */
        this._valueChange = new EventEmitter();
        this._boundOnChange = this._onChange.bind(this);
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('change', this._boundOnChange);
    }
    Object.defineProperty(OnsSwitch.prototype, "value", {
        /**
         * @input value
         * @desc
         *   [en]Specify the value of the `<ons-switch>` component.[/en]
         *   [ja]`ons-switch`コンポーネントに設定する値を指定します。[/ja]
         */
        set: /**
         * \@input value
         * @desc
         *   [en]Specify the value of the `<ons-switch>` component.[/en]
         *   [ja]`ons-switch`コンポーネントに設定する値を指定します。[/ja]
         * @param {?} target
         * @return {?}
         */
        function (target) {
            this._element.checked = !!target;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    OnsSwitch.prototype._onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._valueChange.emit(this._element.checked);
        this._propagateChange(this._element.checked);
    };
    /**
     * @return {?}
     */
    OnsSwitch.prototype._onBlur = /**
     * @return {?}
     */
    function () {
        this._propagateTouched();
    };
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    OnsSwitch.prototype.ngOnChanges = /**
     * @param {?} changeRecord
     * @return {?}
     */
    function (changeRecord) {
        /** @type {?} */
        var value = !!((/** @type {?} */ (changeRecord))).value.currentValue;
        this._element.checked = value;
    };
    Object.defineProperty(OnsSwitch.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsSwitch.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OnsSwitch.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._element.removeEventListener('change', this._boundOnChange);
        this._element = null;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    OnsSwitch.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._element.checked = obj;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsSwitch.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsSwitch.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateTouched = fn;
    };
    OnsSwitch.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-switch',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return OnsSwitch; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    OnsSwitch.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OnsSwitch.propDecorators = {
        value: [{ type: Input, args: ['value',] }],
        _valueChange: [{ type: Output, args: ['valueChange',] }],
        _onBlur: [{ type: HostListener, args: ['blur',] }]
    };
    return OnsSwitch;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@element ons-range
 * \@directive OnsRange
 * \@selector ons-range
 * \@description
 *   [en]Angular directive for `<ons-range>` component.[/en]
 *   [ja]`<ons-range>`要素のAngularディレクティブです。[/ja]
 * \@example
 *   <ons-range [(value)]="foo"></ons-range>
 */
var OnsRange = /** @class */ (function () {
    function OnsRange(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = function (_) { };
        this._propagateTouched = function () { };
        /**
         * \@output valueChange
         * @desc
         *   [en]Triggers when the value is changed.[/en]
         *   [ja]値が変更された時に発火します。[/ja]
         */
        this._valueChange = new EventEmitter();
        this._boundOnChange = this._onChange.bind(this);
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('input', this._boundOnChange);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    OnsRange.prototype._onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._valueChange.emit(this._element.value);
        this._propagateChange(this._element.value);
    };
    /**
     * @return {?}
     */
    OnsRange.prototype._onBlur = /**
     * @return {?}
     */
    function () {
        this._propagateTouched();
    };
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    OnsRange.prototype.ngOnChanges = /**
     * @param {?} changeRecord
     * @return {?}
     */
    function (changeRecord) {
        /** @type {?} */
        var value = changeRecord['_value'].currentValue;
        this._element.value = value;
    };
    Object.defineProperty(OnsRange.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsRange.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OnsRange.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._element.removeEventListener('input', this._boundOnChange);
        this._element = null;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    OnsRange.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._element.value = obj;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsRange.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsRange.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateTouched = fn;
    };
    OnsRange.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-range',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return OnsRange; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    OnsRange.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OnsRange.propDecorators = {
        _value: [{ type: Input, args: ['value',] }],
        _valueChange: [{ type: Output, args: ['valueChange',] }],
        _onBlur: [{ type: HostListener, args: ['blur',] }]
    };
    return OnsRange;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@element ons-select
 * \@directive OnsSelect
 * \@selector ons-select
 * \@description
 *   [en]Angular directive for `<ons-select>` component.[/en]
 *   [ja]`<ons-select>`要素のAngularディレクティブです。[/ja]
 * \@example
 *   <ons-select [(ngModel)]="selectedValue">
 *     <option value="Item A">Item A</option>
 *     <option value="Item B">Item B</option>
 *     <option value="Item C">Item C</option>
 *   </ons-select>
 */
var OnsSelect = /** @class */ (function () {
    function OnsSelect(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = function (_) { };
        this._boundOnChange = this._onChange.bind(this);
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('change', this._boundOnChange);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    OnsSelect.prototype._onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._propagateChange(event.target.value);
    };
    Object.defineProperty(OnsSelect.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsSelect.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OnsSelect.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._element.removeEventListener('change', this._boundOnChange);
        this._element = null;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    OnsSelect.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._element.value = obj;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsSelect.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateChange = fn;
    };
    /**
     * @return {?}
     */
    OnsSelect.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    OnsSelect.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-select',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return OnsSelect; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    OnsSelect.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return OnsSelect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@element ons-input
 * \@directive OnsInput
 * \@selector ons-input
 * \@description
 *   [en]Angular directive for `<ons-input>` component.[/en]
 *   [ja]`<ons-input>`要素のAngularディレクティブです。[/ja]
 * \@example
 *   <ons-input [(value)]="value"></ons-input>
 */
var OnsInput = /** @class */ (function () {
    function OnsInput(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = function (_) { };
        this._propagateTouched = function () { };
        /**
         * \@output valueChange
         * @desc
         *   [en]Triggers when the value is changed.[/en]
         *   [ja]内部の`input`要素の値が変更された時に発火します。[/ja]
         */
        this._valueChange = new EventEmitter();
        this._boundOnChange = this._onChange.bind(this);
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('input', this._boundOnChange);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    OnsInput.prototype._onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._valueChange.emit(this._element.value);
        this._propagateChange(this._element.value);
    };
    /**
     * @return {?}
     */
    OnsInput.prototype._onBlur = /**
     * @return {?}
     */
    function () {
        this._propagateTouched();
    };
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    OnsInput.prototype.ngOnChanges = /**
     * @param {?} changeRecord
     * @return {?}
     */
    function (changeRecord) {
        /** @type {?} */
        var value = changeRecord['_value'].currentValue;
        if (this._element.value !== value) {
            this._element.value = value;
        }
    };
    Object.defineProperty(OnsInput.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsInput.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OnsInput.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._element.removeEventListener('input', this._boundOnChange);
        this._element = null;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    OnsInput.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._element.value = obj;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsInput.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsInput.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateTouched = fn;
    };
    OnsInput.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-input',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return OnsInput; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    OnsInput.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OnsInput.propDecorators = {
        _value: [{ type: Input, args: ['value',] }],
        _valueChange: [{ type: Output, args: ['valueChange',] }],
        _onBlur: [{ type: HostListener, args: ['blur',] }]
    };
    return OnsInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@element ons-pull-hook
 * \@directive OnsPullHook
 * \@selector ons-pull-hook
 * \@description
 *   [en]Angular directive for `<ons-pull-hook>` component.[/en]
 *   [ja]`<ons-pull-hook>`要素のためのAngular2ディレクティブです。[/ja]
 * \@example
 * \@Component({
 *     selector: 'app',
 *     template: `
 *     <ons-page>
 *       <ons-toolbar>
 *         <div class="center">Pull Hook</div>
 *       </ons-toolbar>
 *       <div class="content">
 *         <ons-pull-hook height="64px" threshold-height="128px"
 *           (pull)="onPull($event)" (changestate)="onChangeState($event)" (action)="onAction($event)">
 *           {{message}}
 *         </ons-pull-hook>
 *       </div>
 *     </ons-page>
 *     `
 *   })
 *   export class AppComponent {
 *     message: string = 'Pull down to refresh';
 *
 *     onAction($event) {
 *       setTimeout(() => {
 *         $event.done();
 *       }, 1000);
 *     }
 *
 *     onChangeState($event) {
 *       switch ($event.state) {
 *         case 'initial':
 *           this.message = 'Pull down to refresh';
 *           break;
 *         case 'preaction':
 *           this.message = 'Release to refresh';
 *           break;
 *         case 'action':
 *           this.message = 'Loading data...';
 *           break;
 *       }
 *     }
 *
 *     onPull($event) {
 *       console.log($event.ratio);
 *     }
 *
 *   }
 */
var OnsPullHook = /** @class */ (function () {
    function OnsPullHook(_elementRef) {
        var _this = this;
        this._elementRef = _elementRef;
        /**
         * \@output action
         * @param $event
         * @param $event.done
         * @desc
         *   [en]Triggers when the page is pulled down.[/en]
         *   [ja]`ons-pull-hook`要素のアクションが必要なときに呼び出されます。[/ja]
         */
        this.action = new EventEmitter();
        /**
           * @output changestate
           * @param $event
           * @param $event.state
           * @desc
           *   [en]Triggers when the state is changed.[/en]
           *   [ja]`ons-pull-hook`要素の状態が変わった時に呼び出されます。[/ja]
           */
        /**
         * \@output pull
         * @param $event
         * @param $event.ratio
         * @param $event.options
         * @desc
         *   [en]Triggers whenever the element is pulled.[/en]
         *   [ja]`ons-pull-hook`要素がプルされているときに呼び出されます。[/ja]
         */
        this.pull = new EventEmitter();
        this._element = _elementRef.nativeElement;
        this._element.onAction = function (done) { return _this.action.emit({ done: done }); };
        this._element.onPull = function (ratio, options) { return _this.pull.emit({ ratio: ratio, options: options }); };
    }
    /**
     * @return {?}
     */
    OnsPullHook.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._element.onAction = null;
        this._element = null;
    };
    OnsPullHook.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-pull-hook'
                },] }
    ];
    /** @nocollapse */
    OnsPullHook.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OnsPullHook.propDecorators = {
        action: [{ type: Output }],
        pull: [{ type: Output }]
    };
    return OnsPullHook;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ItemContext = /** @class */ (function () {
    function ItemContext($implicit, index, count) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
    }
    return ItemContext;
}());
/**
 * \@element ons-lazy-repeat
 * \@directive OnsLazyRepeat
 * \@selector [ons-lazy-repeat]
 * \@description
 *   [en]Angular directive for `<ons-lazy-repeat>` component.[/en]
 *   [ja]`<ons-lazy-repeat>`要素と同じ機能を提供するAngularディレクティブです。[/ja]
 * \@example
 *   <ons-list>
 *     <ons-list-item *onsLazyRepeat="let item of items; let i = index">
 *       #{{i}} {{item.msg}}
 *     </ons-list-item>
 *   </ons-list>
 */
var OnsLazyRepeat = /** @class */ (function () {
    function OnsLazyRepeat(_elementRef, _templateRef, _viewContainer) {
        this._elementRef = _elementRef;
        this._templateRef = _templateRef;
        this._viewContainer = _viewContainer;
    }
    Object.defineProperty(OnsLazyRepeat.prototype, "onsLazyRepeatOf", {
        /**
         * @input onsLazyRepeat
         * @desc
         *   [en]Render infinite lists with "let of" syntax in Angular.[/en]
         *   [ja]let of式を指定します。[/ja]
         * @example
         *  <ons-list>
         *    <ons-list-item *onsLazyRepeat="let message of messages">
         *      {{message}}
         *    </ons-list-item>
         *  </ons-list>
         */
        set: /**
         * \@input onsLazyRepeat
         * @desc
         *   [en]Render infinite lists with "let of" syntax in Angular.[/en]
         *   [ja]let of式を指定します。[/ja]
         * \@example
         *  <ons-list>
         *    <ons-list-item *onsLazyRepeat="let message of messages">
         *      {{message}}
         *    </ons-list-item>
         *  </ons-list>
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._onsLazyRepeatOf = value;
            this._provider = new _internal.LazyRepeatProvider(this._elementRef.nativeElement.parentElement, new _internal.LazyRepeatDelegate({
                loadItemElement: function (index, done) {
                    _this._loadItemTemplate(index, done);
                },
                countItems: function () {
                    return _this._onsLazyRepeatOf.length;
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @param {?} done
     * @return {?}
     */
    OnsLazyRepeat.prototype._loadItemTemplate = /**
     * @param {?} index
     * @param {?} done
     * @return {?}
     */
    function (index, done) {
        /** @type {?} */
        var context = new ItemContext(this._onsLazyRepeatOf[index], index, this._onsLazyRepeatOf.length);
        /** @type {?} */
        var view = this._viewContainer.createEmbeddedView(this._templateRef, context);
        // dirty fix on createEmbeddedView() does not insert DOM element randomly.
        done({ element: view.rootNodes[0] });
    };
    /**
     * @return {?}
     */
    OnsLazyRepeat.prototype.refresh = /**
     * @return {?}
     */
    function () {
        if (this._provider) {
            this._viewContainer.clear();
            this._provider.refresh();
        }
    };
    /**
     * @return {?}
     */
    OnsLazyRepeat.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._provider) {
            this._provider.destroy();
        }
        this._viewContainer.clear();
        this._provider = null;
    };
    OnsLazyRepeat.decorators = [
        { type: Directive, args: [{
                    selector: '[onsLazyRepeat]'
                },] }
    ];
    /** @nocollapse */
    OnsLazyRepeat.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    OnsLazyRepeat.propDecorators = {
        onsLazyRepeatOf: [{ type: Input }]
    };
    return OnsLazyRepeat;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@element ons-splitter-side
 * \@directive OnsSplitterSide
 * \@selector ons-splitter-side
 * \@description
 *   [ja]`<ons-splitter-side>`要素のAngularディレクティブです。[/ja]
 *   [en]Angular directive for `<ons-splitter-side>` component.[/en]
 * \@example
 * \@Component({
 *     selector: 'ons-page',
 *     template: `
 *       <ons-toolbar>
 *         <div class="center">Left Page</div>
 *       </ons-toolbar>
 *       <div class="background"></div>
 *       <div class="content">
 *         Left
 *       </div>
 *     `
 *   })
 *   class SidePageComponent { }
 *
 * \@Component({
 *     selector: 'app',
 *     template: `
 *     <ons-splitter>
 *       <ons-splitter-side [page]="sidePage" side="left" width="200px">
 *       </ons-splitter-side>
 *       <ons-splitter-content>...</ons-splitter-content>
 *     </ons-splitter>
 *     `
 *   })
 *   export class AppComponent {
 *     sidePage = SidePageComponent;
 *   }
 */
var OnsSplitterSide = /** @class */ (function () {
    function OnsSplitterSide(_elementRef, _viewContainer, _resolver, _injector, _zone) {
        this._elementRef = _elementRef;
        this._viewContainer = _viewContainer;
        this._resolver = _resolver;
        this._injector = _injector;
        this._zone = _zone;
        this.element.pageLoader = this._createPageLoader();
    }
    Object.defineProperty(OnsSplitterSide.prototype, "page", {
        /**
         * @input page
         * @desc
         *   [en]Page content.[/en]
         *   [ja]表示するページコンポーネントのクラスを指定します。[/ja]
         */
        set: /**
         * \@input page
         * @desc
         *   [en]Page content.[/en]
         *   [ja]表示するページコンポーネントのクラスを指定します。[/ja]
         * @param {?} page
         * @return {?}
         */
        function (page) {
            this.element.page = page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsSplitterSide.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsSplitterSide.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OnsSplitterSide.prototype._createPageLoader = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var componentRefMap = new WeakMap();
        return new PageLoader(function (_a, done) {
            var page = _a.page, parent = _a.parent, params = _a.params;
            _this._zone.run(function () {
                /** @type {?} */
                var injector = Injector.create({
                    providers: [
                        { provide: Params, useValue: new Params(params || {}) },
                        { provide: OnsSplitterSide, useValue: _this }
                    ],
                    parent: _this._injector
                });
                /** @type {?} */
                var factory = _this._resolver.resolveComponentFactory(page);
                /** @type {?} */
                var pageComponentRef = _this._viewContainer.createComponent(factory, 0, injector);
                /** @type {?} */
                var pageElement = pageComponentRef.location.nativeElement;
                componentRefMap.set(pageElement, pageComponentRef);
                _this.element.appendChild(pageElement); // dirty fix to insert in correct position
                done(pageElement);
            });
        }, function (element) {
            /** @type {?} */
            var componentRef = componentRefMap.get(element);
            if (componentRef) {
                componentRef.destroy();
                componentRefMap.delete(element);
            }
        });
    };
    OnsSplitterSide.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-splitter-side'
                },] }
    ];
    /** @nocollapse */
    OnsSplitterSide.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Injector },
        { type: NgZone }
    ]; };
    OnsSplitterSide.propDecorators = {
        page: [{ type: Input, args: ['page',] }]
    };
    return OnsSplitterSide;
}());
/**
 * \@element ons-splitter-content
 * \@directive OnsSplitterContent
 * \@selector ons-splitter-content
 * \@description
 *    [ja]`<ons-splitter-content>`要素のためのAngular2 ディレクティブです。[/ja]
 *    [en]Angular directive for `<ons-splitter-content>` component.[/en]
 */
var OnsSplitterContent = /** @class */ (function () {
    function OnsSplitterContent(_elementRef, _viewContainer, _resolver, _injector) {
        this._elementRef = _elementRef;
        this._viewContainer = _viewContainer;
        this._resolver = _resolver;
        this._injector = _injector;
        this.element.pageLoader = this._createPageLoader();
    }
    Object.defineProperty(OnsSplitterContent.prototype, "page", {
        /**
         * @input page
         * @desc
         *   [en]Specify the page component.[/en]
         *   [ja]表示するページコンポーネントのクラスを指定します。[/ja]
         */
        set: /**
         * \@input page
         * @desc
         *   [en]Specify the page component.[/en]
         *   [ja]表示するページコンポーネントのクラスを指定します。[/ja]
         * @param {?} page
         * @return {?}
         */
        function (page) {
            this.element.page = page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsSplitterContent.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsSplitterContent.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OnsSplitterContent.prototype._createPageLoader = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var componentRefMap = new WeakMap();
        return new PageLoader(function (_a, done) {
            var page = _a.page, parent = _a.parent, params = _a.params;
            /** @type {?} */
            var injector = Injector.create({
                providers: [
                    { provide: Params, useValue: new Params(params || {}) },
                    { provide: OnsSplitterContent, useValue: _this }
                ],
                parent: _this._injector
            });
            /** @type {?} */
            var factory = _this._resolver.resolveComponentFactory(page);
            /** @type {?} */
            var pageComponentRef = _this._viewContainer.createComponent(factory, 0, injector);
            /** @type {?} */
            var pageElement = pageComponentRef.location.nativeElement;
            componentRefMap.set(pageElement, pageComponentRef);
            _this.element.appendChild(pageElement); // dirty fix to insert in correct position
            done(pageElement);
        }, function (element) {
            /** @type {?} */
            var componentRef = componentRefMap.get(element);
            if (componentRef) {
                componentRef.destroy();
                componentRefMap.delete(element);
            }
        });
    };
    OnsSplitterContent.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-splitter-content'
                },] }
    ];
    /** @nocollapse */
    OnsSplitterContent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Injector }
    ]; };
    OnsSplitterContent.propDecorators = {
        page: [{ type: Input, args: ['page',] }]
    };
    return OnsSplitterContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@object onsNotification
 * @type {?}
 */
var onsNotification = notification;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var onsPlatform = platform;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentLoader = /** @class */ (function () {
    function ComponentLoader(appRef) {
        this.appRef = appRef;
    }
    // Load an instance of ComponentRef in app view.
    // Load an instance of ComponentRef in app view.
    /**
     * @param {?} componentRef
     * @return {?}
     */
    ComponentLoader.prototype.load = 
    // Load an instance of ComponentRef in app view.
    /**
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        var _this = this;
        /** @type {?} */
        var rootElement = componentRef.location.nativeElement;
        if (this.appRef.attachView) {
            this.appRef.attachView(componentRef.hostView);
            componentRef.onDestroy(function () {
                _this.appRef.detachView(componentRef.hostView);
                if (rootElement.parentNode) {
                    rootElement.parentNode.removeChild(rootElement);
                }
            });
        }
        else {
            if (((/** @type {?} */ (this.appRef))).registerChangeDetector) {
                ((/** @type {?} */ (this.appRef))).registerChangeDetector(componentRef.changeDetectorRef);
            }
            componentRef.onDestroy(function () {
                if (((/** @type {?} */ (_this.appRef))).unregisterChangeDetector) {
                    ((/** @type {?} */ (_this.appRef))).unregisterChangeDetector(componentRef.changeDetectorRef);
                }
                if (rootElement.parentNode) {
                    rootElement.parentNode.removeChild(rootElement);
                }
            });
        }
        /** @type {?} */
        var rootContainer = ((/** @type {?} */ (this.appRef))).components[0].location.nativeElement;
        rootContainer.appendChild(rootElement);
    };
    ComponentLoader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentLoader.ctorParameters = function () { return [
        { type: ApplicationRef }
    ]; };
    return ComponentLoader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@object AlertDialogFactory
 */
var AlertDialogFactory = /** @class */ (function () {
    function AlertDialogFactory(_injector, _resolver, _appRef, _componentLoader, _zone) {
        this._injector = _injector;
        this._resolver = _resolver;
        this._appRef = _appRef;
        this._componentLoader = _componentLoader;
        this._zone = _zone;
    }
    /**
     * @param {?} componentType
     * @param {?=} params
     * @return {?}
     */
    AlertDialogFactory.prototype.createAlertDialog = /**
     * @param {?} componentType
     * @param {?=} params
     * @return {?}
     */
    function (componentType, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        console.warn('[ngx-onsenui] AlertDialogFactory is deprecated since 4.0.0-rc.0. Place <ons-alert-dialog> into your component instead.');
        return new Promise(function (resolve) {
            setImmediate(function () {
                _this._zone.run(function () {
                    /** @type {?} */
                    var factory = _this._resolver.resolveComponentFactory(componentType);
                    /** @type {?} */
                    var injector = Injector.create({
                        providers: [
                            { provide: Params, useValue: new Params(params) }
                        ],
                        parent: _this._injector
                    });
                    /** @type {?} */
                    var componentRef = factory.create(injector);
                    /** @type {?} */
                    var rootElement = componentRef.location.nativeElement;
                    _this._componentLoader.load(componentRef);
                    /** @type {?} */
                    var element = rootElement.children[0];
                    /** @type {?} */
                    var alertDialogElement = element.tagName === 'ONS-ALERT-DIALOG' ? element : element.querySelector('ons-alert-dialog');
                    if (!alertDialogElement) {
                        throw Error('<ons-alert-dialog> element is not found in component\'s template.');
                    }
                    resolve({ alertDialog: alertDialogElement, destroy: function () { return componentRef.destroy(); } });
                });
            });
        });
    };
    AlertDialogFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AlertDialogFactory.ctorParameters = function () { return [
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: ComponentLoader },
        { type: NgZone }
    ]; };
    return AlertDialogFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@object PopoverFactory
 */
var PopoverFactory = /** @class */ (function () {
    function PopoverFactory(_injector, _resolver, _appRef, _componentLoader, _zone) {
        this._injector = _injector;
        this._resolver = _resolver;
        this._appRef = _appRef;
        this._componentLoader = _componentLoader;
        this._zone = _zone;
    }
    /**
     * @param {?} componentType
     * @param {?=} params
     * @return {?}
     */
    PopoverFactory.prototype.createPopover = /**
     * @param {?} componentType
     * @param {?=} params
     * @return {?}
     */
    function (componentType, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        console.warn('[ngx-onsenui] PopoverFactory is deprecated since 4.0.0-rc.0. Place <ons-popover> into your component instead.');
        return new Promise(function (resolve) {
            setImmediate(function () {
                _this._zone.run(function () {
                    /** @type {?} */
                    var factory = _this._resolver.resolveComponentFactory(componentType);
                    /** @type {?} */
                    var injector = Injector.create({
                        providers: [
                            { provide: Params, useValue: new Params(params) }
                        ],
                        parent: _this._injector
                    });
                    /** @type {?} */
                    var componentRef = factory.create(injector);
                    /** @type {?} */
                    var rootElement = componentRef.location.nativeElement;
                    _this._componentLoader.load(componentRef);
                    /** @type {?} */
                    var element = rootElement.children[0];
                    /** @type {?} */
                    var popoverElement = element.tagName === 'ONS-POPOVER' ? element : element.querySelector('ons-popover');
                    if (!popoverElement) {
                        throw Error('<ons-popover> element is not found in component\'s template.');
                    }
                    resolve({ popover: popoverElement, destroy: function () { return componentRef.destroy(); } });
                });
            });
        });
    };
    PopoverFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PopoverFactory.ctorParameters = function () { return [
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: ComponentLoader },
        { type: NgZone }
    ]; };
    return PopoverFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@object DialogFactory
 */
var DialogFactory = /** @class */ (function () {
    function DialogFactory(_injector, _resolver, _appRef, _componentLoader, _zone) {
        this._injector = _injector;
        this._resolver = _resolver;
        this._appRef = _appRef;
        this._componentLoader = _componentLoader;
        this._zone = _zone;
    }
    /**
     * @param {?} componentType
     * @param {?=} params
     * @return {?}
     */
    DialogFactory.prototype.createDialog = /**
     * @param {?} componentType
     * @param {?=} params
     * @return {?}
     */
    function (componentType, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        console.warn('[ngx-onsenui] DialogFactory is deprecated since 4.0.0-rc.0. Place <ons-dialog> into your component instead.');
        return new Promise(function (resolve) {
            setImmediate(function () {
                _this._zone.run(function () {
                    /** @type {?} */
                    var factory = _this._resolver.resolveComponentFactory(componentType);
                    /** @type {?} */
                    var injector = Injector.create({
                        providers: [
                            { provide: Params, useValue: new Params(params) }
                        ],
                        parent: _this._injector
                    });
                    /** @type {?} */
                    var componentRef = factory.create(injector);
                    /** @type {?} */
                    var rootElement = componentRef.location.nativeElement;
                    _this._componentLoader.load(componentRef);
                    /** @type {?} */
                    var element = rootElement.children[0];
                    /** @type {?} */
                    var dialogElement = element.tagName === 'ONS-DIALOG' ? element : element.querySelector('ons-dialog');
                    if (!dialogElement) {
                        throw Error('<ons-dialog> element is not found in component\'s template.');
                    }
                    resolve({ dialog: dialogElement, destroy: function () { return componentRef.destroy(); } });
                });
            });
        });
    };
    DialogFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DialogFactory.ctorParameters = function () { return [
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: ComponentLoader },
        { type: NgZone }
    ]; };
    return DialogFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@object ModalFactory
 */
var ModalFactory = /** @class */ (function () {
    function ModalFactory(_injector, _resolver, _appRef, _componentLoader, _zone) {
        this._injector = _injector;
        this._resolver = _resolver;
        this._appRef = _appRef;
        this._componentLoader = _componentLoader;
        this._zone = _zone;
    }
    /**
     * @param {?} componentType
     * @param {?=} params
     * @return {?}
     */
    ModalFactory.prototype.createModal = /**
     * @param {?} componentType
     * @param {?=} params
     * @return {?}
     */
    function (componentType, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        console.warn('[ngx-onsenui] ModalFactory is deprecated since 4.0.0-rc.0. Place <ons-modal> into your component instead.');
        return new Promise(function (resolve) {
            setImmediate(function () {
                _this._zone.run(function () {
                    /** @type {?} */
                    var factory = _this._resolver.resolveComponentFactory(componentType);
                    /** @type {?} */
                    var injector = Injector.create({
                        providers: [
                            { provide: Params, useValue: new Params(params) }
                        ],
                        parent: _this._injector
                    });
                    /** @type {?} */
                    var componentRef = factory.create(injector);
                    /** @type {?} */
                    var rootElement = componentRef.location.nativeElement;
                    _this._componentLoader.load(componentRef);
                    /** @type {?} */
                    var element = rootElement.children[0];
                    /** @type {?} */
                    var modalElement = element.tagName === 'ONS-MODAL' ? element : element.querySelector('ons-modal');
                    if (!modalElement) {
                        throw Error('<ons-modal> element is not found in component\'s template.');
                    }
                    resolve({ modal: modalElement, destroy: function () { return componentRef.destroy(); } });
                });
            });
        });
    };
    ModalFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ModalFactory.ctorParameters = function () { return [
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: ComponentLoader },
        { type: NgZone }
    ]; };
    return ModalFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@element ons-segment
 * \@directive OnsSegment
 * \@selector ons-segment
 * \@description
 *   [en]Angular directive for `<ons-segment>` component.[/en]
 *   [ja]`<ons-segment>`要素のAngularディレクティブです。[/ja]
 * \@example
 * \@Component({
 *     selector: 'app',
 *     template: `
 *       <ons-page>
 *         <ons-toolbar>
 *           <div class="center">
 *             <ons-segment style="width: 280px; margin-top: 8px;" [tabbar]="tabbar" (postchange)="onPostChange($event)">
 *               <button>Page 1</button>
 *               <button>Page 2</button>
 *               <button>Page 3</button>
 *             </ons-segment>
 *           </div>
 *         </ons-toolbar>
 *         <ons-tabbar #tabbar>
 *           <ons-tab [page]="page1" active></ons-tab>
 *           <ons-tab [page]="page2"></ons-tab>
 *           <ons-tab [page]="page3"></ons-tab>
 *         </ons-tabbar>
 *       </ons-page>
 *     `
 *   })
 *   export class AppComponent {
 *     page1 = PageComponent;
 *     page2 = PageComponent;
 *     page3 = PageComponent;
 *
 *     constructor() {}
 *
 *     onPostChange(event: any) {
 *      console.log('postchange event', event);
 *     }
 *   }
 *
 * \@Component({
 *     selector: 'ons-page[tab]',
 *     template: `<h2>Page</h2>`
 *   })
 *   export class PageComponent {
 *     constructor() { }
 *   }
 */
var OnsSegment = /** @class */ (function () {
    function OnsSegment(_elementRef) {
        var _this = this;
        this._elementRef = _elementRef;
        /**
         * \@output activeIndexChange
         * @desc
         *   [en]Triggers when the index of the active button is changed.[/en]
         *   [ja]アクティブなボタンのインデックスが変化した時に発火します。[/ja]
         */
        this.activeIndexChange = new EventEmitter();
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('postchange', function (event) {
            _this.activeIndexChange.emit(event.index);
        });
    }
    Object.defineProperty(OnsSegment.prototype, "tabbar", {
        /**
         * @input tabbar
         * @desc
         *   [en]The tabbar component to "connect" to the segment. Must be inside the same page. Works only during initialization.[/en]
         *   [ja]このセグメントに紐づけるタブバーを指定します。タブバーはセグメントと同一ページ内に存在する必要があります。初期化時にのみ動作します。[/ja]
         */
        set: /**
         * \@input tabbar
         * @desc
         *   [en]The tabbar component to "connect" to the segment. Must be inside the same page. Works only during initialization.[/en]
         *   [ja]このセグメントに紐づけるタブバーを指定します。タブバーはセグメントと同一ページ内に存在する必要があります。初期化時にのみ動作します。[/ja]
         * @param {?} _tabbar
         * @return {?}
         */
        function (_tabbar) {
            var _this = this;
            this._element._tabbar = _tabbar;
            this._element._tabbar.setAttribute('hide-tabs', '');
            setImmediate(function () { return _this._element._setChecked(_this._element._tabbar.getActiveTabIndex()); });
            this._element._tabbar.addEventListener('prechange', this._element._onTabbarPreChange);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OnsSegment.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.activeIndex) {
            this._element.setActiveButton(this.activeIndex);
        }
    };
    OnsSegment.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-segment'
                },] }
    ];
    /** @nocollapse */
    OnsSegment.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OnsSegment.propDecorators = {
        activeIndex: [{ type: Input }],
        activeIndexChange: [{ type: Output }],
        tabbar: [{ type: Input }]
    };
    return OnsSegment;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@element ons-search-input
 * \@directive OnsSearchInput
 * \@selector ons-search-input
 * \@description
 *   [en]Angular directive for `<ons-search-input>` component.[/en]
 *   [ja]`<ons-search-input>`要素のAngularディレクティブです。[/ja]
 * \@example
 *   <ons-search-input [(value)]="value"></ons-search-input>
 */
var OnsSearchInput = /** @class */ (function () {
    function OnsSearchInput(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = function (_) { };
        this._propagateTouched = function () { };
        /**
         * \@output valueChange
         * @desc
         *   [en]Triggers when the value is changed.[/en]
         *   [ja]内部の`input`要素の値が変更された時に発火します。[/ja]
         */
        this._valueChange = new EventEmitter();
        this._boundOnChange = this._onChange.bind(this);
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('input', this._boundOnChange);
    }
    /**
     * @return {?}
     */
    OnsSearchInput.prototype._onBlur = /**
     * @return {?}
     */
    function () {
        this._propagateTouched();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    OnsSearchInput.prototype._onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._valueChange.emit(this._element.value);
        this._propagateChange(this._element.value);
    };
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    OnsSearchInput.prototype.ngOnChanges = /**
     * @param {?} changeRecord
     * @return {?}
     */
    function (changeRecord) {
        /** @type {?} */
        var value = changeRecord['_value'].currentValue;
        if (this._element.value !== value) {
            this._element.value = value;
        }
    };
    Object.defineProperty(OnsSearchInput.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsSearchInput.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OnsSearchInput.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._element.removeEventListener('input', this._boundOnChange);
        this._element = null;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    OnsSearchInput.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._element.value = obj;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsSearchInput.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsSearchInput.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateTouched = fn;
    };
    OnsSearchInput.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-search-input',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return OnsSearchInput; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    OnsSearchInput.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OnsSearchInput.propDecorators = {
        _value: [{ type: Input, args: ['value',] }],
        _valueChange: [{ type: Output, args: ['valueChange',] }],
        _onBlur: [{ type: HostListener, args: ['blur',] }]
    };
    return OnsSearchInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@element ons-checkbox
 * \@directive OnsCheckbox
 * \@selector ons-checkbox
 * \@description
 *   [en]Angular directive for `<ons-checkbox>` component. You can use `[(ngModel)]` to synchronize the value of `[(ngModel)]` with the array of the selected values.[/en]
 *   [ja]`<ons-checkbox>`要素のAngularディレクティブです。 `[(ngModel)]` を使用すると、 `[(ngModel)]` の値を選択された値の配列と同期することができます。[/ja]
 * \@example
 *   <ons-checkbox value="Item A" [(ngModel)]="selectedValues"></ons-checkbox>
 *   <ons-checkbox value="Item B" [(ngModel)]="selectedValues"></ons-checkbox>
 *   <ons-checkbox value="Item C" [(ngModel)]="selectedValues"></ons-checkbox>
 */
var OnsCheckbox = /** @class */ (function () {
    function OnsCheckbox(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = function (_) { };
        this._boundOnChange = this._onChange.bind(this);
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('change', this._boundOnChange);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    OnsCheckbox.prototype._onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _a = event.target, value = _a.value, checked = _a.checked;
        /** @type {?} */
        var newValue;
        if (this._state instanceof Array) {
            // Is Array
            /** @type {?} */
            var index = this._state.indexOf(value);
            /** @type {?} */
            var included = index >= 0;
            if (included && !checked) {
                newValue = __spread(this._state.slice(0, index), this._state.slice(index + 1, this._state.length));
            }
            if (!included && checked) {
                newValue = __spread(this._state, [value]);
            }
        }
        else {
            // Is Boolean
            newValue = checked;
        }
        // Emit if value changed
        if (newValue !== undefined) {
            this._state = newValue;
            this._propagateChange(this._state);
        }
    };
    Object.defineProperty(OnsCheckbox.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsCheckbox.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OnsCheckbox.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._element.removeEventListener('change', this._boundOnChange);
        this._element = null;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    OnsCheckbox.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._state = obj;
        if (obj instanceof Array) {
            this._element.checked = obj.indexOf(this._element.value) >= 0;
        }
        else {
            this._element.checked = obj;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsCheckbox.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateChange = fn;
    };
    /**
     * @return {?}
     */
    OnsCheckbox.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    OnsCheckbox.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-checkbox',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return OnsCheckbox; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    OnsCheckbox.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return OnsCheckbox;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@element ons-radio
 * \@directive OnsRadio
 * \@selector ons-radio
 * \@description
 *   [en]Angular directive for `<ons-radio>` component. You can use `[(ngModel)]` to synchronize the value of `[(ngModel)]` with the selected value.[/en]
 *   [ja]`<ons-radio>`要素のAngularディレクティブです。 `[(ngModel)]` を使用すると、 `[(ngModel)]` の値を選択された値と同期することができます。[/ja]
 * \@example
 *   <ons-radio value="Item A" [(ngModel)]="selectedValue"></ons-radio>
 *   <ons-radio value="Item B" [(ngModel)]="selectedValue"></ons-radio>
 *   <ons-radio value="Item C" [(ngModel)]="selectedValue"></ons-radio>
 */
var OnsRadio = /** @class */ (function () {
    function OnsRadio(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = function (_) { };
        this._boundOnChange = this._onChange.bind(this);
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('change', this._boundOnChange);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    OnsRadio.prototype._onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _a = event.target, value = _a.value, checked = _a.checked;
        checked && this._propagateChange(value);
    };
    Object.defineProperty(OnsRadio.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsRadio.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OnsRadio.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._element.removeEventListener('change', this._boundOnChange);
        this._element = null;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    OnsRadio.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._element.checked = (obj === this._element.value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsRadio.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateChange = fn;
    };
    /**
     * @return {?}
     */
    OnsRadio.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    OnsRadio.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-radio',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return OnsRadio; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    OnsRadio.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return OnsRadio;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var directives = [
    OnsNavigator,
    OnsTabbar,
    OnsTab,
    OnsSegment,
    OnsSwitch,
    OnsRange,
    OnsSelect,
    OnsInput,
    OnsSearchInput,
    OnsCheckbox,
    OnsRadio,
    OnsPullHook,
    OnsLazyRepeat,
    OnsSplitterSide,
    OnsSplitterContent
];
var OnsenModule = /** @class */ (function () {
    function OnsenModule() {
    }
    OnsenModule.decorators = [
        { type: NgModule, args: [{
                    imports: [BrowserModule, CommonModule],
                    declarations: [directives],
                    exports: [
                        directives,
                        BrowserModule
                    ],
                    providers: [
                        AlertDialogFactory,
                        PopoverFactory,
                        DialogFactory,
                        ModalFactory,
                        ComponentLoader
                    ]
                },] }
    ];
    return OnsenModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { OnsenModule, NavigatorPage, OnsNavigator, OnsTabbar, OnsTab, OnsSwitch, OnsRange, OnsSelect, OnsInput, OnsPullHook, ItemContext, OnsLazyRepeat, OnsSplitterSide, OnsSplitterContent, onsNotification, onsPlatform, AlertDialogFactory, PopoverFactory, DialogFactory, ModalFactory, Params, OnsCheckbox as ɵc, OnsRadio as ɵd, OnsSearchInput as ɵb, OnsSegment as ɵa, ComponentLoader as ɵe };

//# sourceMappingURL=ngx-onsenui.js.map