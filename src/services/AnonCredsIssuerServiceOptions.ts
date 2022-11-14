import {
  AnonCredsCredential,
  AnonCredsCredentialOffer,
  AnonCredsCredentialRequest,
  CredValue,
} from "../models/exchange";
import { AnonCredsSchema } from "../models/vdr";

export interface CreateSchemaOptions {
  name: string;
  version: string;
  attrNames: string[];
}

export interface createCredentialDefinitionOptions {
  tag?: string;
  supportRevocation?: boolean;

  // If schema doesn't include the id, we need to add it as a separate input parameter
  schema: {
    value: AnonCredsSchema;
    id: string;
  };
}

export interface CreateCredentialOfferOptions {
  // TODO: Do we want to follow data model terms (credDefId) or AFJ terms (credentialDefinitionId)?
  // For now went with data model terms
  credDefId: string;
}

export interface CreateCredentialOptions {
  credentialOffer: AnonCredsCredentialOffer;
  credentialRequest: AnonCredsCredentialRequest;
  credentialValues: Record<string, CredValue>;
  revocationRegistryId?: string;
  // TODO: should this just be the tails file instead of a path?
  tailsFilePath?: string;
}

export interface CreateCredentialReturn {
  credential: AnonCredsCredential;
  credentialRevocationId?: string;
}
