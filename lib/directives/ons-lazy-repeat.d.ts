import { ElementRef, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
export declare class ItemContext {
    $implicit: any;
    index: number;
    count: number;
    constructor($implicit: any, index: number, count: number);
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
export declare class OnsLazyRepeat implements OnDestroy {
    private _elementRef;
    private _templateRef;
    private _viewContainer;
    private _element;
    private _provider;
    private _onsLazyRepeatOf;
    constructor(_elementRef: ElementRef, _templateRef: TemplateRef<ItemContext>, _viewContainer: ViewContainerRef);
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
    onsLazyRepeatOf: any;
    _loadItemTemplate(index: number, done: Function): void;
    refresh(): void;
    ngOnDestroy(): void;
}
