import { PageLoader, _internal, notification, platform } from 'onsenui';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, Directive, ElementRef, ComponentFactoryResolver, Input, ViewContainerRef, NgZone, Output, EventEmitter, HostListener, forwardRef, TemplateRef, Injectable, ApplicationRef, NgModule } from '@angular/core';
export { ɵangular_packages_core_core_t, ɵangular_packages_core_core_q, ɵangular_packages_core_core_r, ɵangular_packages_core_core_s, ɵangular_packages_core_core_h, ɵangular_packages_core_core_o, ɵangular_packages_core_core_p, ɵangular_packages_core_core_n, ɵangular_packages_core_core_m, ɵangular_packages_core_core_c, ɵangular_packages_core_core_d, ɵangular_packages_core_core_e, ɵangular_packages_core_core_f, ɵangular_packages_core_core_g, ɵangular_packages_core_core_l, ɵangular_packages_core_core_u, ɵangular_packages_core_core_w, ɵangular_packages_core_core_v, ɵangular_packages_core_core_z, ɵangular_packages_core_core_x, ɵangular_packages_core_core_y, ɵangular_packages_core_core_bc, ɵangular_packages_core_core_bj, ɵangular_packages_core_core_bd, ɵangular_packages_core_core_be, ɵangular_packages_core_core_bf, ɵangular_packages_core_core_bi, ɵangular_packages_core_core_bm, ɵangular_packages_core_core_i, ɵangular_packages_core_core_j, ɵangular_packages_core_core_k, ɵangular_packages_core_core_a, ɵangular_packages_core_core_b, ɵangular_packages_core_core_bk, ɵangular_packages_core_core_ba, ɵangular_packages_core_core_bb, createPlatform, assertPlatform, destroyPlatform, getPlatform, PlatformRef, ApplicationRef, createPlatformFactory, NgProbeToken, enableProdMode, isDevMode, APP_ID, PACKAGE_ROOT_URL, PLATFORM_INITIALIZER, PLATFORM_ID, APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, ApplicationInitStatus, DebugElement, DebugNode, asNativeElements, getDebugNode, Testability, TestabilityRegistry, setTestabilityGetter, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, MissingTranslationStrategy, ApplicationModule, wtfCreateScope, wtfLeave, wtfStartTimeRange, wtfEndTimeRange, Type, EventEmitter, ErrorHandler, Sanitizer, SecurityContext, ANALYZE_FOR_ENTRY_COMPONENTS, Attribute, ContentChild, ContentChildren, Query, ViewChild, ViewChildren, Component, Directive, HostBinding, HostListener, Input, Output, Pipe, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule, ViewEncapsulation, Version, VERSION, defineInjectable, defineInjector, forwardRef, resolveForwardRef, Injectable, INJECTOR, Injector, inject, InjectFlags, ReflectiveInjector, createInjector, ResolvedReflectiveFactory, ReflectiveKey, InjectionToken, Inject, Optional, Self, SkipSelf, Host, NgZone, ɵNoopNgZone, RenderComponentType, Renderer, Renderer2, RendererFactory2, RendererStyleFlags2, RootRenderer, COMPILER_OPTIONS, Compiler, CompilerFactory, ModuleWithComponentFactories, ComponentFactory, ComponentRef, ComponentFactoryResolver, ElementRef, NgModuleFactory, NgModuleRef, NgModuleFactoryLoader, getModuleFactory, QueryList, SystemJsNgModuleLoader, SystemJsNgModuleLoaderConfig, TemplateRef, ViewContainerRef, EmbeddedViewRef, ViewRef, ChangeDetectionStrategy, ChangeDetectorRef, DefaultIterableDiffer, IterableDiffers, KeyValueDiffers, SimpleChange, WrappedValue, platformCore, ɵALLOW_MULTIPLE_PLATFORMS, ɵAPP_ID_RANDOM_PROVIDER, ɵdefaultIterableDiffers, ɵdefaultKeyValueDiffers, ɵdevModeEqual, ɵisListLikeIterable, ɵChangeDetectorStatus, ɵisDefaultChangeDetectionStrategy, ɵConsole, ɵgetInjectableDef, ɵinject, ɵsetCurrentInjector, ɵAPP_ROOT, ɵivyEnabled, ɵComponentFactory, ɵCodegenComponentFactoryResolver, ɵresolveComponentResources, ɵReflectionCapabilities, ɵRenderDebugInfo, ɵ_sanitizeHtml, ɵ_sanitizeStyle, ɵ_sanitizeUrl, ɵglobal, ɵlooseIdentical, ɵstringify, ɵmakeDecorator, ɵisObservable, ɵisPromise, ɵclearOverrides, ɵinitServicesIfNeeded, ɵoverrideComponentView, ɵoverrideProvider, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, ɵdefineBase, ɵdefineComponent, ɵdefineDirective, ɵdefinePipe, ɵdefineNgModule, ɵdetectChanges, ɵrenderComponent, ɵRender3ComponentFactory, ɵRender3ComponentRef, ɵdirectiveInject, ɵinjectAttribute, ɵgetFactoryOf, ɵgetInheritedFactory, ɵtemplateRefExtractor, ɵProvidersFeature, ɵInheritDefinitionFeature, ɵNgOnChangesFeature, ɵLifecycleHooksFeature, ɵRender3NgModuleRef, ɵmarkDirty, ɵNgModuleFactory, ɵNO_CHANGE, ɵcontainer, ɵnextContext, ɵelementStart, ɵnamespaceHTML, ɵnamespaceMathML, ɵnamespaceSVG, ɵelement, ɵlistener, ɵtext, ɵembeddedViewStart, ɵquery, ɵregisterContentQuery, ɵprojection, ɵbind, ɵinterpolation1, ɵinterpolation2, ɵinterpolation3, ɵinterpolation4, ɵinterpolation5, ɵinterpolation6, ɵinterpolation7, ɵinterpolation8, ɵinterpolationV, ɵpipeBind1, ɵpipeBind2, ɵpipeBind3, ɵpipeBind4, ɵpipeBindV, ɵpureFunction0, ɵpureFunction1, ɵpureFunction2, ɵpureFunction3, ɵpureFunction4, ɵpureFunction5, ɵpureFunction6, ɵpureFunction7, ɵpureFunction8, ɵpureFunctionV, ɵgetCurrentView, ɵgetHostElement, ɵrestoreView, ɵcontainerRefreshStart, ɵcontainerRefreshEnd, ɵqueryRefresh, ɵloadQueryList, ɵelementEnd, ɵelementProperty, ɵcomponentHostSyntheticProperty, ɵprojectionDef, ɵreference, ɵenableBindings, ɵdisableBindings, ɵallocHostVars, ɵelementAttribute, ɵelementContainerStart, ɵelementContainerEnd, ɵelementStyling, ɵelementHostAttrs, ɵelementStylingMap, ɵelementStyleProp, ɵelementStylingApply, ɵelementClassProp, ɵtextBinding, ɵtemplate, ɵembeddedViewEnd, ɵstore, ɵload, ɵpipe, ɵwhenRendered, ɵi18n, ɵi18nAttributes, ɵi18nExp, ɵi18nStart, ɵi18nEnd, ɵi18nApply, ɵi18nPostprocess, ɵsetClassMetadata, ɵcompileComponent, ɵcompileDirective, ɵcompileNgModule, ɵcompileNgModuleDefs, ɵpatchComponentDefWithScope, ɵresetCompiledComponents, ɵcompilePipe, ɵsanitizeHtml, ɵsanitizeStyle, ɵdefaultStyleSanitizer, ɵsanitizeScript, ɵsanitizeUrl, ɵsanitizeResourceUrl, ɵbypassSanitizationTrustHtml, ɵbypassSanitizationTrustStyle, ɵbypassSanitizationTrustScript, ɵbypassSanitizationTrustUrl, ɵbypassSanitizationTrustResourceUrl, ɵgetLContext, ɵbindPlayerFactory, ɵaddPlayer, ɵgetPlayers, ɵcompileNgModuleFactory__POST_R3__, ɵSWITCH_COMPILE_COMPONENT__POST_R3__, ɵSWITCH_COMPILE_DIRECTIVE__POST_R3__, ɵSWITCH_COMPILE_PIPE__POST_R3__, ɵSWITCH_COMPILE_NGMODULE__POST_R3__, ɵgetDebugNode__POST_R3__, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__, ɵSWITCH_IVY_ENABLED__POST_R3__, ɵSWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__, ɵCompiler_compileModuleSync__POST_R3__, ɵCompiler_compileModuleAsync__POST_R3__, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__, ɵSWITCH_ELEMENT_REF_FACTORY__POST_R3__, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__, ɵSWITCH_RENDERER2_FACTORY__POST_R3__, ɵgetModuleFactory__POST_R3__, ɵpublishGlobalUtil, ɵpublishDefaultGlobalUtils, ɵSWITCH_INJECTOR_FACTORY__POST_R3__, ɵregisterModuleFactory, ɵEMPTY_ARRAY, ɵEMPTY_MAP, ɵand, ɵccf, ɵcmf, ɵcrt, ɵdid, ɵeld, ɵelementEventFullName, ɵgetComponentViewDefinitionFactory, ɵinlineInterpolate, ɵinterpolate, ɵmod, ɵmpd, ɵncd, ɵnov, ɵpid, ɵprd, ɵpad, ɵpod, ɵppd, ɵqud, ɵted, ɵunv, ɵvid } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Params {
    /**
     * @param {?=} _data
     */
    constructor(_data = {}) {
        this._data = _data;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    at(key) {
        return this._data[key];
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigatorPage {
    /**
     * @param {?=} elementRef
     * @param {?=} destroy
     * @param {?=} animator
     * @param {?=} params
     */
    constructor(elementRef = null, destroy = function () { }, animator = null, params = new Params()) {
        this.elementRef = elementRef;
        this.destroy = destroy;
        this.animator = animator;
        this.params = params;
    }
}
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
class OnsNavigator {
    /**
     * @param {?} _elementRef
     * @param {?} _resolver
     * @param {?} _viewContainer
     * @param {?} _injector
     * @param {?} _zone
     */
    constructor(_elementRef, _resolver, _viewContainer, _injector, _zone) {
        this._elementRef = _elementRef;
        this._resolver = _resolver;
        this._viewContainer = _viewContainer;
        this._injector = _injector;
        this._zone = _zone;
        this._lastPageLoader = this.element.pageLoader;
        this.element.pageLoader = this._createPageLoader();
    }
    /**
     * \@input page
     * @desc
     *   [en]Type of the page component.[/en]
     *   [ja]ページコンポーネントのクラスを指定します。[/ja]
     * @param {?} page
     * @return {?}
     */
    set pageComponentType(page) {
        this.element.page = page;
    }
    /**
     * @return {?}
     */
    get element() {
        return this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    _createPageLoader() {
        /** @type {?} */
        const componentRefMap = new WeakMap();
        return new PageLoader(({ page, parent, params }, done) => {
            this._zone.run(() => {
                /** @type {?} */
                const pageParams = new Params(params || {});
                /** @type {?} */
                const injector = Injector.create({
                    providers: [
                        { provide: Params, useValue: pageParams },
                        { provide: OnsNavigator, useValue: this }
                    ],
                    parent: this._injector
                });
                /** @type {?} */
                const factory = this._resolver.resolveComponentFactory(page);
                /** @type {?} */
                const pageComponentRef = factory.create(injector, undefined);
                this._viewContainer.insert(pageComponentRef.hostView);
                /** @type {?} */
                const pageElement = pageComponentRef.location.nativeElement;
                componentRefMap.set(pageElement, pageComponentRef);
                this.element.appendChild(pageElement); // dirty fix to insert in correct position
                done(pageElement);
            });
        }, (element) => {
            /** @type {?} */
            const componentRef = componentRefMap.get(element);
            if (componentRef) {
                componentRef.destroy();
                componentRefMap.delete(element);
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.element.pageLoader = this._lastPageLoader;
    }
}
OnsNavigator.decorators = [
    { type: Directive, args: [{
                selector: 'ons-navigator'
            },] }
];
/** @nocollapse */
OnsNavigator.ctorParameters = () => [
    { type: ElementRef },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: Injector },
    { type: NgZone }
];
OnsNavigator.propDecorators = {
    pageComponentType: [{ type: Input, args: ['page',] }]
};

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
class OnsTabbar {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
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
        this._element.onSwipe = (index, options) => this._swipe.emit({ index, options });
    }
}
OnsTabbar.decorators = [
    { type: Directive, args: [{
                selector: 'ons-tabbar'
            },] }
];
/** @nocollapse */
OnsTabbar.ctorParameters = () => [
    { type: ElementRef }
];
OnsTabbar.propDecorators = {
    _swipe: [{ type: Output, args: ['swipe',] }]
};
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
class OnsTab {
    /**
     * @param {?} _elementRef
     * @param {?} _viewContainer
     * @param {?} _resolver
     * @param {?} _zone
     */
    constructor(_elementRef, _viewContainer, _resolver, _zone) {
        this._elementRef = _elementRef;
        this._viewContainer = _viewContainer;
        this._resolver = _resolver;
        this._zone = _zone;
        this._pageComponent = null;
        // set up ons-tab's page loader
        this._elementRef.nativeElement.pageLoader = this._createPageLoader();
    }
    /**
     * \@input page
     * @desc
     *   [en]Specify the page component that is displayed when the tab is active.[/en]
     *   [ja]読み込むページコンポーネントを指定します。[/ja]
     * @param {?} pageComponentType
     * @return {?}
     */
    set page(pageComponentType) {
        this._elementRef.nativeElement.page = pageComponentType;
    }
    /**
     * @return {?}
     */
    _createPageLoader() {
        /** @type {?} */
        const PageLoader$$1 = (/** @type {?} */ (PageLoader));
        return new PageLoader$$1(({ page, parent }, done) => {
            this._zone.run(() => {
                /** @type {?} */
                const factory = this._resolver.resolveComponentFactory(page);
                /** @type {?} */
                const pageComponentRef = this._viewContainer.createComponent(factory, 0);
                if (this._pageComponent) {
                    this._pageComponent.destroy();
                }
                this._pageComponent = pageComponentRef;
                /** @type {?} */
                const pageElement = pageComponentRef.location.nativeElement;
                parent.appendChild(pageElement); // dirty fix to insert in correct position
                done(pageElement);
            });
        }, () => {
            if (this.hasOwnProperty('_pageComponent')) {
                if (this._pageComponent) {
                    this._pageComponent.destroy();
                    this._pageComponent = null;
                }
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._pageComponent) {
            this._pageComponent.destroy();
            this._pageComponent = null;
        }
    }
}
OnsTab.decorators = [
    { type: Directive, args: [{
                selector: 'ons-tab'
            },] }
];
/** @nocollapse */
OnsTab.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: NgZone }
];
OnsTab.propDecorators = {
    page: [{ type: Input, args: ['page',] }]
};

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
class OnsSwitch {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = (_) => { };
        this._propagateTouched = () => { };
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
    /**
     * \@input value
     * @desc
     *   [en]Specify the value of the `<ons-switch>` component.[/en]
     *   [ja]`ons-switch`コンポーネントに設定する値を指定します。[/ja]
     * @param {?} target
     * @return {?}
     */
    set value(target) {
        this._element.checked = !!target;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onChange(event) {
        this._valueChange.emit(this._element.checked);
        this._propagateChange(this._element.checked);
    }
    /**
     * @return {?}
     */
    _onBlur() {
        this._propagateTouched();
    }
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    ngOnChanges(changeRecord) {
        /** @type {?} */
        const value = !!((/** @type {?} */ (changeRecord))).value.currentValue;
        this._element.checked = value;
    }
    /**
     * @return {?}
     */
    get element() {
        return this._element;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this._element;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._element.removeEventListener('change', this._boundOnChange);
        this._element = null;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this._element.checked = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._propagateTouched = fn;
    }
}
OnsSwitch.decorators = [
    { type: Directive, args: [{
                selector: 'ons-switch',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => OnsSwitch),
                        multi: true,
                    }
                ]
            },] }
];
/** @nocollapse */
OnsSwitch.ctorParameters = () => [
    { type: ElementRef }
];
OnsSwitch.propDecorators = {
    value: [{ type: Input, args: ['value',] }],
    _valueChange: [{ type: Output, args: ['valueChange',] }],
    _onBlur: [{ type: HostListener, args: ['blur',] }]
};

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
class OnsRange {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = (_) => { };
        this._propagateTouched = () => { };
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
    _onChange(event) {
        this._valueChange.emit(this._element.value);
        this._propagateChange(this._element.value);
    }
    /**
     * @return {?}
     */
    _onBlur() {
        this._propagateTouched();
    }
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    ngOnChanges(changeRecord) {
        /** @type {?} */
        const value = changeRecord['_value'].currentValue;
        this._element.value = value;
    }
    /**
     * @return {?}
     */
    get element() {
        return this._element;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this._element;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._element.removeEventListener('input', this._boundOnChange);
        this._element = null;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this._element.value = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._propagateTouched = fn;
    }
}
OnsRange.decorators = [
    { type: Directive, args: [{
                selector: 'ons-range',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => OnsRange),
                        multi: true,
                    }
                ]
            },] }
];
/** @nocollapse */
OnsRange.ctorParameters = () => [
    { type: ElementRef }
];
OnsRange.propDecorators = {
    _value: [{ type: Input, args: ['value',] }],
    _valueChange: [{ type: Output, args: ['valueChange',] }],
    _onBlur: [{ type: HostListener, args: ['blur',] }]
};

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
class OnsSelect {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = (_) => { };
        this._boundOnChange = this._onChange.bind(this);
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('change', this._boundOnChange);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onChange(event) {
        this._propagateChange(event.target.value);
    }
    /**
     * @return {?}
     */
    get element() {
        return this._element;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this._element;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._element.removeEventListener('change', this._boundOnChange);
        this._element = null;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this._element.value = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._propagateChange = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
}
OnsSelect.decorators = [
    { type: Directive, args: [{
                selector: 'ons-select',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => OnsSelect),
                        multi: true,
                    }
                ]
            },] }
];
/** @nocollapse */
OnsSelect.ctorParameters = () => [
    { type: ElementRef }
];

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
class OnsInput {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = (_) => { };
        this._propagateTouched = () => { };
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
    _onChange(event) {
        this._valueChange.emit(this._element.value);
        this._propagateChange(this._element.value);
    }
    /**
     * @return {?}
     */
    _onBlur() {
        this._propagateTouched();
    }
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    ngOnChanges(changeRecord) {
        /** @type {?} */
        const value = changeRecord['_value'].currentValue;
        if (this._element.value !== value) {
            this._element.value = value;
        }
    }
    /**
     * @return {?}
     */
    get element() {
        return this._element;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this._element;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._element.removeEventListener('input', this._boundOnChange);
        this._element = null;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this._element.value = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._propagateTouched = fn;
    }
}
OnsInput.decorators = [
    { type: Directive, args: [{
                selector: 'ons-input',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => OnsInput),
                        multi: true,
                    }
                ]
            },] }
];
/** @nocollapse */
OnsInput.ctorParameters = () => [
    { type: ElementRef }
];
OnsInput.propDecorators = {
    _value: [{ type: Input, args: ['value',] }],
    _valueChange: [{ type: Output, args: ['valueChange',] }],
    _onBlur: [{ type: HostListener, args: ['blur',] }]
};

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
class OnsPullHook {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
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
        this._element.onAction = (done) => this.action.emit({ done });
        this._element.onPull = (ratio, options) => this.pull.emit({ ratio, options });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._element.onAction = null;
        this._element = null;
    }
}
OnsPullHook.decorators = [
    { type: Directive, args: [{
                selector: 'ons-pull-hook'
            },] }
];
/** @nocollapse */
OnsPullHook.ctorParameters = () => [
    { type: ElementRef }
];
OnsPullHook.propDecorators = {
    action: [{ type: Output }],
    pull: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ItemContext {
    /**
     * @param {?} $implicit
     * @param {?} index
     * @param {?} count
     */
    constructor($implicit, index, count) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
    }
}
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
class OnsLazyRepeat {
    /**
     * @param {?} _elementRef
     * @param {?} _templateRef
     * @param {?} _viewContainer
     */
    constructor(_elementRef, _templateRef, _viewContainer) {
        this._elementRef = _elementRef;
        this._templateRef = _templateRef;
        this._viewContainer = _viewContainer;
    }
    /**
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
    set onsLazyRepeatOf(value) {
        this._onsLazyRepeatOf = value;
        this._provider = new _internal.LazyRepeatProvider(this._elementRef.nativeElement.parentElement, new _internal.LazyRepeatDelegate({
            loadItemElement: (index, done) => {
                this._loadItemTemplate(index, done);
            },
            countItems: () => {
                return this._onsLazyRepeatOf.length;
            }
        }));
    }
    /**
     * @param {?} index
     * @param {?} done
     * @return {?}
     */
    _loadItemTemplate(index, done) {
        /** @type {?} */
        const context = new ItemContext(this._onsLazyRepeatOf[index], index, this._onsLazyRepeatOf.length);
        /** @type {?} */
        const view = this._viewContainer.createEmbeddedView(this._templateRef, context);
        // dirty fix on createEmbeddedView() does not insert DOM element randomly.
        done({ element: view.rootNodes[0] });
    }
    /**
     * @return {?}
     */
    refresh() {
        if (this._provider) {
            this._viewContainer.clear();
            this._provider.refresh();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._provider) {
            this._provider.destroy();
        }
        this._viewContainer.clear();
        this._provider = null;
    }
}
OnsLazyRepeat.decorators = [
    { type: Directive, args: [{
                selector: '[onsLazyRepeat]'
            },] }
];
/** @nocollapse */
OnsLazyRepeat.ctorParameters = () => [
    { type: ElementRef },
    { type: TemplateRef },
    { type: ViewContainerRef }
];
OnsLazyRepeat.propDecorators = {
    onsLazyRepeatOf: [{ type: Input }]
};

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
class OnsSplitterSide {
    /**
     * @param {?} _elementRef
     * @param {?} _viewContainer
     * @param {?} _resolver
     * @param {?} _injector
     * @param {?} _zone
     */
    constructor(_elementRef, _viewContainer, _resolver, _injector, _zone) {
        this._elementRef = _elementRef;
        this._viewContainer = _viewContainer;
        this._resolver = _resolver;
        this._injector = _injector;
        this._zone = _zone;
        this.element.pageLoader = this._createPageLoader();
    }
    /**
     * \@input page
     * @desc
     *   [en]Page content.[/en]
     *   [ja]表示するページコンポーネントのクラスを指定します。[/ja]
     * @param {?} page
     * @return {?}
     */
    set page(page) {
        this.element.page = page;
    }
    /**
     * @return {?}
     */
    get element() {
        return this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    _createPageLoader() {
        /** @type {?} */
        const componentRefMap = new WeakMap();
        return new PageLoader(({ page, parent, params }, done) => {
            this._zone.run(() => {
                /** @type {?} */
                const injector = Injector.create({
                    providers: [
                        { provide: Params, useValue: new Params(params || {}) },
                        { provide: OnsSplitterSide, useValue: this }
                    ],
                    parent: this._injector
                });
                /** @type {?} */
                const factory = this._resolver.resolveComponentFactory(page);
                /** @type {?} */
                const pageComponentRef = this._viewContainer.createComponent(factory, 0, injector);
                /** @type {?} */
                const pageElement = pageComponentRef.location.nativeElement;
                componentRefMap.set(pageElement, pageComponentRef);
                this.element.appendChild(pageElement); // dirty fix to insert in correct position
                done(pageElement);
            });
        }, (element) => {
            /** @type {?} */
            const componentRef = componentRefMap.get(element);
            if (componentRef) {
                componentRef.destroy();
                componentRefMap.delete(element);
            }
        });
    }
}
OnsSplitterSide.decorators = [
    { type: Directive, args: [{
                selector: 'ons-splitter-side'
            },] }
];
/** @nocollapse */
OnsSplitterSide.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: NgZone }
];
OnsSplitterSide.propDecorators = {
    page: [{ type: Input, args: ['page',] }]
};
/**
 * \@element ons-splitter-content
 * \@directive OnsSplitterContent
 * \@selector ons-splitter-content
 * \@description
 *    [ja]`<ons-splitter-content>`要素のためのAngular2 ディレクティブです。[/ja]
 *    [en]Angular directive for `<ons-splitter-content>` component.[/en]
 */
