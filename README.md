# Angular Notes

## The Angular ViewChildren Decorator and QueryList in Detail

1. @ViewChild and @ViewChildren are local template query mechanism, they can only query component references/nstivr elements of their template and nothing more, this means @ViewChild query can not see inside the templates of child components or parents components, e.g. content projected elements
2. They are aviliable after ngAfterViewInit is called

## The Angular Content Projection in Detail

`<ng-content></ng-content>`

![Alt text](image.png)
![Alt text](image-1.png)

![Alt text](image-2.png)
![Alt text](image-3.png)

![Alt text](image-5.png)
![Alt text](image-6.png)

## Tha Angular ContentChild Decorator in Detail

![Alt text](image-4.png)
![Alt text](image-7.png)

![Alt text](image-8.png)
![Alt text](image-9.png)

## Tha Angular ng-template

![Alt text](image-10.png)
![Alt text](image-11.png)

![Alt text](image-12.png)
use `ng-container` instead, `ng-container` doesn't create extra elements

## Angular Templates as Component Inputs

![Alt text](image-13.png)
![Alt text](image-14.png)
![Alt text](image-16.png)

## Tha Angular Directive

- @HostBinding
- @HostListener
- Export as directive instance reference, in which way you can access public properties and methods

## Tha Angular Star Syntax

![Alt text](image-17.png)

Under the hood
![Alt text](image-15.png)

Write custom star syntax `ngxUnless`

## Tha Angular View Encapsulation Under the Hood

:host, ::ng-deep

with `::ng-deep` to remove `_ngcontent-c1` attributes

![Alt text](image-18.png)

![Alt text](image-19.png)

![Alt text](image-20.png)

![Alt text](image-21.png)

*Default vs Shadow DOM*

![Alt text](image-22.png)

- ViewEncapsulation.Emulated(default)

- ViewEncapsulation.None

- ViewEncapsulation.ShadowDom

## Angular Injectable Services

![Alt text](image-25.png)
![Alt text](image-24.png)
![Alt text](image-23.png)

*Custom Service to fetch data*

![Alt text](image-27.png)
![Alt text](image-28.png)