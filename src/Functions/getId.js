function getId(key) {
    let id = localStorage.getItem(key);
    if(null === id) {
        localStorage.setItem(key, 1);
        return 1;
    }
    id = parseInt(id); // prsiname i stringa, kad nebutu prblems
    id++;
    localStorage.setItem(key, id);
    return id;
}

export default getId;