var React = require('react');
var SlotList = require('./SlotList.jsx');
var SlotStore=require('../../stores/SlotStore');

var SlotListBox = React.createClass({

    getInitialState:function(){
      return {slots:SlotStore.getSlots()}
    },

    onChange: function(slots) {
        this.setState({
            slots: slots
        });
    },

    componentDidMount: function() {
        this.unsubscribe = SlotStore.listen(this.onChange);
    },

    componentWillUnmount: function() {
        this.unsubscribe();
    },

    onAdd:function(event){
        event.preventDefault();
        this.props.onAdd();
        this.refs.slotList.setActiveSlot(null);
    },

    render: function() {
        return (
            <div className="col-md-4">
                <div className="centered"><a href="" onClick={this.onAdd}>Add New</a></div>
                <SlotList ref="slotList" slots={this.state.slots} onEdit={this.props.onEdit} />
            </div>
        )
    }
});

module.exports=SlotListBox;
