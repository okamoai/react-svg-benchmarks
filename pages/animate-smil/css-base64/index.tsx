import type { NextPage } from 'next'
// @ts-ignore
import style from './index.module.css'

const CssBase64: NextPage = () => {
  return (
    <main>
      {[...Array(250)].map((_, i) => <span role="img" aria-label="" className={style.spinner} key={i} />)}
    </main>
  )
}

export default CssBase64
