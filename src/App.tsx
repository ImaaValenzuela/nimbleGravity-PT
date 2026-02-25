import { useEffect } from 'react';
import { useCandidate } from './hooks/useCandidate';
import { useJobs } from './hooks/useJobs';

import { ConnectForm } from './components/ConnectForm';
import { HeaderProfile } from './components/HeaderProfile';
import { JobList } from './components/JobList';
import { SqlChallenge } from './components/SqlChallenge';
import { SignatureCredits } from './components/SignatureCredits';


export default function App() {
  const { candidate, isConnecting, authError, connect } = useCandidate();
  const {
    jobs,
    isLoadingJobs,
    jobsError,
    loadJobs,
    submittingJobs,
    successJobs,
    jobErrors,
    handleApply
  } = useJobs(candidate);

  useEffect(() => {
    if (candidate) {
      loadJobs();
    }
  }, [candidate, loadJobs]);

  if (!candidate) {
    return (
      <>
        <ConnectForm
          onConnect={connect}
          isConnecting={isConnecting}
          authError={authError}
        />
        <SignatureCredits />
      </>
    );
  }

  return (
    <>
      <div className="container">
        <HeaderProfile candidate={candidate} />

        <JobList
          jobs={jobs}
          isLoadingJobs={isLoadingJobs}
          jobsError={jobsError}
          submittingJobs={submittingJobs}
          successJobs={successJobs}
          jobErrors={jobErrors}
          onApply={handleApply}
          onRetry={loadJobs}
        />

        <SqlChallenge />
      </div>
      <SignatureCredits />
    </>
  );
}
