import Image from "../Image/Image"
import Text from "../Text/Text"

import eggMobile from "../../assets/mobile/image-transform.jpg"
import eggDesktop from "../../assets/desktop/image-transform.jpg"
import glassMobile from "../../assets/mobile/image-stand-out.jpg"
import glassDesktop from "../../assets/desktop/image-stand-out.jpg"

const Services = () => {
  return (
    <section className="tablet:grid tablet:grid-cols-2">
      {/*order solo funciona cuando el elemento padre tiene grid*/}
      <Image
        order="order-2"
        imgMobile={eggMobile}
        imgDesktop={eggDesktop} />
      <Text
        order="order-1"
        title="Transform your brand"
        text="We are a full-service creative agency specializing in helping brands grow fast. 
        Engage your clients through compelling visuals that do most of the marketing for you."
        color="bg-Yellow" />
      <Image
        order="order-3"
        imgMobile={glassMobile}
        imgDesktop={glassDesktop} />
      <Text
        order="order-4"
        title="Stand out to the right audience"
        text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        color="bg-Soft-red" />
    </section>
  )
}

export default Services