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
export class DialogFactory {
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
    createDialog(componentType, params = {}) {
        console.warn('[ngx-onsenui] DialogFactory is deprecated since 4.0.0-rc.0. Place <ons-dialog> into your component instead.');
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
                    const dialogElement = element.tagName === 'ONS-DIALOG' ? element : element.querySelector('ons-dialog');
                    if (!dialogElement) {
                        throw Error('<ons-dialog> element is not found in component\'s template.');
                    }
                    resolve({ dialog: dialogElement, destroy: () => componentRef.destroy() });
                });
            });
        });
    }
}
DialogFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DialogFactory.ctorParameters = () => [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb25zZW51aS8iLCJzb3VyY2VzIjpbImxpYi9vbnMvZGlhbG9nLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxRQUFRLEVBQ1Isd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixjQUFjLEVBR2QsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRW5ELCtCQUdDOzs7SUFGQywyQkFBWTs7SUFDWiw0QkFBa0I7Ozs7O0FBT3BCLE1BQU0sT0FBTyxhQUFhOzs7Ozs7OztJQUV4QixZQUNVLFNBQW1CLEVBQ25CLFNBQW1DLEVBQ25DLE9BQXVCLEVBQ3ZCLGdCQUFpQyxFQUNqQyxLQUFhO1FBSmIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUEwQjtRQUNuQyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLFVBQUssR0FBTCxLQUFLLENBQVE7SUFFdkIsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLGFBQXdCLEVBQUUsU0FBaUIsRUFBRTtRQUN4RCxPQUFPLENBQUMsSUFBSSxDQUFDLDZHQUE2RyxDQUFDLENBQUM7UUFFNUgsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7OzBCQUNaLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQzs7MEJBQy9ELFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO3dCQUMvQixTQUFTLEVBQUU7NEJBQ1QsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQzt5QkFDaEQ7d0JBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO3FCQUN2QixDQUFDOzswQkFDSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7OzBCQUN2QyxXQUFXLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhO29CQUV2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOzswQkFFbkMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzswQkFDakMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO29CQUV0RyxJQUFJLENBQUMsYUFBYSxFQUFFO3dCQUNsQixNQUFNLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO3FCQUM1RTtvQkFFRCxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUMsQ0FBQyxDQUFDO2dCQUMxRSxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF6Q0YsVUFBVTs7OztZQW5CVCxRQUFRO1lBQ1Isd0JBQXdCO1lBRXhCLGNBQWM7WUFNUixlQUFlO1lBSHJCLE1BQU07Ozs7Ozs7SUFpQkosa0NBQTJCOzs7OztJQUMzQixrQ0FBMkM7Ozs7O0lBQzNDLGdDQUErQjs7Ozs7SUFDL0IseUNBQXlDOzs7OztJQUN6Qyw4QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RvcixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3RhYmxlLFxuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBUeXBlLFxuICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhcmFtc30gZnJvbSAnLi9wYXJhbXMnO1xuaW1wb3J0IHtDb21wb25lbnRMb2FkZXJ9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nUmVmIHtcbiAgZGlhbG9nOiBhbnk7XG4gIGRlc3Ryb3k6IEZ1bmN0aW9uO1xufVxuXG4vKipcbiAqIEBvYmplY3QgRGlhbG9nRmFjdG9yeVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGlhbG9nRmFjdG9yeSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3Jlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9jb21wb25lbnRMb2FkZXI6IENvbXBvbmVudExvYWRlcixcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmVcbiAgKSB7XG4gIH1cblxuICBjcmVhdGVEaWFsb2coY29tcG9uZW50VHlwZTogVHlwZTxhbnk+LCBwYXJhbXM6IE9iamVjdCA9IHt9KTogUHJvbWlzZTxEaWFsb2dSZWY+IHsgLy8gVE9ETzogZml4IFwiYW55XCJcbiAgICBjb25zb2xlLndhcm4oJ1tuZ3gtb25zZW51aV0gRGlhbG9nRmFjdG9yeSBpcyBkZXByZWNhdGVkIHNpbmNlIDQuMC4wLXJjLjAuIFBsYWNlIDxvbnMtZGlhbG9nPiBpbnRvIHlvdXIgY29tcG9uZW50IGluc3RlYWQuJyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX3Jlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudFR5cGUpO1xuICAgICAgICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICB7cHJvdmlkZTogUGFyYW1zLCB1c2VWYWx1ZTogbmV3IFBhcmFtcyhwYXJhbXMpfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG4gICAgICAgICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAgIHRoaXMuX2NvbXBvbmVudExvYWRlci5sb2FkKGNvbXBvbmVudFJlZik7XG5cbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcm9vdEVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgICAgICAgY29uc3QgZGlhbG9nRWxlbWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ09OUy1ESUFMT0cnID8gZWxlbWVudCA6IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignb25zLWRpYWxvZycpO1xuXG4gICAgICAgICAgaWYgKCFkaWFsb2dFbGVtZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignPG9ucy1kaWFsb2c+IGVsZW1lbnQgaXMgbm90IGZvdW5kIGluIGNvbXBvbmVudFxcJ3MgdGVtcGxhdGUuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x2ZSh7ZGlhbG9nOiBkaWFsb2dFbGVtZW50LCBkZXN0cm95OiAoKSA9PiBjb21wb25lbnRSZWYuZGVzdHJveSgpfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuIl19