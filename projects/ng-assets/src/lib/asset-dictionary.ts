export class AssetDictionary {
  private _dictionary: {[key: string]: string};
  
  constructor() {
  }

  public getPath(key: string): string {
    if(!this._dictionary) {
      throw new Error('The assets dictionary has not been initialized yet');
    }
    const val = this._dictionary[key];
    if(!val) {
      throw new Error(`Could not find resource + "${key}"`);
    }
    return val;
  }

  public initAssets(jsonData: any) {
    const res: {[key: string]: string} = {};
    this.flattenObject('', jsonData, res);
    this._dictionary = res;
  }

  private flattenObject(subkey: string, obj: any, res: {[key: string]: string}) {
    const keys = Object.keys(obj);

    for (const key of keys) {
      const newKey = `${subkey}.${key}`;
      if(typeof key === 'object') {
        this.flattenObject(newKey, obj[key], res);
      } else {
        res[newKey] = obj[key];
      }
    }
  }
}
