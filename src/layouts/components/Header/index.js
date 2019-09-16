import React  from 'react'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import { Calendar } from 'react-feather'
import { CALENDAR,  CALENDAR_WEEKLY } from 'routes'
import { useStore } from 'hooks'
import GoogleLogin from 'react-google-login';

import s from './style.module.scss'

const Header = observer(() => {
  const { user: userStore, auth: authStore } = useStore()
  return (
    <header className={s.header}>
      <div className={s.headerCaption}><p>calendarapp.ml</p> <div className={s.calendarIcon}><Calendar size={32} color={'#429ADF'}/></div></div>
      <div className={s.linksWrapper}>
          <Link to={CALENDAR}><div className={s.link}><p>Calendar</p></div></Link>
          <Link to={CALENDAR_WEEKLY}><div className={s.link}><p>Animations example</p></div></Link>
      </div>
      <div className="googleWrapper">
        {
          authStore.authenticated && userStore.userProfile
          ? <div className={s.profile}>
              <p className={s.username}>{userStore.userProfile?.name}</p>
              <div className={s.avatar}>
                <img className={s.userpic} src={userStore.userProfile?.imageUrl} alt=""/>
              </div>
              </div>
          : <div className={s.profile}>
              <GoogleLogin
                  clientId="173331116116-10ark5tpisftepisa4ts5orb1p1cteom.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={(response)=> {
                    authStore.runSession(response?.tokenObj)
                    authStore.setUser(response?.profileObj)
                  }}
                  onFailure={()=>console.log('fail')}
              />
          </div>}
      </div>
    </header>
  )
})

export default Header
