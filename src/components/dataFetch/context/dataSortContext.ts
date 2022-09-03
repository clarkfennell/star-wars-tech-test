import { createContext } from 'react';

export type DataSortType = 'default' | 'massASC' | 'massDEC';

export type SortType = {
  sortType: DataSortType;
  setSortType:(type: DataSortType) => void;
}

const DataSortContext = createContext<SortType>({
  sortType: 'default',
  setSortType:() => {}
})

export default DataSortContext;