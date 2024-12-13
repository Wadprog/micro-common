import Subjects from './subjects';
import { UserInterface } from '../../schema/user.schema';

export type UserRegisteredEvent = {
    subject: Subjects.UserRegistered,
    data: UserInterface
}

export type EmailVerifiedEvent = {
    subject: Subjects.EmailVerified,
    data: UserInterface
}

