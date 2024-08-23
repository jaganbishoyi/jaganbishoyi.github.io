import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'TitleCase'
})
export class TitleCasePipe implements PipeTransform {

    transform(value: string): string {
        if (!value) return value;

        // Split by hyphen
        let words = value.split('-');

        // Capitalize the first letter of each word
        words = words.map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );

        // Join the words with space and return
        return words.join(' ');
    }

}
