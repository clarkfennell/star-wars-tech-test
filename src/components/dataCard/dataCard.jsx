import './styles.scss';

const DataCard = ({ data }) => {
  return (
    <div className="data_card">
      <h2>{ data.name }</h2>
      <ul className="data_card_stats">
        <li>Date of birth: { data.birth_year }</li>
        <li>Gender: { data.gender }</li>
        <li>Height: { data.height }cm</li>
        <li>Mass: { data.mass }kg</li>
        <li>Hair Colour: { data.hair_color }</li>
        <li>Skin Colour: { data.skin_color }</li>
        <li>Eye Colour: { data.eye_color }</li>
      </ul>
    </div>
  )
}

export default DataCard;