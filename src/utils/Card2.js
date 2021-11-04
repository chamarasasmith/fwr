import logo from "../assets/logo.svg";

export default function Card2() {
    return (
        <div className="card text-center h-100" style={{ borderRadius: 20 }}>
            <div className="card-body">
                <img src={logo} style={{ height: '100%', alignSelf: 'center' }} alt="" />
            </div>
        </div>
    );
}