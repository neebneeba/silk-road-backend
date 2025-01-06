import { setSeederFactory } from 'typeorm-extension';
import { User } from '../entities/user.entity';
import { Faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/_enum/role.enum';

export const UserFactory = setSeederFactory(User, (faker: Faker) => {
  const user: User = new User();

  const saltOrRounds = 10;
  const hash = bcrypt.hash('Password123@', saltOrRounds);

  user.username = 'neba0317';
  user.email = faker.internet.email();
  user.phone_number = +faker.phone.number();
  user.profile_picture = faker.image.avatar();
  user.first_name = faker.person.firstName();
  user.last_name = faker.person.lastName();
  user.address = faker.location.streetAddress();
  user.role = Role.SuperAdmin;

  return user;
});
