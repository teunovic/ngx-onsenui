/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ViewContainerRef, ComponentFactoryResolver, Directive, ElementRef, Type, Input, Output, EventEmitter, NgZone } from '@angular/core';
import * as ons from 'onsenui';
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
export { OnsTabbar };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsTabbar.prototype._element;
    /**
     * \@output swipe
     * \@param $event
     * \@param $event.index
     * \@param $event.options
     * @desc
     *   [en]Triggers when the tabbar is swiped.[/en]
     *   [ja]`<ons-tabbar>`がスワイプされた時に発火します。[/ja]
     * @type {?}
     */
    OnsTabbar.prototype._swipe;
    /**
     * @type {?}
     * @private
     */
    OnsTabbar.prototype._elementRef;
}
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
        var PageLoader = (/** @type {?} */ (ons.PageLoader));
        return new PageLoader(function (_a, done) {
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
export { OnsTab };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsTab.prototype._pageComponent;
    /**
     * @type {?}
     * @private
     */
    OnsTab.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    OnsTab.prototype._viewContainer;
    /**
     * @type {?}
     * @private
     */
    OnsTab.prototype._resolver;
    /**
     * @type {?}
     * @private
     */
    OnsTab.prototype._zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXRhYmJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbnNlbnVpLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb25zLXRhYmJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLGdCQUFnQixFQUNoQix3QkFBd0IsRUFFeEIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQy9CO0lBaUJFLG1CQUFvQixXQUF1QjtRQUEzQyxpQkFHQztRQUhtQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTs7Ozs7Ozs7OztRQUYxQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUczQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsVUFBQyxLQUFhLEVBQUUsT0FBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBQyxDQUFDLEVBQWxDLENBQWtDLENBQUM7SUFDOUYsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBckRDLFVBQVU7Ozt5QkFrRVQsTUFBTSxTQUFDLE9BQU87O0lBTWpCLGdCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FsQlksU0FBUzs7Ozs7O0lBQ3BCLDZCQUFzQjs7Ozs7Ozs7Ozs7SUFXdEIsMkJBQTZDOzs7OztJQUVqQyxnQ0FBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDN0M7SUFnQkUsZ0JBQW9CLFdBQXVCLEVBQ2pDLGNBQWdDLEVBQ2hDLFNBQW1DLEVBQ25DLEtBQWE7UUFISCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUNqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBMEI7UUFDbkMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQWZmLG1CQUFjLEdBQTZCLElBQUksQ0FBQztRQWdCdEQsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN2RSxDQUFDO0lBVkQsc0JBQW1CLHdCQUFJO1FBTnZCOzs7OztXQUtHOzs7Ozs7Ozs7UUFDSCxVQUF3QixpQkFBNEI7WUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1FBQzFELENBQUM7OztPQUFBOzs7O0lBVUQsa0NBQWlCOzs7SUFBakI7UUFBQSxpQkE0QkM7O1lBM0JPLFVBQVUsR0FBRyxtQkFBSyxHQUFHLENBQUMsVUFBVSxFQUFBO1FBQ3RDLE9BQU8sSUFBSSxVQUFVLENBQ25CLFVBQUMsRUFBbUIsRUFBRSxJQUFjO2dCQUFsQyxjQUFJLEVBQUUsa0JBQU07WUFDWixLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7b0JBQ1AsT0FBTyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDOztvQkFDdEQsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFFeEUsSUFBSSxLQUFJLENBQUMsY0FBYyxFQUFFO29CQUN2QixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUMvQjtnQkFDRCxLQUFJLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDOztvQkFFakMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxhQUFhO2dCQUMzRCxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsMENBQTBDO2dCQUUzRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQ0Q7WUFDRSxJQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDekMsSUFBSSxLQUFJLENBQUMsY0FBYyxFQUFFO29CQUN2QixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUM5QixLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztpQkFDNUI7YUFDRjtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDRCQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztpQkFDcEI7Ozs7Z0JBakhDLFVBQVU7Z0JBSlYsZ0JBQWdCO2dCQUNoQix3QkFBd0I7Z0JBU3hCLE1BQU07Ozt1QkFxSEwsS0FBSyxTQUFDLE1BQU07O0lBZ0RmLGFBQUM7Q0FBQSxBQTVERCxJQTREQztTQXpEWSxNQUFNOzs7Ozs7SUFDakIsZ0NBQXdEOzs7OztJQVk1Qyw2QkFBK0I7Ozs7O0lBQ3pDLGdDQUF3Qzs7Ozs7SUFDeEMsMkJBQTJDOzs7OztJQUMzQyx1QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3RvcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBUeXBlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgb25zIGZyb20gJ29uc2VudWknO1xuXG4vKipcbiAqIEBlbGVtZW50IG9ucy10YWJiYXJcbiAqIEBkaXJlY3RpdmUgT25zVGFiYmFyXG4gKiBAc2VsZWN0b3Igb25zLXRhYmJhclxuICogQGRlc2NyaXB0aW9uXG4gKiAgIFtlbl1Bbmd1bGFyIGRpcmVjdGl2ZSBmb3IgYDxvbnMtdGFiYmFyPmAgY29tcG9uZW50LlsvZW5dXG4gKiAgIFtqYV1gPG9ucy10YWJiYXI+YOimgee0oOOBruOBn+OCgeOBruODh+OCo+ODrOOCr+ODhuOCo+ODluOBp+OBmeOAglsvamFdXG4gKiBAZXhhbXBsZVxuICogICBAQ29tcG9uZW50KHtcbiAqICAgICBzZWxlY3RvcjogJ29ucy1wYWdlJyxcbiAqICAgICB0ZW1wbGF0ZTogYFxuICogICAgICAgPG9ucy10b29sYmFyPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyXCI+UGFnZTwvZGl2PlxuICogICAgICAgPC9vbnMtdG9vbGJhcj5cbiAqICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+Li4uPC9kaXY+XG4gKiAgICAgYFxuICogICB9KVxuICogICBjbGFzcyBQYWdlQ29tcG9uZW50IHtcbiAqICAgfVxuICpcbiAqICAgQENvbXBvbmVudCh7XG4gKiAgICAgc2VsZWN0b3I6ICdhcHAnLFxuICogICAgIHRlbXBsYXRlOiBgXG4gKiAgICAgPG9ucy10YWJiYXIgc3dpcGVhYmxlIChzd2lwZSk9XCJvblN3aXBlKCRldmVudClcIj5cbiAqICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJiYXJfX2NvbnRlbnRcIj48L2Rpdj5cbiAqICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJiYXJcIj5cbiAqICAgICAgICAgPG9ucy10YWIgbGFiZWw9XCJQYWdlMVwiIGljb249XCJpb24taG9tZVwiIFtwYWdlXT1cInBhZ2VcIiBhY3RpdmU+PC9vbnMtdGFiPlxuICogICAgICAgICA8b25zLXRhYiBsYWJlbD1cIlBhZ2UyXCIgaWNvbj1cImlvbi1oZWxwXCIgW3BhZ2VdPVwicGFnZVwiPjwvb25zLXRhYj5cbiAqICAgICAgICAgPG9ucy10YWIgbGFiZWw9XCJQYWdlM1wiIGljb249XCJpb24tc3RvcFwiIFtwYWdlXT1cInBhZ2VcIj48L29ucy10YWI+XG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICA8L29ucy10YWJiYXI+XG4gKiAgICAgYFxuICogICB9KVxuICogICBleHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAqICAgICBwYWdlID0gUGFnZUNvbXBvbmVudFxuICogXG4gKiAgICAgb25Td2lwZShldmVudCkge1xuICogICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICogICAgIH1cbiAqICAgfVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdvbnMtdGFiYmFyJ1xufSlcbmV4cG9ydCBjbGFzcyBPbnNUYWJiYXIge1xuICBwcml2YXRlIF9lbGVtZW50OiBhbnk7XG5cbiAgLyoqXG4gICAqIEBvdXRwdXQgc3dpcGVcbiAgICogQHBhcmFtICRldmVudFxuICAgKiBAcGFyYW0gJGV2ZW50LmluZGV4XG4gICAqIEBwYXJhbSAkZXZlbnQub3B0aW9uc1xuICAgKiBAZGVzY1xuICAgKiAgIFtlbl1UcmlnZ2VycyB3aGVuIHRoZSB0YWJiYXIgaXMgc3dpcGVkLlsvZW5dXG4gICAqICAgW2phXWA8b25zLXRhYmJhcj5g44GM44K544Ov44Kk44OX44GV44KM44Gf5pmC44Gr55m654Gr44GX44G+44GZ44CCWy9qYV1cbiAgICovXG4gIEBPdXRwdXQoJ3N3aXBlJykgX3N3aXBlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9lbGVtZW50Lm9uU3dpcGUgPSAoaW5kZXg6IG51bWJlciwgb3B0aW9uczogYW55KSA9PiB0aGlzLl9zd2lwZS5lbWl0KHtpbmRleCwgb3B0aW9uc30pO1xuICB9XG59XG5cbi8qKlxuICogQGVsZW1lbnQgb25zLXRhYlxuICogQGRpcmVjdGl2ZSBPbnNUYWJcbiAqIEBzZWxlY3RvciBvbnMtdGFiXG4gKiBAZGVzY3JpcHRpb25cbiAqICAgW2VuXUFuZ3VsYXIgZGlyZWN0aXZlIGZvciBgPG9ucy10YWI+YCBjb21wb25lbnQuWy9lbl1cbiAqICAgW2phXWA8b25zLXRhYj5g6KaB57Sg44Gu44Gf44KB44Gu44OH44Kj44Os44Kv44OG44Kj44OW44Gn44GZ44CCWy9qYV1cbiAqIEBleGFtcGxlXG4gKiAgIEBDb21wb25lbnQoe1xuICogICAgIHNlbGVjdG9yOiAnb25zLXBhZ2UnLFxuICogICAgIHRlbXBsYXRlOiBgXG4gKiAgICAgICA8b25zLXRvb2xiYXI+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5QYWdlPC9kaXY+XG4gKiAgICAgICA8L29ucy10b29sYmFyPlxuICogICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4uLi48L2Rpdj5cbiAqICAgICBgXG4gKiAgIH0pXG4gKiAgIGNsYXNzIFBhZ2VDb21wb25lbnQge1xuICogICB9XG4gKlxuICogICBAQ29tcG9uZW50KHtcbiAqICAgICBzZWxlY3RvcjogJ2FwcCcsXG4gKiAgICAgdGVtcGxhdGU6IGBcbiAqICAgICA8b25zLXRhYmJhcj5cbiAqICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJiYXJfX2NvbnRlbnRcIj48L2Rpdj5cbiAqICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJiYXJcIj5cbiAqICAgICAgICAgPG9ucy10YWIgbGFiZWw9XCJQYWdlMVwiIGljb249XCJpb24taG9tZVwiIFtwYWdlXT1cInBhZ2VcIiBhY3RpdmU+PC9vbnMtdGFiPlxuICogICAgICAgICA8b25zLXRhYiBsYWJlbD1cIlBhZ2UyXCIgaWNvbj1cImlvbi1oZWxwXCIgW3BhZ2VdPVwicGFnZVwiPjwvb25zLXRhYj5cbiAqICAgICAgICAgPG9ucy10YWIgbGFiZWw9XCJQYWdlM1wiIGljb249XCJpb24tc3RvcFwiIFtwYWdlXT1cInBhZ2VcIj48L29ucy10YWI+XG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICA8L29ucy10YWJiYXI+XG4gKiAgICAgYFxuICogICB9KVxuICogICBleHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAqICAgICBwYWdlID0gUGFnZUNvbXBvbmVudFxuICogICB9XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ29ucy10YWInXG59KVxuZXhwb3J0IGNsYXNzIE9uc1RhYiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3BhZ2VDb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+IHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBpbnB1dCBwYWdlXG4gICAqIEBkZXNjXG4gICAqICAgW2VuXVNwZWNpZnkgdGhlIHBhZ2UgY29tcG9uZW50IHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gdGhlIHRhYiBpcyBhY3RpdmUuWy9lbl1cbiAgICogICBbamFd6Kqt44G/6L6844KA44Oa44O844K444Kz44Oz44Od44O844ON44Oz44OI44KS5oyH5a6a44GX44G+44GZ44CCWy9qYV1cbiAgICovXG4gIEBJbnB1dCgncGFnZScpIHNldCBwYWdlKHBhZ2VDb21wb25lbnRUeXBlOiBUeXBlPGFueT4pIHtcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFnZSA9IHBhZ2VDb21wb25lbnRUeXBlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX3Jlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7XG4gICAgLy8gc2V0IHVwIG9ucy10YWIncyBwYWdlIGxvYWRlclxuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYWdlTG9hZGVyID0gdGhpcy5fY3JlYXRlUGFnZUxvYWRlcigpO1xuICB9XG5cbiAgX2NyZWF0ZVBhZ2VMb2FkZXIoKSB7XG4gICAgY29uc3QgUGFnZUxvYWRlciA9IDxhbnk+b25zLlBhZ2VMb2FkZXI7XG4gICAgcmV0dXJuIG5ldyBQYWdlTG9hZGVyKFxuICAgICAgKHtwYWdlLCBwYXJlbnR9OiBhbnksIGRvbmU6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fcmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkocGFnZSk7XG4gICAgICAgICAgY29uc3QgcGFnZUNvbXBvbmVudFJlZiA9IHRoaXMuX3ZpZXdDb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnksIDApO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3BhZ2VDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhZ2VDb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9wYWdlQ29tcG9uZW50ID0gcGFnZUNvbXBvbmVudFJlZjtcblxuICAgICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50ID0gcGFnZUNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChwYWdlRWxlbWVudCk7IC8vIGRpcnR5IGZpeCB0byBpbnNlcnQgaW4gY29ycmVjdCBwb3NpdGlvblxuXG4gICAgICAgICAgZG9uZShwYWdlRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoJ19wYWdlQ29tcG9uZW50JykpIHtcbiAgICAgICAgICBpZiAodGhpcy5fcGFnZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5fcGFnZUNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9wYWdlQ29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX3BhZ2VDb21wb25lbnQpIHtcbiAgICAgIHRoaXMuX3BhZ2VDb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5fcGFnZUNvbXBvbmVudCA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==