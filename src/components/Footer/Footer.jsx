
import Logo from '/Home_Logo.png'
const Footer = () => {
  return (
    <footer className="bg-light py-10">
    <div className="md:flex justify-center mx-auto w-5/6 gap-16">
      <div className="mt-16 basis-1/2 md:mt-0">
        <img src={Logo} alt="Logo" />
        <p className="my-6">
         The first Application to help homeless by displaying shelters and organizations
         that support them and restaurant that provides free meals for them
        </p>
        <p>© WayT-{">"}Home All Rights Reserved.</p>
      </div>
      <div className="mt-16 md:mt-0 basis-1/4 flex flex-col">
         <h4 className="font-bold">Links</h4>
         <a href='#' className="my-4">Massa orci senectus</a>
         <a href='#' className="my-4">UIlamcorper viviamus</a>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us :</h4>
          <p>Tempus Metus Mattis Risus Volutpat egestas.</p>
          <p>(333)425-6825</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
