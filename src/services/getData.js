import DB from "../config/firebase"
import { collection, getDocs, getDoc, query, where, doc } from "firebase/firestore"
import { dataDBAdapter } from "../adapted/adapted"

export const getProducts = async () => {
    const colletcionRef = collection(DB, "products")
    const response = await getDocs(colletcionRef)
    let newData = response.docs.map((element) => dataDBAdapter(element))
    return newData
}

export const getProductById = async (id) => {
    const docRef = doc(DB, "products", id)
    const response = await getDoc(docRef)
    let newData = dataDBAdapter(response)
    return newData
}
export const getProductsByCategory = async (category) => {
    const collectionRef = collection(DB, "products")
    const queryRef = query(collectionRef, where("category", "==", `${category}`))
    const response = await getDocs(queryRef)
    let newData = response.docs.map((element) => dataDBAdapter(element))
    return newData
}