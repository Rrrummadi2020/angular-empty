import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BoxesComponent } from "./boxes.component"
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('BoxesComponent', () => { 
    let component: BoxesComponent;
    let fixture: ComponentFixture<BoxesComponent>;
    let element: DebugElement;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            imports: [BoxesComponent]
        }).compileComponents()
    });

    beforeEach(() => { 
        fixture = TestBed.createComponent(BoxesComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
        fixture.detectChanges();
    })

    it('component should have a intal paragraph', () => {
        expect(component).toBeTruthy();
        let pElements = element.queryAll(By.css('p'));
        expect(pElements[0].nativeElement.textContent).toBe('boxes works!');

        let buttonElements = element.queryAll(By.css('.btn'));
        expect(buttonElements[0].nativeElement.disabled).toBeTrue();

        component.title = 'Kamal';
        fixture.detectChanges();
        expect(pElements[1].nativeElement.textContent).toBe('Kamal')
    });
})