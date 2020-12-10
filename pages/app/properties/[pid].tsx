import { useRouter } from 'next/router';

const PropertyPage = () => {
  const router = useRouter();
  const { pid } = router.query
  return (
    <div>
      {pid}
    </div>
  )
}

export default PropertyPage;