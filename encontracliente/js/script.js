var btn = {
    check: document.querySelectorAll(".check"),
    card: document.querySelectorAll(".card"),
}
const action = {
    export: document.getElementById("export"),
    send: document.getElementById("zapzap"),
    checkAll: document.getElementById("selectAll")
}, exe = {
    exportAll: () => {
        console.log("AAAA");
    },
    sendAll: () => {
        console.log("AAAA");
    },
    pintaCard: (x, y) => {
        if (y == true) {
            btn.card[x].classList.add("cardSelected");
        } else {
            btn.card[x].classList.remove("cardSelected");
        }
    },
    renameBtn: () => {
        let count = document.querySelectorAll('.check:checked');
        if (btn.card.length == count.length) {
            action.checkAll.innerText = "Remove All";
        } else {
            action.checkAll.innerText = "Select All";
        }
    },
    btnSelect: (v) => {

        if (btn.check[v].checked == false) {
            btn.check[v].checked = true;

            exe.pintaCard(v, true)
        } else {
            btn.check[v].checked = false;
            exe.pintaCard(v, false)
        }
        exe.renameBtn();
    },
    chekedAll: () => {
        var define;

        if (action.checkAll.innerText == "Remove All") {
            define = false;
        } else {
            define = true;
        }

        for (x = 0; x < btn.check.length; x++) {
            btn.check[x].checked = define;
            exe.pintaCard(x, define);
        }

        exe.renameBtn();
    }


}, api = {
    guiafacil: (search) => {
        const data = JSON.stringify({
            "pesquisa": search,
        });

        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost/codigo/",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "processData": false,
            "data": data
        };

        $.ajax(settings).done(function(response){
            console.log(response);
        });
    }
}

//Ações de Click da página
action.export.addEventListener("click", exe.exportAll, true);
action.send.addEventListener("click", exe.sendAll, true);
action.checkAll.addEventListener("click", exe.chekedAll, true)

api.guiafacil("estetica");