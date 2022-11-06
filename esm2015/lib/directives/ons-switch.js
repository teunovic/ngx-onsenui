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
export class OnsSwitch {
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
        this._element.addEventListener('change', this._boundOnChange);
    }
    /**
     * \@input value
     * @desc
     *   [en]Specify the value of the `<ons-switch>` component.[/en]
     *   [ja]`ons-switch`コンポーネントに設定する値を指定します。[/ja]
     * @param {?} target
     * @return {?}
     */
    set value(target) {
        this._element.checked = !!target;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onChange(event) {
        this._valueChange.emit(this._element.checked);
        this._propagateChange(this._element.checked);
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
        const value = !!((/** @type {?} */ (changeRecord))).value.currentValue;
        this._element.checked = value;
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
        this._element.removeEventListener('change', this._boundOnChange);
        this._element = null;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this._element.checked = obj;
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
OnsSwitch.decorators = [
    { type: Directive, args: [{
                selector: 'ons-switch',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => OnsSwitch),
                        multi: true,
                    }
                ]
            },] }
];
/** @nocollapse */
OnsSwitch.ctorParameters = () => [
    { type: ElementRef }
];
OnsSwitch.propDecorators = {
    value: [{ type: Input, args: ['value',] }],
    _valueChange: [{ type: Output, args: ['valueChange',] }],
    _onBlur: [{ type: HostListener, args: ['blur',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXN3aXRjaC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbnNlbnVpLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb25zLXN3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUlaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7O0FBc0J6RSxNQUFNLE9BQU8sU0FBUzs7OztJQXdCcEIsWUFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFyQm5DLHFCQUFnQixHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkMsc0JBQWlCLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDOzs7Ozs7O1FBa0JkLGlCQUFZLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFHdkYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7Ozs7OztJQWpCRCxJQUFvQixLQUFLLENBQUMsTUFBZTtRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBaUJELFNBQVMsQ0FBQyxLQUFVO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUdELE9BQU87UUFDTCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxZQUEyQjs7Y0FDL0IsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLG1CQUFLLFlBQVksRUFBQSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVk7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFRO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFFLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7WUEvRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ3hDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7Ozs7WUEvQkMsVUFBVTs7O29CQTRDVCxLQUFLLFNBQUMsT0FBTzsyQkFVYixNQUFNLFNBQUMsYUFBYTtzQkFjcEIsWUFBWSxTQUFDLE1BQU07Ozs7Ozs7SUFuQ3BCLDZCQUFzQjs7Ozs7SUFDdEIsbUNBQWlDOzs7OztJQUNqQyxxQ0FBMkM7Ozs7O0lBQzNDLHNDQUFxQzs7Ozs7Ozs7SUFrQnJDLGlDQUF5Rjs7Ozs7SUFFN0UsZ0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3RvcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQGVsZW1lbnQgb25zLXN3aXRjaFxuICogQGRpcmVjdGl2ZSBPbnNTd2l0Y2hcbiAqIEBzZWxlY3RvciBvbnMtc3dpdGNoXG4gKiBAZGVzY3JpcHRpb25cbiAqICAgW2VuXUFuZ3VsYXIgZGlyZWN0aXZlIGZvciBgPG9ucy1zd2l0Y2g+YCBjb21wb25lbnQuWy9lbl1cbiAqICAgW2phXWA8b25zLXN3aXRjaD5g6KaB57Sg44GuQW5ndWxhcuODh+OCo+ODrOOCr+ODhuOCo+ODluOBp+OBmeOAglsvamFdXG4gKiBAZXhhbXBsZVxuICogICA8b25zLXN3aXRjaCBbKHZhbHVlKV09XCJ0YXJnZXRcIj48L29ucy1zd2l0Y2g+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ29ucy1zd2l0Y2gnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE9uc1N3aXRjaCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgT25zU3dpdGNoIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfZWxlbWVudDogYW55O1xuICBwcml2YXRlIF9ib3VuZE9uQ2hhbmdlOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSBfcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICBwcml2YXRlIF9wcm9wYWdhdGVUb3VjaGVkID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIEBpbnB1dCB2YWx1ZVxuICAgKiBAZGVzY1xuICAgKiAgIFtlbl1TcGVjaWZ5IHRoZSB2YWx1ZSBvZiB0aGUgYDxvbnMtc3dpdGNoPmAgY29tcG9uZW50LlsvZW5dXG4gICAqICAgW2phXWBvbnMtc3dpdGNoYOOCs+ODs+ODneODvOODjeODs+ODiOOBq+ioreWumuOBmeOCi+WApOOCkuaMh+WumuOBl+OBvuOBmeOAglsvamFdXG4gICAqL1xuICBASW5wdXQoJ3ZhbHVlJykgc2V0IHZhbHVlKHRhcmdldDogYm9vbGVhbikge1xuICAgIHRoaXMuX2VsZW1lbnQuY2hlY2tlZCA9ICEhdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdXRwdXQgdmFsdWVDaGFuZ2VcbiAgICogQGRlc2NcbiAgICogICBbZW5dVHJpZ2dlcnMgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5bL2VuXVxuICAgKiAgIFtqYV3lgKTjgYzlpInmm7TjgZXjgozjgZ/mmYLjgavnmbrngavjgZfjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgQE91dHB1dCgndmFsdWVDaGFuZ2UnKSBfdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fYm91bmRPbkNoYW5nZSA9IHRoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fZWxlbWVudCA9IF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2JvdW5kT25DaGFuZ2UpO1xuICB9XG5cbiAgX29uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZUNoYW5nZS5lbWl0KHRoaXMuX2VsZW1lbnQuY2hlY2tlZCk7XG4gICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlKHRoaXMuX2VsZW1lbnQuY2hlY2tlZCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgX29uQmx1cigpIHtcbiAgICB0aGlzLl9wcm9wYWdhdGVUb3VjaGVkKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VSZWNvcmQ6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCB2YWx1ZSA9ICEhKDxhbnk+Y2hhbmdlUmVjb3JkKS52YWx1ZS5jdXJyZW50VmFsdWU7XG4gICAgdGhpcy5fZWxlbWVudC5jaGVja2VkID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5fYm91bmRPbkNoYW5nZSk7XG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogYW55KSB7XG4gICAgdGhpcy5fZWxlbWVudC5jaGVja2VkID0gb2JqO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy4gX3Byb3BhZ2F0ZVRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19