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
    constructor(initModel, initIndex, initSong) {
        super();
        this.model = initModel;
        this.songIndex = initIndex;
        this.songTobeRemove = initSong;
    }

    doTransaction() {
        if(this.model.callingRedo) {
            this.model.deleteSongWithoutToggle(this.songIndex, this.songTobeRemove);
        } else {
            this.model.deleteSong(this.songIndex, this.songTobeRemove);
        }
        this.model.callingRedo = false; 
    }
    
    undoTransaction() {
        this.model.addSong(this.songIndex, this.songTobeRemove);
        this.model.callingRedo = false; 
    }
}