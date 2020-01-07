# Angular Substance


## Table of contents

- [About](#about)
- [Getting started](#getting-started)
- [Run Demo](#run-demo)
- [Documentation](#documentation)
- [Build](#build)
- [License](#license)

## About

Angular Substance is a library to integrate [Substance](https://github.com/substance/substance) in angular projects. I use [Texture](https://github.com/substance/texture) as basement for a Substance Editor.

This project based on 
- [Texture](https://github.com/substance/texture) version 3.0.0-preview-18
- [Substance](https://github.com/substance/substance) version 1.1.0-preview.27
- [Angular](https://github.com/angular/angular) version 8

## Getting started:

```bash
npm i --save angular-substance
```

## Run Demo

Start a Backend
- Run `npm run server` for the http REST backend server deliver fromjson data
- Run `npm run dar-server` for the http DAR backend server deliver from DAR archive

Start Demo Project
- Run `npm start` for the demo project

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Documentation

### Integrate Angular Substance Module

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularSubstanceModule } from 'angular-substance';

@NgModule({
    imports: [
        BrowserModule,
        AngularSubstanceModule
    ]
})
export class AppModule { }
```

### Module Interface

```typescript
import { Component } from '@angular/core';
import { StorageType } from 'angular-substance';

@Component({
  selector: 'app-component',
  template: '<esl-angular-substance [archiveId]="archiveId" [storageType]="storageType" [storageUrl]="storageUrl"></esl-angular-substance>'
})
export class AppComponent {
    public archiveId: string = 'elife-32671';
    public storageType: StorageType = StorageType.HTTP;
    public storageUrl: string ='api/archives';
}
```

### Properties

Property | Type | Default | Description
------------ | ------------- | ------------- | -------------
archiveId | string | none | Your Archive name. It isNormally an id to find in the backend storage.
storageType | StorageType | StorageType.HTTP | The storage client you use to save documents in the backend. Normally you want save your documents in a server backend sending over **http**. You can use the Substance http storage client (StorageType.HTTP), As well you can use Angular http storage client (StorageType.ANGULAR_HTTP) or your own implementation of this.
storageUrl | string | api/archives |Url address for your backend service
defaultDataFolder | string | ./assets/data/ | Public folder with dar archives if you use VFS

### Use custom http service for your API

coming soon

### Setup for VFS Storage

- Add vfs as lib to `windows.vfs = your.vfs` , See demo index.html
- Use `StorageType.VFS` and adjust in the component setup `defaultDataFolder`, pointing to your dar archives 
```typescript
@Component({
  ...
  template: '<esl-angular-substance [archiveId]="archiveId" [storageType]="storageType" [storageUrl]="storageUrl"></esl-angular-substance>'
})
export class AppComponent {
    public storageType: StorageType = StorageType.VFS;
    public efaultDataFolder: string = './assets/data/';

}
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## License

MIT
