import Profilebox from "../../components/profilebox/Profilebox";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./home.css"
import Share from "../../components/share/Share";
import Sidebar from "../../components/sidebar/Sidebar";
import Profilecard from "../../components/profilecard/Profilecard";

function Home() {
    return (
        <>
            <Topbar />
            <main>
                <Sidebar />
                <div className="container">
                    <div className="left">
                        <Profilecard />
                    </div>
                    <div className="middle">
                        <Share />
                        <Feed />
                    </div>
                    <div className="right">
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe ipsum doloribus libero id nisi reiciendis, nemo recusandae consectetur at debitis, autem incidunt sapiente assumenda minima consequuntur, veritatis corporis officia.
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;