export interface IProduct {
    id: number;
    name: string;
    shortDescription: string;
    grossWeight: number;
    price: number;
    pictureUrl: string;
    options: Option[];
    optionValues: OptionValue[];
    skUs: SKU[];
}
interface OptionValue {
    optionId: number;
    valueName: string;
}
interface Option {
    id: number;
    name: string;
    optionValueNames: string[];
}

interface SKU {
    id: number;
    name: string;
    price: number;
    weight: number;
    stockQty: number;
}