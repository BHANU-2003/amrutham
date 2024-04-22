import React from 'react'
import './Pages.css'
import pharma from './pharma.jpg'
import message from './Assests/message.png'
import secure from './Assests/secure.png'
import doctor from './Assests/doctor.png'
import report from './Assests/report.png'
import ayurvedic from './Assests/ayurvedic.png'
import stories from './Assests/stories.png'
import app from './Assests/app.png'
import mobile from './Assests/mobile.png'
import expert from './Assests/expert.png'
import consult from './Assests/consult.png'

const Pages = () => {
  return (
    <><div className='page' style={{backgroundImage: `url(${pharma})`}}>    
          <h2 className='heading2'>Namaste, Welcome to Amrutam </h2>
          <h1 className='heading1'>Step into Holistic Healing with <span className='ayurvedic'>Ayurveda</span> Book Consultation with certified Experts. </h1>
          <h3 className='heading3'>Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</h3>
          <button className='button'>BOOK AN APPOINTMENT</button>
      </div><div className='services'>
              <img src={message} alt='' />
              <p className='paragraph'>Convinent online % In-clinic consultations </p>
              <img src={secure} alt='' />
              <p className='paragraph'>Safe and effective treatment</p>
              <img src={doctor} alt='' />
              <p className='paragraph'>Experienced Ayurvedic Practitioners</p>
              <img src={report} alt='' />
              <p className='paragraph'>personalized Treatment Plans & Guidance</p>
          </div><div className='yoga-container'>
              <div className='ayurvedic-container'>
                  <h1 className='ayurvedic-heading'>Discover Ayurveda's with us</h1>
                  <hr />
                  <p className='ayurvedic-paragraph'>Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It's like a journey to better health using ancient wisdom,
                      a totally effective approach for a better life. </p>
              </div>
              <img src={ayurvedic} alt='' />
          </div><div className='middle-container'>
              <h1 className='middle-heading'>What sets Ayurvedic consultations apart?</h1>
              <div className='mid-inner-container'>
                  <img src={consult} alt='' />
              </div>
          </div><div className='approach-container'>
              <div className='approach-inner-container'>
                  <h1 className='approach-heading'>Our ayurvedic approach</h1>
                  <hr />
                  <p className='approach-paragraph'>At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.</p>
              </div>
              <div className='approach-card-container'>
                  <div className='approach-card-inner-container'>
                      <div className='approach-card-box'>
                          <div className='number-container'>
                              <h2 className='card-number'>1</h2>
                          </div>
                          <div className='card-text-container'>
                              <h1 className='text-heading'>Make Appointment</h1>
                              <p className='text-paragraph'>You must make an appointment in advance, to choose the service and date.</p>
                          </div>
                      </div>
                  </div>
                  <div className='approach-card-inner-container'>
                      <div className='approach-card-box'>
                          <div className='number-container'>
                              <h2 className='card-number'>2</h2>
                          </div>
                          <div className='card-text-container'>
                              <h1 className='text-heading'>Consultations</h1>
                              <p className='text-paragraph'>The next stage involves a thorough consultation with an Ayurveda practitioner.</p>
                          </div>
                      </div>
                  </div>
                  <div className='approach-card-inner-container'>
                      <div className='approach-card-box'>
                          <div className='number-container'>
                              <h2 className='card-number'>3</h2>
                          </div>
                          <div className='card-text-container'>
                              <h1 className='text-heading'>Treatment Planning</h1>
                              <p className='text-paragraph'>The Ayurvedic practitioner creates a personalized treatment plan for you</p>
                          </div>
                      </div>
                  </div>
                  <div className='approach-card-inner-container'>
                      <div className='approach-card-box'>
                          <div className='number-container'>
                              <h2 className='card-number'>4</h2>
                          </div>
                          <div className='card-text-container'>
                              <h1 className='text-heading'>Maintenance</h1>
                              <p className='text-paragraph'>These visits allow for assessment of progress, adjustments to the treatment.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div><div className='story-container'>
              <h1 className='story-heading'>STORIES FROM OUR VALUED CUSTOMERS!</h1>
              <img src={stories} alt='' />
          </div><div className='experts-container'>
              <h1 className='experts-heading'>Meet our Ayurveda experts </h1>
              <div className='expert-image'>
                  <img src={expert} alt='' />
              </div>
          </div>
        <div className='app'>
        <div className='app-container'>
            <div className='app-inner-container'>
                  <h1 className='app-heading'>Amrutam home App</h1>
                  <p className='app-paragraph'>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
                  <h2 className='app-heading2'>Get a diet & lifestyle consultation with ayurvedic experts across the globe </h2>
                  <h1 className='app-heading3'>Get the App now</h1>
                  <img src={app} alt='' />
            </div>
                <img src={mobile} alt='' className='mobile' />
          </div>
        </div>
          <div className='bottom-container'>
              <div className='bottom-inner-container'>
                  <h1 className='bottom-heading'>Information</h1>
                  <p className='bottom-paragraph'>About Us <r />
                      Terms and Conditions<br />
                      Privacy Policy<br />
                      Privacy Policy for Mobile Apps<br />
                      Shipping and Returns Policy<br />
                      International Delivery<br />
                      For Businesses, Hotels and Resorts</p>
              </div>
          </div></>
  )
}

export default Pages
