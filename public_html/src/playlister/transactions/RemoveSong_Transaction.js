import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initIndex) {
        super();
        this.model = initModel;
        this.songIndex = initIndex;
    }

    doTransaction() {
        this.model.deleteSong(this.songIndex);
    }
    
    undoTransaction() {
        this.model.addSong(initIndex);
    }
}