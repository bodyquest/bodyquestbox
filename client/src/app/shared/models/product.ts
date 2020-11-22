export interface IProduct {
    id: number;
    name: string;
    shortDescription: string;
    grossWeight: number;
    price: number;
    pictureUrl: string;
    options: Option[];
    optionValues: OptionValue[];
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