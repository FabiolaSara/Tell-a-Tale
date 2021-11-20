import { axiosBase as axios } from "./Config";


export const GetCapituloComicById = async () => {
    try{
        const response = await axios.get('/capitulo/' + "614006a087ab0f9a98c06e7c");                                         
        console.log("Obtenido capitulo", response);
        return response.data;
    }
    catch(error)
    {
        console.error("FUUUUUUUUUUUUUUUUUUU Capitulo de Comic " + error);
        return error;
    }
}

export const CreateCapituloComic = async (capitulo) => {
    try{
        const response = await axios.post("/capitulo", capitulo, {
            //request configuration 
        })
        console.log("Crear capitulo ", response);
    }
    catch(error){
        console.error("NOOOOOOOOOOOOOOOOOOOOOOOOO Error de creacion de capitulo! " + error);
        return error;
    }
}