import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateSingleAsset } from '../features/crypto/cryptoSlice'

export const useBinanceSocket = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const socket = new WebSocket('wss://stream.binance.com:9443/ws/!miniTicker@arr')


    socket.onmessage = (event) => {
      const tickers = JSON.parse(event.data)
      console.log(tickers)

      const relevantSymbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'XRPUSDT', 'SOLUSDT']

      tickers.forEach((ticker: any) => {
        if (relevantSymbols.includes(ticker.s)) {
          dispatch(updateSingleAsset({
            symbol: ticker.s,
            price: parseFloat(ticker.c),
            volume24h: parseFloat(ticker.v),
          }))
        }
      })
    }

    return () => socket.close()
  }, [dispatch])
}
