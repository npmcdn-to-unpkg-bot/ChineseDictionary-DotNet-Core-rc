import { ElementRef, AfterViewInit, OnDestroy, DoCheck, EventEmitter, IterableDiffers } from '@angular/core';
export declare class DoughnutChart implements AfterViewInit, OnDestroy, DoCheck {
    private el;
    animation: boolean;
    showScale: boolean;
    scaleOverride: boolean;
    scaleSteps: number;
    scaleStepWidth: number;
    scaleStartValue: number;
    scaleLineColor: string;
    scaleLineWidth: number;
    scaleShowLabels: boolean;
    scaleLabel: string;
    scaleIntegersOnly: boolean;
    scaleBeginAtZero: boolean;
    scaleFontFamily: string;
    scaleFontSize: number;
    scaleFontStyle: string;
    scaleFontColor: string;
    responsive: boolean;
    maintainAspectRatio: boolean;
    showTooltips: boolean;
    tooltipFillColor: string;
    tooltipFontFamily: string;
    tooltipFontSize: number;
    tooltipFontStyle: string;
    tooltipFontColor: string;
    tooltipTitleFontFamily: string;
    tooltipTitleFontSize: number;
    tooltipTitleFontStyle: string;
    tooltipTitleFontColor: string;
    tooltipYPadding: number;
    tooltipXPadding: number;
    tooltipCaretSize: number;
    tooltipCornerRadius: number;
    tooltipXOffset: number;
    tooltipTemplate: string;
    multiTooltipTemplate: string;
    value: any[];
    width: string;
    height: string;
    segmentShowStroke: boolean;
    segmentStrokeColor: string;
    segmentStrokeWidth: number;
    percentageInnerCutout: number;
    animationSteps: number;
    animationEasing: string;
    animateRotate: boolean;
    animateScale: boolean;
    legend: any;
    legendTemplate: string;
    onSegmentsSelect: EventEmitter<any>;
    initialized: boolean;
    chart: any;
    differ: any;
    constructor(el: ElementRef, differs: IterableDiffers);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    onCanvasClick(event: any): void;
    initChart(): void;
    getCanvas(): any;
    getBase64Image(): any;
}
