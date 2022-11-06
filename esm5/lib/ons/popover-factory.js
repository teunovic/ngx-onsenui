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
var PopoverFactory = /** @class */ (function () {
    function PopoverFactory(_injector, _resolver, _appRef, _componentLoader, _zone) {
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
    PopoverFactory.prototype.createPopover = /**
     * @param {?} componentType
     * @param {?=} params
     * @return {?}
     */
    function (componentType, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        console.warn('[ngx-onsenui] PopoverFactory is deprecated since 4.0.0-rc.0. Place <ons-popover> into your component instead.');
        return new Promise(function (resolve) {
            setImmediate(function () {
                _this._zone.run(function () {
                    /** @type {?} */
                    var factory = _this._resolver.resolveComponentFactory(componentType);
                    /** @type {?} */
                    var injector = Injector.create({
                        providers: [
                            { provide: Params, useValue: new Params(params) }
                        ],
                        parent: _this._injector
                    });
                    /** @type {?} */
                    var componentRef = factory.create(injector);
                    /** @type {?} */
                    var rootElement = componentRef.location.nativeElement;
                    _this._componentLoader.load(componentRef);
                    /** @type {?} */
                    var element = rootElement.children[0];
                    /** @type {?} */
                    var popoverElement = element.tagName === 'ONS-POPOVER' ? element : element.querySelector('ons-popover');
                    if (!popoverElement) {
                        throw Error('<ons-popover> element is not found in component\'s template.');
                    }
                    resolve({ popover: popoverElement, destroy: function () { return componentRef.destroy(); } });
                });
            });
        });
    };
    PopoverFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PopoverFactory.ctorParameters = function () { return [
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: ComponentLoader },
        { type: NgZone }
    ]; };
    return PopoverFactory;
}());
export { PopoverFactory };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9uc2VudWkvIiwic291cmNlcyI6WyJsaWIvb25zL3BvcG92ZXItZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFFBQVEsRUFFUix3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLGNBQWMsRUFJZCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFbkQsZ0NBR0M7OztJQUZDLDZCQUFhOztJQUNiLDZCQUFrQjs7Ozs7QUFNcEI7SUFHRSx3QkFDVSxTQUFtQixFQUNuQixTQUFtQyxFQUNuQyxPQUF1QixFQUN2QixnQkFBaUMsRUFDakMsS0FBYTtRQUpiLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBMEI7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFRO0lBRXZCLENBQUM7Ozs7OztJQUVELHNDQUFhOzs7OztJQUFiLFVBQWMsYUFBa0IsRUFBRSxNQUFtQjtRQUFyRCxpQkE2QkM7UUE3QmlDLHVCQUFBLEVBQUEsV0FBbUI7UUFDbkQsT0FBTyxDQUFDLElBQUksQ0FBQywrR0FBK0csQ0FBQyxDQUFDO1FBRTlILE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3hCLFlBQVksQ0FBQztnQkFDWCxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7d0JBQ1AsT0FBTyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDOzt3QkFDL0QsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7d0JBQy9CLFNBQVMsRUFBRTs0QkFDVCxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDO3lCQUNoRDt3QkFDRCxNQUFNLEVBQUUsS0FBSSxDQUFDLFNBQVM7cUJBQ3ZCLENBQUM7O3dCQUNJLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7d0JBQ3ZDLFdBQVcsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWE7b0JBRXZELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7O3dCQUVuQyxPQUFPLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7O3dCQUNqQyxjQUFjLEdBQUcsT0FBTyxDQUFDLE9BQU8sS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7b0JBRXpHLElBQUksQ0FBQyxjQUFjLEVBQUU7d0JBQ25CLE1BQU0sS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7cUJBQzdFO29CQUVELE9BQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLGNBQU0sT0FBQSxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQXRCLENBQXNCLEVBQUMsQ0FBQyxDQUFDO2dCQUM1RSxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkF6Q0YsVUFBVTs7OztnQkFyQlQsUUFBUTtnQkFFUix3QkFBd0I7Z0JBRXhCLGNBQWM7Z0JBT1IsZUFBZTtnQkFIckIsTUFBTTs7SUF1RFIscUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXpDWSxjQUFjOzs7Ozs7SUFHdkIsbUNBQTJCOzs7OztJQUMzQixtQ0FBMkM7Ozs7O0lBQzNDLGlDQUErQjs7Ozs7SUFDL0IsMENBQXlDOzs7OztJQUN6QywrQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RvcixcbiAgRWxlbWVudFJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3RhYmxlLFxuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBUeXBlLFxuICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhcmFtc30gZnJvbSAnLi9wYXJhbXMnO1xuaW1wb3J0IHtDb21wb25lbnRMb2FkZXJ9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9wb3ZlclJlZiB7XG4gIHBvcG92ZXI6IGFueTtcbiAgZGVzdHJveTogRnVuY3Rpb247XG59XG5cbi8qKlxuICogQG9iamVjdCBQb3BvdmVyRmFjdG9yeVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9wb3ZlckZhY3Rvcnkge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF9yZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50TG9hZGVyOiBDb21wb25lbnRMb2FkZXIsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lXG4gICkge1xuICB9XG5cbiAgY3JlYXRlUG9wb3Zlcihjb21wb25lbnRUeXBlOiBhbnksIHBhcmFtczogT2JqZWN0ID0ge30pOiBQcm9taXNlPFBvcG92ZXJSZWY+IHsgLy8gVE9ETzogZml4IFwiYW55XCJcbiAgICBjb25zb2xlLndhcm4oJ1tuZ3gtb25zZW51aV0gUG9wb3ZlckZhY3RvcnkgaXMgZGVwcmVjYXRlZCBzaW5jZSA0LjAuMC1yYy4wLiBQbGFjZSA8b25zLXBvcG92ZXI+IGludG8geW91ciBjb21wb25lbnQgaW5zdGVhZC4nKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fcmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50VHlwZSk7XG4gICAgICAgICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgIHtwcm92aWRlOiBQYXJhbXMsIHVzZVZhbHVlOiBuZXcgUGFyYW1zKHBhcmFtcyl9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcbiAgICAgICAgICBjb25zdCByb290RWxlbWVudCA9IGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgICAgdGhpcy5fY29tcG9uZW50TG9hZGVyLmxvYWQoY29tcG9uZW50UmVmKTtcblxuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByb290RWxlbWVudC5jaGlsZHJlblswXTtcbiAgICAgICAgICBjb25zdCBwb3BvdmVyRWxlbWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ09OUy1QT1BPVkVSJyA/IGVsZW1lbnQgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ29ucy1wb3BvdmVyJyk7XG5cbiAgICAgICAgICBpZiAoIXBvcG92ZXJFbGVtZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignPG9ucy1wb3BvdmVyPiBlbGVtZW50IGlzIG5vdCBmb3VuZCBpbiBjb21wb25lbnRcXCdzIHRlbXBsYXRlLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdmUoe3BvcG92ZXI6IHBvcG92ZXJFbGVtZW50LCBkZXN0cm95OiAoKSA9PiBjb21wb25lbnRSZWYuZGVzdHJveSgpfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==