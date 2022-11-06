/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import * as ons from 'onsenui';
export class ItemContext {
    /**
     * @param {?} $implicit
     * @param {?} index
     * @param {?} count
     */
    constructor($implicit, index, count) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
    }
}
if (false) {
    /** @type {?} */
    ItemContext.prototype.$implicit;
    /** @type {?} */
    ItemContext.prototype.index;
    /** @type {?} */
    ItemContext.prototype.count;
}
/**
 * \@element ons-lazy-repeat
 * \@directive OnsLazyRepeat
 * \@selector [ons-lazy-repeat]
 * \@description
 *   [en]Angular directive for `<ons-lazy-repeat>` component.[/en]
 *   [ja]`<ons-lazy-repeat>`要素と同じ機能を提供するAngularディレクティブです。[/ja]
 * \@example
 *   <ons-list>
 *     <ons-list-item *onsLazyRepeat="let item of items; let i = index">
 *       #{{i}} {{item.msg}}
 *     </ons-list-item>
 *   </ons-list>
 */
export class OnsLazyRepeat {
    /**
     * @param {?} _elementRef
     * @param {?} _templateRef
     * @param {?} _viewContainer
     */
    constructor(_elementRef, _templateRef, _viewContainer) {
        this._elementRef = _elementRef;
        this._templateRef = _templateRef;
        this._viewContainer = _viewContainer;
    }
    /**
     * \@input onsLazyRepeat
     * @desc
     *   [en]Render infinite lists with "let of" syntax in Angular.[/en]
     *   [ja]let of式を指定します。[/ja]
     * \@example
     *  <ons-list>
     *    <ons-list-item *onsLazyRepeat="let message of messages">
     *      {{message}}
     *    </ons-list-item>
     *  </ons-list>
     * @param {?} value
     * @return {?}
     */
    set onsLazyRepeatOf(value) {
        this._onsLazyRepeatOf = value;
        this._provider = new ((/** @type {?} */ (ons)))._internal.LazyRepeatProvider(this._elementRef.nativeElement.parentElement, new ((/** @type {?} */ (ons)))._internal.LazyRepeatDelegate({
            loadItemElement: (index, done) => {
                this._loadItemTemplate(index, done);
            },
            countItems: () => {
                return this._onsLazyRepeatOf.length;
            }
        }));
    }
    /**
     * @param {?} index
     * @param {?} done
     * @return {?}
     */
    _loadItemTemplate(index, done) {
        /** @type {?} */
        const context = new ItemContext(this._onsLazyRepeatOf[index], index, this._onsLazyRepeatOf.length);
        /** @type {?} */
        const view = this._viewContainer.createEmbeddedView(this._templateRef, context);
        // dirty fix on createEmbeddedView() does not insert DOM element randomly.
        done({ element: view.rootNodes[0] });
    }
    /**
     * @return {?}
     */
    refresh() {
        if (this._provider) {
            this._viewContainer.clear();
            this._provider.refresh();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._provider) {
            this._provider.destroy();
        }
        this._viewContainer.clear();
        this._provider = null;
    }
}
OnsLazyRepeat.decorators = [
    { type: Directive, args: [{
                selector: '[onsLazyRepeat]'
            },] }
];
/** @nocollapse */
OnsLazyRepeat.ctorParameters = () => [
    { type: ElementRef },
    { type: TemplateRef },
    { type: ViewContainerRef }
];
OnsLazyRepeat.propDecorators = {
    onsLazyRepeatOf: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnsLazyRepeat.prototype._element;
    /**
     * @type {?}
     * @private
     */
    OnsLazyRepeat.prototype._provider;
    /**
     * @type {?}
     * @private
     */
    OnsLazyRepeat.prototype._onsLazyRepeatOf;
    /**
     * @type {?}
     * @private
     */
    OnsLazyRepeat.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    OnsLazyRepeat.prototype._templateRef;
    /**
     * @type {?}
     * @private
     */
    OnsLazyRepeat.prototype._viewContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLWxhenktcmVwZWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9uc2VudWkvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9vbnMtbGF6eS1yZXBlYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDO0FBRS9CLE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFDdEIsWUFBbUIsU0FBYyxFQUFTLEtBQWEsRUFBUyxLQUFhO1FBQTFELGNBQVMsR0FBVCxTQUFTLENBQUs7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUM3RSxDQUFDO0NBQ0Y7OztJQUZhLGdDQUFxQjs7SUFBRSw0QkFBb0I7O0lBQUUsNEJBQW9COzs7Ozs7Ozs7Ozs7Ozs7O0FBcUIvRSxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBS3hCLFlBQ1UsV0FBdUIsRUFDdkIsWUFBc0MsRUFDdEMsY0FBZ0M7UUFGaEMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQTBCO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtJQUMxQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUFjRCxJQUFhLGVBQWUsQ0FBQyxLQUFVO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQUssR0FBRyxFQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFDNUMsSUFBSSxDQUFDLG1CQUFLLEdBQUcsRUFBQSxDQUFDLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDO1lBQzFDLGVBQWUsRUFBRSxDQUFDLEtBQWEsRUFBRSxJQUFjLEVBQUUsRUFBRTtnQkFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtnQkFDZixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7WUFDdEMsQ0FBQztTQUNGLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsS0FBYSxFQUFFLElBQWM7O2NBQ3ZDLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7O2NBQzVGLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO1FBQy9FLDBFQUEwRTtRQUUxRSxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7O1lBL0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBOUJDLFVBQVU7WUFHVixXQUFXO1lBQ1gsZ0JBQWdCOzs7OEJBa0RmLEtBQUs7Ozs7Ozs7SUF0Qk4saUNBQXNCOzs7OztJQUN0QixrQ0FBdUI7Ozs7O0lBQ3ZCLHlDQUE4Qjs7Ozs7SUFHNUIsb0NBQStCOzs7OztJQUMvQixxQ0FBOEM7Ozs7O0lBQzlDLHVDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIG9ucyBmcm9tICdvbnNlbnVpJztcblxuZXhwb3J0IGNsYXNzIEl0ZW1Db250ZXh0IHtcbiAgY29uc3RydWN0b3IocHVibGljICRpbXBsaWNpdDogYW55LCBwdWJsaWMgaW5kZXg6IG51bWJlciwgcHVibGljIGNvdW50OiBudW1iZXIpIHtcbiAgfVxufVxuXG4vKipcbiAqIEBlbGVtZW50IG9ucy1sYXp5LXJlcGVhdFxuICogQGRpcmVjdGl2ZSBPbnNMYXp5UmVwZWF0XG4gKiBAc2VsZWN0b3IgW29ucy1sYXp5LXJlcGVhdF1cbiAqIEBkZXNjcmlwdGlvblxuICogICBbZW5dQW5ndWxhciBkaXJlY3RpdmUgZm9yIGA8b25zLWxhenktcmVwZWF0PmAgY29tcG9uZW50LlsvZW5dXG4gKiAgIFtqYV1gPG9ucy1sYXp5LXJlcGVhdD5g6KaB57Sg44Go5ZCM44GY5qmf6IO944KS5o+Q5L6b44GZ44KLQW5ndWxhcuODh+OCo+ODrOOCr+ODhuOCo+ODluOBp+OBmeOAglsvamFdXG4gKiBAZXhhbXBsZVxuICogICA8b25zLWxpc3Q+XG4gKiAgICAgPG9ucy1saXN0LWl0ZW0gKm9uc0xhenlSZXBlYXQ9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGkgPSBpbmRleFwiPlxuICogICAgICAgI3t7aX19IHt7aXRlbS5tc2d9fVxuICogICAgIDwvb25zLWxpc3QtaXRlbT5cbiAqICAgPC9vbnMtbGlzdD5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW29uc0xhenlSZXBlYXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBPbnNMYXp5UmVwZWF0IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfZWxlbWVudDogYW55O1xuICBwcml2YXRlIF9wcm92aWRlcjogYW55O1xuICBwcml2YXRlIF9vbnNMYXp5UmVwZWF0T2Y6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxJdGVtQ29udGV4dD4sXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnB1dCBvbnNMYXp5UmVwZWF0XG4gICAqIEBkZXNjXG4gICAqICAgW2VuXVJlbmRlciBpbmZpbml0ZSBsaXN0cyB3aXRoIFwibGV0IG9mXCIgc3ludGF4IGluIEFuZ3VsYXIuWy9lbl1cbiAgICogICBbamFdbGV0IG9m5byP44KS5oyH5a6a44GX44G+44GZ44CCWy9qYV1cbiAgICogQGV4YW1wbGVcbiAgICogIDxvbnMtbGlzdD5cbiAgICogICAgPG9ucy1saXN0LWl0ZW0gKm9uc0xhenlSZXBlYXQ9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiPlxuICAgKiAgICAgIHt7bWVzc2FnZX19XG4gICAqICAgIDwvb25zLWxpc3QtaXRlbT5cbiAgICogIDwvb25zLWxpc3Q+XG4gICAqL1xuICBASW5wdXQoKSBzZXQgb25zTGF6eVJlcGVhdE9mKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9vbnNMYXp5UmVwZWF0T2YgPSB2YWx1ZTtcblxuICAgIHRoaXMuX3Byb3ZpZGVyID0gbmV3ICg8YW55Pm9ucykuX2ludGVybmFsLkxhenlSZXBlYXRQcm92aWRlcihcbiAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LFxuICAgICAgbmV3ICg8YW55Pm9ucykuX2ludGVybmFsLkxhenlSZXBlYXREZWxlZ2F0ZSh7XG4gICAgICAgIGxvYWRJdGVtRWxlbWVudDogKGluZGV4OiBudW1iZXIsIGRvbmU6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgICAgdGhpcy5fbG9hZEl0ZW1UZW1wbGF0ZShpbmRleCwgZG9uZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvdW50SXRlbXM6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb25zTGF6eVJlcGVhdE9mLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgX2xvYWRJdGVtVGVtcGxhdGUoaW5kZXg6IG51bWJlciwgZG9uZTogRnVuY3Rpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IEl0ZW1Db250ZXh0KHRoaXMuX29uc0xhenlSZXBlYXRPZltpbmRleF0sIGluZGV4LCB0aGlzLl9vbnNMYXp5UmVwZWF0T2YubGVuZ3RoKTtcbiAgICBjb25zdCB2aWV3ID0gdGhpcy5fdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fdGVtcGxhdGVSZWYsIGNvbnRleHQpO1xuICAgIC8vIGRpcnR5IGZpeCBvbiBjcmVhdGVFbWJlZGRlZFZpZXcoKSBkb2VzIG5vdCBpbnNlcnQgRE9NIGVsZW1lbnQgcmFuZG9tbHkuXG5cbiAgICBkb25lKHtlbGVtZW50OiB2aWV3LnJvb3ROb2Rlc1swXX0pO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBpZiAodGhpcy5fcHJvdmlkZXIpIHtcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgIHRoaXMuX3Byb3ZpZGVyLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fcHJvdmlkZXIpIHtcbiAgICAgIHRoaXMuX3Byb3ZpZGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5fdmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIHRoaXMuX3Byb3ZpZGVyID0gbnVsbDtcbiAgfVxufVxuIl19