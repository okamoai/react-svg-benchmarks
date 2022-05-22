import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import style from './index.module.css'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Next.js x SVG Icon benchmarks</title>
      </Head>
      <h1>Next.js x SVG Icon benchmarks</h1>
      <h2>Static SVG Icon (render 250 items)</h2>
      <ul>
        <li><Link href="/static/inline-svg/"><a>Inline SVG</a></Link></li>
        <li><Link href="/static/svg-sprite/"><a>SVG Sprite</a></Link></li>
        <li><Link href="/static/img/"><a>Img</a></Link></li>
        <li><Link href="/static/img-base64/"><a>Img Base64</a></Link></li>
        <li><Link href="/static/css-base64/"><a>CSS Base64</a></Link></li>
      </ul>
      <table className={style.table}>
        <thead>
          <tr>
            <th></th>
            <td>Inline SVG</td>
            <td>SVG Sprite</td>
            <td>Img</td>
            <td>Img Base64</td>
            <td>CSS Base64</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>HTML size (external file size)</th>
            <td>297 kB</td>
            <td>29 kB</td>
            <td>20.9 kB<br />(IMG 3 kB)</td>
            <td>410 kB</td>
            <td>21.3 kB<br />(CSS 2 kB)</td>
          </tr>
          <tr>
            <th>DOM elements</th>
            <td>3,256</td>
            <td>521</td>
            <td>256</td>
            <td>256</td>
            <td>256</td>
          </tr>
          <tr>
            <th>First Contentful Paint</th>
            <td>2.1 s</td>
            <td>0.8 s</td>
            <td>0.8 s</td>
            <td>2.6 s</td>
            <td>0.9 s</td>
          </tr>
          <tr>
            <th>Speed Index</th>
            <td>2.3 s</td>
            <td>0.9 s</td>
            <td>0.8 s</td>
            <td>2.6 s</td>
            <td>0.9 s</td>
          </tr>
          <tr>
            <th>Time to Interactive</th>
            <td>4.6 s</td>
            <td>3.1 s</td>
            <td>2.5 s</td>
            <td>3.9 s</td>
            <td>2.1 s</td>
          </tr>
          <tr>
            <th>Total Blocking Time</th>
            <td>247 ms</td>
            <td>100 ms</td>
            <td>27 ms</td>
            <td>13 ms</td>
            <td>10 ms</td>
          </tr>
          <tr>
            <th>main thread work</th>
            <td>0.9 s</td>
            <td>0.8 s</td>
            <td>0.4 s</td>
            <td>0.4 s</td>
            <td>0.3 s</td>
          </tr>
          <tr>
            <th className={style.indent}>Script Parsing &amp; Compilation</th>
            <td>14 ms</td>
            <td>15 ms</td>
            <td>12 ms</td>
            <td>14 ms</td>
            <td>12 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Script Evaluation</th>
            <td>272 ms</td>
            <td>217 ms</td>
            <td>159 ms</td>
            <td>186 ms</td>
            <td>120 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Parse HTML &amp; CSS</th>
            <td>117 ms</td>
            <td>31 ms</td>
            <td>77 ms</td>
            <td>51 ms</td>
            <td>10 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Style &amp; Layout</th>
            <td>152 ms</td>
            <td>230 ms</td>
            <td>27 ms</td>
            <td>29 ms</td>
            <td>41 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Rendering</th>
            <td>73 ms</td>
            <td>85 ms</td>
            <td>35 ms</td>
            <td>39 ms</td>
            <td>28 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Garbage Collection</th>
            <td>14 ms</td>
            <td>15 ms</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th className={style.indent}>Other</th>
            <td>205 ms</td>
            <td>208 ms</td>
            <td>143 ms</td>
            <td>106 ms</td>
            <td>90 ms</td>
          </tr>
        </tbody>
      </table>

      <h2>CSS Animation SVG Icon (render 250 items)</h2>
      <ul>
        <li><Link href="/animate-css/inline-svg/"><a>Inline SVG</a></Link></li>
        <li><Link href="/animate-css/svg-sprite/"><a>SVG Sprite</a></Link></li>
        <li><Link href="/animate-css/img/"><a>Img</a></Link></li>
        <li><Link href="/animate-css/img-base64/"><a>Img Base64</a></Link></li>
        <li><Link href="/animate-css/css-base64/"><a>CSS Base64</a></Link></li>
      </ul>
      <table className={style.table}>
        <thead>
          <tr>
            <th></th>
            <td>Inline SVG</td>
            <td>SVG Sprite *</td>
            <td>Img</td>
            <td>Img Base64</td>
            <td>CSS Base64</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>HTML size</th>
            <td>457 kB</td>
            <td>32 kB</td>
            <td>22.1 kB<br />(IMG 3.6 kB)</td>
            <td>624 kB</td>
            <td>21.3 kB<br />(CSS 2.9 kB)</td>
          </tr>
          <tr>
            <th>DOM elements</th>
            <td>3,506</td>
            <td>533</td>
            <td>256</td>
            <td>256</td>
            <td>256</td>
          </tr>
          <tr>
            <th>First Contentful Paint</th>
            <td>2.9 s</td>
            <td>0.9 s</td>
            <td>0.8 s</td>
            <td>3.7 s</td>
            <td>0.9 s</td>
          </tr>
          <tr>
            <th>Speed Index</th>
            <td>9.1 s</td>
            <td>5 s</td>
            <td>0.8 s</td>
            <td>3.7 s</td>
            <td>0.9 s</td>
          </tr>
          <tr>
            <th>Time to Interactive</th>
            <td>36.4 s</td>
            <td>161.8 s</td>
            <td>2.2 s</td>
            <td>5 s</td>
            <td>2.8 s</td>
          </tr>
          <tr>
            <th>Total Blocking Time</th>
            <td>28,393 ms</td>
            <td>129,960 ms</td>
            <td>27 ms</td>
            <td>30 ms</td>
            <td>30 ms</td>
          </tr>
          <tr>
            <th>main thread work</th>
            <td>47.8 s</td>
            <td>162.4 s</td>
            <td>1.2 s</td>
            <td>1.6 s</td>
            <td>1.2 s</td>
          </tr>
          <tr>
            <th className={style.indent}>Script Parsing &amp; Compilation</th>
            <td>15 ms</td>
            <td>14 ms</td>
            <td>12 ms</td>
            <td>13 ms</td>
            <td>15 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Script Evaluation</th>
            <td>2,753 ms</td>
            <td>638 ms</td>
            <td>174 ms</td>
            <td>204 ms</td>
            <td>142 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Parse HTML &amp; CSS</th>
            <td>114 ms</td>
            <td>38 ms</td>
            <td>82 ms</td>
            <td>62 ms</td>
            <td>13 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Style &amp; Layout</th>
            <td>13,388 ms</td>
            <td>90,283 ms</td>
            <td>91 ms</td>
            <td>102 ms</td>
            <td>109 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Rendering</th>
            <td>4,928 ms</td>
            <td>22,454 ms</td>
            <td>681 ms</td>
            <td>993 ms</td>
            <td>732 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Garbage Collection</th>
            <td>103 ms</td>
            <td>59 ms</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th className={style.indent}>Other</th>
            <td>26,446 ms</td>
            <td>48,920 ms</td>
            <td>220 ms</td>
            <td>206 ms</td>
            <td>175 ms</td>
          </tr>
        </tbody>
      </table>
      <p>* Issues affecting this run of Lighthouse: The page loaded too slowly to finish within the time limit</p>


      <h2>SMIL Animation SVG Icon (render 250 items)</h2>
      <ul>
        <li><Link href="/animate-smil/inline-svg/"><a>Inline SVG</a></Link></li>
        <li><Link href="/animate-smil/svg-sprite/"><a>SVG Sprite</a></Link></li>
        <li><Link href="/animate-smil/img/"><a>Img</a></Link></li>
        <li><Link href="/animate-smil/img-base64/"><a>Img Base64</a></Link></li>
        <li><Link href="/animate-smil/css-base64/"><a>CSS Base64</a></Link></li>
      </ul>
      <table className={style.table}>
        <thead>
          <tr>
            <th></th>
            <td>Inline SVG</td>
            <td>SVG Sprite</td>
            <td>Img</td>
            <td>Img Base64</td>
            <td>CSS Base64</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>HTML size</th>
            <td>620 kB</td>
            <td>32 kB</td>
            <td>22.4 kB<br />(IMG 4.4 kB)</td>
            <td>861 kB</td>
            <td>21.3 kB<br />(CSS 3.8 kB)</td>
          </tr>
          <tr>
            <th>DOM elements</th>
            <td>6,256</td>
            <td>560</td>
            <td>256</td>
            <td>256</td>
            <td>256</td>
          </tr>
          <tr>
            <th>First Contentful Paint</th>
            <td>3.6 s</td>
            <td>0.8 s</td>
            <td>0.8 s</td>
            <td>4.9 s</td>
            <td>0.9 s</td>
          </tr>
          <tr>
            <th>Speed Index</th>
            <td>3.7 s</td>
            <td>1.4 s</td>
            <td>0.8 s</td>
            <td>4.9 s</td>
            <td>0.9 s</td>
          </tr>
          <tr>
            <th>Time to Interactive</th>
            <td>13.1 s</td>
            <td>9.1 s</td>
            <td>2.2 s</td>
            <td>6.2 s</td>
            <td>2.2 s</td>
          </tr>
          <tr>
            <th>Total Blocking Time</th>
            <td>6,017 ms</td>
            <td>3,833 ms</td>
            <td>20 ms</td>
            <td>20 ms</td>
            <td>10 ms</td>
          </tr>
          <tr>
            <th>main thread work</th>
            <td>10.2 s</td>
            <td>9.7 s</td>
            <td>2.7 s</td>
            <td>4.1 s</td>
            <td>2.7 s</td>
          </tr>
          <tr>
            <th className={style.indent}>Script Parsing &amp; Compilation</th>
            <td>12 ms</td>
            <td>14 ms</td>
            <td>11 ms</td>
            <td>13 ms</td>
            <td>14 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Script Evaluation</th>
            <td>336 ms</td>
            <td>195 ms</td>
            <td>168 ms</td>
            <td>206 ms</td>
            <td>133 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Parse HTML &amp; CSS</th>
            <td>189 ms</td>
            <td>24 ms</td>
            <td>82 ms</td>
            <td>66 ms</td>
            <td>12 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Style &amp; Layout</th>
            <td>3,280 ms</td>
            <td>5,158 ms</td>
            <td>73 ms</td>
            <td>73 ms</td>
            <td>105 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Rendering</th>
            <td>788 ms</td>
            <td>1,352 ms</td>
            <td>2,089 ms</td>
            <td>3,490 ms</td>
            <td>2,136 ms</td>
          </tr>
          <tr>
            <th className={style.indent}>Garbage Collection</th>
            <td>13 ms</td>
            <td>11 ms</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th className={style.indent}>Other</th>
            <td>5,549 ms</td>
            <td>2,973 ms</td>
            <td>319 ms</td>
            <td>311 ms</td>
            <td>288 ms</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default Home
