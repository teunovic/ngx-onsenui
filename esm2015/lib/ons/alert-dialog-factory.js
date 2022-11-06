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
export class AlertDialogFactory {
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
    createAlertDialog(componentType, params = {}) {
        console.warn('[ngx-onsenui] AlertDialogFactory is deprecated since 4.0.0-rc.0. Place <ons-alert-dialog> into your component instead.');
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
                    const alertDialogElement = element.tagName === 'ONS-ALERT-DIALOG' ? element : element.querySelector('ons-alert-dialog');
                    if (!alertDialogElement) {
                        throw Error('<ons-alert-dialog> element is not found in component\'s template.');
                    }
                    resolve({ alertDialog: alertDialogElement, destroy: () => componentRef.destroy() });
                });
            });
        });
    }
}
AlertDialogFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AlertDialogFactory.ctorParameters = () => [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb25zZW51aS8iLCJzb3VyY2VzIjpbImxpYi9vbnMvYWxlcnQtZGlhbG9nLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxRQUFRLEVBQ1Isd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixjQUFjLEVBR2QsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRW5ELG9DQUdDOzs7SUFGQyxxQ0FBaUI7O0lBQ2pCLGlDQUFrQjs7Ozs7QUFPcEIsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUFFN0IsWUFDVSxTQUFtQixFQUNuQixTQUFtQyxFQUNuQyxPQUF1QixFQUN2QixnQkFBaUMsRUFDakMsS0FBYTtRQUpiLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBMEI7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFRO0lBRXZCLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLGFBQXdCLEVBQUUsU0FBaUIsRUFBRTtRQUM3RCxPQUFPLENBQUMsSUFBSSxDQUFDLHdIQUF3SCxDQUFDLENBQUM7UUFFdkksT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7OzBCQUNaLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQzs7MEJBQy9ELFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO3dCQUMvQixTQUFTLEVBQUU7NEJBQ1QsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQzt5QkFDaEQ7d0JBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO3FCQUN2QixDQUFDOzswQkFDSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7OzBCQUN2QyxXQUFXLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhO29CQUV2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOzswQkFFbkMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzswQkFDakMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLE9BQU8sS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDO29CQUV2SCxJQUFJLENBQUMsa0JBQWtCLEVBQUU7d0JBQ3ZCLE1BQU0sS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7cUJBQ2xGO29CQUVELE9BQU8sQ0FBQyxFQUFDLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQUMsQ0FBQztnQkFDcEYsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBekNGLFVBQVU7Ozs7WUFuQlQsUUFBUTtZQUNSLHdCQUF3QjtZQUV4QixjQUFjO1lBTVIsZUFBZTtZQUhyQixNQUFNOzs7Ozs7O0lBaUJKLHVDQUEyQjs7Ozs7SUFDM0IsdUNBQTJDOzs7OztJQUMzQyxxQ0FBK0I7Ozs7O0lBQy9CLDhDQUF5Qzs7Ozs7SUFDekMsbUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0YWJsZSxcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudFJlZixcbiAgVHlwZSxcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYXJhbXN9IGZyb20gJy4vcGFyYW1zJztcbmltcG9ydCB7Q29tcG9uZW50TG9hZGVyfSBmcm9tICcuL2NvbXBvbmVudC1sb2FkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0RGlhbG9nUmVmIHtcbiAgYWxlcnREaWFsb2c6IGFueTtcbiAgZGVzdHJveTogRnVuY3Rpb247XG59XG5cbi8qKlxuICogQG9iamVjdCBBbGVydERpYWxvZ0ZhY3RvcnlcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFsZXJ0RGlhbG9nRmFjdG9yeSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3Jlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9jb21wb25lbnRMb2FkZXI6IENvbXBvbmVudExvYWRlcixcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmVcbiAgKSB7XG4gIH1cblxuICBjcmVhdGVBbGVydERpYWxvZyhjb21wb25lbnRUeXBlOiBUeXBlPGFueT4sIHBhcmFtczogT2JqZWN0ID0ge30pOiBQcm9taXNlPEFsZXJ0RGlhbG9nUmVmPiB7XG4gICAgY29uc29sZS53YXJuKCdbbmd4LW9uc2VudWldIEFsZXJ0RGlhbG9nRmFjdG9yeSBpcyBkZXByZWNhdGVkIHNpbmNlIDQuMC4wLXJjLjAuIFBsYWNlIDxvbnMtYWxlcnQtZGlhbG9nPiBpbnRvIHlvdXIgY29tcG9uZW50IGluc3RlYWQuJyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX3Jlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudFR5cGUpO1xuICAgICAgICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICB7cHJvdmlkZTogUGFyYW1zLCB1c2VWYWx1ZTogbmV3IFBhcmFtcyhwYXJhbXMpfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG4gICAgICAgICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAgIHRoaXMuX2NvbXBvbmVudExvYWRlci5sb2FkKGNvbXBvbmVudFJlZik7XG5cbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcm9vdEVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgICAgICAgY29uc3QgYWxlcnREaWFsb2dFbGVtZW50ID0gZWxlbWVudC50YWdOYW1lID09PSAnT05TLUFMRVJULURJQUxPRycgPyBlbGVtZW50IDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdvbnMtYWxlcnQtZGlhbG9nJyk7XG5cbiAgICAgICAgICBpZiAoIWFsZXJ0RGlhbG9nRWxlbWVudCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJzxvbnMtYWxlcnQtZGlhbG9nPiBlbGVtZW50IGlzIG5vdCBmb3VuZCBpbiBjb21wb25lbnRcXCdzIHRlbXBsYXRlLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdmUoe2FsZXJ0RGlhbG9nOiBhbGVydERpYWxvZ0VsZW1lbnQsIGRlc3Ryb3k6ICgpID0+IGNvbXBvbmVudFJlZi5kZXN0cm95KCl9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19