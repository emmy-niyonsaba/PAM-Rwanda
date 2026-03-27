import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OpportunityCard from '../components/OpportunityCard';
import { opportunityService } from '../services/api';

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] = useState([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = async () => {
    try {
      setLoading(true);
      const response = await opportunityService.getOpportunities();
      setOpportunities(response.data.opportunities || []);
      setFilteredOpportunities(response.data.opportunities || []);
    } catch (error) {
      console.error('Error fetching opportunities:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (filter === 'all') {
      setFilteredOpportunities(opportunities);
    } else {
      setFilteredOpportunities(opportunities.filter((o) => o.type === filter));
    }
  }, [filter, opportunities]);

  return (
    <>

      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-header">🚀 Opportunities in Africa</h1>
          <p className="section-subheader">Build your future on the African continent. Jobs, scholarships, startups, and investments.</p>

          <div className="mb-8 flex gap-4 flex-wrap">
            {['all', 'job', 'scholarship', 'startup', 'investment'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={f === filter ? 'btn-primary' : 'btn-outline'}
              >
                {f === 'all' ? 'All Opportunities' : f.charAt(0).toUpperCase() + f.slice(1) + 's'}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="skeleton h-64"></div>
              ))}
            </div>
          ) : filteredOpportunities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredOpportunities.map((opp) => (
                <OpportunityCard key={opp.id} opportunity={opp} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-2xl text-neutral-600">No opportunities found for this category.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
