# firebase-functions-api-sample
api samples of Firebase Functions
CRUD documents on Firestore

# Usage

- Create project on console

- Enable Firestore and Functions on console

- Install Firebase CLI

- Init

  `$ firebase init firestore`

  `$ firebase init functions`

- Deploy

  `$ firebase deploy --only firestore`

  `$ firebase deploy --only functions`

- Call API

  - CREATE

    `POST https://your-project.cloudfunctions.net/api/characters`

  - READ

    `GET https://your-project.cloudfunctions.net/api/characters/id`

  - UPDATE

    `PUT https://your-project.cloudfunctions.net/api/characters/id`

  - DELETE

    `DELETE https://your-project.cloudfunctions.net/api/characters/id`
