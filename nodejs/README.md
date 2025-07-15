# Lambda EC2 Control – Node.js

This directory contains AWS Lambda functions written in **Node.js 18** to manage EC2 instances. It includes scripts to:  

- **Start** EC2 instances
- **Stop** EC2 instances
- **Reboot** EC2 instances

These functions are designed for lightweight automation of EC2 management tasks using Lambda.

---

## 📦 Setup Instructions

Before deploying any of the functions, ensure that the required dependencies are installed locally.

### 🧩 Install Dependencies

Run the following command in the respective function directory to install the AWS SDK:

```bash
npm install aws-sdk
