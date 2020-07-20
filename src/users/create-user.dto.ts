import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly email: string;
  @Field()
  readonly password: string;
}
