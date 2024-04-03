import { useState } from 'react'

export default function useDisclause() {
    const [isopen, setisopen] = useState(false)

  const onOpen = () => {
    setisopen(true)
  }
  const onClose = () => {
    setisopen(false)
  }
  return {
    onClose,onOpen,isopen
  }
}
