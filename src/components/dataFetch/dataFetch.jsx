import { useEffect, useState } from 'react';
import DataCard from '../dataCard/dataCard';

const DataFetch = () => {
  const [apiData, setAPIData] = useState([]);
  const [currentPage, setCurrentPage] = useState('https://swapi.dev/api/people/');
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [results, setResults] = useState([]);

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

  console.log(apiData);

  console.log(results);
  
  return (
    <>
    {results.map((res) => (
      <DataCard data={res} />
    ))}
      <button
        className="btn btn-primary"
        onClick={() => setCurrentPage(apiData.next)}
        disabled={!nextPage}
      >Next</button>
      <button
        className="btn btn-primary"
        onClick={() => setCurrentPage(apiData.previous)}
        disabled={!prevPage}
      >Prev</button>
    </>
  )
}

export default DataFetch;