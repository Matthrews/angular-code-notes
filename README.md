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