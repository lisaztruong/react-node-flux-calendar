var React=require('react');
var SlotStore=require('../../store/SlotStore');

var TextArea = React.createClass({

    getInitialState:function(){
        return {slotText:''}
    },

    handleChange: function(event) {
        this.setState({slotText: event.target.value});
    },

    handleSave:function(){

       this.props.onSave(this.state.slotText,this.props.id);

       if(!this.props.id) {
           this.refs.textArea.getDOMNode().value = '';
           this.setState({slotText: ''});
       }

    },

    componentWillReceiveProps: function(nextProps) {

        this.setState({
            slotText: nextProps.slotText
        });

        if(!nextProps.id){
            this.refs.textArea.getDOMNode().focus();
        }
    },

    render: function() {
        return (
            <div>
                <textarea className="form-control" ref="textArea" cols="100" rows="20" value={this.state.slotText} onChange={this.handleChange}></textarea><br/>
                <input type="button" className="btn btn-success btn-lg" value="Save" onClick={this.handleSave}/>
            </div>
        )
    }
});

module.exports=TextArea;
