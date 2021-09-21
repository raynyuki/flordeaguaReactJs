import './NavBar.css';

const NavBar = () => {
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
           <div className="container-fluid">
               <a className="navbar-brand" href="#">Flor de Agua</a>
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">About Us</a>
                    </li>
                </ul>    
           </div>
        </nav>
    );
};

export default NavBar;

