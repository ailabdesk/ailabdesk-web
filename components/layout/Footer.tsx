import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-[#334155] text-white">

      <Container>

        <div className="grid gap-16 py-20 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Image
              src="/ailabdesk-logo-trans.png"
              alt="AiLabDesk"
              width={210}
              height={50}
            />

            <p className="mt-6 leading-7 text-slate-300">
              Discover trusted AI tools and creator gear that help you work smarter, create faster, and build better.
              
            </p>

          </div>

          {/* Explore */}

          <div>

            <h3 className="font-semibold text-white">
              Explore
            </h3>

            <ul className="mt-6 space-y-3 text-slate-300 transition-all duration-200 hover:text-[#FF8A00] hover:translate-x-1">

              <li><Link href="#" className="transition-colors hover:text-[#FF8A00]">AI Tools</Link></li>

              <li><Link href="#" className="transition-colors hover:text-[#FF8A00]">Categories</Link></li>

              <li><Link href="#" className="transition-colors hover:text-[#FF8A00]">Compare</Link></li>

              <li><Link href="#" className="transition-colors hover:text-[#FF8A00]">Collections</Link></li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-semibold text-white">
              Resources
            </h3>

            <ul className="mt-6 space-y-3 text-slate-300 transition-all duration-200 hover:text-[#FF8A00] hover:translate-x-1">

              <li><Link href="#" className="transition-colors hover:text-[#FF8A00]">Blog</Link></li>

              <li><Link href="#" className="transition-colors hover:text-[#FF8A00]">Reviews</Link></li>

              <li><Link href="#" className="transition-colors hover:text-[#FF8A00]">Newsletter</Link></li>

              <li><Link href="#" className="transition-colors hover:text-[#FF8A00]">Submit Tool</Link></li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-semibold text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-3 text-slate-300 transition-all duration-200 hover:text-[#FF8A00] hover:translate-x-1">

              <li><Link href="#" className="transition-colors hover:text-[#FF8A00]">About</Link></li>

              <li><Link href="#" className="transition-colors hover:text-[#FF8A00]">Contact</Link></li>

              <li><Link href="#" className="transition-colors hover:text-[#FF8A00]">Privacy Policy</Link></li>

              <li><Link href="#" className="transition-colors hover:text-[#FF8A00]">Terms of Service</Link></li>

              <li><Link href="#" className="transition-colors hover:text-[#FF8A00]">Affiliate Disclosure</Link></li>

            </ul>

          </div>

        </div>

        <div className="mt-4 border-t border-slate-700 py-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} AiLabDesk. All rights reserved.
            </p>

           <p className="mt-4 text-center text-xs text-slate-500">
  <span className="font-medium text-slate-300">Disclosure:</span>{" "}
  We may earn a commission from affiliate links, at no additional cost to you.
</p>
          </div>
        </div>

      </Container>

    </footer>
  );
}