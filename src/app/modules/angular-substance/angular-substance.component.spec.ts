import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSubstanceComponent } from './angular-substance.component';

describe('AngularSubstanceComponent', () => {
    let component: AngularSubstanceComponent;
    let fixture: ComponentFixture<AngularSubstanceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AngularSubstanceComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AngularSubstanceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
