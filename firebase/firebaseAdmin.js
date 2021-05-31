import admin from 'firebase-admin'
import serviceAccount from '../secrets.json'

export const verifyIdToken = async (token) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch(e => {
      console.error(e)
    })
}