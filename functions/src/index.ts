import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
admin.initializeApp();

import * as express from 'express';
const api = express();

const firestore = admin.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

api.get('/characters/:id', (req, res) => {
  const record = firestore.collection('characters').doc(req.params.id);
  record.get().then(result => {
    res.json(result.data());
  }).catch(err => res.send(err));
});

api.post('/characters', (req, res) => {
  const character = {
    "name": req.body.name,
    "description": req.body.description
  };
  firestore.collection('characters').add(character).then(_r => {
    res.json(character);
  }).catch(err => res.send(err));
});

api.patch('/characters/:id', (req, res) => {
  const record = firestore.collection('characters').doc(req.params.id);
  const character = {
    "name": req.body.name,
    "description": req.body.description
  };
  record.update(character).then(_r => {
    record.get().then(result => {
      res.json(result.data());
    }).catch(err => res.send(err));
  }).catch(err => res.send(err));
});

api.delete('/characters/:id', (req, res) => {
  const record = firestore.collection('characters').doc(req.params.id);
  record.delete().then(result => {
    res.send('deleted');
  }).catch(err => res.send(err));
});

exports.api = functions.https.onRequest(api);