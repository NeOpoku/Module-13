
# Candidate Search Application

A React and TypeScript front-end application that consumes a custom API to search and review GitHub user profiles. Users can accept or reject candidates, view accepted candidates, and persist selections in local storage. The app is deployed on Render for live access.


## Features

Candidate Review Page: Displays one candidate at a time with:

- Name

- Username

- Location

- Avatar

- Email

- GitHub Profile URL

- Company

Accept & Reject:

+ +button to save a candidate

- button to skip a candidate without saving

Accepted Candidates Page:

- Lists all saved candidates

- Option to reject a candidate from the list

- Shows a message when there are no accepted candidates

Persistence: All accepted candidates are stored in localStorage to survive page reloads


## Deployment

To deploy this project run

```bash
  npm install
  npm run dev
```


## Environment Variables

To run this project, you will need to create a .env file in the root of the project (see .env.EXAMPLE)

Add your GitHub PAT:
```bash
  VITE_GITHUB_TOKEN=your_personal_access_token
```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@neOpoku](https://www.github.com/NeOpoku)

