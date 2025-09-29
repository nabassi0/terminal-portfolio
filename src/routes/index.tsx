import { createFileRoute } from '@tanstack/react-router'
import Loader from '../components/Loader/Loader'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      < Loader />
    </div>
  )
}