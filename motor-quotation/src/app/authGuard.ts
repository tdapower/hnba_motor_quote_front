import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { USER } from './shared/config/user';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {

    /*    console.log('dsfsfa');
        console.log(USER.USER_AUTH_TOKEN);
        console.log(localStorage.getItem('currentUser'));*/

       if (localStorage.getItem('currentUser')) {
           USER.USER_AUTH_TOKEN = localStorage.getItem("currentUserToken");
            return true;
        }
        // if (USER.USER_AUTH_TOKEN !== null &&  USER.USER_AUTH_TOKEN!=="") {
        //     // logged in so return true

        //    // console.log('yuuuuuu');
        //     return true;
        // }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}