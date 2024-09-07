import { Navigation } from "components/Navigation/Navigation"
import { Mainpage } from "components/Mainpage/Mainpage"
import styles from './Homepage.module.css'

export const Homepage = () => {
    return (
        <div className={styles.homepage}>
             <Navigation/>
             <Mainpage/>
        </div>
    )
}