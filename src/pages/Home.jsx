import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">Kembalikan Zaman Keemasan Islam</h1>
      <p className="max-w-2xl mb-8">Mau tahu langkah-langkah untuk mengembalikan masa keemasan dengan menggabungkan ilmu pengetahuan, teknologi, dan ajaran Islam?</p>
      <Link to="/tech-religion" className="btn btn-primary transition-transform duration-500 hover:scale-105">Mulai Jelajahi</Link>
    </section>
  )
}

export default Home
