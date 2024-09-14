import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Biography } from '../model/biographies.entity';

@Injectable({
  providedIn: 'root',
})
export class BiographiesApiService {
  private apiUrl = 'https://www.who.int/api/news/biographies';

  constructor(private http: HttpClient) {}

  getBiographies(): Observable<Biography[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.value.map((item: any) => new Biography(item)))
    );
  }
}
