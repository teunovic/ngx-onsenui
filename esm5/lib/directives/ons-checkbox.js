/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * \@element ons-checkbox
 * \@directive OnsCheckbox
 * \@selector ons-checkbox
 * \@description
 *   [en]Angular directive for `<ons-checkbox>` component. You can use `[(ngModel)]` to synchronize the value of `[(ngModel)]` with the array of the selected values.[/en]
 *   [ja]`<ons-checkbox>`要素のAngularディレクティブです。 `[(ngModel)]` を使用すると、 `[(ngModel)]` の値を選択された値の配列と同期することができます。[/ja]
 * \@example
 *   <ons-checkbox value="Item A" [(ngModel)]="selectedValues"></ons-checkbox>
 *   <ons-checkbox value="Item B" [(ngModel)]="selectedValues"></ons-checkbox>
 *   <ons-checkbox value="Item C" [(ngModel)]="selectedValues"></ons-checkbox>
 */
var OnsCheckbox = /** @class */ (function () {
    function OnsCheckbox(_elementRef) {
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
    OnsCheckbox.prototype._onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _a = event.target, value = _a.value, checked = _a.checked;
        /** @type {?} */
        var newValue;
        if (this._state instanceof Array) {
            // Is Array
            /** @type {?} */
            var index = this._state.indexOf(value);
            /** @type {?} */
            var included = index >= 0;
            if (included && !checked) {
                newValue = tslib_1.__spread(this._state.slice(0, index), this._state.slice(index + 1, this._state.length));
            }
            if (!included && checked) {
                newValue = tslib_1.__spread(this._state, [value]);
            }
        }
        else {
            // Is Boolean
            newValue = checked;
        }
        // Emit if value changed
        if (newValue !== undefined) {
            this._state = newValue;
            this._propagateChange(this._state);
        }
    };
    Object.defineProperty(OnsCheckbox.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsCheckbox.prototype, "nativeElement", {
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
    OnsCheckbox.prototype.ngOnDestroy = /**
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
    OnsCheckbox.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._state = obj;
        if (obj instanceof Array) {
            this._element.checked = obj.indexOf(this._element.value) >= 0;
        }
        else {
            this._element.checked = obj;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    OnsCheckbox.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateChange = fn;
    };
    /**
     * @return {?}
     */
    OnsCheckbox.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    OnsCheckbox.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-checkbox',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return OnsCheckbox; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    OnsCheckbox.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return OnsCheckbox;
}());
export { OnsCheckbox };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsCheckbox.prototype._element;
    /**
     * @type {?}
     * @private
     */
    OnsCheckbox.prototype._boundOnChange;
    /**
     * @type {?}
     * @private
     */
    OnsCheckbox.prototype._state;
    /**
     * @type {?}
     * @private
     */
    OnsCheckbox.prototype._propagateChange;
    /**
     * @type {?}
     * @private
     */
    OnsCheckbox.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLWNoZWNrYm94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9uc2VudWkvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9vbnMtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBR0wsU0FBUyxFQUNULFVBQVUsRUFLVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBY3pFO0lBZ0JFLHFCQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUZuQyxxQkFBZ0IsR0FBRyxVQUFDLENBQU0sSUFBTyxDQUFDLENBQUM7UUFHekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsK0JBQVM7Ozs7SUFBVCxVQUFVLEtBQVU7UUFDWixJQUFBLGlCQUFpQyxFQUEvQixnQkFBSyxFQUFFLG9CQUF3Qjs7WUFDbkMsUUFBUTtRQUVaLElBQUksSUFBSSxDQUFDLE1BQU0sWUFBWSxLQUFLLEVBQUU7OztnQkFFMUIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs7Z0JBQ2xDLFFBQVEsR0FBRyxLQUFLLElBQUksQ0FBQztZQUUzQixJQUFJLFFBQVEsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsUUFBUSxvQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDcEQsQ0FBQzthQUNIO1lBRUQsSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLEVBQUU7Z0JBQ3hCLFFBQVEsb0JBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRSxLQUFLLEVBQUUsQ0FBQzthQUN0QztTQUVGO2FBQU07WUFDTCxhQUFhO1lBQ2IsUUFBUSxHQUFHLE9BQU8sQ0FBQztTQUNwQjtRQUVELHdCQUF3QjtRQUN4QixJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRCxzQkFBSSxnQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7Ozs7SUFFRCxpQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFakUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxnQ0FBVTs7OztJQUFWLFVBQVcsR0FBUTtRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvRDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxzQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCx1Q0FBaUI7OztJQUFqQixjQUFzQixDQUFDOztnQkFsRnhCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLFdBQVcsRUFBWCxDQUFXLENBQUM7NEJBQzFDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzs7O2dCQTlCQyxVQUFVOztJQXdHWixrQkFBQztDQUFBLEFBbkZELElBbUZDO1NBekVZLFdBQVc7Ozs7OztJQUN0QiwrQkFBc0I7Ozs7O0lBQ3RCLHFDQUFpQzs7Ozs7SUFDakMsNkJBQWdDOzs7OztJQUNoQyx1Q0FBMkM7Ozs7O0lBRS9CLGtDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0b3IsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQGVsZW1lbnQgb25zLWNoZWNrYm94XG4gKiBAZGlyZWN0aXZlIE9uc0NoZWNrYm94XG4gKiBAc2VsZWN0b3Igb25zLWNoZWNrYm94XG4gKiBAZGVzY3JpcHRpb25cbiAqICAgW2VuXUFuZ3VsYXIgZGlyZWN0aXZlIGZvciBgPG9ucy1jaGVja2JveD5gIGNvbXBvbmVudC4gWW91IGNhbiB1c2UgYFsobmdNb2RlbCldYCB0byBzeW5jaHJvbml6ZSB0aGUgdmFsdWUgb2YgYFsobmdNb2RlbCldYCB3aXRoIHRoZSBhcnJheSBvZiB0aGUgc2VsZWN0ZWQgdmFsdWVzLlsvZW5dXG4gKiAgIFtqYV1gPG9ucy1jaGVja2JveD5g6KaB57Sg44GuQW5ndWxhcuODh+OCo+ODrOOCr+ODhuOCo+ODluOBp+OBmeOAgiBgWyhuZ01vZGVsKV1gIOOCkuS9v+eUqOOBmeOCi+OBqOOAgSBgWyhuZ01vZGVsKV1gIOOBruWApOOCkumBuOaKnuOBleOCjOOBn+WApOOBrumFjeWIl+OBqOWQjOacn+OBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAglsvamFdXG4gKiBAZXhhbXBsZVxuICogICA8b25zLWNoZWNrYm94IHZhbHVlPVwiSXRlbSBBXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhbHVlc1wiPjwvb25zLWNoZWNrYm94PlxuICogICA8b25zLWNoZWNrYm94IHZhbHVlPVwiSXRlbSBCXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhbHVlc1wiPjwvb25zLWNoZWNrYm94PlxuICogICA8b25zLWNoZWNrYm94IHZhbHVlPVwiSXRlbSBDXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhbHVlc1wiPjwvb25zLWNoZWNrYm94PlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdvbnMtY2hlY2tib3gnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE9uc0NoZWNrYm94KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBPbnNDaGVja2JveCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIF9lbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgX2JvdW5kT25DaGFuZ2U6IEZ1bmN0aW9uO1xuICBwcml2YXRlIF9zdGF0ZTogYW55W10gfCBib29sZWFuO1xuICBwcml2YXRlIF9wcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fYm91bmRPbkNoYW5nZSA9IHRoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fZWxlbWVudCA9IF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2JvdW5kT25DaGFuZ2UpO1xuICB9XG4gIFxuICBfb25DaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIGNoZWNrZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBsZXQgbmV3VmFsdWU7XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgLy8gSXMgQXJyYXlcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fc3RhdGUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICBjb25zdCBpbmNsdWRlZCA9IGluZGV4ID49IDA7XG5cbiAgICAgIGlmIChpbmNsdWRlZCAmJiAhY2hlY2tlZCkge1xuICAgICAgICBuZXdWYWx1ZSA9IFtcbiAgICAgICAgICAuLi50aGlzLl9zdGF0ZS5zbGljZSgwLCBpbmRleCksXG4gICAgICAgICAgLi4udGhpcy5fc3RhdGUuc2xpY2UoaW5kZXggKyAxLCB0aGlzLl9zdGF0ZS5sZW5ndGgpXG4gICAgICAgIF07XG4gICAgICB9XG5cbiAgICAgIGlmICghaW5jbHVkZWQgJiYgY2hlY2tlZCkge1xuICAgICAgICBuZXdWYWx1ZSA9IFsgLi4udGhpcy5fc3RhdGUsIHZhbHVlIF07XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSXMgQm9vbGVhblxuICAgICAgbmV3VmFsdWUgPSBjaGVja2VkO1xuICAgIH1cblxuICAgIC8vIEVtaXQgaWYgdmFsdWUgY2hhbmdlZFxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlKHRoaXMuX3N0YXRlKTtcbiAgICB9XG4gIH1cbiAgXG4gIGdldCBlbGVtZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cblxuICBnZXQgbmF0aXZlRWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9ib3VuZE9uQ2hhbmdlKTtcblxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSkge1xuICAgIHRoaXMuX3N0YXRlID0gb2JqO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5jaGVja2VkID0gb2JqLmluZGV4T2YodGhpcy5fZWxlbWVudC52YWx1ZSkgPj0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZWxlbWVudC5jaGVja2VkID0gb2JqO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZCgpIHsgfVxufVxuIl19