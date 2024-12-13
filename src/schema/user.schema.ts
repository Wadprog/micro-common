import { z, object, string, TypeOf } from 'zod';

export const createUser = object({
  firstName: string({
    required_error: 'Please provide a first name',
  }),
  lastName: string({
    required_error: 'Please provide a last name',
  }),
  email: string({
    required_error: 'You must provide a valid email address',
  }).email('The email address you provided is not a valid email'),
  password: string({
    required_error: 'You must provide a valid password',
  }).min(6, 'Password is too short - should be min 6 characters'),
  passwordConfirmation: string({
    required_error: 'Password confirmation is required',
  }),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: 'Passwords do not match',
  path: ['passwordConfirmation'],
})


export const createUserSchema = object({
  body: createUser
});

export const UserSchema = z.object({
  id: z.number(),
  emailVerificationKey: string(),
  emailVerified: z.boolean(),
  firstName: string(),
  lastName: string(),
  email: string().email(),
  password: string().min(6),
});






export const getUserSchema = object({
  params: object({
    id: string(),
  }),
});

export const forgotPasswordSchema = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),
  }),
});

export const resetPasswordSchema = object({
  params: object({
    id: string(),
    resetPasswordKey: string(),
  }),
  body: object({
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password is too short - should be min 6 chars'),
    passwordConfirmation: string({
      required_error: 'Password confirmation is required',
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  }),
});

export type CreateUserInterface = z.infer<typeof createUser>;
export type UserInterface = z.infer<typeof UserSchema>;
export type GetUserInput = z.infer<typeof getUserSchema>['params'];
export type ResetPasswordInput = TypeOf<typeof resetPasswordSchema>;
export type CreateUserInput = TypeOf<typeof createUserSchema>;
export type ForgotPasswordInput = TypeOf<typeof forgotPasswordSchema>['body'];
