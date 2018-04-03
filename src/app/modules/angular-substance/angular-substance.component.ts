import { Component, OnInit } from '@angular/core';
import { ScrollPane, AbstractEditor, Toolbar } from 'substance';
import { Configurator, EditorSession } from 'substance';
import fixture from './fixture';
import { SimpleEditorPackageService } from './editor/providers/simple-editor-package.service';
import SimpleWriter from './editor/providers/SimpleWriter';


@Component({
    selector: 'app-angular-substance',
    templateUrl: './angular-substance.component.html',
    styleUrls: ['./angular-substance.component.css']
})
export class AngularSubstanceComponent implements OnInit {
    private cfg;

    constructor(private editorPackage: SimpleEditorPackageService) {
        this.cfg = new Configurator();
        this.cfg.import(editorPackage.getConfig());
    }

    ngOnInit() {
        let cfg = this.cfg;
        let importer = cfg.createImporter('html');
        let doc = importer.importDocument(fixture);
        // This is the data structure manipulated by the editor
        let editorSession = new EditorSession(doc, {
            configurator: cfg
        });
        // Mount SimpleWriter to the DOM and run it.
        SimpleWriter.mount({
            editorSession: editorSession
        }, document.body)
    }

}

