import Subjects from './subjects';
import { UserInterface } from '../../schema/user.schema';

export interface UserRegisteredEvent {
    subject: Subjects.UserCreated;
    data: UserInterface
}