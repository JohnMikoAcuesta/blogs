import Image from "next/image";
import React from "react";

function Readview() {
  return (
    <section id="read-blog" className="relative max-w-7xl mx-auto mb-3 px-4">
      <Image
        className="lg:rounded-lg rounded"
        src="/branding-vs-marketing/blog-top-1.png"
        alt="Branding vs. Marketing: Let's Cut the Jargon"
        width={1920}
        height={1080}
      />
      <div className="mt-7 grid lg:grid-cols-[70%_auto] gap-7 grid-cols-1 overflow-y-auto max-w-full">
        <div className="content">
            <h1 className="mb-4 text-4xl break-words bg-linear-to-r from-white to-slate-500 inline-block text-transparent bg-clip-text">
                Branding vs. Marketing: Let's Cut the Jargon
            </h1>
            <br />
            <div className="space-y-2">
                <p>
                  Think of your brand as your personality. It's that gut feeling people get when they think of your business. It's the "vibe," the "why," the "what makes you, you?" It's not just a logo or a catchy slogan; it's the whole shebang – your values, how you treat customers, the story behind your business. It's that thing that makes someone say, "Yeah, I get them."
                </p>
            </div>
            <br />
            <div className="space-y-2">
                <p>
                  Marketing? That's your megaphone. It's how you shout your personality from the rooftops. It’s the ads, the social media posts, the emails – all the stuff you do to get people to notice you. It's the "come check us out!" part of the equation.
                </p>
            </div>
              <Image
                className="lg:rounded-lg rounded my-6"
                src="/branding-vs-marketing/blog-content-img-1.png"
                alt="Branding vs. Marketing Content"
                width={1920}
                height={1080}
              />
              <div className="space-y-2">
                <p className="font-bold text-xl">So, What's the Big Deal?</p>
                  Okay, so why does this matter? Well, imagine trying to date someone without knowing who you are. Awkward, right? That's what marketing without a strong brand feels like. You're throwing stuff at the wall, hoping something sticks.
                <ul className="list-disc pl-5">
                  <li><span className="font-bold">Your Brand is Your Compass:</span> It tells you what to say, how to say it, and who to say it to. It keeps you consistent, so you don't look like a hot mess.</li>
                  <li><span className="font-bold">Marketing is Your Wingman:</span> It takes that awesome personality you've built and gets it in front of the right people. It's the charm, the wit, the smooth moves.</li>
                </ul>
            </div>
            <br />
            <div className="space-y-2">
                <p className="font-bold text-xl">Real Talk: How They Work Together</p>
                Here's the deal: your brand should be whispering sweet nothings in your marketing's ear. Every ad, every tweet, every blog post should reflect who you are. If your brand is all about being fun and quirky, your marketing shouldn't be dry and corporate. It's like having a consistent voice, so people actually trust you.
            </div>
            <br />
            <div className="space-y-2">
                <p className="font-bold text-xl">Why Should You Care?</p>
                Because people aren't just buying products anymore. They're buying into stories, into values, into you. A strong brand makes people feel something. It creates loyalty. And loyal customers? They're the ones who stick around, tell their friends, and basically become your free marketing team.
            </div>
            <br />
            <div className="space-y-2">
              So, stop thinking of branding and marketing as separate departments. They're partners in crime, working together to make your business the rockstar it deserves to be. Get your brand right, and your marketing will sing. Get them both right, and you've got something special.
            </div>
        </div>
        <div className="details">
          <div className="mb-5">
            <small className="text-gray-300">Author</small>
            <h1 className="font-bold teext-2xl">John Miko Acuesta</h1>
            <div className="py-2 text-white">
              <small className="inline-block border-1 border-gray-200 rounded-full px-3 py-1 mr-2 mb-2">
                #BrandStrategy
              </small>
              <small className="inline-block border-1 border-gray-200 rounded-full px-3 py-1 mr-2 mb-2">
                #BrandMatters
              </small>
              <small className="inline-block border-1 border-gray-200 rounded-full px-3 py-1 mr-2 mb-2">
                #Marketing101
              </small>
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: "10px" }}>Contributors</h3>
            <div className="flex flex-wrap">
            <Image
                className="size-12 rounded-full m-1"
                src="/branding-vs-marketing/gemini-logo.png"
                alt="Gemini"
                width={1080}
                height={1080}
              />
              <Image
                className="size-12 rounded-full m-1 bg-amber-50"
                src="/branding-vs-marketing/unsplash-logo.png"
                alt="Unsplash"
                width={1080}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Readview;
