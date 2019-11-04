'use strict'

/**
 * Объект игорока, здесь будут все методы и свойтсва, связанные с ним.
 * @property {int} x Позиция по X-координате.
 * @property {int} y Позиция по Y-координате.
 */
const player = {
    x: 0,
    y: 0,

    /**
     * 
     * @param {*} nextPoint 
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
};