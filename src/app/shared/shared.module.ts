import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../Material/material.module';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';

@NgModule({
  declarations: [
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    NotFoundComponent,
    LayoutComponent,
  ],
  exports: [
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    NotFoundComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
})
export class SharedModule {}
