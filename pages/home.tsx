import Link from 'next/link'

export default function HomePage() {
    return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
               <nav className="shadow p-3 flex gap-3">
                    <Link href="/home">Home</Link>
                    <Link href="/sobre">Sobre</Link>
                    <Link href="/acavm">ACAVM</Link>
                    <Link href="/angar">Angar</Link>
                </nav>
            </main>
    )
}