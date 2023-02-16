import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'reduceLength'
})
export class TextReducerPipe implements PipeTransform {
    transform(value: string) {
        if(value.length > 11) {
            let reducedString =  value.slice(0, 11);
            return reducedString += ' ...';
        }
        return value
    }
}