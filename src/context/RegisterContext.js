import React from 'react'

const RegisterContext = React.createContext({
  isRegister: false,
  name: '',
  displayText: '',
  changeRegistrationStatus: () => {},
  getName: () => {},
  getDisplayText: () => {},
})

export default RegisterContext
