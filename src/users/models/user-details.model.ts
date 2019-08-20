import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class UserDetails {
  @Field(() => Int)
  id: number;

  @Field()
  login: string;

  @Field()
  gravatar_id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  company?: string;

  @Field({ nullable: true })
  blog?: string;

  @Field({ nullable: true })
  location?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field(() => Int)
  public_repos: 61;

  @Field(() => Int)
  public_gists: 62;

  @Field(() => Int)
  followers: 21600;

  @Field(() => Int)
  following: 11;

  @Field()
  created_at: '2007-10-20T05:24:19Z';

  @Field()
  updated_at: '2019-08-19T19:50:56Z';
}
