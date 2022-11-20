import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Section.css'
import Modal from '../variables/Modal';
import Nature from '../variables/Nature';
import Planets from '../variables/Planets';
import Space from '../variables/Space';
const Section = () => {

  const [text,setText] = useState('first-con')

  const [isModalActive,setIsModalActive] = useState(false)

  const isActive = () => {
    setIsModalActive(!isModalActive)
  }


  return (
  <div className='section'>

    <div>
      <div className='change-box'>
            <button className='state-change-btn' onClick={() => setText('first-con')}>Planets</button>
            <button className='state-change-btn' onClick={() => setText('second-con')}>Nature</button>
            <button className='state-change-btn' onClick={() => setText('third-con')}>Space</button>
      </div>

      <div>
          {text === 'first-con' && <Planets/>}
          {text === 'second-con'&& <Nature/> }
          {text === 'third-con' && <Space/>}

        <div className="button">
          <Link onClick={isActive} to='/' className='section-button'>Search</Link>
        </div>

        {isModalActive && <Modal isActive={isActive}/>}

      </div>
      </div>

  </div>
  );
};

export default Section;
