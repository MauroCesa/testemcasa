import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ({
    providedIn: 'root'
})

export class UserService {

    apiUrl = 'http://localhost:3000/auth';

    constructor(private http: HttpClient) {}

    create(data: any): Observable<any>{
        return this.http.post(this.apiUrl+ '/register', data)
    }

    getData(){
        return this.http.get(`${this.apiUrl}`);

    }
}