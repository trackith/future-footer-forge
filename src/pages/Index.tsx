
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import Waitlist from "@/components/Waitlist";

const Index = () => {
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfCmLxgQopCFeLyocBAJc7V03NOc7WG5C9ySdyGrj0ptN6wdw/viewform";
  const instagramLink = "https://www.instagram.com/trackith?igsh=MTg5MGt6aW03ano0Yg%3D%3D&utm_source=qr";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Transform Your Future with Trackith
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize how you own, protect, and monetize your creative work with blockchain technology. Earn money from all your streaming services as a content creator and track where and when your media is used by others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(googleFormLink, '_blank')}
            >
              Start Your Journey
            </Button>
            <Waitlist />
          </div>
        </div>

        {/* Blockchain Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Own Your Creative Property</h3>
            <p className="text-gray-300">
              Secure true ownership of your digital assets with immutable blockchain records that prove authenticity and ownership.
            </p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">📜</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Smart Contract Protection</h3>
            <p className="text-gray-300">
              Utilize smart contracts to automatically record, verify, and protect your creative data with transparent terms.
            </p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Blockchain Productivity</h3>
            <p className="text-gray-300">
              Harness the power of decentralized technology to streamline workflows and eliminate intermediaries.
            </p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Pioneer the Future</h3>
            <p className="text-gray-300">
              Be among the first to revolutionize proprietary management and creative engagement in the digital age.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution in creative property management and be part of the blockchain-powered future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-purple-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300"
              onClick={() => window.open(googleFormLink, '_blank')}
            >
              Get Started Now
            </Button>
            <Waitlist />
          </div>
        </div>
      </div>

      {/* Instagram Footer Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <Instagram size={40} className="text-pink-600" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Instagram!
          </h3>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Follow us for daily insights, behind-the-scenes content, and the latest updates on blockchain innovation in creative industries.
          </p>
          <Button 
            className="bg-white text-pink-600 hover:bg-pink-50 font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open(instagramLink, '_blank')}
          >
            Follow @trackith
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
