import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';

const Header = () => {

    const { value, actionsCount } = useSelector( state => state.counter );


    return (
        <header className={ styles.headerContainer }>
            <a href='/' className={ styles.title }>Oleksandr Niefodov</a> 

            <nav className={ styles.routerContainer }>
                <ul className={styles.ul}>
                    <li>
                        <NavLink end to='/' className={({ isActive }) => isActive && styles.active}>Home</NavLink>
                    </li>

                    <li>
                        <NavLink end to='/playgrounds' className={({ isActive }) => isActive && styles.active}>Playgrounds</NavLink>
                    </li>

                    <li>
                        <NavLink end to='/about' className={({ isActive }) => isActive && styles.active}>About</NavLink>
                    </li>
                </ul>
            </nav>

            <div>
                <p>placeholder toggle l&d mode</p>
            </div>
        </header>

    )
}

export default Header;