import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-blue-100 to-purple-200">
      <header className="w-full text-center py-10">
        <h1 className="text-5xl font-extrabold text-pink-600">
          Welcome to SolanaFluff
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover the magic of Fluffies in the Solana blockchain world!
        </p>
      </header>

      <section className="w-full max-w-4xl text-center my-16">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Background Story</h2>
        <p className="text-lg text-gray-700">
          In the virtual world of the Solana blockchain, there exists a mysterious species known as Fluffies. These fluffy little creatures are known for their adorable appearance and kind nature. Fluffies love to explore every corner of the blockchain, uncovering hidden treasures and secrets.
        </p>
      </section>

      <section className="w-full max-w-4xl text-center my-16">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700">
          SolanaFluff (FLUFF) was created to celebrate these adorable Fluffies. Our mission is to build a loving and joyful digital world through community collaboration, allowing every holder to experience the magic of Fluffies.
        </p>
      </section>

      <section className="w-full max-w-4xl text-center my-16">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Features and Functions</h2>
        <div className="text-left">
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-4">
              <strong>Fluffy NFT:</strong> FLUFF holders can obtain unique Fluffy NFTs, each with its own special appearance and attributes.
            </li>
            <li className="mb-4">
              <strong>Community Activities:</strong> Regular Fluffy treasure hunts and adventure story contests where community members can interact and earn rewards.
            </li>
            <li className="mb-4">
              <strong>Charity Collaboration:</strong> A portion of transaction fees will be donated to animal rescue organizations and other charities, spreading love and kindness.
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full max-w-4xl text-center my-16">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Fluffy NFT Showcase</h2>
        <div className="flex items-center justify-center">
          <Image
            src="/Fluff.png"
            alt="Fluffy NFT"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
      </section>

      <footer className="w-full text-center py-10 mt-16 border-t border-gray-300">
        <p className="text-lg text-gray-700">
          Join us on our journey to spread the magic of Fluffies in the blockchain world!
        </p>
        <div className="mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Learn more
          </a>
        </div>
      </footer>
    </main>
  );
}