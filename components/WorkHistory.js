import React from 'react'
import styled from 'styled-components'

const Experience = styled.p`
  padding-top: 80px;
  font-size: 80px;
  text-align: center;
`
const PrixzLogo = styled.img`
  padding: 10px;
  object-fit: content;
`

const WorkHistory = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <Experience>Experience</Experience>
      </div>
      <div className="row justify-content-around container">
        <div className="col-md-12 col-lg-6">
          <div class="card" style={{ width: '20rem' }}>
            <PrixzLogo
              src="http://old.prixz.com/public/img/brand-black@3x.png"
              class="card-img-top"
              alt="..."
            ></PrixzLogo>
            <div class="card-body">
              <h5 class="card-title">Fullstack Developer @ Prixz</h5>
              <p class="card-text">
                Worked with technologies like Vue, node, hapi to support a
                e-commerce for pharmaceutical products. Created an API for a
                delivery service. Stabilized the invoice module front to back.
              </p>
              <a
                href="http://old.prixz.com/"
                class="btn btn-light"
                target="_blank"
              >
                See project
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div class="card" style={{ width: '20rem' }}>
            <PrixzLogo
              src="http://old.prixz.com/public/img/brand-black@3x.png"
              class="card-img-top"
              alt="..."
            ></PrixzLogo>
            <div class="card-body">
              <h5 class="card-title">Fullstack Developer @ Prixz</h5>
              <p class="card-text">
                Worked with technologies like Vue, node, hapi to support a
                e-commerce for pharmaceutical products. Created an API for a
                delivery service. Stabilized the invoice module front to back.
              </p>
              <a
                href="http://old.prixz.com/"
                class="btn btn-light"
                target="_blank"
              >
                See project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkHistory
