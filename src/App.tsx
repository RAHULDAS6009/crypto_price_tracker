import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { updateAssets } from "./features/crypto/cryptoSlice";
import { useEffect, useMemo, useState } from "react";
import { useBinanceSocket } from "./hooks/useBinanceSocket";
import AssetTable from "./components/AssetTable";
import FilterButtons from "./components/FilterButtons";

function App() {
  useBinanceSocket();
  const dispatch = useDispatch();
  const assets = useSelector((state: RootState) => state.crypto.assets);
  const [filter, setFilter] = useState<string>();

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = assets.map((asset) => {
        const priceChange = (Math.random() - 0.5) * 100;
        const volumeChange = (Math.random() - 0.5) * 1e9;
        return {
          ...asset,
          price: +(asset.price + priceChange).toFixed(2),
          change1h: +(Math.random() * 2 - 1).toFixed(2),
          change24h: +(Math.random() * 5 - 2.5).toFixed(2),
          change7d: +(Math.random() * 10 - 5).toFixed(2),
          volume24h: +(asset.volume24h + volumeChange).toFixed(2),
        };
      });
      dispatch(updateAssets(updated));
    }, 1500);
    return () => clearInterval(interval);
  }, [dispatch, assets]);

  const filteredAssets = useMemo(() => {
    if (filter === "topGainers") {
      return [...assets].sort((a, b) => b.change24h - a.change24h).slice(0, 5);
    }
    if (filter === "topVolume") {
      return [...assets].sort((a, b) => b.volume24h - a.volume24h).slice(0, 5);
    }
    return assets;
  }, [filter, assets]);

  return (
    <div className="p-4 overflow-x-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Crypto Price Tracker</h1>
      <FilterButtons onSelect={setFilter} />
      <AssetTable assets={filteredAssets} />
    </div>
  );
}

export default App;
