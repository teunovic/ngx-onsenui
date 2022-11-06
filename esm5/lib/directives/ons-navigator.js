/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injector, Directive, ElementRef, Type, ComponentFactoryResolver, Input, ViewContainerRef, NgZone } from '@angular/core';
import * as ons from 'onsenui';
import { Params } from '../ons/params';
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
export { NavigatorPage };
if (false) {
    /** @type {?} */
    NavigatorPage.prototype.elementRef;
    /** @type {?} */
    NavigatorPage.prototype.destroy;
    /** @type {?} */
    NavigatorPage.prototype.animator;
    /** @type {?} */
    NavigatorPage.prototype.params;
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
        return new ons.PageLoader(function (_a, done) {
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
                var selector = 'ons-navigator';
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
export { OnsNavigator };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsNavigator.prototype._lastPageLoader;
    /**
     * @type {?}
     * @private
     */
    OnsNavigator.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    OnsNavigator.prototype._resolver;
    /**
     * @type {?}
     * @private
     */
    OnsNavigator.prototype._viewContainer;
    /**
     * @type {?}
     * @private
     */
    OnsNavigator.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    OnsNavigator.prototype._zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLW5hdmlnYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbnNlbnVpLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb25zLW5hdmlnYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUVWLElBQUksRUFDSix3QkFBd0IsRUFDeEIsS0FBSyxFQUNMLGdCQUFnQixFQUVoQixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLEdBQUcsTUFBTSxTQUFTLENBQUM7QUFFL0IsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVyQztJQUNFLHVCQUNTLFVBQW9DLEVBQ3BDLE9BQWlDLEVBQ2pDLFFBQW9CLEVBQ3BCLE1BQTZCO1FBSDdCLDJCQUFBLEVBQUEsaUJBQW9DO1FBQ3BDLHdCQUFBLEVBQUEsd0JBQWdDLENBQUM7UUFDakMseUJBQUEsRUFBQSxlQUFvQjtRQUNwQix1QkFBQSxFQUFBLGFBQXFCLE1BQU0sRUFBRTtRQUg3QixlQUFVLEdBQVYsVUFBVSxDQUEwQjtRQUNwQyxZQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUNqQyxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQXVCO0lBQ3RDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFQRCxJQU9DOzs7O0lBTEcsbUNBQTJDOztJQUMzQyxnQ0FBd0M7O0lBQ3hDLGlDQUEyQjs7SUFDM0IsK0JBQW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDeEM7SUF3QkUsc0JBQ1UsV0FBdUIsRUFDdkIsU0FBbUMsRUFDbkMsY0FBZ0MsRUFDaEMsU0FBbUIsRUFDbkIsS0FBYTtRQUpiLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQTBCO1FBQ25DLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNo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QztTQXhFWSxZQUFZOzs7Ozs7SUFDdkIsdUNBQWtDOzs7OztJQXFCaEMsbUNBQStCOzs7OztJQUMvQixpQ0FBMkM7Ozs7O0lBQzNDLHNDQUF3Qzs7Ozs7SUFDeEMsaUNBQTJCOzs7OztJQUMzQiw2QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEluamVjdG9yLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgVHlwZSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbnB1dCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT25EZXN0cm95LFxuICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBvbnMgZnJvbSAnb25zZW51aSc7XG5cbmltcG9ydCB7UGFyYW1zfSBmcm9tICcuLi9vbnMvcGFyYW1zJztcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvclBhZ2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiB8IG51bGwgPSBudWxsLFxuICAgIHB1YmxpYyBkZXN0cm95OiBGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge30sXG4gICAgcHVibGljIGFuaW1hdG9yOiBhbnkgPSBudWxsLFxuICAgIHB1YmxpYyBwYXJhbXM6IFBhcmFtcyA9IG5ldyBQYXJhbXMoKSkge1xuICB9XG59XG5cbi8qKlxuICogQGVsZW1lbnQgb25zLW5hdmlnYXRvclxuICogQGRpcmVjdGl2ZSBPbnNOYXZpZ2F0b3JcbiAqIEBzZWxlY3RvciBvbnMtbmF2aWdhdG9yXG4gKiBAY29kcGVuIEtndkF2eFxuICogQGRlc2NyaXB0aW9uXG4gKiAgIFtlbl1Bbmd1bGFyIGRpcmVjdGl2ZSBmb3IgYDxvbnMtbmF2aWdhdG9yPmAgY29tcG9uZW50LlsvZW5dXG4gKiAgIFtqYV1gPG9ucy1uYXZpZ2F0b3I+YOimgee0oOOBrkFuZ3VsYXLjg4fjgqPjg6zjgq/jg4bjgqPjg5bjgafjgZnjgIJbL2phXVxuICogQGV4YW1wbGVcbiAqICAgQENvbXBvbmVudCh7XG4gKiAgICAgc2VsZWN0b3I6ICdvbnMtcGFnZScsXG4gKiAgICAgdGVtcGxhdGU6IGBcbiAqICAgICAgIDxvbnMtdG9vbGJhcj5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlclwiPlBhZ2U8L2Rpdj5cbiAqICAgICAgIDwvb25zLXRvb2xiYXI+XG4gKiAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPi4uLjwvZGl2PlxuICogICAgIGBcbiAqICAgfSlcbiAqICAgY2xhc3MgRGVmYXVsdFBhZ2VDb21wb25lbnQgeyB9XG4gKlxuICogICBAQ29tcG9uZW50KHtcbiAqICAgICBzZWxlY3RvcjogJ25hdmlnYXRvci1hcHAnLFxuICogICAgIHRlbXBsYXRlOiBgXG4gKiAgICAgPG9ucy1uYXZpZ2F0b3IgW3BhZ2VdPVwicGFnZVwiPjwvb25zLW5hdmlnYXRvcj5cbiAqICAgICBgXG4gKiAgIH0pXG4gKiAgIGV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICogICAgIHBhZ2UgPSBEZWZhdWx0UGFnZUNvbXBvbmVudFxuICogICB9XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ29ucy1uYXZpZ2F0b3InXG59KVxuZXhwb3J0IGNsYXNzIE9uc05hdmlnYXRvciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2xhc3RQYWdlTG9hZGVyOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQGlucHV0IHBhZ2VcbiAgICogQGRlc2NcbiAgICogICBbZW5dVHlwZSBvZiB0aGUgcGFnZSBjb21wb25lbnQuWy9lbl1cbiAgICogICBbamFd44Oa44O844K444Kz44Oz44Od44O844ON44Oz44OI44Gu44Kv44Op44K544KS5oyH5a6a44GX44G+44GZ44CCWy9qYV1cbiAgICovXG4gIEBJbnB1dCgncGFnZScpIHNldCBwYWdlQ29tcG9uZW50VHlwZShwYWdlOiBUeXBlPGFueT4pIHtcbiAgICB0aGlzLmVsZW1lbnQucGFnZSA9IHBhZ2U7XG4gIH1cblxuICBnZXQgZWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBnZXQgbmF0aXZlRWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3Jlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7XG4gICAgdGhpcy5fbGFzdFBhZ2VMb2FkZXIgPSB0aGlzLmVsZW1lbnQucGFnZUxvYWRlcjtcbiAgICB0aGlzLmVsZW1lbnQucGFnZUxvYWRlciA9IHRoaXMuX2NyZWF0ZVBhZ2VMb2FkZXIoKTtcbiAgfVxuXG4gIF9jcmVhdGVQYWdlTG9hZGVyKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZk1hcDogV2Vha01hcDxIVE1MRWxlbWVudCwgQ29tcG9uZW50UmVmPGFueT4+ID0gbmV3IFdlYWtNYXA8SFRNTEVsZW1lbnQsIENvbXBvbmVudFJlZjxhbnk+PigpO1xuXG4gICAgcmV0dXJuIG5ldyBvbnMuUGFnZUxvYWRlcihcbiAgICAgICh7cGFnZSwgcGFyZW50LCBwYXJhbXN9OiBhbnksIGRvbmU6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBwYWdlUGFyYW1zID0gbmV3IFBhcmFtcyhwYXJhbXMgfHwge30pO1xuICAgICAgICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICB7cHJvdmlkZTogUGFyYW1zLCB1c2VWYWx1ZTogcGFnZVBhcmFtc30sXG4gICAgICAgICAgICAgIHtwcm92aWRlOiBPbnNOYXZpZ2F0b3IsIHVzZVZhbHVlOiB0aGlzfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3JcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShwYWdlKTtcbiAgICAgICAgICBjb25zdCBzZWxlY3RvciA9ICdvbnMtbmF2aWdhdG9yJztcbiAgICAgICAgICBjb25zdCBwYWdlQ29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5pbnNlcnQocGFnZUNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICAgICAgY29uc3QgcGFnZUVsZW1lbnQgPSBwYWdlQ29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgY29tcG9uZW50UmVmTWFwLnNldChwYWdlRWxlbWVudCwgcGFnZUNvbXBvbmVudFJlZik7XG5cbiAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocGFnZUVsZW1lbnQpOyAvLyBkaXJ0eSBmaXggdG8gaW5zZXJ0IGluIGNvcnJlY3QgcG9zaXRpb25cblxuICAgICAgICAgIGRvbmUocGFnZUVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICAoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZk1hcC5nZXQoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgICAgY29tcG9uZW50UmVmTWFwLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFnZUxvYWRlciA9IHRoaXMuX2xhc3RQYWdlTG9hZGVyO1xuICB9XG59XG5cbiJdfQ==