

APIKEY = '8u18tp9Rqbx0lMkdIePupWOlLI0eatZoMNQLKRWp';
export const getSearch = async( search ) => {

    const url = `https://back.implementaconbubo.com/v1/sales/customer/?simple=true&APIKEY=${APIKEY}`;
    const resp = await fetch( url );
    const { data_operations } = await resp.json();

    const search = data_operations.map( datas => {
        return {
            id: datas.id,
            title: datas.title,
            url: datas.images?.downsized_medium.url
        }
    })

    return search;


}