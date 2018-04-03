import { Component, OnInit } from '@angular/core';
import { ScrollPane, AbstractEditor, Toolbar } from 'substance';
import { Configurator, EditorSession } from 'substance'
import fixture from './fixture'
import { EditorPackageService } from './editor/providers/editor-package.service';


@Component({
  selector: 'app-angular-substance',
  templateUrl: './angular-substance.component.html',
  styleUrls: ['./angular-substance.component.css']
})
export class AngularSubstanceComponent implements OnInit {

  constructor(private editorPackage: EditorPackageService) {

  }

  ngOnInit() {
      let config = new Configurator();
      config.import(this.editorPackage.getConfig());
      // Import article from XML markup
      let importer = config.createImporter('xml');
      let doc = importer.importDocument(fixture);
      // This is the data structure manipulated by the editor
      let editorSession = new EditorSession(doc, {
          configurator: config
      });

      // Mount the editor to the DOM and run it
      ExampleEditor.mount({
          editorSession: editorSession
      }, document.body)
  }

}



/**
 We extend from AbstractEditor which provides an abstract implementation
 that should be feasible for most editors.
 */
class ExampleEditor extends AbstractEditor {


    render($$) {
        let el = $$('div').addClass('sc-example-editor')
        el.append(
            this._renderToolbar($$),
            this._renderContentPanel($$)
        );
        return el
    }

    _renderToolbar($$) {
        let configurator = this.getConfigurator()
        return $$('div').addClass('se-toolbar-wrapper').append(
            $$(Toolbar, {
                toolPanel: configurator.getToolPanel('toolbar')
            }).ref('toolbar')
        )
    }

    _renderContentPanel($$) {
        const doc = this.editorSession.getDocument()
        const configurator = this.getConfigurator()
        const ExampleArticleComponent = this.getComponent('example-article')
        const Overlay = this.getComponent('overlay')
        const exampleArticle = doc.get('example-article')

        let contentPanel = $$(ScrollPane, {
            tocProvider: this.tocProvider,
            scrollbarType: 'substance',
            scrollbarPosition: 'left',
            highlights: this.contentHighlights,
        }).ref('contentPanel');

        contentPanel.append(
            $$(ExampleArticleComponent, {
                node: exampleArticle,
                disabled: this.props.disabled
            }),
            $$(Overlay, {
                toolPanel: configurator.getToolPanel('main-overlay'),
                theme: 'dark'
            })
        )

        return $$('div').addClass('se-content-panel-wrapper').append(
            contentPanel
        )
    }

    getConfigurator() {
        return this.props.editorSession.configurator
    }

}
