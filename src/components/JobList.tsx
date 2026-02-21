import type { Job } from '../types';
import { JobCard } from './JobCard';

interface JobListProps {
    jobs: Job[];
    isLoadingJobs: boolean;
    jobsError: string;
    submittingJobs: Record<string, boolean>;
    successJobs: Record<string, boolean>;
    jobErrors: Record<string, string>;
    onApply: (jobId: string, repoUrl: string) => void;
    onRetry: () => void;
}

export function JobList({
    jobs,
    isLoadingJobs,
    jobsError,
    submittingJobs,
    successJobs,
    jobErrors,
    onApply,
    onRetry
}: JobListProps) {
    return (
        <div className="card">
            <h2>Open Positions</h2>
            <p>Select a position below, provide your GitHub repository URL containing the test iteration, and submit your application.</p>

            {isLoadingJobs ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                    <span className="loader"></span>
                </div>
            ) : jobsError ? (
                <div className="error-message">
                    ✕ {jobsError}
                    <button style={{ marginLeft: '1rem' }} onClick={onRetry}>Retry</button>
                </div>
            ) : (
                <div className="jobs-list">
                    {jobs.map((job) => (
                        <JobCard
                            key={job.id}
                            job={job}
                            isSubmitting={!!submittingJobs[job.id]}
                            isSuccess={!!successJobs[job.id]}
                            error={jobErrors[job.id]}
                            onApply={onApply}
                        />
                    ))}

                    {jobs.length === 0 && !isLoadingJobs && !jobsError && (
                        <p className="no-jobs-message">No open positions currently available.</p>
                    )}
                </div>
            )}
        </div>
    );
}
