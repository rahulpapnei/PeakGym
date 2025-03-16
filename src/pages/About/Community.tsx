import React from 'react';
import { Users, MessageSquare, Trophy, FileText, ArrowRight, Disc as Discord } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
    return (
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
        <Icon className="w-8 h-8 text-purple-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    );
  }

function Community() {
    return ( <>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Join the PeakGym Community
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with fitness enthusiasts, get expert advice, and achieve your goals together. Our Discord community is where motivation meets results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <FeatureCard
            icon={MessageSquare}
            title="Ask & Learn"
            description="Get answers to your fitness questions from certified trainers and experienced community members."
          />
          <FeatureCard
            icon={Users}
            title="24/7 Support"
            description="Access round-the-clock customer support and connect with members worldwide."
          />
          <FeatureCard
            icon={FileText}
            title="Exclusive Resources"
            description="Get access to premium workout plans, nutrition guides, and training tips."
          />
          <FeatureCard
            icon={Trophy}
            title="Monthly Challenges"
            description="Participate in exciting fitness challenges and win amazing rewards."
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to join our community?
            </h3>
            <p className="text-gray-300">
              Connect with 5,000+ fitness enthusiasts today!
            </p>
          </div>
          
          <a
            href="https://discord.gg/peakgym"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <Discord className="w-5 h-5" />
            Join Our Discord
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Discord Widget */}
        <div className="mt-12">
          <iframe
            src="https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark"
            width="100%"
            height="400"
            frameBorder="0"
            className="rounded-xl"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            title="Discord Widget"
          ></iframe>
        </div>
      </section>
    </div>
    </> );
}

export default Community;