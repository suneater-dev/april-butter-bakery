'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const VisitUsPage = () => {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/')
  }, [router])

  return (
    <main className="min-h-screen bg-white pt-20 flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-neutral-600">Redirecting to home...</p>
      </div>
    </main>
  )
}

export default VisitUsPage