/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Output, HostListener, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * \@element ons-search-input
 * \@directive OnsSearchInput
 * \@selector ons-search-input
 * \@description
 *   [en]Angular directive for `<ons-search-input>` component.[/en]
 *   [ja]`<ons-search-input>`要素のAngularディレクティブです。[/ja]
 * \@example
 *   <ons-search-input [(value)]="value"></ons-search-input>
 */
var OnsSearchInput = /** @class */ (function () {
    function OnsSearchInput(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = function (_) { };
        this._propagateTouched = function () { };
        /**
         * \@output valueChange
         * @desc
         *   [en]Triggers when the value is changed.[/en]
         *   [ja]内部の`input`要素の値が変更された時に発火します。[/ja]
         */
        this._valueChange = new EventEmitter();
        this._boundOnChange = this._onChange.bind(this);
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('input', this._boundOnChange);
    }
    /**
     * @return {?}
     */
    OnsSearchInput.prototype._onBlur = /**
     * @return {?}
     */
    function () {
        this._propagateTouched();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    OnsSearchInput.prototype._onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._valueChange.emit(this._element.value);
        this._propagateChange(this._element.value);
    };
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    OnsSearchInput.prototype.ngOnChanges = /**
     * @param {?} changeRecord
     * @return {?}
     */
    function (changeRecord) {
        /** @type {?} */
        var value = changeRecord['_value'].currentValue;
        if (this._element.value !== value) {
            this._element.value = value;
        }
    };
    Object.defineProperty(OnsSearchInput.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsSearchInput.prototype, "nativeElement", {
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
    OnsSearchInput.prototype.ngOnDestroy = /**
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
    OnsSearchInput.prototype.writeValue = /**
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
    OnsSearchInput.prototype.registerOnChange = /**
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
    OnsSearchInput.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateTouched = fn;
    };
    OnsSearchInput.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-search-input',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return OnsSearchInput; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    OnsSearchInput.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OnsSearchInput.propDecorators = {
        _value: [{ type: Input, args: ['value',] }],
        _valueChange: [{ type: Output, args: ['valueChange',] }],
        _onBlur: [{ type: HostListener, args: ['blur',] }]
    };
    return OnsSearchInput;
}());
export { OnsSearchInput };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsSearchInput.prototype._element;
    /**
     * @type {?}
     * @private
     */
    OnsSearchInput.prototype._boundOnChange;
    /**
     * @type {?}
     * @private
     */
    OnsSearchInput.prototype._propagateChange;
    /**
     * @type {?}
     * @private
     */
    OnsSearchInput.prototype._propagateTouched;
    /**
     * \@input value
     * @desc
     *   [en]Input value for the internal `<input>` element.[/en]
     *   [ja]内部の`input`要素に対する入力値を設定します。[/ja]
     * @type {?}
     */
    OnsSearchInput.prototype._value;
    /**
     * \@output valueChange
     * @desc
     *   [en]Triggers when the value is changed.[/en]
     *   [ja]内部の`input`要素の値が変更された時に発火します。[/ja]
     * @type {?}
     */
    OnsSearchInput.prototype._valueChange;
    /**
     * @type {?}
     * @private
     */
    OnsSearchInput.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXNlYXJjaC1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbnNlbnVpLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb25zLXNlYXJjaC1pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUlaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7O0FBWXpFO0lBZ0NFLHdCQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQW5CbkMscUJBQWdCLEdBQUcsVUFBQyxDQUFNLElBQU8sQ0FBQyxDQUFDO1FBQ25DLHNCQUFpQixHQUFHLGNBQU8sQ0FBQyxDQUFDOzs7Ozs7O1FBZ0JkLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHckYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFHRCxnQ0FBTzs7O0lBRFA7UUFFRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELGtDQUFTOzs7O0lBQVQsVUFBVSxLQUFVO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxvQ0FBVzs7OztJQUFYLFVBQVksWUFBNEM7O1lBQ2hELEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWTtRQUNqRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsc0JBQUksbUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsbUNBQVU7Ozs7SUFBVixVQUFXLEdBQVE7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQseUNBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQU87UUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELDBDQUFpQjs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3ZCLElBQUksQ0FBRSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Z0JBaEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsY0FBYyxFQUFkLENBQWMsQ0FBQzs0QkFDN0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7Ozs7Z0JBL0JDLFVBQVU7Ozt5QkE0Q1QsS0FBSyxTQUFDLE9BQU87K0JBUWIsTUFBTSxTQUFDLGFBQWE7MEJBU3BCLFlBQVksU0FBQyxNQUFNOztJQTBDdEIscUJBQUM7Q0FBQSxBQWpGRCxJQWlGQztTQXZFWSxjQUFjOzs7Ozs7SUFDekIsa0NBQXNCOzs7OztJQUN0Qix3Q0FBaUM7Ozs7O0lBQ2pDLDBDQUEyQzs7Ozs7SUFDM0MsMkNBQXFDOzs7Ozs7OztJQVFyQyxnQ0FBK0I7Ozs7Ozs7O0lBUS9CLHNDQUF1Rjs7Ozs7SUFFM0UscUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3RvcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFNpbXBsZUNoYW5nZSxcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAZWxlbWVudCBvbnMtc2VhcmNoLWlucHV0XG4gKiBAZGlyZWN0aXZlIE9uc1NlYXJjaElucHV0XG4gKiBAc2VsZWN0b3Igb25zLXNlYXJjaC1pbnB1dFxuICogQGRlc2NyaXB0aW9uXG4gKiAgIFtlbl1Bbmd1bGFyIGRpcmVjdGl2ZSBmb3IgYDxvbnMtc2VhcmNoLWlucHV0PmAgY29tcG9uZW50LlsvZW5dXG4gKiAgIFtqYV1gPG9ucy1zZWFyY2gtaW5wdXQ+YOimgee0oOOBrkFuZ3VsYXLjg4fjgqPjg6zjgq/jg4bjgqPjg5bjgafjgZnjgIJbL2phXVxuICogQGV4YW1wbGVcbiAqICAgPG9ucy1zZWFyY2gtaW5wdXQgWyh2YWx1ZSldPVwidmFsdWVcIj48L29ucy1zZWFyY2gtaW5wdXQ+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ29ucy1zZWFyY2gtaW5wdXQnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE9uc1NlYXJjaElucHV0KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBPbnNTZWFyY2hJbnB1dCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgX2VsZW1lbnQ6IGFueTtcbiAgcHJpdmF0ZSBfYm91bmRPbkNoYW5nZTogRnVuY3Rpb247XG4gIHByaXZhdGUgX3Byb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcbiAgcHJpdmF0ZSBfcHJvcGFnYXRlVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBAaW5wdXQgdmFsdWVcbiAgICogQGRlc2NcbiAgICogICBbZW5dSW5wdXQgdmFsdWUgZm9yIHRoZSBpbnRlcm5hbCBgPGlucHV0PmAgZWxlbWVudC5bL2VuXVxuICAgKiAgIFtqYV3lhoXpg6jjga5gaW5wdXRg6KaB57Sg44Gr5a++44GZ44KL5YWl5Yqb5YCk44KS6Kit5a6a44GX44G+44GZ44CCWy9qYV1cbiAgICovXG4gIEBJbnB1dCgndmFsdWUnKSBfdmFsdWU6IHN0cmluZztcblxuICAvKipcbiAgICogQG91dHB1dCB2YWx1ZUNoYW5nZVxuICAgKiBAZGVzY1xuICAgKiAgIFtlbl1UcmlnZ2VycyB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkLlsvZW5dXG4gICAqICAgW2phXeWGhemDqOOBrmBpbnB1dGDopoHntKDjga7lgKTjgYzlpInmm7TjgZXjgozjgZ/mmYLjgavnmbrngavjgZfjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgQE91dHB1dCgndmFsdWVDaGFuZ2UnKSBfdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX2JvdW5kT25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2JvdW5kT25DaGFuZ2UpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIF9vbkJsdXIoKSB7XG4gICAgdGhpcy5fcHJvcGFnYXRlVG91Y2hlZCgpO1xuICB9XG5cbiAgX29uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZUNoYW5nZS5lbWl0KHRoaXMuX2VsZW1lbnQudmFsdWUpO1xuICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSh0aGlzLl9lbGVtZW50LnZhbHVlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZVJlY29yZDoge1trZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZTt9KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjaGFuZ2VSZWNvcmRbJ192YWx1ZSddLmN1cnJlbnRWYWx1ZTtcbiAgICBpZiAodGhpcy5fZWxlbWVudC52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgZWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9ib3VuZE9uQ2hhbmdlKTtcblxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSkge1xuICAgIHRoaXMuX2VsZW1lbnQudmFsdWUgPSBvYmo7XG4gIH1cbiBcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG4gXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLiBfcHJvcGFnYXRlVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=