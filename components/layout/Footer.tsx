import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">

      <Container>

        <div className="grid gap-16 py-20 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Image
              src="/ailabdesk-logo.png"
              alt="AiLabDesk"
              width={180}
              height={50}
            />

            <p className="mt-6 text-slate-600 leading-7">
              Discover, compare and choose the best AI tools for work,
              business and creativity.
            </p>

          </div>

          {/* Explore */}

          <div>

            <h3 className="font-semibold text-slate-900">
              Explore
            </h3>

            <ul className="mt-6 space-y-3 text-slate-600">

              <li><Link href="#">AI Tools</Link></li>

              <li><Link href="#">Categories</Link></li>

              <li><Link href="#">Compare</Link></li>

              <li><Link href="#">Collections</Link></li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-semibold text-slate-900">
              Resources
            </h3>

            <ul className="mt-6 space-y-3 text-slate-600">

              <li><Link href="#">Blog</Link></li>

              <li><Link href="#">Reviews</Link></li>

              <li><Link href="#">Newsletter</Link></li>

              <li><Link href="#">Submit Tool</Link></li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-semibold text-slate-900">
              Company
            </h3>

            <ul className="mt-6 space-y-3 text-slate-600">

              <li><Link href="#">About</Link></li>

              <li><Link href="#">Contact</Link></li>

              <li><Link href="#">Privacy Policy</Link></li>

              <li><Link href="#">Terms of Service</Link></li>

            </ul>

          </div>

        </div>

        <div className="flex flex-col items-center justify-between border-t border-slate-200 py-8 text-sm text-slate-500 lg:flex-row">

          <p>
            © 2026 AiLabDesk. All rights reserved.
          </p>

          <p>
            
          </p>

        </div>

      </Container>

    </footer>
  );
}