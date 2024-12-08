import { AnyZodObject } from 'zod';
import { BadRequest } from '@feathersjs/errors';
import { HookContext } from '@feathersjs/feathers';

export const validateParams = (schema: AnyZodObject) => (context: HookContext): HookContext => {
  try {
    schema.parse({
      body: context.data,
      query: context.params.query,
      params: context.path,
    });
    return context;
  } catch (error: any) {
    throw new BadRequest('Invalid Parameters', error);
  }
};


