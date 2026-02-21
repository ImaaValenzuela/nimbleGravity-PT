import { useState } from 'react';
import { MailIcon } from './Icons';

interface ConnectFormProps {
    onConnect: (email: string) => void;
    isConnecting: boolean;
    authError: string;
}

export function ConnectForm({ onConnect, isConnecting, authError }: ConnectFormProps) {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onConnect(email);
    };

    return (
        <div className="container">
            <div className="card">
                <h1>Nimble Gravity</h1>
                <p>
                    Enter your candidate email to fetch your application details and begin the technical test.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Candidate Email</label>
                        <div className="form-group row">
                            <input
                                id="email"
                                type="email"
                                placeholder="jane.doe@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isConnecting}
                            />
                        </div>
                    </div>
                    {authError && <div className="error-message">✕ {authError}</div>}

                    <button type="submit" className="submit-btn" disabled={isConnecting || !email}>
                        {isConnecting ? <span className="loader"></span> : <><MailIcon /> Get Started</>}
                    </button>
                </form>
            </div>
        </div>
    );
}
