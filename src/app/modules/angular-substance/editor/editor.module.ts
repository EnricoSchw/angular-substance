import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorService } from './providers/editor.service';
import { EditorPackageService } from './providers/editor-package.service';
import { SimpleEditorPackageService } from './providers/simple-editor-package.service';


@NgModule({
    imports: [
        CommonModule
    ],
    providers: [EditorService, EditorPackageService, SimpleEditorPackageService],
    declarations: []
})
export class EditorModule {
}


