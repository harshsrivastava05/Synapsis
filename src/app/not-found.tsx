"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center">
        <div className="mb-8 animate-fade-in">
          <Image
            src="/Synapsis_Logo.png"
            alt="Synapsis Medical Logo"
            width={64}
            height={64}
            className="mb-4"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 text-center">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.<br />
          Please check the URL or return to the homepage.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors duration-200"
        >
          Go to Homepage
        </Link>
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
} 