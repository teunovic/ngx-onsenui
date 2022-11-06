/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Output, HostListener, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
var OnsSwitch = /** @class */ (function () {
    function OnsSwitch(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = function (_) { };
        this._propagateTouched = function () { };
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
    Object.defineProperty(OnsSwitch.prototype, "value", {
        /**
         * @input value
         * @desc
         *   [en]Specify the value of the `<ons-switch>` component.[/en]
         *   [ja]`ons-switch`コンポーネントに設定する値を指定します。[/ja]
         */
        set: /**
         * \@input value
         * @desc
         *   [en]Specify the value of the `<ons-switch>` component.[/en]
         *   [ja]`ons-switch`コンポーネントに設定する値を指定します。[/ja]
         * @param {?} target
         * @return {?}
         */
        function (target) {
            this._element.checked = !!target;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    OnsSwitch.prototype._onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._valueChange.emit(this._element.checked);
        this._propagateChange(this._element.checked);
    };
    /**
     * @return {?}
     */
    OnsSwitch.prototype._onBlur = /**
     * @return {?}
     */
    function () {
        this._propagateTouched();
    };
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    OnsSwitch.prototype.ngOnChanges = /**
     * @param {?} changeRecord
     * @return {?}
     */
    function (changeRecord) {
        /** @type {?} */
        var value = !!((/** @type {?} */ (changeRecord))).value.currentValue;
        this._element.checked = value;
    };
    Object.defineProperty(OnsSwitch.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsSwitch.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OnsSwitch.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._element.removeEventListener('change', this._boundOnChange);
        this._element = null;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    OnsSwitch.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._element.checked = obj;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsSwitch.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsSwitch.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateTouched = fn;
    };
    OnsSwitch.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-switch',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return OnsSwitch; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    OnsSwitch.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OnsSwitch.propDecorators = {
        value: [{ type: Input, args: ['value',] }],
        _valueChange: [{ type: Output, args: ['valueChange',] }],
        _onBlur: [{ type: HostListener, args: ['blur',] }]
    };
    return OnsSwitch;
}());
export { OnsSwitch };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsSwitch.prototype._element;
    /**
     * @type {?}
     * @private
     */
    OnsSwitch.prototype._boundOnChange;
    /**
     * @type {?}
     * @private
     */
    OnsSwitch.prototype._propagateChange;
    /**
     * @type {?}
     * @private
     */
    OnsSwitch.prototype._propagateTouched;
    /**
     * \@output valueChange
     * @desc
     *   [en]Triggers when the value is changed.[/en]
     *   [ja]値が変更された時に発火します。[/ja]
     * @type {?}
     */
    OnsSwitch.prototype._valueChange;
    /**
     * @type {?}
     * @private
     */
    OnsSwitch.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXN3aXRjaC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbnNlbnVpLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb25zLXN3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUlaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7O0FBWXpFO0lBa0NFLG1CQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQXJCbkMscUJBQWdCLEdBQUcsVUFBQyxDQUFNLElBQU8sQ0FBQyxDQUFDO1FBQ25DLHNCQUFpQixHQUFHLGNBQU8sQ0FBQyxDQUFDOzs7Ozs7O1FBa0JkLGlCQUFZLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFHdkYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFqQkQsc0JBQW9CLDRCQUFLO1FBTnpCOzs7OztXQUtHOzs7Ozs7Ozs7UUFDSCxVQUEwQixNQUFlO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7Ozs7O0lBaUJELDZCQUFTOzs7O0lBQVQsVUFBVSxLQUFVO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUdELDJCQUFPOzs7SUFEUDtRQUVFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsK0JBQVc7Ozs7SUFBWCxVQUFZLFlBQTJCOztZQUMvQixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsbUJBQUssWUFBWSxFQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWTtRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVELHNCQUFJLDhCQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBYTs7OztRQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7OztJQUVELCtCQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELDhCQUFVOzs7O0lBQVYsVUFBVyxHQUFRO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELG9DQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxxQ0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUUsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7O2dCQS9FRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxTQUFTLEVBQVQsQ0FBUyxDQUFDOzRCQUN4QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7OztnQkEvQkMsVUFBVTs7O3dCQTRDVCxLQUFLLFNBQUMsT0FBTzsrQkFVYixNQUFNLFNBQUMsYUFBYTswQkFjcEIsWUFBWSxTQUFDLE1BQU07O0lBa0N0QixnQkFBQztDQUFBLEFBaEZELElBZ0ZDO1NBdEVZLFNBQVM7Ozs7OztJQUNwQiw2QkFBc0I7Ozs7O0lBQ3RCLG1DQUFpQzs7Ozs7SUFDakMscUNBQTJDOzs7OztJQUMzQyxzQ0FBcUM7Ozs7Ozs7O0lBa0JyQyxpQ0FBeUY7Ozs7O0lBRTdFLGdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0b3IsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgSG9zdExpc3RlbmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEBlbGVtZW50IG9ucy1zd2l0Y2hcbiAqIEBkaXJlY3RpdmUgT25zU3dpdGNoXG4gKiBAc2VsZWN0b3Igb25zLXN3aXRjaFxuICogQGRlc2NyaXB0aW9uXG4gKiAgIFtlbl1Bbmd1bGFyIGRpcmVjdGl2ZSBmb3IgYDxvbnMtc3dpdGNoPmAgY29tcG9uZW50LlsvZW5dXG4gKiAgIFtqYV1gPG9ucy1zd2l0Y2g+YOimgee0oOOBrkFuZ3VsYXLjg4fjgqPjg6zjgq/jg4bjgqPjg5bjgafjgZnjgIJbL2phXVxuICogQGV4YW1wbGVcbiAqICAgPG9ucy1zd2l0Y2ggWyh2YWx1ZSldPVwidGFyZ2V0XCI+PC9vbnMtc3dpdGNoPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdvbnMtc3dpdGNoJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBPbnNTd2l0Y2gpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE9uc1N3aXRjaCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgX2VsZW1lbnQ6IGFueTtcbiAgcHJpdmF0ZSBfYm91bmRPbkNoYW5nZTogRnVuY3Rpb247XG4gIHByaXZhdGUgX3Byb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcbiAgcHJpdmF0ZSBfcHJvcGFnYXRlVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBAaW5wdXQgdmFsdWVcbiAgICogQGRlc2NcbiAgICogICBbZW5dU3BlY2lmeSB0aGUgdmFsdWUgb2YgdGhlIGA8b25zLXN3aXRjaD5gIGNvbXBvbmVudC5bL2VuXVxuICAgKiAgIFtqYV1gb25zLXN3aXRjaGDjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgavoqK3lrprjgZnjgovlgKTjgpLmjIflrprjgZfjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgQElucHV0KCd2YWx1ZScpIHNldCB2YWx1ZSh0YXJnZXQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lbGVtZW50LmNoZWNrZWQgPSAhIXRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3V0cHV0IHZhbHVlQ2hhbmdlXG4gICAqIEBkZXNjXG4gICAqICAgW2VuXVRyaWdnZXJzIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuWy9lbl1cbiAgICogICBbamFd5YCk44GM5aSJ5pu044GV44KM44Gf5pmC44Gr55m654Gr44GX44G+44GZ44CCWy9qYV1cbiAgICovXG4gIEBPdXRwdXQoJ3ZhbHVlQ2hhbmdlJykgX3ZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX2JvdW5kT25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9ib3VuZE9uQ2hhbmdlKTtcbiAgfVxuXG4gIF9vbkNoYW5nZShldmVudDogYW55KSB7XG4gICAgdGhpcy5fdmFsdWVDaGFuZ2UuZW1pdCh0aGlzLl9lbGVtZW50LmNoZWNrZWQpO1xuICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSh0aGlzLl9lbGVtZW50LmNoZWNrZWQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIF9vbkJsdXIoKSB7XG4gICAgdGhpcy5fcHJvcGFnYXRlVG91Y2hlZCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlUmVjb3JkOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgdmFsdWUgPSAhISg8YW55PmNoYW5nZVJlY29yZCkudmFsdWUuY3VycmVudFZhbHVlO1xuICAgIHRoaXMuX2VsZW1lbnQuY2hlY2tlZCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxuXG4gIGdldCBuYXRpdmVFbGVtZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2JvdW5kT25DaGFuZ2UpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSkge1xuICAgIHRoaXMuX2VsZW1lbnQuY2hlY2tlZCA9IG9iajtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMuIF9wcm9wYWdhdGVUb3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==