import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-white py-10 px-4 mt-12 border-t border-neutral-200/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Image
            src="/Synapsis_Logo.png"
            alt="Synapsis Medical Logo"
            width={36}
            height={36}
            className="rounded"
          />
          <span className="text-lg font-semibold text-white">Synapsis Medical Technologies Inc.</span>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
          <Link href="/team-members" className="hover:text-blue-400 transition-colors">Team</Link>
          <Link href="/contacts" className="hover:text-blue-400 transition-colors">Contact</Link>
          <Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link>
        </nav>
        <div className="text-xs text-neutral-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Synapsis Medical Technologies Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 