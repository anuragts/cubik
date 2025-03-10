"use client";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { SDK } from "cubik-main";
import { web3 } from "@coral-xyz/anchor";
import { env } from "@/env.mjs";

export * from "@coral-xyz/anchor";

const RPC_URL =
  env.NEXT_PUBLIC_SOLANA_NETWORK === "mainnet-beta"
    ? env.NEXT_PUBLIC_RPC_MAINNET_URL
    : env.NEXT_PUBLIC_RPC_DEVNET_URL;

export const connection = new web3.Connection(RPC_URL, "confirmed");

export const getSdk = (
  wallet: NodeWallet,
  customConnection: web3.Connection = connection
) => {
  const sdk = new SDK(
    wallet,
    customConnection,
    {
      commitment: "confirmed",
    },
    env.NEXT_PUBLIC_SOLANA_NETWORK === "mainnet-beta"
      ? "mainnet-beta"
      : "devnet"
  );

  return sdk;
};
