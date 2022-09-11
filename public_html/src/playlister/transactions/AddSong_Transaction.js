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
    constructor(initModel, initIndex, initSong) {
        super();
        this.model = initModel;
        this.songIndex = initIndex;
        this.song = initSong;
    }

    doTransaction() {
        this.model.addSong(this.songIndex, this.song);
        this.model.callingRedo = false; 
    }
    
    undoTransaction() {
        this.model.deleteSongWithoutToggle(this.songIndex);
        this.model.callingRedo = false; 
    }
}