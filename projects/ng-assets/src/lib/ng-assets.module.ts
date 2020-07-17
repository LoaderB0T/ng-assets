import { NgModule, ModuleWithProviders } from '@angular/core';
import { AssetPipe } from './ng-assets.pipe';



@NgModule({
  declarations: [AssetPipe]
})
export class NgAssetsModule {
  static forRoot(jsonData: any): ModuleWithProviders<NgAssetsModule> {
    return {
      ngModule: NgAssetsModule,
      providers: [{provide: 'ngAssetJsonData', useValue: jsonData}]
    };
  }
}
