import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
	return (
		<Container>
			<Section
				title="R1"
				description="Fully Autonomous Robotic Sweeper"
				backgroundImg="render1.png"
				leftBtnText="Buy"
				rightBtnText="Rent"


			/>
			<Section
				title="Resilient R2"
				description="Electric Push Sweeper"
				backgroundImg="render2.png"
				leftBtnText="Buy"
			/>
			<Section
				title="R3"
				description="Manual Push Sweeper"
				backgroundImg="render3.png"
				leftBtnText="Buy"
			/>
			<Section
				title="Accessories"
				description=""
				backgroundImg="parts.png"
				leftBtnText="Shop now"
			>
			</Section>
		</Container>
	)
}

export default Home

const Container = styled.div`
	height: 100vh;	
`