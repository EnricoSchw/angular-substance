import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularSubstanceModule } from './modules/angular-substance/angular-substance.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AngularSubstanceModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
