// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CAUSES } = initSchema(schema);

export {
  CAUSES
};