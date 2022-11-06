/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import * as ons from 'onsenui';
var ItemContext = /** @class */ (function () {
    function ItemContext($implicit, index, count) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
    }
    return ItemContext;
}());
export { ItemContext };
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
var OnsLazyRepeat = /** @class */ (function () {
    function OnsLazyRepeat(_elementRef, _templateRef, _viewContainer) {
        this._elementRef = _elementRef;
        this._templateRef = _templateRef;
        this._viewContainer = _viewContainer;
    }
    Object.defineProperty(OnsLazyRepeat.prototype, "onsLazyRepeatOf", {
        /**
         * @input onsLazyRepeat
         * @desc
         *   [en]Render infinite lists with "let of" syntax in Angular.[/en]
         *   [ja]let of式を指定します。[/ja]
         * @example
         *  <ons-list>
         *    <ons-list-item *onsLazyRepeat="let message of messages">
         *      {{message}}
         *    </ons-list-item>
         *  </ons-list>
         */
        set: /**
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
        function (value) {
            var _this = this;
            this._onsLazyRepeatOf = value;
            this._provider = new ((/** @type {?} */ (ons)))._internal.LazyRepeatProvider(this._elementRef.nativeElement.parentElement, new ((/** @type {?} */ (ons)))._internal.LazyRepeatDelegate({
                loadItemElement: function (index, done) {
                    _this._loadItemTemplate(index, done);
                },
                countItems: function () {
                    return _this._onsLazyRepeatOf.length;
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @param {?} done
     * @return {?}
     */
    OnsLazyRepeat.prototype._loadItemTemplate = /**
     * @param {?} index
     * @param {?} done
     * @return {?}
     */
    function (index, done) {
        /** @type {?} */
        var context = new ItemContext(this._onsLazyRepeatOf[index], index, this._onsLazyRepeatOf.length);
        /** @type {?} */
        var view = this._viewContainer.createEmbeddedView(this._templateRef, context);
        // dirty fix on createEmbeddedView() does not insert DOM element randomly.
        done({ element: view.rootNodes[0] });
    };
    /**
     * @return {?}
     */
    OnsLazyRepeat.prototype.refresh = /**
     * @return {?}
     */
    function () {
        if (this._provider) {
            this._viewContainer.clear();
            this._provider.refresh();
        }
    };
    /**
     * @return {?}
     */
    OnsLazyRepeat.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._provider) {
            this._provider.destroy();
        }
        this._viewContainer.clear();
        this._provider = null;
    };
    OnsLazyRepeat.decorators = [
        { type: Directive, args: [{
                    selector: '[onsLazyRepeat]'
                },] }
    ];
    /** @nocollapse */
    OnsLazyRepeat.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    OnsLazyRepeat.propDecorators = {
        onsLazyRepeatOf: [{ type: Input }]
    };
    return OnsLazyRepeat;
}());
export { OnsLazyRepeat };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25zLWxhenktcmVwZWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9uc2VudWkvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9vbnMtbGF6eS1yZXBlYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDO0FBRS9CO0lBQ0UscUJBQW1CLFNBQWMsRUFBUyxLQUFhLEVBQVMsS0FBYTtRQUExRCxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7SUFDN0UsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGYSxnQ0FBcUI7O0lBQUUsNEJBQW9COztJQUFFLDRCQUFvQjs7Ozs7Ozs7Ozs7Ozs7OztBQWtCL0U7SUFRRSx1QkFDVSxXQUF1QixFQUN2QixZQUFzQyxFQUN0QyxjQUFnQztRQUZoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWtCO0lBQzFDLENBQUM7SUFjRCxzQkFBYSwwQ0FBZTtRQVo1Qjs7Ozs7Ozs7Ozs7V0FXRzs7Ozs7Ozs7Ozs7Ozs7O1FBQ0gsVUFBNkIsS0FBVTtZQUF2QyxpQkFjQztZQWJDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFFOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQUssR0FBRyxFQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFDNUMsSUFBSSxDQUFDLG1CQUFLLEdBQUcsRUFBQSxDQUFDLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDO2dCQUMxQyxlQUFlLEVBQUUsVUFBQyxLQUFhLEVBQUUsSUFBYztvQkFDN0MsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFDRCxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxDQUFDO2FBQ0YsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Ozs7O0lBRUQseUNBQWlCOzs7OztJQUFqQixVQUFrQixLQUFhLEVBQUUsSUFBYzs7WUFDdkMsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzs7WUFDNUYsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7UUFDL0UsMEVBQTBFO1FBRTFFLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsK0JBQU87OztJQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7Z0JBL0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkE5QkMsVUFBVTtnQkFHVixXQUFXO2dCQUNYLGdCQUFnQjs7O2tDQWtEZixLQUFLOztJQXNDUixvQkFBQztDQUFBLEFBaEVELElBZ0VDO1NBN0RZLGFBQWE7Ozs7OztJQUN4QixpQ0FBc0I7Ozs7O0lBQ3RCLGtDQUF1Qjs7Ozs7SUFDdkIseUNBQThCOzs7OztJQUc1QixvQ0FBK0I7Ozs7O0lBQy9CLHFDQUE4Qzs7Ozs7SUFDOUMsdUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgb25zIGZyb20gJ29uc2VudWknO1xuXG5leHBvcnQgY2xhc3MgSXRlbUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgJGltcGxpY2l0OiBhbnksIHB1YmxpYyBpbmRleDogbnVtYmVyLCBwdWJsaWMgY291bnQ6IG51bWJlcikge1xuICB9XG59XG5cbi8qKlxuICogQGVsZW1lbnQgb25zLWxhenktcmVwZWF0XG4gKiBAZGlyZWN0aXZlIE9uc0xhenlSZXBlYXRcbiAqIEBzZWxlY3RvciBbb25zLWxhenktcmVwZWF0XVxuICogQGRlc2NyaXB0aW9uXG4gKiAgIFtlbl1Bbmd1bGFyIGRpcmVjdGl2ZSBmb3IgYDxvbnMtbGF6eS1yZXBlYXQ+YCBjb21wb25lbnQuWy9lbl1cbiAqICAgW2phXWA8b25zLWxhenktcmVwZWF0PmDopoHntKDjgajlkIzjgZjmqZ/og73jgpLmj5DkvpvjgZnjgotBbmd1bGFy44OH44Kj44Os44Kv44OG44Kj44OW44Gn44GZ44CCWy9qYV1cbiAqIEBleGFtcGxlXG4gKiAgIDxvbnMtbGlzdD5cbiAqICAgICA8b25zLWxpc3QtaXRlbSAqb25zTGF6eVJlcGVhdD1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4XCI+XG4gKiAgICAgICAje3tpfX0ge3tpdGVtLm1zZ319XG4gKiAgICAgPC9vbnMtbGlzdC1pdGVtPlxuICogICA8L29ucy1saXN0PlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbb25zTGF6eVJlcGVhdF0nXG59KVxuZXhwb3J0IGNsYXNzIE9uc0xhenlSZXBlYXQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9lbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgX3Byb3ZpZGVyOiBhbnk7XG4gIHByaXZhdGUgX29uc0xhenlSZXBlYXRPZjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPEl0ZW1Db250ZXh0PixcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gIH1cblxuICAvKipcbiAgICogQGlucHV0IG9uc0xhenlSZXBlYXRcbiAgICogQGRlc2NcbiAgICogICBbZW5dUmVuZGVyIGluZmluaXRlIGxpc3RzIHdpdGggXCJsZXQgb2ZcIiBzeW50YXggaW4gQW5ndWxhci5bL2VuXVxuICAgKiAgIFtqYV1sZXQgb2blvI/jgpLmjIflrprjgZfjgb7jgZnjgIJbL2phXVxuICAgKiBAZXhhbXBsZVxuICAgKiAgPG9ucy1saXN0PlxuICAgKiAgICA8b25zLWxpc3QtaXRlbSAqb25zTGF6eVJlcGVhdD1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCI+XG4gICAqICAgICAge3ttZXNzYWdlfX1cbiAgICogICAgPC9vbnMtbGlzdC1pdGVtPlxuICAgKiAgPC9vbnMtbGlzdD5cbiAgICovXG4gIEBJbnB1dCgpIHNldCBvbnNMYXp5UmVwZWF0T2YodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX29uc0xhenlSZXBlYXRPZiA9IHZhbHVlO1xuXG4gICAgdGhpcy5fcHJvdmlkZXIgPSBuZXcgKDxhbnk+b25zKS5faW50ZXJuYWwuTGF6eVJlcGVhdFByb3ZpZGVyKFxuICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQsXG4gICAgICBuZXcgKDxhbnk+b25zKS5faW50ZXJuYWwuTGF6eVJlcGVhdERlbGVnYXRlKHtcbiAgICAgICAgbG9hZEl0ZW1FbGVtZW50OiAoaW5kZXg6IG51bWJlciwgZG9uZTogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgICB0aGlzLl9sb2FkSXRlbVRlbXBsYXRlKGluZGV4LCBkb25lKTtcbiAgICAgICAgfSxcbiAgICAgICAgY291bnRJdGVtczogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9vbnNMYXp5UmVwZWF0T2YubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBfbG9hZEl0ZW1UZW1wbGF0ZShpbmRleDogbnVtYmVyLCBkb25lOiBGdW5jdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgSXRlbUNvbnRleHQodGhpcy5fb25zTGF6eVJlcGVhdE9mW2luZGV4XSwgaW5kZXgsIHRoaXMuX29uc0xhenlSZXBlYXRPZi5sZW5ndGgpO1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLl92aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90ZW1wbGF0ZVJlZiwgY29udGV4dCk7XG4gICAgLy8gZGlydHkgZml4IG9uIGNyZWF0ZUVtYmVkZGVkVmlldygpIGRvZXMgbm90IGluc2VydCBET00gZWxlbWVudCByYW5kb21seS5cblxuICAgIGRvbmUoe2VsZW1lbnQ6IHZpZXcucm9vdE5vZGVzWzBdfSk7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLl9wcm92aWRlcikge1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgdGhpcy5fcHJvdmlkZXIucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9wcm92aWRlcikge1xuICAgICAgdGhpcy5fcHJvdmlkZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLl92aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgdGhpcy5fcHJvdmlkZXIgPSBudWxsO1xuICB9XG59XG4iXX0=