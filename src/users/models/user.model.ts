import { Field, Int, ObjectType } from 'type-graphql';
import { UserDetails } from './user-details.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  login: string;

  @Field()
  url: string;

  @Field(() => UserDetails)
  details?: UserDetails;
}
