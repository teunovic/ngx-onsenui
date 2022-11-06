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
export { OnsSegment };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXNlZ21lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb25zZW51aS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL29ucy1zZWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFFWCxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRHZCO0lBNENFLG9CQUFvQixXQUF1QjtRQUEzQyxpQkFLQztRQUxtQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTs7Ozs7OztRQWZqQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBZ0J2RCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsVUFBQyxLQUFVO1lBQ3RELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVpELHNCQUFhLDhCQUFNO1FBTm5COzs7OztXQUtHOzs7Ozs7Ozs7UUFDSCxVQUFvQixPQUFZO1lBQWhDLGlCQUtDO1lBSkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDcEQsWUFBWSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQXBFLENBQW9FLENBQUMsQ0FBQztZQUN6RixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7OztPQUFBOzs7O0lBU0QsZ0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7O2dCQXZERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzs7O2dCQXZEQyxVQUFVOzs7OEJBMEVULEtBQUs7b0NBUUwsTUFBTTt5QkFRTixLQUFLOztJQW9CUixpQkFBQztDQUFBLEFBekRELElBeURDO1NBdERZLFVBQVU7Ozs7OztJQUNyQiw4QkFBc0I7Ozs7Ozs7O0lBaUJ0QixpQ0FBNkI7Ozs7Ozs7O0lBUTdCLHVDQUF5RDs7Ozs7SUFlN0MsaUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgT25DaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBlbGVtZW50IG9ucy1zZWdtZW50XG4gKiBAZGlyZWN0aXZlIE9uc1NlZ21lbnRcbiAqIEBzZWxlY3RvciBvbnMtc2VnbWVudFxuICogQGRlc2NyaXB0aW9uXG4gKiAgIFtlbl1Bbmd1bGFyIGRpcmVjdGl2ZSBmb3IgYDxvbnMtc2VnbWVudD5gIGNvbXBvbmVudC5bL2VuXVxuICogICBbamFdYDxvbnMtc2VnbWVudD5g6KaB57Sg44GuQW5ndWxhcuODh+OCo+ODrOOCr+ODhuOCo+ODluOBp+OBmeOAglsvamFdXG4gKiBAZXhhbXBsZVxuICogICBAQ29tcG9uZW50KHtcbiAqICAgICBzZWxlY3RvcjogJ2FwcCcsXG4gKiAgICAgdGVtcGxhdGU6IGBcbiAqICAgICAgIDxvbnMtcGFnZT5cbiAqICAgICAgICAgPG9ucy10b29sYmFyPlxuICogICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5cbiAqICAgICAgICAgICAgIDxvbnMtc2VnbWVudCBzdHlsZT1cIndpZHRoOiAyODBweDsgbWFyZ2luLXRvcDogOHB4O1wiIFt0YWJiYXJdPVwidGFiYmFyXCIgKHBvc3RjaGFuZ2UpPVwib25Qb3N0Q2hhbmdlKCRldmVudClcIj5cbiAqICAgICAgICAgICAgICAgPGJ1dHRvbj5QYWdlIDE8L2J1dHRvbj5cbiAqICAgICAgICAgICAgICAgPGJ1dHRvbj5QYWdlIDI8L2J1dHRvbj5cbiAqICAgICAgICAgICAgICAgPGJ1dHRvbj5QYWdlIDM8L2J1dHRvbj5cbiAqICAgICAgICAgICAgIDwvb25zLXNlZ21lbnQ+XG4gKiAgICAgICAgICAgPC9kaXY+XG4gKiAgICAgICAgIDwvb25zLXRvb2xiYXI+XG4gKiAgICAgICAgIDxvbnMtdGFiYmFyICN0YWJiYXI+XG4gKiAgICAgICAgICAgPG9ucy10YWIgW3BhZ2VdPVwicGFnZTFcIiBhY3RpdmU+PC9vbnMtdGFiPlxuICogICAgICAgICAgIDxvbnMtdGFiIFtwYWdlXT1cInBhZ2UyXCI+PC9vbnMtdGFiPlxuICogICAgICAgICAgIDxvbnMtdGFiIFtwYWdlXT1cInBhZ2UzXCI+PC9vbnMtdGFiPlxuICogICAgICAgICA8L29ucy10YWJiYXI+XG4gKiAgICAgICA8L29ucy1wYWdlPlxuICogICAgIGBcbiAqICAgfSlcbiAqICAgZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gKiAgICAgcGFnZTEgPSBQYWdlQ29tcG9uZW50O1xuICogICAgIHBhZ2UyID0gUGFnZUNvbXBvbmVudDtcbiAqICAgICBwYWdlMyA9IFBhZ2VDb21wb25lbnQ7XG4gKlxuICogICAgIGNvbnN0cnVjdG9yKCkge31cbiAqXG4gKiAgICAgb25Qb3N0Q2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAqICAgICAgY29uc29sZS5sb2coJ3Bvc3RjaGFuZ2UgZXZlbnQnLCBldmVudCk7XG4gKiAgICAgfVxuICogICB9XG4gKlxuICogICBAQ29tcG9uZW50KHtcbiAqICAgICBzZWxlY3RvcjogJ29ucy1wYWdlW3RhYl0nLFxuICogICAgIHRlbXBsYXRlOiBgPGgyPlBhZ2U8L2gyPmBcbiAqICAgfSlcbiAqICAgZXhwb3J0IGNsYXNzIFBhZ2VDb21wb25lbnQge1xuICogICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gKiAgIH1cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnb25zLXNlZ21lbnQnXG59KVxuZXhwb3J0IGNsYXNzIE9uc1NlZ21lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9lbGVtZW50OiBhbnk7XG5cbiAgLyoqXG4gICAqIEBvdXRwdXQgcG9zdGNoYW5nZVxuICAgKiBAcGFyYW0gJGV2ZW50XG4gICAqIEBwYXJhbSAkZXZlbnQuaW5kZXhcbiAgICogQGRlc2NcbiAgICogICBbZW5dVHJpZ2dlcnMgd2hlbiB0aGUgaW5kZXggb2YgdGhlIGFjdGl2ZSBidXR0b24gaXMgY2hhbmdlZC5bL2VuXVxuICAgKiAgIFtqYV1gb25zLXNlZ21lbnRg6KaB57Sg44Gu44Ki44Kv44OG44Kj44OW44Gq44Oc44K/44Oz44Gu44Kk44Oz44OH44OD44Kv44K544GM5aSJ44KP44Gj44Gf5pmC44Gr5ZG844Gz5Ye644GV44KM44G+44GZ44CCWy9qYV1cbiAgICovXG5cbiAgLyoqXG4gICAqIEBpbnB1dCBhY3RpdmVJbmRleFxuICAgKiBAZGVzY1xuICAgKiAgIFtlbl1JbnB1dCBpbmRleCBvZiB0aGUgYWN0aXZlIGJ1dHRvbi5bL2VuXVxuICAgKiAgIFtqYV3jgqLjgq/jg4bjgqPjg5bjgarjg5zjgr/jg7Pjga7jgqTjg7Pjg4fjg4Pjgq/jgrnjgpLoqK3lrprjgZfjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgQElucHV0KCkgYWN0aXZlSW5kZXg6IG51bWJlcjtcblxuICAvKipcbiAgICogQG91dHB1dCBhY3RpdmVJbmRleENoYW5nZVxuICAgKiBAZGVzY1xuICAgKiAgIFtlbl1UcmlnZ2VycyB3aGVuIHRoZSBpbmRleCBvZiB0aGUgYWN0aXZlIGJ1dHRvbiBpcyBjaGFuZ2VkLlsvZW5dXG4gICAqICAgW2phXeOCouOCr+ODhuOCo+ODluOBquODnOOCv+ODs+OBruOCpOODs+ODh+ODg+OCr+OCueOBjOWkieWMluOBl+OBn+aZguOBq+eZuueBq+OBl+OBvuOBmeOAglsvamFdXG4gICAqL1xuICBAT3V0cHV0KCkgYWN0aXZlSW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKipcbiAgICogQGlucHV0IHRhYmJhclxuICAgKiBAZGVzY1xuICAgKiAgIFtlbl1UaGUgdGFiYmFyIGNvbXBvbmVudCB0byBcImNvbm5lY3RcIiB0byB0aGUgc2VnbWVudC4gTXVzdCBiZSBpbnNpZGUgdGhlIHNhbWUgcGFnZS4gV29ya3Mgb25seSBkdXJpbmcgaW5pdGlhbGl6YXRpb24uWy9lbl1cbiAgICogICBbamFd44GT44Gu44K744Kw44Oh44Oz44OI44Gr57SQ44Gl44GR44KL44K/44OW44OQ44O844KS5oyH5a6a44GX44G+44GZ44CC44K/44OW44OQ44O844Gv44K744Kw44Oh44Oz44OI44Go5ZCM5LiA44Oa44O844K45YaF44Gr5a2Y5Zyo44GZ44KL5b+F6KaB44GM44GC44KK44G+44GZ44CC5Yid5pyf5YyW5pmC44Gr44Gu44G/5YuV5L2c44GX44G+44GZ44CCWy9qYV1cbiAgICovXG4gIEBJbnB1dCgpIHNldCB0YWJiYXIoX3RhYmJhcjogYW55KSB7XG4gICAgdGhpcy5fZWxlbWVudC5fdGFiYmFyID0gX3RhYmJhcjtcbiAgICB0aGlzLl9lbGVtZW50Ll90YWJiYXIuc2V0QXR0cmlidXRlKCdoaWRlLXRhYnMnLCAnJyk7XG4gICAgc2V0SW1tZWRpYXRlKCgpID0+IHRoaXMuX2VsZW1lbnQuX3NldENoZWNrZWQodGhpcy5fZWxlbWVudC5fdGFiYmFyLmdldEFjdGl2ZVRhYkluZGV4KCkpKTtcbiAgICB0aGlzLl9lbGVtZW50Ll90YWJiYXIuYWRkRXZlbnRMaXN0ZW5lcigncHJlY2hhbmdlJywgdGhpcy5fZWxlbWVudC5fb25UYWJiYXJQcmVDaGFuZ2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9zdGNoYW5nZScsIChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4Q2hhbmdlLmVtaXQoZXZlbnQuaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlSW5kZXgpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QWN0aXZlQnV0dG9uKHRoaXMuYWN0aXZlSW5kZXgpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=