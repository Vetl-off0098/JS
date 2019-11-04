'use strict'

let renderer = {
    // Сюда запишем всё, что надо отобразить.
    map: "",
    /**
     * Отображает игру в консоли.
     */
    render() {
        for (let row = 0; row < config.rowCount; row++) {
            for (let col = 0; col < config.colsCount; col++) {
                if(player.y === row && player.x === col) {
                    this.map += 'o ';
                } else {
                    this.map += 'x ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },

    clear() {
        //чистим консоль
        console.clear();
        //чистим карту
        this.map = "";
    }
};