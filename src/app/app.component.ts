import { HttpClient } from '@angular/common/http';
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
            .get('https://jsonplaceholder.typicode.com/todos/1')
            .subscribe({
                next: (data) => {
                    console.log(data);
                },
            });
    }
}
