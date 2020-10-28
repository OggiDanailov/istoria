import React, {useState} from 'react'
import Questions from '../components/questions/Questions'
import Map from "../components/Map"
  

const GeneralPage = () => {
  const [isHidden, setIsHidden] = useState(false)
  const array = ["Mesopotamia", 'Egypt', "China", "India"]
  return (
    <>
      <Map mainCategory="Ancient World" subCategory={array} onClick={() => setIsHidden(!isHidden)} />    
    {
      isHidden && (<Questions />)
    }
      
    </>
  )
}

export default GeneralPage
