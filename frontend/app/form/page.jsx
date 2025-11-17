import Link from 'next/link';
import { ApplicantForm } from '@/components/form/ApplicantForm';

export default function FormPage() {
  return (
    <div>
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800 font-merriweather hover:text-blue-600">
            Application Portal
          </Link>
          <div className="flex gap-4">
            <Link
              href="/"
              className="px-4 py-2 text-gray-600 hover:text-gray-700 font-dm-sans font-medium"
            >
              Home
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 text-blue-600 hover:text-blue-700 font-dm-sans font-medium"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-dm-sans font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <ApplicantForm />
    </div>
  );
}

