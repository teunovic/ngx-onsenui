import { ViewContainerRef, ComponentFactoryResolver, ElementRef, Type, EventEmitter, OnDestroy, NgZone } from '@angular/core';
/**
 * @element ons-tabbar
 * @directive OnsTabbar
 * @selector ons-tabbar
 * @description
 *   [en]Angular directive for `<ons-tabbar>` component.[/en]
 *   [ja]`<ons-tabbar>`要素のためのディレクティブです。[/ja]
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
 *   class PageComponent {
 *   }
 *
 *   @Component({
 *     selector: 'app',
 *     template: `
 *     <ons-tabbar swipeable (swipe)="onSwipe($event)">
 *       <div class="tabbar__content"></div>
 *       <div class="tabbar">
 *         <ons-tab label="Page1" icon="ion-home" [page]="page" active></ons-tab>
 *         <ons-tab label="Page2" icon="ion-help" [page]="page"></ons-tab>
 *         <ons-tab label="Page3" icon="ion-stop" [page]="page"></ons-tab>
 *       </div>
 *     </ons-tabbar>
 *     `
 *   })
 *   export class AppComponent {
 *     page = PageComponent
 *
 *     onSwipe(event) {
 *       console.log(event);
 *     }
 *   }
 */
export declare class OnsTabbar {
    private _elementRef;
    private _element;
    /**
     * @output swipe
     * @param $event
     * @param $event.index
     * @param $event.options
     * @desc
     *   [en]Triggers when the tabbar is swiped.[/en]
     *   [ja]`<ons-tabbar>`がスワイプされた時に発火します。[/ja]
     */
    _swipe: EventEmitter<{}>;
    constructor(_elementRef: ElementRef);
}
/**
 * @element ons-tab
 * @directive OnsTab
 * @selector ons-tab
 * @description
 *   [en]Angular directive for `<ons-tab>` component.[/en]
 *   [ja]`<ons-tab>`要素のためのディレクティブです。[/ja]
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
 *   class PageComponent {
 *   }
 *
 *   @Component({
 *     selector: 'app',
 *     template: `
 *     <ons-tabbar>
 *       <div class="tabbar__content"></div>
 *       <div class="tabbar">
 *         <ons-tab label="Page1" icon="ion-home" [page]="page" active></ons-tab>
 *         <ons-tab label="Page2" icon="ion-help" [page]="page"></ons-tab>
 *         <ons-tab label="Page3" icon="ion-stop" [page]="page"></ons-tab>
 *       </div>
 *     </ons-tabbar>
 *     `
 *   })
 *   export class AppComponent {
 *     page = PageComponent
 *   }
 */
export declare class OnsTab implements OnDestroy {
    private _elementRef;
    private _viewContainer;
    private _resolver;
    private _zone;
    private _pageComponent;
    /**
     * @input page
     * @desc
     *   [en]Specify the page component that is displayed when the tab is active.[/en]
     *   [ja]読み込むページコンポーネントを指定します。[/ja]
     */
    page: Type<any>;
    constructor(_elementRef: ElementRef, _viewContainer: ViewContainerRef, _resolver: ComponentFactoryResolver, _zone: NgZone);
    _createPageLoader(): any;
    ngOnDestroy(): void;
}
