import Link from "next/link";

export default function SignIn() {
  return (
    <main className="flex items-center justify-center h-screen">
      <form className="shadow p-4 gap-4 flex flex-col w-80">
        <h1 className="text-center text-xl">Login</h1>
        <input type="email" className="p-2 rounded border" placeholder="Usuário" required/>
        <input type="password" className="p-2 rounded border" placeholder="Senha" required/>
        <input type="submit" value="Fazer Login" className="p-2 rounded bg-sky-500 hover:bg-sky-600 hover:cursor-pointer text-white" />
      </form>
    </main>
  );
}
