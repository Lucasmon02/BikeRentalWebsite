export default function BikePage() {

  const bikes = [
    {
      name: "Mountain Bike",
      desc: "Perfetta per sterrati e montagna",
      img: "https://images.unsplash.com/photo-1511994298241-608e28f14fde"
    },
    {
      name: "City Bike",
      desc: "Ideale per la città",
      img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8"
    },
    {
      name: "E-Bike",
      desc: "Bici elettrica comoda e veloce",
      img: "https://images.unsplash.com/photo-1541625602330-2277a4c46182"
    }
  ]

  const phone = "393000000000" // 🔴 METTI IL TUO NUMERO WHATSAPP

  const openWhatsApp = (bikeName) => {
    const message = `Ciao, vorrei informazioni sulla ${bikeName}`
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <div className="page">

      <header className="hero">
        <h1>Noleggio Biciclette</h1>
        <p>Prenota subito su WhatsApp</p>
      </header>

      <section className="grid">
        {bikes.map((bike, i) => (
          <div className="card" key={i}>
            <img src={bike.img} />
            <h2>{bike.name}</h2>
            <p>{bike.desc}</p>

            <button onClick={() => openWhatsApp(bike.name)}>
              Acquista su WhatsApp
            </button>
          </div>
        ))}
      </section>

      <footer>
        © 2026 Noleggio Biciclette
      </footer>

    </div>
  )
}
