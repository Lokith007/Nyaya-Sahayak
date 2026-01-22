# Contributing to Nyaya-Sahayak

First off, thank you for considering contributing to **Nyaya-Sahayak**! 🇮🇳

We are an open-source project dedicated to **democratizing access to justice**. Every line of code, new legal template, or language translation you add directly helps a citizen exercise their rights.

## 🤝 Ways to Contribute

We welcome contributions in the following areas:

### 1. 🏛️ Legal Engineering (High Priority)
* **Add New Templates:** We need accurate JSON schemas for more legal documents (e.g., Employment Contracts, Divorce Petitions, Motor Accident Claims).
* **Legal Validation:** If you are a law student or lawyer, review our generated drafts for compliance with the latest Indian statutes.

### 2. 🗣️ Language & Localization
* **Translation:** Help us translate the UI and legal explanations into more Indian languages (Kannada, Bengali, Marathi, etc.).
* **Voice Optimization:** Improve the speech-to-text integration for regional accents.

### 3. 💻 Code & Features
* **Frontend:** Improve accessibility (A11y), responsive design, or add new visualizations for the "Evidence Vault".
* **Backend:** Optimize the RAG (Retrieval-Augmented Generation) pipeline for faster legal queries.
* **OCR:** Improve the extraction accuracy for blurry or handwritten documents.

---

## 🚀 Getting Started

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** locally:
    ```bash
    git clone https://github.com/Lokith007/Nyaya-Sahayak
    ```
3.  **Create a branch** for your feature or fix:
    ```bash
    git checkout -b feature/amazing-feature
    # or
    git checkout -b fix/critical-bug
    ```

---

## 📂 Project Structure

* `client/`: Next.js Frontend code.
* `server/`: Python Backend (API & AI Logic).
* `data/`:
    * `legal_texts/`: Cleaned text files of Acts (IPC, Consumer Protection).
    * `templates/`: JSON schemas for the Auto-Drafting Engine.
    * `red_flags/`: Dataset of illegal clauses for the Document Decoder.

---

## ✅ Pull Request Process

1.  **Update Documentation:** If you change any API or Feature, please update the README.
2.  **Test Your Code:** Ensure the frontend builds without errors and the backend handles requests correctly.
3.  **Legal Disclaimer:** If adding a new legal feature, ensure it includes the standard disclaimer: *"This is an AI tool for information, not a substitute for a lawyer."*
4.  **Submit PR:** Open a Pull Request to the `main` branch. Describe your changes clearly.

## 📜 Code of Conduct

This project is intended to be a safe, welcoming space for collaboration. We expect everyone to adhere to basic standards of professional and respectful behavior.

## ❓ Questions?
If you have questions or want to discuss a new feature before building it, please open an **Issue** with the tag `discussion`.

---
**Thank you for helping us build a shield for the common citizen! 🛡️**
