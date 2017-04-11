var React = require('react');
var SlotListBox=require('./SlotListBox.jsx');
var SlotCreationBox=require('./SlotCreationBox.jsx');

var SlotApp = React.createClass({

    getInitialState:function(){
        return {id:null}
    },

    onEdit:function(id){
        this.setState({currentlyEdited:id});
    },

    onAdd:function(){
        this.setState({currentlyEdited:null});
    },

    render: function() {
        return (
            <div className="container">
                <div className="row header">
                    <div className="page-header">
                        <h1>Lisaztruong Coding Challenge</h1>
                    </div>
                </div>
                <div className="row">
                    <SlotListBox onEdit={this.onEdit} onAdd={this.onAdd}/>
                    <SlotCreationBox id={this.state.currentlyEdited} />
                </div>
            </div>
        )
    }
});

module.exports=SlotApp;
