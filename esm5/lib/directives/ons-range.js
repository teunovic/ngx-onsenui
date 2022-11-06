/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Output, HostListener, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * \@element ons-range
 * \@directive OnsRange
 * \@selector ons-range
 * \@description
 *   [en]Angular directive for `<ons-range>` component.[/en]
 *   [ja]`<ons-range>`要素のAngularディレクティブです。[/ja]
 * \@example
 *   <ons-range [(value)]="foo"></ons-range>
 */
var OnsRange = /** @class */ (function () {
    function OnsRange(_elementRef) {
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
        this._element.addEventListener('input', this._boundOnChange);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    OnsRange.prototype._onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._valueChange.emit(this._element.value);
        this._propagateChange(this._element.value);
    };
    /**
     * @return {?}
     */
    OnsRange.prototype._onBlur = /**
     * @return {?}
     */
    function () {
        this._propagateTouched();
    };
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    OnsRange.prototype.ngOnChanges = /**
     * @param {?} changeRecord
     * @return {?}
     */
    function (changeRecord) {
        /** @type {?} */
        var value = changeRecord['_value'].currentValue;
        this._element.value = value;
    };
    Object.defineProperty(OnsRange.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsRange.prototype, "nativeElement", {
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
    OnsRange.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._element.removeEventListener('input', this._boundOnChange);
        this._element = null;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    OnsRange.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._element.value = obj;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsRange.prototype.registerOnChange = /**
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
    OnsRange.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateTouched = fn;
    };
    OnsRange.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-range',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return OnsRange; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    OnsRange.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OnsRange.propDecorators = {
        _value: [{ type: Input, args: ['value',] }],
        _valueChange: [{ type: Output, args: ['valueChange',] }],
        _onBlur: [{ type: HostListener, args: ['blur',] }]
    };
    return OnsRange;
}());
export { OnsRange };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsRange.prototype._element;
    /**
     * @type {?}
     * @private
     */
    OnsRange.prototype._boundOnChange;
    /**
     * @type {?}
     * @private
     */
    OnsRange.prototype._propagateChange;
    /**
     * @type {?}
     * @private
     */
    OnsRange.prototype._propagateTouched;
    /**
     * \@input value
     * @desc
     *   [en]Input value of the `<ons-range>` element..[/en]
     *   [ja]`ons-range`要素に対する入力値を指定します。[/ja]
     * @type {?}
     */
    OnsRange.prototype._value;
    /**
     * \@output valueChange
     * @desc
     *   [en]Triggers when the value is changed.[/en]
     *   [ja]値が変更された時に発火します。[/ja]
     * @type {?}
     */
    OnsRange.prototype._valueChange;
    /**
     * @type {?}
     * @private
     */
    OnsRange.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXJhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9uc2VudWkvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9vbnMtcmFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFJWixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7OztBQVl6RTtJQWdDRSxrQkFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFuQm5DLHFCQUFnQixHQUFHLFVBQUMsQ0FBTSxJQUFPLENBQUMsQ0FBQztRQUNuQyxzQkFBaUIsR0FBRyxjQUFPLENBQUMsQ0FBQzs7Ozs7OztRQWdCZCxpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBR3JGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBRTFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELDRCQUFTOzs7O0lBQVQsVUFBVSxLQUFVO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUdELDBCQUFPOzs7SUFEUDtRQUVFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsOEJBQVc7Ozs7SUFBWCxVQUFZLFlBQTRDOztZQUNoRCxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVk7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQkFBSSw2QkFBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7Ozs7SUFFRCw4QkFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCw2QkFBVTs7OztJQUFWLFVBQVcsR0FBUTtRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxtQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsb0NBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFFLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUMvQixDQUFDOztnQkE5RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQzs0QkFDdkMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7Ozs7Z0JBL0JDLFVBQVU7Ozt5QkE0Q1QsS0FBSyxTQUFDLE9BQU87K0JBUWIsTUFBTSxTQUFDLGFBQWE7MEJBY3BCLFlBQVksU0FBQyxNQUFNOztJQW1DdEIsZUFBQztDQUFBLEFBL0VELElBK0VDO1NBckVZLFFBQVE7Ozs7OztJQUNuQiw0QkFBc0I7Ozs7O0lBQ3RCLGtDQUFpQzs7Ozs7SUFDakMsb0NBQTJDOzs7OztJQUMzQyxxQ0FBcUM7Ozs7Ozs7O0lBUXJDLDBCQUErQjs7Ozs7Ozs7SUFRL0IsZ0NBQXVGOzs7OztJQUUzRSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEluamVjdG9yLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEBlbGVtZW50IG9ucy1yYW5nZVxuICogQGRpcmVjdGl2ZSBPbnNSYW5nZVxuICogQHNlbGVjdG9yIG9ucy1yYW5nZVxuICogQGRlc2NyaXB0aW9uXG4gKiAgIFtlbl1Bbmd1bGFyIGRpcmVjdGl2ZSBmb3IgYDxvbnMtcmFuZ2U+YCBjb21wb25lbnQuWy9lbl1cbiAqICAgW2phXWA8b25zLXJhbmdlPmDopoHntKDjga5Bbmd1bGFy44OH44Kj44Os44Kv44OG44Kj44OW44Gn44GZ44CCWy9qYV1cbiAqIEBleGFtcGxlXG4gKiAgIDxvbnMtcmFuZ2UgWyh2YWx1ZSldPVwiZm9vXCI+PC9vbnMtcmFuZ2U+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ29ucy1yYW5nZScsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gT25zUmFuZ2UpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE9uc1JhbmdlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfZWxlbWVudDogYW55O1xuICBwcml2YXRlIF9ib3VuZE9uQ2hhbmdlOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSBfcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICBwcml2YXRlIF9wcm9wYWdhdGVUb3VjaGVkID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIEBpbnB1dCB2YWx1ZVxuICAgKiBAZGVzY1xuICAgKiAgIFtlbl1JbnB1dCB2YWx1ZSBvZiB0aGUgYDxvbnMtcmFuZ2U+YCBlbGVtZW50Li5bL2VuXVxuICAgKiAgIFtqYV1gb25zLXJhbmdlYOimgee0oOOBq+WvvuOBmeOCi+WFpeWKm+WApOOCkuaMh+WumuOBl+OBvuOBmeOAglsvamFdXG4gICAqL1xuICBASW5wdXQoJ3ZhbHVlJykgX3ZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBvdXRwdXQgdmFsdWVDaGFuZ2VcbiAgICogQGRlc2NcbiAgICogICBbZW5dVHJpZ2dlcnMgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5bL2VuXVxuICAgKiAgIFtqYV3lgKTjgYzlpInmm7TjgZXjgozjgZ/mmYLjgavnmbrngavjgZfjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgQE91dHB1dCgndmFsdWVDaGFuZ2UnKSBfdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX2JvdW5kT25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2JvdW5kT25DaGFuZ2UpO1xuICB9XG5cbiAgX29uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZUNoYW5nZS5lbWl0KHRoaXMuX2VsZW1lbnQudmFsdWUpO1xuICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSh0aGlzLl9lbGVtZW50LnZhbHVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBfb25CbHVyKCkge1xuICAgIHRoaXMuX3Byb3BhZ2F0ZVRvdWNoZWQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZVJlY29yZDoge1trZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZTt9KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjaGFuZ2VSZWNvcmRbJ192YWx1ZSddLmN1cnJlbnRWYWx1ZTtcbiAgICB0aGlzLl9lbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9ib3VuZE9uQ2hhbmdlKTtcblxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSkge1xuICAgIHRoaXMuX2VsZW1lbnQudmFsdWUgPSBvYmo7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy4gX3Byb3BhZ2F0ZVRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19