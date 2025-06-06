export interface Asset {
    id: string;
    name: string;
    symbol: string;
    logoUrl?:string;
    price: number;
    change1h: number;
    change24h: number;
    change7d: number;
    marketCap: number;
    volume24h: number;
    circulatingSupply: number;
    maxSupply: number | null;
    chartData: number[];
  }
  