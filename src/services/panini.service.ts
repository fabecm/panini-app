import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PaniniService {
    activeCategory: Number;
    url = 'http://crispybacon.store/wp-json/wp/v2';
    constructor (private http: Http) {}
    getData () {
        return this.http
            .get(`${this.url}/posts`)
            .toPromise()
    }

    getCategories () {
        return this.http
            .get(`${this.url}/categories`)
            .toPromise()
    }

    getFiltered () {
        return this.http
            .get(`${this.url}/posts?categories=${this.activeCategory}`)
            .toPromise()
    }
}