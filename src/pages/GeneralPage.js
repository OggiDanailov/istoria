import React, {useState} from 'react'
import Questions from '../components/questions/Questions'
import Map from "../components/Map"
  

const GeneralPage = () => {
  const [isHidden, setIsHidden] = useState(false)
  const array = ["Medieval European", 'Egypt', "China", "India"]

  const whatever = () => {
    setIsHidden(!isHidden)
  }

  return (
    <>    
    {!isHidden ? 
    <Map
     mainCategory="European History"
    subCategory={array}
    onclick={whatever} />    
      : <Questions />
    }
      {/* <Questions /> */}
    </>
  )
}

export default GeneralPage
