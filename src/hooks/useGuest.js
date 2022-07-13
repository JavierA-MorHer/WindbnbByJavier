import { useState } from 'react'

export const useGuest = () => {

    const [visibleGuest, setVisibleGuest] = useState(false);

    function handleVisibleGuest() {
        setVisibleGuest(!visibleGuest);
      }
  return {
    visibleGuest,
    handleVisibleGuest
  }
}
