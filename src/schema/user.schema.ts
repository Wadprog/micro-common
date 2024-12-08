import { z, object, string } from 'zod';

export const createUser = object({
  firstName: string({
    required_error: 'Please provide a first name',
  }),
  lastName: string({
    required_error: 'Please provide a last name',
  }),
})
export const UserSchema = z.object({
  id: z.number(),
  firstName: string(),
  lastName: string(),
});

export const getUserSchema = object({
  params: object({
    id: string(),
  }),
});
export type CreateUserInterface = z.infer<typeof createUser>;
export type UserInterface = z.infer<typeof UserSchema>;
export type GetUserInput = z.infer<typeof getUserSchema>['params'];
