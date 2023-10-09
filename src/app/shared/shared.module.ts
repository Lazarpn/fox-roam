import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './loaders/http-loader-factory';
import { HttpClient } from '@angular/common/http';
import { CapitalizePipe } from './models/pipes/capitalize.pipe';
import { ImageCropperModalComponent } from './components/image-cropper-modal copy/image-cropper-modal.component';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [CapitalizePipe, ImageCropperModalComponent],
  imports: [
    CommonModule,
    ImageCropperModule,
    MatCommonModule,
    MatDialogModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ImageCropperModalComponent, MatCommonModule, MatDialogModule, CapitalizePipe],
})
export class SharedModule {}
