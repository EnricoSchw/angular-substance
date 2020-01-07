import { Injectable } from '@angular/core';
import { DarStorageClient } from 'angular-substance/src/lib/dar/dar-storage-client';
import { HttpClient } from '@angular/common/http';
import { Dar } from 'angular-substance/src/lib/dar/dar';

@Injectable({
    providedIn: 'root'
})
export class HttpStorageClientService implements DarStorageClient {

    private apiUrl: string;

    constructor(private http: HttpClient) {
    }

    public read(archiveId: string, cb: (err: Error, response: Dar) => void): Promise<Dar> {
        let url = this.apiUrl;
        if (archiveId) {
            url = url + '/' + archiveId;
        }
        return new Promise<Dar>((resolve, reject) => {
            this.http
                .get<Dar>(url)
                .toPromise()
                .then(
                    (res) => {
                        if (cb) cb(null, res);
                        resolve(res);
                    },
                    error => {
                        let err = new Error(error);
                        if (cb) cb(err, null);
                        reject(err);
                    }
                );
        });
    }

    public write(archiveId: string, data: Dar, cb: (err: Error, response: Dar) => void): Promise<Dar> {
        let form = new FormData();
        Object.keys(data.resources).forEach((filePath) => {
            const record = data.resources[filePath];
            if (record.encoding === 'blob') {
                // removing the blob from the record and submitting it as extra part
                form.append(record.id, record.data, filePath);
                delete record.data;
            }
        });

        form.append('_archive', JSON.stringify(data));
        let url = this.apiUrl;
        if (archiveId) {
            url = url + '/' + archiveId;
        }

        return new Promise<Dar>((resolve, reject) => {
            this.http
                .put<Dar>(url, form, {
                    headers: {'Content-Type': undefined}
                })
                .toPromise()
                .then(
                    (res) => {
                        if (cb) cb(null, res);
                        resolve(res);
                    },
                    error => {
                        let err = new Error(error);
                        if (cb) cb(err, null);
                        reject(err);
                    }
                );
        });
    }

    public setApiUrl(url: string): void {
        this.apiUrl = url;
    }
}
