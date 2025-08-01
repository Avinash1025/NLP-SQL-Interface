# 💬 AskDB: AI-Powered Natural Language Interface for SQL Databases

AskDB is a chatbot-style web application that allows users to query relational databases using natural language—no SQL skills required! Powered by Large Language Models (LLMs) like LLaMA-3 and built on a secure, scalable backend, AskDB bridges the gap between humans and databases using natural language.


---

## 🚀 Key Features

- 🔍 **Natural Language to SQL Translation** using LLaMA-3 (via Groq API)
- 🗃️ **Dynamic Schema Detection** using SQLAlchemy
- 🌐 **Chatbot Interface** with real-time feedback
- 📊 **Interactive Results** with table and chart views (Chart.js, PyVis)
- 🔐 **Rate Limiting & Security** with Flask-Limiter and Cerberus
- 🧠 **Embedding Support** via Ollama & `nomic-embed-text` model
- 📦 **Modular Flask Backend** and responsive HTML/CSS/JS Frontend

---

## 🧰 Tech Stack

| Layer       | Technologies Used |
|-------------|-------------------|
| **Backend** | Flask, SQLAlchemy, python-dotenv, Cerberus, Flask-Limiter |
| **LLM**     | Llama Index, Groq API (`llama3-8b-8192`), LangChain |
| **Embeddings** | Ollama + `nomic-embed-text` |
| **Frontend**| HTML5, Tailwind CSS, Vanilla JavaScript |
| **Database**| SQLite / PostgreSQL / MySQL |
| **Visualization** | Chart.js, PyVis |
| **DevOps**  | Docker, Postman, pytest |

---

## 📁 Project Structure

```
├── config/
│ └── config.yml # YAML configuration for server, models, etc.
├── resources/
│ ├── data/ # Folder containing table CSV files
│ └── Database.db # SQLite DB generated from the data
├── src/
│ ├── init.py
│ ├── pipeline_modules.py # Query construction modules
│ ├── pipeline.py # Core LLM + SQL workflow
│ ├── prompt.py # Prompt templates
│ ├── run_api.py # LLM & DB interaction API logic
│ ├── settings.py # LlamaIndex + embedding setup
│ └── utility.py # Helpers like DB creation, schema loaders
├── static/ # CSS, JS, and client assets
├── templates/
│ └── index.html # Chatbot frontend
├── .env # Stores GROQ_API_KEY etc.
├── .gitignore
├── app.py # Flask app entry point
├── LICENSE
├── README.md
└── requirements.txt
```
---

## 🧪 Sample Query Flow

- **User Input:** "Show me the names of all employees in the Sales department"
- **Backend:** Prompt passed to Groq's LLaMA-3 model
- **LLM Response:** SQL generated → SELECT name FROM employees WHERE department = 'Sales';
- **Execution:** SQLAlchemy executes the query on Database.db
- **Response:** Human-readable output + visual representation returned to UI

---

## 🌟 Future Enhancements
- **🎙️ Voice-based queries**
- **🔐 Role-based access and authentication**
- **📊 Auto visualization of SQL result sets**
- **🧵 Multi-turn context-aware chat**
- **📚 NoSQL and cloud DB integration**

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/avinashgour/askdb.git
cd askdb
```

---