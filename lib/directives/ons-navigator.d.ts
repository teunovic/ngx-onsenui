import { Injector, ElementRef, Type, ComponentFactoryResolver, ViewContainerRef, OnDestroy, NgZone } from '@angular/core';
import * as ons from 'onsenui';
import { Params } from '../ons/params';
export declare class NavigatorPage {
    elementRef: ElementRef | null;
    destroy: Function;
    animator: any;
    params: Params;
    constructor(elementRef?: ElementRef | null, destroy?: Function, animator?: any, params?: Params);
}
/**
 * @element ons-navigator
 * @directive OnsNavigator
 * @selector ons-navigator
 * @codpen KgvAvx
 * @description
 *   [en]Angular directive for `<ons-navigator>` component.[/en]
 *   [ja]`<ons-navigator>`要素のAngularディレクティブです。[/ja]
 * @example
 *   @Component({
 *     selector: 'ons-page',
 *     template: `
 *       <ons-toolbar>
 *         <div class="center">Page</div>
 *       </ons-toolbar>
 *       <div class="content">...</div>
 *     `
 *   })
 *   class DefaultPageComponent { }
 *
 *   @Component({
 *     selector: 'navigator-app',
 *     template: `
 *     <ons-navigator [page]="page"></ons-navigator>
 *     `
 *   })
 *   export class AppComponent {
 *     page = DefaultPageComponent
 *   }
 */
export declare class OnsNavigator implements OnDestroy {
    private _elementRef;
    private _resolver;
    private _viewContainer;
    private _injector;
    private _zone;
    private _lastPageLoader;
    /**
     * @input page
     * @desc
     *   [en]Type of the page component.[/en]
     *   [ja]ページコンポーネントのクラスを指定します。[/ja]
     */
    pageComponentType: Type<any>;
    readonly element: any;
    readonly nativeElement: any;
    constructor(_elementRef: ElementRef, _resolver: ComponentFactoryResolver, _viewContainer: ViewContainerRef, _injector: Injector, _zone: NgZone);
    _createPageLoader(): ons.PageLoader;
    ngOnDestroy(): void;
}
