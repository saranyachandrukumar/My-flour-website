import flour from'./flour.jpg'
import picture1 from'./picture1.jpg'
import picture2 from'./picture2.jpg'
// import phone from'./phone.jpg'


import './home.css'

function app(){

    return(
        <div className="Business">
        <img src={flour} alt="flour" className="flourimage"/>
        <h2 className='heading'>SRI MURUGAN FLOUR MILL</h2>
        <h3 className='intro'>Providing Finest traditional Indian Spices and flours</h3>
        <div className='maincontainer'>
             <div className='item'>
                <div className='firstone'>
                  <p>We offer a delectable dosa batter mix in our product lineup ensuring a truly delightful culinary experience.</p>
         <img src={picture1} alt="picture1" className="flourmix1"/> 
         </div>
         </div>

        <div className='item'>
        <div className='secondone'>
           <p > We expertly grind a variety of millets, chilies, spices, as well as dosa and idly batter, ensuring the highest quality blends. </p>
        <img src={picture2} alt="picture2" className="flourmix2"/> 
        </div>
        </div>

        <div className='item'>
        <div className='contact'>
              <h3 className='maincontact' >CONTACT US </h3>

        <p className='details'> Selvaraj<br/>
               Hostel road<br/>
                  Vadugapalayam <br/>
                       Palladam <br/>
                       </p>
                       {/* <img src={phone} alt="phone" className="phone"/>  */}

                       <h4>+919095469314</h4>

                            </div>
                                 </div>


        </div>
        </div>
    )

}

export default app