import { AnonCredsCredentialOffer } from "../models/exchange";
import { AnonCredsCredentialDefinition, AnonCredsSchema } from "../models/vdr";
import {
  CreateSchemaOptions,
  createCredentialDefinitionOptions,
  CreateCredentialOfferOptions,
  CreateCredentialReturn,
  CreateCredentialOptions,
} from "./AnonCredsIssuerServiceOptions";

export interface AnonCredsIssuerService {
  createSchema(options: CreateSchemaOptions): Promise<AnonCredsSchema>;

  // This should store the private part of the credential definition as in the indy-sdk
  // we don't have access to the private part of the credential definition
  createCredentialDefinition(
    options: createCredentialDefinitionOptions
  ): Promise<AnonCredsCredentialDefinition>;

  createCredentialOffer(
    options: CreateCredentialOfferOptions
  ): Promise<AnonCredsCredentialOffer>;

  createCredential(
    options: CreateCredentialOptions
  ): Promise<CreateCredentialReturn>;
}
