import React from 'react';
import { connect } from 'react-redux';
import './Header.css'

//takes two props.. actually signOut comes from App: line45, and user comes from mapState below
export const Header = ({ user, signOut }) => {
  return (
    <header>
      <h1>Dr. Watson</h1>
      {user && <button onClick={signOut}>Sign Out</button>}
    </header>
  )
}

export const mapStateToProps = ({ user }) => ({
  user
})

export default connect(mapStateToProps)(Header);