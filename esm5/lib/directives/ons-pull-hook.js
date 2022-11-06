/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';
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
export { OnsPullHook };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsPullHook.prototype._element;
    /**
     * \@output action
     * \@param $event
     * \@param $event.done
     * @desc
     *   [en]Triggers when the page is pulled down.[/en]
     *   [ja]`ons-pull-hook`要素のアクションが必要なときに呼び出されます。[/ja]
     * @type {?}
     */
    OnsPullHook.prototype.action;
    /**
     * \@output pull
     * \@param $event
     * \@param $event.ratio
     * \@param $event.options
     * @desc
     *   [en]Triggers whenever the element is pulled.[/en]
     *   [ja]`ons-pull-hook`要素がプルされているときに呼び出されます。[/ja]
     * @type {?}
     */
    OnsPullHook.prototype.pull;
    /**
     * @type {?}
     * @private
     */
    OnsPullHook.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXB1bGwtaG9vay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbnNlbnVpLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb25zLXB1bGwtaG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBRVYsTUFBTSxFQUVOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUR2QjtJQXFDRSxxQkFBb0IsV0FBdUI7UUFBM0MsaUJBSUM7UUFKbUIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7Ozs7Ozs7OztRQXZCakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXFCNUIsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFVBQUMsSUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLE1BQUEsRUFBQyxDQUFDLEVBQXhCLENBQXdCLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsVUFBQyxLQUFhLEVBQUUsT0FBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBQyxDQUFDLEVBQWhDLENBQWdDLENBQUM7SUFDM0YsQ0FBQzs7OztJQUVELGlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs7OztnQkE5REMsVUFBVTs7O3lCQTBFVCxNQUFNO3VCQXFCTixNQUFNOztJQVlULGtCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0E1Q1ksV0FBVzs7Ozs7O0lBQ3RCLCtCQUFzQjs7Ozs7Ozs7OztJQVV0Qiw2QkFBc0M7Ozs7Ozs7Ozs7O0lBcUJ0QywyQkFBb0M7Ozs7O0lBRXhCLGtDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25EZXN0cm95LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQGVsZW1lbnQgb25zLXB1bGwtaG9va1xuICogQGRpcmVjdGl2ZSBPbnNQdWxsSG9va1xuICogQHNlbGVjdG9yIG9ucy1wdWxsLWhvb2tcbiAqIEBkZXNjcmlwdGlvblxuICogICBbZW5dQW5ndWxhciBkaXJlY3RpdmUgZm9yIGA8b25zLXB1bGwtaG9vaz5gIGNvbXBvbmVudC5bL2VuXVxuICogICBbamFdYDxvbnMtcHVsbC1ob29rPmDopoHntKDjga7jgZ/jgoHjga5Bbmd1bGFyMuODh+OCo+ODrOOCr+ODhuOCo+ODluOBp+OBmeOAglsvamFdXG4gKiBAZXhhbXBsZVxuICogICBAQ29tcG9uZW50KHtcbiAqICAgICBzZWxlY3RvcjogJ2FwcCcsXG4gKiAgICAgdGVtcGxhdGU6IGBcbiAqICAgICA8b25zLXBhZ2U+XG4gKiAgICAgICA8b25zLXRvb2xiYXI+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5QdWxsIEhvb2s8L2Rpdj5cbiAqICAgICAgIDwvb25zLXRvb2xiYXI+XG4gKiAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICogICAgICAgICA8b25zLXB1bGwtaG9vayBoZWlnaHQ9XCI2NHB4XCIgdGhyZXNob2xkLWhlaWdodD1cIjEyOHB4XCIgXG4gKiAgICAgICAgICAgKHB1bGwpPVwib25QdWxsKCRldmVudClcIiAoY2hhbmdlc3RhdGUpPVwib25DaGFuZ2VTdGF0ZSgkZXZlbnQpXCIgKGFjdGlvbik9XCJvbkFjdGlvbigkZXZlbnQpXCI+XG4gKiAgICAgICAgICAge3ttZXNzYWdlfX1cbiAqICAgICAgICAgPC9vbnMtcHVsbC1ob29rPlxuICogICAgICAgPC9kaXY+XG4gKiAgICAgPC9vbnMtcGFnZT5cbiAqICAgICBgXG4gKiAgIH0pXG4gKiAgIGV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICogICAgIG1lc3NhZ2U6IHN0cmluZyA9ICdQdWxsIGRvd24gdG8gcmVmcmVzaCc7XG4gKlxuICogICAgIG9uQWN0aW9uKCRldmVudCkge1xuICogICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gKiAgICAgICAgICRldmVudC5kb25lKCk7XG4gKiAgICAgICB9LCAxMDAwKTtcbiAqICAgICB9XG4gKlxuICogICAgIG9uQ2hhbmdlU3RhdGUoJGV2ZW50KSB7XG4gKiAgICAgICBzd2l0Y2ggKCRldmVudC5zdGF0ZSkge1xuICogICAgICAgICBjYXNlICdpbml0aWFsJzpcbiAqICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnUHVsbCBkb3duIHRvIHJlZnJlc2gnO1xuICogICAgICAgICAgIGJyZWFrO1xuICogICAgICAgICBjYXNlICdwcmVhY3Rpb24nOlxuICogICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICdSZWxlYXNlIHRvIHJlZnJlc2gnO1xuICogICAgICAgICAgIGJyZWFrO1xuICogICAgICAgICBjYXNlICdhY3Rpb24nOlxuICogICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICdMb2FkaW5nIGRhdGEuLi4nO1xuICogICAgICAgICAgIGJyZWFrO1xuICogICAgICAgfVxuICogICAgIH1cbiAqIFxuICogICAgIG9uUHVsbCgkZXZlbnQpIHtcbiAqICAgICAgIGNvbnNvbGUubG9nKCRldmVudC5yYXRpbyk7XG4gKiAgICAgfVxuICogXG4gKiAgIH1cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnb25zLXB1bGwtaG9vaydcbn0pXG5leHBvcnQgY2xhc3MgT25zUHVsbEhvb2sgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9lbGVtZW50OiBhbnk7XG5cbiAgLyoqXG4gICAqIEBvdXRwdXQgYWN0aW9uXG4gICAqIEBwYXJhbSAkZXZlbnRcbiAgICogQHBhcmFtICRldmVudC5kb25lXG4gICAqIEBkZXNjXG4gICAqICAgW2VuXVRyaWdnZXJzIHdoZW4gdGhlIHBhZ2UgaXMgcHVsbGVkIGRvd24uWy9lbl1cbiAgICogICBbamFdYG9ucy1wdWxsLWhvb2tg6KaB57Sg44Gu44Ki44Kv44K344On44Oz44GM5b+F6KaB44Gq44Go44GN44Gr5ZG844Gz5Ye644GV44KM44G+44GZ44CCWy9qYV1cbiAgICovXG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEBvdXRwdXQgY2hhbmdlc3RhdGVcbiAgICogQHBhcmFtICRldmVudFxuICAgKiBAcGFyYW0gJGV2ZW50LnN0YXRlXG4gICAqIEBkZXNjXG4gICAqICAgW2VuXVRyaWdnZXJzIHdoZW4gdGhlIHN0YXRlIGlzIGNoYW5nZWQuWy9lbl1cbiAgICogICBbamFdYG9ucy1wdWxsLWhvb2tg6KaB57Sg44Gu54q25oWL44GM5aSJ44KP44Gj44Gf5pmC44Gr5ZG844Gz5Ye644GV44KM44G+44GZ44CCWy9qYV1cbiAgICovXG5cblxuICAvKipcbiAgICogQG91dHB1dCBwdWxsXG4gICAqIEBwYXJhbSAkZXZlbnRcbiAgICogQHBhcmFtICRldmVudC5yYXRpb1xuICAgKiBAcGFyYW0gJGV2ZW50Lm9wdGlvbnNcbiAgICogQGRlc2NcbiAgICogICBbZW5dVHJpZ2dlcnMgd2hlbmV2ZXIgdGhlIGVsZW1lbnQgaXMgcHVsbGVkLlsvZW5dXG4gICAqICAgW2phXWBvbnMtcHVsbC1ob29rYOimgee0oOOBjOODl+ODq+OBleOCjOOBpuOBhOOCi+OBqOOBjeOBq+WRvOOBs+WHuuOBleOCjOOBvuOBmeOAglsvamFdXG4gICAqL1xuICBAT3V0cHV0KCkgcHVsbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5fZWxlbWVudC5vbkFjdGlvbiA9IChkb25lOiBGdW5jdGlvbikgPT4gdGhpcy5hY3Rpb24uZW1pdCh7ZG9uZX0pO1xuICAgIHRoaXMuX2VsZW1lbnQub25QdWxsID0gKHJhdGlvOiBudW1iZXIsIG9wdGlvbnM6IGFueSkgPT4gdGhpcy5wdWxsLmVtaXQoe3JhdGlvLCBvcHRpb25zfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9lbGVtZW50Lm9uQWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgfVxufVxuIl19