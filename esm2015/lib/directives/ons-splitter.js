/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Type, Injector, Directive, ElementRef, Input, ViewContainerRef, ComponentFactoryResolver, NgZone } from '@angular/core';
import * as ons from 'onsenui';
import { Params } from '../ons/params';
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
export class OnsSplitterSide {
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
        return new ons.PageLoader(({ page, parent, params }, done) => {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsSplitterSide.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    OnsSplitterSide.prototype._viewContainer;
    /**
     * @type {?}
     * @private
     */
    OnsSplitterSide.prototype._resolver;
    /**
     * @type {?}
     * @private
     */
    OnsSplitterSide.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    OnsSplitterSide.prototype._zone;
}
/**
 * \@element ons-splitter-content
 * \@directive OnsSplitterContent
 * \@selector ons-splitter-content
 * \@description
 *    [ja]`<ons-splitter-content>`要素のためのAngular2 ディレクティブです。[/ja]
 *    [en]Angular directive for `<ons-splitter-content>` component.[/en]
 */
export class OnsSplitterContent {
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
        return new ons.PageLoader(({ page, parent, params }, done) => {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsSplitterContent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    OnsSplitterContent.prototype._viewContainer;
    /**
     * @type {?}
     * @private
     */
    OnsSplitterContent.prototype._resolver;
    /**
     * @type {?}
     * @private
     */
    OnsSplitterContent.prototype._injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXNwbGl0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9uc2VudWkvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9vbnMtc3BsaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxJQUFJLEVBRUosUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDO0FBRS9CLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q3JDLE1BQU0sT0FBTyxlQUFlOzs7Ozs7OztJQVkxQixZQUNVLFdBQXVCLEVBQ3ZCLGNBQWdDLEVBQ2hDLFNBQW1DLEVBQ25DLFNBQW1CLEVBQ25CLEtBQWE7UUFKYixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBMEI7UUFDbkMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7OztJQVhELElBQW1CLElBQUksQ0FBQyxJQUFlO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOzs7O0lBV0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztJQUN4QyxDQUFD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QyxVQUFVO1lBSVYsZ0JBQWdCO1lBQ2hCLHdCQUF3QjtZQVB4QixRQUFROzs7bUJBd0lQLEtBQUssU0FBQyxNQUFNOzs7Ozs7O0lBS1gseUNBQStCOzs7OztJQUMvQiw0Q0FBd0M7Ozs7O0lBQ3hDLHVDQUEyQzs7Ozs7SUFDM0MsdUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVHlwZSxcbiAgQ29tcG9uZW50UmVmLFxuICBJbmplY3RvcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgb25zIGZyb20gJ29uc2VudWknO1xuXG5pbXBvcnQge1BhcmFtc30gZnJvbSAnLi4vb25zL3BhcmFtcyc7XG5cbi8qKlxuICogQGVsZW1lbnQgb25zLXNwbGl0dGVyLXNpZGVcbiAqIEBkaXJlY3RpdmUgT25zU3BsaXR0ZXJTaWRlXG4gKiBAc2VsZWN0b3Igb25zLXNwbGl0dGVyLXNpZGVcbiAqIEBkZXNjcmlwdGlvblxuICogICBbamFdYDxvbnMtc3BsaXR0ZXItc2lkZT5g6KaB57Sg44GuQW5ndWxhcuODh+OCo+ODrOOCr+ODhuOCo+ODluOBp+OBmeOAglsvamFdXG4gKiAgIFtlbl1Bbmd1bGFyIGRpcmVjdGl2ZSBmb3IgYDxvbnMtc3BsaXR0ZXItc2lkZT5gIGNvbXBvbmVudC5bL2VuXVxuICogQGV4YW1wbGVcbiAqICAgQENvbXBvbmVudCh7XG4gKiAgICAgc2VsZWN0b3I6ICdvbnMtcGFnZScsXG4gKiAgICAgdGVtcGxhdGU6IGBcbiAqICAgICAgIDxvbnMtdG9vbGJhcj5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlclwiPkxlZnQgUGFnZTwvZGl2PlxuICogICAgICAgPC9vbnMtdG9vbGJhcj5cbiAqICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+XG4gKiAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICogICAgICAgICBMZWZ0XG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICBgXG4gKiAgIH0pXG4gKiAgIGNsYXNzIFNpZGVQYWdlQ29tcG9uZW50IHsgfVxuICpcbiAqICAgQENvbXBvbmVudCh7XG4gKiAgICAgc2VsZWN0b3I6ICdhcHAnLFxuICogICAgIHRlbXBsYXRlOiBgXG4gKiAgICAgPG9ucy1zcGxpdHRlcj5cbiAqICAgICAgIDxvbnMtc3BsaXR0ZXItc2lkZSBbcGFnZV09XCJzaWRlUGFnZVwiIHNpZGU9XCJsZWZ0XCIgd2lkdGg9XCIyMDBweFwiPlxuICogICAgICAgPC9vbnMtc3BsaXR0ZXItc2lkZT5cbiAqICAgICAgIDxvbnMtc3BsaXR0ZXItY29udGVudD4uLi48L29ucy1zcGxpdHRlci1jb250ZW50PlxuICogICAgIDwvb25zLXNwbGl0dGVyPlxuICogICAgIGBcbiAqICAgfSlcbiAqICAgZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gKiAgICAgc2lkZVBhZ2UgPSBTaWRlUGFnZUNvbXBvbmVudDtcbiAqICAgfVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdvbnMtc3BsaXR0ZXItc2lkZSdcbn0pXG5leHBvcnQgY2xhc3MgT25zU3BsaXR0ZXJTaWRlIHtcblxuICAvKipcbiAgICogQGlucHV0IHBhZ2VcbiAgICogQGRlc2NcbiAgICogICBbZW5dUGFnZSBjb250ZW50LlsvZW5dXG4gICAqICAgW2phXeihqOekuuOBmeOCi+ODmuODvOOCuOOCs+ODs+ODneODvOODjeODs+ODiOOBruOCr+ODqeOCueOCkuaMh+WumuOBl+OBvuOBmeOAglsvamFdXG4gICAqL1xuICBASW5wdXQoJ3BhZ2UnKSBzZXQgcGFnZShwYWdlOiBUeXBlPGFueT4pIHtcbiAgICB0aGlzLmVsZW1lbnQucGFnZSA9IHBhZ2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhZ2VMb2FkZXIgPSB0aGlzLl9jcmVhdGVQYWdlTG9hZGVyKCk7XG4gIH1cblxuICBnZXQgZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0IG5hdGl2ZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIF9jcmVhdGVQYWdlTG9hZGVyKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZk1hcDpXZWFrTWFwPEhUTUxFbGVtZW50LCBDb21wb25lbnRSZWY8YW55Pj4gPSBuZXcgV2Vha01hcDxIVE1MRWxlbWVudCwgQ29tcG9uZW50UmVmPGFueT4+KCk7XG5cbiAgICByZXR1cm4gbmV3IG9ucy5QYWdlTG9hZGVyKFxuICAgICAgKHtwYWdlLCBwYXJlbnQsIHBhcmFtc306IGFueSwgZG9uZTogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICB7cHJvdmlkZTogUGFyYW1zLCB1c2VWYWx1ZTogbmV3IFBhcmFtcyhwYXJhbXMgfHwge30pfSxcbiAgICAgICAgICAgICAge3Byb3ZpZGU6IE9uc1NwbGl0dGVyU2lkZSwgdXNlVmFsdWU6IHRoaXN9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX3Jlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHBhZ2UpO1xuICAgICAgICAgIGNvbnN0IHBhZ2VDb21wb25lbnRSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5LCAwLCBpbmplY3Rvcik7XG4gICAgICAgICAgY29uc3QgcGFnZUVsZW1lbnQgPSBwYWdlQ29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgY29tcG9uZW50UmVmTWFwLnNldChwYWdlRWxlbWVudCwgcGFnZUNvbXBvbmVudFJlZik7XG5cbiAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocGFnZUVsZW1lbnQpOyAvLyBkaXJ0eSBmaXggdG8gaW5zZXJ0IGluIGNvcnJlY3QgcG9zaXRpb25cblxuICAgICAgICAgIGRvbmUocGFnZUVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICAoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZk1hcC5nZXQoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgICAgY29tcG9uZW50UmVmTWFwLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBAZWxlbWVudCBvbnMtc3BsaXR0ZXItY29udGVudFxuICogQGRpcmVjdGl2ZSBPbnNTcGxpdHRlckNvbnRlbnRcbiAqIEBzZWxlY3RvciBvbnMtc3BsaXR0ZXItY29udGVudFxuICogQGRlc2NyaXB0aW9uXG4gKiAgICBbamFdYDxvbnMtc3BsaXR0ZXItY29udGVudD5g6KaB57Sg44Gu44Gf44KB44GuQW5ndWxhcjIg44OH44Kj44Os44Kv44OG44Kj44OW44Gn44GZ44CCWy9qYV1cbiAqICAgIFtlbl1Bbmd1bGFyIGRpcmVjdGl2ZSBmb3IgYDxvbnMtc3BsaXR0ZXItY29udGVudD5gIGNvbXBvbmVudC5bL2VuXVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdvbnMtc3BsaXR0ZXItY29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgT25zU3BsaXR0ZXJDb250ZW50IHtcbiAgLyoqXG4gICAqIEBpbnB1dCBwYWdlXG4gICAqIEBkZXNjXG4gICAqICAgW2VuXVNwZWNpZnkgdGhlIHBhZ2UgY29tcG9uZW50LlsvZW5dXG4gICAqICAgW2phXeihqOekuuOBmeOCi+ODmuODvOOCuOOCs+ODs+ODneODvOODjeODs+ODiOOBruOCr+ODqeOCueOCkuaMh+WumuOBl+OBvuOBmeOAglsvamFdXG4gICAqL1xuICBASW5wdXQoJ3BhZ2UnKSBzZXQgcGFnZShwYWdlOiBUeXBlPGFueT4pIHtcbiAgICB0aGlzLmVsZW1lbnQucGFnZSA9IHBhZ2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFnZUxvYWRlciA9IHRoaXMuX2NyZWF0ZVBhZ2VMb2FkZXIoKTtcbiAgfVxuXG4gIGdldCBlbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBnZXQgbmF0aXZlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgX2NyZWF0ZVBhZ2VMb2FkZXIoKSB7XG4gICAgY29uc3QgY29tcG9uZW50UmVmTWFwOldlYWtNYXA8SFRNTEVsZW1lbnQsIENvbXBvbmVudFJlZjxhbnk+PiA9IG5ldyBXZWFrTWFwPEhUTUxFbGVtZW50LCBDb21wb25lbnRSZWY8YW55Pj4oKTtcblxuICAgIHJldHVybiBuZXcgb25zLlBhZ2VMb2FkZXIoXG4gICAgICAoe3BhZ2UsIHBhcmVudCwgcGFyYW1zfTogYW55LCBkb25lOiBGdW5jdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7cHJvdmlkZTogUGFyYW1zLCB1c2VWYWx1ZTogbmV3IFBhcmFtcyhwYXJhbXMgfHwge30pfSxcbiAgICAgICAgICAgIHtwcm92aWRlOiBPbnNTcGxpdHRlckNvbnRlbnQsIHVzZVZhbHVlOiB0aGlzfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fcmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkocGFnZSk7XG4gICAgICAgIGNvbnN0IHBhZ2VDb21wb25lbnRSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5LCAwLCBpbmplY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50ID0gcGFnZUNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb21wb25lbnRSZWZNYXAuc2V0KHBhZ2VFbGVtZW50LCBwYWdlQ29tcG9uZW50UmVmKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQocGFnZUVsZW1lbnQpOyAvLyBkaXJ0eSBmaXggdG8gaW5zZXJ0IGluIGNvcnJlY3QgcG9zaXRpb25cblxuICAgICAgICBkb25lKHBhZ2VFbGVtZW50KTtcbiAgICAgIH0sXG4gICAgICAoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZk1hcC5nZXQoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgICAgY29tcG9uZW50UmVmTWFwLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiJdfQ==