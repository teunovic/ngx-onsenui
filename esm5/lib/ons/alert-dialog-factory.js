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
export function AlertDialogRef() { }
if (false) {
    /** @type {?} */
    AlertDialogRef.prototype.alertDialog;
    /** @type {?} */
    AlertDialogRef.prototype.destroy;
}
/**
 * \@object AlertDialogFactory
 */
var AlertDialogFactory = /** @class */ (function () {
    function AlertDialogFactory(_injector, _resolver, _appRef, _componentLoader, _zone) {
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
    AlertDialogFactory.prototype.createAlertDialog = /**
     * @param {?} componentType
     * @param {?=} params
     * @return {?}
     */
    function (componentType, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        console.warn('[ngx-onsenui] AlertDialogFactory is deprecated since 4.0.0-rc.0. Place <ons-alert-dialog> into your component instead.');
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
                    var alertDialogElement = element.tagName === 'ONS-ALERT-DIALOG' ? element : element.querySelector('ons-alert-dialog');
                    if (!alertDialogElement) {
                        throw Error('<ons-alert-dialog> element is not found in component\'s template.');
                    }
                    resolve({ alertDialog: alertDialogElement, destroy: function () { return componentRef.destroy(); } });
                });
            });
        });
    };
    AlertDialogFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AlertDialogFactory.ctorParameters = function () { return [
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: ComponentLoader },
        { type: NgZone }
    ]; };
    return AlertDialogFactory;
}());
export { AlertDialogFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AlertDialogFactory.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    AlertDialogFactory.prototype._resolver;
    /**
     * @type {?}
     * @private
     */
    AlertDialogFactory.prototype._appRef;
    /**
     * @type {?}
     * @private
     */
    AlertDialogFactory.prototype._componentLoader;
    /**
     * @type {?}
     * @private
     */
    AlertDialogFactory.prototype._zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb25zZW51aS8iLCJzb3VyY2VzIjpbImxpYi9vbnMvYWxlcnQtZGlhbG9nLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxRQUFRLEVBQ1Isd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixjQUFjLEVBR2QsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRW5ELG9DQUdDOzs7SUFGQyxxQ0FBaUI7O0lBQ2pCLGlDQUFrQjs7Ozs7QUFNcEI7SUFHRSw0QkFDVSxTQUFtQixFQUNuQixTQUFtQyxFQUNuQyxPQUF1QixFQUN2QixnQkFBaUMsRUFDakMsS0FBYTtRQUpiLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBMEI7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFRO0lBRXZCLENBQUM7Ozs7OztJQUVELDhDQUFpQjs7Ozs7SUFBakIsVUFBa0IsYUFBd0IsRUFBRSxNQUFtQjtRQUEvRCxpQkE2QkM7UUE3QjJDLHVCQUFBLEVBQUEsV0FBbUI7UUFDN0QsT0FBTyxDQUFDLElBQUksQ0FBQyx3SEFBd0gsQ0FBQyxDQUFDO1FBRXZJLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3hCLFlBQVksQ0FBQztnQkFDWCxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7d0JBQ1AsT0FBTyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDOzt3QkFDL0QsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7d0JBQy9CLFNBQVMsRUFBRTs0QkFDVCxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDO3lCQUNoRDt3QkFDRCxNQUFNLEVBQUUsS0FBSSxDQUFDLFNBQVM7cUJBQ3ZCLENBQUM7O3dCQUNJLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7d0JBQ3ZDLFdBQVcsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWE7b0JBRXZELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7O3dCQUVuQyxPQUFPLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7O3dCQUNqQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsT0FBTyxLQUFLLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7b0JBRXZILElBQUksQ0FBQyxrQkFBa0IsRUFBRTt3QkFDdkIsTUFBTSxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQztxQkFDbEY7b0JBRUQsT0FBTyxDQUFDLEVBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxjQUFNLE9BQUEsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUF0QixDQUFzQixFQUFDLENBQUMsQ0FBQztnQkFDcEYsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBekNGLFVBQVU7Ozs7Z0JBbkJULFFBQVE7Z0JBQ1Isd0JBQXdCO2dCQUV4QixjQUFjO2dCQU1SLGVBQWU7Z0JBSHJCLE1BQU07O0lBdURSLHlCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0F6Q1ksa0JBQWtCOzs7Ozs7SUFHM0IsdUNBQTJCOzs7OztJQUMzQix1Q0FBMkM7Ozs7O0lBQzNDLHFDQUErQjs7Ozs7SUFDL0IsOENBQXlDOzs7OztJQUN6QyxtQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RvcixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3RhYmxlLFxuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBUeXBlLFxuICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhcmFtc30gZnJvbSAnLi9wYXJhbXMnO1xuaW1wb3J0IHtDb21wb25lbnRMb2FkZXJ9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnREaWFsb2dSZWYge1xuICBhbGVydERpYWxvZzogYW55O1xuICBkZXN0cm95OiBGdW5jdGlvbjtcbn1cblxuLyoqXG4gKiBAb2JqZWN0IEFsZXJ0RGlhbG9nRmFjdG9yeVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxlcnREaWFsb2dGYWN0b3J5IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBfcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgX2NvbXBvbmVudExvYWRlcjogQ29tcG9uZW50TG9hZGVyLFxuICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZVxuICApIHtcbiAgfVxuXG4gIGNyZWF0ZUFsZXJ0RGlhbG9nKGNvbXBvbmVudFR5cGU6IFR5cGU8YW55PiwgcGFyYW1zOiBPYmplY3QgPSB7fSk6IFByb21pc2U8QWxlcnREaWFsb2dSZWY+IHtcbiAgICBjb25zb2xlLndhcm4oJ1tuZ3gtb25zZW51aV0gQWxlcnREaWFsb2dGYWN0b3J5IGlzIGRlcHJlY2F0ZWQgc2luY2UgNC4wLjAtcmMuMC4gUGxhY2UgPG9ucy1hbGVydC1kaWFsb2c+IGludG8geW91ciBjb21wb25lbnQgaW5zdGVhZC4nKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fcmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50VHlwZSk7XG4gICAgICAgICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgIHtwcm92aWRlOiBQYXJhbXMsIHVzZVZhbHVlOiBuZXcgUGFyYW1zKHBhcmFtcyl9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcbiAgICAgICAgICBjb25zdCByb290RWxlbWVudCA9IGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgICAgdGhpcy5fY29tcG9uZW50TG9hZGVyLmxvYWQoY29tcG9uZW50UmVmKTtcblxuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByb290RWxlbWVudC5jaGlsZHJlblswXTtcbiAgICAgICAgICBjb25zdCBhbGVydERpYWxvZ0VsZW1lbnQgPSBlbGVtZW50LnRhZ05hbWUgPT09ICdPTlMtQUxFUlQtRElBTE9HJyA/IGVsZW1lbnQgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ29ucy1hbGVydC1kaWFsb2cnKTtcblxuICAgICAgICAgIGlmICghYWxlcnREaWFsb2dFbGVtZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignPG9ucy1hbGVydC1kaWFsb2c+IGVsZW1lbnQgaXMgbm90IGZvdW5kIGluIGNvbXBvbmVudFxcJ3MgdGVtcGxhdGUuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x2ZSh7YWxlcnREaWFsb2c6IGFsZXJ0RGlhbG9nRWxlbWVudCwgZGVzdHJveTogKCkgPT4gY29tcG9uZW50UmVmLmRlc3Ryb3koKX0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=