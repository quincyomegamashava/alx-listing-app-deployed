import Head from "next/head";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-12">
      <Head>
        <title>Sign up • ALX</title>
      </Head>
      <h1 className="text-2xl font-bold mb-6">Create your account</h1>
      <form className="bg-white border rounded-2xl shadow-sm p-6 space-y-4" onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget as HTMLFormElement);
        const name = String(fd.get('name') || '');
        const email = String(fd.get('email') || '');
        const password = String(fd.get('password') || '');
        const res = await fetch('/api/auth/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, password }) });
        if (res.ok) {
          alert('Account created');
        } else {
          alert('Signup failed');
        }
      }}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
          <input name="name" type="text" className="w-full border rounded-full px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:border-pink-500" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input name="email" type="email" className="w-full border rounded-full px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:border-pink-500" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input name="password" type="password" className="w-full border rounded-full px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:border-pink-500" placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2.5 rounded-full shadow-sm">Create account</button>
        <p className="text-sm text-gray-600 text-center">Already have an account? <Link href="/login" className="text-pink-600 hover:underline">Log in</Link></p>
      </form>
    </div>
  );
}
