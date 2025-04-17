// src/pages/SavedCandidates.tsx
import React, { useState, useEffect } from 'react';
// import CandidateCard from '../components/CandidateCard';
import { Candidate } from '../interfaces/Candidate.interface';
import { SavedCandidateCard } from '../components/SavedCandidateCard';

const SavedCandidates: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [filterText, setFilterText] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');

  useEffect(() => {
    const saved: Candidate[] = JSON.parse(
      localStorage.getItem('potentialCandidates') || '[]'
    );
    setCandidates(saved);
  }, []);

  // const filteredCandidates = candidates.filter((candidate) =>
  //   candidate?.name.toLowerCase().includes(filterText.toLowerCase()) ||
  //   candidate.login.toLowerCase().includes(filterText.toLowerCase()) ||
  //   (candidate.company && candidate.company.toLowerCase().includes(filterText.toLowerCase())) ||
  //   (candidate.location && candidate.location.toLowerCase().includes(filterText.toLowerCase()))
  // );

  // const sortedCandidates = [...filteredCandidates].sort((a, b) => {
  //   if (sortOption === 'name') {
  //     return a.name.localeCompare(b.name);
  //   } else if (sortOption === 'location') {
  //     return a.location.localeCompare(b.location);
  //   }
  //   return 0;
  // });

  return (
    <>
      <h1>Potential Candidates</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Filter candidates"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="location">Location</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Username</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
      {candidates.length > 0 ? (
        candidates.map((candidate, index) => (
          <SavedCandidateCard key={index} candidate={candidate} />
        ))
      ) : (
        <p>No candidates found.</p>
      )}
      </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
