import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ITEM_URL = "http://localhost:8000/items";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) {}

  loadItems() {
    return this.http.get<Array<{ id: number, name: string }>>(ITEM_URL);
  }

  deleteItem(item: {id: number, name: string}) {
    console.log('delete item');
    return this.http.delete(`${ITEM_URL}/${item.id}`);
  }
}

// Next
// Figure out how Selectors work
// Figure out how to use Entity Adapter for this
// Get delete item working
// Get create item working
// Get patch item working
// Move setup over to work laptop
