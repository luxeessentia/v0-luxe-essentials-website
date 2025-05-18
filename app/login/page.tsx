import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 pb-16">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <h1 className="text-2xl font-light text-[#8a5a5e] text-center mb-6">Login or Create Account</h1>

        <form className="space-y-4 max-w-md mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#8a5a5e] mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#8a5a5e] mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#8a5a5e] mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-[#e5c1c4] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#8a5a5e]"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#D9A5B3] border-[#e5c1c4] rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[#8a5a5e]">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link href="/forgot-password" className="text-[#8a5a5e] hover:text-[#D9A5B3]">
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="submit"
              className="flex-1 bg-[#D9A5B3] text-white py-2 px-4 rounded-sm hover:bg-[#c99aaa] transition-colors"
            >
              Login
            </button>
            <button
              type="button"
              className="flex-1 bg-[#D9A5B3] text-white py-2 px-4 rounded-sm hover:bg-[#c99aaa] transition-colors"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-[#e5c1c4]">
          <p className="text-center text-sm text-[#8a5a5e] mb-4">Or continue with</p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center justify-center px-4 py-2 border border-[#e5c1c4] rounded-sm hover:bg-[#f8e1e3]/30 transition-colors">
              <span className="mr-2">G</span>
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-[#e5c1c4] rounded-sm hover:bg-[#f8e1e3]/30 transition-colors">
              <span className="mr-2">A</span>
              <span>Apple</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
