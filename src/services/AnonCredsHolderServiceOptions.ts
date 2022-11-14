import {
  AnonCredsCredential,
  AnonCredsCredentialOffer,
  AnonCredsCredentialRequest,
  AnonCredsProofRequest,
} from "../models/exchange";
import {
  AnonCredsCredentialDefinition,
  AnonCredsRevocationList,
  AnonCredsRevocationRegistryDefinition,
  AnonCredsSchema,
} from "../models/vdr";

export interface CreateProofOptions {
  proofRequest: AnonCredsProofRequest;
  requestedCredentials: "TODO";
  schemas: {
    [schemaId: string]: AnonCredsSchema;
  };
  credentialDefinitions: {
    [credentialDefinitionId: string]: AnonCredsCredentialDefinition;
  };
  revocationStates: {
    [revocationRegistryDefinitionId: string]: {
      definition: AnonCredsRevocationRegistryDefinition;
      revocationLists: {
        [timestamp: string]: AnonCredsRevocationList;
      };
    };
  };
}

export interface StoreCredentialOptions {
  // TODO: what is in credential request metadata?
  credentialRequestMetadata: Record<string, unknown>;
  credential: AnonCredsCredential;
  credentialDefinition: AnonCredsCredentialDefinition;
  credentialId?: string;
  revocationRegistryDefinition?: AnonCredsRevocationRegistryDefinition;
}

export interface GetCredentialOptions {
  credentialId: string;
}

export interface CreateCredentialRequestOptions {
  // TODO: Why is this needed? It is just used as context in Ursa, can be any string. Should we remove it?
  // Should we not make it did related? (related to comment in AnonCredsCredentialRequest)
  holderDid: string;
  credentialOffer: AnonCredsCredentialOffer;
  credentialDefinition: AnonCredsCredentialDefinition;
}

export interface CreateCredentialRequestReturn {
  credentialRequest: AnonCredsCredentialRequest;
  credentialRequestMetadata: Record<string, unknown>;
}
