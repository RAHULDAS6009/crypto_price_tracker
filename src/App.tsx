import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { updateAssets } from './features/crypto/cryptoSlice'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  const assets = useSelector((state: RootState) => state.crypto.assets)

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = assets.map(asset => {
        const priceChange = (Math.random() - 0.5) * 100
        const volumeChange = (Math.random() - 0.5) * 1000000000
        return {
          ...asset,
          price: +(asset.price + priceChange).toFixed(2),
          change1h: +(Math.random() * 2 - 1).toFixed(2),
          change24h: +(Math.random() * 5 - 2.5).toFixed(2),
          change7d: +(Math.random() * 10 - 5).toFixed(2),
          volume24h: +(asset.volume24h + volumeChange).toFixed(2),
        }
      })
      dispatch(updateAssets(updated))
    }, 1500)

    return () => clearInterval(interval)
  }, [dispatch, assets])

  return (
    <div className="p-4 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-6 text-center"> Crypto Price Tracker</h1>
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
            <tr key={asset.id} className="text-center border-t">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">
                <img
                  src={`https://cryptologos.cc/logos/${asset.id}-logo.png`}
                  alt={asset.name}
                  className="w-6 h-6 mx-auto"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </td>
              <td className="p-2">{asset.name}</td>
              <td className="p-2">{asset.symbol}</td>
              <td className="p-2">${asset.price.toLocaleString()}</td>
              <td className="p-2" style={{ color: asset.change1h >= 0 ? 'green' : 'red' }}>
                {asset.change1h}%
              </td>
              <td className="p-2" style={{ color: asset.change24h >= 0 ? 'green' : 'red' }}>
                {asset.change24h}%
              </td>
              <td className="p-2" style={{ color: asset.change7d >= 0 ? 'green' : 'red' }}>
                {asset.change7d}%
              </td>
              <td className="p-2">${(asset.marketCap / 1e9).toFixed(2)}B</td>
              <td className="p-2">${(asset.volume24h / 1e9).toFixed(2)}B</td>
              <td className="p-2">{asset.circulatingSupply.toLocaleString()}</td>
              <td className="p-2">{asset.maxSupply ? asset.maxSupply.toLocaleString() : '∞'}</td>
              <td className="p-2">
                <img
                  src="https://via.placeholder.com/80x30?text=Chart"
                  alt="7D Chart"
                  className="mx-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
