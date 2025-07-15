# Lambda EC2 Control

A practical solution for managing your EC2 instances directly from AWS Lambda. This repository provides ready-to-use Lambda functions for **starting**, **stopping**, and **rebooting** EC2 instances, implemented in both **Node.js 18** and **Python 3.9**.

Whether you are aiming to optimize AWS costs or automate infrastructure tasks, this project is designed to help you achieve it efficiently and reliably.

---

## 📌 Overview

This project enables you to:

- Start EC2 instances programmatically
- Stop EC2 instances when not in use
- Reboot EC2 instances as part of scheduled maintenance

It is ideal for developers and DevOps engineers who require lightweight automation without unnecessary complexity.

---

## 📂 Repository Structure


Each folder contains Lambda functions for the respective programming language, organized by action (**start**, **stop**, **reboot**).

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

## 🙌 Contributors

Please refer to the [CONTRIBUTORS.md](./nodejs/CONTRIBUTORS.md) file for references and acknowledgments.

---

## 📖 Additional Resources

- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [Amazon EventBridge Documentation](https://docs.aws.amazon.com/eventbridge/latest/userguide/what-is-amazon-eventbridge.html)

---

## 📜 License

This project is licensed under the MIT License.
