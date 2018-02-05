import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ButtonWithSassImportComponent } from './button-with-sass-import/button-with-sass-import.component';
import { ButtonWithoutSassImportComponent } from './button-without-sass-import/button-without-sass-import.component';

@NgModule({
    declarations: [
        AppComponent,
        ButtonWithSassImportComponent,
        ButtonWithoutSassImportComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
