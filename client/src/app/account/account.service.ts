import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAddress } from '../shared/models/address';
import { IUser } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<IUser>(1);
  // currentUser$ = this.currentUserSource.asObservable();

  currentUser!: IUser | null;
  loggedIn = false;

  private token = localStorage.getItem('token');
  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });
  authCompleted$ = this.http.get<IUser>(this.baseUrl + 'account',
    { headers: this.httpHeaders })
    .pipe(shareReplay(1));

  constructor(private http: HttpClient, private router: Router) {
        this.authCompleted$.subscribe((user: any) => {
          this.currentUser = user;
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }, () => {
          this.currentUser = null;
          this.currentUserSource.next(null!);
        });
  }

  isLoggedIn(): boolean {
    return this.loggedIn = !!localStorage.getItem('token');
  }

  loadCurrentUser(token: string | null) {
    if (token === null) {
      // tslint:disable-next-line: no-non-null-assertion
      this.currentUserSource.next(null!);
      return of(null);
    }

    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<IUser>(this.baseUrl + 'account', { headers: httpHeaders }).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }

  login(values: any) {
    return this.http.post<IUser>(this.baseUrl + 'account/login', values).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.loggedIn = true;
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

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn = true;
    this.currentUser = null;
    this.currentUserSource.next(null!);
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email: string): Observable<object> {
    return this.http.get(this.baseUrl + 'account/emailexists?email=' + email);
  }

  getUserAddress(): Observable<IAddress> {
    return this.http.get<IAddress>(this.baseUrl + 'account/address');
  }

  updateUserAddress(address: IAddress): Observable<IAddress> {
    return this.http.put<IAddress>(this.baseUrl + 'account/address', address);
  }
}
