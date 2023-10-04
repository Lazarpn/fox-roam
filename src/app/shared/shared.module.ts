import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './loaders/http-loader-factory';
import { HttpClient } from '@angular/common/http';
import { CapitalizePipe } from './models/pipes/capitalize.pipe';

@NgModule({
  declarations: [HeaderComponent, CapitalizePipe],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [HeaderComponent],
})
export class SharedModule {}
