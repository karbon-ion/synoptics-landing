import Hero from './sections/hero'
import Featured from './sections/featured'
import AllIntegrations from './sections/all-integrations'
import RequestIntegration from './sections/request-integration'

export default function Integrations() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Featured />
      <RequestIntegration />
      <AllIntegrations />
    </main>
  )
}
