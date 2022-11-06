import { ElementRef, EventEmitter, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
/**
 * @element ons-range
 * @directive OnsRange
 * @selector ons-range
 * @description
 *   [en]Angular directive for `<ons-range>` component.[/en]
 *   [ja]`<ons-range>`要素のAngularディレクティブです。[/ja]
 * @example
 *   <ons-range [(value)]="foo"></ons-range>
 */
export declare class OnsRange implements OnChanges, OnDestroy, ControlValueAccessor {
    private _elementRef;
    private _element;
    private _boundOnChange;
    private _propagateChange;
    private _propagateTouched;
    /**
     * @input value
     * @desc
     *   [en]Input value of the `<ons-range>` element..[/en]
     *   [ja]`ons-range`要素に対する入力値を指定します。[/ja]
     */
    _value: string;
    /**
     * @output valueChange
     * @desc
     *   [en]Triggers when the value is changed.[/en]
     *   [ja]値が変更された時に発火します。[/ja]
     */
    _valueChange: EventEmitter<string>;
    constructor(_elementRef: ElementRef);
    _onChange(event: any): void;
    _onBlur(): void;
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
