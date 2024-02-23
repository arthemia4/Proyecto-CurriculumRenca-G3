import React from 'react';
import './MiCurso.css';
function MiCurso() {
    const marcarItem = (id) => {
        var checkbox = document.getElementById('item' + id);
        var listaEstudio = document.getElementById('listaEstudio');
        var listItem = listaEstudio.querySelector('[data-id="' + id + '"]');
        var progressBar = document.getElementById('progressBar');

        // Cambiar el estilo del elemento de la lista según si está marcado o no
        if (checkbox.checked) {
            listItem.classList.add('list-group-item-success');
        } else {
            listItem.classList.remove('list-group-item-success');
        }

        // Calcular el progreso y actualizar la barra de progreso
        var totalItems = listaEstudio.getElementsByTagName('li').length;
        var itemsCompletados = listaEstudio.querySelectorAll('.list-group-item-success').length;
        var progreso = (itemsCompletados / totalItems) * 100;
        progressBar.querySelector('.progress-bar').style.width = progreso + '%';
        progressBar.querySelector('.progress-bar').innerText = progreso.toFixed(2) + '% completado';

        // Mostrar mensaje de felicitaciones si todos los elementos están marcados
        if (itemsCompletados === totalItems) {
            alert('¡Felicidades! Has completado el curso exitosamente.');
        }
    };

    const avanzarItem = () => {
        // Encuentra el elemento actualmente marcado
        var listaEstudio = document.getElementById('listaEstudio');
        var items = listaEstudio.getElementsByClassName('list-group-item');
        var itemMarcado;

        for (var i = 0; i < items.length; i++) {
            if (items[i].querySelector('input').checked) {
                itemMarcado = items[i];
                break;
            }
        }

        // Encuentra el siguiente elemento y marca su checkbox
        if (itemMarcado) {
            var siguienteItem = itemMarcado.nextElementSibling;
            if (siguienteItem) {
                siguienteItem.querySelector('input').click();
            } else {
                // Si no hay un siguiente elemento, podrías reiniciar desde el principio o mostrar un mensaje
                console.log('Ya has marcado todos los elementos.');
            }
        }
    };

    return (
        <>
            <div className="container">
                <h1>Video Example</h1>
                <iframe width="560" height="315" src="https://youtu.be/CjmzDHMHxwU" frameborder="0" allowfullscreen></iframe>
            </div>

            <button className="arrow-button text-end" onClick={avanzarItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-forward" viewBox="0 0 16 16">
                    <path d="M9.502 5.513a.144.144 0 0 0-.202.134V6.65a.5.5 0 0 1-.5.5H2.5v2.9h6.3a.5.5 0 0 1 .5.5v1.003c0 .108.11.176.202.134l3.984-2.933.042-.028a.147.147 0 0 0 0-.252l-.042-.028zM8.3 5.647a1.144 1.144 0 0 1 1.767-.96l3.994 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a1.144 1.144 0 0 1-1.767-.96v-.503H2a.5.5 0 0 1-.5-.5v-3.9a.5.5 0 0 1 .5-.5h6.3z"/>
                </svg>
            </button>

            <div className="container mt-4">
                <h1 className="mb-4">Temario de Python</h1>

                <div className="accordion" id="temarioAccordion">
                    {/* Sección 1: Introducción a Python */}
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Introducción a Python
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#temarioAccordion">
                            <div className="card-body">
                                <ul>
                                    <li>¿Qué es Python?</li>
                                    <li>Historia y evolución</li>
                                    <li>Instalación y configuración</li>
                                    <li>Entornos de desarrollo</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sección 2: Fundamentos de Python */}
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Fundamentos de Python
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#temarioAccordion">
                            <div className="card-body">
                                <ul>
                                    <li>Sintaxis básica</li>
                                    <li>Tipo de datos y variables</li>
                                    <li>Operadores</li>
                                    <li>Estructuras de control (if, for, while)</li>
                                    <li>Listas, tuplas, y diccionarios</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Agrega más secciones según sea necesario */}
                </div>
            </div>

            {/* Lista de estudio de Python */}
            <div className="container">
                <h2>Lista de Estudio de Python</h2>

                <ul id="listaEstudio" className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center" data-id="1">
                        Introducción a Python
                        <input type="checkbox" className="form-check-input" id="item1" onClick={() => marcarItem(1)} />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center" data-id="2">
                        Variables y Tipos de Datos
                        <input type="checkbox" className="form-check-input" id="item2" onClick={() => marcarItem(2)} />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center" data-id="3">
                        Estructuras de Control (if, else, while)
                        <input type="checkbox" className="form-check-input" id="item3" onClick={() => marcarItem(3)} />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center" data-id="4">
                        Orientación a Objetos en Python
                        <input type="checkbox" className="form-check-input" id="item4" onClick={() => marcarItem(4)} />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center" data-id="5">
                        Manejo de Excepciones
                        <input type="checkbox" className="form-check-input" id="item5" onClick={() => marcarItem(5)} />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center" data-id="6">
                        Proyecto Final
                        <input type="checkbox" className="form-check-input" id="item6" onClick={() => marcarItem(6)} />
                    </li>
                    {/* Agrega más elementos según sea necesario */}
                </ul>

                {/* Barra de progreso */}
                <div id="progressBar" className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </>
    );
}

export default MiCurso;
