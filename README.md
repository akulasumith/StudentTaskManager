# 📋 Student Task Manager

A Full Stack Task Management Application built using HTML, CSS, JavaScript, FastAPI, and MongoDB Atlas.

## 🚀 Features

### Authentication

* User Signup
* User Login
* Secure Logout
* Password Hashing using bcrypt

### Task Management

* Add Tasks
* Delete Tasks
* Mark Tasks as Completed
* View Pending Tasks
* View Completed Tasks

### Productivity Features

* Task Priority (High, Medium, Low)
* Due Date Tracking
* Search Tasks
* Priority-Based Sorting
* Dashboard Statistics

### User Interface

* Responsive Sidebar Navigation
* Modern Dark Theme
* Profile Page
* Google Sign-In Button (Coming Soon)

---

## 🛠 Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* FastAPI
* Python

### Database

* MongoDB Atlas
* PyMongo

### Security

* bcrypt Password Hashing

---

## 📂 Project Structure

StudentTaskManager/

├── frontend/

│ ├── login.html

│ ├── signup.html

│ ├── dashboard.html

│ ├── tasks.html

│ ├── completed.html

│ ├── profile.html

│ ├── css/

│ └── js/

│

├── backend/

│ ├── main.py

│ ├── database.py

│ ├── models/

│ ├── routes/

│ └── requirements.txt

│

└── README.md

---

## ⚙️ Installation

### Clone Repository

```bash
git clone _REPOSITORY_URL
cd StudentTaskManager
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Database Setup

This project uses MongoDB Atlas as the cloud database.

1. Create a MongoDB Atlas Cluster.
2. Obtain your MongoDB Atlas Connection String.
3. Add the connection string in `database.py`.
4. Ensure your IP Address is whitelisted in MongoDB Atlas.

Example:

```python
MONGO_URI = "_mongodb_atlas_connection_string"
```

### Run Backend

```bash
uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs

---

## 🔒 Security Features

* Password Hashing using bcrypt
* User-Specific Task Storage
* Protected Routes
* Secure Authentication

---

## 🎯 Future Enhancements

* Google OAuth Authentication
* JWT Authentication
* Edit Tasks
* Email Notifications
* Cloud Deployment
* Task Categories

---

## 👨‍💻 Author

**Akula Sumith**

Developed as a Full Stack Web Application using FastAPI, MongoDB Atlas, and JavaScript.
