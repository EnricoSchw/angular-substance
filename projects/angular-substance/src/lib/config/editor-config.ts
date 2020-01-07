import { DarStorageClient } from 'angular-substance/src/lib/storage/dar-storage-client';
import { StorageType } from 'angular-substance/src/lib/storage/storage-type';


export class EditorConfig {
    archiveId: string | number;
    storageType: StorageType;
    storageUrl: string;
    storage?: DarStorageClient;
    debug: boolean;
    enableRouting: boolean;
}
