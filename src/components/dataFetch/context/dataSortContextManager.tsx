import { ReactNode, useState } from 'react';
import DataSortContext, { DataSortType } from './dataSortContext';

interface Props {
  children?: ReactNode
}

const DataSortManager = ({ children }: Props) => {
  const [sortType, setSortType] = useState<DataSortType>('default');
  return (
    <DataSortContext.Provider value={{sortType, setSortType}}>
      { children }
    </DataSortContext.Provider>
  )
}

export default DataSortManager;