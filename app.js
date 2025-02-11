import { Web3ReactProvider } from "@web3-react/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import Web3 from "web3";

function getLibrary(provider) {
  return new Web3(provider);
}

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: "https://mainnet.infura.io/v3/8969bc2c1abd460e93c8182aec0d62cb" },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;
