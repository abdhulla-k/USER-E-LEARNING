import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { MainService } from "src/app/main.service";

@Directive({
    selector: '[appSuccessMessage]'
})
export class SuccessMessageDirective implements OnInit {
    constructor(
        private mainService: MainService,
        private renderer: Renderer2,
        private elementRef: ElementRef
    ) { }

    ngOnInit(): void {
        this.mainService.successMessageEmitter.subscribe(data => {
            this.renderer.removeClass(this.elementRef.nativeElement, 'hide');
            this.renderer.removeClass(this.elementRef.nativeElement, 'out-animate');
            this.renderer.addClass(this.elementRef.nativeElement, 'animate');
            setTimeout(() => {
                this.renderer.removeClass(this.elementRef.nativeElement, 'animate')
                this.renderer.addClass(this.elementRef.nativeElement, 'out-animate');
            }, 3000)
            setTimeout(() => {
                this.renderer.addClass(this.elementRef.nativeElement, 'hide');
            }, 4000)
        })
    }
}