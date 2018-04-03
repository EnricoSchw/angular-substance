import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSubstanceComponent } from './angular-substance.component';
import { EditorModule } from './editor/editor.module';

@NgModule({
    imports: [
        CommonModule,
        EditorModule
    ],
    declarations: [AngularSubstanceComponent],
    exports: [AngularSubstanceComponent]
})
export class AngularSubstanceModule {
}
