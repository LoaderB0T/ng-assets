import { Injectable, Injector } from '@angular/core';
import { AssetDictionary } from './asset-dictionary';

@Injectable({
  providedIn: 'root'
})
export class NgAssetsService {
  private _assets: AssetDictionary;

  constructor(injector: Injector) {
    this.init(injector.get('ngAssetJsonData'));
  }

  public init(jsonData: any) {
    this._assets = new AssetDictionary();
    this._assets.initAssets(jsonData);
  }

  public asset(key: string) {
    return this._assets.getPath(key);
  }
}
