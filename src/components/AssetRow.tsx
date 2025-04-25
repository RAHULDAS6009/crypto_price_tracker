import { Asset } from "../types/types";
import MiniChart from "./MiniChart";

interface AssetRowProps {
  asset: Asset;
  index: number;
}

const AssetRow: React.FC<AssetRowProps> = ({ asset, index }) => (
  <tr className="text-center border-t">
    <td className="p-2">{index + 1}</td>
    <td className="p-2">
      <img className="w-8 h-8" src={asset.logoUrl} alt="" />
    </td>
    <td className="p-2">{asset.name}</td>
    <td className="p-2">{asset.symbol}</td>
    <td className="p-2">${asset.price.toLocaleString()}</td>
    <td
      className="p-2"
      style={{ color: asset.change1h >= 0 ? "green" : "red" }}
    >
      {asset.change1h}%
    </td>
    <td
      className="p-2"
      style={{ color: asset.change24h >= 0 ? "green" : "red" }}
    >
      {asset.change24h}%
    </td>
    <td
      className="p-2"
      style={{ color: asset.change7d >= 0 ? "green" : "red" }}
    >
      
      {asset.change7d}%
    </td>
    <td className="p-2">${(asset.marketCap / 1e9).toFixed(2)}B</td>
    <td className="p-2">${(asset.volume24h / 1e9).toFixed(2)}B</td>
    <td className="p-2">{asset.circulatingSupply.toLocaleString()}</td>
    <td className="p-2">
      {asset.maxSupply ? asset.maxSupply.toLocaleString() : "∞"}
    </td>
    <td className="p-2">
    <MiniChart data={asset.chartData} trend={asset.change7d} />
    </td>
  </tr>
);

export default AssetRow;
