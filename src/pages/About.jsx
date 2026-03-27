import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>

      <div className="bg-neutral-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-4">About the Pan-Africanism Movement</h1>
            <p className="text-xl">United We Stand. African Solutions for African Problems.</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Mission */}
          <section className="mb-16">
            <h2 className="section-header">🎯 Our Mission</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-neutral-700 mb-4 text-lg">
                  The Pan-Africanism Movement (PAM) is dedicated to fostering unity, education, and empowerment across the African continent and diaspora.
                </p>
                <p className="text-neutral-700 mb-4 text-lg">
                  We believe in the power of African solutions for African problems, celebrating our rich heritage while building a prosperous future.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary-600 mb-4">Core Values</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>✓ <strong>Unity</strong> - Continental solidarity</li>
                  <li>✓ <strong>Education</strong> - Knowledge empowerment</li>
                  <li>✓ <strong>Innovation</strong> - African-led solutions</li>
                  <li>✓ <strong>Inclusivity</strong> - All voices matter</li>
                  <li>✓ <strong>Prosperity</strong> - Shared success</li>
                  <li>✓ <strong>Pride</strong> - African identity</li>
                </ul>
              </div>
            </div>
          </section>

          {/* History */}
          <section className="mb-16">
            <h2 className="section-header">📚 Pan-Africanism History</h2>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-2xl font-bold text-primary-600 mb-3">Early Foundations (1900s-1920s)</h3>
                <p className="text-neutral-700">
                  Pan-Africanism emerged as a response to colonialism, with African leaders and intellectuals like W.E.B. Du Bois calling for continental unity. The movement gained momentum through literary works, conferences, and advocacy.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-2xl font-bold text-primary-600 mb-3">Independence Era (1950s-1960s)</h3>
                <p className="text-neutral-700">
                  The wave of African independence brought renewed energy to Pan-Africanism. Leaders like Kwame Nkrumah, Julius Nyerere, and Haile Selassie championed continental unity, resulting in the formation of the Organization of African Unity (OAU) in 1963.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-2xl font-bold text-primary-600 mb-3">Modern Pan-Africanism (Present)</h3>
                <p className="text-neutral-700">
                  Today, Pan-Africanism encompasses economic integration, technological innovation, cultural preservation, and diaspora engagement. We focus on youth empowerment, sustainable development, and African leadership on the global stage.
                </p>
              </div>
            </div>
          </section>

          {/* Platform Features */}
          <section className="mb-16">
            <h2 className="section-header">🌟 Our Platform Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🎓', title: 'Learning Paths', desc: 'Structured courses on Pan-Africanism and African history' },
                { icon: '🎉', title: 'Events', desc: 'Conferences, workshops, and networking opportunities' },
                { icon: '📚', title: 'Resources', desc: 'Curated history, stories, and educational materials' },
                { icon: '💬', title: 'Community', desc: 'Connect with Africans globally through chat' },
                { icon: '🌍', title: 'Opportunities', desc: 'Jobs, scholarships, and investment openings' },
                { icon: '🏆', title: 'Membership', desc: 'Verified members get exclusive benefits' },
              ].map((item, index) => (
                <div key={index} className="card p-6 text-center">
                  <span className="text-5xl mb-3 block">{item.icon}</span>
                  <h3 className="text-xl font-bold text-primary-600 mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Impact */}
          <section className="mb-16 bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-lg">
            <h2 className="section-header text-center mb-8">📊 Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold text-primary-600 mb-2">1M+</p>
                <p className="text-neutral-700">Community Members</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-accent-600 mb-2">54</p>
                <p className="text-neutral-700">African Nations Connected</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary-600 mb-2">10K+</p>
                <p className="text-neutral-700">Events & Opportunities</p>
              </div>
            </div>
          </section>

          {/* Join Us */}
          <section className="text-center">
            <h2 className="section-header">🤝 Join the Movement</h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Whether you're in Africa, the diaspora, or supporting from afar, there's a place for you in PAM. 
              Together, we can build a stronger, more prosperous African continent.
            </p>
            <a href="/register" className="btn-primary py-3 px-8 text-lg">
              Become a PAM Member Today
            </a>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

