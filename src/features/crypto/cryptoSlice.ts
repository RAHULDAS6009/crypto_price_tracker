import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Asset } from "../../types/types";

interface CryptoState {
  assets: Asset[];
}

const initialState: CryptoState = {
  assets: [
    {
      id: "btc",
      name: "Bitcoin",
      symbol: "BTC",
      logoUrl: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
      price: 30000,
      change1h: 0.5,
      change24h: -2.1,
      change7d: 4.8,
      marketCap: 580000000000,
      volume24h: 35000000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
      chartData: [65400, 65900, 66100, 65700, 66500, 67100, 66800],
    },
    {
      id: "eth",
      name: "Ethereum",
      symbol: "ETH",
      logoUrl:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
      price: 2000,
      change1h: -0.2,
      change24h: 1.5,
      change7d: 3.1,
      marketCap: 240000000000,
      volume24h: 15000000000,
      circulatingSupply: 120000000,
      maxSupply: 0,
      chartData: [3280, 3310, 3290, 3250, 3240, 3260, 3245],
    },
    {
      id: "usdt",
      name: "Tether",
      symbol: "USDT",
      logoUrl: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
      price: 1,
      change1h: 0.0,
      change24h: 0.0,
      change7d: 0.0,
      marketCap: 83000000000,
      volume24h: 55000000000,
      circulatingSupply: 83000000000,
      maxSupply: 0,
      chartData: [1.0, 1.0, 1.0, 1.0, 1.01, 1.0, 1.0],
    },
    {
      id: "bnb",
      name: "BNB",
      symbol: "BNB",
      logoUrl:
        "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
      price: 350,
      change1h: 0.3,
      change24h: -0.8,
      change7d: 2.5,
      marketCap: 54000000000,
      volume24h: 1000000000,
      circulatingSupply: 155000000,
      maxSupply: 200000000,
      chartData: [580, 578, 574, 570, 571, 575, 573],
    },
    {
      id: "xrp",
      name: "XRP",
      symbol: "XRP",
      logoUrl:
        "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
      price: 0.6,
      change1h: -0.1,
      change24h: 0.4,
      change7d: -1.2,
      marketCap: 32000000000,
      volume24h: 2000000000,
      circulatingSupply: 53000000000,
      maxSupply: 100000000000,
      chartData: [2.15, 2.18, 2.2, 2.19, 2.21, 2.22, 2.22],
    },
  ],
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateAssets(state, action: PayloadAction<Asset[]>) {
      state.assets = action.payload;
    },
    updateSingleAsset: (state, action) => {
      const { symbol, price, volume24h } = action.payload;
      const asset = state.assets.find((a) => a.symbol === symbol.slice(0, -4));
      if (asset) {
        asset.price = price;
        asset.volume24h = volume24h;
      }
    },
  },
});

export const { updateAssets, updateSingleAsset } = cryptoSlice.actions;
export default cryptoSlice.reducer;
