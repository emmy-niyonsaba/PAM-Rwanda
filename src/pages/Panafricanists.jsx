import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PanafricanistCard from '../components/PanafricanistCard';
import { panafricanistService } from '../services/api';

export default function PanafricanistsPage() {
  const [panafricanists, setPanafricanists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPanafricanists();
  }, []);

  const fetchPanafricanists = async () => {
    try {
      setLoading(true);
      const response = await panafricanistService.getPanafricanists();
      setPanafricanists(response.data.panafricanists || []);
    } catch (error) {
      console.error('Error fetching panafricanists:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-header">🌟 Pan-African Heroes</h1>
          <p className="section-subheader">Celebrated leaders and visionaries who shaped African independence and unity.</p>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="skeleton h-64"></div>
              ))}
            </div>
          ) : panafricanists.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {panafricanists.map((p) => (
                <PanafricanistCard key={p.id} panafricanist={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-2xl text-neutral-600">No panafricanists found.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
