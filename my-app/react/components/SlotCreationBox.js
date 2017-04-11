var React = require('react');
var TextArea=require('./TextArea.jsx');
var SlotActions = require('../../actions/SlotActions.js');
var SlotStore = require('../../stores/SlotStore.js');

var SlotCreationBox = React.createClass({

    handleSave:function(slotText,id){

        if(id){
            SlotActions.editSlot({_id:id,text:slotText});
        }

        else{
            SlotActions.createSlot({_id:Date.now(),text:slotText});
        }
    },

    render: function() {

        var slot;

        if(this.props.id) {
            slot=SlotStore.getSlot(this.props.id);
        }

        return (
            <div className="col-md-8">
                <TextArea onSave={this.handleSave} id={this.props.id} slotText={slot ? slot.text : ''} />
            </div>
        )
    }
});

module.exports=SlotCreationBox;
