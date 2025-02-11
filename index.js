import { useWeb3React } from "@web3-react/core";
import { walletconnect } from "./_app";

export default function Home() {
  const { activate, deactivate, active, account } = useWeb3React();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to G Network</h1>
      {active ? (
        <div>
          <p>Connected as: {account}</p>
          <button className="p-2 bg-red-500 text-white" onClick={() => deactivate()}>
            Disconnect
          </button>
        </div>
      ) : (
        <button className="p-2 bg-blue-500 text-white" onClick={() => activate(walletconnect)}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}
