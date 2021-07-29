import { Pipe, PipeTransform } from '@angular/core';
import { Materiaal } from './materiaal/materiaal.model';

@Pipe({
  name: 'materiaalFilter'
})
export class MateriaalFilterPipe implements PipeTransform {

  lijst: Materiaal[] = [];

  transform(materiaal: Materiaal[], filter: any, filterItems: Array<any>): any {
      this.lijst =  []
      let checkedItems = filterItems.filter(item => { return item.checked; });
      if(!checkedItems || checkedItems.length === 0){
        return materiaal;
      }else if(checkedItems.length > 0){
        for(let item of checkedItems){
          for(let mat of materiaal){
            if(mat.thema.toLowerCase() == item.value.toLowerCase()){
              this.lijst.push(mat);
            }
          }
        }
        materiaal = this.lijst;
        return materiaal;
      }else
    return materiaal;
  }
}
