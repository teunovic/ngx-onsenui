/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Output, HostListener, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * \@element ons-input
 * \@directive OnsInput
 * \@selector ons-input
 * \@description
 *   [en]Angular directive for `<ons-input>` component.[/en]
 *   [ja]`<ons-input>`要素のAngularディレクティブです。[/ja]
 * \@example
 *   <ons-input [(value)]="value"></ons-input>
 */
var OnsInput = /** @class */ (function () {
    function OnsInput(_elementRef) {
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
     * @param {?} event
     * @return {?}
     */
    OnsInput.prototype._onChange = /**
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
    OnsInput.prototype._onBlur = /**
     * @return {?}
     */
    function () {
        this._propagateTouched();
    };
    /**
     * @param {?} changeRecord
     * @return {?}
     */
    OnsInput.prototype.ngOnChanges = /**
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
    Object.defineProperty(OnsInput.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsInput.prototype, "nativeElement", {
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
    OnsInput.prototype.ngOnDestroy = /**
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
    OnsInput.prototype.writeValue = /**
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
    OnsInput.prototype.registerOnChange = /**
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
    OnsInput.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateTouched = fn;
    };
    OnsInput.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-input',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return OnsInput; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    OnsInput.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OnsInput.propDecorators = {
        _value: [{ type: Input, args: ['value',] }],
        _valueChange: [{ type: Output, args: ['valueChange',] }],
        _onBlur: [{ type: HostListener, args: ['blur',] }]
    };
    return OnsInput;
}());
export { OnsInput };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsInput.prototype._element;
    /**
     * @type {?}
     * @private
     */
    OnsInput.prototype._boundOnChange;
    /**
     * @type {?}
     * @private
     */
    OnsInput.prototype._propagateChange;
    /**
     * @type {?}
     * @private
     */
    OnsInput.prototype._propagateTouched;
    /**
     * \@input value
     * @desc
     *   [en]Input value for the internal `<input>` element.[/en]
     *   [ja]内部の`input`要素に対する入力値を設定します。[/ja]
     * @type {?}
     */
    OnsInput.prototype._value;
    /**
     * \@output valueChange
     * @desc
     *   [en]Triggers when the value is changed.[/en]
     *   [ja]内部の`input`要素の値が変更された時に発火します。[/ja]
     * @type {?}
     */
    OnsInput.prototype._valueChange;
    /**
     * @type {?}
     * @private
     */
    OnsInput.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLWlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9uc2VudWkvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9vbnMtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFJWixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7OztBQVl6RTtJQWdDRSxrQkFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFuQm5DLHFCQUFnQixHQUFHLFVBQUMsQ0FBTSxJQUFPLENBQUMsQ0FBQztRQUNuQyxzQkFBaUIsR0FBRyxjQUFPLENBQUMsQ0FBQzs7Ozs7OztRQWdCZCxpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBR3JGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBRTFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELDRCQUFTOzs7O0lBQVQsVUFBVSxLQUFVO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUdELDBCQUFPOzs7SUFEUDtRQUVFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsOEJBQVc7Ozs7SUFBWCxVQUFZLFlBQTRDOztZQUNoRCxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVk7UUFDakQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELHNCQUFJLDZCQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBYTs7OztRQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7OztJQUVELDhCQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELDZCQUFVOzs7O0lBQVYsVUFBVyxHQUFRO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELG1DQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxvQ0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUUsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7O2dCQWhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxRQUFRLEVBQVIsQ0FBUSxDQUFDOzRCQUN2QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7OztnQkEvQkMsVUFBVTs7O3lCQTRDVCxLQUFLLFNBQUMsT0FBTzsrQkFRYixNQUFNLFNBQUMsYUFBYTswQkFjcEIsWUFBWSxTQUFDLE1BQU07O0lBcUN0QixlQUFDO0NBQUEsQUFqRkQsSUFpRkM7U0F2RVksUUFBUTs7Ozs7O0lBQ25CLDRCQUFzQjs7Ozs7SUFDdEIsa0NBQWlDOzs7OztJQUNqQyxvQ0FBMkM7Ozs7O0lBQzNDLHFDQUFxQzs7Ozs7Ozs7SUFRckMsMEJBQStCOzs7Ozs7OztJQVEvQixnQ0FBdUY7Ozs7O0lBRTNFLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0b3IsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgSG9zdExpc3RlbmVyLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBTaW1wbGVDaGFuZ2UsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQGVsZW1lbnQgb25zLWlucHV0XG4gKiBAZGlyZWN0aXZlIE9uc0lucHV0XG4gKiBAc2VsZWN0b3Igb25zLWlucHV0XG4gKiBAZGVzY3JpcHRpb25cbiAqICAgW2VuXUFuZ3VsYXIgZGlyZWN0aXZlIGZvciBgPG9ucy1pbnB1dD5gIGNvbXBvbmVudC5bL2VuXVxuICogICBbamFdYDxvbnMtaW5wdXQ+YOimgee0oOOBrkFuZ3VsYXLjg4fjgqPjg6zjgq/jg4bjgqPjg5bjgafjgZnjgIJbL2phXVxuICogQGV4YW1wbGVcbiAqICAgPG9ucy1pbnB1dCBbKHZhbHVlKV09XCJ2YWx1ZVwiPjwvb25zLWlucHV0PlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdvbnMtaW5wdXQnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE9uc0lucHV0KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBPbnNJbnB1dCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgX2VsZW1lbnQ6IGFueTtcbiAgcHJpdmF0ZSBfYm91bmRPbkNoYW5nZTogRnVuY3Rpb247XG4gIHByaXZhdGUgX3Byb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcbiAgcHJpdmF0ZSBfcHJvcGFnYXRlVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBAaW5wdXQgdmFsdWVcbiAgICogQGRlc2NcbiAgICogICBbZW5dSW5wdXQgdmFsdWUgZm9yIHRoZSBpbnRlcm5hbCBgPGlucHV0PmAgZWxlbWVudC5bL2VuXVxuICAgKiAgIFtqYV3lhoXpg6jjga5gaW5wdXRg6KaB57Sg44Gr5a++44GZ44KL5YWl5Yqb5YCk44KS6Kit5a6a44GX44G+44GZ44CCWy9qYV1cbiAgICovXG4gIEBJbnB1dCgndmFsdWUnKSBfdmFsdWU6IHN0cmluZztcblxuICAvKipcbiAgICogQG91dHB1dCB2YWx1ZUNoYW5nZVxuICAgKiBAZGVzY1xuICAgKiAgIFtlbl1UcmlnZ2VycyB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkLlsvZW5dXG4gICAqICAgW2phXeWGhemDqOOBrmBpbnB1dGDopoHntKDjga7lgKTjgYzlpInmm7TjgZXjgozjgZ/mmYLjgavnmbrngavjgZfjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgQE91dHB1dCgndmFsdWVDaGFuZ2UnKSBfdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX2JvdW5kT25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2JvdW5kT25DaGFuZ2UpO1xuICB9XG5cbiAgX29uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZUNoYW5nZS5lbWl0KHRoaXMuX2VsZW1lbnQudmFsdWUpO1xuICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSh0aGlzLl9lbGVtZW50LnZhbHVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBfb25CbHVyKCkge1xuICAgIHRoaXMuX3Byb3BhZ2F0ZVRvdWNoZWQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZVJlY29yZDoge1trZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZTt9KSB7XG4gICAgY29uc3QgdmFsdWUgPSBjaGFuZ2VSZWNvcmRbJ192YWx1ZSddLmN1cnJlbnRWYWx1ZTtcbiAgICBpZiAodGhpcy5fZWxlbWVudC52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgZWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9ib3VuZE9uQ2hhbmdlKTtcblxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSkge1xuICAgIHRoaXMuX2VsZW1lbnQudmFsdWUgPSBvYmo7XG4gIH1cbiBcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG4gXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLiBfcHJvcGFnYXRlVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=