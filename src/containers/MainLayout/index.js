import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Card
} from 'components'
import {
  CONTENTS,
  ICONS
} from 'themes'

export class MainLayoutContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Main layout</h1>
        <Card>
          <Card.Body>
            <Card.Avatar 
              src={CONTENTS['avatar-1.jpg']}
            />
            <Card.Info>
              <div className='card-info-heading'>Nattarat Srila</div>
              <ul className='card-info-list'>
                <li className='card-info-list-item'>
                  <img className='card-info-icon is-star' src={ICONS['icon-star.svg']} alt='Bullet' />
                  <span className='card-info-detail'>5.0</span>
                </li>
                <li className='card-info-list-item'>
                  <img className='card-info-icon' src={ICONS['icon-flag-united-kingdom.svg']} alt='Bullet' />
                  <span className='card-info-detail'>United Kingdom</span>
                </li>
              </ul>
            </Card.Info>
            <Card.Contact>
              <div className='card-contact-button'>
                <img className='card-contact-button-icon is-phone' src={ICONS['icon-phone.svg']} alt='Icon' />
              </div>
              <div className='card-contact-button'>
                <img className='card-contact-button-icon is-chat' src={ICONS['icon-chat.svg']} alt='Icon' />
                <div className='card-contact-badge'>
                  <span className='card-contact-badge-number'>9</span>
                </div>
              </div>
            </Card.Contact>
          </Card.Body>
          <Card.Footer>
            <div className='card-footer-label'>Note:</div>
            <p className='card-footer-message'>Party on the beach</p>
          </Card.Footer>
        </Card>
        <Link to='/ui'>
          <button>
            <small>Go to UI page</small>
          </button>
        </Link>
      </React.Fragment>
    )
  }
}
