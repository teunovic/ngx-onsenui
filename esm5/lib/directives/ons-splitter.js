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
        return new ons.PageLoader(function (_a, done) {
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
export { OnsSplitterSide };
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
        return new ons.PageLoader(function (_a, done) {
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
export { OnsSplitterContent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXNwbGl0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9uc2VudWkvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9vbnMtc3BsaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxJQUFJLEVBRUosUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDO0FBRS9CLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ3JDO0lBZUUseUJBQ1UsV0FBdUIsRUFDdkIsY0FBZ0MsRUFDaEMsU0FBbUMsRUFDbkMsU0FBbUIsRUFDbkIsS0FBYTtRQUpiLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUEwQjtRQUNuQyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDckQsQ0FBQztJQVhELHNCQUFtQixpQ0FBSTtRQU52Qjs7Ozs7V0FLRzs7Ozs7Ozs7O1FBQ0gsVUFBd0IsSUFBZTtZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFXRCxzQkFBSSxvQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMs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LENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDOztnQkE3REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2pDOzs7O2dCQTlIQyxVQUFVO2dCQUlWLGdCQUFnQjtnQkFDaEIsd0JBQXdCO2dCQVB4QixRQUFROzs7dUJBd0lQLEtBQUssU0FBQyxNQUFNOztJQW9EZix5QkFBQztDQUFBLEFBOURELElBOERDO1NBM0RZLGtCQUFrQjs7Ozs7O0lBWTNCLHlDQUErQjs7Ozs7SUFDL0IsNENBQXdDOzs7OztJQUN4Qyx1Q0FBMkM7Ozs7O0lBQzNDLHVDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFR5cGUsXG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0b3IsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG9ucyBmcm9tICdvbnNlbnVpJztcblxuaW1wb3J0IHtQYXJhbXN9IGZyb20gJy4uL29ucy9wYXJhbXMnO1xuXG4vKipcbiAqIEBlbGVtZW50IG9ucy1zcGxpdHRlci1zaWRlXG4gKiBAZGlyZWN0aXZlIE9uc1NwbGl0dGVyU2lkZVxuICogQHNlbGVjdG9yIG9ucy1zcGxpdHRlci1zaWRlXG4gKiBAZGVzY3JpcHRpb25cbiAqICAgW2phXWA8b25zLXNwbGl0dGVyLXNpZGU+YOimgee0oOOBrkFuZ3VsYXLjg4fjgqPjg6zjgq/jg4bjgqPjg5bjgafjgZnjgIJbL2phXVxuICogICBbZW5dQW5ndWxhciBkaXJlY3RpdmUgZm9yIGA8b25zLXNwbGl0dGVyLXNpZGU+YCBjb21wb25lbnQuWy9lbl1cbiAqIEBleGFtcGxlXG4gKiAgIEBDb21wb25lbnQoe1xuICogICAgIHNlbGVjdG9yOiAnb25zLXBhZ2UnLFxuICogICAgIHRlbXBsYXRlOiBgXG4gKiAgICAgICA8b25zLXRvb2xiYXI+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5MZWZ0IFBhZ2U8L2Rpdj5cbiAqICAgICAgIDwvb25zLXRvb2xiYXI+XG4gKiAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZFwiPjwvZGl2PlxuICogICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAqICAgICAgICAgTGVmdFxuICogICAgICAgPC9kaXY+XG4gKiAgICAgYFxuICogICB9KVxuICogICBjbGFzcyBTaWRlUGFnZUNvbXBvbmVudCB7IH1cbiAqXG4gKiAgIEBDb21wb25lbnQoe1xuICogICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAqICAgICB0ZW1wbGF0ZTogYFxuICogICAgIDxvbnMtc3BsaXR0ZXI+XG4gKiAgICAgICA8b25zLXNwbGl0dGVyLXNpZGUgW3BhZ2VdPVwic2lkZVBhZ2VcIiBzaWRlPVwibGVmdFwiIHdpZHRoPVwiMjAwcHhcIj5cbiAqICAgICAgIDwvb25zLXNwbGl0dGVyLXNpZGU+XG4gKiAgICAgICA8b25zLXNwbGl0dGVyLWNvbnRlbnQ+Li4uPC9vbnMtc3BsaXR0ZXItY29udGVudD5cbiAqICAgICA8L29ucy1zcGxpdHRlcj5cbiAqICAgICBgXG4gKiAgIH0pXG4gKiAgIGV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICogICAgIHNpZGVQYWdlID0gU2lkZVBhZ2VDb21wb25lbnQ7XG4gKiAgIH1cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnb25zLXNwbGl0dGVyLXNpZGUnXG59KVxuZXhwb3J0IGNsYXNzIE9uc1NwbGl0dGVyU2lkZSB7XG5cbiAgLyoqXG4gICAqIEBpbnB1dCBwYWdlXG4gICAqIEBkZXNjXG4gICAqICAgW2VuXVBhZ2UgY29udGVudC5bL2VuXVxuICAgKiAgIFtqYV3ooajnpLrjgZnjgovjg5rjg7zjgrjjgrPjg7Pjg53jg7zjg43jg7Pjg4jjga7jgq/jg6njgrnjgpLmjIflrprjgZfjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgQElucHV0KCdwYWdlJykgc2V0IHBhZ2UocGFnZTogVHlwZTxhbnk+KSB7XG4gICAgdGhpcy5lbGVtZW50LnBhZ2UgPSBwYWdlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX3Jlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuZWxlbWVudC5wYWdlTG9hZGVyID0gdGhpcy5fY3JlYXRlUGFnZUxvYWRlcigpO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldCBuYXRpdmVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBfY3JlYXRlUGFnZUxvYWRlcigpIHtcbiAgICBjb25zdCBjb21wb25lbnRSZWZNYXA6V2Vha01hcDxIVE1MRWxlbWVudCwgQ29tcG9uZW50UmVmPGFueT4+ID0gbmV3IFdlYWtNYXA8SFRNTEVsZW1lbnQsIENvbXBvbmVudFJlZjxhbnk+PigpO1xuXG4gICAgcmV0dXJuIG5ldyBvbnMuUGFnZUxvYWRlcihcbiAgICAgICh7cGFnZSwgcGFyZW50LCBwYXJhbXN9OiBhbnksIGRvbmU6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAge3Byb3ZpZGU6IFBhcmFtcywgdXNlVmFsdWU6IG5ldyBQYXJhbXMocGFyYW1zIHx8IHt9KX0sXG4gICAgICAgICAgICAgIHtwcm92aWRlOiBPbnNTcGxpdHRlclNpZGUsIHVzZVZhbHVlOiB0aGlzfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3JcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShwYWdlKTtcbiAgICAgICAgICBjb25zdCBwYWdlQ29tcG9uZW50UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSwgMCwgaW5qZWN0b3IpO1xuICAgICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50ID0gcGFnZUNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIGNvbXBvbmVudFJlZk1hcC5zZXQocGFnZUVsZW1lbnQsIHBhZ2VDb21wb25lbnRSZWYpO1xuXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHBhZ2VFbGVtZW50KTsgLy8gZGlydHkgZml4IHRvIGluc2VydCBpbiBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgICAgICAgICBkb25lKHBhZ2VFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWZNYXAuZ2V0KGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICAgIGNvbXBvbmVudFJlZk1hcC5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogQGVsZW1lbnQgb25zLXNwbGl0dGVyLWNvbnRlbnRcbiAqIEBkaXJlY3RpdmUgT25zU3BsaXR0ZXJDb250ZW50XG4gKiBAc2VsZWN0b3Igb25zLXNwbGl0dGVyLWNvbnRlbnRcbiAqIEBkZXNjcmlwdGlvblxuICogICAgW2phXWA8b25zLXNwbGl0dGVyLWNvbnRlbnQ+YOimgee0oOOBruOBn+OCgeOBrkFuZ3VsYXIyIOODh+OCo+ODrOOCr+ODhuOCo+ODluOBp+OBmeOAglsvamFdXG4gKiAgICBbZW5dQW5ndWxhciBkaXJlY3RpdmUgZm9yIGA8b25zLXNwbGl0dGVyLWNvbnRlbnQ+YCBjb21wb25lbnQuWy9lbl1cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnb25zLXNwbGl0dGVyLWNvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIE9uc1NwbGl0dGVyQ29udGVudCB7XG4gIC8qKlxuICAgKiBAaW5wdXQgcGFnZVxuICAgKiBAZGVzY1xuICAgKiAgIFtlbl1TcGVjaWZ5IHRoZSBwYWdlIGNvbXBvbmVudC5bL2VuXVxuICAgKiAgIFtqYV3ooajnpLrjgZnjgovjg5rjg7zjgrjjgrPjg7Pjg53jg7zjg43jg7Pjg4jjga7jgq/jg6njgrnjgpLmjIflrprjgZfjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgQElucHV0KCdwYWdlJykgc2V0IHBhZ2UocGFnZTogVHlwZTxhbnk+KSB7XG4gICAgdGhpcy5lbGVtZW50LnBhZ2UgPSBwYWdlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX3Jlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhZ2VMb2FkZXIgPSB0aGlzLl9jcmVhdGVQYWdlTG9hZGVyKCk7XG4gIH1cblxuICBnZXQgZWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0IG5hdGl2ZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIF9jcmVhdGVQYWdlTG9hZGVyKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZk1hcDpXZWFrTWFwPEhUTUxFbGVtZW50LCBDb21wb25lbnRSZWY8YW55Pj4gPSBuZXcgV2Vha01hcDxIVE1MRWxlbWVudCwgQ29tcG9uZW50UmVmPGFueT4+KCk7XG5cbiAgICByZXR1cm4gbmV3IG9ucy5QYWdlTG9hZGVyKFxuICAgICAgKHtwYWdlLCBwYXJlbnQsIHBhcmFtc306IGFueSwgZG9uZTogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAge3Byb3ZpZGU6IFBhcmFtcywgdXNlVmFsdWU6IG5ldyBQYXJhbXMocGFyYW1zIHx8IHt9KX0sXG4gICAgICAgICAgICB7cHJvdmlkZTogT25zU3BsaXR0ZXJDb250ZW50LCB1c2VWYWx1ZTogdGhpc31cbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3JcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX3Jlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHBhZ2UpO1xuICAgICAgICBjb25zdCBwYWdlQ29tcG9uZW50UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSwgMCwgaW5qZWN0b3IpO1xuICAgICAgICBjb25zdCBwYWdlRWxlbWVudCA9IHBhZ2VDb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29tcG9uZW50UmVmTWFwLnNldChwYWdlRWxlbWVudCwgcGFnZUNvbXBvbmVudFJlZik7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHBhZ2VFbGVtZW50KTsgLy8gZGlydHkgZml4IHRvIGluc2VydCBpbiBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgICAgICAgZG9uZShwYWdlRWxlbWVudCk7XG4gICAgICB9LFxuICAgICAgKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWZNYXAuZ2V0KGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICAgIGNvbXBvbmVudFJlZk1hcC5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iXX0=