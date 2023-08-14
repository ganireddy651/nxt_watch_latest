import styled from 'styled-components'

export const LogInBackgroundContainer = styled.div`
  background-color: ${props => props.isDark && '#212121'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  height: 100vh;
`
export const FormContainer = styled.form`
  background-color: ${props => props.isDark && '#000000'};
  width: 450px;
  padding: 30px;
  box-shadow: ${props => (props.isDark ? null : '1px 1px 2px 2px #bfbfbf')};
  border-radius: 5px;
`
export const Label = styled.label`
  color: ${props => props.isDark && '#ffffff'};
  font-weight: 600;
  font-size: 16px;
`
export const LogInInput = styled.input`
  width: 100%;
  height: 42px;
  border: 1px solid #94a3b8;
  padding: 10px;
  outline: none;
  border-radius: 3px;
  margin-top: 3px;
  background-color: transparent;
  color: #909090;
`
export const LogInLabel = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  font-weight: 600;
`

export const Checkbox = styled.input`
  height: 17px;
  width: 17px;
  margin-right: 5px;
`
export const LogInButton = styled.button`
  background-color: #3b82f6;
  height: 42px;
  width: 100%;
  border: 0;
  outline: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
`
export const ErrorParagraph = styled.p`
  margin: 0;
  color: #ff0b37;
  font-weight: 600;
`
