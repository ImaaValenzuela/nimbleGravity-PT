import type { Candidate } from '../types';

interface HeaderProfileProps {
    candidate: Candidate;
}

export function HeaderProfile({ candidate }: HeaderProfileProps) {
    return (
        <div className="header-profile" title="Candidate Profile connected">
            <div className="avatar">
                {candidate.firstName.charAt(0).toUpperCase()}
                {candidate.lastName.charAt(0).toUpperCase()}
            </div>
            <div className="profile-info">
                <h3>{candidate.firstName} {candidate.lastName}</h3>
                <p>{candidate.email} • ID: {candidate.candidateId}</p>
            </div>
        </div>
    );
}
