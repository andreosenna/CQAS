// No seu arquivo 'Posts.js' (ES6)
class Posts {
    
     static posts = [
            { id: 1, nome: "Andre", cargo: "Adm" },
            { id: 2, nome: "Maira", cargo: "Supervisora" }
        ];
    

    static getAll() {
        return this.posts;
    }

    static newPost(nome, cargo) {
        this.posts.push({ id: genRadnon(), nome, cargo });
    }
}

function genRadnon() {
    var numRand = Math.random().toString(36).substring(2, 9);
    return numRand;
}

export default Posts;
