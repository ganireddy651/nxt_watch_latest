import React from 'react'

const SavedVideoContext = React.createContext({
  onSave: false,
  onSaveVideo: () => {},
})

export default SavedVideoContext
