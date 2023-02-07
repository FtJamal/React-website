import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from "./Context";


function About() {

  const { updateAboutPage } = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, []);

  return (
    <div>
      <HeroSection />
    </div>
  )

  // props k through data pass krne k lye

  // const data = {
  //   name: "Farya " ,
  //   image : image
  // }

  //   return (
  //     <div>
  //       <HeroSection {...data} />
  //     </div>
  //   )
}

export default About;