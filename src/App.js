import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

// Ensure this matches your API Gateway Endpoint exactly
const API_URL = "https://mwyvlvvc58.execute-api.us-east-2.amazonaws.com/default/FinSec-Processor";

export default function App() {
  const [history, setHistory] = useState([0]);
  const [lastStatus, setLastStatus] = useState("INITIALIZING...");

  const fetchScan = async () => {
    try {
      // Generate mock transaction data for simulation
      const mockTx = { 
        Amount: Math.floor(Math.random() * 2000), 
        V1: (Math.random() * 10 - 5).toFixed(2) 
      };
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mockTx)
      });
      
      const data = await response.json();
      
      // AWS bodies are stringified; we parse it here to extract the score
      const result = typeof data.body === 'string' ? JSON.parse(data.body) : data;

      if (result.risk_score !== undefined) {
        setHistory(prev => [...prev.slice(-19), result.risk_score]);
        setLastStatus(result.status);
      }
    } catch (err) {
      console.error("Link Failure:", err);
      setLastStatus("OFFLINE");
    }
  };

  useEffect(() => {
    const timer = setInterval(fetchScan, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#050505', color: '#00F0FF', minHeight: '100vh', padding: '2rem', fontFamily: 'monospace' }}>
      <header style={{ borderBottom: '2px solid #00F0FF', marginBottom: '2rem' }}>
        <h1>FINSEC // FRAUD_DETECTION_OVERSIGHT</h1>
        <p>NODE_PRISHA_01 // AMHERST_MA // AWS_CLOUD_CONNECTED</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
        <div style={{ border: '1px solid #00F0FF', padding: '20px' }}>
          <h3>SYSTEM_STATUS</h3>
          <h2 style={{ color: lastStatus === "FRAUD_DETECTED" ? "#FF003C" : "#00F0FF" }}>
            {lastStatus}
          </h2>
          <hr style={{ borderColor: '#00F0FF' }} />
          <p>> ANALYZING_VECTORS...</p>
          <p>> LATENCY: 24ms</p>
          <p>> SECURITY: CORS_ENABLED</p>
        </div>

        <div style={{ border: '1px solid #00F0FF', padding: '20px', background: 'rgba(0, 240, 255, 0.05)' }}>
          <h3>REAL_TIME_RISK_INDEX</h3>
          <Line 
            key={history.length} 
            data={{
              labels: new Array(history.length).fill(''),
              datasets: [{
                label: 'Risk Score',
                data: history,
                borderColor: '#00F0FF',
                backgroundColor: 'rgba(0, 240, 255, 0.2)',
                fill: true,
                tension: 0.3
              }]
            }} 
            options={{ 
              scales: { y: { min: 0, max: 100, ticks: { color: '#00F0FF' } } } 
            }} 
          />
        </div>
      </div>

      <div style={{ marginTop: '20px', border: '1px solid #FF003C', padding: '20px' }}>
        <h3 style={{ color: '#FF003C' }}>FRAUD_ALERTS_LOG</h3>
        <ul style={{ color: '#FF003C', listStyleType: 'none', padding: 0 }}>
          {history.map((score, i) => score > 70 && (
            <li key={i}>> ALERT: High Risk Transaction Detected (Score: {score}) at {new Date().toLocaleTimeString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}