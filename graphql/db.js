let movies =[
    {
        id : 0,
        name : "Ikhwan",
        score : 33
    }
    ,
    {
        id : 1,
        name : "Flay",
        score : 2
    }
    ,
    {
        id : 2,
        name : "King",
        score : 4
    }
    ,    
    {
        id : 3,
        name : "Wang",
        score : 12
    }


];

export const getMovie = () => movies;

export  const getById = id => {
    const filteredMovie = movies.filter(movie => movie.id === id) ;
    return filteredMovie[0];
}

export const deleteMovie = id => {
    const cleanedMovie = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovie.length){
        movies = cleanedMovie;
        return true;
    } else {
        return false;
    }
}

export const addMoive = (name, score) => {
    const newMovie = {
        id :`${movies.length + 1}`,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}

