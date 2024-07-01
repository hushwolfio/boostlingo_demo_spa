import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, MatToolbarModule, MatButtonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  email: string = '';
  imageUrl: string = '';
  currentDate: Date = new Date();

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.email = localStorage.getItem('userEmail') || '';
    this.loadRandomImage();
  }

  loadRandomImage() {
    this.http
      .get<any>('https://dog.ceo/api/breeds/image/random')
      .subscribe((response) => {
        this.imageUrl = response.message;
      });
  }

  signOut() {
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login']);
  }
}
