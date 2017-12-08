import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
    ServerModule,
    ServerTransferStateModule // <--- Added
} from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'my-app-id'
        }),
        ServerModule,
        AppModule,
        ModuleMapLoaderModule,
        ServerTransferStateModule // <--- Added
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class ServerAppModule {}
