import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { IUserResponse } from '../../../interfaces/user-response.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-com-objeto',
  templateUrl: './obs-com-objeto.component.html',
  styleUrl: './obs-com-objeto.component.scss'
})
export class ObsComObjetoComponent implements OnInit, OnDestroy{
  user: IUserResponse = {} as IUserResponse;
  userSubs: Subscription | undefined;

  user$!: Observable<IUserResponse>;

  constructor(private readonly _usersService: UsersService){}

  ngOnInit() {
    this.user$ = this._usersService.getUserById(2);


    this.userSubs = this._usersService.getUserById(1).subscribe((userResponse) => this.user = userResponse);
  }

  ngOnDestroy() {
    this.userSubs && this.userSubs.unsubscribe();
  }

  onBtnClick(userId: number){
    this.user$ = this._usersService.getUserById(userId);
  }
}
