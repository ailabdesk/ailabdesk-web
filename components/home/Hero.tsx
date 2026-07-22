import HeroDashboard from "./HeroDashboard";
import SearchBar from "../ui/SearchBar";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10" style={{backgroundImage: "var(--hero-orange), var(--hero-navy)",}} />

      <Container>
        <div className="grid min-h-[820px] items-center gap-20 py-24 lg:grid-cols-2">

          {/* Left */}
          <div className="relative z-10">

            <span className="mb-6 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-[var(--color-accent)]">
              Discover • Compare • Choose
            </span>

            <h1 className="max-w-xl text-6xl font-extrabold leading-tight tracking-tight text-[var(--color-text)]">
              Hilly 
              <br />
              TBLEEEEHHHHHHHHH
              <br />
              
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[var(--color-text-light)]">
              Search, compare and discover the best AI software for work,
              business and creativity.
            </p>

            <div className="mt-10">
              <SearchBar />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "ChatGPT",
                "Claude",
                "Cursor",
                "Gemini",
                "Canva",
              ].map((item) => (
                <button
                  key={item}
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-[var(--color-accent)]
                    hover:text-[var(--color-accent)]
"
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* Right */}

          <HeroDashboard />

        </div>
      </Container>
    </section>
  );
}