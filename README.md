# 🚀 DevOps Assignment 2 – AWS Compute, Networking & Database Integration

---

## 📌 Objective

Build a REST API, connect it to an AWS RDS database, containerize it using Docker, and deploy it securely on an AWS EC2 instance.

The EC2 instance communicates privately with the RDS database using AWS Security Groups.

---

# 🌐 Live Deployment (Public URL)

## 🔗 Public EC2 URL

http://ec2-100-55-7-244.compute-1.amazonaws.com

---

# 🔧 Environment Variable Configuration

---

## Step 1: Create RDS (MySQL) Database

- Go to AWS Console → RDS → Create Database
- Choose **MySQL** as the engine
- Select appropriate instance type (Free tier if applicable)
- Set:
  - DB Instance Identifier
  - Master Username
  - Master Password
- Disable Public Access (Important for security)
- Place RDS in the same VPC as EC2
- Configure Security Group:
  - Allow MySQL (Port 3306)
  - Source → EC2 Security Group

After creation, copy the **RDS Endpoint** (this will be your `DB_HOST`).

---

## Step 2: Create EC2 Instance

- Launch an EC2 instance (Amazon Linux)
- Allow HTTP (Port 80) in Security Group
- Attach a key pair for SSH access
- Ensure EC2 is in the same VPC as RDS
- EC2 Security Group:
  - Allow HTTP (80) from Anywhere

---

## Step 3: SSH into EC2

```bash
ssh -i <your-key.pem> ec2-user@<EC2_PUBLIC_IP>
```

---

## Step 4: Configure Environment Variables on EC2

Edit the `.bashrc` file:

```bash
nano ~/.bashrc
```

Add the following at the bottom (replace values accordingly):

```bash
export DB_HOST=<RDS_ENDPOINT>
export DB_USER=<DB_USERNAME>
export DB_PASSWORD=<DB_PASSWORD>
export DB_NAME=<DB_NAME>
```

Apply the changes:

```bash
source ~/.bashrc
```

Verify:

```bash
env | grep DB_
```

---

# ▶️ Running the Application on EC2

## Step 1: Clone the Repository

```bash
git clone https://github.com/AlthafMuhammad2115/aws-node-api.git
cd aws-node-api
```

---

## Step 2: Run Using Docker Compose

```bash
docker compose up -d --build
```

This command will:

- Build the Docker image
- Create the container
- Pass environment variables
- Run the container in detached mode

The API is now running and accessible publicly.

---

# 🔐 Authorization Requirement

All API requests must include the following header:

```
Authorization: pay3-assignment
```

Requests without this header will return:

```
401 Unauthorized
```

---

# 📡 API Endpoints

---

## 1️⃣ Create Entry

### Endpoint

```
POST /create
```

### curl Request

```bash
curl -X POST http://ec2-100-55-7-244.compute-1.amazonaws.com/create \
-H "Authorization: pay3-assignment" \
-H "Content-Type: application/json" \
-d '{"name":"sample-value"}'
```

---

## 2️⃣ List All Entries

### Endpoint

```
GET /list
```

### curl Request

```bash
curl -X GET http://ec2-100-55-7-244.compute-1.amazonaws.com/list \
-H "Authorization: pay3-assignment"
```

---


# 📸 Screenshots

The following screenshots are included in the repository to prove successful operation:

• POST /create API response  
Shows successful insertion of data  

• GET /list API response  
Shows data retrieved from database  

• AWS RDS MySQL Table Output  
Shows the same data present in the sample table  

---

# 🔐 Security Implementation

✔ EC2 → RDS communication via Security Groups  
✔ RDS is NOT publicly accessible  
✔ Database credentials stored as environment variables  
✔ Authorization header validation implemented  
✔ Docker Compose containerized deployment  

---

# 🛠 Tech Stack

- Node.js  
- Express.js  
- MySQL  
- Docker  
- Docker Compose  
- AWS EC2  
- AWS RDS  
- Amazon Linux  

---

# 📦 Summary

This project demonstrates:

- REST API development  
- Docker containerization using Docker Compose  
- Secure AWS EC2 deployment  
- Private AWS RDS integration   
- API Authorization implementation  

---
