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
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initIndex, initOldSong, initNewSong) {
        super();
        this.model = initModel;
        this.songIndex = initIndex;
        this.oldSong = initOldSong;
        this.newSong = initNewSong;
    }

    doTransaction() {
        this.model.editSong(this.songIndex, this.oldSong, this.newSong);
        this.model.callingRedo = false; 
    }
    
    undoTransaction() {
        this.model.editSong(this.songIndex, this.newSong, this.oldSong);
        this.model.callingRedo = false; 
    }
}