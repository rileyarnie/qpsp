
## Quest Dashboard

A React + TypeScript + Vite dashboard that visualises a learner’s readiness across multiple skill areas using dummy JSON data and TanStack Router/Query.

---

### How to install and run the app locally

- **Clone the repository**:

  ```bash
  git https://github.com/rileyarnie/qpsp.git
  ```

- **Requirements**: Node 18+ (recommended), npm.
- **Install dependencies**:

  ```bash
  npm install
  ```

- **Run in development**:

  ```bash
  npm run dev
  ```

  Then open the printed `http://localhost:5173`.

- **Build for production**:

  ```bash
  npm run build
  ```

---

### Project structure

```text

src/
├─ main.tsx
├─ App.tsx
├─ App.css
├─ index.css
├─ routeTree.gen.ts
├─ assets/
│  ├─ logo-vertical-coloured-blue.svg
│  └─ react.svg
├─ components/
│  ├─ app-sidebar.tsx
│  ├─ dashboard.tsx
│  ├─ nav-projects.tsx
│  ├─ nav-user.tsx
│  ├─ overall-readiness.tsx
│  ├─ insights/
│  │  ├─ insights-list.tsx
│  │  ├─ key-insight.tsx
│  │  └─ key-recommendation.tsx
│  ├─ skills/
│  │  ├─ skill-card.tsx
│  │  └─ skill-card-skeleton.tsx
│  └─ ui/
│     ├─ avatar.tsx
│     ├─ badge.tsx
│     ├─ breadcrumb.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ chart.tsx
│     ├─ collapsible.tsx
│     ├─ dropdown-menu.tsx
│     ├─ input.tsx
│     ├─ progress.tsx
│     ├─ separator.tsx
│     ├─ sheet.tsx
│     ├─ sidebar.tsx
│     ├─ skeleton.tsx
│     ├─ tabs.tsx
│     └─ tooltip.tsx
├─ context/
│  ├─ UserContext.tsx
│  └─ UserProvider.tsx
├─ data/
│  ├─ insights-data.json
│  ├─ skills-data.json
│  └─ user-data.json
├─ hooks/
│  └─ use-mobile.ts
├─ lib/
│  ├─ insights.ts
│  ├─ skills.ts
│  └─ utils.ts
├─ routes/
│  ├─ __root.tsx
│  ├─ detail.tsx
│  ├─ index.tsx
│  └─ overview.tsx
└─ types/
  ├─ types.ts
  └─ user.ts
```
---

### Dummy data format 

All dummy data lives in `src/data` and is consumed via small “lib” helpers and React Query or context.

- **Skills data – `skills-data.json`**

  ```json
  {
    "skills": [
      {
        "id": "academic_skills",
        "score": 80,
        "label": "Academics",
        "description": "Your academic performance and subject knowledge",
        "recommendations": [
          "Continue excelling in your coursework",
          "Explore advanced topics in your strongest subjects",
          "Consider tutoring others to reinforce your knowledge"
        ]
      }
    ]
  }
  ```

- **Insights data – `insights-data.json`**

  ```json
  {
    "insights": [
      {
        "type": "strength",
        "area": "academics",
        "message": "You're strongest in academics with a great foundation!"
      }
    ],
    "nextSteps": [
      {
        "priority": "high",
        "action": "Explore entrepreneurship modules",
        "area": "entrepreneurship",
        "color": "red-500",
        "message": "Your Entrepreneurship score is 50%, which needs attention"
      }
    ]
  }
  ```

- **User data – `user-data.json`**

  ```json
  {
    "id": "123",
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "jane@novapioneer.com",
    "scores": {
      "academics": 80,
      "career_skills": 60,
      "life_skills": 70,
      "entrepreneurship": 50
    }
  }
  ```

---

- **Assumptions**
  - Single-user, read-only dashboard using static JSON.
  - Scores are percentages from 0–100.
  - Skill areas and categories are predefined.
