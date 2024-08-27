import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
      <p className="text-gray-600 mt-2">The page you are looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
        Go Back Home
      </Link>
    </div>
  );
}