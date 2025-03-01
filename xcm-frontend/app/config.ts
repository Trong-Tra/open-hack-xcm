import type { Config } from "@reactive-dot/core";
import { paseo as paseoDescriptor } from "@polkadot-api/descriptors";
import { registerDotConnect } from "dot-connect";
import { InjectedWalletProvider } from "@reactive-dot/core/wallets.js";
import {
  getWsProvider,
  StatusChange,
  WsEvent,
} from "polkadot-api/ws-provider/web";

const websocketStatusHandler = (status: StatusChange) => {
  switch (status.type) {
    case WsEvent.CONNECTING:
      console.log("Connecting to ", status.uri, "... 🔌");
      break;
    case WsEvent.CONNECTED:
      console.log("Connected to ", status.uri, "! ⚡");
      break;
    case WsEvent.ERROR:
      console.log("Errored connecting... 😢");
      break;
    case WsEvent.CLOSE:
      console.log("Closed connection 🚪");
      break;
  }
};

export const config = {
  chains: {
    // "polkadot" here can be any unique string value
    paseo: {
      descriptor: paseoDescriptor,
      provider: getWsProvider(
        [
          "wss://paseo.rpc.amforc.com",
          "wss://paseo-rpc.dwellir.com",
          "wss://rpc.ibp.network/paseo",
          "wss://paseo.dotters.network",
          "wss://pas-rpc.stakeworld.io",
        ],
        websocketStatusHandler,
      ),
    },
  },
  wallets: [new InjectedWalletProvider()],
} satisfies Config;

// Register dot-connect custom elements & configure supported wallets
registerDotConnect({
  wallets: config.wallets,
});
