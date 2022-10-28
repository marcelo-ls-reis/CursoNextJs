import Link from 'next/link'

export default function Navbar(){
    return (
    <div>    
      <ul>
        <li>
        <Link href='/products' >Products</Link>
        </li>
        <li>
        <Link href='/'>Home</Link>
        </li>
      </ul>
    </div>
    )
}