import Link from "next/link"
const Nav = () =>{

    return (
        <div>
            <nav className="text-bule-700 text-end mx-6">
            <Link href = "/">Home</Link>
            <Link href= "/about"> About</Link>
            <Link href = "blog">Blog</Link>
            <Link href= "product">Product </Link>
            <Link href = "contectus">ContectUs </Link>
            </nav>
        </div>
    )
}

export default Nav;