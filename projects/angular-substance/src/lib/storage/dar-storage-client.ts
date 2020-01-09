import { Dar } from './../dar/dar';

export interface DarStorageClient {

    read(archiveId: string, cb: (err: Error, response:Dar) => void): Promise<Dar>;

    write(archiveId: string, data: Dar, cb: (err: Error, response: Dar) => void): Promise<Dar>;

    setApiUrl(url: string): void
}
