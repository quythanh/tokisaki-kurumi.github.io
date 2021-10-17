// cSpell:words Tokisaki Kurumi

txt = document.getElementById("searchbar-text");

document.getElementById("searchbar").addEventListener("click", event => {
    switch (event.target.id) {
        case "search-by-voice":
            txt.textContent = "lmao, chả ai xài cái nút này cả";
            break;

        case "search-button":
            (document.getElementById("google-content").className == "col-7 hidden") ?
            document.getElementById("google-content").className = "col-7":
                txt.textContent = "kết quả đã hiện sẵn rồi mà =]";
            break;

        default:
            txt.textContent = "không được tìm cái khác đâu";
            break;
    }

    lastTimeout = setTimeout(() => {
        txt.textContent = "Tokisaki Kurumi";
    }, 2000);
});