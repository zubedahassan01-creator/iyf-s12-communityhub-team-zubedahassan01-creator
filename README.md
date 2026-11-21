# CommunityHub

CommunityHub is a team-built community feed. This repository is intended to be the shared Weeks 8–12 project; the GitHub repository name must be `iyf-s12-communityhub-team-{lead-username}` using the lead's exact Week 0 username.

## Frontend

The React frontend lives in `frontend/`. It uses Vite, React function components, and React Router. Week 9 adds Home, Stories, Story Detail, Create Story, and About routes; JSONPlaceholder data fetching; local posts and likes; search; custom hooks; and responsive CSS Modules.

### Accessibility audit — Week 9

Run Chrome Lighthouse → Accessibility on the same route and viewport for both measurements. Record the actual scores after the pre-fix and post-fix runs:

| Run | Accessibility score | Findings / changes |
|---|---:|---|
| Before fixes | Pending measurement | Run Lighthouse against the Week 8 frontend before applying the Week 9 accessibility fixes. |
| After fixes | Pending measurement | Re-run Lighthouse against the updated frontend and record the score and fixes. |

The Week 9 interface includes a skip link, semantic landmarks, visible focus styles, labelled inputs, descriptive link/button names, and live loading/error announcements.

### Run locally

```sh
cd frontend
npm install
npm run dev
```

### Tests and production build

```sh
npm test
npm run build
```

## Team setup checklist

- Create the shared repository with the exact team naming convention and Node `.gitignore`.
- Add teammates as collaborators; each member must accept the invitation.
- Protect `main` by requiring pull requests and one approval.
- Open GitHub Issues for profiles, posts, comments, and auth.
- Every contribution goes through a feature branch and reviewed pull request.
- Each member submits the shared repository URL individually each week and adds their own weekly log entry to `CONTRIBUTORS.md` in their own PR.

## Team members

Fill in real names, exact GitHub usernames, and feature ownership after the team is formed. Do not claim contributions for someone who did not make them.

| Name | GitHub username | Role | Feature ownership |
|---|---|---|---|
| To be completed | `lead-username` | Team lead | To be assigned |
| To be completed | `member-username` | Developer | To be assigned |

