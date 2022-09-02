import { useEffect, useState } from 'react';

const App = () => {
  const [people, setPeople] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    if (!response.ok) {
      throw new Error('Data could not be fetched!');
    } else {
      return response.json();
    }
  }

  useEffect(() => {
    fetchData()
      .then((res) => {
        setPeople(res)
      })
      .catch((e) => {
        console.log(e.message);
      })
  }, [])

  console.log(people);

  return (
    <div className="App">
      {people.results.map((person) => (
        <p>{ person.name }</p>
      ))}
    </div>
  );
}

export default App;
