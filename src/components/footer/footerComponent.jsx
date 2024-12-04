import logoFooter from '../../assets/img/logoFooter.png';
const FooterComponent = () => {
    
    return (
        <div className="">
            <div className="flex flex-col items-center">
                <img src={logoFooter} alt="Resenhando 2.0 Logo Footer" className="max-h-16"/>
                <div className="text-white">© Resenhando - 2024</div>
            </div>
        </div>
    )
}
export default FooterComponent;