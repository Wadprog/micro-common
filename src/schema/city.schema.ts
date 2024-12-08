import { z, object, string, TypeOf } from 'zod';

export const CitySchema = z.object({
    id: z.number(),
    name: z.string(),
    initials: string(),
    stateId: z.number(),
});


export const getOne = object({
    params: object({
        id: z
            .number({ required_error: 'Please provide an id' })
    }),
});



export type CityInterface = z.infer<typeof CitySchema>;
export type getOne = TypeOf<typeof getOne>['params'];