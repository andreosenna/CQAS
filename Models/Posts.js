// testando metodo post
class Posts {
    constructor() {
        this.posts = [
            { id: 1, nome: "Andre", cargo: "Adm" },
            { id: 2, nome: "Maira", cargo: "Supervisora" }
        ];
    }

    getAll() {
        return this.posts;
    }

    newPost(nome, cargo) {
        this.posts.push({ id: genRadnon(), nome, cargo });
    }
}

function genRadnon() {
    var numRand = Math.random().toString(36).substring(2, 9);
    return numRand;
}

export default Posts;
