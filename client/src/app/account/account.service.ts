import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAddress } from '../shared/models/address';
import { IUser } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<IUser>(1);
  currentUser$ = this.currentUserSource.asObservable();

  currentUser!: IUser;
  get isLogged(): boolean { return !!this.currentUser; }

  private token = localStorage.getItem('token');
  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  authCompleted$ = this.http.get<IUser>(this.baseUrl + 'account',
    { headers: this.httpHeaders })
    .pipe(shareReplay(1));

  constructor(
      private http: HttpClient,
      private router: Router) {
        this.authCompleted$.subscribe((user: any) => {
          this.currentUser = user;
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }, () => {
          this.currentUser = null!;
          this.currentUserSource.next(null!);
        });
      }

  loadCurrentUser(token: string | null) {
    if (token === null) {
      this.currentUserSource.next(null!);
      return of(null);
    }

    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', `Bearer ${token}`);

    // Step 1
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<IUser>(this.baseUrl + 'account', { headers: httpHeaders })
      .pipe(shareReplay(1));

  }

  login(values: any) {
    return this.http.post<IUser>(this.baseUrl + 'account/login', values).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(values: any) {
    return this.http.post<IUser>(this.baseUrl + 'account/register', values).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSource.next(null!);
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email: string) {
    return this.http.get(this.baseUrl + 'account/emailexists?email=' + email);
  }

  getUserAddress() {
    return this.http.get<IAddress>(this.baseUrl + 'account/address');
  }

  updateUserAddress(address: IAddress) {
    return this.http.put<IAddress>(this.baseUrl + 'account/address', address);
  }
}
