export const dataDBAdapter = (doc) => {
    const id = doc.id
    const { name, price, description, picture, category, stock } = doc.data()
    const data = {
        id: id,
        name: name,
        price: parseInt(price),
        description: description,
        category: category,
        picture: picture,
        stock: stock
    }
    return data
}