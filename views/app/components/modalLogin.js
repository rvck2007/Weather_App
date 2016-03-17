var React = require('react');
var Reflux = require('reflux');
var Modal = require('react-bootstrap').Modal;

var AuthenticationActions = require('../actions/authenticationActions.js');
var AuthenticationStore = require('../stores/authenticationStore.js');

var ModalLogin = React.createClass({
    //mixins: [Reflux.connect(AuthenticationStore)],
    getInitialState() {
        return {
            showModal: false,
            username:'',
            password:''
        };
    },

    close() {
        this.setState({ showModal: false });
    },
    open() {
        this.setState({ showModal: true });
    },

    handleClick:function(event){
        event.preventDefault();
        AuthenticationActions.authenticate(this.state.username,this.state.password);
        this.setState({username: ''});
        this.setState({password: ''});
    },
    _onChangeUsername:function(e){
        this.setState({username: e.target.value});
    },
    _onChangePassword:function(e){
        this.setState({password: e.target.value});
    },

    render() {
        return (
                <Modal show={this.state.showModal} onHide={this.close} bsSize="small">
                    <Modal.Header closeButton>
                        <Modal.Title>login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="">
                                <form onSubmit={this.handleClick}>
                                    <div className="form-group">
                                        <input id="loginUsername" className="form-control" type="text" placeholder="username" value={this.state.username} onChange={this._onChangeUsername}  />
                                    </div>
                                    <div className="form-group">
                                        <input id="loginPassword" className="form-control" type="password" placeholder="password" value={this.state.password} onChange={this._onChangePassword} />
                                    </div>
                                    <button type="submit" className="btn btn-default">submit</button>
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <h5 onClick=""> a Pied Piper product</h5>
                    </Modal.Footer>
                </Modal>
        );
    }
});

module.exports = ModalLogin;