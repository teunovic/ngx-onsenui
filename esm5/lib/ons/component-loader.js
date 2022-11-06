/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ApplicationRef } from '@angular/core';
var ComponentLoader = /** @class */ (function () {
    function ComponentLoader(appRef) {
        this.appRef = appRef;
    }
    // Load an instance of ComponentRef in app view.
    // Load an instance of ComponentRef in app view.
    /**
     * @param {?} componentRef
     * @return {?}
     */
    ComponentLoader.prototype.load = 
    // Load an instance of ComponentRef in app view.
    /**
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        var _this = this;
        /** @type {?} */
        var rootElement = componentRef.location.nativeElement;
        if (this.appRef.attachView) {
            this.appRef.attachView(componentRef.hostView);
            componentRef.onDestroy(function () {
                _this.appRef.detachView(componentRef.hostView);
                if (rootElement.parentNode) {
                    rootElement.parentNode.removeChild(rootElement);
                }
            });
        }
        else {
            if (((/** @type {?} */ (this.appRef))).registerChangeDetector) {
                ((/** @type {?} */ (this.appRef))).registerChangeDetector(componentRef.changeDetectorRef);
            }
            componentRef.onDestroy(function () {
                if (((/** @type {?} */ (_this.appRef))).unregisterChangeDetector) {
                    ((/** @type {?} */ (_this.appRef))).unregisterChangeDetector(componentRef.changeDetectorRef);
                }
                if (rootElement.parentNode) {
                    rootElement.parentNode.removeChild(rootElement);
                }
            });
        }
        /** @type {?} */
        var rootContainer = ((/** @type {?} */ (this.appRef))).components[0].location.nativeElement;
        rootContainer.appendChild(rootElement);
    };
    ComponentLoader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentLoader.ctorParameters = function () { return [
        { type: ApplicationRef }
    ]; };
    return ComponentLoader;
}());
export { ComponentLoader };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.appRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbnNlbnVpLyIsInNvdXJjZXMiOlsibGliL29ucy9jb21wb25lbnQtbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsVUFBVSxFQUNWLGNBQWMsRUFFZixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQUVFLHlCQUFvQixNQUFzQjtRQUF0QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtJQUMxQyxDQUFDO0lBRUQsZ0RBQWdEOzs7Ozs7SUFDaEQsOEJBQUk7Ozs7OztJQUFKLFVBQUssWUFBK0I7UUFBcEMsaUJBK0JDOztZQTlCTyxXQUFXLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhO1FBRXZELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTlDLFlBQVksQ0FBQyxTQUFTLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFOUMsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFO29CQUMxQixXQUFXLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDakQ7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsbUJBQUssSUFBSSxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsc0JBQXNCLEVBQUU7Z0JBQzdDLENBQUMsbUJBQUssSUFBSSxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDM0U7WUFFRCxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUNyQixJQUFJLENBQUMsbUJBQUssS0FBSSxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsd0JBQXdCLEVBQUU7b0JBQy9DLENBQUMsbUJBQUssS0FBSSxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsd0JBQXdCLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7aUJBQzdFO2dCQUVELElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRTtvQkFDMUIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ2pEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjs7WUFFSyxhQUFhLEdBQUcsQ0FBQyxtQkFBSyxJQUFJLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWE7UUFDN0UsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOztnQkFyQ0YsVUFBVTs7OztnQkFKVCxjQUFjOztJQTBDaEIsc0JBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQXJDWSxlQUFlOzs7Ozs7SUFDZCxpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RvcixcbiAgSW5qZWN0YWJsZSxcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExvYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge1xuICB9XG5cbiAgLy8gTG9hZCBhbiBpbnN0YW5jZSBvZiBDb21wb25lbnRSZWYgaW4gYXBwIHZpZXcuXG4gIGxvYWQoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pikge1xuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5hcHBSZWYuYXR0YWNoVmlldykge1xuICAgICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG4gICAgICBjb21wb25lbnRSZWYub25EZXN0cm95KCgpID0+IHtcbiAgICAgICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXG4gICAgICAgIGlmIChyb290RWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgcm9vdEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb290RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoKDxhbnk+dGhpcy5hcHBSZWYpLnJlZ2lzdGVyQ2hhbmdlRGV0ZWN0b3IpIHtcbiAgICAgICAgKDxhbnk+dGhpcy5hcHBSZWYpLnJlZ2lzdGVyQ2hhbmdlRGV0ZWN0b3IoY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmKTtcbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50UmVmLm9uRGVzdHJveSgoKSA9PiB7XG4gICAgICAgIGlmICgoPGFueT50aGlzLmFwcFJlZikudW5yZWdpc3RlckNoYW5nZURldGVjdG9yKSB7XG4gICAgICAgICAgKDxhbnk+dGhpcy5hcHBSZWYpLnVucmVnaXN0ZXJDaGFuZ2VEZXRlY3Rvcihjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3RFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICByb290RWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJvb3RFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdENvbnRhaW5lciA9ICg8YW55PnRoaXMuYXBwUmVmKS5jb21wb25lbnRzWzBdLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcm9vdENvbnRhaW5lci5hcHBlbmRDaGlsZChyb290RWxlbWVudCk7XG4gIH1cbn1cblxuXG4iXX0=