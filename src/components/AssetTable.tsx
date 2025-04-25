import AssetRow from "./AssetRow";
import { Asset } from "../types/types";

interface AssetTableProps {
  assets: Asset[];
}

const AssetTable: React.FC<AssetTableProps> = ({ assets }) => (
  <table className="min-w-[1000px] w-full table-auto border-collapse">
    <thead className="bg-gray-100">
      <tr>
        <th className="p-2">#</th>
        <th className="p-2">Logo</th>
        <th className="p-2">Name</th>
        <th className="p-2">Symbol</th>
        <th className="p-2">Price</th>
        <th className="p-2">1h %</th>
        <th className="p-2">24h %</th>
        <th className="p-2">7d %</th>
        <th className="p-2">Market Cap</th>
        <th className="p-2">24h Volume</th>
        <th className="p-2">Circulating Supply</th>
        <th className="p-2">Max Supply</th>
        <th className="p-2">7D Chart</th>
      </tr>
    </thead>
    <tbody>
      {assets.map((asset, index) => (
        <AssetRow key={asset.id} asset={asset} index={index} />
      ))}
    </tbody>
  </table>
);

export default AssetTable;
