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
export function ModalRef() { }
if (false) {
    /** @type {?} */
    ModalRef.prototype.modal;
    /** @type {?} */
    ModalRef.prototype.destroy;
}
/**
 * \@object ModalFactory
 */
var ModalFactory = /** @class */ (function () {
    function ModalFactory(_injector, _resolver, _appRef, _componentLoader, _zone) {
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
    ModalFactory.prototype.createModal = /**
     * @param {?} componentType
     * @param {?=} params
     * @return {?}
     */
    function (componentType, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        console.warn('[ngx-onsenui] ModalFactory is deprecated since 4.0.0-rc.0. Place <ons-modal> into your component instead.');
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
                    var modalElement = element.tagName === 'ONS-MODAL' ? element : element.querySelector('ons-modal');
                    if (!modalElement) {
                        throw Error('<ons-modal> element is not found in component\'s template.');
                    }
                    resolve({ modal: modalElement, destroy: function () { return componentRef.destroy(); } });
                });
            });
        });
    };
    ModalFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ModalFactory.ctorParameters = function () { return [
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: ComponentLoader },
        { type: NgZone }
    ]; };
    return ModalFactory;
}());
export { ModalFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalFactory.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    ModalFactory.prototype._resolver;
    /**
     * @type {?}
     * @private
     */
    ModalFactory.prototype._appRef;
    /**
     * @type {?}
     * @private
     */
    ModalFactory.prototype._componentLoader;
    /**
     * @type {?}
     * @private
     */
    ModalFactory.prototype._zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbnNlbnVpLyIsInNvdXJjZXMiOlsibGliL29ucy9tb2RhbC1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsUUFBUSxFQUNSLHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsY0FBYyxFQUdkLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUVuRCw4QkFHQzs7O0lBRkMseUJBQVc7O0lBQ1gsMkJBQWtCOzs7OztBQU1wQjtJQUdFLHNCQUNVLFNBQW1CLEVBQ25CLFNBQW1DLEVBQ25DLE9BQXVCLEVBQ3ZCLGdCQUFpQyxFQUNqQyxLQUFhO1FBSmIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUEwQjtRQUNuQyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLFVBQUssR0FBTCxLQUFLLENBQVE7SUFFdkIsQ0FBQzs7Ozs7O0lBRUQsa0NBQVc7Ozs7O0lBQVgsVUFBWSxhQUF3QixFQUFFLE1BQW1CO1FBQXpELGlCQTZCQztRQTdCcUMsdUJBQUEsRUFBQSxXQUFtQjtRQUN2RCxPQUFPLENBQUMsSUFBSSxDQUFDLDJHQUEyRyxDQUFDLENBQUM7UUFFMUgsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDeEIsWUFBWSxDQUFDO2dCQUNYLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzt3QkFDUCxPQUFPLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUM7O3dCQUMvRCxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQzt3QkFDL0IsU0FBUyxFQUFFOzRCQUNULEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUM7eUJBQ2hEO3dCQUNELE1BQU0sRUFBRSxLQUFJLENBQUMsU0FBUztxQkFDdkIsQ0FBQzs7d0JBQ0ksWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDOzt3QkFDdkMsV0FBVyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYTtvQkFFdkQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs7d0JBRW5DLE9BQU8sR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7d0JBQ2pDLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztvQkFFbkcsSUFBSSxDQUFDLFlBQVksRUFBRTt3QkFDakIsTUFBTSxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQztxQkFDM0U7b0JBRUQsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsY0FBTSxPQUFBLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDLENBQUM7Z0JBQ3hFLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXpDRixVQUFVOzs7O2dCQW5CVCxRQUFRO2dCQUNSLHdCQUF3QjtnQkFFeEIsY0FBYztnQkFNUixlQUFlO2dCQUhyQixNQUFNOztJQXVEUixtQkFBQztDQUFBLEFBMUNELElBMENDO1NBekNZLFlBQVk7Ozs7OztJQUdyQixpQ0FBMkI7Ozs7O0lBQzNCLGlDQUEyQzs7Ozs7SUFDM0MsK0JBQStCOzs7OztJQUMvQix3Q0FBeUM7Ozs7O0lBQ3pDLDZCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdG9yLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdGFibGUsXG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIFR5cGUsXG4gIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFyYW1zfSBmcm9tICcuL3BhcmFtcyc7XG5pbXBvcnQge0NvbXBvbmVudExvYWRlcn0gZnJvbSAnLi9jb21wb25lbnQtbG9hZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbFJlZiB7XG4gIG1vZGFsOiBhbnk7XG4gIGRlc3Ryb3k6IEZ1bmN0aW9uO1xufVxuXG4vKipcbiAqIEBvYmplY3QgTW9kYWxGYWN0b3J5XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2RhbEZhY3Rvcnkge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF9yZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50TG9hZGVyOiBDb21wb25lbnRMb2FkZXIsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lXG4gICkge1xuICB9XG5cbiAgY3JlYXRlTW9kYWwoY29tcG9uZW50VHlwZTogVHlwZTxhbnk+LCBwYXJhbXM6IE9iamVjdCA9IHt9KTogUHJvbWlzZTxNb2RhbFJlZj4ge1xuICAgIGNvbnNvbGUud2FybignW25neC1vbnNlbnVpXSBNb2RhbEZhY3RvcnkgaXMgZGVwcmVjYXRlZCBzaW5jZSA0LjAuMC1yYy4wLiBQbGFjZSA8b25zLW1vZGFsPiBpbnRvIHlvdXIgY29tcG9uZW50IGluc3RlYWQuJyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX3Jlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudFR5cGUpO1xuICAgICAgICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICB7cHJvdmlkZTogUGFyYW1zLCB1c2VWYWx1ZTogbmV3IFBhcmFtcyhwYXJhbXMpfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG4gICAgICAgICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAgIHRoaXMuX2NvbXBvbmVudExvYWRlci5sb2FkKGNvbXBvbmVudFJlZik7XG5cbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcm9vdEVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgICAgICAgY29uc3QgbW9kYWxFbGVtZW50ID0gZWxlbWVudC50YWdOYW1lID09PSAnT05TLU1PREFMJyA/IGVsZW1lbnQgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ29ucy1tb2RhbCcpO1xuXG4gICAgICAgICAgaWYgKCFtb2RhbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCc8b25zLW1vZGFsPiBlbGVtZW50IGlzIG5vdCBmb3VuZCBpbiBjb21wb25lbnRcXCdzIHRlbXBsYXRlLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdmUoe21vZGFsOiBtb2RhbEVsZW1lbnQsIGRlc3Ryb3k6ICgpID0+IGNvbXBvbmVudFJlZi5kZXN0cm95KCl9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19