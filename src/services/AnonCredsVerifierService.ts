import { AnonCredsProof } from "../models/exchange";

import { VerifyProofOptions } from "./AnonCredsVerifierServiceOptions";

export interface AnonCredsHolderService {
  // TODO: do we want to extend the return type with more info besides a boolean.
  // If the value is false it would be nice to have some extra contexts about why it failed
  // TODO: this is missing the revocation state input value. In the current implementation in AFJ this info is fetched
  // in the IndyVerifierService. However, as the verifier service is going to be generic, we probably want to add the
  // revocation (accumulator) state as an input value to the verifyProof method. Another approach is the AnonCredsVerfiierService
  // calling the AnonCreds resource service to retrieve the revocation state.
  verifyProof(options: VerifyProofOptions): Promise<boolean>;
}
