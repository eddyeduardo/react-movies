const API ='https://api.themoviedb.org/3'

export function get(path){
    return fetch(API + path, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmFmM2JkYzE2ZjRlMjNjZTdjY2YwNDNmN2IzOGU1YSIsInN1YiI6IjYyYjQ5ZTE5NTNmODMzMGQwNzIyNWFiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PmqQTD9DStHrhWCQVb2K2XzyKEeNwLpjtvneHjSUp-w",
          "Content-Type": "application/json;charset=utf-8",
        },
      }).then((result) => result.json());
  
}