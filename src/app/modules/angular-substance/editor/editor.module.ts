import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorService } from './providers/editor.service';
import { EditorPackageService } from './providers/editor-package.service';


@NgModule({
    imports: [
        CommonModule
    ],
    providers: [EditorService, EditorPackageService],
    declarations: []
})
export class EditorModule {
}


