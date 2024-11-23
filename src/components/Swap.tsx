import { SwapDefault } from '@coinbase/onchainkit/swap';
import type { Token } from '@coinbase/onchainkit/token';

const eth: Token = {
  name: 'ETH',
  address: '',
  symbol: 'ETH',
  decimals: 18,
  image: 'https://wallet-api-production.s3.amazonaws.com/uploads/tokens/eth_288.png',
  chainId: 8453,
};

const capy: Token = {
  name: 'CAPY',
  address: '0x52fff1bfdf071a43f79a3eb45739107fd000dba8',
  symbol: 'CAPY',
  decimals: 6,
  image: 'https://raw.githubusercontent.com/pkhiani/capybara-coin/de6c164d2b72eb0fa87a820b47805e8591f288d6/capy-logo.svg',
  chainId: 8453,
};

export default function Swap() {
  return (
    <div className="max-w-md mx-auto">
      <SwapDefault
        from={[eth]}
        to={[capy]}
      />
    </div>
  );
}