import React, { useRef } from 'react'

const Nav = () => {

    // const home = useRef(null)
    // const about = useRef(null)
    // const menu = useRef(null)
    // const testimonials = useRef(null)
 
    // const scrollToSection = (elementRef) => {
    //     window.scrollTo({
    //         top: elementRef.current.offsetTop,
    //         behavior: 'smooth',
    //     })
    // }
  return (
    <nav >
        <ul>
        <li><a href='the'>Home</a></li>
        <li><a href='fscrv'>About</a></li>
        <li><a href='wrvwrv'>Menu</a></li>
        <li><a href='wrv'>Reservations</a></li>
        <li><a href='wvwrv'>Order Online</a></li>
        <li><a href='wvr'>Testimonials</a></li>
        <li><a href='wrv'>LogIn</a></li>
    </ul>
    </nav>
  )
}

export default Nav