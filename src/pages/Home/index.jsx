import { HomeBanner, HomePerfil, HomePerfilImg, HomePerfilName, HomePerfilRole } from "./style"

export const Home = ()=>{
    return(
        <HomeBanner>
            <HomePerfil>
            <HomePerfilImg src={"https://i.imgur.com/dsTt3q8.jpg"}/>
            <HomePerfilName>Cláudio Dantas</HomePerfilName>
            <HomePerfilRole>Desenvolvedor FullStack</HomePerfilRole>

            </HomePerfil>
            
        </HomeBanner>
    )
}
