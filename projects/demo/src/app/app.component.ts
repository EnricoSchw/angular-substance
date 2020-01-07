import { Component } from '@angular/core';
import { StorageType } from 'angular-substance/src/lib/storage/storage-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'demo';
    public storageType: StorageType = StorageType.VFS;
    public archiveId: string = 'elife-32671';
    public storageUrl: string ='api/archives';
}
