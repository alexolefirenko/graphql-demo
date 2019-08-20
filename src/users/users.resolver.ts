import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { UserDetails } from './models/user-details.model';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  async users(@Args('location') location: string) {
    return await this.usersService.fetchUsers(location);
  }

  @ResolveProperty('details', () => UserDetails)
  async getDetails(@Parent() user: User) {
    return this.usersService.fetchUser(user.url);
  }
}
