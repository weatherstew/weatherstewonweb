import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none',
	padding: '10px'
}

// const authenticatedOptions = (
// 	<>
// 		<Nav.Item>
// 			<Link to='change-password' style={linkStyle}>
// 				Change Password
// 			</Link>
// 		</Nav.Item>
// 		<Nav.Item>
// 			<Link to='sign-out' style={linkStyle}>
// 				Sign Out
// 			</Link>
// 		</Nav.Item>
// 	</>
// )

// const unauthenticatedOptions = (
// 	<>
//         <Nav.Item>
// 		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
//         </Nav.Item>
//         <Nav.Item>
// 		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
//         </Nav.Item>
// 	</>
// )

const alwaysOptions = (
	<>
		<Nav.Item>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='/games' style={linkStyle}>
				Games
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='/about' style={linkStyle}>
				About
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='/contact' style={linkStyle}>
				Contact
			</Link>
		</Nav.Item>
	</>
)

const Header = ({ user }) => (
	<Navbar bg='secondary' variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to='/' style={linkStyle}>
                weatherstew
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{/* {user ? authenticatedOptions : unauthenticatedOptions} */}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
