import type { NextPage } from 'next'
// @ts-ignore
import Spinner from '../../../public/animate-smil.svg?inline-svg'

const InlineSvg: NextPage = () => {
  return (
    <main>
      {[...Array(250)].map((_, i) => <Spinner key={i} />)}
    </main>
  )
}

export default InlineSvg
