import { Component, OnInit } from '@angular/core';

import * as substance from 'substance-texture/dist/lib/substance/substance';
import * as substanceTexture from 'substance-texture/dist/texture.es';

@Component({
    selector: 'lib-angular-substance',
    template: `
        <p>
            angular-substance works!
        </p>
    `,
    styles: []
})
export class AngularSubstanceComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

        substance.substanceGlobals.DEBUG_RENDERING = true;
        substance.substanceGlobals.STRICT_VALIDATION = false;
        substanceTexture.Texture.defaultDataFolder = './assets/data/';
        setTimeout(() => {
            let app =(<any>DevWebApp).mount({
                debug: true,
                // archiveId: substance.getQueryStringParam('archive') || 'elife-32671',
                // storageType: substance.getQueryStringParam('storage') || 'vfs',
                // storageUrl: substance.getQueryStringParam('storageUrl') || '/archives',
                // vfs: (<any>window).vfs,

                archiveId: 'elife-32671',
                //archiveId: 'blank',
                storageType: 'http',
                storageUrl: 'api/archives',
                enableRouting: true
            }, window.document.body);
        }, 500);

    }
}

class DevWebApp extends substanceTexture.TextureWebApp {
    // protected props = super.props;
    _getStorage () {
        let storageType = (<any>this).props.storageType;
        let storage = super._getStorage();
        if (storageType === 'vfs') {
            substanceTexture.vfsSaveHook(storage, substanceTexture.TextureArchive);
        }
        return storage
    }
}
