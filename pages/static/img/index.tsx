/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'

const Img: NextPage = () => {
  return (
    <main>
      {[...Array(250)].map((_, i) => <img key={i} src="/static.svg" width="32" height="32" alt="" decoding="async" />)}
    </main>
  )
}

export default Img
