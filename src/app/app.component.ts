import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = 'ng-2024-12';
    httpService: HttpClient = inject(HttpClient);

    ngOnInit(): void {
        this.httpService
            .get('https://jsonplaceholder.typicode.com/todos/1', {
                responseType: 'json',
            })
            .subscribe({
                next: (data) => {
                    console.log(data);
                },
            });
        const params = new HttpParams();
        const headers = new HttpHeaders();
        this.httpService
            .get('https://jsonplaceholder.typicode.com/comments', {
                responseType: 'json',
                params: params.set('postId', 3),
                headers: headers.append('debug-leven','normal')
            })
            .subscribe((res) => console.log(res));
    }
}
