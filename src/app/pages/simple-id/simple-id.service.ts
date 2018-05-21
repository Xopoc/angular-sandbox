import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleIdService {

  private items: any[] = [
    {
      id: '1',
      name: 'list one',
      content: 'list one content',
      seo: {
        title: 'List one title',
        description: 'List one description',
      },
    },

    {
      id: 'two',
      name: 'list 2',
      content: 'list 2 content',
      seo: {
        title: 'List 2 title',
        description: 'List 2 description',
      },
    },
    {
      id: '3',
      name: 'list 3',
      content: 'list 3 content',
      seo: {
        title: 'List 3 title',
        description: 'List 3 description',
      },
    },
    {
      id: 'wow',
      name: 'wow item',
      content: 'wow item content content',
      seo: {
        title: 'List wow title',
        description: 'List wow description',
      },
    },
  ];


  constructor() {
  }

  getItems(): Observable<any[]> {
    return new Observable<any[]>(observer => {
      setTimeout(() => {
        observer.next(this.items.slice());
      }, 2000);
    });
  }

  getItemById(id: string): Observable<any> {
    const listItem = this.items.find(item => {
      return item.id === id;
    });
    if (listItem) {
      return new Observable<any>(observer => {
        setTimeout(() => {
          observer.next({...listItem});
        }, 2000);
      });
    }
    return of(null);
  }
}
