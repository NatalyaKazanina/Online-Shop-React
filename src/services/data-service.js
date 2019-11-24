export default class DataService {
    url = 'http://localhost:3000/products.json';

    getData = async(url) => {
        const data = await fetch(url);
        if(!data.ok) {
            throw new Error(`Status ${data.status}`);
        }
        return await data.json();
    };

    getProducts = async() => {
        return await this.getData(this.url);
    }
}