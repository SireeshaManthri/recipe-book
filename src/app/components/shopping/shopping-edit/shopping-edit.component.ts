import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShopinglistService } from 'src/app/Services/shopinglist.service';
import { ingredient } from '../Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
  
})
export class ShoppingEditComponent implements OnInit,AfterViewInit {
@ViewChild('iName',{static:false}) nameRef: ElementRef | any;
@ViewChild('iQuan',{static:false}) quanRef:ElementRef | any;
@ViewChild('iAmt',{static:false}) amtRef: ElementRef | any;

  constructor( private listService:ShopinglistService) { }
  ngAfterViewInit(){
    this.onAdd(); 
  }

  onAdd()
  {
  
    const ingName=this.nameRef.nativeElement.value;
    const ingQuan=this.quanRef.nativeElement.value;
    const ingAmt=this.amtRef.nativeElement.value;
    const newing = new ingredient(ingName,ingQuan,ingAmt);
   this.listService.addingredient(newing);
  //  console.log("shopping edit"+newing);
    }
  
  ngOnInit(): void {
  }



}


