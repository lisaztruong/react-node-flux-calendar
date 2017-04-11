var Reflux=require('reflux');
var SlotActions=require('../actions/SlotActions');

var _slots=[];

var SlotStore = Reflux.createStore({

    init: function() {
        this.listenTo(SlotActions.createSlot, this.onCreate);
        this.listenTo(SlotActions.editSlot, this.onEdit);
    },

    onCreate: function(note) {
        _slots.push(note);
        this.trigger(_slots);
    },

    onEdit: function(note) {
        for(var i=0;i<_slots.length;i++){
            if(_slots[i]._id===note._id){
                _slots[i].text=note.text;
                this.trigger(_slots);
                break;
            }
        }
    },

    getSlots:function(){
        return _slots;
    },

    getSlot:function(id){
        for(var i=0;i<_slots.length;i++){
            if(_slots[i]._id===id){
                return _slots[i];
            }
        }
    }

});

module.exports=SlotStore;
