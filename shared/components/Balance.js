// components/Balance.js

"use client"; // Client component

import { useBalance } from "@/components/context/BalanceContext";



export default function Balance() {
  const { balance } = useBalance(); // Only runs on client
  return (
    <>{balance}</>
  );
}
