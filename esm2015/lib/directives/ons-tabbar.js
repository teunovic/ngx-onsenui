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
export class OnsTabbar {
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
export class OnsTab {
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
        const PageLoader = (/** @type {?} */ (ons.PageLoader));
        return new PageLoader(({ page, parent }, done) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXRhYmJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbnNlbnVpLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb25zLXRhYmJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLGdCQUFnQixFQUNoQix3QkFBd0IsRUFFeEIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Qy9CLE1BQU0sT0FBTyxTQUFTOzs7O0lBY3BCLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZOzs7Ozs7Ozs7O1FBRjFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQWEsRUFBRSxPQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7OztZQXJEQyxVQUFVOzs7cUJBa0VULE1BQU0sU0FBQyxPQUFPOzs7Ozs7O0lBWGYsNkJBQXNCOzs7Ozs7Ozs7OztJQVd0QiwyQkFBNkM7Ozs7O0lBRWpDLGdDQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEM3QyxNQUFNLE9BQU8sTUFBTTs7Ozs7OztJQWFqQixZQUFvQixXQUF1QixFQUNqQyxjQUFnQyxFQUNoQyxTQUFtQyxFQUNuQyxLQUFhO1FBSEgsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDakMsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQTBCO1FBQ25DLFVBQUssR0FBTCxLQUFLLENBQVE7UUFmZixtQkFBYyxHQUE2QixJQUFJLENBQUM7UUFnQnRELCtCQUErQjtRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDdkUsQ0FBQzs7Ozs7Ozs7O0lBVkQsSUFBbUIsSUFBSSxDQUFDLGlCQUE0QjtRQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFDMUQsQ0FBQzs7OztJQVVELGlCQUFpQjs7Y0FDVCxVQUFVLEdBQUcsbUJBQUssR0FBRyxDQUFDLFVBQVUsRUFBQTtRQUN0QyxPQUFPLElBQUksVUFBVSxDQUNuQixDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBTSxFQUFFLElBQWMsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTs7c0JBQ1osT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDOztzQkFDdEQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFFeEUsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUMvQjtnQkFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDOztzQkFFakMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxhQUFhO2dCQUMzRCxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsMENBQTBDO2dCQUUzRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7Z0JBQ3pDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7aUJBQzVCO2FBQ0Y7UUFDSCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2FBQ3BCOzs7O1lBakhDLFVBQVU7WUFKVixnQkFBZ0I7WUFDaEIsd0JBQXdCO1lBU3hCLE1BQU07OzttQkFxSEwsS0FBSyxTQUFDLE1BQU07Ozs7Ozs7SUFSYixnQ0FBd0Q7Ozs7O0lBWTVDLDZCQUErQjs7Ozs7SUFDekMsZ0NBQXdDOzs7OztJQUN4QywyQkFBMkM7Ozs7O0lBQzNDLHVCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50UmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdG9yLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIFR5cGUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBvbnMgZnJvbSAnb25zZW51aSc7XG5cbi8qKlxuICogQGVsZW1lbnQgb25zLXRhYmJhclxuICogQGRpcmVjdGl2ZSBPbnNUYWJiYXJcbiAqIEBzZWxlY3RvciBvbnMtdGFiYmFyXG4gKiBAZGVzY3JpcHRpb25cbiAqICAgW2VuXUFuZ3VsYXIgZGlyZWN0aXZlIGZvciBgPG9ucy10YWJiYXI+YCBjb21wb25lbnQuWy9lbl1cbiAqICAgW2phXWA8b25zLXRhYmJhcj5g6KaB57Sg44Gu44Gf44KB44Gu44OH44Kj44Os44Kv44OG44Kj44OW44Gn44GZ44CCWy9qYV1cbiAqIEBleGFtcGxlXG4gKiAgIEBDb21wb25lbnQoe1xuICogICAgIHNlbGVjdG9yOiAnb25zLXBhZ2UnLFxuICogICAgIHRlbXBsYXRlOiBgXG4gKiAgICAgICA8b25zLXRvb2xiYXI+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5QYWdlPC9kaXY+XG4gKiAgICAgICA8L29ucy10b29sYmFyPlxuICogICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4uLi48L2Rpdj5cbiAqICAgICBgXG4gKiAgIH0pXG4gKiAgIGNsYXNzIFBhZ2VDb21wb25lbnQge1xuICogICB9XG4gKlxuICogICBAQ29tcG9uZW50KHtcbiAqICAgICBzZWxlY3RvcjogJ2FwcCcsXG4gKiAgICAgdGVtcGxhdGU6IGBcbiAqICAgICA8b25zLXRhYmJhciBzd2lwZWFibGUgKHN3aXBlKT1cIm9uU3dpcGUoJGV2ZW50KVwiPlxuICogICAgICAgPGRpdiBjbGFzcz1cInRhYmJhcl9fY29udGVudFwiPjwvZGl2PlxuICogICAgICAgPGRpdiBjbGFzcz1cInRhYmJhclwiPlxuICogICAgICAgICA8b25zLXRhYiBsYWJlbD1cIlBhZ2UxXCIgaWNvbj1cImlvbi1ob21lXCIgW3BhZ2VdPVwicGFnZVwiIGFjdGl2ZT48L29ucy10YWI+XG4gKiAgICAgICAgIDxvbnMtdGFiIGxhYmVsPVwiUGFnZTJcIiBpY29uPVwiaW9uLWhlbHBcIiBbcGFnZV09XCJwYWdlXCI+PC9vbnMtdGFiPlxuICogICAgICAgICA8b25zLXRhYiBsYWJlbD1cIlBhZ2UzXCIgaWNvbj1cImlvbi1zdG9wXCIgW3BhZ2VdPVwicGFnZVwiPjwvb25zLXRhYj5cbiAqICAgICAgIDwvZGl2PlxuICogICAgIDwvb25zLXRhYmJhcj5cbiAqICAgICBgXG4gKiAgIH0pXG4gKiAgIGV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICogICAgIHBhZ2UgPSBQYWdlQ29tcG9uZW50XG4gKiBcbiAqICAgICBvblN3aXBlKGV2ZW50KSB7XG4gKiAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gKiAgICAgfVxuICogICB9XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ29ucy10YWJiYXInXG59KVxuZXhwb3J0IGNsYXNzIE9uc1RhYmJhciB7XG4gIHByaXZhdGUgX2VsZW1lbnQ6IGFueTtcblxuICAvKipcbiAgICogQG91dHB1dCBzd2lwZVxuICAgKiBAcGFyYW0gJGV2ZW50XG4gICAqIEBwYXJhbSAkZXZlbnQuaW5kZXhcbiAgICogQHBhcmFtICRldmVudC5vcHRpb25zXG4gICAqIEBkZXNjXG4gICAqICAgW2VuXVRyaWdnZXJzIHdoZW4gdGhlIHRhYmJhciBpcyBzd2lwZWQuWy9lbl1cbiAgICogICBbamFdYDxvbnMtdGFiYmFyPmDjgYzjgrnjg6/jgqTjg5fjgZXjgozjgZ/mmYLjgavnmbrngavjgZfjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgQE91dHB1dCgnc3dpcGUnKSBfc3dpcGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX2VsZW1lbnQub25Td2lwZSA9IChpbmRleDogbnVtYmVyLCBvcHRpb25zOiBhbnkpID0+IHRoaXMuX3N3aXBlLmVtaXQoe2luZGV4LCBvcHRpb25zfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAZWxlbWVudCBvbnMtdGFiXG4gKiBAZGlyZWN0aXZlIE9uc1RhYlxuICogQHNlbGVjdG9yIG9ucy10YWJcbiAqIEBkZXNjcmlwdGlvblxuICogICBbZW5dQW5ndWxhciBkaXJlY3RpdmUgZm9yIGA8b25zLXRhYj5gIGNvbXBvbmVudC5bL2VuXVxuICogICBbamFdYDxvbnMtdGFiPmDopoHntKDjga7jgZ/jgoHjga7jg4fjgqPjg6zjgq/jg4bjgqPjg5bjgafjgZnjgIJbL2phXVxuICogQGV4YW1wbGVcbiAqICAgQENvbXBvbmVudCh7XG4gKiAgICAgc2VsZWN0b3I6ICdvbnMtcGFnZScsXG4gKiAgICAgdGVtcGxhdGU6IGBcbiAqICAgICAgIDxvbnMtdG9vbGJhcj5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlclwiPlBhZ2U8L2Rpdj5cbiAqICAgICAgIDwvb25zLXRvb2xiYXI+XG4gKiAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPi4uLjwvZGl2PlxuICogICAgIGBcbiAqICAgfSlcbiAqICAgY2xhc3MgUGFnZUNvbXBvbmVudCB7XG4gKiAgIH1cbiAqXG4gKiAgIEBDb21wb25lbnQoe1xuICogICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAqICAgICB0ZW1wbGF0ZTogYFxuICogICAgIDxvbnMtdGFiYmFyPlxuICogICAgICAgPGRpdiBjbGFzcz1cInRhYmJhcl9fY29udGVudFwiPjwvZGl2PlxuICogICAgICAgPGRpdiBjbGFzcz1cInRhYmJhclwiPlxuICogICAgICAgICA8b25zLXRhYiBsYWJlbD1cIlBhZ2UxXCIgaWNvbj1cImlvbi1ob21lXCIgW3BhZ2VdPVwicGFnZVwiIGFjdGl2ZT48L29ucy10YWI+XG4gKiAgICAgICAgIDxvbnMtdGFiIGxhYmVsPVwiUGFnZTJcIiBpY29uPVwiaW9uLWhlbHBcIiBbcGFnZV09XCJwYWdlXCI+PC9vbnMtdGFiPlxuICogICAgICAgICA8b25zLXRhYiBsYWJlbD1cIlBhZ2UzXCIgaWNvbj1cImlvbi1zdG9wXCIgW3BhZ2VdPVwicGFnZVwiPjwvb25zLXRhYj5cbiAqICAgICAgIDwvZGl2PlxuICogICAgIDwvb25zLXRhYmJhcj5cbiAqICAgICBgXG4gKiAgIH0pXG4gKiAgIGV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICogICAgIHBhZ2UgPSBQYWdlQ29tcG9uZW50XG4gKiAgIH1cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnb25zLXRhYidcbn0pXG5leHBvcnQgY2xhc3MgT25zVGFiIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcGFnZUNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT4gfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogQGlucHV0IHBhZ2VcbiAgICogQGRlc2NcbiAgICogICBbZW5dU3BlY2lmeSB0aGUgcGFnZSBjb21wb25lbnQgdGhhdCBpcyBkaXNwbGF5ZWQgd2hlbiB0aGUgdGFiIGlzIGFjdGl2ZS5bL2VuXVxuICAgKiAgIFtqYV3oqq3jgb/ovrzjgoDjg5rjg7zjgrjjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgpLmjIflrprjgZfjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgQElucHV0KCdwYWdlJykgc2V0IHBhZ2UocGFnZUNvbXBvbmVudFR5cGU6IFR5cGU8YW55Pikge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYWdlID0gcGFnZUNvbXBvbmVudFR5cGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmUpIHtcbiAgICAvLyBzZXQgdXAgb25zLXRhYidzIHBhZ2UgbG9hZGVyXG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhZ2VMb2FkZXIgPSB0aGlzLl9jcmVhdGVQYWdlTG9hZGVyKCk7XG4gIH1cblxuICBfY3JlYXRlUGFnZUxvYWRlcigpIHtcbiAgICBjb25zdCBQYWdlTG9hZGVyID0gPGFueT5vbnMuUGFnZUxvYWRlcjtcbiAgICByZXR1cm4gbmV3IFBhZ2VMb2FkZXIoXG4gICAgICAoe3BhZ2UsIHBhcmVudH06IGFueSwgZG9uZTogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShwYWdlKTtcbiAgICAgICAgICBjb25zdCBwYWdlQ29tcG9uZW50UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSwgMCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fcGFnZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5fcGFnZUNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3BhZ2VDb21wb25lbnQgPSBwYWdlQ29tcG9uZW50UmVmO1xuXG4gICAgICAgICAgY29uc3QgcGFnZUVsZW1lbnQgPSBwYWdlQ29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHBhZ2VFbGVtZW50KTsgLy8gZGlydHkgZml4IHRvIGluc2VydCBpbiBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgICAgICAgICBkb25lKHBhZ2VFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eSgnX3BhZ2VDb21wb25lbnQnKSkge1xuICAgICAgICAgIGlmICh0aGlzLl9wYWdlQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9wYWdlQ29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX3BhZ2VDb21wb25lbnQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fcGFnZUNvbXBvbmVudCkge1xuICAgICAgdGhpcy5fcGFnZUNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9wYWdlQ29tcG9uZW50ID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuIl19