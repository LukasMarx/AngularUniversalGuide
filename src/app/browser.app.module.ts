import { AppModule } from './app.module';
import {
    BrowserModule,
    BrowserTransferStateModule // <--- Added
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'my-app-id'
        }),
        BrowserTransferStateModule, // <--- Added
        AppModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class BrowserAppModule {}
