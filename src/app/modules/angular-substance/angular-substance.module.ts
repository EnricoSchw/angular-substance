import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSubstanceComponent } from './angular-substance.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [AngularSubstanceComponent],
    exports: [AngularSubstanceComponent]
})
export class AngularSubstanceModule {
}
