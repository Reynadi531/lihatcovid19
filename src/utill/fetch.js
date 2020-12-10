import Axios from 'axios'

async function fetchID() {
    let returnData;
    try {
        const { data, erorr } = await Axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/')
        returnData = data
    } catch (error) {
        returnData = null
        console.erorr(error)
    }
    return returnData
}
async function fetchGlobal() {
    let returnData;
    try {
        const { data, erorr } = await Axios.get('https://covid19.mathdro.id/api')
        returnData = data
    } catch (error) {
        returnData = null
        console.erorr(error)
    }
    return returnData
}

async function fetchProvinsi() {
    let returnData;
    try {
        const { data, erorr } = await Axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi')
        returnData = data
    } catch (error) {
        returnData = null
        console.erorr(error)
    }
    return returnData
}

export { fetchID, fetchGlobal, fetchProvinsi }