import { getDocs, getDoc, collection, query, where, doc } from "firebase/firestore";
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