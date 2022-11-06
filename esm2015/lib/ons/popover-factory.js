/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injector, ComponentFactoryResolver, Injectable, ApplicationRef, NgZone } from '@angular/core';
import { Params } from './params';
import { ComponentLoader } from './component-loader';
/**
 * @record
 */
export function PopoverRef() { }
if (false) {
    /** @type {?} */
    PopoverRef.prototype.popover;
    /** @type {?} */
    PopoverRef.prototype.destroy;
}
/**
 * \@object PopoverFactory
 */
export class PopoverFactory {
    /**
     * @param {?} _injector
     * @param {?} _resolver
     * @param {?} _appRef
     * @param {?} _componentLoader
     * @param {?} _zone
     */
    constructor(_injector, _resolver, _appRef, _componentLoader, _zone) {
        this._injector = _injector;
        this._resolver = _resolver;
        this._appRef = _appRef;
        this._componentLoader = _componentLoader;
        this._zone = _zone;
    }
    /**
     * @param {?} componentType
     * @param {?=} params
     * @return {?}
     */
    createPopover(componentType, params = {}) {
        console.warn('[ngx-onsenui] PopoverFactory is deprecated since 4.0.0-rc.0. Place <ons-popover> into your component instead.');
        return new Promise(resolve => {
            setImmediate(() => {
                this._zone.run(() => {
                    /** @type {?} */
                    const factory = this._resolver.resolveComponentFactory(componentType);
                    /** @type {?} */
                    const injector = Injector.create({
                        providers: [
                            { provide: Params, useValue: new Params(params) }
                        ],
                        parent: this._injector
                    });
                    /** @type {?} */
                    const componentRef = factory.create(injector);
                    /** @type {?} */
                    const rootElement = componentRef.location.nativeElement;
                    this._componentLoader.load(componentRef);
                    /** @type {?} */
                    const element = rootElement.children[0];
                    /** @type {?} */
                    const popoverElement = element.tagName === 'ONS-POPOVER' ? element : element.querySelector('ons-popover');
                    if (!popoverElement) {
                        throw Error('<ons-popover> element is not found in component\'s template.');
                    }
                    resolve({ popover: popoverElement, destroy: () => componentRef.destroy() });
                });
            });
        });
    }
}
PopoverFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PopoverFactory.ctorParameters = () => [
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: ComponentLoader },
    { type: NgZone }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PopoverFactory.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    PopoverFactory.prototype._resolver;
    /**
     * @type {?}
     * @private
     */
    PopoverFactory.prototype._appRef;
    /**
     * @type {?}
     * @private
     */
    PopoverFactory.prototype._componentLoader;
    /**
     * @type {?}
     * @private
     */
    PopoverFactory.prototype._zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9uc2VudWkvIiwic291cmNlcyI6WyJsaWIvb25zL3BvcG92ZXItZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFFBQVEsRUFFUix3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLGNBQWMsRUFJZCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFbkQsZ0NBR0M7OztJQUZDLDZCQUFhOztJQUNiLDZCQUFrQjs7Ozs7QUFPcEIsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7O0lBRXpCLFlBQ1UsU0FBbUIsRUFDbkIsU0FBbUMsRUFDbkMsT0FBdUIsRUFDdkIsZ0JBQWlDLEVBQ2pDLEtBQWE7UUFKYixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQTBCO1FBQ25DLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUV2QixDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsYUFBa0IsRUFBRSxTQUFpQixFQUFFO1FBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUMsK0dBQStHLENBQUMsQ0FBQztRQUU5SCxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNCLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTs7MEJBQ1osT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDOzswQkFDL0QsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7d0JBQy9CLFNBQVMsRUFBRTs0QkFDVCxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDO3lCQUNoRDt3QkFDRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVM7cUJBQ3ZCLENBQUM7OzBCQUNJLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7MEJBQ3ZDLFdBQVcsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWE7b0JBRXZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7OzBCQUVuQyxPQUFPLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OzBCQUNqQyxjQUFjLEdBQUcsT0FBTyxDQUFDLE9BQU8sS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7b0JBRXpHLElBQUksQ0FBQyxjQUFjLEVBQUU7d0JBQ25CLE1BQU0sS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7cUJBQzdFO29CQUVELE9BQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUFDLENBQUM7Z0JBQzVFLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXpDRixVQUFVOzs7O1lBckJULFFBQVE7WUFFUix3QkFBd0I7WUFFeEIsY0FBYztZQU9SLGVBQWU7WUFIckIsTUFBTTs7Ozs7OztJQWlCSixtQ0FBMkI7Ozs7O0lBQzNCLG1DQUEyQzs7Ozs7SUFDM0MsaUNBQStCOzs7OztJQUMvQiwwQ0FBeUM7Ozs7O0lBQ3pDLCtCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdG9yLFxuICBFbGVtZW50UmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdGFibGUsXG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFR5cGUsXG4gIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFyYW1zfSBmcm9tICcuL3BhcmFtcyc7XG5pbXBvcnQge0NvbXBvbmVudExvYWRlcn0gZnJvbSAnLi9jb21wb25lbnQtbG9hZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBQb3BvdmVyUmVmIHtcbiAgcG9wb3ZlcjogYW55O1xuICBkZXN0cm95OiBGdW5jdGlvbjtcbn1cblxuLyoqXG4gKiBAb2JqZWN0IFBvcG92ZXJGYWN0b3J5XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3BvdmVyRmFjdG9yeSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3Jlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9jb21wb25lbnRMb2FkZXI6IENvbXBvbmVudExvYWRlcixcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmVcbiAgKSB7XG4gIH1cblxuICBjcmVhdGVQb3BvdmVyKGNvbXBvbmVudFR5cGU6IGFueSwgcGFyYW1zOiBPYmplY3QgPSB7fSk6IFByb21pc2U8UG9wb3ZlclJlZj4geyAvLyBUT0RPOiBmaXggXCJhbnlcIlxuICAgIGNvbnNvbGUud2FybignW25neC1vbnNlbnVpXSBQb3BvdmVyRmFjdG9yeSBpcyBkZXByZWNhdGVkIHNpbmNlIDQuMC4wLXJjLjAuIFBsYWNlIDxvbnMtcG9wb3Zlcj4gaW50byB5b3VyIGNvbXBvbmVudCBpbnN0ZWFkLicpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRUeXBlKTtcbiAgICAgICAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAge3Byb3ZpZGU6IFBhcmFtcywgdXNlVmFsdWU6IG5ldyBQYXJhbXMocGFyYW1zKX1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMuX2luamVjdG9yXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuICAgICAgICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICB0aGlzLl9jb21wb25lbnRMb2FkZXIubG9hZChjb21wb25lbnRSZWYpO1xuXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHJvb3RFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgICAgICAgIGNvbnN0IHBvcG92ZXJFbGVtZW50ID0gZWxlbWVudC50YWdOYW1lID09PSAnT05TLVBPUE9WRVInID8gZWxlbWVudCA6IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignb25zLXBvcG92ZXInKTtcblxuICAgICAgICAgIGlmICghcG9wb3ZlckVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCc8b25zLXBvcG92ZXI+IGVsZW1lbnQgaXMgbm90IGZvdW5kIGluIGNvbXBvbmVudFxcJ3MgdGVtcGxhdGUuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x2ZSh7cG9wb3ZlcjogcG9wb3ZlckVsZW1lbnQsIGRlc3Ryb3k6ICgpID0+IGNvbXBvbmVudFJlZi5kZXN0cm95KCl9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19