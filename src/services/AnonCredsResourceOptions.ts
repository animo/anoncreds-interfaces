import {
  AnonCredsCredentialDefinition,
  AnonCredsRevocationList,
  AnonCredsRevocationRegistryDefinition,
  AnonCredsSchema,
} from "../models/vdr";

export interface RegisterSchemaOptions {
  schema: AnonCredsSchema;
}

export interface RegisterSchemaReturn {
  schemaId: string;
}

export interface RegisterCredentialDefinitionOptions {
  credentialDefinition: AnonCredsCredentialDefinition;
}

export interface RegisterCredentialDefinitionReturn {
  credentialDefinitionId: string;
}

export interface RegisterRevocationRegistryDefinitionOptions {
  revocationRegistryDefinition: AnonCredsRevocationRegistryDefinition;
}

export interface RegisterRevocationRegistryDefinitionReturn {
  revocationRegistryDefinitionId: string;
}

export interface RegisterRevocationListOptions {
  // Timestamp is often calculated by the ledger, otherwise method should just take current time
  // Return type does include the timestamp.
  revocationList: Omit<AnonCredsRevocationList, "timestamp">;
}

export interface RegisterRevocationListReturn {
  timestamp: string;
}
