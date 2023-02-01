import { Pipe, PipeTransform } from "@angular/core";

import { CartPipeInput } from '../models/cart-pipe-input';

@Pipe({
    name: 'cartPrice'
})
export class CartPricePipe implements PipeTransform {
    transform(value: CartPipeInput[] | any[]) {
        let price = 0;

        value.map((element) => {
            price += element.course_details[0].price;
        })

        return '₹ ' + price;
    }
}