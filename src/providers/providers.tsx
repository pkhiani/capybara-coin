import { OnchainKitProvider } from '@coinbase/onchainkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { base } from 'wagmi/chains';
import { type ReactNode, useState } from 'react';
import { type State, WagmiProvider } from 'wagmi';
import { getConfig } from './wagmi';

export function Providers({ children, initialState }: {
  children: ReactNode;
  initialState?: State;
}) {
  const [config] = useState(() => getConfig());
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider apiKey={import.meta.env.VITE_ONCHAINKIT_API_KEY} chain={base}>
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}