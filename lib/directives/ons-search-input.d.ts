import { ElementRef, EventEmitter, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
/**
 * @element ons-search-input
 * @directive OnsSearchInput
 * @selector ons-search-input
 * @description
 *   [en]Angular directive for `<ons-search-input>` component.[/en]
 *   [ja]`<ons-search-input>`要素のAngularディレクティブです。[/ja]
 * @example
 *   <ons-search-input [(value)]="value"></ons-search-input>
 */
export declare class OnsSearchInput implements OnChanges, OnDestroy, ControlValueAccessor {
    private _elementRef;
    private _element;
    private _boundOnChange;
    private _propagateChange;
    private _propagateTouched;
    /**
     * @input value
     * @desc
     *   [en]Input value for the internal `<input>` element.[/en]
     *   [ja]内部の`input`要素に対する入力値を設定します。[/ja]
     */
    _value: string;
    /**
     * @output valueChange
     * @desc
     *   [en]Triggers when the value is changed.[/en]
     *   [ja]内部の`input`要素の値が変更された時に発火します。[/ja]
     */
    _valueChange: EventEmitter<string>;
    constructor(_elementRef: ElementRef);
    _onBlur(): void;
    _onChange(event: any): void;
    ngOnChanges(changeRecord: {
        [key: string]: SimpleChange;
    }): void;
    readonly element: any;
    readonly nativeElement: any;
    ngOnDestroy(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
