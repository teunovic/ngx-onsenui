/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * \@element ons-radio
 * \@directive OnsRadio
 * \@selector ons-radio
 * \@description
 *   [en]Angular directive for `<ons-radio>` component. You can use `[(ngModel)]` to synchronize the value of `[(ngModel)]` with the selected value.[/en]
 *   [ja]`<ons-radio>`要素のAngularディレクティブです。 `[(ngModel)]` を使用すると、 `[(ngModel)]` の値を選択された値と同期することができます。[/ja]
 * \@example
 *   <ons-radio value="Item A" [(ngModel)]="selectedValue"></ons-radio>
 *   <ons-radio value="Item B" [(ngModel)]="selectedValue"></ons-radio>
 *   <ons-radio value="Item C" [(ngModel)]="selectedValue"></ons-radio>
 */
var OnsRadio = /** @class */ (function () {
    function OnsRadio(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = function (_) { };
        this._boundOnChange = this._onChange.bind(this);
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('change', this._boundOnChange);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    OnsRadio.prototype._onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _a = event.target, value = _a.value, checked = _a.checked;
        checked && this._propagateChange(value);
    };
    Object.defineProperty(OnsRadio.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsRadio.prototype, "nativeElement", {
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
    OnsRadio.prototype.ngOnDestroy = /**
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
    OnsRadio.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._element.checked = (obj === this._element.value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsRadio.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateChange = fn;
    };
    /**
     * @return {?}
     */
    OnsRadio.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    OnsRadio.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-radio',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return OnsRadio; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    OnsRadio.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return OnsRadio;
}());
export { OnsRadio };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsRadio.prototype._element;
    /**
     * @type {?}
     * @private
     */
    OnsRadio.prototype._boundOnChange;
    /**
     * @type {?}
     * @private
     */
    OnsRadio.prototype._propagateChange;
    /**
     * @type {?}
     * @private
     */
    OnsRadio.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXJhZGlvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9uc2VudWkvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9vbnMtcmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUtWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFjekU7SUFlRSxrQkFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFGbkMscUJBQWdCLEdBQUcsVUFBQyxDQUFNLElBQU8sQ0FBQyxDQUFDO1FBR3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBRTFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELDRCQUFTOzs7O0lBQVQsVUFBVSxLQUFVO1FBQ1osSUFBQSxpQkFBaUMsRUFBL0IsZ0JBQUssRUFBRSxvQkFBd0I7UUFDdkMsT0FBTyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0JBQUksNkJBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBOzs7O0lBRUQsOEJBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsNkJBQVU7Ozs7SUFBVixVQUFXLEdBQVE7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVELG1DQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELG9DQUFpQjs7O0lBQWpCLGNBQXNCLENBQUM7O2dCQWpEeEIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQzs0QkFDdkMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7Ozs7Z0JBOUJDLFVBQVU7O0lBdUVaLGVBQUM7Q0FBQSxBQWxERCxJQWtEQztTQXhDWSxRQUFROzs7Ozs7SUFDbkIsNEJBQXNCOzs7OztJQUN0QixrQ0FBaUM7Ozs7O0lBQ2pDLG9DQUEyQzs7Ozs7SUFFL0IsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3RvcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAZWxlbWVudCBvbnMtcmFkaW9cbiAqIEBkaXJlY3RpdmUgT25zUmFkaW9cbiAqIEBzZWxlY3RvciBvbnMtcmFkaW9cbiAqIEBkZXNjcmlwdGlvblxuICogICBbZW5dQW5ndWxhciBkaXJlY3RpdmUgZm9yIGA8b25zLXJhZGlvPmAgY29tcG9uZW50LiBZb3UgY2FuIHVzZSBgWyhuZ01vZGVsKV1gIHRvIHN5bmNocm9uaXplIHRoZSB2YWx1ZSBvZiBgWyhuZ01vZGVsKV1gIHdpdGggdGhlIHNlbGVjdGVkIHZhbHVlLlsvZW5dXG4gKiAgIFtqYV1gPG9ucy1yYWRpbz5g6KaB57Sg44GuQW5ndWxhcuODh+OCo+ODrOOCr+ODhuOCo+ODluOBp+OBmeOAgiBgWyhuZ01vZGVsKV1gIOOCkuS9v+eUqOOBmeOCi+OBqOOAgSBgWyhuZ01vZGVsKV1gIOOBruWApOOCkumBuOaKnuOBleOCjOOBn+WApOOBqOWQjOacn+OBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglsvamFdXG4gKiBAZXhhbXBsZVxuICogICA8b25zLXJhZGlvIHZhbHVlPVwiSXRlbSBBXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhbHVlXCI+PC9vbnMtcmFkaW8+XG4gKiAgIDxvbnMtcmFkaW8gdmFsdWU9XCJJdGVtIEJcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVcIj48L29ucy1yYWRpbz5cbiAqICAgPG9ucy1yYWRpbyB2YWx1ZT1cIkl0ZW0gQ1wiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZVwiPjwvb25zLXJhZGlvPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdvbnMtcmFkaW8nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE9uc1JhZGlvKSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBPbnNSYWRpbyBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIF9lbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgX2JvdW5kT25DaGFuZ2U6IEZ1bmN0aW9uO1xuICBwcml2YXRlIF9wcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fYm91bmRPbkNoYW5nZSA9IHRoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fZWxlbWVudCA9IF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2JvdW5kT25DaGFuZ2UpO1xuICB9XG4gIFxuICBfb25DaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIGNoZWNrZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBjaGVja2VkICYmIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSh2YWx1ZSk7XG4gIH1cbiAgXG4gIGdldCBlbGVtZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cblxuICBnZXQgbmF0aXZlRWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9ib3VuZE9uQ2hhbmdlKTtcblxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSkge1xuICAgIHRoaXMuX2VsZW1lbnQuY2hlY2tlZCA9IChvYmogPT09IHRoaXMuX2VsZW1lbnQudmFsdWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgICB0aGlzLl9wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKCkgeyB9XG59XG4iXX0=