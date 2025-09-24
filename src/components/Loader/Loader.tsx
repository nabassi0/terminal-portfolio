import "./Loader.css"

export default function Loader() {
    return (
        <div className="content" role="status" aria-live="polite" aria-busy="true">
            <span className="text-shadows">
                Loading
                <span className="dots" aria-hidden="true">
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                </span>
            </span>
        </div>
    )
}