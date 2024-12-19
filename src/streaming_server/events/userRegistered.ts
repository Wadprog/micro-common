import Subjects from './subjects';
import { UserInterface } from '../../schema/user.schema';

export type UserRegisteredEvent = {
    subject: Subjects.UserRegistered,
    data: UserInterface
}

export type UserDeletedEvent ={
    subject: Subjects.UserDeleted,
    data: {id: Pick<UserInterface, 'id'>}
}

export type EmailVerifiedEvent = {
    subject: Subjects.EmailVerified,
    data: UserInterface
}

export type PasswordResetEvent = {
    subject: Subjects.PasswordReset,
    data: {
        userId: number;
        passwordResetKey: string;
        passwordResetExpires: Date;
    }
}

export type PasswordChanged = {
    subject: Subjects.PasswordChanged,
    data: UserInterface
}