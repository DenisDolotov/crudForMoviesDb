const db = require('./db')

const getGenres = async (req, res) => {
    let genres;
    if(req.params.id){
        genres = await db.query(`SELECT id, name FROM genres WHERE id=$1`, req.params.id);
        if (genres.rowCount){
            res.send(genres.rows);
        } else {
            res.sendStatus(404);
        }
    } else {
        genres = await db.query(`SELECT * from genres`);
        res.send(genres.rows);
    }
}

const createGenre = async (req,res) => {
    const genre = await db.query(`INSERT INTO genres (name) VALUES ($1) RETURNING *`, [req.body.name]);
    res.send(genre.rows[0]);
}

const deleteGenre = async (req, res) => {
    if (req.params.id) {
        const result = await db.query(`DELETE FROM genres WHERE id = $1`, [req.params.id]);
        if (result.rowCount) {
            res.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
    } else {
        res.sendStatus(400);
    }

}

const updateGenre = async (req, res) => {
    const {id, name} = req.body;
    const result = await db.query(`UPDATE genres SET name = $2 WHERE id = $1`, [id, name]);
    if (result.rowCount) {
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
}

const getMovies = async (req, res) => {
    let movies;
    if(req.params.id){
        movies = await db.query(`SELECT id, title, release_year FROM movies WHERE id=$1`, [req.params.id]);
        if (movies.rowCount){
            res.send(movies.rows);
        } else {
            res.sendStatus(404);
        }
    } else {
        movies = await db.query(`SELECT id, title, release_year from movies`);
        res.send(movies.rows);
    }

}

const createMovie = async (req,res) => {
    const movie = await db.query(
        `INSERT INTO
            movies (title, release_year)
         VALUES 
            ($1, $2)
         RETURNING 
            *`
            , [req.body.title, req.body.release_year]);
    res.send(movie.rows[0]);
}

const deleteMovie = async (req, res) => {
    if (req.params.id) {
        const result = await db.query(`DELETE FROM movies WHERE id = $1`, [req.params.id]);
        if (result.rowCount) {
            res.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
    } else {
        res.sendStatus(400);
    }

}

const updateMovie = async (req, res) => {
    const {id, title, release_year} = req.body;
    const result = await db.query(
        `UPDATE
            movies
         SET
            title = $2, release_year = $3
         WHERE 
            id = $1`
        , [id, title, release_year]);
    if (result.rowCount){
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
}


module.exports = {
    getGenres,
    createGenre,
    deleteGenre,
    updateGenre,
    getMovies,
    createMovie,
    deleteMovie,
    updateMovie,
}