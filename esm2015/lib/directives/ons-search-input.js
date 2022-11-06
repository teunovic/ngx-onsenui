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
export class OnsSearchInput {
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
    _onBlur() {
        this._propagateTouched();
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
     * @param {?} changeRecord
     * @return {?}
     */
    ngOnChanges(changeRecord) {
        /** @type {?} */
        const value = changeRecord['_value'].currentValue;
        if (this._element.value !== value) {
            this._element.value = value;
        }
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
OnsSearchInput.decorators = [
    { type: Directive, args: [{
                selector: 'ons-search-input',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => OnsSearchInput),
                        multi: true,
                    }
                ]
            },] }
];
/** @nocollapse */
OnsSearchInput.ctorParameters = () => [
    { type: ElementRef }
];
OnsSearchInput.propDecorators = {
    _value: [{ type: Input, args: ['value',] }],
    _valueChange: [{ type: Output, args: ['valueChange',] }],
    _onBlur: [{ type: HostListener, args: ['blur',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXNlYXJjaC1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbnNlbnVpLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb25zLXNlYXJjaC1pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUlaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7O0FBc0J6RSxNQUFNLE9BQU8sY0FBYzs7OztJQXNCekIsWUFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFuQm5DLHFCQUFnQixHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkMsc0JBQWlCLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDOzs7Ozs7O1FBZ0JkLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHckYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFHRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBVTtRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFlBQTRDOztjQUNoRCxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVk7UUFDakQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUUsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7OztZQWhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO3dCQUM3QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzs7O1lBL0JDLFVBQVU7OztxQkE0Q1QsS0FBSyxTQUFDLE9BQU87MkJBUWIsTUFBTSxTQUFDLGFBQWE7c0JBU3BCLFlBQVksU0FBQyxNQUFNOzs7Ozs7O0lBNUJwQixrQ0FBc0I7Ozs7O0lBQ3RCLHdDQUFpQzs7Ozs7SUFDakMsMENBQTJDOzs7OztJQUMzQywyQ0FBcUM7Ozs7Ozs7O0lBUXJDLGdDQUErQjs7Ozs7Ozs7SUFRL0Isc0NBQXVGOzs7OztJQUUzRSxxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEluamVjdG9yLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEBlbGVtZW50IG9ucy1zZWFyY2gtaW5wdXRcbiAqIEBkaXJlY3RpdmUgT25zU2VhcmNoSW5wdXRcbiAqIEBzZWxlY3RvciBvbnMtc2VhcmNoLWlucHV0XG4gKiBAZGVzY3JpcHRpb25cbiAqICAgW2VuXUFuZ3VsYXIgZGlyZWN0aXZlIGZvciBgPG9ucy1zZWFyY2gtaW5wdXQ+YCBjb21wb25lbnQuWy9lbl1cbiAqICAgW2phXWA8b25zLXNlYXJjaC1pbnB1dD5g6KaB57Sg44GuQW5ndWxhcuODh+OCo+ODrOOCr+ODhuOCo+ODluOBp+OBmeOAglsvamFdXG4gKiBAZXhhbXBsZVxuICogICA8b25zLXNlYXJjaC1pbnB1dCBbKHZhbHVlKV09XCJ2YWx1ZVwiPjwvb25zLXNlYXJjaC1pbnB1dD5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnb25zLXNlYXJjaC1pbnB1dCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gT25zU2VhcmNoSW5wdXQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE9uc1NlYXJjaElucHV0IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfZWxlbWVudDogYW55O1xuICBwcml2YXRlIF9ib3VuZE9uQ2hhbmdlOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSBfcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICBwcml2YXRlIF9wcm9wYWdhdGVUb3VjaGVkID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIEBpbnB1dCB2YWx1ZVxuICAgKiBAZGVzY1xuICAgKiAgIFtlbl1JbnB1dCB2YWx1ZSBmb3IgdGhlIGludGVybmFsIGA8aW5wdXQ+YCBlbGVtZW50LlsvZW5dXG4gICAqICAgW2phXeWGhemDqOOBrmBpbnB1dGDopoHntKDjgavlr77jgZnjgovlhaXlipvlgKTjgpLoqK3lrprjgZfjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgQElucHV0KCd2YWx1ZScpIF92YWx1ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAb3V0cHV0IHZhbHVlQ2hhbmdlXG4gICAqIEBkZXNjXG4gICAqICAgW2VuXVRyaWdnZXJzIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuWy9lbl1cbiAgICogICBbamFd5YaF6YOo44GuYGlucHV0YOimgee0oOOBruWApOOBjOWkieabtOOBleOCjOOBn+aZguOBq+eZuueBq+OBl+OBvuOBmeOAglsvamFdXG4gICAqL1xuICBAT3V0cHV0KCd2YWx1ZUNoYW5nZScpIF92YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fYm91bmRPbkNoYW5nZSA9IHRoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fZWxlbWVudCA9IF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5fYm91bmRPbkNoYW5nZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgX29uQmx1cigpIHtcbiAgICB0aGlzLl9wcm9wYWdhdGVUb3VjaGVkKCk7XG4gIH1cblxuICBfb25DaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlQ2hhbmdlLmVtaXQodGhpcy5fZWxlbWVudC52YWx1ZSk7XG4gICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlKHRoaXMuX2VsZW1lbnQudmFsdWUpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlUmVjb3JkOiB7W2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlO30pIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNoYW5nZVJlY29yZFsnX3ZhbHVlJ10uY3VycmVudFZhbHVlO1xuICAgIGlmICh0aGlzLl9lbGVtZW50LnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBlbGVtZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cblxuICBnZXQgbmF0aXZlRWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2JvdW5kT25DaGFuZ2UpO1xuXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogYW55KSB7XG4gICAgdGhpcy5fZWxlbWVudC52YWx1ZSA9IG9iajtcbiAgfVxuIFxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cbiBcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMuIF9wcm9wYWdhdGVUb3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==