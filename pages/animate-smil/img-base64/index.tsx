/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
// @ts-ignore
import spinner from '../../../public/animate-smil.svg?base64'

const ImgBase64: NextPage = () => {
  return (
    <main>
      {[...Array(250)].map((_, i) => <img key={i} src={spinner} width="32" height="32" alt="" decoding="async" />)}
    </main>
  )
}

export default ImgBase64
