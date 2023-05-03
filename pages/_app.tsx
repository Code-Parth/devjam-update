import '@/styles/globals.css'
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect, safeWallet } from "@thirdweb-dev/react";
import type { AppProps } from 'next/app'

const activeChain = {
  chainId: 3141,
  rpc: ["https://filecoin-hyperspace.chainup.net/rpc/v1"],
  nativeCurrency: {
    decimals: 18,
    name: "Filecoin - Hyperspace testnet",
    symbol: "tFIL",
  },
  shortName: "Filecoin - Hyperspace testnet",
  slug: "Filecoin - Hyperspace testnet",
  testnet: true,
  chain: "Filecoin - Hyperspace testnet",
  name: "Filecoin testnet",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect(), safeWallet()]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}