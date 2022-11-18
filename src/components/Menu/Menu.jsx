import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/Home'>Inicio</Link>
          </li>

          <li>
          <Link to='/News'>Noticias</Link>
          </li>

          <li>
          <Link to='/Form'>Formulario</Link>
          </li>

          <li>
          <Link to='/Table'>Tabla</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
