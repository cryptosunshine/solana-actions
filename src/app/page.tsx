import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-blue-100 to-purple-200 animate-gradient-x">
      <header className="w-full text-center py-10">
        <h1 className="text-5xl font-extrabold text-pink-600 animate-pulse">
          Welcome to Fluff TON
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover the magic of Fluffies in the Ton blockchain world!
        </p>
      </header>
      <section className="w-full max-w-4xl text-center my-16">
        <div className="flex items-center justify-center">
          <Image
            src="/Fluff.png"
            alt="Fluffy NFT"
            width={300}
            height={300}
            className="rounded-full shadow-lg animate-bounce"
          />
        </div>
      </section>

      <section className="w-full max-w-4xl text-center my-16">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          Background Story
        </h2>
        <p className="text-lg text-gray-700">
          In the virtual world of the Ton blockchain, mysterious species known
          as Fluffies explore every corner, uncovering hidden treasures and
          secrets with their adorable appearance and kind nature.
        </p>
      </section>

      <section className="w-full max-w-4xl text-center my-16">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Ton Fluff (FLUFF) celebrates these adorable creatures. We aim to build
          a loving digital world through community collaboration, allowing every
          holder to experience the magic of Fluffies.
        </p>
      </section>

      <section id="features" className="w-full max-w-4xl text-center my-16">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          Features and Functions
        </h2>
        <div className="text-left">
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-4">
              <strong>Community Activities:</strong> Participate in regular
              Fluffy treasure hunts and adventure story contests to interact and
              earn rewards. 
            </li>

            <li className="mb-4">
              <strong>Charity Collaboration:</strong> We donate a portion of
              transaction fees to animal rescue organizations, spreading love
              and kindness. Each month, community members can vote to select the
              rescue projects we support.
            </li>
            <li className="mb-4">
              <strong>Educational Fund:</strong> We support educational
              initiatives for children in impoverished regions, focusing on
              blockchain technology and digital literacy.
            </li>
            <li className="mb-4">
              <strong>Eco-Friendly Initiatives:</strong> Participate in our
              eco-friendly projects like tree planting. Each NFT purchase
              contributes to global reforestation efforts to offset the carbon
              footprint of blockchain activities.
            </li>
            <li className="mb-4">
              <strong>Art and Culture Funds:</strong> We support artists and
              cultural projects that use blockchain technology to preserve and
              promote cultural heritage.
            </li>
          </ul>
        </div>
      </section>

      <footer className="w-full text-center py-10 mt-16 border-t border-gray-300">
        <p className="text-lg text-gray-700">
          Join us on our journey to spread the magic of Fluffies in the
          blockchain world!
        </p>
        <div className="mt-4">
          <a
            href="https://t.me/Fluff_TON"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Learn more about Fluff TON
          </a>
        </div>
      </footer>
    </main>
  );
}
