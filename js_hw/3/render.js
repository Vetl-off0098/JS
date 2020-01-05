let render = {

    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML("afterbegin", result);
    },

    generateBoard() {
        let board = "";
        for (let y = 0; y < config.rowsCount; y++) {
            board += "<tr>";
            for (let x = 0; x < config.colsCount; x++) {
                board += `<td data-x="${x}" data-y="${y}"></td>`;
                if (y % 2 != 0) {
                    if (x % 2 == 0) {
                        document.querySelectorAll("td").forEach(function (field) {
                            field.classList.add("black");
                        });
                    }
                } else {
                    if (x % 2 != 0) {
                        document.querySelectorAll("td").forEach(function (field) {
                            field.classList.add("black");
                        });
                    }
                }
            }
            board += "</tr>";
        }
        return `<table><tbody>${board}</tbody></table>`;
    },
};

render.renderBoard();