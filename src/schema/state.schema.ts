import { z, object, string, TypeOf } from 'zod';

export const StateSchema = z.object({
    id: z.number(),
    name: z.string(),
    initials: string(),
    country_id: z.number(),
});


export const getOneSchema = object({
    params: object({
        id: z
            .number({ required_error: 'Please provide an id' })
    }),
});



export type StateInterface = z.infer<typeof StateSchema>;
export type getOneInput = TypeOf<typeof getOneSchema>['params'];