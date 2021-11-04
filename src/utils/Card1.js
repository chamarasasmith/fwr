
export default function Card1({ title, count, subtitle, logo }) {
    return (
        <div className="card text-center h-100" style={{ borderRadius: 20 }}>
            <img src={logo} className="card-img-top" style={{ width: '20%', alignSelf: 'center', paddingTop: 20 }} alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h2 className="card-title fw-bold">{count}</h2>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
            </div>
        </div>
    );
}