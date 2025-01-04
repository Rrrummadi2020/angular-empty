import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private httpClient: HttpClient) {}

    getUser() {
        return this.httpClient.get<{ title: string }>(
            'https://jsonplaceholder.typicode.com/todos/1',
            {
                responseType: 'json',
            }
        );
    }

    getUserList() {
        const params = new HttpParams();
        const headers = new HttpHeaders();
        this.httpClient
            .get('https://jsonplaceholder.typicode.com/comments', {
                responseType: 'json',
                params: params.set('postId', 3),
                headers: headers.append('debug-leven', 'normal'),
            })
            .subscribe((res) => console.log(res));
    }
}
