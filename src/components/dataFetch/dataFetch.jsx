import { useEffect, useState, useContext } from 'react';
import DataCard from '../dataCard/dataCard';
import DataSortContext from './context/dataSortContext';

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
        newSortedResults = [...results].sort((a, b) => { return b.mass - a.mass })
        break;
      case 'massASC':
        newSortedResults = [...results].sort((a, b) => { return a.mass - b.mass })
        break;
      default:
        return setSortedResults(newSortedResults)
    }

    return setSortedResults(newSortedResults);
  }, [results, sortType])

  return (
    <div className='container'>
      {sortedResults.map((res, index) => (
        <DataCard key={index} data={res} />
      ))}
      
      <div className="container_pagination">
        <button
          className="btn btn_pagination"
          onClick={() => {
            setCurrentPage(apiData.next);
            (pageCount >= 1) ? setPageCount(pageCount + 1) : setPageCount(pageCount);
          }}
          disabled={!nextPage}
        >Next</button>
        <button
          className="btn btn_pagination"
          onClick={() => {
            setCurrentPage(apiData.previous);
            (pageCount > 1) ? setPageCount(pageCount - 1) : setPageCount(pageCount);
          }}
          disabled={!prevPage}
        >Prev</button>

        <input 
          type="number"
          name="pageCount"
          placeholder={pageCount}
          min="1"
          onChange={(e) => setCurrentPage(`https://swapi.dev/api/people/?page=` + e.target.value)}
        />
      </div>

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
      
    </div>
  )
}

export default DataFetch;