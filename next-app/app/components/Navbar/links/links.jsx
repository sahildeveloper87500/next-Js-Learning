import Link from "next/link"
function Links(){
    const links=[
        {
            title:"homepage",
            path:"/"
        },
        {
            title:"contact",
            path:"/contact"
        },
        {
            title:"About",
            path:"/About"
        },
        {
            title:"Blog",
            path:"/Blog"
        }
    ]

    return (
        <div>
         {links.map((ele)=>(
            <Link href={ele.path} key={ele.title}>{ele.title}</Link>
         ))}
        </div>
    )

 
}
export default Links;