class OnsSplitterContent {
    /**
     * @param {?} _elementRef
     * @param {?} _viewContainer
     * @param {?} _resolver
     * @param {?} _injector
     */
    constructor(_elementRef, _viewContainer, _resolver, _injector) {
        this._elementRef = _elementRef;
        this._viewContainer = _viewContainer;
        this._resolver = _resolver;
        this._injector = _injector;
        this.element.pageLoader = this._createPageLoader();
    }
    /**
     * \@input page
     * @desc
     *   [en]Specify the page component.[/en]
     *   [ja]表示するページコンポーネントのクラスを指定します。[/ja]
     * @param {?} page
     * @return {?}
     */
    set page(page) {
        this.element.page = page;
    }
    /**
     * @return {?}
     */
    get element() {
        return this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    _createPageLoader() {
        /** @type {?} */
        const componentRefMap = new WeakMap();
        return new PageLoader(({ page, parent, params }, done) => {
            /** @type {?} */
            const injector = Injector.create({
                providers: [
                    { provide: Params, useValue: new Params(params || {}) },
                    { provide: OnsSplitterContent, useValue: this }
                ],
                parent: this._injector
            });
            /** @type {?} */
            const factory = this._resolver.resolveComponentFactory(page);
            /** @type {?} */
            const pageComponentRef = this._viewContainer.createComponent(factory, 0, injector);
            /** @type {?} */
            const pageElement = pageComponentRef.location.nativeElement;
            componentRefMap.set(pageElement, pageComponentRef);
            this.element.appendChild(pageElement); // dirty fix to insert in correct position
            done(pageElement);
        }, (element) => {
            /** @type {?} */
            const componentRef = componentRefMap.get(element);
            if (componentRef) {
                componentRef.destroy();
                componentRefMap.delete(element);
            }
        });
    }
}
OnsSplitterContent.decorators = [
    { type: Directive, args: [{
                selector: 'ons-splitter-content'
            },] }
];
/** @nocollapse */
OnsSplitterContent.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Injector }
];
OnsSplitterContent.propDecorators = {
    page: [{ type: Input, args: ['page',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@object onsNotification
 * @type {?}
 */
const onsNotification = notification;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const onsPlatform = platform;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentLoader {
    /**
     * @param {?} appRef
     */
    constructor(appRef) {
        this.appRef = appRef;
    }
    // Load an instance of ComponentRef in app view.
    /**
     * @param {?} componentRef
     * @return {?}
     */
    load(componentRef) {
        /** @type {?} */
        const rootElement = componentRef.location.nativeElement;
        if (this.appRef.attachView) {
            this.appRef.attachView(componentRef.hostView);
            componentRef.onDestroy(() => {
                this.appRef.detachView(componentRef.hostView);
                if (rootElement.parentNode) {
                    rootElement.parentNode.removeChild(rootElement);
                }
            });
        }
        else {
            if (((/** @type {?} */ (this.appRef))).registerChangeDetector) {
                ((/** @type {?} */ (this.appRef))).registerChangeDetector(componentRef.changeDetectorRef);
            }
            componentRef.onDestroy(() => {
                if (((/** @type {?} */ (this.appRef))).unregisterChangeDetector) {
                    ((/** @type {?} */ (this.appRef))).unregisterChangeDetector(componentRef.changeDetectorRef);
                }
                if (rootElement.parentNode) {
                    rootElement.parentNode.removeChild(rootElement);
                }
            });
        }
        /** @type {?} */
        const rootContainer = ((/** @type {?} */ (this.appRef))).components[0].location.nativeElement;
        rootContainer.appendChild(rootElement);
    }
}
ComponentLoader.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentLoader.ctorParameters = () => [
    { type: ApplicationRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@object AlertDialogFactory
 */
class AlertDialogFactory {
    /**
     * @param {?} _injector
     * @param {?} _resolver
     * @param {?} _appRef
     * @param {?} _componentLoader
     * @param {?} _zone
     */
    constructor(_injector, _resolver, _appRef, _componentLoader, _zone) {
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
    createAlertDialog(componentType, params = {}) {
        console.warn('[ngx-onsenui] AlertDialogFactory is deprecated since 4.0.0-rc.0. Place <ons-alert-dialog> into your component instead.');
        return new Promise(resolve => {
            setImmediate(() => {
                this._zone.run(() => {
                    /** @type {?} */
                    const factory = this._resolver.resolveComponentFactory(componentType);
                    /** @type {?} */
                    const injector = Injector.create({
                        providers: [
                            { provide: Params, useValue: new Params(params) }
                        ],
                        parent: this._injector
                    });
                    /** @type {?} */
                    const componentRef = factory.create(injector);
                    /** @type {?} */
                    const rootElement = componentRef.location.nativeElement;
                    this._componentLoader.load(componentRef);
                    /** @type {?} */
                    const element = rootElement.children[0];
                    /** @type {?} */
                    const alertDialogElement = element.tagName === 'ONS-ALERT-DIALOG' ? element : element.querySelector('ons-alert-dialog');
                    if (!alertDialogElement) {
                        throw Error('<ons-alert-dialog> element is not found in component\'s template.');
                    }
                    resolve({ alertDialog: alertDialogElement, destroy: () => componentRef.destroy() });
                });
            });
        });
    }
}
AlertDialogFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AlertDialogFactory.ctorParameters = () => [
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: ComponentLoader },
    { type: NgZone }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@object PopoverFactory
 */
class PopoverFactory {
    /**
     * @param {?} _injector
     * @param {?} _resolver
     * @param {?} _appRef
     * @param {?} _componentLoader
     * @param {?} _zone
     */
    constructor(_injector, _resolver, _appRef, _componentLoader, _zone) {
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
    createPopover(componentType, params = {}) {
        console.warn('[ngx-onsenui] PopoverFactory is deprecated since 4.0.0-rc.0. Place <ons-popover> into your component instead.');
        return new Promise(resolve => {
            setImmediate(() => {
                this._zone.run(() => {
                    /** @type {?} */
                    const factory = this._resolver.resolveComponentFactory(componentType);
                    /** @type {?} */
                    const injector = Injector.create({
                        providers: [
                            { provide: Params, useValue: new Params(params) }
                        ],
                        parent: this._injector
                    });
                    /** @type {?} */
                    const componentRef = factory.create(injector);
                    /** @type {?} */
                    const rootElement = componentRef.location.nativeElement;
                    this._componentLoader.load(componentRef);
                    /** @type {?} */
                    const element = rootElement.children[0];
                    /** @type {?} */
                    const popoverElement = element.tagName === 'ONS-POPOVER' ? element : element.querySelector('ons-popover');
                    if (!popoverElement) {
                        throw Error('<ons-popover> element is not found in component\'s template.');
                    }
                    resolve({ popover: popoverElement, destroy: () => componentRef.destroy() });
                });
            });
        });
    }
}
PopoverFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PopoverFactory.ctorParameters = () => [
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: ComponentLoader },
    { type: NgZone }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@object DialogFactory
 */
class DialogFactory {
    /**
     * @param {?} _injector
     * @param {?} _resolver
     * @param {?} _appRef
     * @param {?} _componentLoader
     * @param {?} _zone
     */
    constructor(_injector, _resolver, _appRef, _componentLoader, _zone) {
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
    createDialog(componentType, params = {}) {
        console.warn('[ngx-onsenui] DialogFactory is deprecated since 4.0.0-rc.0. Place <ons-dialog> into your component instead.');
        return new Promise(resolve => {
            setImmediate(() => {
                this._zone.run(() => {
                    /** @type {?} */
                    const factory = this._resolver.resolveComponentFactory(componentType);
                    /** @type {?} */
                    const injector = Injector.create({
                        providers: [
                            { provide: Params, useValue: new Params(params) }
                        ],
                        parent: this._injector
                    });
                    /** @type {?} */
                    const componentRef = factory.create(injector);
                    /** @type {?} */
                    const rootElement = componentRef.location.nativeElement;
                    this._componentLoader.load(componentRef);
                    /** @type {?} */
                    const element = rootElement.children[0];
                    /** @type {?} */
                    const dialogElement = element.tagName === 'ONS-DIALOG' ? element : element.querySelector('ons-dialog');
                    if (!dialogElement) {
                        throw Error('<ons-dialog> element is not found in component\'s template.');
                    }
                    resolve({ dialog: dialogElement, destroy: () => componentRef.destroy() });
                });
            });
        });
    }
}
DialogFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DialogFactory.ctorParameters = () => [
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: ComponentLoader },
    { type: NgZone }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@object ModalFactory
 */
class ModalFactory {
    /**
     * @param {?} _injector
     * @param {?} _resolver
     * @param {?} _appRef
     * @param {?} _componentLoader
     * @param {?} _zone
     */
    constructor(_injector, _resolver, _appRef, _componentLoader, _zone) {
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
    createModal(componentType, params = {}) {
        console.warn('[ngx-onsenui] ModalFactory is deprecated since 4.0.0-rc.0. Place <ons-modal> into your component instead.');
        return new Promise(resolve => {
            setImmediate(() => {
                this._zone.run(() => {
                    /** @type {?} */
                    const factory = this._resolver.resolveComponentFactory(componentType);
                    /** @type {?} */
                    const injector = Injector.create({
                        providers: [
                            { provide: Params, useValue: new Params(params) }
                        ],
                        parent: this._injector
                    });
                    /** @type {?} */
                    const componentRef = factory.create(injector);
                    /** @type {?} */
                    const rootElement = componentRef.location.nativeElement;
                    this._componentLoader.load(componentRef);
                    /** @type {?} */
                    const element = rootElement.children[0];
                    /** @type {?} */
                    const modalElement = element.tagName === 'ONS-MODAL' ? element : element.querySelector('ons-modal');
                    if (!modalElement) {
                        throw Error('<ons-modal> element is not found in component\'s template.');
                    }
                    resolve({ modal: modalElement, destroy: () => componentRef.destroy() });
                });
            });
        });
    }
}
ModalFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ModalFactory.ctorParameters = () => [
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: ComponentLoader },
    { type: NgZone }
];

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
class OnsSegment {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        /**
         * \@output activeIndexChange
         * @desc
         *   [en]Triggers when the index of the active button is changed.[/en]
         *   [ja]アクティブなボタンのインデックスが変化した時に発火します。[/ja]
         */
        this.activeIndexChange = new EventEmitter();
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('postchange', (event) => {
            this.activeIndexChange.emit(event.index);
        });
    }
    /**
     * \@input tabbar
     * @desc
     *   [en]The tabbar component to "connect" to the segment. Must be inside the same page. Works only during initialization.[/en]
     *   [ja]このセグメントに紐づけるタブバーを指定します。タブバーはセグメントと同一ページ内に存在する必要があります。初期化時にのみ動作します。[/ja]
     * @param {?} _tabbar
     * @return {?}
     */
    set tabbar(_tabbar) {
        this._element._tabbar = _tabbar;
        this._element._tabbar.setAttribute('hide-tabs', '');
        setImmediate(() => this._element._setChecked(this._element._tabbar.getActiveTabIndex()));
        this._element._tabbar.addEventListener('prechange', this._element._onTabbarPreChange);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.activeIndex) {
            this._element.setActiveButton(this.activeIndex);
        }
    }
}
OnsSegment.decorators = [
    { type: Directive, args: [{
                selector: 'ons-segment'
            },] }
];
/** @nocollapse */
OnsSegment.ctorParameters = () => [
    { type: ElementRef }
];
OnsSegment.propDecorators = {
    activeIndex: [{ type: Input }],
    activeIndexChange: [{ type: Output }],
    tabbar: [{ type: Input }]
};

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
class OnsSearchInput {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = (_) => { };
        this._propagateTouched = () => { };
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
    _onBlur() {
        this._propagateTouched();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onChange(event) {
        this._valueChange.emit(this._element.value);
        this._propagateChange(this._element.value);
    }
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    ngOnChanges(changeRecord) {
        /** @type {?} */
        const value = changeRecord['_value'].currentValue;
        if (this._element.value !== value) {
            this._element.value = value;
        }
    }
    /**
     * @return {?}
     */
    get element() {
        return this._element;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this._element;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._element.removeEventListener('input', this._boundOnChange);
        this._element = null;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this._element.value = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._propagateTouched = fn;
    }
}
OnsSearchInput.decorators = [
    { type: Directive, args: [{
                selector: 'ons-search-input',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => OnsSearchInput),
                        multi: true,
                    }
                ]
            },] }
];
/** @nocollapse */
OnsSearchInput.ctorParameters = () => [
    { type: ElementRef }
];
OnsSearchInput.propDecorators = {
    _value: [{ type: Input, args: ['value',] }],
    _valueChange: [{ type: Output, args: ['valueChange',] }],
    _onBlur: [{ type: HostListener, args: ['blur',] }]
};

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
class OnsCheckbox {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = (_) => { };
        this._boundOnChange = this._onChange.bind(this);
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('change', this._boundOnChange);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onChange(event) {
        const { value, checked } = event.target;
        /** @type {?} */
        let newValue;
        if (this._state instanceof Array) {
            // Is Array
            /** @type {?} */
            const index = this._state.indexOf(value);
            /** @type {?} */
            const included = index >= 0;
            if (included && !checked) {
                newValue = [
                    ...this._state.slice(0, index),
                    ...this._state.slice(index + 1, this._state.length)
                ];
            }
            if (!included && checked) {
                newValue = [...this._state, value];
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
    }
    /**
     * @return {?}
     */
    get element() {
        return this._element;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this._element;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._element.removeEventListener('change', this._boundOnChange);
        this._element = null;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this._state = obj;
        if (obj instanceof Array) {
            this._element.checked = obj.indexOf(this._element.value) >= 0;
        }
        else {
            this._element.checked = obj;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._propagateChange = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
}
OnsCheckbox.decorators = [
    { type: Directive, args: [{
                selector: 'ons-checkbox',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => OnsCheckbox),
                        multi: true,
                    }
                ]
            },] }
];
/** @nocollapse */
OnsCheckbox.ctorParameters = () => [
    { type: ElementRef }
];

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
class OnsRadio {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = (_) => { };
        this._boundOnChange = this._onChange.bind(this);
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('change', this._boundOnChange);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onChange(event) {
        const { value, checked } = event.target;
        checked && this._propagateChange(value);
    }
    /**
     * @return {?}
     */
    get element() {
        return this._element;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this._element;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._element.removeEventListener('change', this._boundOnChange);
        this._element = null;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this._element.checked = (obj === this._element.value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._propagateChange = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
}
OnsRadio.decorators = [
    { type: Directive, args: [{
                selector: 'ons-radio',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => OnsRadio),
                        multi: true,
                    }
                ]
            },] }
];
/** @nocollapse */
OnsRadio.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const directives = [
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
class OnsenModule {
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