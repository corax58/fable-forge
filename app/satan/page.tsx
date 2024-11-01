import React from "react";

const Satan = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-4 font-sans">
      {/* Main container with dark styling and blood-red accent */}
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center mt-10">
          <h1 className="text-5xl font-extrabold text-red-600 tracking-wider">
            The Bloodmoon Fellowship
          </h1>
          <p className="text-lg mt-2 text-gray-400">
            "Under the blood moon, we gather as shadows."
          </p>
        </header>

        {/* Introduction Section */}
        <section className="bg-purple-900 bg-opacity-20 rounded-lg p-6 shadow-lg shadow-purple-800">
          <h2 className="text-3xl text-red-600 mb-4 font-semibold">
            Who We Are
          </h2>
          <p className="leading-loose">
            The Bloodmoon Fellowship is a gathering of kindred souls, united by
            the pursuit of ancient knowledge and bound by our devotion to the
            dark arts. We seek to transcend the ordinary and touch the shadows
            that linger just beyond sight.
          </p>
        </section>

        {/* Our Purpose Section */}
        <section className="bg-purple-900 bg-opacity-20 rounded-lg p-6 shadow-lg shadow-red-800">
          <h2 className="text-3xl text-red-600 mb-4 font-semibold">
            Our Purpose
          </h2>
          <p className="leading-loose">
            By joining the fellowship, you commit yourself to an eternal cause.
            We gather under the blood moon, where the boundary between realms
            grows thin, to exchange knowledge, perform rituals, and celebrate
            our unity. Enter willingly, and you shall find an otherworldly
            purpose.
          </p>
        </section>

        {/* Join Us Section */}
        <section className="bg-purple-900 bg-opacity-20 rounded-lg p-6 shadow-lg shadow-red-900">
          <h2 className="text-3xl text-red-600 mb-4 font-semibold">Join Us</h2>
          <p className="leading-loose">
            Become part of the eternal fellowship and embrace your dark calling.
            Send your intent to join under the blood moon's watchful gaze.
          </p>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800 text-gray-300 p-2 rounded border border-red-700 focus:outline-none focus:border-red-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-800 text-gray-300 p-2 rounded border border-red-700 focus:outline-none focus:border-red-600"
            />
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-gray-100 p-2 rounded font-semibold tracking-wider"
            >
              Pledge Yourself
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Satan;
