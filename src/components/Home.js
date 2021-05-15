import React from 'react'
import styled from 'styled-components';
import Section from './Section';


function Home() {
  return (
    <Container>
      <Section 
          title='Model S'
          description= 'Order Online for Touchless Delivery'
          backgroundImg='model-s.jpg'
          LeftBtnText='Couctom Order'
          rightBtnText='Existing inventory'
      />
      <Section 
          title='Model Y'
          description= 'Order Online for Touchless Delivery'
          backgroundImg='model-y.jpg'
          LeftBtnText='Coustom Order'
          rightBtnText='Existing inventory'
      />
      <Section 
          title='Model 3'
          description= 'Order Online for Touchless Delivery'
          backgroundImg='model-3.jpg'
          LeftBtnText='Coustom Order'
          rightBtnText='Existing inventory'
      />
      <Section 
          title='Model X'
          description= 'Order Online for Touchless Delivery'
          backgroundImg='model-x.jpg'
          LeftBtnText='Coustom Order'
          rightBtnText='Existing inventory'
      />
      <Section 
          title='Lower Coast Solar Panels in Amireca'
          description= 'Money-back guarantee'
          backgroundImg='solar-panel.jpg'
          LeftBtnText='Order now'
          rightBtnText='Learn more'
      />
      <Section 
          title='Solar for New Roofs'
          description= 'Solar Roof Costs Less Than a New Roof Pluse Solar Panels'
          backgroundImg='solar-roof.jpg'
          LeftBtnText='Order now'
          rightBtnText='Learn more'
      />
      <Section 
          title='Accessories'
          description= ''
          backgroundImg='accessories.jpg'
          LeftBtnText='Shop now'
    
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
