import axios from "axios"

export default async function Auth() {

    const body = {
        client: 'training@lineagrafica.es',
        secret: 'test'
    }

    try {
        const result = await axios.post('https://training.proyectos-lineagrafica.com/auth.php', body)
        return result.data
    } catch (err) {
        throw err
    }
    
}