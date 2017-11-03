import { AboutMeRoutes } from './aboutMe.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './aboutMe.component';

@NgModule({
    imports: [CommonModule, AboutMeRoutes],
    declarations: [AboutMeComponent]
})
export class AboutMeModule {}
