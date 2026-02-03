# FinSec // Fraud Detection Oversight

A cloud-native, real-time fraud monitoring system designed to mimic financial security dashboards used by major institutions.

## 🚀 Live Demo
[Check out the live dashboard here!](https://finsec-dashboard.vercel.app)

## 🛠️ Tech Stack
* **Frontend:** React, Chart.js, CSS3 (Cyberpunk Aesthetic)
* **Backend:** Python (Risk Engine logic)
* **Cloud:** AWS Lambda (Serverless), API Gateway (REST API)
* **Deployment:** Vercel (Frontend Hosting)

## 🧠 How it Works
1. **Simulation:** The React frontend generates mock transaction data representing user credit card "swipes".
2. **Analysis:** This data is sent via a POST request to an AWS Lambda function.
3. **Risk Scoring:** The Python backend calculates a probability score based on transaction magnitude and behavioral variance.
4. **Real-Time Alerting:** If the risk score exceeds 70%, the dashboard triggers a "FRAUD_DETECTED" state, flashing visual alerts.



## 🔒 Security Features
* **CORS Management:** Implemented Cross-Origin Resource Sharing policies in AWS to secure the API against unauthorized origins.
* **Serverless Architecture:** Utilizes AWS Lambda for scalable, event-driven processing.

## 📊 Dataset Reference
The logic for this project is inspired by the **Worldline/Kaggle Credit Card Fraud Dataset**, focusing on the detection of anonymized behavioral features (V1-V28).
