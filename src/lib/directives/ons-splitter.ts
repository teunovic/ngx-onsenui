import {
  Type,
  ComponentRef,
  Injector,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  NgZone
} from '@angular/core';
import * as ons from 'onsenui';

import {Params} from '../ons/params';

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
@Directive({
  selector: 'ons-splitter-side'
})
export class OnsSplitterSide {

  /**
   * @input page
   * @desc
   *   [en]Page content.[/en]
   *   [ja]表示するページコンポーネントのクラスを指定します。[/ja]
   */
  @Input('page') set page(page: Type<any>) {
    this.element.page = page;
  }

  constructor(
    private _elementRef: ElementRef,
    private _viewContainer: ViewContainerRef,
    private _resolver: ComponentFactoryResolver,
    private _injector: Injector,
    private _zone: NgZone) {
    this.element.pageLoader = this._createPageLoader();
  }

  get element() {
    return this._elementRef.nativeElement;
  }

  get nativeElement() {
    return this._elementRef.nativeElement;
  }

  _createPageLoader() {
    const componentRefMap:WeakMap<HTMLElement, ComponentRef<any>> = new WeakMap<HTMLElement, ComponentRef<any>>();

    return new ons.PageLoader(
      ({page, parent, params}: any, done: Function) => {
        this._zone.run(() => {
          const injector = Injector.create({
            providers: [
              {provide: Params, useValue: new Params(params || {})},
              {provide: OnsSplitterSide, useValue: this}
            ],
            parent: this._injector
          });

          const factory = this._resolver.resolveComponentFactory(page);
          const pageComponentRef = this._viewContainer.createComponent(factory, 0, injector);
          const pageElement = pageComponentRef.location.nativeElement;
          componentRefMap.set(pageElement, pageComponentRef);

          this.element.appendChild(pageElement); // dirty fix to insert in correct position

          done(pageElement);
        });
      },
      (element: any) => {
        const componentRef = componentRefMap.get(element);

        if (componentRef) {
          componentRef.destroy();
          componentRefMap.delete(element);
        }
      }
    );
  }
}

/**
 * @element ons-splitter-content
 * @directive OnsSplitterContent
 * @selector ons-splitter-content
 * @description
 *    [ja]`<ons-splitter-content>`要素のためのAngular2 ディレクティブです。[/ja]
 *    [en]Angular directive for `<ons-splitter-content>` component.[/en]
 */
@Directive({
  selector: 'ons-splitter-content'
})
export class OnsSplitterContent {
  /**
   * @input page
   * @desc
   *   [en]Specify the page component.[/en]
   *   [ja]表示するページコンポーネントのクラスを指定します。[/ja]
   */
  @Input('page') set page(page: Type<any>) {
    this.element.page = page;
  }

  constructor(
    private _elementRef: ElementRef,
    private _viewContainer: ViewContainerRef,
    private _resolver: ComponentFactoryResolver,
    private _injector: Injector) {
    this.element.pageLoader = this._createPageLoader();
  }

  get element() {
    return this._elementRef.nativeElement;
  }

  get nativeElement() {
    return this._elementRef.nativeElement;
  }

  _createPageLoader() {
    const componentRefMap:WeakMap<HTMLElement, ComponentRef<any>> = new WeakMap<HTMLElement, ComponentRef<any>>();

    return new ons.PageLoader(
      ({page, parent, params}: any, done: Function) => {
        const injector = Injector.create({
          providers: [
            {provide: Params, useValue: new Params(params || {})},
            {provide: OnsSplitterContent, useValue: this}
          ],
          parent: this._injector
        });

        const factory = this._resolver.resolveComponentFactory(page);
        const pageComponentRef = this._viewContainer.createComponent(factory, 0, injector);
        const pageElement = pageComponentRef.location.nativeElement;
        componentRefMap.set(pageElement, pageComponentRef);

        this.element.appendChild(pageElement); // dirty fix to insert in correct position

        done(pageElement);
      },
      (element: any) => {
        const componentRef = componentRefMap.get(element);

        if (componentRef) {
          componentRef.destroy();
          componentRefMap.delete(element);
        }
      }
    );
  }
}
