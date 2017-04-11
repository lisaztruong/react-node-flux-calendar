var React = require('react');

var Slot = React.createClass({

    handleEdit:function(id,event){
        event.preventDefault();
        this.props.onEdit(id);
        this.props.onSelect(id);
    },

    render: function() {

        var slot=this.props.slot;

        var title=slot.text.length >= 20 ? slot.text.substring(0,20) : slot.text;

        var className = this.props.active ? 'active' : null;

        return (
            <a href="#" className={'list-group-item '+className} onClick={this.handleEdit.bind(null,slot._id)}>{title}</a>
        )
    }
});

module.exports=Slot;
