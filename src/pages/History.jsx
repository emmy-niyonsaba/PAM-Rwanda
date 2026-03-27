import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HistoryCard from '../components/HistoryCard';
import { historyService } from '../services/api';

export default function HistoryPage() {
  const navigate = useNavigate();
  const [histories, setHistories] = useState([]);
  const [filteredHistories, setFilteredHistories] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistories();
  }, []);

  const fetchHistories = async () => {
    try {
      setLoading(true);
      const response = await historyService.getHistories();
      setHistories(response.data.histories || []);
      setFilteredHistories(response.data.histories || []);
    } catch (error) {
      console.error('Error fetching histories:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (filter === 'all') {
      setFilteredHistories(histories);
    } else {
      setFilteredHistories(histories.filter((h) => h.era === filter));
    }
  }, [filter, histories]);

  return (
    <>

      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-header">📚 African History</h1>
          <p className="section-subheader">Discover the rich and diverse histories of our continent.</p>

          <div className="mb-8 flex gap-4 flex-wrap">
            {['all', 'precolonial', 'colonial', 'postindependence', 'modern'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={f === filter ? 'btn-primary' : 'btn-outline'}
              >
                {f === 'all' ? 'All Eras' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="skeleton h-64"></div>
              ))}
            </div>
          ) : filteredHistories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHistories.map((history) => (
                <HistoryCard key={history.id} history={history} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-2xl text-neutral-600">No history records found.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
