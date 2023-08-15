import styled from 'styled-components'

export const TrendingBackground = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f1f5f9')};
  padding: 20px;
  height: 40vh;
  width: 100%;
  padding-left: 60px;
  display: flex;
  align-items: center;
`

export const TrendingContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#e2e8f0')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  border-radius: 60px;
  margin-right: 30px;
`

export const TrendingHeading = styled.h1`
  font-weight: 700;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 35px;
`
export const TrendingVideosSection = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#cccccc')};
  width: 75%;
`
