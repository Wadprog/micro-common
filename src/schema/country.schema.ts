import { z, object, string, TypeOf } from 'zod';

export const CountrySchema = z.object({
    id: z.number(),
    name: z.string(),
    initials: string(),
    flag: z.string(),
});


export const getOneCountrySchema = object({
    params: object({
        id: z
            .number({ required_error: 'Please provide an id' })
    }),
});



export type CountryInterface = z.infer<typeof CountrySchema>;
export type getOneCountryInput = TypeOf<typeof getOneCountrySchema>['params'];