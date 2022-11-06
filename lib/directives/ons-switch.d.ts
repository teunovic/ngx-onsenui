import { ElementRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
/**
 * @element ons-switch
 * @directive OnsSwitch
 * @selector ons-switch
 * @description
 *   [en]Angular directive for `<ons-switch>` component.[/en]
 *   [ja]`<ons-switch>`要素のAngularディレクティブです。[/ja]
 * @example
 *   <ons-switch [(value)]="target"></ons-switch>
 */
export declare class OnsSwitch implements OnChanges, OnDestroy, ControlValueAccessor {
    private _elementRef;
    private _element;
    private _boundOnChange;
    private _propagateChange;
    private _propagateTouched;
    /**
     * @input value
     * @desc
     *   [en]Specify the value of the `<ons-switch>` component.[/en]
     *   [ja]`ons-switch`コンポーネントに設定する値を指定します。[/ja]
     */
    value: boolean;
    /**
     * @output valueChange
     * @desc
     *   [en]Triggers when the value is changed.[/en]
     *   [ja]値が変更された時に発火します。[/ja]
     */
    _valueChange: EventEmitter<boolean>;
    constructor(_elementRef: ElementRef);
    _onChange(event: any): void;
    _onBlur(): void;
    ngOnChanges(changeRecord: SimpleChanges): void;
    readonly element: any;
    readonly nativeElement: any;
    ngOnDestroy(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
