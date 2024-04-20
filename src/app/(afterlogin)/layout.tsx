import styles from './layout.module.css';

export default function Layout({children} : {children : React.ReactNode}) {
    return (
        <main className=''>
            <section>
                <div className={styles.logo}></div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Search</li>
                        <li>Notice</li>
                        <li>Message</li>
                        <li>Message</li>
                    </ul>
                </nav>
            </section>
            {children}
        </main>
        
    );
}

