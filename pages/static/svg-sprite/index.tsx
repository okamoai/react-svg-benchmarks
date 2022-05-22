import type { NextPage } from 'next'
// @ts-ignore
import spinner from '../../../public/static.svg?svg-sprite'
import sprite from 'svg-sprite-loader/runtime/sprite.build'

sprite.add(spinner)

const SvgSprite: NextPage = () => {
  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: sprite.stringify() }} />
      {[...Array(250)].map((_, i) => (
        <svg key={i} viewBox={spinner.viewBox} width="32" height="32">
          <use xlinkHref={`#${spinner.id}`} />
        </svg>
      ))}
    </main>
  )
}

export default SvgSprite
