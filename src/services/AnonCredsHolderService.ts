import { AnonCredsProof } from "../models/exchange";

import {
  CreateCredentialRequestOptions,
  CreateCredentialRequestReturn,
  CreateProofOptions,
  GetCredentialOptions,
  StoreCredentialOptions,
} from "./AnonCredsHolderServiceOptions";

export interface AnonCredsHolderService {
  createProof(options: CreateProofOptions): Promise<AnonCredsProof>;
  storeCredential(options: StoreCredentialOptions): Promise<void>;

  // TODO: indy has different return types for the credential
  getCredential(options: GetCredentialOptions): Promise<"TODO">;

  createCredentialRequest(
    options: CreateCredentialRequestOptions
  ): Promise<CreateCredentialRequestReturn>;

  deleteCredential(credentialId: string): Promise<void>;
  getCredentialsForProofRequest(options: "TODO"): Promise<"TODO">;
}
