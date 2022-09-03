const DataCard = ({ data }) => {
  return (
    <div className="data_card">
      <h2>{ data.name }</h2>
      <p>{data.mass}</p>
      <h3>Date of birth: { data.birth_year }</h3>
      {/*    {(data.films.length > 0) ? (
        <>
          <h4>Films:</h4>
          <ul>
            {data.films.map((film) => (
              
            ))}
          </ul>
        </>
            ) : null} */}
      <h5>Stats</h5>
      <ul className="data_card_stats">
        <li>Gender: { data.gender }</li>
        <li>Height: { data.height }</li>
        <li>Mass: { data.mass }</li>
        <li>Hair Colour: { data.hair_color }</li>
        <li>Skin Colour: { data.skin_color }</li>
        <li>Eye Colour: { data.eye_color }</li>
            </ul>
    </div>
  )
}

export default DataCard;