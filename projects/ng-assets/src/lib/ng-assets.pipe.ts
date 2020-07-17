import { Pipe, PipeTransform } from '@angular/core';
import { NgAssetsService } from './ng-assets.service';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'asset'})
export class AssetPipe implements PipeTransform {
  constructor(private readonly assetService: NgAssetsService)
  {
   
  }  
  transform(value: string): string {
    return this.assetService.asset(value); 
  }
}
