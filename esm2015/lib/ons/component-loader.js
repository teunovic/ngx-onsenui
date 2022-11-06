/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ApplicationRef } from '@angular/core';
export class ComponentLoader {
    /**
     * @param {?} appRef
     */
    constructor(appRef) {
        this.appRef = appRef;
    }
    // Load an instance of ComponentRef in app view.
    /**
     * @param {?} componentRef
     * @return {?}
     */
    load(componentRef) {
        /** @type {?} */
        const rootElement = componentRef.location.nativeElement;
        if (this.appRef.attachView) {
            this.appRef.attachView(componentRef.hostView);
            componentRef.onDestroy(() => {
                this.appRef.detachView(componentRef.hostView);
                if (rootElement.parentNode) {
                    rootElement.parentNode.removeChild(rootElement);
                }
            });
        }
        else {
            if (((/** @type {?} */ (this.appRef))).registerChangeDetector) {
                ((/** @type {?} */ (this.appRef))).registerChangeDetector(componentRef.changeDetectorRef);
            }
            componentRef.onDestroy(() => {
                if (((/** @type {?} */ (this.appRef))).unregisterChangeDetector) {
                    ((/** @type {?} */ (this.appRef))).unregisterChangeDetector(componentRef.changeDetectorRef);
                }
                if (rootElement.parentNode) {
                    rootElement.parentNode.removeChild(rootElement);
                }
            });
        }
        /** @type {?} */
        const rootContainer = ((/** @type {?} */ (this.appRef))).components[0].location.nativeElement;
        rootContainer.appendChild(rootElement);
    }
}
ComponentLoader.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentLoader.ctorParameters = () => [
    { type: ApplicationRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.appRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbnNlbnVpLyIsInNvdXJjZXMiOlsibGliL29ucy9jb21wb25lbnQtbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsVUFBVSxFQUNWLGNBQWMsRUFFZixNQUFNLGVBQWUsQ0FBQztBQUd2QixNQUFNLE9BQU8sZUFBZTs7OztJQUMxQixZQUFvQixNQUFzQjtRQUF0QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtJQUMxQyxDQUFDOzs7Ozs7SUFHRCxJQUFJLENBQUMsWUFBK0I7O2NBQzVCLFdBQVcsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWE7UUFFdkQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFOUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFOUMsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFO29CQUMxQixXQUFXLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDakQ7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsbUJBQUssSUFBSSxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsc0JBQXNCLEVBQUU7Z0JBQzdDLENBQUMsbUJBQUssSUFBSSxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDM0U7WUFFRCxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLG1CQUFLLElBQUksQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLHdCQUF3QixFQUFFO29CQUMvQyxDQUFDLG1CQUFLLElBQUksQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUM3RTtnQkFFRCxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUU7b0JBQzFCLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNqRDtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7O2NBRUssYUFBYSxHQUFHLENBQUMsbUJBQUssSUFBSSxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhO1FBQzdFLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBckNGLFVBQVU7Ozs7WUFKVCxjQUFjOzs7Ozs7O0lBTUYsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0b3IsXG4gIEluamVjdGFibGUsXG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMb2FkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcbiAgfVxuXG4gIC8vIExvYWQgYW4gaW5zdGFuY2Ugb2YgQ29tcG9uZW50UmVmIGluIGFwcCB2aWV3LlxuICBsb2FkKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pIHtcbiAgICBjb25zdCByb290RWxlbWVudCA9IGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcpIHtcbiAgICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgICAgY29tcG9uZW50UmVmLm9uRGVzdHJveSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXBwUmVmLmRldGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgICAgICBpZiAocm9vdEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHJvb3RFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocm9vdEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCg8YW55PnRoaXMuYXBwUmVmKS5yZWdpc3RlckNoYW5nZURldGVjdG9yKSB7XG4gICAgICAgICg8YW55PnRoaXMuYXBwUmVmKS5yZWdpc3RlckNoYW5nZURldGVjdG9yKGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudFJlZi5vbkRlc3Ryb3koKCkgPT4ge1xuICAgICAgICBpZiAoKDxhbnk+dGhpcy5hcHBSZWYpLnVucmVnaXN0ZXJDaGFuZ2VEZXRlY3Rvcikge1xuICAgICAgICAgICg8YW55PnRoaXMuYXBwUmVmKS51bnJlZ2lzdGVyQ2hhbmdlRGV0ZWN0b3IoY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb290RWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgcm9vdEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb290RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJvb3RDb250YWluZXIgPSAoPGFueT50aGlzLmFwcFJlZikuY29tcG9uZW50c1swXS5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIHJvb3RDb250YWluZXIuYXBwZW5kQ2hpbGQocm9vdEVsZW1lbnQpO1xuICB9XG59XG5cblxuIl19