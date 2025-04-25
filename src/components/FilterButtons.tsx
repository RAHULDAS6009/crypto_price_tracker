interface FilterButtonsProps {
    onSelect: (filter: string) => void;
  }
  
  const FilterButtons: React.FC<FilterButtonsProps> = ({ onSelect }) => {
    return (
      <div className="flex gap-4 mb-4 justify-center">
        <button onClick={() => onSelect("topGainers")} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Top Gainers
        </button>
        <button onClick={() => onSelect("topVolume")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Top Volume
        </button>
      </div>
    );
  };
  
  export default FilterButtons;
  