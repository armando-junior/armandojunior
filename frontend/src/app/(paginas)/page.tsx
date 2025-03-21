import Principal from "@/components/landing/Principal";
import Curriculo from "@/components/curriculo";
import Container from "@/components/shared/Container";
import {obterTecnologias} from "@/functions/tecnologias";
import Projetos from "@/components/projetos/Projetos";
import {obterProjetos} from "@/functions/projetos";


export default async function Home() {
    const tecnologias = await obterTecnologias()
    const projetos = await obterProjetos()

  return (
      <div>
        <Principal tecnologias={tecnologias.destaques} />
        <Container className="py-10 flex flex-col gap-10 items-center">
            <Projetos titulo="Destaques" lista={projetos.destaques} />
            <Projetos titulo="Web" lista={projetos.web} />
            <Projetos titulo="Mobile" lista={projetos.mobile} />
            <Projetos titulo="Jogos" lista={projetos.jogos} />
            <Curriculo tecnologias={tecnologias.todas} />
        </Container>
      </div>
  );
}
