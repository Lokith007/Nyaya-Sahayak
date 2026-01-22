# ⚖️ Nyaya-Sahayak (The AI Legal First Responder)

> **Democratizing Access to Justice for Every Indian Citizen.**

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Status: Prototype](https://img.shields.io/badge/Status-Hackathon%20MVP-orange)
![Tech Stack](https://img.shields.io/badge/Tech-Next.js%20%7C%20Python%20%7C%20RAG-green)

## 🇮🇳 The Problem: "The Justice Gap"
In India, **90% of citizens** fail to exercise their basic legal rights due to three paralyzing barriers:
1.  **Complexity:** Laws are written in "Legalese" that common people cannot understand.
2.  **Cost:** Hiring a lawyer for small disputes (Consumer fraud, Challans, Rent) is often more expensive than the dispute itself.
3.  **Language:** The system operates in English, excluding the vast majority of the population.

## 💡 The Solution
**Nyaya-Sahayak** is a multilingual, AI-powered "Legal First Responder." It is not just a chatbot; it is an **execution engine**.
It empowers citizens to:
* **Understand** rights in their local language (Hindi/Tamil/English).
* **Decode** complex documents (Challans, Notices) instantly via OCR.
* **Act** by automatically drafting legal notices, complaints, and RTI applications.

---

## 🚀 Key Features

### 1. 🗣️ The "Rights Whisperer" (Voice-First AI)
* **What it does:** Breaks the literacy barrier. Users speak in their local dialect (e.g., "My landlord won't return my deposit").
* **How:** Powered by **Bhashini / Google Speech APIs**.
* **Output:** Explains rights simply and suggests the next legal step.

### 2. 📄 Smart Document Decoder & Red Flag Scanner
* **What it does:** Users upload a photo of a Legal Notice, Rent Agreement, or Traffic Challan.
* **How:** **OCR (Tesseract/Vision API)** extracts text -> **AI Analysis** finds "Red Flags" (e.g., illegal eviction clauses, inflated fines).

### 3. ✍️ Auto-Drafting Engine
* **What it does:** Converts intent into action.
* **Output:** Generates ready-to-print **PDFs**:
    * Consumer Court Complaints (Form 1).
    * Legal Notices for Security Deposit Recovery.
    * RTI (Right to Information) Applications.

### 4. 🚨 Cyber-Sanjeevani (Panic Mode)
* **What it does:** Rapid response for digital fraud.
* **How:** Extracts Transaction ID/Fraudster UPI from a screenshot.
* **Output:** Generates the exact text required for the **1930 National Cyber Crime Helpline**.

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | Next.js, Tailwind CSS, Lucide React |
| **Backend** | Python (Flask/FastAPI) |
| **AI/LLM** | LangChain, OpenAI GPT-4 / Gemini (via API) |
| **Database** | Vector DB (ChromaDB/Pinecone) for RAG |
| **OCR** | Tesseract / Google Cloud Vision |
| **Voice** | Bhashini API / Web Speech API |

---

## 💻 Installation & Setup

### Prerequisites
* Node.js (v18+)
* Python (v3.9+)
* API Keys (OpenAI/Gemini, etc.)

