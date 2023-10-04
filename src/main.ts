import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FrModule } from './app/fr.module';

platformBrowserDynamic()
  .bootstrapModule(FrModule)
  .catch(err => console.error(err));
