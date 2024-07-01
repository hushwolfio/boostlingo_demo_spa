// src/app/guards/home.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (!localStorage.getItem('userEmail')) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
