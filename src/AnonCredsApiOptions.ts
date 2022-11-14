import { AnonCredsSchema } from "./models/vdr";

// FIXME: we should update the name in the AnonCreds resource interface to include extra wording in the name to prevent name clashes.
export interface RegisterSchemaOptions {
  schema: AnonCredsSchema;

  // Identifier of the identifier that will create the schema. In most cases a did, but can also be an URI.
  //   TODO: do we want an issuerId? Or should we add such properties to an options object that is different per method
  // more like the did registration interface?
  issuerId: string;
}

export interface RegisterSchemaReturn {
  schemaId: string;
  schema: AnonCredsSchema;
}
