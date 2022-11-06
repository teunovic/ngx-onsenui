import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import * as ons from 'onsenui';

export class ItemContext {
  constructor(public $implicit: any, public index: number, public count: number) {
  }
}

/**
 * @element ons-lazy-repeat
 * @directive OnsLazyRepeat
 * @selector [ons-lazy-repeat]
 * @description
 *   [en]Angular directive for `<ons-lazy-repeat>` component.[/en]
 *   [ja]`<ons-lazy-repeat>`要素と同じ機能を提供するAngularディレクティブです。[/ja]
 * @example
 *   <ons-list>
 *     <ons-list-item *onsLazyRepeat="let item of items; let i = index">
 *       #{{i}} {{item.msg}}
 *     </ons-list-item>
 *   </ons-list>
 */
@Directive({
  selector: '[onsLazyRepeat]'
})
export class OnsLazyRepeat implements OnDestroy {
  private _element: any;
  private _provider: any;
  private _onsLazyRepeatOf: any;

  constructor(
    private _elementRef: ElementRef,
    private _templateRef: TemplateRef<ItemContext>,
    private _viewContainer: ViewContainerRef) {
  }

  /**
   * @input onsLazyRepeat
   * @desc
   *   [en]Render infinite lists with "let of" syntax in Angular.[/en]
   *   [ja]let of式を指定します。[/ja]
   * @example
   *  <ons-list>
   *    <ons-list-item *onsLazyRepeat="let message of messages">
   *      {{message}}
   *    </ons-list-item>
   *  </ons-list>
   */
  @Input() set onsLazyRepeatOf(value: any) {
    this._onsLazyRepeatOf = value;

    this._provider = new (<any>ons)._internal.LazyRepeatProvider(
      this._elementRef.nativeElement.parentElement,
      new (<any>ons)._internal.LazyRepeatDelegate({
        loadItemElement: (index: number, done: Function) => {
          this._loadItemTemplate(index, done);
        },
        countItems: () => {
          return this._onsLazyRepeatOf.length;
        }
      })
    );
  }

  _loadItemTemplate(index: number, done: Function) {
    const context = new ItemContext(this._onsLazyRepeatOf[index], index, this._onsLazyRepeatOf.length);
    const view = this._viewContainer.createEmbeddedView(this._templateRef, context);
    // dirty fix on createEmbeddedView() does not insert DOM element randomly.

    done({element: view.rootNodes[0]});
  }

  refresh() {
    if (this._provider) {
      this._viewContainer.clear();
      this._provider.refresh();
    }
  }

  ngOnDestroy() {
    if (this._provider) {
      this._provider.destroy();
    }
    this._viewContainer.clear();
    this._provider = null;
  }
}
