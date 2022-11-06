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
export class ModalFactory {
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
    createModal(componentType, params = {}) {
        console.warn('[ngx-onsenui] ModalFactory is deprecated since 4.0.0-rc.0. Place <ons-modal> into your component instead.');
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
                    const modalElement = element.tagName === 'ONS-MODAL' ? element : element.querySelector('ons-modal');
                    if (!modalElement) {
                        throw Error('<ons-modal> element is not found in component\'s template.');
                    }
                    resolve({ modal: modalElement, destroy: () => componentRef.destroy() });
                });
            });
        });
    }
}
ModalFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ModalFactory.ctorParameters = () => [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbnNlbnVpLyIsInNvdXJjZXMiOlsibGliL29ucy9tb2RhbC1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsUUFBUSxFQUNSLHdCQUF3QixFQUN4QixVQUFVLEVBQ1YsY0FBYyxFQUdkLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUVuRCw4QkFHQzs7O0lBRkMseUJBQVc7O0lBQ1gsMkJBQWtCOzs7OztBQU9wQixNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7SUFFdkIsWUFDVSxTQUFtQixFQUNuQixTQUFtQyxFQUNuQyxPQUF1QixFQUN2QixnQkFBaUMsRUFDakMsS0FBYTtRQUpiLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBMEI7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFRO0lBRXZCLENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBQyxhQUF3QixFQUFFLFNBQWlCLEVBQUU7UUFDdkQsT0FBTyxDQUFDLElBQUksQ0FBQywyR0FBMkcsQ0FBQyxDQUFDO1FBRTFILE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFOzswQkFDWixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUM7OzBCQUMvRCxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQzt3QkFDL0IsU0FBUyxFQUFFOzRCQUNULEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUM7eUJBQ2hEO3dCQUNELE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUztxQkFDdkIsQ0FBQzs7MEJBQ0ksWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDOzswQkFDdkMsV0FBVyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYTtvQkFFdkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzs7MEJBRW5DLE9BQU8sR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7MEJBQ2pDLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztvQkFFbkcsSUFBSSxDQUFDLFlBQVksRUFBRTt3QkFDakIsTUFBTSxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQztxQkFDM0U7b0JBRUQsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQUMsQ0FBQztnQkFDeEUsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBekNGLFVBQVU7Ozs7WUFuQlQsUUFBUTtZQUNSLHdCQUF3QjtZQUV4QixjQUFjO1lBTVIsZUFBZTtZQUhyQixNQUFNOzs7Ozs7O0lBaUJKLGlDQUEyQjs7Ozs7SUFDM0IsaUNBQTJDOzs7OztJQUMzQywrQkFBK0I7Ozs7O0lBQy9CLHdDQUF5Qzs7Ozs7SUFDekMsNkJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0YWJsZSxcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudFJlZixcbiAgVHlwZSxcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYXJhbXN9IGZyb20gJy4vcGFyYW1zJztcbmltcG9ydCB7Q29tcG9uZW50TG9hZGVyfSBmcm9tICcuL2NvbXBvbmVudC1sb2FkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsUmVmIHtcbiAgbW9kYWw6IGFueTtcbiAgZGVzdHJveTogRnVuY3Rpb247XG59XG5cbi8qKlxuICogQG9iamVjdCBNb2RhbEZhY3RvcnlcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vZGFsRmFjdG9yeSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3Jlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9jb21wb25lbnRMb2FkZXI6IENvbXBvbmVudExvYWRlcixcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmVcbiAgKSB7XG4gIH1cblxuICBjcmVhdGVNb2RhbChjb21wb25lbnRUeXBlOiBUeXBlPGFueT4sIHBhcmFtczogT2JqZWN0ID0ge30pOiBQcm9taXNlPE1vZGFsUmVmPiB7XG4gICAgY29uc29sZS53YXJuKCdbbmd4LW9uc2VudWldIE1vZGFsRmFjdG9yeSBpcyBkZXByZWNhdGVkIHNpbmNlIDQuMC4wLXJjLjAuIFBsYWNlIDxvbnMtbW9kYWw+IGludG8geW91ciBjb21wb25lbnQgaW5zdGVhZC4nKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fcmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50VHlwZSk7XG4gICAgICAgICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgIHtwcm92aWRlOiBQYXJhbXMsIHVzZVZhbHVlOiBuZXcgUGFyYW1zKHBhcmFtcyl9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcbiAgICAgICAgICBjb25zdCByb290RWxlbWVudCA9IGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgICAgdGhpcy5fY29tcG9uZW50TG9hZGVyLmxvYWQoY29tcG9uZW50UmVmKTtcblxuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByb290RWxlbWVudC5jaGlsZHJlblswXTtcbiAgICAgICAgICBjb25zdCBtb2RhbEVsZW1lbnQgPSBlbGVtZW50LnRhZ05hbWUgPT09ICdPTlMtTU9EQUwnID8gZWxlbWVudCA6IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignb25zLW1vZGFsJyk7XG5cbiAgICAgICAgICBpZiAoIW1vZGFsRWxlbWVudCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJzxvbnMtbW9kYWw+IGVsZW1lbnQgaXMgbm90IGZvdW5kIGluIGNvbXBvbmVudFxcJ3MgdGVtcGxhdGUuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x2ZSh7bW9kYWw6IG1vZGFsRWxlbWVudCwgZGVzdHJveTogKCkgPT4gY29tcG9uZW50UmVmLmRlc3Ryb3koKX0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=