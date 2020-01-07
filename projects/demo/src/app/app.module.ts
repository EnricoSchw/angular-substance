import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularSubstanceModule } from 'angular-substance/src/public-api';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularSubstanceModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
