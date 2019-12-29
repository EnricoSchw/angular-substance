import { Component, OnInit } from '@angular/core';

import * as substance from 'substance-texture/dist/lib/substance/';
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
        substanceTexture.Texture.defaultDataFolder = './assets/demo/data/';
        setTimeout(() => {
            let app =(<any>DevWebApp).mount({
                debug: true,
                archiveId: substance.getQueryStringParam('archive') || 'elife-32671',
                storageType: substance.getQueryStringParam('storage') || 'vfs',
                storageUrl: substance.getQueryStringParam('storageUrl') || '/archives',
                vfs: (<any>window).vfs,
                enableRouting: true
            }, window.document.body);
        }, 500);

    }
}

class DevWebApp extends substanceTexture.TextureWebApp {
    _getStorage () {
        let storageType = 'vfs'; //this.props.storageType;
        let storage = super._getStorage();
        if (storageType === 'vfs') {
            substanceTexture.vfsSaveHook(storage, substanceTexture.TextureArchive);
        }
        return storage
    }
}
