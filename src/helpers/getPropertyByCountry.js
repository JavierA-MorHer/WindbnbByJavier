import { data } from "../data/stays";


export const getPropertyByCountry = ( country = '')=>{
    country.toLocaleLowerCase().trim();

    if(country.length === 0)
        return [''];

     return data.filter(
        properties => properties.country.includes(country)
     )   
}