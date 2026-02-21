import { useState, useCallback } from 'react';
import { fetchJobs, applyToJob } from '../api';
import type { Job, Candidate } from '../types';

export function useJobs(candidate: Candidate | null) {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [isLoadingJobs, setIsLoadingJobs] = useState(false);
    const [jobsError, setJobsError] = useState('');

    const [submittingJobs, setSubmittingJobs] = useState<Record<string, boolean>>({});
    const [successJobs, setSuccessJobs] = useState<Record<string, boolean>>({});
    const [jobErrors, setJobErrors] = useState<Record<string, string>>({});

    const loadJobs = useCallback(async () => {
        setIsLoadingJobs(true);
        setJobsError('');
        try {
            const data = await fetchJobs();
            setJobs(data);
        } catch (err: any) {
            setJobsError(err.message || 'Failed to fetch jobs');
        } finally {
            setIsLoadingJobs(false);
        }
    }, []);

    const handleApply = async (jobId: string, repoUrl: string) => {
        if (!candidate) return;

        setJobErrors(prev => ({ ...prev, [jobId]: '' }));

        const appliedJobId = localStorage.getItem(`applied_${candidate.email}`);
        if (appliedJobId) {
            setJobErrors(prev => ({
                ...prev,
                [jobId]: appliedJobId === jobId
                    ? 'You have already applied to this position'
                    : 'You have already applied for a job application. Only one application is allowed.'
            }));
            return;
        }

        if (!repoUrl) {
            setJobErrors(prev => ({ ...prev, [jobId]: 'Please provide a GitHub repository URL' }));
            return;
        }

        setSubmittingJobs(prev => ({ ...prev, [jobId]: true }));

        try {
            await applyToJob({
                uuid: candidate.uuid,
                jobId: jobId,
                candidateId: candidate.candidateId,
                applicationId: candidate.applicationId,
                repoUrl: repoUrl
            });
            localStorage.setItem(`applied_${candidate.email}`, jobId);
            setSuccessJobs(prev => ({ ...prev, [jobId]: true }));
        } catch (err: any) {
            if (err.message?.toLowerCase().includes('already') || err.message?.toLowerCase().includes('aplicado')) {
                localStorage.setItem(`applied_${candidate.email}`, jobId);
            }
            setJobErrors(prev => ({ ...prev, [jobId]: err.message || 'Application failed' }));
        } finally {
            setSubmittingJobs(prev => ({ ...prev, [jobId]: false }));
        }
    };

    return {
        jobs,
        isLoadingJobs,
        jobsError,
        loadJobs,
        submittingJobs,
        successJobs,
        jobErrors,
        handleApply
    };
}
