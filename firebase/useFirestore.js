import { useState } from 'react'
import firebase from '.'

export const firestore = firebase.firestore()

export const productCollection = 'products'


export default function useFirestore() {
  const [products, setProducts] = useState([])
  firestore.collection(productCollection)
    .onSnapshot(s => {
      let p = []
      s.forEach(doc => {
        p.push(doc.data())
      })
      setProducts(p)
    })


  async function addProduct(product) {
    const docName = product.sku
    delete product.sku
    await firestore
      .collection(productCollection)
      .doc(docName)
      .set(product)
      .then(_ => console.log('Successfully added new product'))
      .catch(e => console.error(e))
  }

  return { products, addProduct }
}