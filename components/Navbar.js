import Link from "next/link"
import Image from "next/image"
import { auth } from "@/auth"
import Logout from "./auth/Logout"

const Navbar = async ({ sidemenu }) => {
    const userInfo = await auth()
    console.log(userInfo);
    return (
        <nav>
            <Link href="/">
                <Image
                    src="/stayswift.svg"
                    alt="Stay Swift Logo"
                    width={200}
                    height={200} />
            </Link>

            {
                sidemenu && <ul>
                    <li>
                        <Link href="#">Recommended Places</Link>
                    </li>

                    <li>
                        <Link href="#">About Us</Link>
                    </li>

                    <li>
                        <Link href="#">Contact us</Link>
                    </li>

                    <li>
                        {userInfo && <Link href="/bookings"> My Bookings</Link>}
                    </li>

                    <li>
                        {
                            userInfo ? (<>
                                <span className="text-red-600 hover:text-orange-400">{userInfo?.user?.name}</span> | <Logout />
                            </>) :
                                <Link href="/login" className="login">Login</Link>

                        }
                    </li>
                </ul>
            }
        </nav>
    )
}

export default Navbar