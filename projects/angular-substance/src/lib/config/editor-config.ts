import { DarStorageClient } from './../storage/dar-storage-client';
import { StorageType } from './../storage/storage-type';


export class EditorConfig {
    archiveId: string | number;
    storageType: StorageType;
    storageUrl: string;
    debug: boolean;
    enableRouting: boolean;
    storage?: DarStorageClient;
    vfs?: any;
}
