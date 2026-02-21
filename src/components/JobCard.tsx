import { useState } from 'react';
import type { Job } from '../types';
import { SendIcon, CheckIcon } from './Icons';

interface JobCardProps {
    job: Job;
    isSubmitting: boolean;
    isSuccess: boolean;
    error?: string;
    onApply: (jobId: string, repoUrl: string) => void;
}

export function JobCard({ job, isSubmitting, isSuccess, error, onApply }: JobCardProps) {
    const [repoUrl, setRepoUrl] = useState('');

    const handleApplyClick = () => {
        onApply(job.id, repoUrl);
    };

    return (
        <div className="job-card">
            <div className="job-header">
                <div className="job-title">{job.title}</div>
                <div className="job-id">#{job.id}</div>
            </div>

            {isSuccess ? (
                <div className="success-message">
                    <CheckIcon /> Application Submitted Successfully!
                </div>
            ) : (
                <div className="form-group">
                    <label>GitHub Repository URL</label>
                    <div className="form-group row" style={{ marginTop: 0 }}>
                        <input
                            type="url"
                            placeholder="https://github.com/your-user/your-repo"
                            value={repoUrl}
                            onChange={(e) => setRepoUrl(e.target.value)}
                            disabled={isSubmitting}
                            required
                        />
                        <button
                            type="button"
                            onClick={handleApplyClick}
                            disabled={isSubmitting || !repoUrl}
                            title="Submit application"
                        >
                            {isSubmitting ? <span className="loader"></span> : <SendIcon />}
                        </button>
                    </div>
                    {error && <div className="error-message">✕ {error}</div>}
                </div>
            )}
        </div>
    );
}
