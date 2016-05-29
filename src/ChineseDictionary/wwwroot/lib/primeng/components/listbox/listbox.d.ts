import { ElementRef, AfterViewChecked, EventEmitter, TemplateRef, IterableDiffers } from '@angular/core';
import { SelectItem } from '../api/selectitem';
import { DomHandler } from '../dom/domhandler';
import { ControlValueAccessor } from '@angular/common';
export declare class Listbox implements AfterViewChecked, ControlValueAccessor {
    private el;
    private domHandler;
    options: SelectItem[];
    multiple: boolean;
    style: any;
    styleClass: string;
    disabled: string;
    onChange: EventEmitter<any>;
    itemTemplate: TemplateRef<any>;
    value: any;
    onModelChange: Function;
    onModelTouched: Function;
    differ: any;
    valueChanged: boolean;
    constructor(el: ElementRef, domHandler: DomHandler, differs: IterableDiffers);
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    ngDoCheck(): void;
    ngAfterViewChecked(): void;
    preselect(): void;
    unselectAll(items: NodeList[]): void;
    onMouseover(event: any): void;
    onMouseout(event: any): void;
    onClick(event: any): void;
    onItemClick(event: any, item: any): void;
    unselectSiblings(item: any): void;
    findListItem(element: any): any;
}
