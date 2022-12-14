import { ElementRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
/**
 * @element ons-select
 * @directive OnsSelect
 * @selector ons-select
 * @description
 *   [en]Angular directive for `<ons-select>` component.[/en]
 *   [ja]`<ons-select>`要素のAngularディレクティブです。[/ja]
 * @example
 *   <ons-select [(ngModel)]="selectedValue">
 *     <option value="Item A">Item A</option>
 *     <option value="Item B">Item B</option>
 *     <option value="Item C">Item C</option>
 *   </ons-select>
 */
export declare class OnsSelect implements OnDestroy, ControlValueAccessor {
    private _elementRef;
    private _element;
    private _boundOnChange;
    private _propagateChange;
    constructor(_elementRef: ElementRef);
    _onChange(event: any): void;
    readonly element: any;
    readonly nativeElement: any;
    ngOnDestroy(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
}
