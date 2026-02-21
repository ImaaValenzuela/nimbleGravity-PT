import { useState } from 'react';
import { fetchCandidateByEmail } from '../api';
import type { Candidate } from '../types';

export function useCandidate() {
    const [candidate, setCandidate] = useState<Candidate | null>(null);
    const [isConnecting, setIsConnecting] = useState(false);
    const [authError, setAuthError] = useState('');

    const connect = async (email: string) => {
        if (!email) return false;

        setIsConnecting(true);
        setAuthError('');
        try {
            const data = await fetchCandidateByEmail(email);
            setCandidate(data);
            return true;
        } catch (err: any) {
            setAuthError(err.message || 'Failed to connect');
            return false;
        } finally {
            setIsConnecting(false);
        }
    };

    const disconnect = () => {
        setCandidate(null);
        setAuthError('');
    };

    return {
        candidate,
        isConnecting,
        authError,
        connect,
        disconnect
    };
}
