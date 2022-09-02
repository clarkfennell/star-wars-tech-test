import { useEffect, useState } from 'react';
import DataCard from '../dataCard/dataCard';

const DataFetch = () => {
  const [apiData, setAPIData] = useState([]);
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState('https://swapi.dev/api/people/');
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [pageCount, setPageCount] = useState(1);

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
        setNextPage(res.next);
        setPrevPage(res.previous);
      })
      .catch((e) => {
        console.log(e.message);
      })
  }, [currentPage]);
  
  return (
    <>
    {results.map((res, index) => (
      <DataCard key={index} data={res} />
    ))}
      <button
        className="btn btn_primary"
        onClick={() => {
          setCurrentPage(apiData.next);
          setPageCount(pageCount + 1);
        }}
        disabled={!nextPage}
      >Next</button>
      <button
        className="btn btn_primary"
        onClick={() => {
          setCurrentPage(apiData.previous);
          setPageCount(pageCount - 1);
        }}
        disabled={!prevPage}
      >Prev</button>
      <button className="btn btn_secondary">Sort by Mass</button>
      <button className="btn btn_secondary">Sort By Default</button>
      <p>{pageCount}</p>
    </>
  )
}

export default DataFetch;