import { Asset } from "../types/types";

interface AssetRowProps {
  asset: Asset;
  index: number;
}

const AssetRow: React.FC<AssetRowProps> = ({ asset, index }) => (
  <tr className="text-center border-t">
    <td className="p-2">{index + 1}</td>
    <td className="p-2">
      <img
        src={`https://cryptologos.cc/logos/${asset.id}-logo.png`}
        alt={asset.name}
        className="w-6 h-6 mx-auto"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    </td>
    <td className="p-2">{asset.name}</td>
    <td className="p-2">{asset.symbol}</td>
    <td className="p-2">${asset.price.toLocaleString()}</td>
    <td className="p-2" style={{ color: asset.change1h >= 0 ? "green" : "red" }}>
      {asset.change1h}%
    </td>
    <td className="p-2" style={{ color: asset.change24h >= 0 ? "green" : "red" }}>
      {asset.change24h}%
    </td>
    <td className="p-2" style={{ color: asset.change7d >= 0 ? "green" : "red" }}>
      {asset.change7d}%
    </td>
    <td className="p-2">${(asset.marketCap / 1e9).toFixed(2)}B</td>
    <td className="p-2">${(asset.volume24h / 1e9).toFixed(2)}B</td>
    <td className="p-2">{asset.circulatingSupply.toLocaleString()}</td>
    <td className="p-2">{asset.maxSupply ? asset.maxSupply.toLocaleString() : "∞"}</td>
    <td className="p-2">
      <img src="https://via.placeholder.com/80x30?text=Chart" alt="7D Chart" className="mx-auto" />
    </td>
  </tr>
);

export default AssetRow;
