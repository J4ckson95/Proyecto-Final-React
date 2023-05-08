export const dataDBAdapter = (doc) => {
    const id = doc.id
    const { name, price, description, picture, category } = doc.data()
    const data = {
        id: id,
        name: name,
        price: parseInt(price),
        description: description,
        category: category,
        picture: picture
    }
    return data
}