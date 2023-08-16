import styled from 'styled-components'

export const VideoContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#cccccc')};
  min-height: 100vh;
  width: 75%;
  padding: 20px;
`
export const VideoHeading = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 20px;
  font-weight: 500;
`
export const Paragraph = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  margin: 0;
`
