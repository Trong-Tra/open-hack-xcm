# Open Hack XCM

## Challenges

### Challenge 1: Interact with PolkadotJS Apps

- Teleport PASEO tokens from Relaychain to Parachain.
- Reserve transfer PASEO tokens from System Parachain - Asset Hub to Parachain.

### Typescript Example code

```ts
/**
 * Reverse transfer from a system parachain to a parachain on the same network.
 * Connected wallet must be on the system parachain.
 *
 * @param para Destination parachain ID.
 * @param amount Amount of tokens sent to the recipient account.
 * @param beneficiary Address of the recipient account on the destination parachain.
 * @returns
 */
export const systemParaToParaPayload = (
  para: number,
  amount: bigint,
  beneficiary: SS58String
) => {
  return {
    // Get the parachain sibling of the system parachain under the relaychain.
    dest: XcmVersionedLocation.V3({
      parents: 1,
      interior: parachainJunction(para),
    }),
    // Get the account on the parachain.
    beneficiary: XcmVersionedLocation.V3({
      parents: 0,
      interior: parachainAccountJunction(beneficiary!),
    }),
    assets: XcmVersionedAssets.V3([
      {
        id: XcmV3MultiassetAssetId.Concrete({
          parents: 0,
          interior: XcmV3Junctions.Here(),
        }),
        fun: XcmV3MultiassetFungibility.Fungible(amount),
      },
    ]),
  };
};

/**
 * Teleport asset from a relaychain to a parachain. Connected wallet must be on the relaychain.
 *
 * @param para Destination parachain ID.
 * @param amount Amount of tokens sent to the recipient account.
 * @param beneficiary Address of the recipient account on the destination parachain.
 * @returns
 */
export const relayToParaPayload = (
  para: number,
  amount: bigint,
  beneficiary: SS58String
) => {
  return {
    // Parachain under the relaychain network.
    dest: XcmVersionedLocation.V3({
      parents: 0,
      interior: parachainJunction(para),
    }),
    // Account on the parachain.
    beneficiary: XcmVersionedLocation.V3({
      parents: 0,
      interior: parachainAccountJunction(beneficiary!),
    }),
    // Native asset on the relaychain.
    assets: XcmVersionedAssets.V3([
      {
        id: XcmV3MultiassetAssetId.Concrete({
          parents: 0,
          interior: XcmV3Junctions.Here(),
        }),
        fun: XcmV3MultiassetFungibility.Fungible(amount),
      },
    ]),
  };
};
```

## Tips & tricks
### Convert multi-locations to human readable format (URLS)

Visit the site https://playground.paraspell.xyz/xcm-analyser

Below is the example of a multi-location in JSON format:

```json
{
    "parents": 1,
    "interior": {
        "X1": {
            "Parachain": 1000
        }
    }
}
```

Copy the JSON data and paste it into the Playground to see the human-readable format.

```
"../Parachain(1000)"
```
