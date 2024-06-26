import axios from "axios"

export default async function Products(token) {
    try {
        const response = await axios.get('https://training.proyectos-lineagrafica.com/products.php',{
            headers: {
                'Authorization': `${token}`
            }
        })
        console.log(response)
        return response.data
    } catch (err) {
        console.error(err)
        throw err
    }
}