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
  public_repos: number;

  @Field(() => Int)
  public_gists: number;

  @Field(() => Int)
  followers: number;

  @Field(() => Int)
  following: number;

  @Field()
  created_at: string;

  @Field()
  updated_at: string;
}
