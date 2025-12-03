"use client";


import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode'; 


export default function SideNav() {
    const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true); // <- add loading state
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/"); // redirect to login page
  };

  useEffect(() => {
    // run this only on client
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/"); // redirect if not authenticated
      return;
    }

    try {
      const decoded = jwtDecode(token);

      // check if token is expired
      if (decoded.exp && decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        router.push("/");
      } else {
        setUsername(decoded.name ?? decoded.email);
      }
    } catch (err) {
      console.error(err);
      localStorage.removeItem("token");
      router.push("/");
    } finally {
      setLoading(false); // stop loading
    }
  }, [router]);

  if (loading) return null; // prevent rendering before username is loaded


  return (
    
    <nav className="menu" tabIndex="0">
            <div className="smartphone-menu-trigger"></div>
            <header className="avatar">
                <div className="avatar-img">
                    <Image 
                     src="/user-default.png"
                      alt="profile picture"
                      width={100}
                      height={100}
                      />
                </div>
                <div className="avatar-username">
                  {username &&  <h2>Welcome {username}</h2>}
                </div>
            </header>
            <ul className="sidenav-container">
              <div className="sidenav-middle">
                    <div className="sidenav-home">
                    <div className="home-img">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24px" height="24px">
                                <path d="M 32 8 C 31.08875 8 30.178047 8.3091875 29.435547 8.9296875 L 8.8007812 26.171875 C 8.0357812 26.810875 7.7634844 27.925203 8.2714844 28.783203 C 8.9184844 29.875203 10.35025 30.088547 11.28125 29.310547 L 12 28.710938 L 12 47 C 12 49.761 14.239 52 17 52 L 47 52 C 49.761 52 52 49.761 52 47 L 52 28.712891 L 52.71875 29.3125 C 53.09275 29.6255 53.546047 29.777344 53.998047 29.777344 C 54.693047 29.777344 55.382672 29.416656 55.763672 28.722656 C 56.228672 27.874656 55.954891 26.803594 55.212891 26.183594 L 52 23.498047 L 52 15 C 52 13.895 51.105 13 50 13 L 48 13 C 46.895 13 46 13.895 46 15 L 46 18.484375 L 34.564453 8.9296875 C 33.821953 8.3091875 32.91125 8 32 8 z M 32 12.152344 C 32.11475 12.152344 32.228766 12.191531 32.322266 12.269531 L 48 25.369141 L 48 46 C 48 47.105 47.105 48 46 48 L 38 48 L 38 34 C 38 32.895 37.105 32 36 32 L 28 32 C 26.895 32 26 32.895 26 34 L 26 48 L 18 48 C 16.895 48 16 47.105 16 46 L 16 25.367188 L 31.677734 12.269531 C 31.771234 12.191531 31.88525 12.152344 32 12.152344 z"/>
                        </svg>
                    </div>
                    <div className="home-label">
                            <li tabIndex="0" className="icon-dashboard">
                                <span>Home</span>
                                
                            </li>
                        </div>
                    </div>
                    <div className="sidenav-process">
                        <div className="process-img">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24px" height="24px"><path d="M22 51c-1-1-4-1-4-1l-.425-1.274c-.362-1.086-1.215-1.939-2.301-2.301L14 46c0 0 .5-2.5-1-4l25-25 8 10L22 51zM52 21l-9-9 4.68-4.68c0 0 3.5-1.5 7 2s2 7 2 7L52 21zM9 50l-1.843 4.476c-.614 1.49.877 2.981 2.367 2.367L14 55 9 50z"/>
                            </svg>
                        </div>
                        <div className="process-label">
                            <li tabIndex="0" className="icon-customers">
                            
                                <span>Process</span>
                            </li>
                        </div>
                    </div>
                    <div className="sidenav-inventory">
                        <div className="inventory-img">
                            <Image 
                                    src="/icons8-inventory-50.png"
                                    width={24}
                                    height={24}
                                    alt="inventory"
                                
                                />
                        </div>
                        <div className="inventory-label">
                            <li tabIndex="0" className="icon-users">
                            
                                <span>Inventory</span>
                            </li>
                        </div>
                    </div>
              </div> 
              <div className="sidenav-footer">
                
                    <div className="logout" onClick={handleLogout}>
                        
                            <div className="logout-img">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                                    <path d="M13 2C10.2386 2 8 4.23858 8 7C8 7.55228 8.44772 8 9 8C9.55228 8 10 7.55228 10 7C10 5.34315 11.3431 4 13 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H13C11.3431 20 10 18.6569 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 19.7614 10.2386 22 13 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H13Z" fill="#000000"/>
                                    <path d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11.2821C11.1931 13.1098 11.1078 13.2163 11.0271 13.318C10.7816 13.6277 10.5738 13.8996 10.427 14.0945C10.3536 14.1921 10.2952 14.2705 10.255 14.3251L10.2084 14.3884L10.1959 14.4055L10.1915 14.4115C10.1914 14.4116 10.191 14.4122 11 15L10.1915 14.4115C9.86687 14.8583 9.96541 15.4844 10.4122 15.809C10.859 16.1336 11.4843 16.0346 11.809 15.5879L11.8118 15.584L11.822 15.57L11.8638 15.5132C11.9007 15.4632 11.9553 15.3897 12.0247 15.2975C12.1637 15.113 12.3612 14.8546 12.5942 14.5606C13.0655 13.9663 13.6623 13.2519 14.2071 12.7071L14.9142 12L14.2071 11.2929C13.6623 10.7481 13.0655 10.0337 12.5942 9.43937C12.3612 9.14542 12.1637 8.88702 12.0247 8.7025C11.9553 8.61033 11.9007 8.53682 11.8638 8.48679L11.822 8.43002L11.8118 8.41602L11.8095 8.41281C11.4848 7.96606 10.859 7.86637 10.4122 8.19098C9.96541 8.51561 9.86636 9.14098 10.191 9.58778L11 9C10.191 9.58778 10.1909 9.58773 10.191 9.58778L10.1925 9.58985L10.1959 9.59454L10.2084 9.61162L10.255 9.67492C10.2952 9.72946 10.3536 9.80795 10.427 9.90549C10.5738 10.1004 10.7816 10.3723 11.0271 10.682C11.1078 10.7837 11.1931 10.8902 11.2821 11H3Z" fill="#000000"/>
                                </svg>
                            </div>
                            <div className="logout-label">
                                <li tabIndex="0" className="icon-settings">
                            
                                    <span>Logout</span>
                                </li>
                            </div>
                        
                    </div>
              
             </div> 
            </ul>
    </nav>

  )
}
