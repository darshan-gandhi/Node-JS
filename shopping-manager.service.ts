import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class ShoppingManagerService {
  private catalog: {[k: string]: any} = [
    { name: `DARSHAN`, salary: `20000`, id: 1 , department: 'computer' },
    { name: `HARSH`, salary: `25000`, id: 2, department: 'it'},
    { name: `DHAIRYAV`, salary: `25000`, id: 3 , department: 'mech'},
    { name: `BHATE`, salary: `15000`, id : 4 , department: 'extc'},
    { name: `KEVIN`, salary: `35000`, id : 5,  department: 'etrx'}
  ];
  private cart: {[k: string]: any} = [];
  constructor() { }

  getCatalogue(){
    return this.catalog;
  }

  getCart(){
    return this.cart;
  }

  addItemToCart(val) {

    this.catalog.forEach( (element) => {
      if (element.id === val) {
        let newItem: {[k: string]: any} = element;
        newItem.count = 1;
        this.cart.push(newItem);
        return;
      }
    });
  }

  reduceItemFromCart(val) {
    this.cart.forEach( (element) => {
      if (element.id === val)
      {
        element.count -= 1;
        if (element.count === 0)
        {
          this.cart = this.cart.filter(item => item.id !== val);
        }
        return;
      }
    });
  }
}