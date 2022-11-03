import React from 'react'
import { Link } from 'react-router-dom';
import './notFound.scss'

function NotFound() {
  return (
    <div>
        <section id="notfound">
            <div className="container">
                <div className="text">
                    <h1>404</h1>
                    <h2>That page can't be found</h2>
                    <button>
                        <Link to='/' style={{textDecoration: "none"}}>GO TO HOMEPAGE</Link>
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default NotFound