import studentlogo from '../assets/student-portal.png'

export default function Navbar(){
    return (
    <nav>
        <img src={studentlogo} alt="student" style={{width:"55px",height:"55px"}} />
     <h2>Student Task Portal</h2>
     <div className="nav-links">
    <button>
        <a href="#"><span>Dashboard</span></a>
    </button>

    <button>
        <a href="#"><span>Tasks</span></a>
    </button>
     </div>
    </nav>
    );
}
