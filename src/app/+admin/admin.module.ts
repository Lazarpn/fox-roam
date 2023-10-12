import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../shared/loaders/http-loader-factory';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminSidebarComponent, AdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class AdminModule {}
