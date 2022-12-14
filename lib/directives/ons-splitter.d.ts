import { Type, Injector, ElementRef, ViewContainerRef, ComponentFactoryResolver, NgZone } from '@angular/core';
import * as ons from 'onsenui';
/**
 * @element ons-splitter-side
 * @directive OnsSplitterSide
 * @selector ons-splitter-side
 * @description
 *   [ja]`<ons-splitter-side>`要素のAngularディレクティブです。[/ja]
 *   [en]Angular directive for `<ons-splitter-side>` component.[/en]
 * @example
 *   @Component({
 *     selector: 'ons-page',
 *     template: `
 *       <ons-toolbar>
 *         <div class="center">Left Page</div>
 *       </ons-toolbar>
 *       <div class="background"></div>
 *       <div class="content">
 *         Left
 *       </div>
 *     `
 *   })
 *   class SidePageComponent { }
 *
 *   @Component({
 *     selector: 'app',
 *     template: `
 *     <ons-splitter>
 *       <ons-splitter-side [page]="sidePage" side="left" width="200px">
 *       </ons-splitter-side>
 *       <ons-splitter-content>...</ons-splitter-content>
 *     </ons-splitter>
 *     `
 *   })
 *   export class AppComponent {
 *     sidePage = SidePageComponent;
 *   }
 */
export declare class OnsSplitterSide {
    private _elementRef;
    private _viewContainer;
    private _resolver;
    private _injector;
    private _zone;
    /**
     * @input page
     * @desc
     *   [en]Page content.[/en]
     *   [ja]表示するページコンポーネントのクラスを指定します。[/ja]
     */
    page: Type<any>;
    constructor(_elementRef: ElementRef, _viewContainer: ViewContainerRef, _resolver: ComponentFactoryResolver, _injector: Injector, _zone: NgZone);
    readonly element: any;
    readonly nativeElement: any;
    _createPageLoader(): ons.PageLoader;
}
/**
 * @element ons-splitter-content
 * @directive OnsSplitterContent
 * @selector ons-splitter-content
 * @description
 *    [ja]`<ons-splitter-content>`要素のためのAngular2 ディレクティブです。[/ja]
 *    [en]Angular directive for `<ons-splitter-content>` component.[/en]
 */
export declare class OnsSplitterContent {
    private _elementRef;
    private _viewContainer;
    private _resolver;
    private _injector;
    /**
     * @input page
     * @desc
     *   [en]Specify the page component.[/en]
     *   [ja]表示するページコンポーネントのクラスを指定します。[/ja]
     */
    page: Type<any>;
    constructor(_elementRef: ElementRef, _viewContainer: ViewContainerRef, _resolver: ComponentFactoryResolver, _injector: Injector);
    readonly element: any;
    readonly nativeElement: any;
    _createPageLoader(): ons.PageLoader;
}
