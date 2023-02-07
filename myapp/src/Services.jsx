import React from 'react'
import Servicecard from './Servicecard'
import styled from 'styled-components';
import Service1 from "./assets/course1.jpg"
import Service2 from "./assets/course2.jpg"
import Service3 from "./assets/course3.jpg"
import Service4 from "./assets/course4.jpg"
import Service5 from "./assets/course5.jpg";


function Services() {
  return (
    <div>
      <h2 className='common-heading' style={{paddingTop:25}}>
        Our Services
      </h2>

      <Wrap>
        <Servicecard
          image={Service1}
          description="HTML and CSS course"

        />
        <Servicecard
          image={Service2}
          description="HTML , CSS , JS course"

        />

        <Servicecard
          image={Service3}
          description="Javascript complete course"

        />
        <Servicecard
          image={Service4}
          description="Reactjs course"

        />
        <Servicecard
          image={Service5}
          description="MERN Stack course"

        />
      </Wrap>
    </div>
  )
}

const Wrap = styled.div`
// padding: rem 0;

display : flex;
// flex-direction:column;
justify-content : center;
flex-wrap : wrap;
gap : 50px;
`




export default Services