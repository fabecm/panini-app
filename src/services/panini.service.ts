import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PaniniService {
    url = 'http://crispybacon.store/wp-json/wp/v2';
    constructor (private http: Http) {}
    getData () {
        return this.http
            .get(`${this.url}/posts`)
            .toPromise()
    }
}