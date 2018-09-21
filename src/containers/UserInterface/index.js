import React from 'react'
import ClassNames from 'classnames'
import {
  Simple,
  SimpleStatic,
  Card
} from 'components'
import {
  CONTENTS
} from 'themes'

export class UserInterfaceContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Simple
          className='' // is-error, is-success
          heading='Talk - Design Director at Dropbox, Kurt Varner - The Conditions for Great Design'
          description='Kurt Varner, Design Director at Dropbox presents three fundamental elements necessary on any team to achieve great digital design output. He gives us an in-depth look inside the design process at Dropbox using Dropbox Paper, the advantages of hacky hour, participatory design, and composer teams, and gives practical tips on how to build a team that cares.'
          footer={
            <a className='simple-text-link' href=''>
              Subscribe now - watch the hottest digital design talks and interviews from Awwwards, on our official YouTube Channel.
            </a>
          }
        />

        <SimpleStatic
          className='' // is-error, is-success
        >
          <SimpleStatic.Header>
            <h1 className='simplestatic-text-heading'>
              Talk - Design Director at Dropbox, Kurt Varner - The Conditions for Great Design
            </h1>
          </SimpleStatic.Header>
          <SimpleStatic.Body>
            <p className='simplestatic-text-description'>
              Kurt Varner, Design Director at Dropbox presents three fundamental elements necessary on any team to achieve great digital design output. He gives us an in-depth look inside the design process at Dropbox using Dropbox Paper, the advantages of hacky hour, participatory design, and composer teams, and gives practical tips on how to build a team that cares.
            </p>
          </SimpleStatic.Body>
          <SimpleStatic.Footer>
            <a className='simplestatic-text-link' href=''>
              Subscribe now - watch the hottest digital design talks and interviews from Awwwards, on our official YouTube Channel.
            </a>
          </SimpleStatic.Footer>
        </SimpleStatic>

        <Card
          avatarsSource={CONTENTS['avatar-1.jpg']}
          name='Nattarat Srila'
          rating='5.0'
          country='Thailand'
          chatMessageNumber='99'
          footerMessage='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        />
      </React.Fragment>
    )
  }

  /* Frontend working sample */
  /*
  constructor(props) {
    super(props)
    this.state = {
      isValidationError: false,
      isValidationSuccess: false,
      isShowSpecialMessage: false
    }
  }

  content = {
    onClickShowValidationError: () => {
      this.setState({
        isValidationError: true,
        isValidationSuccess: false
      })
      console.log('error')
    },
    onClickShowValidationSuccess: () => {
      this.setState({
        isValidationError: false,
        isValidationSuccess: true
      })
      console.log('success')
    },
    onClickShowSpecialMessage: () => {
      this.setState({
        isShowSpecialMessage: true
      })
      console.log('show special text')
    },
    onClickHideSpecialMessage: () => {
      this.setState({
        isShowSpecialMessage: false
      })
      console.log('hide special text')
    }
  }

  render() {
    const {
      isValidationError,
      isValidationSuccess,
      isShowSpecialMessage
    } = this.state

    return (
      <React.Fragment>
        <Simple
          className={
            ClassNames(
              { 'is-error': isValidationError },
              { 'is-success': isValidationSuccess },
              { 'is-special-message': isShowSpecialMessage }
            )
          }
          heading='Talk - Design Director at Dropbox, Kurt Varner - The Conditions for Great Design'
          description='Kurt Varner, Design Director at Dropbox presents three fundamental elements necessary on any team to achieve great digital design output. He gives us an in-depth look inside the design process at Dropbox using Dropbox Paper, the advantages of hacky hour, participatory design, and composer teams, and gives practical tips on how to build a team that cares.'
          footer={
            <a className='simple-text-link' href=''>
              Subscribe now - watch the hottest digital design talks and interviews from Awwwards, on our official YouTube Channel.
            </a>
          }
          specialMessage='Next stop - awwwards Conference New York November 15th & 16th 2018, digital designers network and learn key tools from visionaries and leading agencies about current trends and emerging web technologies, tickets on sale now!'
        />

        <SimpleStatic
          className={
            ClassNames(
              { 'is-error': isValidationError },
              { 'is-success': isValidationSuccess }
            )
          }
        >
          <SimpleStatic.Header>
            <h1 className='simplestatic-text-heading'>
              Talk - Design Director at Dropbox, Kurt Varner - The Conditions for Great Design
            </h1>
          </SimpleStatic.Header>
          <SimpleStatic.Body>
            <p className='simplestatic-text-description'>
              Kurt Varner, Design Director at Dropbox presents three fundamental elements necessary on any team to achieve great digital design output. He gives us an in-depth look inside the design process at Dropbox using Dropbox Paper, the advantages of hacky hour, participatory design, and composer teams, and gives practical tips on how to build a team that cares.
            </p>
          </SimpleStatic.Body>
          <SimpleStatic.Footer>
            <a className='simplestatic-text-link' href=''>
              Subscribe now - watch the hottest digital design talks and interviews from Awwwards, on our official YouTube Channel.
            </a>
          </SimpleStatic.Footer>
          {
            isShowSpecialMessage &&
              <SimpleStatic.SpecialMessage>
                Next stop - awwwards Conference New York November 15th & 16th 2018, digital designers network and learn key tools from visionaries and leading agencies about current trends and emerging web technologies, tickets on sale now!
              </SimpleStatic.SpecialMessage>
          }
        </SimpleStatic>

        <button onClick={this.content.onClickShowValidationError}>Show UI Error</button>
        <button onClick={this.content.onClickShowValidationSuccess}>Show UI Success</button>
        <button onClick={this.content.onClickShowSpecialMessage}>Show Special message</button>
        <button onClick={this.content.onClickHideSpecialMessage}>Hide Special message</button>
      </React.Fragment>
    )
  }
  */
}
