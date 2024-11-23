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
  address: '0x52FfF1bFDF071A43F79A3Eb45739107Fd000DbA8',
  symbol: 'CAPY',
  decimals: 6,
  image: './capy-logo.svg',
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