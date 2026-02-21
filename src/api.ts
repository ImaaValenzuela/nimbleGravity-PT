import type { Candidate, Job, ApplyBody } from './types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchCandidateByEmail(email: string): Promise<Candidate> {
    const response = await fetch(`${BASE_URL}/api/candidate/get-by-email?email=${encodeURIComponent(email)}`);
    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Candidate not found or invalid email');
    }
    return response.json();
}

export async function fetchJobs(): Promise<Job[]> {
    const response = await fetch(`${BASE_URL}/api/jobs/get-list`);
    if (!response.ok) {
        throw new Error('Failed to fetch jobs');
    }
    return response.json();
}

export async function applyToJob(body: ApplyBody): Promise<{ ok: boolean }> {
    const response = await fetch(`${BASE_URL}/api/candidate/apply-to-job`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Failed to submit application');
    }

    return response.json();
}
