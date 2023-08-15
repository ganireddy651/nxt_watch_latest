import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#f1f5f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  min-height: 100vh;
`

export const Para = styled.p`
  padding: 10px;
`
