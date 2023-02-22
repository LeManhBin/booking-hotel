import React from 'react'
import BannerDefine from '../../components/BannerDefine/BannerDefine'
import useScrollToTop from '../../hooks/useScrollToTop'
import './AboutPage.scss'

const AboutPage = () => {
    useScrollToTop()
  return (
    <div className='about'>
        <div className='about-banner'>
            <BannerDefine title={"About Us"}/>
        </div>
        <div className='heading'>
            <h2>Since 2023</h2>
        </div>
        <div className='explain'>
            <p className='explain-primary'>It is a long established fact that a reader will be distracted by the readable content of a page when looking responsive layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here, making it look like readable English.</p>
            <p className='explain-secondary'>Nullam et lorem magna, in consectetur erat. Aliquam fermentum fringilla libero a vulputate. Curabitur non arcu non tortor semper dictum.</p>
        </div>
        <div className='achievement'>
            <div className='achievement__circle'>
                <span className='achievement__circle--quantity'>200</span>
                <span className='achievement__circle--pro'>Room</span>
            </div>
            <div className='achievement__circle'>
                <span className='achievement__circle--quantity'>200</span>
                <span className='achievement__circle--pro'>Room</span>
            </div>
            <div className='achievement__circle'>
                <span className='achievement__circle--quantity'>200</span>
                <span className='achievement__circle--pro'>Room</span>
            </div>
            <div className='achievement__circle'>
                <span className='achievement__circle--quantity'>200</span>
                <span className='achievement__circle--pro'>Room</span>
            </div>
        </div>
        <div className='heading'>
            <h2>Our Standard</h2>
        </div>
        <div className='standard'>
            <div className='standard__container'>
                <div className='standard__left'>
                    <h5 className='standard__title'>
                        1. Choose music carefully.
                    </h5>
                    <p className='standard__detail'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                </div>
                <div className='standard__left'>
                    <h5 className='standard__title'>
                        2. Keep the restaurant spotless.
                    </h5>
                    <p className='standard__detail'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                </div>
            </div>
            <span className='line-center'></span>
              <div className='standard__container'>
                  <div className='standard__right'>
                      <h5 className='standard__title'>
                        3. Never serve food that has expired.
                      </h5>
                      <p className='standard__detail'>
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                      </p>
                  </div>
                  <div className='standard__right'>
                      <h5 className='standard__title'>
                         4. Make deliberate choices with lighting.
                      </h5>
                      <p className='standard__detail'>
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                      </p>
                  </div>
              </div>
        </div>
        <div className='heading gallery'>
            <h2>Gallery</h2>
            <span>There are many variations of passages of Lorem Ipsum available.</span>
        </div>
    </div>
  )
}

export default AboutPage