import Link from "next/link";

export default function AngarPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>Angar</h2>
      <Link href="/">SignIn</Link>
    </main>
  );
}
