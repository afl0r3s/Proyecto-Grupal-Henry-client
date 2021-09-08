import React from 'react';
import detStyle from './Detail.module.css';

export default function Notfound() {

	return (
		<div>
            <div className={detStyle.padre}>
				<div className={detStyle.NFcontent}>
					<div className={detStyle.NFinfo2}>
						<div className={detStyle.data1}>
							💬 Mensaje
						</div>
						<div className={detStyle.data4}>
							<b>Resultado: </b><br/>
							😔 No se encontraron Productos para mostrar...<br/><br/>
							Por favor prueba otro filtro, otra busqueda o puedes volver a la pagina de Inicio
						</div>
					</div>
                </div>
			</div>
		</div>
	);
}
