import React from "react";
import Countdown from "../components/Countdown";
import { Titulo } from "../components/titulo";

import "../styled/container.css"
import "../styled/contador.css"
import Minutos from "../components/minutos";
import Horas from "../components/horas";
import Dias from "../components/dias";

export default function Container() {
    return (
        <div className="fondo">
            <div className="pantalla">
                <Titulo />
                <div className="w-100 contenedor">
                    <div className="w-75 mx-auto">
                        <div className="tiempo">
                            <Dias />
                            <h5 className="mt-4 text-center">Days</h5>
                        </div>
                        <div className="tiempo">
                            <Horas />
                            <h5 className="mt-4 text-center">Hours</h5>
                        </div>
                        <div className="tiempo">
                            <Minutos />
                            <h5 className="mt-4 text-center">Minutes</h5>
                        </div>
                        <div className="tiempo">
                            <Countdown />
                            <h5 className="mt-4 text-center">Seconds</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}