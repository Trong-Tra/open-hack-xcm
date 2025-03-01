import {
  XcmV3Junction,
  XcmV3Junctions,
  XcmV3MultiassetAssetId,
  XcmV3MultiassetFungibility,
  XcmVersionedAssets,
  XcmVersionedLocation,
} from "@polkadot-api/descriptors";
import { AccountId, Binary, SS58String } from "polkadot-api";

export const parachainJunction = (chainId: number) =>
  XcmV3Junctions.X1(XcmV3Junction.Parachain(chainId));

const parachainAccountJunction = (beneficiary: SS58String) =>
  XcmV3Junctions.X1(
    XcmV3Junction.AccountId32({
      network: undefined,
      id: Binary.fromBytes(AccountId().enc(beneficiary)),
    }),
  );

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
  beneficiary: SS58String,
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
  beneficiary: SS58String,
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
