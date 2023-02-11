import {useEffect} from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from "./Context";
import Services from "./Services"
import Contact from "./Contact";

function Home() {

// updatehomepage function call kya
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  );


// props k through data pass krne k lye
// const data = {
//   name: "Farya Jamal",
//   image: image,
// }

//   return (
//     <div>
//       <HeroSection {...data} />

//     </div>
//   )
}

export default Home