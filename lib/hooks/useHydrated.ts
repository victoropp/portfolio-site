'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to detect if the component has hydrated on the client.
 * Returns false during SSR/static export, true after client hydration.
 *
 * Use this to conditionally enable animations that would otherwise
 * cause content to be invisible on static export.
 */
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return hydrated
}
