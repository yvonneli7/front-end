import React, { Component } from 'react'
import { Transition, Sidebar, Segment, Form, Grid, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

export default class Profile extends Component {
      constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            error: '',
            displayErrors: false,
            visible: false
        };
        this.handleSubmit          = this.handleSubmit.bind(this);
        this.handleFNameChange     = this.handleFNameChange.bind(this);
        this.handleLNameChange     = this.handleLNameChange.bind(this);
        this.handleEmailChange     = this.handleEmailChange.bind(this);
        this.handlePasswordChange  = this.handlePasswordChange.bind(this);
    }

    handleSubmit(event) {
        // event.preventDefault();

        // if (!event.target.checkValidity()) {
        //         this.setState({
        //         invalid: true,
        //         displayErrors: true,
        //     });
        //     return;
        // }

        // const data = {
        //             email           : this.state.email,
        //             password        : this.state.password,
        //             confirmpassword : this.state.cPassword,
        //             firstName       : this.state.fname,
        //             lastName        : this.state.lname,
        //     };
      
        // axios({
        //     url: "https://potluckapi.azurewebsites.net/api/register",
        //     method: "post",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     data: JSON.stringify (data)
        // }).then(response => {
        //     this.setState({
        //         success: response.status === 201,
        //         displayErrors: false,
        //         error: ''
        //     })
        //     this.props.regIsSuccessful()
        //     this.props.history.push('/login')
        // }).catch(e => {
        //     this.setState({
        //         error: e.response.data.errors[0].description,
        //         displayErrors: true,
        //         success: false })
        // })
    }

    handleFNameChange (e) {
        this.setState({fname: e.target.value});
    }

    handleLNameChange (e) {
        this.setState({lname: e.target.value});
    }

    handleEmailChange (e) {
        this.setState({email: e.target.value});
     }

     handlePasswordChange (e) {
        this.setState({password: e.target.value});
     }

     componentDidMount () {
      debugger
      let email = localStorage.getItem('email')
      let fname = localStorage.getItem('firstName')
      let lname = localStorage.getItem('lastName')

      this.setState({
        email, 
        fname, 
        lname,
        visible: true
      })
     }

    render() {
        return (
            //<Segment style={styles.profileContainer}>
                 <div className='signUp-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >

     <Transition animation={'fade right'} duration={500} visible={this.state.visible}>
      <Grid.Column style={{ maxWidth: 681 }}>
        <Header as='h2' style={styles.header} textAlign='center'>
          {' '}Profile
        </Header>
        <Form size='large'>
          <Segment stacked>
          <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='First Name'
              value={this.state.fname} onChange={this.handleFNameChange}
              />
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Last Name'
              value={this.state.lname} onChange={this.handleLNameChange}
            />
            <Form.Input
              fluid
              icon='mail'
              iconPosition='left'
              placeholder='E-mail address'
              value={this.state.email} onChange={this.handleEmailChange}
            />

            <Button color='teal' fluid size='large'>Update</Button>
          </Segment>
        </Form>
      </Grid.Column>
      </Transition>
    </Grid>
  </div>
            //</Segment>
          )
    }
}

const styles = {
    profileContainer : {
        display: "flex", 
        flex : 1, 
        minHeight : window.innerHeight
    },   
     header : {
        color: 'white',
        paddingTop: '10px',
        textAlign:'left',
        fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
        fontWeight: '700'
    }
}