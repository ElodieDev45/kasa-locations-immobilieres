import './errorComponent.css'

function ErrorComponent({errorImg, errorText, altImg}) {
    return (
        <div className='error-component'>
            <div className="error-body">
                <img src={errorImg} alt={altImg} className='error-img' />
                <h2>{errorText}</h2>
            </div>
            <a href="../../">Retourner sur la page d'acceuil</a>
        </div>
    )
}

export default ErrorComponent