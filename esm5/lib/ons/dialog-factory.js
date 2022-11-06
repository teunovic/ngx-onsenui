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
export function DialogRef() { }
if (false) {
    /** @type {?} */
    DialogRef.prototype.dialog;
    /** @type {?} */
    DialogRef.prototype.destroy;
}
/**
 * \@object DialogFactory
 */
var DialogFactory = /** @class */ (function () {
    function DialogFactory(_injector, _resolver, _appRef, _componentLoader, _zone) {
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
    DialogFactory.prototype.createDialog = /**
     * @param {?} componentType
     * @param {?=} params
     * @return {?}
     */
    function (componentType, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        console.warn('[ngx-onsenui] DialogFactory is deprecated since 4.0.0-rc.0. Place <ons-dialog> into your component instead.');
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
                    var dialogElement = element.tagName === 'ONS-DIALOG' ? element : element.querySelector('ons-dialog');
                    if (!dialogElement) {
                        throw Error('<ons-dialog> element is not found in component\'s template.');
                    }
                    resolve({ dialog: dialogElement, destroy: function () { return componentRef.destroy(); } });
                });
            });
        });
    };
    DialogFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DialogFactory.ctorParameters = function () { return [
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: ComponentLoader },
        { type: NgZone }
    ]; };
    return DialogFactory;
}());
export { DialogFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DialogFactory.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    DialogFactory.prototype._resolver;
    /**
     * @type {?}
     * @private
     */
    DialogFactory.prototype._appRef;
    /**
     * @type {?}
     * @private
     */
    DialogFactory.prototype._componentLoader;
    /**
     * @type {?}
     * @private
     */
    DialogFactory.prototype._zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb25zZW51aS8iLCJzb3VyY2VzIjpbImxpYi9vbnMvZGlhbG9nLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxRQUFRLEVBQ1Isd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixjQUFjLEVBR2QsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRW5ELCtCQUdDOzs7SUFGQywyQkFBWTs7SUFDWiw0QkFBa0I7Ozs7O0FBTXBCO0lBR0UsdUJBQ1UsU0FBbUIsRUFDbkIsU0FBbUMsRUFDbkMsT0FBdUIsRUFDdkIsZ0JBQWlDLEVBQ2pDLEtBQWE7UUFKYixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQTBCO1FBQ25DLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUV2QixDQUFDOzs7Ozs7SUFFRCxvQ0FBWTs7Ozs7SUFBWixVQUFhLGFBQXdCLEVBQUUsTUFBbUI7UUFBMUQsaUJBNkJDO1FBN0JzQyx1QkFBQSxFQUFBLFdBQW1CO1FBQ3hELE9BQU8sQ0FBQyxJQUFJLENBQUMsNkdBQTZHLENBQUMsQ0FBQztRQUU1SCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN4QixZQUFZLENBQUM7Z0JBQ1gsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O3dCQUNQLE9BQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQzs7d0JBQy9ELFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO3dCQUMvQixTQUFTLEVBQUU7NEJBQ1QsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQzt5QkFDaEQ7d0JBQ0QsTUFBTSxFQUFFLEtBQUksQ0FBQyxTQUFTO3FCQUN2QixDQUFDOzt3QkFDSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7O3dCQUN2QyxXQUFXLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhO29CQUV2RCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOzt3QkFFbkMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzt3QkFDakMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO29CQUV0RyxJQUFJLENBQUMsYUFBYSxFQUFFO3dCQUNsQixNQUFNLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO3FCQUM1RTtvQkFFRCxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxjQUFNLE9BQUEsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUF0QixDQUFzQixFQUFDLENBQUMsQ0FBQztnQkFDMUUsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBekNGLFVBQVU7Ozs7Z0JBbkJULFFBQVE7Z0JBQ1Isd0JBQXdCO2dCQUV4QixjQUFjO2dCQU1SLGVBQWU7Z0JBSHJCLE1BQU07O0lBdURSLG9CQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0F6Q1ksYUFBYTs7Ozs7O0lBR3RCLGtDQUEyQjs7Ozs7SUFDM0Isa0NBQTJDOzs7OztJQUMzQyxnQ0FBK0I7Ozs7O0lBQy9CLHlDQUF5Qzs7Ozs7SUFDekMsOEJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0YWJsZSxcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudFJlZixcbiAgVHlwZSxcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYXJhbXN9IGZyb20gJy4vcGFyYW1zJztcbmltcG9ydCB7Q29tcG9uZW50TG9hZGVyfSBmcm9tICcuL2NvbXBvbmVudC1sb2FkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ1JlZiB7XG4gIGRpYWxvZzogYW55O1xuICBkZXN0cm95OiBGdW5jdGlvbjtcbn1cblxuLyoqXG4gKiBAb2JqZWN0IERpYWxvZ0ZhY3RvcnlcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERpYWxvZ0ZhY3Rvcnkge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF9yZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50TG9hZGVyOiBDb21wb25lbnRMb2FkZXIsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lXG4gICkge1xuICB9XG5cbiAgY3JlYXRlRGlhbG9nKGNvbXBvbmVudFR5cGU6IFR5cGU8YW55PiwgcGFyYW1zOiBPYmplY3QgPSB7fSk6IFByb21pc2U8RGlhbG9nUmVmPiB7IC8vIFRPRE86IGZpeCBcImFueVwiXG4gICAgY29uc29sZS53YXJuKCdbbmd4LW9uc2VudWldIERpYWxvZ0ZhY3RvcnkgaXMgZGVwcmVjYXRlZCBzaW5jZSA0LjAuMC1yYy4wLiBQbGFjZSA8b25zLWRpYWxvZz4gaW50byB5b3VyIGNvbXBvbmVudCBpbnN0ZWFkLicpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRUeXBlKTtcbiAgICAgICAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAge3Byb3ZpZGU6IFBhcmFtcywgdXNlVmFsdWU6IG5ldyBQYXJhbXMocGFyYW1zKX1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMuX2luamVjdG9yXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuICAgICAgICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICB0aGlzLl9jb21wb25lbnRMb2FkZXIubG9hZChjb21wb25lbnRSZWYpO1xuXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHJvb3RFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgICAgICAgIGNvbnN0IGRpYWxvZ0VsZW1lbnQgPSBlbGVtZW50LnRhZ05hbWUgPT09ICdPTlMtRElBTE9HJyA/IGVsZW1lbnQgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ29ucy1kaWFsb2cnKTtcblxuICAgICAgICAgIGlmICghZGlhbG9nRWxlbWVudCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJzxvbnMtZGlhbG9nPiBlbGVtZW50IGlzIG5vdCBmb3VuZCBpbiBjb21wb25lbnRcXCdzIHRlbXBsYXRlLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdmUoe2RpYWxvZzogZGlhbG9nRWxlbWVudCwgZGVzdHJveTogKCkgPT4gY29tcG9uZW50UmVmLmRlc3Ryb3koKX0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbiJdfQ==