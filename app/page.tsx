import Navbar from './components/Navbar'
import Content from './components/Content'

export default function Home() {
  return (
    <main className='flex h-screen flex-col'>
      <Navbar />
      <div className='flex h-full'>
        <Content />
      </div>
    </main>
  )
}
