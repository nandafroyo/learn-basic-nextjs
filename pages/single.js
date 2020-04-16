import { useRouter } from 'next/router'
import BaseLayout from '../components/BaseLayout'

export default function Page() {
  const router = useRouter();

  return (
    <BaseLayout>
      <h3>{router.query.id}</h3>
      <p>contoh paragraf</p>
    </BaseLayout>
  )
}