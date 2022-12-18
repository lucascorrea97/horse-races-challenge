// Libraries
import React, { useEffect } from 'react'

// Components
import HorseRaces from '../../components/horse-races/horse-races'
import Box from '../../components/box/box'

// Contexts
import { useHorseRacesContext } from '../../contexts/horse-races.context'

// Styles
import styles from './horse-races-landing-screen.styles'

const HorseRacesLandingScreen = () => {
  const { fetchHorseRaces } = useHorseRacesContext()

  // Fetches the horse races when user lands on the screen
  useEffect(() => {
    fetchHorseRaces()
  }, [])

  return (
    <Box {...styles.mainContainer}>
      <HorseRaces />
    </Box>
  )
}

export default HorseRacesLandingScreen
