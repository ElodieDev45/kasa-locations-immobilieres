function ErrorComponent({errorImg, errorText, altImg}) {
    return (
        <div className='error-component'>
            <div className="error-body">
                <img src={errorImg} alt={altImg} className='error-img' />
                <h1>{errorText}</h1>
            </div>
            <a href="../../">Retourner sur la page d'acceuil</a>
        </div>
    )
}

export default ErrorComponent