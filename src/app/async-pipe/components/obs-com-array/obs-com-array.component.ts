import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Observable } from 'rxjs';
import { UsesListResponse } from '../../../types/users-list-response.type';

@Component({
  selector: 'app-obs-com-array',
  templateUrl: './obs-com-array.component.html',
  styleUrl: './obs-com-array.component.scss'
})
export class ObsComArrayComponent implements OnInit {
  users$!: Observable<UsesListResponse>;

  constructor(
    private readonly _usersService: UsersService
  ){}

ngOnInit() {
  this.users$ = this._usersService.getUsers();

}
}
