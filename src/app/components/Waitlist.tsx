import { FaUser, FaEnvelope, FaLock, FaUserPlus, FaCheckCircle, FaSignInAlt } from "react-icons/fa";

export default function Waitlist() {
  return (
    <section className="bg-[#111] text-white py-16 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Steps */}
        <div>
          <span className="text-sm px-3 py-1 bg-gray-800 rounded-full">
            Limited Access
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Join our Waitlist
          </h2>
          <p className="text-gray-400 mt-2">
            Enter your information to unlock early access + boosted rewards.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start space-x-3">
              <FaSignInAlt className="text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold">Create an Account</h3>
                <p className="text-gray-400 text-sm">
                  Be the first to experience Degen.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaUserPlus className="text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold">Create Affiliate Code</h3>
                <p className="text-gray-400 text-sm">
                  Create your unique affiliate code or skip to use auto-generated one.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold">Verify your Email</h3>
                <p className="text-gray-400 text-sm">
                  Confirm your email to secure your spot on the waitlist.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold">You're In!</h3>
                <p className="text-gray-400 text-sm">
                  Welcome to Degen. Start earning rewards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-lg">
          <form className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm mb-1">Username</label>
              <div className="flex items-center bg-[#111] px-3 py-2 rounded-lg border border-gray-700">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Username"
                  className="bg-transparent outline-none flex-1 text-white"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">Email</label>
              <div className="flex items-center bg-[#111] px-3 py-2 rounded-lg border border-gray-700">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent outline-none flex-1 text-white"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1">Password</label>
              <div className="flex items-center bg-[#111] px-3 py-2 rounded-lg border border-gray-700">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent outline-none flex-1 text-white"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm mb-1">Confirm Password</label>
              <div className="flex items-center bg-[#111] px-3 py-2 rounded-lg border border-gray-700">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-transparent outline-none flex-1 text-white"
                />
              </div>
            </div>

            {/* Referral Code */}
            <div>
              <label className="block text-sm mb-1">Referral Code (optional)</label>
              <div className="flex items-center bg-[#111] px-3 py-2 rounded-lg border border-gray-700">
                <FaUserPlus className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter referral code"
                  className="bg-transparent outline-none flex-1 text-white"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
