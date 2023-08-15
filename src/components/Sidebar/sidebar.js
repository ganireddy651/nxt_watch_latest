import styled from 'styled-components'

export const SidebarContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 20px;
  width: 25%;
`
export const Para = styled.p`
  padding: 10px;
`
