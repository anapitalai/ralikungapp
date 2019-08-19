import { Injectable } from '@angular/core';
import { CanActivate,CanActivateChild,Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
   constructor(private router:Router,public authService:AuthService){}

    canActivate():boolean {
        console.log('check is in progress');
        if (this.authService.isLoggedIn()){
            return true;
        }
        else{
            this.router.navigate(['/login']);
            return false;
        }
    }


    canActivateChild():boolean {
        console.log('check child router is in progress');
        if (this.authService.isLoggedIn()){
            return true;
        }
        else{
            this.router.navigate(['/login']);
            return false;
        }
    }
}