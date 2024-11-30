import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-gray-900 text-amber-500 shadow fixed w-full z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">
                    <div className="hidden sm:flex sm:space-x-8">
                        <Link
                            href="/"
                            className="inline-flex items-center px-1 pt-1 text-sm font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/products"
                            className="inline-flex items-center px-1 pt-1 text-sm font-medium"
                        >
                            Products
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
