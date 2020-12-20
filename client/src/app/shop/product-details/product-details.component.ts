import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {

  @ViewChild('f', {static: false}) form!: NgForm;
  @ViewChild('skuPrice', {static: false}) skuPrice!: ElementRef;
  product!: IProduct;
  quantity = 1;
  skuPriceNum = 0;
  isSoldOut: boolean = false;
  
  selectedOptions: string[] = [];
  options: any[] = [];
  Skus: any[] = [];

  optionsForm = new FormGroup({});
  private createForm(): void {
    this.options.forEach(opt => {
      this.optionsForm.addControl(`${opt.name}`, this.fb.control('', Validators.required));
    });
  }

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService,
    private basketService: BasketService,
    public fb: FormBuilder,
    private renderer: Renderer2) {
      this.bcService.set('@productDetails', '');
    }

  ngOnInit(): void {
    this.loadProduct();
  }

  ngAfterViewInit(): void {
    
  }

  onChangeHandler(formData: any) {
      console.log(formData);
      console.log(this.form.valid);
      
      if (this.form.valid) {

        if (this.selectedOptions.length === 0) {
          for(var prop in this.form.value) {
            var value: string = this.form.value[prop];
            this.selectedOptions.push(value);
          }
        }
        else {
          this.selectedOptions.length = 0;

          for(var prop in this.form.value) {
            var value: string = this.form.value[prop];
            this.selectedOptions.push(value);
          }
        }

        this.checkStock(this.selectedOptions);
      }

  }

  private checkStock(options: string[]) {
    var isFound = false;

    for (var sku of this.Skus) {
      isFound = options.every(item => sku.name.toLowerCase().includes(item.toLowerCase()));

      if (isFound) {
        let num: any;
        console.log(sku.weight);
        const childElements = this.skuPrice.nativeElement.childNodes;
        for (let child of childElements) {
          this.renderer.removeChild(this.skuPrice.nativeElement, child);
        }

        if (sku.stockQty === 0) {
          num = this.renderer.createText('Sold Out');
          this.renderer.appendChild(this.skuPrice.nativeElement, num);
          this.renderer.setStyle(this.skuPrice.nativeElement,'color', 'red');
          this.isSoldOut = true;
        }
        else {
          this.skuPriceNum = sku.price;
          this.product.price = this.skuPriceNum;
          this.product.grossWeight = sku.weight;
          
          num = this.renderer.createText(`${this.skuPriceNum} лв.`);
          this.renderer.appendChild(this.skuPrice.nativeElement, num);
          this.renderer.setStyle(this.skuPrice.nativeElement,'color', 'black');
          this.isSoldOut = false;
        }

        return;
      }
    }
  }

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  loadProduct() {
    let str: string;
    let final: string;

    this.shopService.getProduct(Number(this.activatedRoute.snapshot.paramMap.get('id')))
      .subscribe(product => {
        // const arr = str.split('\n');

        // arr.forEach(item => {
        //   const div = document.createElement('div');
        //   div.innerText = item;
        //   document.body.appendChild(div);
        // });
      str = "<p>" + product.shortDescription;
      final = str.replace(/(?:\n\n|\n)/g, "</p><p>");
      this.product = product;
      this.product.shortDescription = final;
      this.options = [...this.product.options];
      this.Skus = [...this.product.skUs];
      
      this.createForm();

      this.bcService.set("@productDetails", product.name);
      }, error => {
        console.log(error);
      });
  }

  onOptionSelected(event: Event): void {
    let element = event.target as HTMLSelectElement;

    // TODO if needed
  }
}
