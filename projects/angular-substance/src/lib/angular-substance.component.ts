import { Component, Input, OnInit } from '@angular/core';

import * as substance from 'substance-texture/dist/lib/substance/substance';
import * as substanceTexture from 'substance-texture/dist/texture.es';
import { EditorConfig } from 'angular-substance/src/lib/config/editor-config';
import { StorageType } from 'angular-substance/src/lib/storage/storage-type';
import { AngularHttpStorageClient } from 'angular-substance/src/lib/storage/angular-http-storage.client';

class DevWebApp extends substanceTexture.TextureWebApp {
    _getStorage() {
        const storageType = <StorageType>(<any>this).props.storageType;

        if (storageType === StorageType.VFS) {
            const storage = super._getStorage();
            substanceTexture.vfsSaveHook(storage, substanceTexture.TextureArchive);
            return storage;
        }

        if (storageType === StorageType.ANGULAR_HTTP) {
            return (<any>this).props.storage;
        }
        return super._getStorage();
    }
}

@Component({
    selector: 'esl-angular-substance',
    template: ``,
    styles: []
})
export class AngularSubstanceComponent implements OnInit {

    @Input() archiveId: string = 'elife-32671';
    @Input() storageUrl: string = 'api/archives';
    @Input() storageType: StorageType = StorageType.HTTP;
    @Input() defaultDataFolder: string = './assets/data/';

    constructor(private storage: AngularHttpStorageClient) {
    }

    ngOnInit() {
        this.storage.setApiUrl(this.storageUrl);
        substance.substanceGlobals.DEBUG_RENDERING = true;
        substance.substanceGlobals.STRICT_VALIDATION = false;
        substanceTexture.Texture.defaultDataFolder = this.defaultDataFolder;

        let config: EditorConfig = {
            archiveId: this.archiveId,
            storageUrl: this.storageUrl,
            storageType: this.storageType,
            debug: true,
            enableRouting: true
        };
        if (this.storageType === StorageType.ANGULAR_HTTP) {
            config = {...config, storage: this.storage};
        }

        if (this.storageType === StorageType.VFS) {
            config = {...config, vfs: (<any>window).vfs};
        }

        setTimeout(() => {
            let app = (<any>DevWebApp).mount(config, window.document.body);
        }, 500);
    }
}
