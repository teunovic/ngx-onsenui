/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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
export class OnsSegment {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsSegment.prototype._element;
    /**
     * \@input activeIndex
     * @desc
     *   [en]Input index of the active button.[/en]
     *   [ja]アクティブなボタンのインデックスを設定します。[/ja]
     * @type {?}
     */
    OnsSegment.prototype.activeIndex;
    /**
     * \@output activeIndexChange
     * @desc
     *   [en]Triggers when the index of the active button is changed.[/en]
     *   [ja]アクティブなボタンのインデックスが変化した時に発火します。[/ja]
     * @type {?}
     */
    OnsSegment.prototype.activeIndexChange;
    /**
     * @type {?}
     * @private
     */
    OnsSegment.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXNlZ21lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb25zZW51aS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL29ucy1zZWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFFWCxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRHZCLE1BQU0sT0FBTyxVQUFVOzs7O0lBeUNyQixZQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTs7Ozs7OztRQWZqQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBZ0J2RCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUMxRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7OztJQVpELElBQWEsTUFBTSxDQUFDLE9BQVk7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEQsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDeEYsQ0FBQzs7OztJQVNELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTthQUN4Qjs7OztZQXZEQyxVQUFVOzs7MEJBMEVULEtBQUs7Z0NBUUwsTUFBTTtxQkFRTixLQUFLOzs7Ozs7O0lBakNOLDhCQUFzQjs7Ozs7Ozs7SUFpQnRCLGlDQUE2Qjs7Ozs7Ozs7SUFRN0IsdUNBQXlEOzs7OztJQWU3QyxpQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxuICBPbkNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQGVsZW1lbnQgb25zLXNlZ21lbnRcbiAqIEBkaXJlY3RpdmUgT25zU2VnbWVudFxuICogQHNlbGVjdG9yIG9ucy1zZWdtZW50XG4gKiBAZGVzY3JpcHRpb25cbiAqICAgW2VuXUFuZ3VsYXIgZGlyZWN0aXZlIGZvciBgPG9ucy1zZWdtZW50PmAgY29tcG9uZW50LlsvZW5dXG4gKiAgIFtqYV1gPG9ucy1zZWdtZW50PmDopoHntKDjga5Bbmd1bGFy44OH44Kj44Os44Kv44OG44Kj44OW44Gn44GZ44CCWy9qYV1cbiAqIEBleGFtcGxlXG4gKiAgIEBDb21wb25lbnQoe1xuICogICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAqICAgICB0ZW1wbGF0ZTogYFxuICogICAgICAgPG9ucy1wYWdlPlxuICogICAgICAgICA8b25zLXRvb2xiYXI+XG4gKiAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlclwiPlxuICogICAgICAgICAgICAgPG9ucy1zZWdtZW50IHN0eWxlPVwid2lkdGg6IDI4MHB4OyBtYXJnaW4tdG9wOiA4cHg7XCIgW3RhYmJhcl09XCJ0YWJiYXJcIiAocG9zdGNoYW5nZSk9XCJvblBvc3RDaGFuZ2UoJGV2ZW50KVwiPlxuICogICAgICAgICAgICAgICA8YnV0dG9uPlBhZ2UgMTwvYnV0dG9uPlxuICogICAgICAgICAgICAgICA8YnV0dG9uPlBhZ2UgMjwvYnV0dG9uPlxuICogICAgICAgICAgICAgICA8YnV0dG9uPlBhZ2UgMzwvYnV0dG9uPlxuICogICAgICAgICAgICAgPC9vbnMtc2VnbWVudD5cbiAqICAgICAgICAgICA8L2Rpdj5cbiAqICAgICAgICAgPC9vbnMtdG9vbGJhcj5cbiAqICAgICAgICAgPG9ucy10YWJiYXIgI3RhYmJhcj5cbiAqICAgICAgICAgICA8b25zLXRhYiBbcGFnZV09XCJwYWdlMVwiIGFjdGl2ZT48L29ucy10YWI+XG4gKiAgICAgICAgICAgPG9ucy10YWIgW3BhZ2VdPVwicGFnZTJcIj48L29ucy10YWI+XG4gKiAgICAgICAgICAgPG9ucy10YWIgW3BhZ2VdPVwicGFnZTNcIj48L29ucy10YWI+XG4gKiAgICAgICAgIDwvb25zLXRhYmJhcj5cbiAqICAgICAgIDwvb25zLXBhZ2U+XG4gKiAgICAgYFxuICogICB9KVxuICogICBleHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAqICAgICBwYWdlMSA9IFBhZ2VDb21wb25lbnQ7XG4gKiAgICAgcGFnZTIgPSBQYWdlQ29tcG9uZW50O1xuICogICAgIHBhZ2UzID0gUGFnZUNvbXBvbmVudDtcbiAqXG4gKiAgICAgY29uc3RydWN0b3IoKSB7fVxuICpcbiAqICAgICBvblBvc3RDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICogICAgICBjb25zb2xlLmxvZygncG9zdGNoYW5nZSBldmVudCcsIGV2ZW50KTtcbiAqICAgICB9XG4gKiAgIH1cbiAqXG4gKiAgIEBDb21wb25lbnQoe1xuICogICAgIHNlbGVjdG9yOiAnb25zLXBhZ2VbdGFiXScsXG4gKiAgICAgdGVtcGxhdGU6IGA8aDI+UGFnZTwvaDI+YFxuICogICB9KVxuICogICBleHBvcnQgY2xhc3MgUGFnZUNvbXBvbmVudCB7XG4gKiAgICAgY29uc3RydWN0b3IoKSB7IH1cbiAqICAgfVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdvbnMtc2VnbWVudCdcbn0pXG5leHBvcnQgY2xhc3MgT25zU2VnbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX2VsZW1lbnQ6IGFueTtcblxuICAvKipcbiAgICogQG91dHB1dCBwb3N0Y2hhbmdlXG4gICAqIEBwYXJhbSAkZXZlbnRcbiAgICogQHBhcmFtICRldmVudC5pbmRleFxuICAgKiBAZGVzY1xuICAgKiAgIFtlbl1UcmlnZ2VycyB3aGVuIHRoZSBpbmRleCBvZiB0aGUgYWN0aXZlIGJ1dHRvbiBpcyBjaGFuZ2VkLlsvZW5dXG4gICAqICAgW2phXWBvbnMtc2VnbWVudGDopoHntKDjga7jgqLjgq/jg4bjgqPjg5bjgarjg5zjgr/jg7Pjga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgYzlpInjgo/jgaPjgZ/mmYLjgavlkbzjgbPlh7rjgZXjgozjgb7jgZnjgIJbL2phXVxuICAgKi9cblxuICAvKipcbiAgICogQGlucHV0IGFjdGl2ZUluZGV4XG4gICAqIEBkZXNjXG4gICAqICAgW2VuXUlucHV0IGluZGV4IG9mIHRoZSBhY3RpdmUgYnV0dG9uLlsvZW5dXG4gICAqICAgW2phXeOCouOCr+ODhuOCo+ODluOBquODnOOCv+ODs+OBruOCpOODs+ODh+ODg+OCr+OCueOCkuioreWumuOBl+OBvuOBmeOAglsvamFdXG4gICAqL1xuICBASW5wdXQoKSBhY3RpdmVJbmRleDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBAb3V0cHV0IGFjdGl2ZUluZGV4Q2hhbmdlXG4gICAqIEBkZXNjXG4gICAqICAgW2VuXVRyaWdnZXJzIHdoZW4gdGhlIGluZGV4IG9mIHRoZSBhY3RpdmUgYnV0dG9uIGlzIGNoYW5nZWQuWy9lbl1cbiAgICogICBbamFd44Ki44Kv44OG44Kj44OW44Gq44Oc44K/44Oz44Gu44Kk44Oz44OH44OD44Kv44K544GM5aSJ5YyW44GX44Gf5pmC44Gr55m654Gr44GX44G+44GZ44CCWy9qYV1cbiAgICovXG4gIEBPdXRwdXQoKSBhY3RpdmVJbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIC8qKlxuICAgKiBAaW5wdXQgdGFiYmFyXG4gICAqIEBkZXNjXG4gICAqICAgW2VuXVRoZSB0YWJiYXIgY29tcG9uZW50IHRvIFwiY29ubmVjdFwiIHRvIHRoZSBzZWdtZW50LiBNdXN0IGJlIGluc2lkZSB0aGUgc2FtZSBwYWdlLiBXb3JrcyBvbmx5IGR1cmluZyBpbml0aWFsaXphdGlvbi5bL2VuXVxuICAgKiAgIFtqYV3jgZPjga7jgrvjgrDjg6Hjg7Pjg4jjgavntJDjgaXjgZHjgovjgr/jg5bjg5Djg7zjgpLmjIflrprjgZfjgb7jgZnjgILjgr/jg5bjg5Djg7zjga/jgrvjgrDjg6Hjg7Pjg4jjgajlkIzkuIDjg5rjg7zjgrjlhoXjgavlrZjlnKjjgZnjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgILliJ3mnJ/ljJbmmYLjgavjga7jgb/li5XkvZzjgZfjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgQElucHV0KCkgc2V0IHRhYmJhcihfdGFiYmFyOiBhbnkpIHtcbiAgICB0aGlzLl9lbGVtZW50Ll90YWJiYXIgPSBfdGFiYmFyO1xuICAgIHRoaXMuX2VsZW1lbnQuX3RhYmJhci5zZXRBdHRyaWJ1dGUoJ2hpZGUtdGFicycsICcnKTtcbiAgICBzZXRJbW1lZGlhdGUoKCkgPT4gdGhpcy5fZWxlbWVudC5fc2V0Q2hlY2tlZCh0aGlzLl9lbGVtZW50Ll90YWJiYXIuZ2V0QWN0aXZlVGFiSW5kZXgoKSkpO1xuICAgIHRoaXMuX2VsZW1lbnQuX3RhYmJhci5hZGRFdmVudExpc3RlbmVyKCdwcmVjaGFuZ2UnLCB0aGlzLl9lbGVtZW50Ll9vblRhYmJhclByZUNoYW5nZSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwb3N0Y2hhbmdlJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXhDaGFuZ2UuZW1pdChldmVudC5pbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVJbmRleCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBY3RpdmVCdXR0b24odGhpcy5hY3RpdmVJbmRleCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==