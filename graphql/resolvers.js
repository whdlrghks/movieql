import { getMovie, getById, deleteMovie , addMoive} from "./db";


const resolvers = {
    Query : {
        movies : () => getMovie(),
        movie : (_,{id}) => getById(id)
    },
    Mutation : {
        addMovie: (_,{name, score} ) => addMoive(name, score),
        deleteMovie: (_,{id}) => deleteMovie(id)
    }
};

export default resolvers;