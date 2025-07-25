import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      chainName: "arbitrumsepolia",
      standard: TokenStandard.EvmHypCollateralFiat,
      decimals: 6,
      symbol: "AUSD",
      name: "Agora Dollar",
      addressOrDenom: "0xE90F548EAd6B9d739af6Dfd3e9220ad31A88e888",
      collateralAddressOrDenom: "0x4dcb7e68DF7b747d83F9EBB915b6dB81061A56A8",
      connections: [
        { token: "ethereum|sepolia|0x8E5A2fB6666fd231b79aA769Ac2ECb6346046dc3" },
      ],
    },
    {
      chainName: "sepolia",
      standard: TokenStandard.EvmHypCollateralFiat,
      decimals: 6,
      symbol: "AUSD",
      name: "Agora Dollar",
      addressOrDenom: "0x8E5A2fB6666fd231b79aA769Ac2ECb6346046dc3",
      collateralAddressOrDenom: "0x5dD9c029A9aD4D841b3B5d27bef11AcB78ddEAC7",
      connections: [
        { token: "ethereum|arbitrumsepolia|0xE90F548EAd6B9d739af6Dfd3e9220ad31A88e888" },
      ],
    },
  ],
  options: {},
};
