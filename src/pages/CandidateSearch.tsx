import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard.tsx';

const CandidateSearch: React.FC = () => {
  // const [candidate, setCandidate] = useState<Candidate>({
  //   name: '',
  //   login: '',
  //   location: '',
  //   avatar_url: '',
  //   email: '',
  //   company: '',
  //   html_url: '',
  // });
  // const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [candidateIndex, setCandidateIndex] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  // const fetchCandidate = async () => {
  //   try {
  //     // For demonstration we use a hardcoded username ('octocat').
  //     // In a full solution, implement logic to get the next candidate.
  //     const data: Candidate = await searchGithubUser('octocat');
  //     setCandidate(data);
  //   } catch (err: any) {
  //     setError(err.message);
  //   }
  // };

  const fetchCandidates = async () => {
    try {
      // For demonstration we use a hardcoded username ('octocat').
      // In a full solution, implement logic to get the next candidate.
      const data: Candidate[] = await searchGithub();
      setCandidates(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  // const searchCandidate = async (username: string) => {
  //   try {
  //     const data: Candidate = await searchGithubUser(username);
  //     // setCandidates((prev) => [...prev, data]);
  //     setCandidate(data);
  //   } catch (err: any) {
  //     setError(err.message);
  //   }
  // }

  useEffect(() => {
    fetchCandidates();
    // searchCandidate(candidates[candidateIndex].login || '');
  }, []);

  // Save candidate and load next candidate
  const handleAccept = () => {
    if (candidates[candidateIndex]) {
      const storedCandidates = JSON.parse(
        localStorage.getItem('potentialCandidates') || '[]'
      );
      storedCandidates.push(candidates[candidateIndex]);
      localStorage.setItem('potentialCandidates', JSON.stringify(storedCandidates));
      // fetchCandidate();
      setCandidateIndex(candidateIndex + 1);
      // setCandidate(candidates[candidateIndex]);
    }
  };

  // Load next candidate without saving
  const handleReject = () => {
    // fetchCandidate();
    setCandidateIndex(candidateIndex + 1);
    // setCandidate(candidates![candidateIndex]);
  };

  // if (error) return <p>Error: {error}</p>;
  if (error) {
    console.log(error);
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={fetchCandidates}>Retry</button>
      </div>
    );
  }
  if (!candidates[candidateIndex]) {
    return <p>Loading candidate...</p>;
  }

  return (
    <div>
      {candidates[candidateIndex] && <CandidateCard candidate={candidates[candidateIndex]} />}
      <div className="actions">
        <button onClick={handleReject}>-</button>
        <button onClick={handleAccept}>+</button>
      </div>
    </div>
  );
};

export default CandidateSearch;