import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { ISearchResult } from '../common/search-result.interface';
import { User } from './models/user.model';
import { UserDetails } from './models/user-details.model';

@Injectable()
export class UsersService {
  async fetchUsers(location: string) {
    const result = await fetch(
      `https://api.github.com/search/users?q=location:${location}`,
      {
        headers: {
          Authorization: `token 812584ebd69f033938c7081596982a5d95314711`,
        },
      },
    );

    const { items }: ISearchResult<User> = await result.json();

    items.length = 5;

    return items;
  }

  async fetchUser(url: string) {
    const result = await fetch(url, {
      headers: {
        Authorization: `token 812584ebd69f033938c7081596982a5d95314711`,
      },
    });

    const user: UserDetails = await result.json();

    return user;
  }
}
