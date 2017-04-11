var React = require('react');
var Slot = require('./Slot.jsx');

var SlotList = React.createClass({

    getInitialState:function(){
        return {activeSlotId:null}
    },

    setActiveSlot: function(id) {
        this.setState({activeSlotId: id});
    },

    render: function() {
        var self=this,
            slots=this.props.slots.concat().reverse();
        var slotNodes = slots.map(function (slot) {
            return (
                <Slot key={slot._id} active={self.state.activeSlotId === slot._id} slot={slot} onEdit={self.props.onEdit} onSelect={self.setActiveSlot}/>
            );
        });
        return (
            <div className="list-group">
                {slotNodes}
            </div>
         )
    }
});

module.exports=SlotList;
