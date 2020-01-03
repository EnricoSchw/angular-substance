import { Dar } from 'angular-substance/src/lib/dar/dar';

export interface DarStorageClient {

    read(archiveId: string, cb: (err: any, response:Dar) => void): Promise<any>;

    write(archiveId: string, data: Dar, cb: (err: any, response: Dar) => void): Promise<any>;
}
