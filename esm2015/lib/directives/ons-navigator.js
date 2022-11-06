/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injector, Directive, ElementRef, Type, ComponentFactoryResolver, Input, ViewContainerRef, NgZone } from '@angular/core';
import * as ons from 'onsenui';
import { Params } from '../ons/params';
export class NavigatorPage {
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
export class OnsNavigator {
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
        return new ons.PageLoader(({ page, parent, params }, done) => {
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
                const selector = 'ons-navigator';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLW5hdmlnYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbnNlbnVpLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb25zLW5hdmlnYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUVWLElBQUksRUFDSix3QkFBd0IsRUFDeEIsS0FBSyxFQUNMLGdCQUFnQixFQUVoQixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLEdBQUcsTUFBTSxTQUFTLENBQUM7QUFFL0IsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVyQyxNQUFNLE9BQU8sYUFBYTs7Ozs7OztJQUN4QixZQUNTLGFBQWdDLElBQUksRUFDcEMsVUFBb0IsY0FBWSxDQUFDLEVBQ2pDLFdBQWdCLElBQUksRUFDcEIsU0FBaUIsSUFBSSxNQUFNLEVBQUU7UUFIN0IsZUFBVSxHQUFWLFVBQVUsQ0FBMEI7UUFDcEMsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7UUFDakMsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUF1QjtJQUN0QyxDQUFDO0NBQ0Y7OztJQUxHLG1DQUEyQzs7SUFDM0MsZ0NBQXdDOztJQUN4QyxpQ0FBMkI7O0lBQzNCLCtCQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ3hDLE1BQU0sT0FBTyxZQUFZOzs7Ozs7OztJQXFCdkIsWUFDVSxXQUF1QixFQUN2QixTQUFtQyxFQUNuQyxjQUFnQyxFQUNoQyxTQUFtQixFQUNuQixLQUFhO1FBSmIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBMEI7UUFDbkMsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNyQixJQUFJ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Y3RvcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBDb21wb25lbnRSZWYsXG4gIFR5cGUsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5wdXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIE9uRGVzdHJveSxcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgb25zIGZyb20gJ29uc2VudWknO1xuXG5pbXBvcnQge1BhcmFtc30gZnJvbSAnLi4vb25zL3BhcmFtcyc7XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0b3JQYWdlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgfCBudWxsID0gbnVsbCxcbiAgICBwdWJsaWMgZGVzdHJveTogRnVuY3Rpb24gPSBmdW5jdGlvbigpIHt9LFxuICAgIHB1YmxpYyBhbmltYXRvcjogYW55ID0gbnVsbCxcbiAgICBwdWJsaWMgcGFyYW1zOiBQYXJhbXMgPSBuZXcgUGFyYW1zKCkpIHtcbiAgfVxufVxuXG4vKipcbiAqIEBlbGVtZW50IG9ucy1uYXZpZ2F0b3JcbiAqIEBkaXJlY3RpdmUgT25zTmF2aWdhdG9yXG4gKiBAc2VsZWN0b3Igb25zLW5hdmlnYXRvclxuICogQGNvZHBlbiBLZ3ZBdnhcbiAqIEBkZXNjcmlwdGlvblxuICogICBbZW5dQW5ndWxhciBkaXJlY3RpdmUgZm9yIGA8b25zLW5hdmlnYXRvcj5gIGNvbXBvbmVudC5bL2VuXVxuICogICBbamFdYDxvbnMtbmF2aWdhdG9yPmDopoHntKDjga5Bbmd1bGFy44OH44Kj44Os44Kv44OG44Kj44OW44Gn44GZ44CCWy9qYV1cbiAqIEBleGFtcGxlXG4gKiAgIEBDb21wb25lbnQoe1xuICogICAgIHNlbGVjdG9yOiAnb25zLXBhZ2UnLFxuICogICAgIHRlbXBsYXRlOiBgXG4gKiAgICAgICA8b25zLXRvb2xiYXI+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5QYWdlPC9kaXY+XG4gKiAgICAgICA8L29ucy10b29sYmFyPlxuICogICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4uLi48L2Rpdj5cbiAqICAgICBgXG4gKiAgIH0pXG4gKiAgIGNsYXNzIERlZmF1bHRQYWdlQ29tcG9uZW50IHsgfVxuICpcbiAqICAgQENvbXBvbmVudCh7XG4gKiAgICAgc2VsZWN0b3I6ICduYXZpZ2F0b3ItYXBwJyxcbiAqICAgICB0ZW1wbGF0ZTogYFxuICogICAgIDxvbnMtbmF2aWdhdG9yIFtwYWdlXT1cInBhZ2VcIj48L29ucy1uYXZpZ2F0b3I+XG4gKiAgICAgYFxuICogICB9KVxuICogICBleHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAqICAgICBwYWdlID0gRGVmYXVsdFBhZ2VDb21wb25lbnRcbiAqICAgfVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdvbnMtbmF2aWdhdG9yJ1xufSlcbmV4cG9ydCBjbGFzcyBPbnNOYXZpZ2F0b3IgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9sYXN0UGFnZUxvYWRlcjogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEBpbnB1dCBwYWdlXG4gICAqIEBkZXNjXG4gICAqICAgW2VuXVR5cGUgb2YgdGhlIHBhZ2UgY29tcG9uZW50LlsvZW5dXG4gICAqICAgW2phXeODmuODvOOCuOOCs+ODs+ODneODvOODjeODs+ODiOOBruOCr+ODqeOCueOCkuaMh+WumuOBl+OBvuOBmeOAglsvamFdXG4gICAqL1xuICBASW5wdXQoJ3BhZ2UnKSBzZXQgcGFnZUNvbXBvbmVudFR5cGUocGFnZTogVHlwZTxhbnk+KSB7XG4gICAgdGhpcy5lbGVtZW50LnBhZ2UgPSBwYWdlO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuX2xhc3RQYWdlTG9hZGVyID0gdGhpcy5lbGVtZW50LnBhZ2VMb2FkZXI7XG4gICAgdGhpcy5lbGVtZW50LnBhZ2VMb2FkZXIgPSB0aGlzLl9jcmVhdGVQYWdlTG9hZGVyKCk7XG4gIH1cblxuICBfY3JlYXRlUGFnZUxvYWRlcigpIHtcbiAgICBjb25zdCBjb21wb25lbnRSZWZNYXA6IFdlYWtNYXA8SFRNTEVsZW1lbnQsIENvbXBvbmVudFJlZjxhbnk+PiA9IG5ldyBXZWFrTWFwPEhUTUxFbGVtZW50LCBDb21wb25lbnRSZWY8YW55Pj4oKTtcblxuICAgIHJldHVybiBuZXcgb25zLlBhZ2VMb2FkZXIoXG4gICAgICAoe3BhZ2UsIHBhcmVudCwgcGFyYW1zfTogYW55LCBkb25lOiBGdW5jdGlvbikgPT4ge1xuICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFnZVBhcmFtcyA9IG5ldyBQYXJhbXMocGFyYW1zIHx8IHt9KTtcbiAgICAgICAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAge3Byb3ZpZGU6IFBhcmFtcywgdXNlVmFsdWU6IHBhZ2VQYXJhbXN9LFxuICAgICAgICAgICAgICB7cHJvdmlkZTogT25zTmF2aWdhdG9yLCB1c2VWYWx1ZTogdGhpc31cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMuX2luamVjdG9yXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fcmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkocGFnZSk7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSAnb25zLW5hdmlnYXRvcic7XG4gICAgICAgICAgY29uc3QgcGFnZUNvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yLCB1bmRlZmluZWQpO1xuICAgICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuaW5zZXJ0KHBhZ2VDb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50ID0gcGFnZUNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIGNvbXBvbmVudFJlZk1hcC5zZXQocGFnZUVsZW1lbnQsIHBhZ2VDb21wb25lbnRSZWYpO1xuXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHBhZ2VFbGVtZW50KTsgLy8gZGlydHkgZml4IHRvIGluc2VydCBpbiBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgICAgICAgICBkb25lKHBhZ2VFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWZNYXAuZ2V0KGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICAgIGNvbXBvbmVudFJlZk1hcC5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhZ2VMb2FkZXIgPSB0aGlzLl9sYXN0UGFnZUxvYWRlcjtcbiAgfVxufVxuXG4iXX0=