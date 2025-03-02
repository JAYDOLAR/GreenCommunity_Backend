export function StatsSection() {
  const stats = [
    { value: "10K+", label: "Community Members" },
    { value: "500+", label: "Environmental Projects" },
    { value: "200+", label: "Educational Resources" },
    { value: "50+", label: "Local Vendors" },
  ]

  return (
    <section className="eco-gradient py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Our Impact</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-white/80">
            Together, we're making a significant difference in environmental sustainability.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-white md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-lg text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

