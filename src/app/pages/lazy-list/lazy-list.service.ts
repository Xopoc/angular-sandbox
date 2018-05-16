import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LazyListService {
  private list: any[] = [
    {
      id: '1',
      name: 'list one',
      content: 'list one content',
    },

    {
      id: 'two',
      name: 'list 2',
      content: 'list 2 content',
    },
    {
      id: '3',
      name: 'list 3',
      content: 'list 3 content',
    },
  ];


  constructor() {
  }

  getList(): Observable<any[]> {
    return new Observable<any[]>(observer => {
      setTimeout(() => {
        observer.next(this.list.slice());
      }, 2000);
    });
  }

  getItemById(id: string): Observable<any> {
    const listItem = this.list.find(item => {
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
