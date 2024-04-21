export const Endpoints = {
    cats: {
        getList: (page: number) => `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${page}&limit=10`,
    }
}