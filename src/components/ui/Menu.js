import React, { Component } from 'react'

export default class Menu extends Component {

  render () {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top box-shadow">
          <div className="container">
            <a href="#" className="navbar-brand justify-content-between">
              <img src="https://klase-honda.herokuapp.com/assets/img/logo.png" className="img-fluid" width={'70px'}/>
                <strong>Klase Honda Design</strong>
            </a>

            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#klasehonda_menu" aria-controls="klasehonda_menu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="klasehonda_menu">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link navbar_font_color" href="#"><i className="fal fa-home fa-lg"/> Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link navbar_font_color" href="#" role="link"><i className="fal fa-child fa-lg"/> Camisas</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link navbar_font_color" href="#" role="link"><i className="fal fa-graduation-cap fa-lg"/> Gorras</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link navbar_font_color" href="#" role="link"><i className="fal fa-coffee fa-lg"/> Tazas</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link navbar_font_color" href="#" role="link"><i className="fal fa-archive fa-lg"/> Termos</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link navbar_font_color" href="#"><i className="fal fa-cloud-download fa-lg"/> Descarga</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
