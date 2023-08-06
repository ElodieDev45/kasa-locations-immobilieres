function ErrorComponent({errorNumber, errorText, altImg}) {
    return (
        <div className='error-component'>
            <div className="error-body">
                <h1 className="error-body__number">{errorNumber}</h1>
                <h2 className="error-body__text">{errorText}</h2>
            </div>
            <a href="../../">Retourner sur la page d'acceuil</a>
        </div>
    )
}

export default ErrorComponent