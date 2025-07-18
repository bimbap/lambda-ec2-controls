# Lambda EC2 Control Templates

A practical solution for managing your EC2 instances directly from AWS Lambda. This repository provides ready-to-use Lambda functions for **starting**, **stopping**, and **rebooting** EC2 instances, implemented in both **Node.js 18** and **Python 3.9**.

Whether you are aiming to optimize AWS costs or automate infrastructure tasks, this project is designed to help you achieve it efficiently and reliably.

---

## 📌 Overview

This project provides Lambda functions to:

- Start EC2 instances programmatically when triggered
- Stop EC2 instances to reduce costs during idle times
- Reboot EC2 instances as part of your maintenance workflow

These functions are executed **manually** when invoked through AWS Lambda. For automation (e.g., scheduling start/stop tasks), you can integrate them with services like Amazon EventBridge.

It is ideal for developers and DevOps engineers who want lightweight EC2 management tools without unnecessary complexity.

---

## ⚙️ How It Works

1. Deploy the Lambda function (choose between Node.js and Python).
2. Link it to an **Amazon EventBridge rule** to schedule EC2 actions.
3. Ensure your Lambda function is assigned an IAM role with the necessary EC2 permissions.

This setup automates EC2 management tasks directly from AWS Lambda, reducing manual intervention and improving operational efficiency.

---

## 📋 Prerequisites

To use this project, you will need:

- An AWS Account
- Basic understanding of AWS Lambda and EventBridge
- IAM Role with EC2 permissions:
  - `ec2:StartInstances`
  - `ec2:StopInstances`
  - `ec2:RebootInstances`

---

## 📜 License

This project is licensed under the MIT License.
