import {
  RegisterSchemaOptions,
  RegisterSchemaReturn,
} from "./AnonCredsApiOptions";
import { AnonCredsSchema } from "./models/vdr";

export interface AnonCredsApi {
  getSchema(schemaId: string): Promise<AnonCredsSchema>;
  register(options: RegisterSchemaOptions): Promise<RegisterSchemaReturn>;

  // TODO: getCredentialDefinition
  // TODO: registerCredentialDefinition

  // NOTE: Do we want to expose these methods? Probably, but it should also just auto trigger when supportRevocation is set to true in the credential definition.
  // TODO: getRevocationRegistryDefinition
  // TODO: registerRevocationRegistryDefinition

  // NOTE: Naming TDB
  // NOTE: Do we want to expose these methods? Probably, but it should also just auto trigger when credentials are revoked
  // NOTE: How will users revoke credentials? This hasn't been supported in the past, but is an important feature going forward that we need to implement.
  // TODO: getRevocationList
  // TODO: registerRevocationList
}
