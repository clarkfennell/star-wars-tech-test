import { useEffect, useState, useContext } from 'react';
import DataCard from '../dataCard/dataCard';
import DataSortContext from './context/dataSortContext';

import './styles.scss'

const DataFetch = () => {
  const [apiData, setAPIData] = useState([]);
  const [results, setResults] = useState([]);
  const [sortedResults, setSortedResults] = useState([]);

  const [currentPage, setCurrentPage] = useState('https://swapi.dev/api/people/');
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [pageCount, setPageCount] = useState(1);

  const { sortType, setSortType } = useContext(DataSortContext);

  const fetchData = async (currentPage) => {
    const response = await fetch(currentPage);
    if (!response.ok) {
      throw new Error('Data could not be fetched!');
    } else {
      const data = await response.json();
      return data;
    }
  }

  useEffect(() => {
    fetchData(currentPage)
      .then((res) => {
        setAPIData(res);
        setResults(res.results);
        setSortedResults(res.results);
        setNextPage(res.next);
        setPrevPage(res.previous);
      })
      .catch((e) => {
        console.log(e.message);
      })
  }, [currentPage]);

  useEffect(() => {
    let newSortedResults = results;

    switch (sortType) {
      case 'massDEC':
        newSortedResults = [...results].sort((a, b) => {
          if (a.mass === 'unknown') return -1;
          if (b.mass === 'unknown') return 1;
          return b.mass.replace(/[^0-9]/g, '') - a.mass.replace(/[^0-9]/g, '');
        })
        break;
      case 'massASC':
        newSortedResults = [...results].sort((a, b) => {
          if (a.mass === 'unknown') return 1;
          if (b.mass === 'unknown') return -1;
          return a.mass.replace(/[^0-9]/g, '') - b.mass.replace(/[^0-9]/g, '');
        })
        break;
      default:
        return setSortedResults(newSortedResults)
    }

    return setSortedResults(newSortedResults);
  }, [results, sortType])

  return (
    <div className="container">
      <div className="container_sort">
        <button 
        className="btn btn_sort"
        onClick={() => setSortType('massASC')}
        >Lightest First</button>
        <button 
          className="btn btn_sort"
          onClick={() => setSortType('massDEC')}
        >Heaviest First</button>      
        <button 
          className="btn btn_sort"
          onClick={() => setSortType('default')}
        >Default</button>
      </div>

      <div className='container_results'>
        {sortedResults.map((res, index) => (
          <DataCard key={index} data={res} />
        ))}
      </div>
      
      <div className="container_pagination">
        
        <button
          className="btn btn_pagination"
          onClick={() => {
            setCurrentPage(apiData.previous);
            (pageCount > 1) ? setPageCount(pageCount - 1) : setPageCount(pageCount);
          }}
          disabled={!prevPage}
        >Prev</button>
        <input
          className='input'
          maxLength="2"
          min="1"
          name="pageCount"
          onChange={(e) => {
            setCurrentPage(`https://swapi.dev/api/people/?page=` + e.target.value);
            setPageCount(e.target.value);
          }}
          pattern="/d*"
          type="text"
          value={pageCount}
        />
        <button
          className="btn btn_pagination"
          onClick={() => {
            setCurrentPage(apiData.next);
            (pageCount >= 1) ? setPageCount(pageCount + 1) : setPageCount(pageCount);
          }}
          disabled={!nextPage}
        >Next</button>
      </div>
    </div>
  )
}

export default DataFetch;