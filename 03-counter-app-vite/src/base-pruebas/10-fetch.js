const apiKey = 'LP5BXkgFR5kjd8shQlL3mBXXTGVfuFAg';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( url );
        document.body.append( img );
        

    })
    .catch(console.warn);