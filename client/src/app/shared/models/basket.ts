export interface IBasket {
    id: string;
    items: IBasketItem[];
  }
  
export interface IBasketItem {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
}

export class Basket implements IBasket {
    id = createUUID();
    items: IBasketItem[] = [];

}

export interface IBasketTotals {
    shipping: number;
    subtotal: number;
    total: number;
}

function createUUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}
