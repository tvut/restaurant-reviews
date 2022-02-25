import http from "../http-common";

class RestaurantDataService{
    getAll(page = 0){
        return http.get(`?page={page}`)
    }

    get(id) {
        return http.get(`/id/${id}`)
    }

    find(query, by = "name", page = 0){
        return http.get(`?${by}=${query}&page=${page}`)
    }

    updateReview(data){
        return http.put("/review", data);
    }

    deleteReview(id){
        return http.delete(`/review?id=${id}`);
    }

    createReview(data){
        return http.post("/review", data);
    }

    getCuisines(id){
        return http.get(`/cuisines`)
    }
}

export default new RestaurantDataService()