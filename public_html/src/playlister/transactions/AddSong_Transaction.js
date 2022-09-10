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
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initIndex) {
        super();
        this.model = initModel;
        this.songIndex = initIndex;
    }

    doTransaction() {
        this.model.addSong(this.songIndex);
    }
    
    undoTransaction() {
        this.model.deleteSong(this.songIndex);
    }
}