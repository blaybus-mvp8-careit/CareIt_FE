import { Suspense } from 'react'
import ProfilePage from '@/components/profile/profilePage'

export default function Profile() {
  return (
    <Suspense>
      <ProfilePage />
    </Suspense>
  )
}
