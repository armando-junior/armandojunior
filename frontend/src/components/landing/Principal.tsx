import Cabecalho from "@/components/shared/Cabecalho";
import {Tecnologia} from "@core";
import Tecnologias from "@/components/tecnologia/Tecnologias";

export interface PrincipalProps {
    tecnologias: Tecnologia[]
}

export default function Principal(props: PrincipalProps) {
    return (
        <div
            className="
                flex flex-col items-center justify-center h-[500px]
                bg-[url('/principal.jpg')] bg-cover bg-center
            "
        >
            <Cabecalho />
            <div className="flex-1 w-full flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col items-center gap-1">
                    <h1 className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span className="text-3xl sm:text-5xl font-bold text-center">Armando N Junior</span>
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>

                    </h1>
                    <h2 className="text-zinc-500 text-center">Software Developer at GAM</h2>
                </div>

                <Tecnologias lista={props.tecnologias} />
            </div>
        </div>
    );
}