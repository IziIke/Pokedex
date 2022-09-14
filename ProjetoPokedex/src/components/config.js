const { default: axios } = require("axios");

export default async function (nomePokemon) {
    try {
        let res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + nomePokemon);
        return res.data
    } catch (error) {
        throw new Error("nenhum pokemon encontrado")
    }
}