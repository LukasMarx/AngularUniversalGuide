import { BrowserTransferStateModule } from '@angular/platform-browser';
import { PostRoutes } from './post.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';

@NgModule({
    imports: [CommonModule, PostRoutes],
    declarations: [PostComponent]
})
export class PostModule {}
