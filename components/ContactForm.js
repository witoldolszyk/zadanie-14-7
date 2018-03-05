var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={'conctactForm'}>
        <input
          type={'text'}
          placeholder={"Imię"}
          value={this.props.contact.firstName} />
        <input
          type={'text'}
          placeholder={'Nazwisko'}
          value={this.props.contact.LastName} />
        <input
          type={'email'}
          placeholder={'E-mail'}
          value={'this.props.contact.email'} />
        <button
         type={'submit'}>
         'dodaj kontakt'
        </button>
      </form>



      /*React.createElement('form', {className: 'contactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Imię',
          value: this.props.contact.firstName,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Nazwisko',
          value: this.props.contact.lastName,
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
        }),
        React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
      ) */

    )
  },
})
