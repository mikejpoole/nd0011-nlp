function urlValidator(url) {
    const pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(pattern);

    if(!url.match(regex)) {
        alert("Please add a valid URL for the news article");
        return false;
    }

    return true;
}

export { urlValidator }
