import '../modal.css'

export default function Modal({active, setActive, children}) {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={`py-10 px-24 ${active ? "modal__content active" : "modal__content"}`}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}