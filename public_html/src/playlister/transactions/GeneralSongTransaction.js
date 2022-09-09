import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * GeneralSongTransaction
 * 
 * This class represents a transaction that works with adding, editing, and removing songs. 
 * It will be managed by the transaction stack.
 * 
 * @author shiy
 * @author ?
 */
export default class GeneralSongTransaction extends jsTPS_Transaction {
    constructor(initModel) {
        super();
        this.model = initModel;
    }

    doTransaction() {
        this.model.addSong();
    }
    
    undoTransaction() {
        let songSize = this.model.currentList.length;
        this.model.deleteSong(songSize - 1);
    }
}