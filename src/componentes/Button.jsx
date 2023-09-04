export default function Button({children, variante="primary", ...props }){
    const styles = {
        primary: "bg-pink-600 hover:bg-pink-700",
        secundary: "border-slate-400 border-2 hover:bg-slate-200"
    }

    const varianteClass = `py-2 px-4 rounded ${styles[variante]} `;

    return(
        <button type="submit" {...props} className={varianteClass}>
            {children}
        </button>
    )

}