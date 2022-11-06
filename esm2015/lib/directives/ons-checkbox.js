/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class OnsCheckbox {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._propagateChange = (_) => { };
        this._boundOnChange = this._onChange.bind(this);
        this._element = _elementRef.nativeElement;
        this._element.addEventListener('change', this._boundOnChange);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onChange(event) {
        const { value, checked } = event.target;
        /** @type {?} */
        let newValue;
        if (this._state instanceof Array) {
            // Is Array
            /** @type {?} */
            const index = this._state.indexOf(value);
            /** @type {?} */
            const included = index >= 0;
            if (included && !checked) {
                newValue = [
                    ...this._state.slice(0, index),
                    ...this._state.slice(index + 1, this._state.length)
                ];
            }
            if (!included && checked) {
                newValue = [...this._state, value];
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
        this._state = obj;
        if (obj instanceof Array) {
            this._element.checked = obj.indexOf(this._element.value) >= 0;
        }
        else {
            this._element.checked = obj;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._propagateChange = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
}
OnsCheckbox.decorators = [
    { type: Directive, args: [{
                selector: 'ons-checkbox',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => OnsCheckbox),
                        multi: true,
                    }
                ]
            },] }
];
/** @nocollapse */
OnsCheckbox.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLWNoZWNrYm94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9uc2VudWkvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9vbnMtY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUtWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUF3QnpFLE1BQU0sT0FBTyxXQUFXOzs7O0lBTXRCLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBRm5DLHFCQUFnQixHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFHekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQVU7Y0FDWixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTTs7WUFDbkMsUUFBUTtRQUVaLElBQUksSUFBSSxDQUFDLE1BQU0sWUFBWSxLQUFLLEVBQUU7OztrQkFFMUIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs7a0JBQ2xDLFFBQVEsR0FBRyxLQUFLLElBQUksQ0FBQztZQUUzQixJQUFJLFFBQVEsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsUUFBUSxHQUFHO29CQUNULEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztvQkFDOUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUNwRCxDQUFDO2FBQ0g7WUFFRCxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sRUFBRTtnQkFDeEIsUUFBUSxHQUFHLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBRSxDQUFDO2FBQ3RDO1NBRUY7YUFBTTtZQUNMLGFBQWE7WUFDYixRQUFRLEdBQUcsT0FBTyxDQUFDO1NBQ3BCO1FBRUQsd0JBQXdCO1FBQ3hCLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxHQUFHLFlBQVksS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxpQkFBaUIsS0FBSyxDQUFDOzs7WUFsRnhCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUMxQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzs7O1lBOUJDLFVBQVU7Ozs7Ozs7SUFnQ1YsK0JBQXNCOzs7OztJQUN0QixxQ0FBaUM7Ozs7O0lBQ2pDLDZCQUFnQzs7Ozs7SUFDaEMsdUNBQTJDOzs7OztJQUUvQixrQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEluamVjdG9yLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEBlbGVtZW50IG9ucy1jaGVja2JveFxuICogQGRpcmVjdGl2ZSBPbnNDaGVja2JveFxuICogQHNlbGVjdG9yIG9ucy1jaGVja2JveFxuICogQGRlc2NyaXB0aW9uXG4gKiAgIFtlbl1Bbmd1bGFyIGRpcmVjdGl2ZSBmb3IgYDxvbnMtY2hlY2tib3g+YCBjb21wb25lbnQuIFlvdSBjYW4gdXNlIGBbKG5nTW9kZWwpXWAgdG8gc3luY2hyb25pemUgdGhlIHZhbHVlIG9mIGBbKG5nTW9kZWwpXWAgd2l0aCB0aGUgYXJyYXkgb2YgdGhlIHNlbGVjdGVkIHZhbHVlcy5bL2VuXVxuICogICBbamFdYDxvbnMtY2hlY2tib3g+YOimgee0oOOBrkFuZ3VsYXLjg4fjgqPjg6zjgq/jg4bjgqPjg5bjgafjgZnjgIIgYFsobmdNb2RlbCldYCDjgpLkvb/nlKjjgZnjgovjgajjgIEgYFsobmdNb2RlbCldYCDjga7lgKTjgpLpgbjmip7jgZXjgozjgZ/lgKTjga7phY3liJfjgajlkIzmnJ/jgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJbL2phXVxuICogQGV4YW1wbGVcbiAqICAgPG9ucy1jaGVja2JveCB2YWx1ZT1cIkl0ZW0gQVwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZXNcIj48L29ucy1jaGVja2JveD5cbiAqICAgPG9ucy1jaGVja2JveCB2YWx1ZT1cIkl0ZW0gQlwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZXNcIj48L29ucy1jaGVja2JveD5cbiAqICAgPG9ucy1jaGVja2JveCB2YWx1ZT1cIkl0ZW0gQ1wiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZXNcIj48L29ucy1jaGVja2JveD5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnb25zLWNoZWNrYm94JyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBPbnNDaGVja2JveCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgT25zQ2hlY2tib3ggaW1wbGVtZW50cyBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfZWxlbWVudDogYW55O1xuICBwcml2YXRlIF9ib3VuZE9uQ2hhbmdlOiBGdW5jdGlvbjtcbiAgcHJpdmF0ZSBfc3RhdGU6IGFueVtdIHwgYm9vbGVhbjtcbiAgcHJpdmF0ZSBfcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX2JvdW5kT25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9ib3VuZE9uQ2hhbmdlKTtcbiAgfVxuICBcbiAgX29uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBjaGVja2VkIH0gPSBldmVudC50YXJnZXQ7XG4gICAgbGV0IG5ld1ZhbHVlO1xuXG4gICAgaWYgKHRoaXMuX3N0YXRlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIC8vIElzIEFycmF5XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3N0YXRlLmluZGV4T2YodmFsdWUpO1xuICAgICAgY29uc3QgaW5jbHVkZWQgPSBpbmRleCA+PSAwO1xuXG4gICAgICBpZiAoaW5jbHVkZWQgJiYgIWNoZWNrZWQpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBbXG4gICAgICAgICAgLi4udGhpcy5fc3RhdGUuc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgICAgIC4uLnRoaXMuX3N0YXRlLnNsaWNlKGluZGV4ICsgMSwgdGhpcy5fc3RhdGUubGVuZ3RoKVxuICAgICAgICBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWluY2x1ZGVkICYmIGNoZWNrZWQpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBbIC4uLnRoaXMuX3N0YXRlLCB2YWx1ZSBdO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElzIEJvb2xlYW5cbiAgICAgIG5ld1ZhbHVlID0gY2hlY2tlZDtcbiAgICB9XG5cbiAgICAvLyBFbWl0IGlmIHZhbHVlIGNoYW5nZWRcbiAgICBpZiAobmV3VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fc3RhdGUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSh0aGlzLl9zdGF0ZSk7XG4gICAgfVxuICB9XG4gIFxuICBnZXQgZWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgZ2V0IG5hdGl2ZUVsZW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5fYm91bmRPbkNoYW5nZSk7XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IG9iajtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2hlY2tlZCA9IG9iai5pbmRleE9mKHRoaXMuX2VsZW1lbnQudmFsdWUpID49IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2hlY2tlZCA9IG9iajtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoKSB7IH1cbn1cbiJdfQ==