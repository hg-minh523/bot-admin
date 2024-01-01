import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2"> 
        <div >
            <img className="w-full" src="/login.jpg" alt="" />
          {/* <Image
            src="/login.jpg"
            alt="Vercel Logo"
            width={332}
            height={380}
            priority
          /> */}
        </div>
        <form className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded font-bold hover:bg-blue-700"
          >
            Login
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded font-bold hover:bg-blue-700"
          >
            Signin
          </button>
        </form>
    </div>
  );
}
