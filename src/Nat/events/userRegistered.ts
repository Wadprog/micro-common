import Subjects from './subjects';
import { UserInterface } from '../../../../services/common/schemas/user.schema';

export interface UserRegisteredEvent {
    subject: Subjects.UserCreated;
    data: UserInterface
}