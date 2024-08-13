import Link from "next/link"

function NotFound(){
    return (
        <div>
            page not found.
            return to 
            <Link href="/">Homepage </Link>

        </div>
    )
}
export default NotFound;