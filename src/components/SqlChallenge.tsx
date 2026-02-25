import { ExternalLink } from 'lucide-react';

const SQL_QUERY = `SELECT MAX(t.amount) AS max_amount
FROM transactions t
JOIN applicationid_merchant am
  ON t.merchantid = am.merchantid
WHERE am.applicationid = '77696197005'
  AND t.description LIKE 'M%';`;

const PASTEBIN_URL = 'https://pastebin.com/UYm36cfT';
const MAX_AMOUNT = 10797;
const APPLICATION_ID = '77696197005';

export function SqlChallenge() {
    return (
        <div className="card sql-challenge">
            <div className="sql-challenge-header">
                <div className="sql-badge">SQL</div>
                <h2>Challenge 2 — Query Result</h2>
            </div>

            <div className="sql-meta">
                <span className="sql-meta-item">
                    <span className="sql-meta-label">Application ID</span>
                    <span className="sql-meta-value mono">{APPLICATION_ID}</span>
                </span>
                <span className="sql-divider" />
                <span className="sql-meta-item">
                    <span className="sql-meta-label">Result</span>
                    <span className="sql-result-value">{MAX_AMOUNT.toLocaleString()}</span>
                </span>
            </div>

            <div className="sql-block">
                <div className="sql-block-header">
                    <span className="sql-lang-tag">SQL</span>
                    <a
                        href={PASTEBIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sql-pastebin-link"
                        title="View on Pastebin"
                    >
                        Pastebin <ExternalLink size={12} />
                    </a>
                </div>
                <pre className="sql-code"><code>{SQL_QUERY}</code></pre>
            </div>

            <p className="sql-description">
                MAX <code>amount</code> across all transactions linked to this candidate
                whose <code>description</code> starts with <code>"M"</code>.
            </p>
        </div>
    );
}
