import Subjects from './subjects';
import { UserInterface } from '../../schema/user.schema';

export type  UserRegisteredEvent= {
    subject: Subjects.UserCreated;
    data: UserInterface
}