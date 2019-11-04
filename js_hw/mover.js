'use strict'

let mover = {

    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while(true) {
            let direction = parseInt(prompt('Нажмите клавишу (1, 2, 3, 4, 6, 7, 9 или 8), куда вы хотите переместиться, "Отмена" для выхода.'));
            if(isNaN(direction)) {
                return null;
            }
            if(!availableDirections.includes(direction)) {
                alert('Для перемещений нужно ввести одно из значений (1, 2, 3, 4, 6, 7, 9 или 8)');
                continue;
            }
            return direction;
        }
    },

    /**
     * Отдает следующую точку, в которой будет находиться пользователь после движения.
     * @param {int} direction
     * @returns {{x: int, y: int}} Следующая позиция игрока
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch(direction) {
            case 1:
                if(player.x == 0) {
                    nextPosition.x = nextPosition.x;
                    nextPosition.y = nextPosition.y;
                } else {
                    nextPosition.x--;
                    nextPosition.y++;
                }
                break;
            case 2:
                if(player.y == config.rowCount - 1) {
                    nextPosition.y = nextPosition.y;
                } else {
                    nextPosition.y++;
                }
                break;
            case 3:
                if(player.x == config.colsCount - 1 || player.y == config.rowCount - 1) {
                    nextPosition.x = nextPosition.x;
                    nextPosition.y = nextPosition.y;
                } else {
                    nextPosition.x++;
                    nextPosition.y++;
                }
                break;
            case 4:
                if(player.x == 0) {
                    nextPosition.x = nextPosition.x;
                } else {
                    nextPosition.x--;
                }
                break;
            case 8:
                if(player.y == 0) {
                    nextPosition.y = nextPosition.y;
                } else {
                    nextPosition.y--;
                }
                break;
            case 9:
                if(player.y == 0 || player.x == config.colsCount - 1) {
                    nextPosition.x = nextPosition.x;
                    nextPosition.y = nextPosition.y;
                } else {
                    nextPosition.x++;
                    nextPosition.y--;
                }
                break;
            case 6:
                if(player.x == config.colsCount - 1) {
                    nextPosition.x = nextPosition.x;
                } else {
                    nextPosition.x++;
                }
                break;
            case 7:
                if(player.y == 0 || player.x == 0) {
                    nextPosition.x = nextPosition.x;
                    nextPosition.y = nextPosition.y;
                } else {
                    nextPosition.x--;
                    nextPosition.y--;
                }
                break;
        }
        return nextPosition;
    }
}