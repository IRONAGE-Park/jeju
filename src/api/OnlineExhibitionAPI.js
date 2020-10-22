import Axios from "axios";

import { Paths } from '../paths/index'

const URL = Paths.api

export const getDocumentList = async (type) => {
    const query = `${URL}/document?module_id=1&type=${type}`
    const res = await Axios.get(query)
    return res.data
}

export const getShowDocument = async () => {
    const query = `${URL}/document/1`
    const res = await Axios.get(query)
    return res.data
}