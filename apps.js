const ADMIN_WALLET = "0x6733bF2826B7926128536188D0EEc51393249f50"; // Replace with your wallet

export default function AdminPanel() {
  const { account } = useWeb3React();

  if (account !== ADMIN_WALLET) {
    return <p>Access Denied</p>;
  }

  return <p>Welcome Admin</p>;
}
