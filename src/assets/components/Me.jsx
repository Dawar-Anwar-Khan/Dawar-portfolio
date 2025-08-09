import React from "react";

export default function Me() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="md:text-[48px] text-[36px] md:text-6xl font-bold mb-4">
          About Me
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
          Hey I'm Dawar - Frontend Developer
        </p>
      </div>

      {/* Personal Introduction */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Who I Am</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-4">
            Hi! I'm Dawar, a frontend Developer based in Delhi. I'm passionate
            about crafting ideas into reality and love creating things that are
            meaningful and can help me or the society.
          </p>
          <p className="text-lg leading-relaxed text-gray-400">
            <b>
              "Drawn to the invisible architecture behind the digital world",
            </b>
            &nbsp; My journey into technology began not with formal instruction,
            but with a quiet fascination. It started when I was just a kid,
            breaking things on purpose, just to figure out how to put them back
            together. I stumbled into code like a secret language, and suddenly
            the screen wasn’t just a screen it was a canvas. Since then, I’ve
            built things that work, broken things that didn’t, and stayed up
            chasing that one bug at 2 a.m. Every project I touch teaches me
            something new about logic, about design, about myself. I don’t just
            write code to ship features. I write to shape experience. And
            somewhere between structure and intuition, I’ve found the space
            where I do my best work.
          </p>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">My Journey</h2>
        <div className="space-y-6">
          <div className="bg-[#252525] border-[#404040] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">How I Got Started</h3>
            <p className=" text-gray-400">
              I’m pursuing a BCA at JB Knowledge Park alongside. My tech journey
              began with HTML, CSS, and JavaScript, later expanding to React.js,
              TailwindCSS, and REST APIs. I’ve built projects like The Shoe
              Company and QuoteVerse, focusing on clean UI and user engagement.
              My goal is to apply my frontend skills to impactful projects,
              combining my technical expertise with purpose-driven work.
            </p>
          </div>

          <div className="bg-[#252525] border-[#404040]  p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Key Experiences</h3>
            <p className=" text-gray-400">
              Key projects include QuoteVerse, a platform delivering daily
              motivational Islamic quotes with Tafsir, and The Shoe Company, an
              e-commerce-style frontend application. These experiences honed my
              skills in responsive design, UI optimization, and integrating
              APIs. Working on purpose-driven platforms reinforced a
              disciplined, impact-oriented approach to development, where
              functionality and user experience are equally prioritized.
            </p>
          </div>

          <div className="bg-[#252525] border-[#404040] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Currently Learning</h3>
            <p className=" text-gray-400">
              I am currently focused on expanding my skill set by learning backend development, with the goal of becoming a full-stack developer. This includes gaining proficiency in Node.js, Express, and database management to complement my frontend expertise. I am particularly excited about building scalable, end-to-end applications and enhancing my ability to deliver complete solutions for real-world projects.
            </p>
          </div>
        </div>
      </section>

      {/* Beyond Work */}
      {/* <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Beyond the Work
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Personal Interests</h3>
            <ul className="space-y-2  text-gray-400">
              <li>• [Interest 1 and how it relates to your work/creativity]</li>
              <li>• [Interest 2 and what you enjoy about it]</li>
              <li>• [Interest 3 and why it's meaningful to you]</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">What Drives Me</h3>
            <p className=" text-gray-400">
              [What motivates you professionally and personally. This could be
              problem-solving, helping others, creating beautiful things,
              learning new technologies, etc.]
            </p>
          </div>
        </div>
      </section> */}

      {/* Working Style & Values */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">How I Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-3">My Approach</h3>
            <p className="text-gray-400">
              Problem-solving with clarity, adaptability, and user-focused solutions.
            </p>
          </div>

          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Collaboration</h3>
            <p className="text-gray-400">
              Collaborative, clear, and feedback-driven communication.
            </p>
          </div>

          <div className="text-center p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Values</h3>
            <p className="text-gray-400">
              Quality, innovation, and seamless user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-[#252525] border-[#404040] p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
        <p className="text-lg text-gray-400 mb-6 ">
          I'm always interested in all kinds of opportunities or conversations.
        </p>
        <div className="md:space-x-4 flex justify-center flex-col gap-4 md:flex-row">
          <a
            href="mailto:kdawar0101@gmail.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="https://flowcv.com/resume/ofqoosgmrv8l"
            className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            View Resume
          </a>
        </div>
      </section>
    </div>
  );
}
