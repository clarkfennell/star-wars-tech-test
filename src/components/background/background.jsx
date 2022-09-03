import './styles.scss';

const Background = ({ children }) => {
  return (
    <div className='background'>
      <div className='stars1'></div>
      <div className='stars2'></div>
      <div className='stars3'></div>
      {children}
    </div>
  )
}

export default Background;