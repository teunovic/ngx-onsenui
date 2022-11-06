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
export class OnsRange {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = (_) => { };
        this._propagateTouched = () => { };
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
    _onChange(event) {
        this._valueChange.emit(this._element.value);
        this._propagateChange(this._element.value);
    }
    /**
     * @return {?}
     */
    _onBlur() {
        this._propagateTouched();
    }
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    ngOnChanges(changeRecord) {
        /** @type {?} */
        const value = changeRecord['_value'].currentValue;
        this._element.value = value;
    }
    /**
     * @return {?}
     */
    get element() {
        return this._element;
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this._element;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._element.removeEventListener('input', this._boundOnChange);
        this._element = null;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this._element.value = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._propagateTouched = fn;
    }
}
OnsRange.decorators = [
    { type: Directive, args: [{
                selector: 'ons-range',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => OnsRange),
                        multi: true,
                    }
                ]
            },] }
];
/** @nocollapse */
OnsRange.ctorParameters = () => [
    { type: ElementRef }
];
OnsRange.propDecorators = {
    _value: [{ type: Input, args: ['value',] }],
    _valueChange: [{ type: Output, args: ['valueChange',] }],
    _onBlur: [{ type: HostListener, args: ['blur',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXJhbmdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9uc2VudWkvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9vbnMtcmFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFJWixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7OztBQXNCekUsTUFBTSxPQUFPLFFBQVE7Ozs7SUFzQm5CLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBbkJuQyxxQkFBZ0IsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLHNCQUFpQixHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQzs7Ozs7OztRQWdCZCxpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBR3JGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBRTFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFVO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUdELE9BQU87UUFDTCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxZQUE0Qzs7Y0FDaEQsS0FBSyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBUTtRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBRSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7O1lBOUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQUN2QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzs7O1lBL0JDLFVBQVU7OztxQkE0Q1QsS0FBSyxTQUFDLE9BQU87MkJBUWIsTUFBTSxTQUFDLGFBQWE7c0JBY3BCLFlBQVksU0FBQyxNQUFNOzs7Ozs7O0lBakNwQiw0QkFBc0I7Ozs7O0lBQ3RCLGtDQUFpQzs7Ozs7SUFDakMsb0NBQTJDOzs7OztJQUMzQyxxQ0FBcUM7Ozs7Ozs7O0lBUXJDLDBCQUErQjs7Ozs7Ozs7SUFRL0IsZ0NBQXVGOzs7OztJQUUzRSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEluamVjdG9yLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEBlbGVtZW50IG9ucy1yYW5nZVxuICogQGRpcmVjdGl2ZSBPbnNSYW5nZVxuICogQHNlbGVjdG9yIG9ucy1yYW5nZVxuICogQGRlc2NyaXB0aW9uXG4gKiAgIFtlbl1Bbmd1bGFyIGRpcmVjdGl2ZSBmb3IgYDxvbnMtcmFuZ2U+YCBjb21wb25lbnQuWy9lbl1cbiAqICAgW2phXWA8b25zLXJhbmdlPmDopoHntKDjga5Bbmd1bGFy44OH44Kj44Os44Kv44OG44Kj44OW44Gn44GZ44CCWy9qYV1cbiAqIEBleGFtcGxlXG4gKiAgIDxvbnMtcmFuZ2UgWyh2YWx1ZSldPVwiZm9vXCI+PC9vbnMtcmFuZ2U+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ29ucy1yYW5nZScsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gT25zUmFuZ2UpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE9uc1JhbmdlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfZWxlbWVudDogYW55O1xuICBwcml2YXRlIF9ib3VuZE9uQ2hhbmdlOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSBfcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICBwcml2YXRlIF9wcm9wYWdhdGVUb3VjaGVkID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIEBpbnB1dCB2YWx1ZVxuICAgKiBAZGVzY1xuICAgKiAgIFtlbl1JbnB1dCB2YWx1ZSBvZiB0aGUgYDxvbnMtcmFuZ2U+YCBlbGVtZW50Li5bL2VuXVxuICAgKiAgIFtqYV1gb25zLXJhbmdlYOimgee0oOOBq+WvvuOBmeOCi+WFpeWKm+WApOOCkuaMh+WumuOBl+OBvuOBmeOAglsvamFdXG4gICAqL1xuICBASW5wdXQoJ3ZhbHVlJykgX3ZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEBvdXRwdXQgdmFsdWVDaGFuZ2VcbiAgICogQGRlc2NcbiAgICogICBbZW5dVHJpZ2dlcnMgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5bL2VuXVxuICAgKiAgIFtqYV3lgKTjgYzlpInmm7TjgZXjgozjgZ/mmYLjgavnmbrngavjgZfjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgQE91dHB1dCgndmFsdWVDaGFuZ2UnKSBfdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX2JvdW5kT25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2JvdW5kT25DaGFuZ2UpO1xuICB9XG5cbiAgX29uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZUNoYW5nZS5lbWl0KHRoaXMuX2VsZW1lbnQudmFsdWUpO1xuICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSh0aGlzLl9lbGVtZW50LnZhbHVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBfb25CbHVyKCkge1xuICAgIHRoaXMuX3Byb3BhZ2F0ZVRvdWNoZWQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZVJlY29yZDoge1trZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZTt9KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjaGFuZ2VSZWNvcmRbJ192YWx1ZSddLmN1cnJlbnRWYWx1ZTtcbiAgICB0aGlzLl9lbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9ib3VuZE9uQ2hhbmdlKTtcblxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSkge1xuICAgIHRoaXMuX2VsZW1lbnQudmFsdWUgPSBvYmo7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy4gX3Byb3BhZ2F0ZVRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19