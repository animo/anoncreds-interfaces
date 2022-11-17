# AnonCreds Interfaces

This repository contains the interfaces for ledger agnostic AnonCreds in Aries Framework JavaScript. The interfaces are the foundation for the a new `@aries-framework/anoncreds` package, that will provide a module to work with AnonCreds in Aries Framework JavaScript. It doesn't add an actual implementation of AnonCreds, it just glues an AnonCreds implementation (e.g. indy-sdk or anoncreds-rs) with the different AnonCreds registries (IndySdkAnonCredsRegistry, IndyVdrAnonCredsRegistry, CheqdSdkAnonCredsRegistry, etc...).

The AnonCreds module will serve as an optional addon module to Aries Framework JavaScript. We can start by creating the AnonCreds module and extracting it from core with the indy-sdk, and later add the shared components in. The ledger module / api will be deprecated.

## Example

An example to show how I see the AnonCreds module being used in Aries Framework JavaScript:

```typescript
import { Agent, V1CredentialService, V2CredentialService } from '@aries-framework/core'
import { agentDependencies } from '@aries-framework/node'
import { AnonCredsModule, AnonCredsCredentialFormat } from '@aries-framework/anoncreds'

import { IndySdkAnonCredsIssuerService, IndySdkAnonCredsHolderService, IndySdkAnonCredsVerifierService } from '@aries-framework/indy-sdk'

// NOTE: note sure if we want to bundle everything related to the cheqd sdk in one package as it can get bloated quite quickly (as it then needs to depend on anoncreds package). Can also be `@aries-framework/anoncreds-cheqd-sdk`
import { CheqdSdkAnonCredsRegistry } from '@aries-framework/cheqd-sdk'


const agent = new Agent({
  config: {},
  modules: {
    // TODO: would be nice if we don't have to pass all three services individually.
    // NOTE: it would also be possible to not have to register this, but create a separate IndySdkAnonCredsModule that registers the services internally.
    anoncreds: new AnonCredsModule({
      anonCredsIssuerService: IndySdkAnonCredsIssuerService,
      anonCredsHolderService: IndySdkAnonCredsHolderService,
      anonCredsVerifierService: IndySdkAnonCredsVerifierService,

      // Register the different registries (ledgers) where we can resolve / register anoncreds objects from/to
      AnonCredsRegistries: [IndySdkAnonCredsRegistry, CheqdSdkAnonCredsRegistry],
    }),

    // TODO: still need to figure out from which packages these services come
    credentials: new CredentialsModule({
      credentialServices: [V1CredentialService, V2CredentialService],
      credentialFormats: [AnonCredsCredentialFormat, JsonLdCredentialFormat, IndyCredentialFormat],
    }),
  },
  }
  dependencies: agentDependencies,
})
```

## TODO

- [ ] Figure out what to do with the master secret (id).
  - Currently with the Indy SDK we can only provide the master secret id (for which the master secret is stored in the wallet).
- [ ] All interfaces should have the agentContext added as a first parameter to each method
