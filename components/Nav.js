import { Button,} from 'antd';
import styles from '../styles/Nav.module.css'
export function Nav(){
    return (<div className={styles.dive}>
        <div className={styls.sok}>
    <Button className={styles.butt} href="/scetchess" >WWW</Button> 
    <Button className={styles.butt} href="/ikone">ikone,first</Button>
    <Button className={styles.butt} href="/telegun">telegramm</Button>
    <Button className={styles.butt} href="/buttondownload">button dowenload</Button>
 </div>
 </div>
    )
}