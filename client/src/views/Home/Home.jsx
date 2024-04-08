import Cards from '../../components/Cards/Cards';
import './Home.css';

const Home = () => {
    
  return (
    <div>
      <div className="container-home">
          <Cards  /> 
      </div>
      <div className='separeted'></div>
      <div className='social-container'>
        <div className='contact-info'>
    
          <h2>Contact Info</h2>
          <p> Luis Gómez R.</p>
          <p>Address: Bogotá D.C</p>
          <p>Phone: (+57)3507058463</p>
          <p>Email:  luiscgr97@gmail.com</p>
        </div>
        <div className='networks-info'>
          <button>
            <a href='https://github.com/Imcamiloup' target='_blank'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" 
                alt="github"  className='github-img' />
            </a>
          </button>
          <button>
            <a href='https://www.linkedin.com/in/imcamiloup//' target='_blank'>
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" 
                alt="linkedin" className='linkedin-img'/>
            </a>
          </button>
          
          
        </div>
        <div className='signature'></div>
      </div>
    </div>
    
  );
};

export default Home;
