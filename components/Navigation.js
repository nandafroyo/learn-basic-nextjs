import Link from 'next/link'


const Index = () => (
    <div>
        <Link href='/'>
            <a>Home</a>
        </Link>
        &nbsp;
        <Link href='/blog'>
            <a>Blog</a>
        </Link>

        <style jsx>{`
            a {
                text-decoration: none;
                font-size: 16px;
                text-transform: uppercase;
                color: #333333;
            }

            a:visited {
                color: #333333;
            }

            a:hover {
                color: #4F4F4F;
            }
        `}</style>
    </div>
)

export default Index;