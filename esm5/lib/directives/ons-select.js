/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * \@element ons-select
 * \@directive OnsSelect
 * \@selector ons-select
 * \@description
 *   [en]Angular directive for `<ons-select>` component.[/en]
 *   [ja]`<ons-select>`要素のAngularディレクティブです。[/ja]
 * \@example
 *   <ons-select [(ngModel)]="selectedValue">
 *     <option value="Item A">Item A</option>
 *     <option value="Item B">Item B</option>
 *     <option value="Item C">Item C</option>
 *   </ons-select>
 */
var OnsSelect = /** @class */ (function () {
    function OnsSelect(_elementRef) {
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
    OnsSelect.prototype._onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._propagateChange(event.target.value);
    };
    Object.defineProperty(OnsSelect.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnsSelect.prototype, "nativeElement", {
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
    OnsSelect.prototype.ngOnDestroy = /**
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
    OnsSelect.prototype.writeValue = /**
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
    OnsSelect.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateChange = fn;
    };
    /**
     * @return {?}
     */
    OnsSelect.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    OnsSelect.decorators = [
        { type: Directive, args: [{
                    selector: 'ons-select',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return OnsSelect; }),
                            multi: true,
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    OnsSelect.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return OnsSelect;
}());
export { OnsSelect };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsSelect.prototype._element;
    /**
     * @type {?}
     * @private
     */
    OnsSelect.prototype._boundOnChange;
    /**
     * @type {?}
     * @private
     */
    OnsSelect.prototype._propagateChange;
    /**
     * @type {?}
     * @private
     */
    OnsSelect.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLXNlbGVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbnNlbnVpLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvb25zLXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBS1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ6RTtJQWVFLG1CQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUZuQyxxQkFBZ0IsR0FBRyxVQUFDLENBQU0sSUFBTyxDQUFDLENBQUM7UUFHekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsNkJBQVM7Ozs7SUFBVCxVQUFVLEtBQVU7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHNCQUFJLDhCQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBYTs7OztRQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7OztJQUVELCtCQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELDhCQUFVOzs7O0lBQVYsVUFBVyxHQUFRO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELG9DQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELHFDQUFpQjs7O0lBQWpCLGNBQXNCLENBQUM7O2dCQWhEeEIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsU0FBUyxFQUFULENBQVMsQ0FBQzs0QkFDeEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7Ozs7Z0JBakNDLFVBQVU7O0lBeUVaLGdCQUFDO0NBQUEsQUFqREQsSUFpREM7U0F2Q1ksU0FBUzs7Ozs7O0lBQ3BCLDZCQUFzQjs7Ozs7SUFDdEIsbUNBQWlDOzs7OztJQUNqQyxxQ0FBMkM7Ozs7O0lBRS9CLGdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0b3IsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgKiBhcyBvbnMgZnJvbSAnb25zZW51aSc7XG5cbi8qKlxuICogQGVsZW1lbnQgb25zLXNlbGVjdFxuICogQGRpcmVjdGl2ZSBPbnNTZWxlY3RcbiAqIEBzZWxlY3RvciBvbnMtc2VsZWN0XG4gKiBAZGVzY3JpcHRpb25cbiAqICAgW2VuXUFuZ3VsYXIgZGlyZWN0aXZlIGZvciBgPG9ucy1zZWxlY3Q+YCBjb21wb25lbnQuWy9lbl1cbiAqICAgW2phXWA8b25zLXNlbGVjdD5g6KaB57Sg44GuQW5ndWxhcuODh+OCo+ODrOOCr+ODhuOCo+ODluOBp+OBmeOAglsvamFdXG4gKiBAZXhhbXBsZVxuICogICA8b25zLXNlbGVjdCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVcIj5cbiAqICAgICA8b3B0aW9uIHZhbHVlPVwiSXRlbSBBXCI+SXRlbSBBPC9vcHRpb24+XG4gKiAgICAgPG9wdGlvbiB2YWx1ZT1cIkl0ZW0gQlwiPkl0ZW0gQjwvb3B0aW9uPlxuICogICAgIDxvcHRpb24gdmFsdWU9XCJJdGVtIENcIj5JdGVtIEM8L29wdGlvbj5cbiAqICAgPC9vbnMtc2VsZWN0PlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdvbnMtc2VsZWN0JyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBPbnNTZWxlY3QpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE9uc1NlbGVjdCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIF9lbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgX2JvdW5kT25DaGFuZ2U6IEZ1bmN0aW9uO1xuICBwcml2YXRlIF9wcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX2JvdW5kT25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9ib3VuZE9uQ2hhbmdlKTtcbiAgfVxuXG4gIF9vbkNoYW5nZShldmVudDogYW55KSB7XG4gICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBnZXQgZWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5fYm91bmRPbkNoYW5nZSk7XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpIHtcbiAgICB0aGlzLl9lbGVtZW50LnZhbHVlID0gb2JqO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZCgpIHsgfVxufVxuIl19