import Link from "next/link";

export default function SignIn() {
  return (
    <main className="flex align-center justify-center">
      <form className="shadow p-4 gap-4 flex flex-col w-80">
        <input type="email" className="p-2 rounded border" placeholder="Usuário" />
        <input type="password" className="p-2 rounded border" placeholder="Senha" />
        <input type="submit" className="p-2 rounded bg-sky-500 hover:bg-sky-600 hover:cursor-pointer text-white" />
      </form>
    </main>
  );
}
