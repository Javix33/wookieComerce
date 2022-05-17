import { getDocs, getDoc, collection, query, where, doc, documentId } from "firebase/firestore";
import { firestoreDb } from "./index"




export const getProducts = (CategoryId) => {

    return new Promise((resolve, reject) => {
        const collectionRef = CategoryId ? query(collection(firestoreDb, "products"), where("category", "==", CategoryId)) : collection(firestoreDb, "products")
        getDocs(collectionRef).then(response => {

            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            resolve(products)
        }).catch(error => {
            reject(error)
        })

    })
}
export const getProduct = (ProductId) => {
    return new Promise((resolve, reject) => {
        getDoc(doc(firestoreDb, "products", ProductId)).then(
            response => {
                resolve({ id: response.id, ...response.data() })
            }
        ).catch(error => {
            reject(error)
        })
    })

}
export const getCategories = () => {
    return new Promise((resolve, reject) => {
        getDocs(collection(firestoreDb, "categories")).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            resolve(categories)
        }).catch(error => {
            reject(error)
        })
    })
}
export const getCartDocs = (ids) => {
    return new Promise((resolve, reject) => {
        const collectionRef = collection(firestoreDb, "products")
        getDocs(
            query(collectionRef, where(documentId(), "in", ids))
        ).then(response => resolve(response)).catch(error => reject(error))
    })

}