import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  itemList: Item[] = [new Item(101, 'Cheese', 10, 'ML'), new Item(102, 'Milk', 1, 'LTR')];
}
