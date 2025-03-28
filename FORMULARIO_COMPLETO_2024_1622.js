# Layout COMPLETO 2025 Ingreso,Rectificatoria y Consulta
# VERSION 1.7 25-06-2024
layout f22DefaultLayout {
    style "fw-formulario" 
#seccion 1
      section {
	   title "IMPUESTO GLOBAL COMPLEMENTARIO"
        style "fw-seccionFormulario"
        anchor "IMPUESTO GLOBAL COMPLEMENTARIO"
        #tabla 0
        table {
            style "fw-2019-tablaFormulario"
            width "1300px" 
            #linea 0
            row {
                cell {
                    style "fw-2019-tituloCabecera"
                    content "REPUBLICA DE CHILE"
                    format LABEL
                    colSpan 4
                }cell {
                    style "fw-2019-tituloCabeceraPeriodo"
                    content "AÑO TRIBUTARIO 2025"
                    format LABEL
                    colSpan 11
                }cell {
                    style "fw-2019-tituloCabeceraDer"
                    content "FORM. 22"
                    format LABEL
                    colSpan 2
                }
            }#Fin row 
					
            row {
                cell {
                    style "fw-2019-tituloCabecera"
                    content "SERVICIO DE IMPUESTOS"
                    format LABEL
                    colSpan 4
                }cell {
                    style "fw-2019-tituloCabeceraPeriodoSub"
                    content "IMPUESTOS ANUALES A LA RENTA"
                    format LABEL
                    colSpan 11
                }cell {
                    style "fw-2019-tituloCabeceraPeriodoSubDer"
                    content " "
                    format LABEL
					colSpan 1
                }cell {
                    style "fw-2019-tituloCabeceraPeriodoSubDer"
                    content "$glosaMoneda"
                    format LABEL
					colSpan 1
                }
            }#Fin row   
            row {
                cell {
                    style "fw-2019-tituloCabecera"
                    content "INTERNOS"
                    format LABEL
                    colSpan 4
                }cell {
                    style "fw-2019-tituloCabeceraPeriodoSub"
                    content "$subTitulo"
                    format LABEL
                    colSpan 7
                }cell {
                    style "fw-2019-tituloCabeceraPeriodoSubDer"
					content "Versión: "
                    format LABEL		
					colSpan 5					
                }cell {
                    style "fw-2019-tituloCabeceraPeriodoSubDer"
					content "$version"
                    format LABEL				
                }
            }#Fin row 
			row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "BASE IMPONIBLE IUSC O IGC O IA"
                    format LABEL
                    colSpan 17
                }
			}
			
			row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "TIPOS DE RENTAS Y REBAJAS"
					colSpan 6
					rowSpan 3
                    format LABEL  
                } cell {
                    style "fw-2019-tituloGrupo"
                    content "CRÉDITO POR IMPUESTO DE PRIMERA CATEGORÍA"
                    format LABEL
                    colSpan 8
                } cell {
                    style "fw-2019-tituloGrupo"
					content "RENTAS Y REBAJAS"
					colSpan 3
					rowSpan 3
                    format LABEL
                } cell {
                    style "ffw-2019-tituloGrupo"
					content ""
                    format LABEL
                }
            }#Fin row 			
            #linea 0
            row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "CON OBLIGACIÓN DE RESTITUCIÓN"
                    format LABEL
                    colSpan 4
                } cell {
                    style "fw-2019-tituloGrupo"
                    content "SIN OBLIGACIÓN DE RESTITUCIÓN"
                    format LABEL
                    colSpan 4
                } 
				cell {
                    style "ffw-2019-tituloGrupo"
					content ""
                    format LABEL
                }
            }#linea 1 
			row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "Sin derecho a devolución"
                    format LABEL
                    colSpan 2
                } cell {
                    style "fw-2019-tituloGrupo"
                    content "Con derecho a devolución"
                    format LABEL
                    colSpan 2
                } 
				  cell {
                    style "fw-2019-tituloGrupo"
                    content "Sin derecho a devolución"
                    format LABEL
                    colSpan 2
                } cell {
                    style "fw-2019-tituloGrupo"
                    content "Con derecho a devolución"
                    format LABEL
                    colSpan 2
                } 
				cell {
                    style "ffw-2019-tituloGrupo"
					content ""
                    format LABEL
                }
            }#linea 2
			row {
                cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "RENTAS BRUTAS AFECTAS"
                    format LABEL
                    colSpan 17
                }
			}
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "1"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Retiros o remesas afectos al IGC o IA, según art. 14 letras A) y/o D) N° 3 LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1592.codigo"
                    format LABEL
                    #width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1592"
                    format TEXTBOX
                    #width "90px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1024.codigo"
                    format LABEL
                    #width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1024"
                    format TEXTBOX
                    #width "90px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1593.codigo"
                    format LABEL
                    #width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1593"
                    format TEXTBOX
                    #width "90px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1025.codigo"
                    format LABEL
                    #width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1025"
                    format TEXTBOX
                    #width "90px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod104.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod104"
                    format TEXTBOX
                    #width "100px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                    #width "20px"
                }
            }#linea 2
           row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "2"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Dividendos afectos al IGC o IA, según art.14 letras A) y/o D) N° 3 LIR"
                    format LABEL
                    colSpan 5
				}cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1594.codigo"
                    format LABEL
                    #width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1594"
                    format TEXTBOX
                    #width "90px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1026.codigo"
                    format LABEL
                    #width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1026"
                    format TEXTBOX
                    #width "90px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1595.codigo"
                    format LABEL
                    #width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1595"
                    format TEXTBOX
                    #width "90px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1027.codigo"
                    format LABEL
					#width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1027"
                    format TEXTBOX
					#width "90px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod105.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod105"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 3
           row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "3"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos rechazados y otras partidas referidos en el art. 21 inc. 3° LIR"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod106.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod106"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 4
           row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "4"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Rentas presuntas propias y/o de terceros, según art. 14 letra B) N° 2 y art. 34 LIR"
                    format LABEL
                    colSpan 11
				}cell {
                    style "fw-2019-codigoCampo"
                    content "$cod603.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod603"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod108.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod108"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 5
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "5"
                    format LABEL
                    rowSpan 7
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Rentas propias y/o de terceros, provenientes de empresas que determinan su renta efectiva sin contabilidad completa, según art. 14 letra B) N° 1 LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1721.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1721"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1722.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1722"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1596.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1596"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod954.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod954"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod955.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod955"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 5b
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "a) Rentas del arrendamiento, subarrendamiento, usufructo o cesión de cualquier otra forma del uso o goce temporal de bienes raíces agrícolas y no agrícolas, determinadas mediante el respectivo contrato"
                    format LABEL
                    colSpan 9
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1917.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1917"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1848.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1848"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1849.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1849"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "b) Rentas por participaciones o cuotas de comunidad obtenidas por la empresa que determina su renta efectiva sin contabilidad completa"
                    format LABEL
                    colSpan 9
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1850.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1850"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1851.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1851"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1852.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1852"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "c) Rentas por participaciones o cuotas de comunidad obtenida por la empresa que determinan su renta efectiva sin contabilidad completa, provenientes de otras empresas en las que participa"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1853.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1853"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1854.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1854"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1855.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1855"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1856.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1856"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1857.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1857"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "d) Rentas efectivas de terceros obtenidas por empresas acogidas al régimen de renta presunta"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1858.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1858"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1859.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1859"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1860.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1860"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1861.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1861"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1862.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1862"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "e) Rentas esporádicas"
                    format LABEL
                    colSpan 11
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1872.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1872"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1873.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1873"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "f) Otras rentas propias y/o de terceros"
                    format LABEL
                    colSpan 9
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1863.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1863"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1864.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1864"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1865.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1865"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
            row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "6"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Rentas asignada propias y/o de terceros, provenientes de empresas sujetas al art. 14 letra D) N° 8 LIR"
                    format LABEL
                    colSpan 5
				}cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1597.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1597"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1598.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1598"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1599.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1599"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1631.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1631"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1632.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1632"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
             row {
			    cell {
                    style "fw-2019-codigoCampo"
                    content "7"
                    format LABEL
                }
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Rentas percibidas de los arts. 42 Nº 2 (honorarios) y 48 (rem. directores S.A.) LIR, según Recuadro N° 1"
                    format LABEL
                    colSpan 13
				}cell {
                    style "fw-2019-codigoCampo"
                    content "$cod110.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod110"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 5
			#fila 8
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "8"
                    format LABEL
                    rowSpan 4
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Rentas de capitales mobiliarios (art. 20 N° 2 LIR), mayor valor en la enajenación o rescate de cuotas fondos mutuos y fondos de inversión y enajenación de acciones y derechos sociales (art. 17 N° 8 LIR) y retiros de ELD (arts. 42 ter y quáter LIR)"
                    format LABEL
                    colSpan 11
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod605.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod605"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod155.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod155"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "a) Rentas de capitales mobiliarios (art. 20 N° 2 LIR)"
                    format LABEL
                    colSpan 11
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1866.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1866"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1867.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1867"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "b) Mayor valor obtenido en la enajenación o rescate de cuotas fondos mutuos y fondos de inversión y en la enajenación de acciones y derechos sociales (art. 17 N° 8 LIR)"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1869.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1869"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "c) Retiros de ELD (arts. 42 ter y quáter LIR)"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1871.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1871"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
           row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "9"
                    format LABEL
                    rowSpan 5
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Rentas exentas del IGC, según art. 54 N° 3 LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1633.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1633"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1105.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1105"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1634.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1634"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod606.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod606"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod152.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod152"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 7
           row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "a) Rentas de FCH provenientes de capitales mobiliarios, que no excedan los límites de 20 o 30 UTM, según corresponda."
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1874.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1874"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1875.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1875"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1876.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1876"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1877.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1877"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1878.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1878"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
           row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "b) Retiros y/o dividendos informados por las empresas y sociedades administradoras de FI y FM"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1879.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1879"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1880.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1880"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1881.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1881"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1882.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1882"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1883.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1883"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
           row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "c) Retiros de ELD del art. 42 ter LIR efectuados durante el año 2023, que no excedan los límites exentos de impuesto de 200 u 800 UTM "
                    format LABEL
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1884.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1884"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
           row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "d) Otras Rentas exentas del IGC, según art. 54 N° 3 LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1885.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1885"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1886.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1886"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1887.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1887"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1888.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1888"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1889.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1889"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
           row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "10"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Otras rentas de fuente chilena afectas al IGC o IA (según instrucciones)"
                    format LABEL
                    colSpan 9
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1635.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1635"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1031.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1031"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1032.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1032"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 8
           row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "11"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Mayor valor en la enajenación de bienes raíces situados en Chile"
                    format LABEL
                    colSpan 11
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1890.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1890"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1891.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1891"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
           row {
                cell {
                    style "fw-2019-codigoCampo"                    
					content "12"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"                    
					content "$cod1914.glosa"
                    format LABEL
                    colSpan 11
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1914.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1914"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1104.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1104"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 9             
			row{
                cell {
                    style "fw-2019-codigoCampo"
                    content "13"					
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "$cod1098.glosa"
                    format LABEL                 
					colSpan 3
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1098.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1098"    
                    format TEXTBOX
                    width "100px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "$cod1030.glosa"
                    format LABEL
                    colSpan 4
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1030.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1030"
                    format TEXTBOX
					colSpan 3
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod161.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod161"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
          row {cell {
                    style "fw-2019-codigoCampo"
                    content "14"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Incremento por IDPC, según arts. 54 N° 1 y 62 LIR"
                    format LABEL                 
					colSpan 3
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod159.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod159"    
                    format TEXTBOX
                    width "100px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Incremento por impuestos soportados en el exterior, según art. 41 A LIR"
                    format LABEL
                    colSpan 4
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod748.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod748"
                    format TEXTBOX
					colSpan 3
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod749.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod749"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
			
			row {
                cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "REBAJAS A LA RENTA"
                    format LABEL
                    colSpan 17
                }
			}
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "15"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Impuesto Territorial pagado en el año 2023, según art. 55 letra a) LIR"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod166.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod166"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "16"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Donaciones, según art. 7° Ley N° 16.282 y D.L. N° 45 de 1973"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod907.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod907"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "17"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdida en operaciones de capitales mobiliarios y ganancias de capital según códigos 105, 155,152 ,1032, 1891, y 1104 (arts. 54 N° 1 y 62 LIR)"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod169.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod169"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            } 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "18"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Rebaja por donaciones a entidades sin fines de lucro según nuevo Título VIII bis D.L. N° 3.063 de 1979 (incorporado por Ley N° 21.440), efectuadas por contribuyentes del IUSC, IGC o IA"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1833.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1833"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "19"
                    format LABEL
                }cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "SUB TOTAL (Si declara IA trasladar a código 133 o  32)"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod158.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod158"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
                }
            }#linea 9 
			
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "20"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Cotizaciones previsionales correspondientes al empresario o socio, según art. 55 letra b) LIR"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod111.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod111"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }#linea 9 
			row {cell {
                    style "fw-2019-codigoCampo"
                    content "21"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Intereses pagados por créditos con garantía hipotecaria, según art. 55 bis LIR"
                    format LABEL                 
					colSpan 3
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod750.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod750"    
                    format TEXTBOX
                    width "100px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Dividendos hipotecarios pagados por viviendas nuevas acogidas al D.F.L. Nº 2 de 1959, según Ley N°19.622"
                    format LABEL
                    colSpan 4
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod740.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod740"
                    format TEXTBOX
					colSpan 3
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod751.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod751"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }#linea 16
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "22"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "20% cuotas fondos de inversión adquiridas antes del 04.06.93, según art. 6 Transitorio Ley N° 19.247"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod822.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod822"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "23"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Ahorro previsional, según art.42 bis inc. 1° LIR"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod765.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod765"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "BASE IMPONIBLE ANUAL"
                    format LABEL
                    colSpan 17
                }
            }
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "24"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "BASE IMPONIBLE ANUAL DE IUSC o IGC."
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod170.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod170"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
                }
            }#linea 9 
        }# fin table 13
    }# section 1
	
	#IUSC o IGC
    section {
        style "fw-seccionFormulario"
         #tabla para IUSC o IGC
         #tabla 14
         table{
            style "fw-2019-tablaFormulario"
            width "900px"
			#width "750px" 			
            #linea encabezado
		row {
			cell {
				style "fw-2019-tituloGrupo"
				content "IUSC o IGC, y DÉBITOS FISCALES"
				format LABEL
				colSpan 9
			}
		}
		row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "25"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "IGC o IUSC, según tabla (arts. 47, 52 o 52 bis LIR)"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod157.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod157"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "26"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "IGC sobre intereses y otros rendimientos, según art. 54 bis LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1017.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1017"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "27"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Reliquidación IGC por ganancias de capital, según art. 17 N° 8 letras a) literal v) y b) LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1033.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1033"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "28"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Débito fiscal por ahorro neto negativo (Recuadro N° 3), según art. 3° transitorio numeral VI) Ley N° 20.780 (ex. art. 57 bis LIR)"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod201.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod201"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "29"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Débito fiscal por restitución crédito por IDPC, según art. 56 N° 3 inc. final LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1035.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1035"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "30"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Tasa adicional de 10% de IGC, sobre cantidades declaradas en código 106, según art. 21 inc. 3° LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod910.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod910"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }#linea 9 
        }#linea 9 
    }# fin tabla 14  
    #CRÉDITOS
        section {
            style "fw-seccionFormulario"
             #tabla para CRÉDITOS
             #tabla 14
             table{
                style "fw-2019-tablaFormulario"
                width "900px"
                #width "750px"          
                #linea encabezado
            row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "CRÉDITOS"
                    format LABEL
                    colSpan 9
                }
            }
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "31"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC, según art. 52 bis LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1036.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1036"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9
			
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "32"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por asignaciones por causa de muerte Ley N° 16.271, según art. 17 N° 8 letra b) literal vi) LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1101.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1101"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
			}#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "33"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC por fomento forestal, según D.L. N° 701 de 1974"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod135.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod135"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "34"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito proporcional al IGC por rentas exentas declaradas en código 152, según art. 56 N° 2 LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod136.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod136"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "35"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC por Impuesto Tasa Adicional, según ex. art. 21 LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod176.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod176"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9 row
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "36"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC por donaciones para fines deportivos, según art. 62 y sgtes. Ley N° 19.712"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod752.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod752"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "37"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC por IDPC sin derecho a devolución, según arts. 20 N° 1 letra a), 41 A N° 4 letra A) letra a) y 56 N° 3 LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod608.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod608"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "38"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC del 5% sobre total de retiros o dividendos que excedan de 310 UTA que tengan derecho a crédito por IDPC con obligación de restitución, según art. 56 N° 4 LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1636.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1636"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "39"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC por Impuesto Territorial pagado por explotación de bienes raíces no agrícolas, según art. 56 N° 5 LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1637.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1637"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "40"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC por art. 33 bis LIR, según art. 14 letra D) N°8 letra a) numeral (v) LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1638.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1638"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "41"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC o IUSC por gastos en educación, según art. 55 ter LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod895.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod895"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "42"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC o IUSC por donaciones para fines sociales, según art. 1° bis Ley N° 19.885"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod867.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod867"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "43"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC por donaciones a universidades, institutos profesionales y centros de formación técnica, según art. 69 Ley N° 18.681"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod609.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod609"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "44"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC por ingreso diferido, según art. 14 letra D) N°8 letra d) numeral (ii) LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1639.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1639"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "45"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IUSC  o IGC por impuestos soportados en el exterior, según arts. 41 A N°4 letra B) o N° 5 LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1018.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1018"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "46"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC o IUSC por IUSC, según art. 56 N° 2 LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod162.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod162"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "47"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC o IUSC por ahorro neto positivo (Recuadro N° 3), según art. 3° Transitorio numeral VI) Ley N° 20.780 (ex. art. 57 bis LIR)"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod174.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod174"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "48"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC o IUSC por IDPC con derecho a devolución, según art. 56 N° 3 LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod610.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod610"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "49"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC por impuestos soportados en el exterior, según art. 41 A N° 4 letra A) letra b) LIR"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod746.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod746"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "50"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC por donaciones al Fondo Nacional de Reconstrucción, según arts. 5 y 9 Ley N° 20.444"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod866.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod866"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }#linea 9 
			row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "51"
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito al IGC o IUSC por donaciones para fines culturales, según art.8 Ley N° 18.985"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod607.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod607"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
			}	
			 row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "52"
                    format LABEL
                }cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "IGC O IUSC, DÉBITO FISCAL Y/O TASA ADICIONAL DETERMINADO"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod304.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod304"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
			}
           }#linea 9 
        }# fin tabla 14  
	#IMPUESTOS ANUALES A LA RENTA
    section {
        style "fw-seccionFormulario"
         #tabla para IUSC o IGC
         #tabla 14
         table{
            style "fw-2019-tablaFormulario"
            width "1300px" 
            row {
				cell {
					style "fw-2019-tituloGrupo"
					content "IMPUESTOS ANUALES A LA RENTA"
					format LABEL
					colSpan 17
				}
			}
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "IMPUESTOS DETERMINADOS"
					format LABEL
					colSpan 17
				}
			}
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "53"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "IMPUESTOS"
                    format LABEL                 
					colSpan 9
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "BASE IMPONIBLE"    
                    format LABEL
                    width "250px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "REBAJAS AL IMPUESTO"    
                    format LABEL
                    width "250px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod31.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod31"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "54"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "IDPC de empresas acogidas al régimen Pro Pyme, según art. 14 letra D) N° 3 LIR"
                    format LABEL                 
					colSpan 9
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod18.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod18"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod19.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod19"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod20.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod20"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "55"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "IDPC de empresas acogidas al régimen de imputación parcial de créditos, según art. 14 letra A) LIR"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod1109.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1109"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1111.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1111"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1113.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1113"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "56"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "IDPC contribuyentes  o entidades sin vínculo directo o indirecto con propietarios afectos a IGC o IA, según art. 14 letra G) LIR"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod1640.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1640"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1641.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1641"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1642.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1642"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "57"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "IDPC sobre rentas presuntas, según art. 34 LIR"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod187.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod187"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod188.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod188"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod189.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod189"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
            row {
            cell {
                    style "fw-2019-codigoCampo"
                    content "58"
                    format LABEL
                    rowSpan 6
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "IDPC sobre rentas efectivas determinadas sin contabilidad completa"
                    format LABEL                 
                    colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod1037.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1037"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1038.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1038"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1039.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1039"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "a) Rentas del arrendamiento, subarrendamiento, usufructo o cesión de cualquier otra forma de uso o goce temporal de bienes raíces agrícolas y no agrícolas"
                    format LABEL                 
                    colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod1892.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1892"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1893.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1893"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1894.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1894"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "b) Mayor valor en la enajenación de bienes raíces situados en Chile"
                    format LABEL                 
                    colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod1895.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1895"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1896.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1896"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1897.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1897"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "c) Rentas obtenidas por contribuyentes con contabilidad simplificada"
                    format LABEL                 
                    colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod1898.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1898"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1899.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1899"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1900.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1900"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "d) Otras rentas efectivas afectas a lDPC e impuestos finales"
                    format LABEL                 
                    colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod1901.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1901"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1902.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1902"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1903.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1903"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "e) Otras rentas de fuente extranjera afectas"
                    format LABEL                 
                    colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod1912.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1912"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1918.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1918"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1913.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1913"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }#linea 16
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "59"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Impuesto de 40% empresas del Estado, según art. 2º D.L. N° 2.398 de 1978"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod77.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod77"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod74.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod74"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod79.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod79"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "60"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Pago voluntario a título de IDPC, según art. 14 letra A) N° 6 LIR"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod1040.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1040"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1041.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1041"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "61"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Diferencia de créditos por IDPC otorgados en forma indebida o en exceso, según art. 14 letra A) N° 7 LIR"
                    format LABEL                 
					colSpan 9
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1042.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1042"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "62"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Impuesto Específico a la Actividad Minera, según art. 64 bis LIR"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod824.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod824"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod825.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod825"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "63"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Impuesto Único de 10% por enajenación de bienes raíces, según art. 17 N° 8 letra b) LIR y/o art. 4 Ley N° 21.078"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod1043.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1043"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1102.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1102"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1044.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1044"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "64"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Impuesto único de 40% sobre gastos rechazados y otras partidas, según art. 21 inc. 1°, art. 14 letra A) N° 9 LIR"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod113.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod113"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1007.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1007"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod114.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod114"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "65"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"                    
					content "Impuesto único de 10% por enajenación o rescate de acciones de S.A. con presencia bursátil, de cuotas de fondos de inversión y fondos mutuos, según art. 107 LIR"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod1829.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1829"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1830.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1830"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "66"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Contribución para el desarrollo regional según art. 32 Ley N° 21.210"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod1835.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1835"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1836.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1836"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1837.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1837"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "67"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "IA en carácter de único (activos subyacentes), según art. 58 N° 3 LIR"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod908.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod908"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod909.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod909"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "68"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Impuesto Único de 10%, según art. 82 del art. 1° Ley N° 20.712"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod951.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod951"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod952.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod952"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
			row {								
				cell {
                    style "fw-2019-codigoCampo"
                    content "69"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Impuesto Único por exceso de endeudamiento, según art. 41 F LIR"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod753.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod753"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod754.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod754"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod755.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod755"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
			row {				
				cell {
                    style "fw-2019-codigoCampo"
                    content "70"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "IA según ex D.L. N° 600 de 1974"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod133.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod133"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod138.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod138"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod134.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod134"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "71"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "IA según arts. 58 N° 1 y 2 y 60 inc. 1° LIR"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod32.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod32"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod76.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod76"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod34.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod34"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "72"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Impuesto único tasa 25% por distribuciones desproporcionadas, según art. 39° transitorio Ley N° 21.210"
                    format LABEL                 
					colSpan 9
                }cell {
                   style "fw-2019-codigoCampo"
                    content "$cod1643.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1643"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1644.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1644"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }#linea 16

            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "73"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Diferencia de IA por crédito indebido por IDPC o por crédito indebido del art. 41 A en caso de empresas acogidas al régimen del art. 14 letras A) y D) N° 3, según art. 74 N° 4 LIR"
                    format LABEL                 
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod911.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod911"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "74"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Tasa adicional de 10% de IA, sobre cantidades declaradas en código 106, según art. 21 inc 3° LIR"
                    format LABEL                 
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod913.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod913"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "75"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Retención de impuesto sobre gastos rechazados y otras partidas (tasa 45%), según art. 74 N° 4 LIR"
                    format LABEL                 
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod923.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod923"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "76"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Retención de IA en carácter de único (activos subyacentes) (tasa 20% y/o 35%), según art. 74 N° 4 LIR"
                    format LABEL                 
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod924.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod924"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "77"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Retención del IA sobre rentas asignadas empresas acogidas al régimen de los arts. 14 letra B) N° 1 , 2 y/o 14 letra D) N° 8, según art. 74 N° 4 LIR"
                    format LABEL                 
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1051.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1051"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "78"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Débito fiscal por restitución crédito por IDPC, según art. 63 inc. final LIR"
                    format LABEL                 
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1052.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1052"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "79"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Impuesto Único talleres artesanales"
                    format LABEL                 
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod21.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod21"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "80"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Impuesto Único pescadores artesanales"
                    format LABEL                 
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod43.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod43"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "81"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Impuesto Único por retiros de ahorro previsional, según art. 42 bis inc. 1° N° 3 LIR"
                    format LABEL                 
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod767.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod767"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "82"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Restitución crédito por gastos de capacitación excesivo, según  art. 6° Ley N° 20.326"
                    format LABEL                 
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod862.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod862"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }

			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "DEDUCCIONES A LOS IMPUESTOS"
					format LABEL
					colSpan 17
				}
			}
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "83"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Reliquidación IGC por término de giro de empresa acogida al régimen del art. 14 letras A) y D) N° 3 y 8, según art. 38 bis N° 3 LIR"
                    format LABEL                 
					colSpan 9
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod51.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod51"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod63.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod63"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod71.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod71"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "84"
                    format LABEL
                    rowSpan 5
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "PPM y remanente del IEAM"
                    format LABEL                 
					colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod36.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod36"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    #content "Pagos provisionales, según arts. 14 letra D) N° 3 letra (k) y 84 LIR"
					content "a) PPM arts. 84 letras a), c) , e), y h) y 14 D N° 3 letra (k) LIR"
                    format LABEL                 
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1904.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1904"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "b) PPM de segunda categoría art. 84 letra b) LIR"
                    format LABEL                 
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1905.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1905"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "c) PPM Voluntario, según art. 88 incs. 1° y 2° LIR"
                    format LABEL                 
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1906.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1906"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "d) Remanente del IEAM anotado en el código 829 del recuadro N° 8"
                    format LABEL                 
                    colSpan 13
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1916.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1916"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                }
            }

            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "85"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito fiscal AFP, según art. 23 D.L. N° 3.500 de 1980"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod848.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod848"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "86"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por gastos de capacitación, según Ley N° 19.518"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod82.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod82"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "87"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por desembolsos directos por trazabilidad (art. 60 quinquies Código Tributario)"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1123.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1123"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "88"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito empresas constructoras"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod83.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod83"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "89"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por reintegro de peajes, según art. 1° Ley N° 19.764"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod173.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod173"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "90"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Retenciones por rentas declaradas en código 110 (Recuadro N°1)"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod198.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod198"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "91"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Mayor retención por sueldos, pensiones y otras rentas similares declaradas en código 1098, según art. 88 inc. final LIR"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod54.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod54"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "92"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Retenciones efectuadas por instituciones autorizadas con tasa 15%, sobre los retiros de ahorro previsional, según art. 42 bis N° 3 incs. 2° y 3° LIR"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod832.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod832"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "93"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Retenciones por retiros de seguros de vida con ahorro y seguros dotales, y retenciones efectuadas sobre las rentas de capitales mobiliarios"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1907.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1907"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "94"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Retenciones por rentas declaradas en códigos 104, 106, 108, 955, 1632, 155, 1032, 1891, 908, 951, 32 y 1829"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod833.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod833"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "95"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Retenciones por actividades mineras según el N° 6 del art. 74 LIR"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1908.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1908"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }

			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "96"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "PPUA sin derecho a devolución, según art. 27° transitorio de la Ley N° 21.210"
                    format LABEL                 
					colSpan 7
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod912.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod912"
                    format TEXTBOX
					colSpan 2
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "PPUA con derecho a devolución, según art. 27° transitorio de la Ley N° 21.210"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod167.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod167"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod747.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod747"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "97"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente de crédito por reliquidación del IUSC y/o por ahorro neto positivo, proveniente de códigos 162 y/o 174"
                    format LABEL                 
					colSpan 7
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod119.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod119"
                    format TEXTBOX
					colSpan 2
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente de crédito por IDPC proveniente de códigos 1638 y/o 610"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod116.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod116"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod757.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod757"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "98"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Créditos puestos a disposición de los socios por la sociedad respectiva, según instrucciones"
                    format LABEL                 
					colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod58.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod58"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "99"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por sistemas solares térmicos, según Ley N° 20.365"
                    format LABEL                
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod870.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod870"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }

			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "100"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "PPM puestos a disposición de los propietarios de empresas del régimen de transparencia tributaria del art. 14 letra D) N° 8 LIR"
                    format LABEL                 
					colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1645.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1645"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "101"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Pago provisional exportadores, según ex-art. 13 Ley N° 18.768"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod181.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod181"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "102"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    #content "Retenciones sobre intereses, según art. 74 N° 7 LIR"
					 content "Retenciones sobre intereses, según art. 74 N° 7 y 8 LIR"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod881.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod881"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "103"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    #content "Impuestos declarados y pagados en conformidad al art. 69 N° 3 y N° 4 LIR"
					content "Impuestos declarados y pagados en conformidad al art. 69 N° 4 LIR"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1646.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1646"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "104"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Excedente crédito por IDPC del código 76"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1647.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1647"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "105"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Deducción de impuesto por tasas rebajadas en virtud de convenios para evitar la doble tributación"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1910.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1910"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "106"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por la compra de viviendas nuevas adquiridas con créditos con garantía hipotecaria, según Ley N° 21.631"
                    format LABEL                 
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1915.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1915"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "OTROS CARGOS"
					format LABEL
					colSpan 17
				}
			}
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "107"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Cargo por cotizaciones previsionales, según arts. 89 y sgtes. D.L. N° 3.500 de 1980"
                    format LABEL                 
					colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod900.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod900"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "108"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Monto a pagar cuota(s) préstamo(s) tasa 0% (préstamos solidarios del Estado)"
                    format LABEL                 
					colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1796.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1796"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "109"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Monto a pagar cuota anticipo solidario para pago de cotizaciones, según art. 21 inc. 1° y 3° Ley N° 21.354"
                    format LABEL                 
					colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1827.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1827"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "110"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "RESULTADO LIQUIDACIÓN ANUAL IMPUESTO A LA RENTA   (si el resultado es negativo o cero, deberá declarar por Internet)"
                    format LABEL                 
					colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod305.codigo"
                    format LABEL
                    #width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod305"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
                }
            }
			
        }# fin tabla 14  
    
    }# fin IMPUESTOS ANUALES A LA RENTA
	
#seccion datos personales
    section {
        style "fw-seccionFormulario"
         #tabla para datos personales, rut, nombre, apellidos
         #tabla 14
         table{
            style "fw-2019-tablaFormulario"
            width "900px"
			#width "750px" 			
            #linea encabezado
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "$rut.glosa"
                    format LABEL
                    colSpan 2
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "$apellidoPaterno.glosa"
                    format LABEL
                    colSpan 2
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "$apellidoMaterno.glosa"
                    format LABEL
                    colSpan 2
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "$nombres.glosa"
                    format LABEL
                    colSpan 2
                }
            }#linea 2 campos de texto
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "$rut.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$rut"
                    format LABEL
                    width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$apellidoPaterno.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$apellidoPaterno"
                    format LABEL
                    width "211px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$apellidoMaterno.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$apellidoMaterno"
                    format LABEL
                    width "211px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$nombres.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$nombres"
                    format LABEL
                    width "212px"
                }
            }
        }# fin tabla 14  
    
    }# fin section datos personales
##########################       seccion remanente de crédito     ################    
    section {
        style "fw-seccionFormulario"
         #tabla para remanente de crédito
         table{
             style "fw-2019-tablaFormulario"
            width "1100px" 
            #linea 82 y 85
            row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "REMANENTE DE CRÉDITO"
                    format LABEL
                    colSpan 17
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "111"
                    format LABEL
                }
                cell {
                    style "fw-2019-descripcionCampo"
                    content "SALDO A FAVOR"
                    format LABEL
                    colSpan 4
                }
                cell {
                    style "fw-2019-descripcionCampo"
                    content ""
                    format LABEL
                    colSpan 9
                }cell {
                    style "fw-2019-codigoCampo"
                    content "85"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod85"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "112"
                    format LABEL
                }
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Menos: saldo puesto a disposición de los socios"
                    format LABEL
                    colSpan 4
                }
                cell {
                    style "fw-2019-descripcionCampo"
                    content ""
                    format LABEL
                    colSpan 9
                }cell {
                    style "fw-2019-codigoCampo"
                    content "86"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod86"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "DEVOLUCIÓN SOLICITADA"
                    format LABEL
                    colSpan 17
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "113"
                    format LABEL
                }
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Monto"
                    format LABEL
                    colSpan 4
                }
                cell {
                    style "fw-2019-descripcionCampo"
                    content ""
                    format LABEL
                    colSpan 9
                }cell {
                    style "fw-2019-codigoCampo"
                    content "87"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod87"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "SOLICITO DEPOSITAR REMANENTE EN CUENTA CORRIENTE O DE AHORRO BANCARIA"
                    format LABEL
                    colSpan 17
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Nombre institución bancaria"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "301"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$instBancaria"
                    format LISTBOX {
                        "" :""
                        "0001":"CHILE-EDWARDS"
                        "0016":"BCI"
                        "0016":"T-BANC"
                        "0507":"DESARROLLO"
                        "0816":"FALABELLA"
                        "0009":"INTERNACIONAL"
                        "0037":"SANTANDER"
                        "0049":"SECURITY"
                        "0012":"BANCOESTADO"
                        "0039":"ITAU"
                        "0053":"RIPLEY"
                        "0504":"BBVA"
                        "0033":"CITIBANK"
                        "0027":"CORPBANCA"
                        "0031":"HSBC"
                        "0028":"BICE"
                        "0014":"SCOTIABANK"
                        "0045":"TOKYO"
                        "0041":"JP MORGAN"
                        "0055":"BANCO CONSORCIO"
                        "0672":"COOPEUCH"
                        "0729":"PREPAGO LOS HEROES"
                        "0730":"TENPO PREPAGO"
                    }#width "100px"
                    colSpan 8
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                    colSpan 3
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Número de cuenta"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "306"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$numeroCuenta"
                    format TEXTBOX
                    colSpan 8
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                    colSpan 3
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Tipo de cuenta"
                    format LABEL
                    colSpan 5
                }cell {
                    style "fw-2019-codigoCampo"
                    content "780"
                    format LABEL
                }cell {
                    colSpan 8
                    style "fw-valorCampo"
                    format LISTBOX {
                        "0000" :"Sin Cuenta"
                        "0001":"Cuenta Corriente"
                    }
                    content "$tiposDeCuenta"
                    #width "15px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                    colSpan 3
                }
            }
        }# fin table
    }# fin section remanente de crédito
section {
        style "fw-seccionFormulario"
         #tabla para IMPUESTO A PAGAR
         table{
             style "fw-2019-tablaFormulario"
            width "1100px" 
            #linea 82 y 85
            row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "IMPUESTO A PAGAR"
                    format LABEL
                    colSpan 17
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "114"
                    format LABEL
                }
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Impuesto adeudado"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "90"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod90"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "115"
                    format LABEL
                }
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Reajuste art.72 LIR, código 305 %"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "39"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod39"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "116"
                    format LABEL
                }
                cell {
                    style "fw-2019-descripcionCampo"
                    content "TOTAL A PAGAR (códigos 90 + 39)"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "91"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod91"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "RECARGOS POR DECLARACIÓN FUERA DE PLAZO"
                    format LABEL
                    colSpan 17
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "117"
                    format LABEL
                }
                cell {
                    style "fw-2019-descripcionCampo"
                    content "MÁS: reajustes declaración fuera de plazo"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "92"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod92"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "118"
                    format LABEL
                }
                cell {
                    style "fw-2019-descripcionCampo"
                    content "MÁS: intereses y multas declaración fuera de plazo"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "93"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod93"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }
            }
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "119"
                    format LABEL
                }
                cell {
                    style "fw-2019-descripcionCampo"
                    content "TOTAL A PAGAR (códigos 91+92+ 93)"
                    format LABEL
                    colSpan 13
                }cell {
                    style "fw-2019-codigoCampo"
                    content "94"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod94"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
                }
            }
            }# fin table
    }# fin section remanente de crédito
######################### seccion todos lo contribuyentes deben completar los sgtes datos################    
#seccion todos lo contribuyentes deben completar los sgtes datos
    section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "RECUADRO N° 0: INFORMACION BASE"
                    format LABEL
                    colSpan 9
                }
			}
			row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "SECCIÓN: DOMICILIO DEL CONTRIBUYENTE (ESTOS DATOS SON OBLIGATORIOS)"
                    format LABEL
                    colSpan 4
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                    #width "10px"
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "RUT"
                    format LABEL                    
                }cell {
                    style "fw-valorCampo"
                    content "$rut"
                    format LABEL                   
                    width "120px"
                }#FALTA CODIGO				
				cell {
                    style "fw-2019-tituloGrupo"
                    content "FOLIO"
                    format LABEL                    
                }cell {
                    style "fw-valorCampo"
                    content "$folio"
                    format LABEL                   
                    width "120px"
                }#FALTA CODIGO
			}
						 
            row {
                cell {
                    style "fw-2019-codigoCampo"
                    content "$calle.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$calle.glosa"
                    format LABEL 
                    width "210px"
					 colSpan 4
                }#falta código
                cell {
                    style "fw-2019-codigoCampo"
                    content "N°"
                    format LABEL
                    width "116px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "Of. o depto."
                    format LABEL
                    width "116px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "Ciudad"
                    format LABEL
                    width "116px"
					colSpan 2
                }
            }#linea 2  Faltan algunos códigos para textbox
			
            row {
                cell {
                    style "fw-valorCampo"
                    content "$calle"
                    format LABEL
                    colSpan 5
                    width "230px"
                }#FALTA CODIGO
                cell {
                    style "fw-valorCampo"
                    content "$numero"
                    format LABEL
                    width "116px"
                }#FALTA CODIGO
                cell {
                    style "fw-valorCampo"
                    content "$departamento"
                    format LABEL
                    width "116px"
                }#FALTA CODIGO
                cell {
                    style "fw-valorCampo"
                    content "$ciudad"
                    format LABEL
                    width "116px"
					colSpan 2
                }
            }
        }# fin table 1 
         # #tabla 2
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 3
            row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "$comuna.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$comuna.glosa"
                    format LABEL
                    width "116px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$region.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$region.glosa"
                    format LABEL
                    width "116px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$actividadProfesion.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$actividadProfesion.glosa"
                    format LABEL
                    width "148px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$codActividad.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$codActividad.glosa"
                    format LABEL
                    width "148px"
					colSpan 2
                }
                
            }#linea 4
            row {
				cell {
                    style "fw-valorCampo"
                    content "$comuna"
                    format LABEL
                    colSpan 2
                    width "138px"
                }cell {
                    style "fw-valorCampo"
                    content "$region"
                    format LABEL
                    colSpan 2
                    width "138px"
                }cell {
                    style "fw-valorCampo"
                    content "$actividadProfesion"
                    format LABEL
                    width "172px"
                    colSpan 2
                }
                cell codActividad{
                    style "fw-valorCampo"
                    content "$codActividad"
                    format LISTBOX {
                        "" :""
                        "111111":"111111 Glosa 1"
                        "222222":"222222 Glosa 2" 
                        "333333":"333333 Glosa 3" 
                    }
                    width "180px"
                    colSpan 3
                }
            }
        }# fin tabla 2
		table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 3             
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content "$telefono.glosa"
                    format LABEL
                    width "90px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$telefono.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$telefono"
                    format LABEL
                    width "172px"                     
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$fax.glosa"
                    format LABEL
                    width "80px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$fax.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$fax"
                    format LABEL
                    width "172px"                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$eMail.glosa"
                    format LABEL
                    width "90px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$eMail.codigo"
                    format LABEL
                    width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$eMail"
                    format LABEL
                    width "172px"                     
                }
				
			}
			
        }
        # tabla 4
         table{
            style "fw-2019-tablaFormulario"
            width "900px" 
            #linea 7
            row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "/images/F22_verticales/2019/F22vertical_0017-2.png"
                    format IMAGE
                    rowSpan 3
                    width "20px"
                }cell {
                    style "fw-2019-tituloGrupo"
                    content "/images/F22_verticales/2019/F22vertical_0018-2.png"
                    format IMAGE
                    rowSpan 3
                    width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "$cod95.glosa"
                    format LABEL
                    rowSpan 2
                    width "66px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod95.codigo"
                    format LABEL
                    rowSpan 2
                    width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod95"
                    format CHECKBOX
                    rowSpan 2
                    width "20px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "D.S. N° 341 de 2004, del Min. de Hacienda (Zona Franca)"
                    format LABEL
                    rowSpan 2
                    width "66px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod73.codigo"
                    format LABEL
                    rowSpan 2
                    width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod73"
                    format CHECKBOX
                    rowSpan 2
                    width "20px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "$cod72.glosa"
                    format LABEL
                    rowSpan 2
                    width "66px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod72.codigo"
                    format LABEL
                    rowSpan 2
                    width "20px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod72"
                    format CHECKBOX
                    rowSpan 2
                    width "20px"
                }cell {
                    style "fw-2019-tituloGrupo"
                    content "/images/F22_verticales/2019/F22vertical_0019-2.png"
                    format IMAGE
                    rowSpan 3
                    width "20px"
                }cell {
                    style "fw-2019-tituloGrupo"
                    content "/images/F22_verticales/F22vertical_0026.png"
                    format IMAGE
                    rowSpan 3
				}
		cell {
                    style "fw-2019-descripcionCampo"
                    content "$cod805.glosa"
                    format LABEL
                    rowSpan 2
					width "130px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod805.codigo"
                    format LABEL
                    rowSpan 2
					colSpan 2
                }cell {
                    style "fw-valorCampo"
                    content "$cod805"
                    format CHECKBOX
                    rowSpan 2
                }
            }row {
                cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }
            }#linea 8
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "$cod786.glosa"
                    format LABEL
					rowSpan 1
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod786.codigo"
                    format LABEL
					rowSpan 1
                }cell {
                    style "fw-valorCampo"
                    content "$cod786"
                    format CHECKBOX
					rowSpan 1
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "Asociacion o cuentas en participación"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod616.codigo"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod616"
                    format CHECKBOX
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "$cod69.glosa"
                    format LABEL
					rowSpan 2
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod69.codigo"
                    format LABEL
					rowSpan 2
                }cell {
                    style "fw-valorCampo"
                    content "$cod69"
                    format CHECKBOX
					rowSpan 2
                }cell {
                    style "fw-2019-descripcionCampo"
                    content "$cod68.glosa"
                    format LABEL
                    rowSpan 2
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod68.codigo"
                    format LABEL
                    rowSpan 2
                }cell {
                    style "fw-valorCampo"
                    content "$cod68"
                    format CHECKBOX
                    rowSpan 2
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod813.glosa"
                    format LABEL
					width "100px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod813.codigo"
                    format LABEL
					colSpan 2
                }cell {
                    style "fw-valorCampo"
                    content "$cod813"
                    format CHECKBOX
                }
            }
        }# fin table
    }# fin section    
######################### seccion recuadro n°1:honorarios ################    
 section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			#se agrega cell Impuesto retenido actualizado
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 1 :  HONORARIOS"
					format LABEL
					colSpan 8
				}
			}
			row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "Rentas de 2ª Categoría"
                    format LABEL
                    colSpan 2
                }cell {
                    style "fw-2019-tituloGrupo"
                    content "Renta actualizada"
                    format LABEL
                    colSpan 3
                }cell {					
                    style "fw-2019-tituloGrupo"
                    content "Impuesto retenido actualizado"
                    format LABEL
                    colSpan 3
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Honorarios anuales con retención"
                    format LABEL   
                    colSpan 2                 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "461"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod461"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL				
                }cell {
                    style "fw-2019-codigoCampo"
                    content "492"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod492"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Honorarios anuales sin retención"
                    format LABEL 
                    colSpan 2                   
                }cell {
                    style "fw-2019-codigoCampo"
                    content "545"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod545"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                    colSpan 3	
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Honorarios líquidos percibidos de fuente extranjera"
                    format LABEL
                    colSpan 2                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1650"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1650"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL   
					colSpan 3					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Incremento por impuestos soportados en el extranjero"
                    format LABEL  
                    colSpan 2                  
                }cell {
                    style "fw-2019-codigoCampo"
                    content "856"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod856"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL   
					colSpan 3					
                }
            }
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Total ingresos brutos"
                    format LABEL  
                    colSpan 2                  
                }cell {
                    style "fw-2019-codigoCampo"
                    content "547"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod547"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL   
					colSpan 3					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Participación en sociedades de profesionales de 2ª Categoría"
                    format LABEL
                    colSpan 2                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "617"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod617"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL   
					colSpan 3					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Monto ahorro previsional, según art. 42 bis inc. 1° LIR"
                    format LABEL      
                    colSpan 2              
                }cell {
                    style "fw-2019-codigoCampo"
                    content "770"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod770"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL   
					colSpan 3					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos por donaciones para fines sociales, según art. 1° bis Ley N° 19.885, y gasto por donaciones de bienes inmuebles en apoyo al plan de emergencia habitacional, art. 26 Ley N° 21.450"
                    format LABEL  
                    colSpan 2                  
                }cell {
                    style "fw-2019-codigoCampo"
                    content "872"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod872"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL   
					colSpan 3					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos efectivos (solo rebajables del código 547)"
                    format LABEL 
                    colSpan 2                   
                }cell {
                    style "fw-2019-codigoCampo"
                    content "465"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod465"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL   
					colSpan 3					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos presuntos: 30% sobre el código 547, con tope de 15 UTA"
                    format LABEL  
                    colSpan 2                  
                }cell {
                    style "fw-2019-codigoCampo"
                    content "494"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod494"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL   
					colSpan 3					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Rebaja por presunción de asignación de zona  D.L. N° 889 de 1975"
                    format LABEL     
                    colSpan 2               
                }cell {
                    style "fw-2019-codigoCampo"
                    content "850"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod850"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL   
					colSpan 3					
                }
            }
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Total honorarios"
                    format LABEL  
                    colSpan 2                  
                }cell {
                    style "fw-2019-codigoCampo"
                    content "467"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod467"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL   
					colSpan 3					
                }
            }
		   row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Total remuneraciones directores S.A."
                    format LABEL  
                    colSpan 2                  
                }cell {
                    style "fw-2019-codigoCampo"
                    content "479"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod479"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL  					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "491"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod491"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Total rentas y retenciones"
                    format LABEL  
                    colSpan 2                  
                }cell {
                    style "fw-2019-codigoCampo"
                    content "618"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod618"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "619"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod619"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Participaciones en ingresos brutos soc. de profesionales de 2ª Categoría."
                    format LABEL 
					colSpan 2					
                }cell {
                    style "fw-2019-descripcionCampo"
                    content ""
                    format LABEL
					colSpan 2
					rowSpan 2
                }cell {
                    style "fw-2019-descripcionCampo"
                    content ""
                    format LABEL
					rowSpan 2
					colSpan 4	
                }
            }
			row {
			    cell {
						style "fw-2019-codigoCampo"
						content "896"
						format LABEL
						width "20px"					
					}cell {
						style "fw-valorCampo"
						content "$cod896"
						format TEXTBOX				
					} 		
            }
		}
	}
	#RECUADRO 2
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 2: DETERMINACIÓN MAYOR O MENOR VALOR OBTENIDO POR PERSONAS NATURALES EN LAS ENAJENACIONES DE BIENES RAÍCES SITUADOS EN CHILE, NO ASIGNADOS A SU EMPRESA INDIVIDUAL"
					format LABEL
					colSpan 4
				}
			}
			row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "Conceptos"
                    format LABEL
                    colSpan 2
                }cell {
                    style "fw-2019-tituloGrupo"
                    content "Según art. 17 N°8 letra b) de la LIR"
                    format LABEL
                    colSpan 3
                }cell {					
                    style "fw-2019-tituloGrupo"
                    content "Enajenaciones a partes relacionadas"
                    format LABEL
                    colSpan 3
                }cell {					
                    style "fw-2019-tituloGrupo"
                    content "Otras enajenaciones afectas"
                    format LABEL
                    colSpan 3
                }cell {					
                    style "fw-2019-tituloGrupo"
                    content ""
                    format LABEL
                    colSpan 2
                }
				
            }
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Precios de enajenaciones del conjunto de los bienes raíces situados en Chile"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1055"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1055"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1981"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1981"
                    format TEXTBOX
					
                }
				cell {
                    style "fw-2019-codigoCampo"
                    content "1982"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1982"
                    format TEXTBOX
					
                }
				cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Menos: valor de adquisición de los bienes raíces reajustados"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1056"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1056"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1983"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1983"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1984"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1984"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Menos: mejoras que hayan aumentado el valor de los bienes raíces reajustadas"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1057"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1057"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1985"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1985"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1986"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1986"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Mayor o menor valor percibido o devengado"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1058"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1058"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1987"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1987"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1988"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1988"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Menos: ingreso no renta equivalente a 8.000 UF o saldo del ejercicio anterior"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1060"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1060"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Mayor valor percibido o devengado afecto a impuesto"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1061"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1061"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo de ingreso no renta a utilizar en los ejercicios siguientes"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1062"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1062"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Mayor valor percibido en enajenaciones efectuadas en el ejercicio"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1099"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1099"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL                    
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Mayor valor devengado a declarar en el año tributario actual"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1847"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1847"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL                    
                }
            }	
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Mayor valor devengado a declarar en los años tributarios siguientes"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1100"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1100"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Mayor valor percibido en el ejercicio por enajenaciones efectuadas en el ejercicio anterior"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1114"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1114"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Régimen de tributación "
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Mayor valor percibido según códigos 1099 y 1114 anteriores afecto al IGC o IA, a trasladar a código 1891; y  y según código 1988 afecto a IDPC e IGC o IA a trasladar a código 1895 o 1912, y a código 1891, según corresponda "
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1063"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1063"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1989"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1990"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Mayor valor devengado según código 1847 anterior afecto a IGC a reliquidar, según instrucciones código 1033"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1064"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1064"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Mayor valor percibido según códigos 1099 y 1114 anteriores afecto al Impuesto Único y Sustitutivo con tasa 10%, a trasladar a código 1043"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1065"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1065"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
            }
		}
	}
	#RECUADRO 3
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 3: DATOS SOBRE INSTRUMENTOS DE AHORRO ACOGIDOS AL EX ART. 57 BIS LIR (ART. 3° TRANSITORIO NUMERAL VI) LEY N° 20.780)"
					format LABEL
					colSpan 4
				}
			}
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Total ahorro neto positivo del ejercicio"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "701"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod701"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ahorro neto positivo utilizado en el ejercicio"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "702"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod702"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ahorro neto positivo del ejercicio siguiente"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "703"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod703"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Total ahorro neto negativo del ejercicio"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "704"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod704"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Cuota exenta 10 UTA"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "930"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod930"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Base para débito fiscal del ejercicio a registrar en código 201"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "705"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod705"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            } 
			 
		}
	}#FIN RECUADRO 3
	#RECUADRO 4
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 4: ENAJENACIÓN DE ACCIONES, DERECHOS SOCIALES, CUOTAS DE FONDOS MUTUOS Y/O DE INVERSIÓN"
					format LABEL
					colSpan 9
				}
			}
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "ENAJENACIÓN DE ACCIONES"
					format LABEL
					colSpan 9
				}
			}
			  
			row {
				cell {
                    style "fw-2019-tituloGrupo"
                    content "Régimen tributario de la LIR"
		    colSpan 7
                    format LABEL    
					width "200px"					
                }cell {
                    style "fw-2019-tituloGrupo"
                    content "Mayor o Menor valor determinado"
                    format LABEL
					colSpan 2
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "IGC o IA sobre rentas percibidas, según código 1869"
		    colSpan 7
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1070"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1070"
                    format TEXTBOX
                }	
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Opción a reliquidar el IGC sobre renta devengada, según código 1033"
		     colSpan 7
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1074"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1074"
                    format TEXTBOX
                }	
            }
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content " "
					format LABEL
					colSpan 9
				}
			} 
			  
			  
			 
		}
		table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			 
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "ENAJENACIÓN DE DERECHOS SOCIALES"
					format LABEL
					colSpan 9
				}
			}
			  
			row {
				cell {
                    style "fw-2019-tituloGrupo"
                    content "Régimen tributario de la LIR"
                    format LABEL   
		    colSpan 7
					width "200px"					
                }cell {
                    style "fw-2019-tituloGrupo"
                    content "Mayor o Menor valor determinado"
                    format LABEL
					colSpan 2
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "IGC o IA sobre rentas percibidas, según código 1869"
		    colSpan 7
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1079"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1079"
                    format TEXTBOX
                } 
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Opción a reliquidar el IGC sobre renta devengada, según código 1033"
		    colSpan 7
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1083"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1083"
                    format TEXTBOX
                }	
            }
		     
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content " "
					format LABEL
					colSpan 9
				}
			} 			 
		}
		table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1			 
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "ENAJENACION O RESCATE DE CUOTAS DE FONDOS MUTUOS Y/O FONDOS DE INVERSIÓN"
					format LABEL
					colSpan 9
				}
			}
			  
			row {
				cell {
                    style "fw-2019-tituloGrupo"
                    content "Régimen tributario de la LIR"
		    colSpan 7
                    format LABEL    
					width "200px"					
                }cell {
                    style "fw-2019-tituloGrupo"
                    content "Mayor o Menor valor determinado"
                    format LABEL
					colSpan 2
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "IGC o IA sobre rentas percibidas, según código 1869"
		    colSpan 7
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1087"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1087"
                    format TEXTBOX
                }	
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Opción a reliquidar el IGC sobre renta devengada, según código 1033"
		    colSpan 7
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1131"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1131"
                    format TEXTBOX
                }	
             }			  
	}
		table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1			 
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "ENAJENACIÓN O RESCATE DE INSTRUMENTOS SEGÚN ART. 107 LIR"
					format LABEL
					colSpan 9
				}
			}
            row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Instrumentos enajenados o rescatados"
                    colSpan 7
                    format LABEL  				
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "Mayor  o menor  valor determinado"
                    colSpan 2 
					 					
                }
			}	  
            row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Acciones"
                    colSpan 7
                    format LABEL  				
                }
				cell {
                    style "fw-2019-codigoCampo"
                    content "1809"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1809"
                    format TEXTBOX
                }
			}	  
            row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Cuotas de fondos mutuos y/o fondos de inversión"
                    colSpan 7
                    format LABEL  				
                }
				cell {
                    style "fw-2019-codigoCampo"
                    content "1813"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1813"
                    format TEXTBOX
                }
			}	  
            row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Determinación del resultado"
                    colSpan 9
                    format LABEL  				
                }
			}
            row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Resultado neto de las operaciones del ejercicio"
                    colSpan 7
                    format LABEL  				
                }
				cell {
                    style "fw-2019-codigoCampo"
                    content "1814"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1814"
                    format TEXTBOX
                }
			}	
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdida de arrastre del ejercicio anterior actualizada"
                    colSpan 7
                    format LABEL  				
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1815"
                    format LABEL
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1815"
                    format TEXTBOX
                }
			}		  
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Base imponible o pérdida del ejercicio"
                    colSpan 7
                    format LABEL  				
                }
				cell {
                    style "fw-2019-codigoCampo"
                    content "1816"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1816"
                    format TEXTBOX
                }
			}		  
		}
	}# FIN RECUADRO 4
	#RECUADRO 5
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N°5: CRÉDITO POR INGRESO DIFERIDO PROPIETARIOS DE EMPRESAS RÉGIMEN TRANSPARENCIA TRIBUTARIA, ART. 14 LETRA D) N°8 LIR"
					format LABEL
					colSpan 4
				}
			}
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio anterior"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1651"
                    format LABEL
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "$cod1651"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito recibido en el ejercicio"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1652"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1652"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito imputado en el ejercicio"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1653"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1653"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente para ejercicio siguiente"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1654"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1654"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            } 
		    
		}
	}#FIN RECUADRO 5
	#RECUADRO 6
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 6: DATOS INFORMATIVOS"
					format LABEL
					colSpan 3
				}
			}
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Operaciones Internacionales"
					format LABEL
					colSpan 3
				}
			}
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Préstamos efectuados a propietarios, socios o accionistas en el ejercicio"
                    format LABEL    
					width "705px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "783"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod783"
                    format TEXTBOX
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Total de cantidades adeudadas, pagadas, abonadas en cuenta o puestas a disposición de relacionados en el exterior (arts. 31 inc. 3° y 59 LIR)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "976"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod976"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Cantidades adeudadas, pagadas, abonadas en cuenta o puestas a disposición de relacionados en el exterior, cuyo IA no ha sido enterado (arts. 31 inc.  3° y 59 LIR)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "978"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod978"
                    format TEXTBOX
                }
            } 
				row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Total pasivos contraídos en Chile"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1020"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1020"
                    format TEXTBOX
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Beneficio antes de gastos financieros (EBITDA)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1019"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1019"
                    format TEXTBOX
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Renta imponible extranjera (art. 41 A  N° 3 LIR)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "974"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod974"
                    format TEXTBOX
                }
            }
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content " "
					format LABEL
					colSpan 3
				}
			}    			
		}
		
		table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			 
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Datos de Balance"
					format LABEL
					colSpan 3
				}
			}
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Total del activo"
                    format LABEL    
					width "705px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "122"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod122"
                    format TEXTBOX
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Total del pasivo"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "123"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod123"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo de caja (sólo dinero en efectivo y documentos al día, según arqueo)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "101"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod101"
                    format TEXTBOX
                }
            } 
				row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Capital efectivo"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "102"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod102"
                    format TEXTBOX
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo cuenta corriente bancaria según, conciliación"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "784"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod784"
                    format TEXTBOX
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Existencia final"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "129"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod129"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Bienes adquiridos contrato leasing"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "648"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod648"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Activo inmovilizado"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "647"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod647"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Activo gasto diferido goodwill tributario"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1003"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1003"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Activo intangible goodwill tributario (Ley N° 20.780)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1004"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1004"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Patrimonio financiero"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "843"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod843"
                    format TEXTBOX
                }
            }
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content " "
					format LABEL
					colSpan 3
				}
			}    			
		}
		table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			 
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Otros Antecedentes"
					format LABEL
					colSpan 3
				}
			}
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Utilidades financieras capitalizadas"
                    format LABEL    
					width "705px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1005"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1005"
                    format TEXTBOX
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos adeudados o pagados por cuotas de bienes en leasing"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "975"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod975"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Monto del capital  directa o indirectamente financiado por partes relacionadas"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1021"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1021"
                    format TEXTBOX
                }
            } 
				row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "TEX"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1191"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1191"
                    format TEXTBOX
                }
				} 
				row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "TEF"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1192"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1192"
                    format TEXTBOX
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Retiros, remesas o distribuciones afectos a IGC o IA, no Imputados a los RTRE"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1193"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1193"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Retiros, remesas o distribuciones afectos a IGC o IA, imputados a las utilidades de balance en exceso de las tributables (UBET)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1194"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1194"
                    format TEXTBOX
                }
            }
	    row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Depreciación acelerada vehículos eléctricos o híbridos con recarga eléctrica exterior u otros calificados como cero emisiones por resolución fundada del Ministerio de Energía (art. 8 Ley N° 21.305)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1782"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1782"
                    format TEXTBOX
                }
            }
	    row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Depreciación normal vehículos eléctricos o híbridos con recarga eléctrica exterior u otros calificados como cero emisiones por resolución fundada del Ministerio de Energía (art. 8 Ley N° 21.305)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1783"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1783"
                    format TEXTBOX
                }
            }
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content " "
					format LABEL
					colSpan 3
				}
			}    			
		}
		table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
		 
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Saldos"
					format LABEL
					colSpan 3
				}
			}
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo total de rentas exentas de IGC (art. 11 Ley N° 18.401, rentas del capitalismo popular)"
                    format LABEL    
					width "705px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1195"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1195"
                    format TEXTBOX
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo exceso de retiros de 2014, determinados al 31 de diciembre para ejercicios siguientes"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1691"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1691"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo de crédito por IDPC no sujetos a restitución generados hasta el 31.12.2019"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1196"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1196"
                    format TEXTBOX
                }
            } 
				row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo de crédito por IDPC no sujetos a restitución generados a contar del 01.01.2020"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1197"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1197"
                    format TEXTBOX
                }
            } 

			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo crédito Impuesto Tasa Adicional ex art. 21 LIR"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "238"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod238"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo de excedente base imponible IDPC voluntario a imputar ejercicio siguientes"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1586"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1586"
                    format TEXTBOX
                }
            }    			
		}
		
		table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
		 
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "CUENTAS EN PARTICIPACIÓN Y DEMÁS ENCARGOS FIDUCIARIOS"
					format LABEL
					colSpan 3
				}
			}
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo o aporte inicial del ejercicio de la asociación o cuentas en participación o del encargo fiduciario a informar por el gestor"
                    format LABEL    
					width "705px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1823"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1823"
                    format TEXTBOX
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo final del ejercicio de la asociación o cuentas en participación o del encargo fiduciario a informar por el gestor"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1824"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1824"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por IDPC asignado en el ejercicio a los partícipes o beneficiarios de la asociación o cuentas en participación o del encargo fiduciario "
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1825"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1825"
                    format TEXTBOX
                }
            } 
				row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito IPE asignado en el ejercicio a los partícipes o beneficiarios de la asociación o cuentas en participación o del encargo fiduciario"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1826"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1826"
                    format TEXTBOX
                }
            } 

		}

	}#FIN RECUADRO 6
    #RECUADRO 7
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 7: INGRESO DIFERIDO Y SALDOS PENDIENTES DE AMORTIZACIÓN."
					format LABEL
					colSpan 10
				}
			}
			row {
				cell {
                    style "fw-2019-tituloGrupo"
                    content "Detalle"
                    colSpan 1
					rowSpan 2
                    format LABEL  
					width "500px"					
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "Saldo de rentas tributables acumuladas"
                    colSpan 2
					rowSpan 2
                    format LABEL 
					 					
                }
					cell {
					style "fw-2019-tituloGrupo"
					content "Incremento"
					colSpan 2
					rowSpan 2
					format LABEL  
				 					
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "Crédito"
                    colSpan 4					 
                    format LABEL					 				
                }
				cell {
                    style "fw-2019-codigoCampo"
                    content " "
					colSpan 1
					rowSpan 2
                    format LABEL
                }
			}
			row {
				cell {
                    style "fw-2019-tituloGrupo"
                    content "No Sujeto a Restitución"
                    colSpan 2					 
                    format LABEL					 				
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content " Sujeto a Restitución"
                    colSpan 2					 
                    format LABEL					 				
                }
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo de ingreso diferido pendiente de tributación de acuerdo al art. 14 letra D) N°8, letra (d) de la LIR, art. 40° transitorio  de la Ley N° 21.210 y Circular N° 62 de 2020"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1358"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1358"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1359"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1359"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1360"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1360"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1361"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1361"
                    format TEXTBOX
                }
				cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }				
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingreso  diferido a  imputar  en  el ejercicio"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1184"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1184"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1362"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1362"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1363"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1363"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1364"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1364"
                    format TEXTBOX
                }
				cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }				
            }
		row {
			cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo de ingreso diferido pendiente de tributación de acuerdo al art. 15° transitorio de la Ley N° 21.210"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1365"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1365"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1366"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1366"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1367"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1367"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
					colSpan 2
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }				
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingreso  diferido a  imputar  en  el ejercicio "
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1185"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1185"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1369"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1369"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1370"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1370"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
					colSpan 2
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }				
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "TOTAL Saldo ingreso diferido a imputar en los ejercicios siguientes"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1096"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1096"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1097"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1097"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1106"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1106"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1372"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1372"
                    format TEXTBOX
                }
				cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
                }				
            }			
			 
		}
		 
	}# FIN RECUADRO 7
	#RECUADRO 8
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 8: INFORMACIÓN SOBRE DONACIONES Y CRÉDITOS O REBAJAS IMPUTABLES AL IDPC"
					format LABEL
					colSpan 7
				}
			}
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "CRÉDITOS CUYOS REMANENTES NO DAN DERECHO A IMPUTACIÓN EN LOS EJERCICIOS SIGUIENTES NI A DEVOLUCIÓN"
					format LABEL
					colSpan 7
				}
			}
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "DETALLE"
					format LABEL					 
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "TOTAL GASTO"
					format LABEL
					colSpan 2
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "GASTO NO ACEPTADO"
					format LABEL
					colSpan 2
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "CRÉDITO"
					format LABEL
					colSpan 2
				}
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Donaciones al FNR, según arts. 4° y 9° Ley N° 20.444 (no afectas al LGA)"
                    format LABEL    
					width "200px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "994"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod994"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "876"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod876"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "898"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod898"
                    format TEXTBOX
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Donaciones para fines culturales, según art. 8° Ley N° 18.985 (afectas al LGA)"
                    format LABEL    
					width "200px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "986"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod986"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "990"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod990"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "373"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod373"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Donaciones para fines educacionales, según art. 3° Ley N° 19.247 (afectas al LGA)"
                    format LABEL    
					width "200px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "987"
                    format LABEL
					width "30px"
					
					}cell {
                    style "fw-valorCampo"
                    content "$cod987"
                    format TEXTBOX
					}cell {
						style "fw-2019-codigoCampo"
						content "991"
						format LABEL
						width "30px"
						
					}cell {
						style "fw-valorCampo"
						content "$cod991"
						format TEXTBOX
					}cell {
						style "fw-2019-codigoCampo"
						content "382"
						format LABEL
						width "30px"
						
					}cell {
						style "fw-valorCampo"
						content "$cod382"
						format TEXTBOX
					}
				} 
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Donaciones para fines deportivos, según art. 62 y sgtes. Ley N° 19.712 (afecta al LGA)"
                    format LABEL    
					width "200px"					
                }cell {
					style "fw-2019-codigoCampo"
					content "988"
					format LABEL
					width "30px"
					
				}cell {
				style "fw-valorCampo"
				content "$cod988"
				format TEXTBOX
				}cell {
					style "fw-2019-codigoCampo"
					content "1001"
					format LABEL
					width "30px"
					
				}cell {
					style "fw-valorCampo"
					content "$cod1001"
					format TEXTBOX
				}cell {
					style "fw-2019-codigoCampo"
					content "761"
					format LABEL
					width "30px"
					
				}cell {
					style "fw-valorCampo"
					content "$cod761"
					format TEXTBOX
				}
			}
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Donaciones para fines sociales, según art. 1° y sgtes. Ley N° 19.885 (afecta al LGA)"
                    format LABEL    
					width "200px"					
                }cell {
					style "fw-2019-codigoCampo"
					content "792"
					format LABEL
					width "30px"
					
				}cell {
				style "fw-valorCampo"
				content "$cod792"
				format TEXTBOX
				}cell {
					style "fw-2019-codigoCampo"
					content "794"
					format LABEL
					width "30px"
					
				}cell {
					style "fw-valorCampo"
					content "$cod794"
					format TEXTBOX
				}cell {
					style "fw-2019-codigoCampo"
					content "773"
					format LABEL
					width "30px"
					
				}cell {
					style "fw-valorCampo"
					content "$cod773"
					format TEXTBOX
				}
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por impuesto territorial (contribuciones de bienes raíces)"
                    format LABEL 
					colSpan 5
					width "200px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "365"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod365"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por bienes físicos del activo inmovilizado del ejercicio"
                    format LABEL 
					colSpan 5
					width "200px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "366"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod366"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por rentas de zonas francas"
                    format LABEL 
					colSpan 5
					width "200px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "392"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod392"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por ingreso diferido"
                    format LABEL 
					colSpan 5
					width "200px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1153"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1153"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otras rebajas especiales"
                    format LABEL 
					colSpan 5
					width "200px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "984"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod984"
                    format TEXTBOX
                }
            }
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content " "
					format LABEL
					colSpan 7
				}
			}    			
		}
		
		table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			 
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "CRÉDITOS CUYOS REMANENTES DAN SOLO DERECHO A IMPUTACIÓN EN LOS EJERCICIOS SIGUIENTES"
					format LABEL
					colSpan 7
				}
			}
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente de crédito por bienes físicos del activo inmovilizado proveniente de inversiones AT 1999 - 2002"
                    format LABEL    
					colSpan 5					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "839"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod839"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Donaciones a universidades, institutos profesionales y centros de formación técnica, según art. 69 Ley N° 18.681 (afectas al LGA)"
                    format LABEL    
					width "200px"					
                }cell {
					style "fw-2019-codigoCampo"
					content "989"
					format LABEL
					width "30px"
					
				}cell {
					style "fw-valorCampo"
					content "$cod989"
					format TEXTBOX
				}cell {
					style "fw-2019-codigoCampo"
					content "993"
					format LABEL
					width "30px"
					
				}cell {
					style "fw-valorCampo"
					content "$cod993"
					format TEXTBOX
				}cell {
					style "fw-2019-codigoCampo"
					content "384"
					format LABEL
					width "30px"
					
				}cell {
					style "fw-valorCampo"
					content "$cod384"
					format TEXTBOX
				}
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Monto inversión Ley Arica"
                    format LABEL    
					width "200px"					
                }cell {
					style "fw-2019-codigoCampo"
					content "815"
					format LABEL
					width "30px"
					
				}cell {
					style "fw-valorCampo"
					content "$cod815"
					format TEXTBOX
				}cell {
					style "fw-2019-codigoCampo"
					content " "
					format LABEL
					colSpan 2
					
				}cell {
					style "fw-2019-codigoCampo"
					content "390"
					format LABEL
					width "30px"
					
				}cell {
					style "fw-valorCampo"
					content "$cod390"
					format TEXTBOX
				}
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Monto inversión Ley Austral"
                    format LABEL    
					width "200px"					
                }cell {
					style "fw-2019-codigoCampo"
					content "741"
					format LABEL
					width "30px"
					
				}cell {
					style "fw-valorCampo"
					content "$cod741"
					format TEXTBOX
				}cell {
					style "fw-2019-codigoCampo"
					content " "
					format LABEL
					colSpan 2
					
				}cell {
					style "fw-2019-codigoCampo"
					content "742"
					format LABEL
					width "30px"
					
				}cell {
					style "fw-valorCampo"
					content "$cod742"
					format TEXTBOX
				}
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por impuestos soportados en el extranjero, según art.41 A LIR"
                    format LABEL    
					colSpan 5 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "841"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod841"
                    format TEXTBOX
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por inversión privada en actividades de investigación y desarrollo Ley N° 20.241"
                    format LABEL    
					colSpan 5 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "855"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod855"
                    format TEXTBOX
                }
            }
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content " "
					format LABEL
					colSpan 7
				}
			}    			
		}
		table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			 
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "CRÉDITO CUYO REMANENTE DA DERECHO A DEVOLUCIÓN"
					format LABEL
					colSpan 9
				}
			}
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito IEAM del ejercicio"
                    format LABEL    				 				
                }cell {
                    style "fw-2019-codigoCampo"
                    content "828"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod828"
                    format TEXTBOX
                }
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito IEAM utilizado en el ejercicio"
                    format LABEL    				 				
                }cell {
                    style "fw-2019-codigoCampo"
                    content "830"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod830"
                    format TEXTBOX
                }
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente crédito IEAM a devolver a través de código 36"
                    format LABEL    				 				
                }cell {
                    style "fw-2019-codigoCampo"
                    content "829"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod829"
                    format TEXTBOX
                }
            }  
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content " "
					format LABEL
					colSpan 9
				}
			}    			
		}
		table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
		 
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "OTRAS DONACIONES"
					format LABEL
					colSpan 5
				}
			}
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "DETALLE"
					format LABEL					 
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "TOTAL GASTO"
					format LABEL
					colSpan 2
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "GASTO NO ACEPTADO"
					format LABEL
					colSpan 2
				} 
			}
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otras donaciones, según art. 10 Ley N° 19.885 (afecta al LGA)"
                    format LABEL   
									
                }cell {
                    style "fw-2019-codigoCampo"
                    content "772"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod772"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "811"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod811"
                    format TEXTBOX
                } 
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Donaciones, según art. 7° Ley N° 16.282 (no afectas al LGA)"
                    format LABEL   
									
                }cell {
                    style "fw-2019-codigoCampo"
                    content "873"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod873"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1002"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1002"
                    format TEXTBOX
                } 
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Donaciones, según art. 37 D.L. N° 1.939 de 1977 (no afectas al LGA) y según art. 68 Ley N° 19.300 (no afectas al LGA)"
                    format LABEL   
									
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1120"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1120"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1121"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1121"
                    format TEXTBOX
                } 
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Donaciones, según Ley N° 21.015 (no afectas al LGA)"
                    format LABEL   
									
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1122"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1122"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1124"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1124"
                    format TEXTBOX
                } 
            } 
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Donaciones, según Título VIII bis D.L. N° 3.063 de 1979 (no afectas al LGA)"
                    format LABEL   
									
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1838"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1838"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1839"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1839"
                    format TEXTBOX
                } 
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Donaciones, según art. 18° Ley N° 21.258 (no afecta al LGA)"
                    format LABEL   
                                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1775"
                    format LABEL
                    width "30px"
                    
                }cell {
                    style "fw-valorCampo"
                    content "$cod1775"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                    width "30px"
                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                } 
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Donaciones de bienes inmuebles en apoyo al plan de emergencia habitacional, art. 26 Ley N° 21.450"
                    format LABEL   
                                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1911"
                    format LABEL
                    width "30px"
                    
                }cell {
                    style "fw-valorCampo"
                    content "$cod1911"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                    width "30px"
                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content ""
                    format LABEL
                } 
            }
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content " "
					format LABEL
					colSpan 5
				}
			}    			
		}
		table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			 
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Donaciones para fines culturales según art. 8° Ley N° 18.985"
					format LABEL
					colSpan 6
				}
			}
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Remanente año anterior"
					format LABEL
                    colSpan 2					
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Imputado en el ejercicio"
					format LABEL
					colSpan 2
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Remanente para ejercicio siguiente"
					format LABEL
					colSpan 2
				} 
			}
			row {
				 cell {
                    style "fw-2019-codigoCampo"
                    content "999"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod999"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "998"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod998"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "953"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod953"
                    format TEXTBOX
                }
            }  			
		}
		
	}#FIN RECUADRO 8
	#RECUADRO 9
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 9: REGISTRO FUR"
					format LABEL
					colSpan 4
				}
			}
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente FUR ejercicio anterior debidamente reajustado"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1160"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1160"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Rebaja FUR por devolución de capital, enajenación de acciones o derechos sociales y reorganización empresarial, debidamente reajustados"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1163"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1163"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Rebaja FUR acogido a IS por devolución de capital, enajenación de acciones o derechos sociales y reorganización empresarial, debidamente reajustados"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1164"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1164"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Aumento FUR por reorganización empresarial debidamente reajustado"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1166"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1166"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente para el ejercicio siguiente de rentas afectadas con IS"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1168"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1168"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }	
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente FUR para el ejercicio siguiente afectos a impuestos finales"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1169"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1169"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }	
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente FUR para el ejercicio siguiente exentos e INR"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1170"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1170"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }	
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente crédito IDPC ejercicio anterior debidamente reajustado"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1171"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1171"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }	
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por IDPC utilizado en el ejercicio"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1172"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1172"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }	
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por IDPC recibido en el ejercicio"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1173"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1173"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }	
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente crédito por IDPC para el ejercicio siguiente"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1174"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1174"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }				
			 
		}
	}#FIN RECUADRO 9
    #RECUADRO 10
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO Nº 10: DEPRECIACIÓN"
					format LABEL
					colSpan 4
				}
			}
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Cantidad de bienes del activo inmovilizado"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "940"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod940"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Depreciación acelerada en 1/3 vida útil, del ejercicio (art. 31 N° 5 LIR)"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "938"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod938"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Depreciación acelerada en 1/10 vida útil, del ejercicio (art. 31 N° 5 bis LIR)"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "949"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod949"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Total depreciación normal de los bienes con depreciación acelerada informada en los códigos 938, 949"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "950"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod950"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }	
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Diferencia entre depreciaciones aceleradas y normales del ejercicio, anteriores"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1066"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1066"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }	
		  
		}
	}#FIN RECUADRO 10
	#RECUADRO 11
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 11: ROYALTY MINERO"
					format LABEL
					colSpan 4
				}
			}
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "ANTECEDENTES IEAM ARTS. 64 BIS y 64 TET LIR (CONTRIBUYENTES CON INVARIABILIDAD TRIBUTARIA VIGENTE)"
					format LABEL
					colSpan 3
				}
			}			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Agregados a la RLI (o pérdida tributaria) de Primera Categoría, según art. 64 ter LIR"
                    format LABEL    
					width "705px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "884"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod884"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Deducciones a la RLI (o pérdida tributaria) de Primera Categoría, según art. 64 ter LIR"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "885"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod885"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ventas expresadas en toneladas métricas de cobre fino, según art. 64 bis LIR"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "886"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod886"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ventas de relacionados expresadas en toneladas métricas de cobre fino, según art. 64 bis LIR"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "985"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod985"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Margen operacional minero según art. 64 bis LIR"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "887"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod887"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
				
            }row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "ANTECEDENTES ROYALTY MINERO Ley 21.591"
					format LABEL
					colSpan 4
				}
				
			}row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "AGREGADOS A LA RIOMA (ART. 6 LEY 21.591 Y ART 58 LEY 20.551) "
					format LABEL
					colSpan 4
				}
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Componente del margen minero art. 3 o art. 4 Ley N° 21.591"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1954"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1954"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Costos asociados a Ingresos no operacionales mineros"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1955"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1955"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos asociados a Ingresos no operacionales mineros"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1956"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1956"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Proporción gastos de imputación común que no sean asignables exclusivamente a un determinado tipo de ingresos"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1957"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1957"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos de Intereses"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1958"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1958"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Depreciación Acelerada"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1959"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1959"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdida de ejercicios anteriores"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1960"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1960"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos de organización y puesta en Marcha"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1961"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1961"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Contratos de Avio y otras contraprestaciones"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1962"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1962"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Cierre de Faenas (art 58 de la Ley N° 20.551)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1963"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1963"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
				
            }
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "DEDUCCIONES A LA RIOMA ART. 6 LEY 21.591"
					format LABEL
					colSpan 4
				}
				
			}row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingresos no operacionales mineros"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1964"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1964"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Cuota depreciación normal"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1965"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1965"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Cuota Gastos de organización y puesta en marcha"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1966"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1966"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Renta Imponible Operacional Minera Ajustada"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1967"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1967"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
				
            }
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "OTROS ANTECEDENTES"
					format LABEL
					colSpan 4
				}
				
			}row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Promedio TMCF (incluídos los ingresos de explotadores mineros relacionados) art. 5 Ley N° 21.591"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1968"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1968"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Total ingresos de productos mineros del ejercicio (Indistintamente del mineral de que se trata)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1969"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1969"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Total ingresos de productos mineros del ejercicio (Sólo Cobre)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1970"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1970"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Margen operacional minero según art 2 Ley N° 21.591"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1971"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1971"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
				
            }row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Tasa margen operacional aplicada según art. 3 o art. 4 Ley N° 21.591"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1972"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1972"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
				
            }
			
			
			
		  
		}
	}#FIN RECUADRO 11
	#RECUADRO 12
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 12: BASE IMPONIBLE DE PRIMERA CATEGORIA (ART. 14 LETRAS A) O G) LIR)"
					format LABEL
					colSpan 4
				}
			}
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "RESULTADO FINANCIERO"
					format LABEL
					colSpan 4
				}
			} 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingresos del giro percibidos o devengados"
                    format LABEL    
					width "705px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1657"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1657"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Rentas de fuente extranjera"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1658"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1658"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Intereses percibidos o devengados"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1659"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1659"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otros ingresos percibidos o devengados"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1660"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1660"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Costo directo de los bienes y servicios"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1661"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1661"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remuneraciones"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1662"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1662"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Arriendos"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1140"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1140"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Depreciación financiera del ejercicio"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1663"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1663"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Intereses pagados o adeudados"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1664"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1664"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos por donaciones"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1665"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1665"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otros gastos financieros"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1666"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1666"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos por inversión privada en investigación y desarrollo certificados por CORFO"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1667"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1667"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos por inversión privada en Investigación y desarrollo no certificados por CORFO"
                    format LABEL    
					width "705px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1668"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1668"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos por exigencias medio ambientales"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1141"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1141"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gasto por indemnización o compensación a clientes o usuarios"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1142"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1142"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Costos y gastos necesarios para producir las rentas de fuente extranjera"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1669"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1669"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos por impuesto renta e impuesto diferido"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1670"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1670"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otros gastos deducidos de los ingresos brutos"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1671"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1671"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Resultado financiero"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1672"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1672"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content " "
					format LABEL
					colSpan 4
				}
			} 
		  
		}
	table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
		 
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "AJUSTES AL RESULTADO FINANCIERO"
					format LABEL
					colSpan 4
				}
			} 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Corrección monetaria saldo deudor (art. 32 N° 1 LIR)"
                    format LABEL    
					width "705px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1673"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1673"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Corrección monetaria saldo acreedor (art. 32 N° 2 LIR)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1674"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1674"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Partidas del inc. 1° no afectas al IU de tasa 40% y del inc. 2° del art. 21 LIR, reajustados"
                    format LABEL    
					 				
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1144"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1144"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Depreciación financiera del ejercicio"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1675"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1675"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Estimación y/o castigos de deudas incobrables, según criterios financieros"
                    format LABEL    
					 				
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1175"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1175"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Rentas tributables no reconocidas financieramente"
                    format LABEL    
					 				
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1676"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1676"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos agregados por donaciones"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1677"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1677"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos que se deben agregar a la RLI según el art. 33 N° 1 LIR"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1678"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1678"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingreso diferido por cambio de régimen"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1150"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1150"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Costos y gastos asociados a ingresos no renta (art. 17 LIR), generados"
                    format LABEL    
					 				
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1147"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1147"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Proporcionalidad gastos imputados a ingresos no renta y/o rentas exentas"
                    format LABEL    
					 				
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1148"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1148"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Intereses devengados por inversiones en bonos del art. 104 LIR"
                    format LABEL    
				 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1149"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1149"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingresos devengados por cambio de régimen"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1151"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1151"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos adeudados por cambio de régimen"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1152"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1152"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Castigo de deudas incobrables, según art. 31 inc. 4° N° 4 LIR"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1176"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1176"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Depreciación tributaria del ejercicio"
                    format LABEL    
				 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1679"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1679"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gasto goodwill tributario del ejercicio"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1680"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1680"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }			
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Impuesto específico a la actividad minera"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1681"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1681"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Componente ad valorem del Royalty Minero según art. 2 Ley N° 21.591"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1974"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1974"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Componente del margen del Royalty Minero según art. 3 o art. 4 Ley N° 21.591"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1975"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1975"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos rechazados afectos a la tributación del art. 21 inc. 1° LIR"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1682"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1682"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos rechazados afectos a la tributación del art. 21 inc. 3° LIR"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1683"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1683"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otras partidas"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1684"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1684"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Rentas exentas IDPC (art. 33 N°2 LIR )"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1685"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1685"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Dividendos y/o utilidades sociales percibidos o devengados (art. 33 N° 2 LIR)"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1686"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1686"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Dividendos y/o utilidades sociales percibidas o devengadas (art. 33 N° 2 LIR), ingresos no renta"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1183"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1183"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos aceptados por donaciones"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1687"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1687"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingresos no renta, generados (art. 17 LIR)"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1688"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1688"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdidas de ejercicios anteriores (art. 31 N° 3 LIR)"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1689"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1689"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Renta líquida imponible antes de rebaja por incentivo al ahorro (art. 14 letra E) LIR) y/o por pago de IDPC voluntario (art. 14 letra A) N°6 LIR y art. 42° transitorio Ley N° 21.210) o pérdida tributaria"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1728"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1728"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Incentivo al ahorro según art. 14 letra E) LIR"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1154"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1154"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Base del IDPC voluntario según art. 14 letra A) N° 6 LIR y art. 42° transitorio Ley N° 21.210"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1157"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1157"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Renta líquida imponible afecta a IDPC (o pérdida tributaria antes de imputar dividendos o retiros percibidos) del ejercicio"
                    format LABEL    
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1690"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1690"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }
			
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content " "
					format LABEL
					colSpan 4
				}
			} 
		  
		}
	table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
		 
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "IMPUTACIONES A LA PÉRDIDA TRIBUTARIA DEL EJERCICIO"
					format LABEL
					colSpan 4
				}
			} 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Dividendos o retiros percibidos afectos a impuestos finales, que absorben la pérdida tributaria"
                    format LABEL    
					width "705px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1155"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1155"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Incremento por IDPC de los dividendos o retiros percibidos afectos a impuestos finales, que absorben la pérdida tributaria"
                    format LABEL    
					width "705px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1156"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1156"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdida tributaria del ejercicio al 31 de diciembre"
                    format LABEL    
					width "705px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1143"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1143"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }
		}
	}#FIN RECUADRO 12
	#RECUADRO 13
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO Nº 13: DETERMINACIÓN DEL RAI (ART. 14 LETRA A) LIR)"
					format LABEL
					colSpan 4
				}
			}
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "CPT positivo final (recuadro N° 14)"
                    format LABEL    
					width "705px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1698"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1698"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "CPT negativo final (recuadro N° 14)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1717"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1717"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo negativo del registro REX al término del ejercicio"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1692"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1692"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remesas, retiros o dividendos repartidos en el ejercicio, reajustados"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1699"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1699"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Subtotal"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1718"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1718"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo positivo del registro REX al término del ejercicio, antes de imputaciones"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1693"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1693"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Capital aportado debidamente reajustado (incluye aumentos y disminuciones efectivas)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "844"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod844"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo FUR  (cuando no haya sido considerado dentro del valor del capital aportado a la empresa)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "982"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod982"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Sobreprecio obtenido en la colocación de acciones de propia emisión, debidamente reajustado"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1198"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1198"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Rentas afectas a IGC o IA (RAI) del ejercicio"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1199"
                    format LABEL
					width "20px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1199"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }
		  
		}
	}#FIN RECUADRO 13
	#RECUADRO 14
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO Nº 14:  RAZONABILIDAD CAPITAL PROPIO TRIBUTARIO (ART. 14 LETRA A) O G) LIR) "
					format LABEL
					colSpan 4
				}
			}
			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "CPT positivo inicial"
                    format LABEL    
					width "705px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1145"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1145"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "CPT negativo inicial"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1146"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1146"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Corrección monetaria capital propio tributario inicial"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1177"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1177"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Aumentos (efectivos) de capital del ejercicio, actualizados"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "893"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod893"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Disminuciones (efectivas) de capital del ejercicio, actualizadas"
                    format LABEL  
					 					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "894"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod894"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Renta líquida imponible afecta a IDPC del ejercicio"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1694"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1694"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdida tributaria del ejercicio al 31 de diciembre"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1695"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1695"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdidas de ejercicios anteriores (art. 31 N° 3 LIR)"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1696"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1696"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Rentas exentas del IDPC e ingresos no renta (positivo), generados por la empresa en el ejercicio"
                    format LABEL    
					width "400px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1178"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1178"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdida por rentas exentas del IDPC e ingresos no renta del ejercicio"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1179"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1179"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Retiros o dividendos percibidos en el ejercicio por participaciones en otras empresas"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1180"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1180"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Utilidades percibidas afectas a impuestos finales imputadas a la pérdida tributaria del ejercicio"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1181"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1181"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remesas, retiros o dividendos repartidos en el ejercicio, reajustados"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1182"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1182"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Partidas del inc. 1° no afectas al IU de tasa 40% y del inc. 2° del art. 21 LIR, reajustados"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1697"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1697"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Aumentos del ejercicio (por reorganizaciones)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1186"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1186"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Disminuciones del ejercicio (por reorganizaciones)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1187"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1187"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingreso diferido por cambio de régimen"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1700"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1700"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito total disponible imputable contra impuestos finales (IPE), del ejercicio"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1188"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1188"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Incentivo al ahorro según art. 14 letra E) LIR"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1701"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1701"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Base del IDPC voluntario según  art. 14 letra A) N°  6 LIR"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1702"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1702"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otras partidas a agregar"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1189"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1189"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otras partidas a deducir"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1190"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1190"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            }
		row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "CPT positivo final"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "645"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod645"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }
		row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "CPT negativo final"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "646"
                    format LABEL
					
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod646"
                    format TEXTBOX
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }
		}
	}#FIN RECUADRO 14
	#RECUADRO 15
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "1300px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 15: REGISTRO TRIBUTARIO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR)"
					format LABEL
					colSpan 18
				}
			}
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content " "
					colSpan 1
					rowSpan 3
					width "240px"
                    format LABEL				
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "RAI"
                    colSpan 2
					rowSpan 3
					width "140px"
                    format LABEL 
					 					
                }
					cell {
					style "fw-2019-tituloGrupo"
					content "DDAN"
                    colSpan 2
					rowSpan 3
					width "140px"
                    format LABEL 
				 					
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "REX"
                    colSpan 10					 
                    format LABEL					 				
                }
				cell {
					style "fw-2019-tituloGrupo"
					content "STUT"
                    colSpan 2
					rowSpan 3
					width "140px"
                    format LABEL 
				 					
                }
				cell {
                    style "fw-2019-codigoCampo"
                    content " "
					colSpan 1
					rowSpan 3
                    format LABEL
                }
			}
			row {
				cell {
                    style "fw-2019-tituloGrupo"
                    content "RENTAS CON TRIBUTACIÓN CUMPLIDA"
                    colSpan 6					 
                    format LABEL					 				
                }
				cell {
                   style "fw-2019-tituloGrupo"
					content "RENTAS EXENTAS"
                    colSpan 2
					rowSpan 2
					width "140px"
                    format LABEL 				 				
                }
				cell {
                   style "fw-2019-tituloGrupo"
					content "INR"
                    colSpan 2
					rowSpan 2
					width "140px"
                    format LABEL 				 				
                }
			}
		row {
				cell {
                    style "fw-2019-tituloGrupo"
                    content "RAP Y DIFERENCIA INICIAL EX ART. 14 TER A) LIR"
                    colSpan 2		
                    width "140px"				
                    format LABEL					 				
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "ISFUT / ISIF"
                    colSpan 2		
					width "140px"					
                    format LABEL					 				
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "OTRAS"
                    colSpan 2
                    width "140px"					
                    format LABEL					 				
                }
			}
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio anterior o saldo inicial reajustado (saldo positivo)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1200"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1200"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1211"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1211"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1221"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1221"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1730"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1730"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1731"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1731"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1234"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1234"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1246"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1246"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1260"
                    format LABEL
					width "30px"					 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1260"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL				
                }        
			}
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio anterior o saldo inicial reajustado (saldo negativo)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1222"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1222"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1843"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1843"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1235"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1235"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1247"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1247"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"					 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL				
                }        
			}row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Monto acogido al ISIF art 10 Ley N° 21.681, reajustado"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1933"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1933"
                    format TEXTBOX
					width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1934"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1934"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content " "
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content " "
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1935"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1935"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+/-"
                    format LABEL
					width "30px"					 
                }        
			}
			
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Aumentos del ejercicio (por reorganizaciones)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1202"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1202"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1212"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1212"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1224"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1224"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1733"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1733"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1734"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1734"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1236"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1236"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1248"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1248"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1262"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1262"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL				
                }        
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Disminuciones del ejercicio (por reorganizaciones)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1203"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1203"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1213"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1213"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1225"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1225"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1735"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1735"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1736"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1736"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1237"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1237"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1249"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1249"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1263"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1263"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL				
                }        
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Reversos y/o disminuciones del ejercicio (propios)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1204"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1204"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1214"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1214"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1226"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1226"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1737"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1737"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1738"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1738"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1238"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1238"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1250"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1250"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1264"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1264"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL				
                }        
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Aumentos del ejercicio (propios)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1205"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1205"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1215"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1215"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1740"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1740"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1239"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1239"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1251"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1251"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"					 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL				
                } 				
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otros aumentos del ejercicio"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1206"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1206"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1216"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1216"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1228"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1228"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1741"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1741"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1742"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1742"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1240"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1240"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1252"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1252"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1265"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1265"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL				
                }        
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otras disminuciones del ejercicio"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1207"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1207"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1217"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1217"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1229"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1229"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1743"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1743"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1744"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1744"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1241"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1241"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1253"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1253"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1266"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1266"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL				
                }        
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remesas, retiros o dividendos imputados a los RTRE, reajustados"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1208"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1208"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1218"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1218"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1230"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1230"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1745"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1745"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1746"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1746"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1242"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1242"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1254"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1254"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1267"
                    format LABEL
					width "30px"
				
                }cell {
                    style "fw-valorCampo"
                    content "$cod1267"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL				
                }        
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Retiros en exceso y devoluciones de capital imputados en el ejercicio, reajustados"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1209"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1209"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1219"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1219"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1231"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1231"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1747"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1747"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1748"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1748"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1243"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1243"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1255"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1255"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1268"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1268"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL				
                }        
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio siguiente (saldo positivo)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1210"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1210"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1220"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1220"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1232"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1232"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1749"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1749"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1750"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1750"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1244"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1244"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1256"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1256"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1269"
                    format LABEL
					width "30px"					 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1269"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL				
                }        
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio siguiente (saldo negativo)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1233"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1233"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1844"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1844"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1245"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1245"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1257"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1257"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"					 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL				
                }          
			}			
		}
	}#FIN RECUADRO 15
	# RECUADRO 16
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "1300px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 16: REGISTRO SAC (ART. 14 LETRA A) LIR)"
					format LABEL
					colSpan 18
				}
			}
			row {
				cell {
                    style "fw-2019-codigoCampo"
                    content " "	
					rowSpan 3	
					width "240px"					
                    format LABEL				
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "Acumulados a contar desde el 01.01.2017"
					colSpan 10	
					width "600px"					
                    format LABEL				
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "Acumulados hasta el 31.12.2016"
					colSpan 7	
					rowSpan 2
					width "500px"					
                    format LABEL				
                }				
			}
			row {
				
				cell {
                    style "fw-2019-tituloGrupo"
                    content "No Sujeto a Restitución"
					colSpan 4	
					width "240px"					
                    format LABEL				
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "Sujeto a Restitución"
					colSpan 4	
					width "240px"						
                    format LABEL				
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "IPE"	
					colSpan 2	
					rowSpan 2	
					width "240px"						
                    format LABEL				
                }
								
			}
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Sin D° Devolución"	
					colSpan 2	
					width "120px"						
					format LABEL				
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Con D° Devolución"	
					colSpan 2		
					width "120px"					
					format LABEL				
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Sin D° Devolución"	
					colSpan 2	
					width "120px"					
					format LABEL				
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Con D° Devolución"	
					colSpan 2	
					width "120px"					
					format LABEL				
				}				
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Sin D° Devolución"	
					colSpan 2	
					width "120px"					
					format LABEL				
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Con D° Devolución"	
					colSpan 2
					width "120px"					
					format LABEL				
				}
				cell {
					style "fw-2019-tituloGrupo"
					content "IPE"	
					colSpan 2	
					width "120px"					
					format LABEL				
				}
				cell {
                    style "fw-2019-codigoCampo"
                    content " "					 
                    format LABEL
                }
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio anterior o saldo inicial (saldo positivo)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1270"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1270"
                    format TEXTBOX
				    width "120px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1279"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1279"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1288"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1288"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1301"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1301"
                    format TEXTBOX
					width "120px" 

                }cell {
                    style "fw-2019-codigoCampo"
                    content "1313"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1313"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1324"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1324"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1335"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1335"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1346"
                    format LABEL
					width "30px" 				 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1346"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL				
                }        
			}
		 row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio anterior o saldo inicial (saldo negativo)"
                    format LABEL    					
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1821"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1821"
                    format TEXTBOX
					width "120px" 
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1822"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1822"
                    format TEXTBOX
					width "120px" 
                }		
		
		        cell {
                    style "fw-2019-codigoCampo"
                    content "1289"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1289"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1302"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1302"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 				 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					colSpan 3 				 
                }        
			}
            row{
                
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Monto extinguido por ISIF art 10  Ley N° 21.681, reajustado"
                    format LABEL					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1936"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1936"
                    format TEXTBOX
				    width "120px"                    					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1937"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1937"
                    format TEXTBOX
				    width "120px"
                    					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1938"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1938"
                    format TEXTBOX
				    width "120px"                    					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1939"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1939"
                    format TEXTBOX
				    width "120px"                    					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1940"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1940"
                    format TEXTBOX
				    width "120px"                    					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1941"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1941"
                    format TEXTBOX
				    width "120px"                    					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 

                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					colSpan 3 				 
                }
            }
		    row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Aumentos del ejercicio (por reorganizaciones)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1271"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1271"
                    format TEXTBOX
				    width "120px"

                }cell {
                    style "fw-2019-codigoCampo"
                    content "1280"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1280"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1290"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1290"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1303"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1303"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1314"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1314"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1326"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1326"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1337"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1337"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1347"
                    format LABEL
					width "30px" 				 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1347"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL				
                }        
			}
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Disminuciones del ejercicio (por reorganizaciones)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1272"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1272"
                    format TEXTBOX
				    width "120px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1281"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1281"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1291"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1291"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1304"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1304"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1315"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1315"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1327"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1327"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1338"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1338"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1348"
                    format LABEL
					width "30px" 				 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1348"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL				
                }        
			}
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "IDPC e IPE RLI generada en el ejercicio"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
				    width "120px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1292"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1292"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1305"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1305"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1316"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1316"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 				 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL				
                }        
			}
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "IDPC e IPE retiros o dividendos percibidos"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1273"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1273"
                    format TEXTBOX
				    width "120px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1282"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1282"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1293"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1293"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1306"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1306"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1317"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1317"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1328"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1328"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1339"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1339"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1349"
                    format LABEL
					width "30px" 				 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1349"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }        
			}
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otros aumentos del ejercicio"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1274"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1274"
                    format TEXTBOX
				    width "120px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1283"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1283"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1294"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1294"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1307"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1307"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1318"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1318"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1329"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1329"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1340"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1340"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1350"
                    format LABEL
					width "30px" 				 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1350"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL				
                }        
			}
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otras disminuciones del ejercicio"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1275"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1275"
                    format TEXTBOX
				    width "120px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1284"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1284"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1295"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1295"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1308"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1308"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1319"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1319"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1330"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1330"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1341"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1341"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1351"
                    format LABEL
					width "30px" 				 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1351"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL				
                }        
			}
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Asignado a remesas, retiros o dividendos efectuados en el ejercicio, reajustados"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1276"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1276"
                    format TEXTBOX
				    width "120px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1285"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1285"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1296"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1296"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1309"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1309"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1320"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1320"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1331"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1331"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1342"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1342"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1352"
                    format LABEL
					width "30px" 				 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1352"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }        
			}
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Asignado a retiros en exceso y devoluciones de capital efectuados en el ejercicio, reajustados"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1277"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1277"
                    format TEXTBOX
				    width "120px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1286"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1286"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1297"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1297"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1310"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1310"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1321"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1321"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1332"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1332"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1343"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1343"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1353"
                    format LABEL
					width "30px" 				 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1353"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL				
                }        
			}
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "IDPC e IPE asignado a gastos rechazados del art. 21 inc. 1° no afectos a IU 40% y del inc. 2° LIR"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
				    width "120px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1298"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1298"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1311"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1311"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1322"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1322"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1333"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1333"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1344"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1344"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1354"
                    format LABEL
					width "30px" 				 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1354"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL				
                }        
			}
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio siguiente (saldo positivo)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1278"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1278"
                    format TEXTBOX
				    width "120px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1287"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1287"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1312"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1312"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1300"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1300"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1323"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1323"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1334"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1334"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1345"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1345"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1355"
                    format LABEL
					width "30px" 				 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1355"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL				
                }        
			}
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio siguiente (saldo negativo)"
                    format LABEL    
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1723"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1723"
                    format TEXTBOX
				    width "120px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1724"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1724"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1299"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1299"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1373"
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1373"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 				 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL				
                }        
			}
		}
	}# FIN RECUADRO 16
	 
	
	#RECUADRO 17
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "860px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 17: BASE IMPONIBLE RÉGIMEN PRO PYME (ART. 14 LETRA D) N° 3 LIR)"
					format LABEL
					colSpan 4
					width "860px"
				}
			}			 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content " "
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "PERCIBIDO O PAGADO"
                    format LABEL
					width "260px"
					colSpan 3
                } 
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingresos del giro percibidos"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1400"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1400"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            } 

			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingresos del giro devengados en ejercicios anteriores y percibidos en el ejercicio actual"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1817"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1817"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            } 

			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Rentas de fuente extranjera percibidas"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1401"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1401"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Intereses y reajustes percibidos por préstamos y otros"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1402"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1402"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Mayor valor percibido por rescate o enajenación de inversiones o bienes no depreciables"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1403"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1403"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingresos percibidos o devengados por operaciones con empresas relacionadas del art. 14 letra A) LIR"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1587"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1587"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otros ingresos percibidos o devengados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1588"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1588"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingreso diferido imputado en el ejercicio, debidamente incrementado y reajustado cuando corresponda"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1404"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1404"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito sobre activos fijos adquiridos en el ejercicio (art. 33 bis LIR)"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1405"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1405"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Total de ingresos anuales"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1410"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1410"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gasto por saldo inicial de existencias o insumos del negocio en cambio de régimen, pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1406"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1406"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gasto por saldo inicial de activos fijos depreciables en cambio de régimen, pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1407"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1407"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gasto por pérdida tributaria en cambio de régimen"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1408"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1408"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Existencias, insumos y servicios del negocio, pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1409"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1409"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }

			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Existencias, insumos y servicios del negocio adeudados en ejercicios anteriores y pagados en el ejercicio actual"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1818"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1818"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }

			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos de rentas de fuente extranjera, pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1429"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1429"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remuneraciones pagadas"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1411"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1411"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Honorarios pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1412"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1412"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Adquisición de bienes del activo fijo, pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1413"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1413"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Arriendos pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1415"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1415"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos por exigencias medio ambientales, pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1416"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1416"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos por inversión privada en investigación y desarrollo no certificados por CORFO"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1417"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1417"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos por inversión privada en investigación y desarrollo certificados por CORFO"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1418"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1418"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Intereses y reajustes pagados por préstamos y otros"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1419"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1419"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Partidas del art. 21 inc. 1° y 3° LIR pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1421"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1421"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Partidas del art. 21 inc. 1° no afectados con IU 40% y del inc. 2° LIR pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1422"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1422"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdida en rescate o enajenación de inversiones o bienes no depreciables"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1423"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1423"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otros gastos deducibles de los ingresos"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1424"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1424"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos o egresos pagados o adeudados por operaciones con empresas relacionadas del art. 14 letra A) LIR"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1425"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1425"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdidas tributarias de ejercicios anteriores"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1426"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1426"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Créditos incobrables castigados en el ejercicio (reconocidos sobre ingresos devengados)"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1427"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1427"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos aceptados por donaciones"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1428"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1428"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Total de egresos anuales"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1430"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1430"
                    format TEXTBOX
					width "200px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Partidas del inc. 1° no afectas al IU de tasa 40% y del inc. 2° del art. 21 LIR (históricos), incluidos en el total de egresos"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1431"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1431"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Base imponible antes de rebaja por incentivo al ahorro (art. 14 letra E) LIR) y/o por pago de IDPC voluntario (art. 14 letra A) N°6 LIR y art. 42° transitorio Ley N° 21.210) o pérdida tributaria"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1729"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1729"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Incentivo al ahorro según art. 14 letra E) LIR"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1432"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1432"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Base del IDPC voluntario según art. 14 letra A) N° 6 LIR y art. 42° transitorio Ley N° 21.210"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1433"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1433"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Base Imponible afecta a IDPC o pérdida tributaria del ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1440"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1440"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
					width "30px"
                }
            }
			
		}
	}#RECUADRO 17
    #INICIO RECUADRO 18
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "860px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 18: DETERMINACION DEL RAI (ART. 14 LETRA D) N° 3 LIR)"
					format LABEL
					colSpan 4
					width "860px"
				}
			}			
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "CPTS positivo final (recuadro N° 19)"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1703"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1703"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "CPTS negativo final (recuadro N° 19)"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1719"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1719"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo negativo del registro REX al término del ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1492"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1492"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remesas, retiros o dividendos repartidos en el ejercicio, históricos"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1704"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1704"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }			
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Subtotal"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1720"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1720"
                    format TEXTBOX
					width "200px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo positivo del registro REX al término del ejercicio, antes de imputaciones"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1493"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1493"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Capital aportado, histórico (incluye aumentos y disminuciones efectivas)"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1494"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1494"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo FUR (cuando no haya sido considerado dentro del valor del capital aportado a la empresa)"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1725"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1725"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Sobreprecio obtenido en la colocación de acciones de propia emisión, histórico"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1727"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1727"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Rentas afectas a IGC o IA (RAI) del ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1500"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1500"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
					width "30px"
                }
            }
		}
	}
	#FIN RECUADRO 18
	#INICIO RECUADRO 19
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "860px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 19: CPTS RÉGIMEN PRO PYME (ART. 14 LETRA D) N° 3 LIR)"
					format LABEL
					colSpan 4
					width "860px"
				}
			}			
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "CPT o CPTS positivo inicial"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1445"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1445"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "CPT o CPTS negativo inicial"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1446"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1446"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Capital aportado empresas que inician actividades en el año comercial que corresponda a esta declaración"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1374"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1374"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Aumentos (efectivos) de capital del ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1375"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1375"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }			
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Disminuciones (efectivas) de capital del ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1376"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1376"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Base imponible afecta a IDPC del ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1705"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1705"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdida tributaria del ejercicio al 31 de diciembre"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1706"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1706"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdidas tributarias de ejercicios anteriores"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1707"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1707"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Rentas exentas e ingresos no renta (positivo), generados por la empresa en el ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1377"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1377"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdida por rentas exentas e ingresos no renta del ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1378"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1378"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Retiros o dividendos percibidos en el ejercicio por participaciones en otras empresas"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1726"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1726"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Utilidades percibidas afectas a impuestos finales imputadas a la pérdida tributaria del ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1591"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1591"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remesas, retiros o dividendos repartidos en el ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1479"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1479"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Partidas del inc. 1° no afectas al IU de tasa 40% y del inc. 2° del art. 21 LIR"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1708"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1708"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingreso diferido imputado en el ejercicio, debidamente incrementado y reajustado cuando corresponda"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1709"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1709"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito total disponible imputable contra impuestos finales (IPE), del ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1379"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1379"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Incentivo al ahorro según art. 14 letra E) LIR"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1710"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1710"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Base del IDPC voluntario según art. 14 letra A) N° 6 LIR"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1711"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1711"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otras partidas a agregar"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1380"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1380"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otras partidas a deducir"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1381"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1381"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "CPTS positivo final"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1545"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1545"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
					width "30px"
                }
			}
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "CPTS negativo final"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1546"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1546"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
					width "30px"
                }
			}
		}
	}
	#FIN RECUADRO 19
	#INICIO RECUADRO 20
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "1300px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 20: REGISTRO TRIBUTARIO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR)"
					format LABEL
					colSpan 16
				}
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content " "
					colSpan 1
					rowSpan 3
					width "240px"
                    format LABEL
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "RAI"
                    colSpan 2
					rowSpan 3
					width "140px"
                    format LABEL 
					 					
                }cell {
                    style "fw-2019-tituloGrupo"
                    content "REX"
                    colSpan 10
                    format LABEL
                }
				cell {
					style "fw-2019-tituloGrupo"
					content "STUT"
                    colSpan 2
					rowSpan 3
					width "140px"
                    format LABEL 
                }
				cell {
                    style "fw-2019-codigoCampo"
                    content " "
					colSpan 1
					rowSpan 3
                    format LABEL
                }
			}
			row {
				cell {
                    style "fw-2019-tituloGrupo"
                    content "RENTAS CON TRIBUTACIÓN CUMPLIDA"
                    colSpan 6
                    format LABEL
                }
				cell {
                   style "fw-2019-tituloGrupo"
					content "RENTAS EXENTAS"
                    colSpan 2
					rowSpan 2
					width "140px"
                    format LABEL 
                }
				cell {
                   style "fw-2019-tituloGrupo"
					content "INR"
                    colSpan 2
					rowSpan 2
					width "140px"
                    format LABEL 
                }
			}
		row {
				cell {
                    style "fw-2019-tituloGrupo"
                    content "RAP Y DIFERENCIA INICIAL EX ART. 14 TER A) LIR"
                    colSpan 2
                    width "140px"
                    format LABEL
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "ISFUT"
                    colSpan 2
					width "140px"
                    format LABEL
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "OTRAS"
                    colSpan 2
                    width "140px"
                    format LABEL
                }
			}
		row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio anterior o saldo inicial (saldo positivo)"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1451"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1451"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1452"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1452"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1752"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1752"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1753"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1753"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1453"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1453"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1454"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1454"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1382"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1382"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio anterior o saldo inicial (saldo negativo)"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
				    width "110px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1589"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1589"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1845"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1845"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1455"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1455"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1456"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1456"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Aumentos del ejercicio (por reorganizaciones)"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1392"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1392"
                    format TEXTBOX
				    width "110px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1393"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1393"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1755"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1755"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1756"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1756"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1394"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1394"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1395"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1395"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1384"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1384"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Disminuciones del ejercicio (por reorganizaciones)"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1396"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1396"
                    format TEXTBOX
				    width "110px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1397"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1397"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1757"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1757"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1758"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1758"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1398"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1398"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1399"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1399"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1385"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1385"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Reversos y/o disminuciones del ejercicio (propios)"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1459"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1459"
                    format TEXTBOX
				    width "110px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1460"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1460"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1759"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1759"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1760"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1760"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1461"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1461"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1462"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1462"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1386"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1386"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Aumentos del ejercicio (propios)"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1463"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1463"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1762"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1762"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1465"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1465"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1466"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1466"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otros aumentos del ejercicio"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1467"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1467"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1468"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1468"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1763"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1763"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1764"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1764"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1469"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1469"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1470"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1470"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1387"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1387"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otras disminuciones del ejercicio"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1471"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1471"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1472"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1472"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1765"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1765"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1766"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1766"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1473"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1473"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1474"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1474"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1388"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1388"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Retiros, dividendos o remesas imputados a los RTRE"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1475"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1475"
                    format TEXTBOX
				    width "110px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1476"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1476"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1767"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1767"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1768"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1768"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1477"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1477"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1478"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1478"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1389"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1389"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Retiros en exceso y devoluciones de capital imputados en el ejercicio"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1480"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1480"
                    format TEXTBOX
				    width "110px"					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1481"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1481"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1769"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1769"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1770"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1770"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1482"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1482"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1483"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1483"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1390"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1390"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio siguiente (saldo positivo)"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1484"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1484"
                    format TEXTBOX
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1485"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1485"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1771"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1771"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1772"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1772"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1486"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1486"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1487"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1487"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1391"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1391"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio siguiente (saldo negativo)"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content " "
                    format LABEL
				    width "110px"
					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1489"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1489"
                    format TEXTBOX
					 width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-2019-descripcionCampo"
                    content " "
                    format LABEL
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1846"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1846"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1490"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1490"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1491"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1491"
                    format TEXTBOX
					width "110px"
                }cell {
                    style "fw-2019-descripcionCampo"
                    content " "
                    format LABEL
					width "30px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "110px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
                }       
			}
		}
	}
	#FIN RECUADRO 20
	#INICIO RECUADRO 21
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "1300px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 21: REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR)"
					format LABEL
					colSpan 18
				}
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content " "	
					rowSpan 3
					width "240px"
                    format LABEL
					}
				cell {
                    style "fw-2019-tituloGrupo"
                    content "Acumulados a contar desde el 01.01.2017"
					colSpan 10
					width "600px"
                    format LABEL
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "Acumulados hasta el 31.12.2016"
					colSpan 7
					rowSpan 2
					width "500px"
                    format LABEL
                }
			}
			row {
				
				cell {
                    style "fw-2019-tituloGrupo"
                    content "No Sujeto a Restitución"
					colSpan 4
					width "240px"
                    format LABEL
					}
				cell {
                    style "fw-2019-tituloGrupo"
                    content "Sujeto a Restitución"
					colSpan 4
					width "240px"
                    format LABEL
                }
				cell {
                    style "fw-2019-tituloGrupo"
                    content "IPE"
					colSpan 2
					rowSpan 2
					width "240px"
                    format LABEL
                }
			}
			row {
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Sin D° Devolución"	
					colSpan 2
					width "120px"
					format LABEL
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Con D° Devolución"	
					colSpan 2
					width "120px"
					format LABEL
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Sin D° Devolución"	
					colSpan 2
					width "120px"
					format LABEL
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Con D° Devolución"	
					colSpan 2
					width "120px"
					format LABEL
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Sin D° Devolución"
					colSpan 2
					width "120px"
					format LABEL
				}
				cell {
					style "fw-2019-tituloGrupoIzq"
					content "Con D° Devolución"
					colSpan 2
					width "120px"
					format LABEL
				}
				cell {
					style "fw-2019-tituloGrupo"
					content "IPE"
					colSpan 2
					width "120px"
					format LABEL
				}
				cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                }
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio anterior o saldo inicial (saldo positivo)"
                    format LABEL					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1495"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1495"
                    format TEXTBOX
				    width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1496"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1496"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1497"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1497"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1498"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1498"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1499"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1499"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1501"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1501"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1502"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1502"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1503"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1503"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio anterior o saldo inicial (saldo negativo)"
                    format LABEL					
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1655"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1655"
                    format TEXTBOX
				    width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1656"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1656"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1504"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1504"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1505"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1505"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Aumentos del ejercicio (por reorganizaciones)"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1590"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1590"
                    format TEXTBOX
				    width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1436"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1436"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1437"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1437"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1438"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1438"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1439"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1439"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1441"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1441"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1442"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1442"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1443"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1443"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Disminuciones del ejercicio (por reorganizaciones)"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1444"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1444"
                    format TEXTBOX
				    width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1447"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1447"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1448"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1448"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1449"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1449"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1508"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1508"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1509"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1509"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1510"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1510"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1511"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1511"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "IDPC e IPE base imponible generada en el ejercicio"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1512"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1512"
                    format TEXTBOX
				    width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1513"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1513"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1514"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1514"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "IDPC e IPE retiros o dividendos percibidos"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1515"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1515"
                    format TEXTBOX
				    width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1516"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1516"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1517"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1517"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1518"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1518"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1519"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1519"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1520"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1520"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1521"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1521"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1522"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1522"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otros aumentos del ejercicio"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1523"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1523"
                    format TEXTBOX
				    width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1524"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1524"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1525"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1525"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1526"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1526"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1527"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1527"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1528"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1528"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1529"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1529"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1530"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1530"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otras disminuciones del ejercicio"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1531"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1531"
                    format TEXTBOX
				    width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1532"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1532"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1533"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1533"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1534"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1534"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1535"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1535"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1536"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1536"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1537"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1537"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1538"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1538"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Asignado a remesas, retiros o dividendos efectuados en el ejercicio"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1539"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1539"
                    format TEXTBOX
				    width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1540"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1540"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1541"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1541"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1542"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1542"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1543"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1543"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1544"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1544"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1547"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1547"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1548"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1548"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Asignado a Retiros en exceso y devoluciones de capital efectuados en el ejercicio"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1549"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1549"
                    format TEXTBOX
				    width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1550"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1550"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1551"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1551"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1552"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1552"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1553"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1553"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1554"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1554"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1555"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1555"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1556"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1556"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "IDPC e IPE asignado a gastos rechazados del art. 21 inc. 1° no afectos a IU 40% y del inciso 2° LIR"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1557"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1557"
                    format TEXTBOX
				    width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1558"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1558"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1559"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1559"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1560"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1560"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1561"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1561"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1562"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1562"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio siguiente (saldo positivo)"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1563"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1563"
                    format TEXTBOX
				    width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1564"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1564"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1565"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1565"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1566"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1566"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1567"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1567"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1568"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1568"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1569"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1569"
                    format TEXTBOX
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1570"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1570"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
                }       
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remanente ejercicio siguiente (saldo negativo)"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1368"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1368"
                    format TEXTBOX
				    width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1371"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1371"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1571"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1571"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1572"
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-valorCampo"
                    content "$cod1572"
                    format TEXTBOX
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "30px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
					width "120px" 
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
                }       
			}
		}
	}
	#FIN RECUADRO 21
	#INICIO RECUADRO 22
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "860px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 22: BASE IMPONIBLE RÉGIMEN DE TRANSPARENCIA TRIBUTARIA (ART. 14 LETRA D) N° 8 LIR)"
					format LABEL
					colSpan 4
					width "860px"
				}
			}
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content " "
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "PERCIBIDO O PAGADO"
                    format LABEL
					width "260px"
					colSpan 3
                }
            }			
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingresos del giro percibidos"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1600"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1600"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            } 

row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingresos del giro devengados en ejercicios anteriores y percibidos en el ejercicio actual"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1819"
                    format LABEL
					width "30px"
					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1819"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Rentas de fuente extranjera percibidas"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1601"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1601"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Intereses y reajustes percibidos por préstamos y otros"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1602"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1602"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Mayor valor percibido por rescate o enajenación de inversiones o bienes no depreciables"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1603"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1603"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }			
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Dividendos o retiros percibidos en el ejercicio, por participaciones en otras empresas"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1604"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1604"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Incremento por IDPC"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1605"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1605"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingresos percibidos o devengados por operaciones con empresas relacionadas del art. 14 letra A) LIR"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1606"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1606"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otros ingresos percibidos o devengados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1607"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1607"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingreso diferido imputado en el ejercicio, debidamente incrementado y reajustado, cuando corresponda"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1608"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1608"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por activos fijos adquiridos en el ejercicio (art. 33 bis LIR)"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1609"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1609"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Total de ingresos Anuales"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1610"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1610"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gasto por saldo inicial de existencias o insumos del negocio en cambio de régimen, pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1611"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1611"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gasto por saldo inicial de activos fijos depreciables en cambio de régimen, pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1612"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1612"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gasto por pérdida tributaria en cambio de régimen"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1613"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1613"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Existencias, insumos y servicios del negocio, pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1614"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1614"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }

row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Existencias, insumos y servicios del negocio adeudados en ejercicios anteriores y pagados en el ejercicio actual"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1820"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1820"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos de rentas de fuente extranjera, pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1615"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1615"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remuneraciones pagadas"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1616"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1616"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Honorarios pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1617"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1617"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Adquisición de bienes del activo fijo, pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1618"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1618"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Arriendos pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1620"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1620"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos por exigencias medio ambientales, pagados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1621"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1621"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Intereses y reajustes pagados por préstamos y otros"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1622"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1622"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdida en rescate o enajenación de inversiones o bienes no depreciables"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1624"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1624"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otros gastos deducibles de los ingresos"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1625"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1625"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos o egresos pagados o adeudados por operaciones con empresas relacionadas del art. 14 letra A) LIR"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1626"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1626"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdidas tributarias de ejercicios anteriores"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1627"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1627"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Créditos incobrables castigados en el ejercicio (reconocidos sobre ingresos devengados)"
                    format LABEL
                    width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1628"
                    format LABEL
                    width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1628"
                    format TEXTBOX
                    width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                    width "30px"
                }
            }
            row {
                cell {
                    style "fw-2019-descripcionCampo"
                    content "Gastos aceptados por donaciones"
                    format LABEL
                    width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1909"
                    format LABEL
                    width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1909"
                    format TEXTBOX
                    width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
                    width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Total de egresos Anuales"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1629"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1629"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
					width "30px"
                }
			}
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "Base imponible a asignar a propietarios que son contribuyentes de impuestos finales, o pérdida tributaria del ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1630"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1630"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
					width "30px"
                }
			}
		}
	}
	#FIN RECUADRO 22

	#INICIO RECUADRO 23
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "860px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 23: CPTS RÉGIMEN DE TRANSPARENCIA TRIBUTARIA (ART. 14 LETRA D) N° 8 LIR)"
					format LABEL
					colSpan 4
					width "860px"
				}
			}			
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "CPT o CPTS positivo inicial"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1580"
                    format LABEL
					width "30px"					
                }cell {
                    style "fw-valorCampo"
                    content "$cod1580"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "CPT o CPTS negativo inicial"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1582"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1582"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Capital aportado empresas que inician actividades en el año comercial que corresponda a esta declaración"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1573"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1573"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Aumentos (efectivos) de capital del ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1574"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1574"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }			
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Disminuciones (efectivas) de capital del ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1575"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1575"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Base imponible del ejercicio, asignable a los propietarios"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1712"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1712"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdida tributaria del ejercicio al 31 de diciembre"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1713"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1713"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pérdidas tributarias de ejercicios anteriores"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1714"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1714"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Remesas, retiros o dividendos repartidos en el ejercicio"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1576"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1576"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Ingreso diferido imputado en el ejercicio, debidamente incrementado y reajustado, cuando corresponda"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1715"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1715"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Partidas de gastos no aceptados"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1577"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1577"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por activos fijos adquiridos en el ejercicio (art. 33 bis LIR)"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1716"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1716"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Crédito por IDPC, por participaciones en otras empresas que incrementaron la BI del ejercicio."
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1578"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1578"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otras partidas a agregar"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1584"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1584"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL
					width "30px"
                }
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Otras partidas a deducir"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1585"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1585"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL
					width "30px"
                }
            }			  
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "CPTS positivo final"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1581"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1581"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
					width "30px"
                }
			}
			row {
				cell {
                    style "fw-2019-tituloGrupoIzq"
                    content "CPTS negativo final"
                    format LABEL
					width "600px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1583"
                    format LABEL
					width "30px"
                }cell {
                    style "fw-valorCampo"
                    content "$cod1583"
                    format TEXTBOX
					width "200px"
                }cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL
					width "30px"
                }
			}
		}
	}
	#FIN RECUADRO 23
  	#INICIO RECUADRO 24
	section {
        style "fw-seccionFormulario"
         #tabla 1
         table{
            style "fw-2019-tablaFormulario"
            width "905px"
            #linea 1
			row {
				cell {
					style "fw-2019-tituloGrupo"
					content "RECUADRO N° 24: PAGO PRÉSTAMOS TASA 0% PERCIBIDOS EN EL AÑO COMERCIAL 2020 Y/O 2021 (PRÉSTAMOS SOLIDARIOS DEL ESTADO)"
					format LABEL
					colSpan 6
				}
			}
             row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "5% de las rentas que forman parte de la declaración anual de impuestos a la renta según art. 65 LIR (calculado sobre el código 170)"
                    format LABEL                 
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1784"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1784"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL
                    colSpan 3   					
                }
            } 
			row {
                cell {
                    style "fw-2019-tituloGrupo"
                    content "DETERMINACIÓN CUOTA ANUAL"
                    format LABEL
                }cell {
                    style "fw-2019-tituloGrupo"
                    content "Préstamo AC 2020 (Leyes N° 21.242 y N° 21.252)"
                    format LABEL
                    colSpan 2
                }cell {
                    style "fw-2019-tituloGrupo"
                    content "Préstamo AC 2021 (Ley N° 21.323)"
                    format LABEL   
					colSpan 2					
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL                 
                } 
            }
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Cuota anual (30% del monto del préstamo tasa 0%), según art. 6 (art. primero) Ley N° 21.242 y/o art. 7 (art. primero) Ley N° 21.252 o art. 11 inc. 1° Ley N° 21.323"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1785"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1785"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1801"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1801"
                    format LABEL
                }cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
            } 
			row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo pendiente cuota año anterior"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1798"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1798"
                    format LABEL
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1799"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1799"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
            row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Monto a pagar de la(s) cuota(s)"
                    format LABEL                    
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1786"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1786"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "1802"
                    format LABEL
                }cell {
                    style "fw-valorCampo"
                    content "$cod1802"
                    format TEXTBOX
                }cell {
                    style "fw-2019-codigoCampo"
                    content "+"
                    format LABEL					
                }
            }
            row{
                cell{
                    style "fw-2019-tituloGrupoIzq"
					content "ANTICIPOS"
					format LABEL
					colSpan 6
                }
            }
            row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Pago anticipado por reintegro del préstamo tasa 0% (F-50, F-10 o códigos 1797 o 1842 del F-22 AT 2023), según el art. 6 (art. primero) Ley N° 21.242 y/o art. 7 (art. primero) Ley N° 21.252 o art. 11 inc. 3° Ley N° 21.323"
                    format LABEL  
                    colSpan 3               
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1787"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1787"
                    format LABEL
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            } 
            row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Monto a pagar de la(s) cuota(s) después de anticipos"
                    format LABEL  
                    colSpan 3               
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1788"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1788"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            } 
            row{
                cell{
                    style "fw-2019-tituloGrupoIzq"
					content "RETENCIONES ADICIONALES Y PPMA"
					format LABEL
					colSpan 6
                }
            }
            row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Retención adicional sobre rentas del art. 42 N° 1 LIR con tasa del 3%, por reintegro del préstamo tasa 0%, según  art. 9 letra a) (art. primero) Ley N° 21.252 (retención a trabajadores dependientes) o art. 11 letra a) Ley N° 21.323"
                    format LABEL  
                    colSpan 3               
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1789"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1789"
                    format LABEL
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            } 
            row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Retención adicional sobre rentas del art. 42 N° 2 LIR con tasa del 3%, por reintegro del préstamo tasa 0%, según art. 7 (art. primero) Ley N° 21.242 y art. 9 letra b) (art. primero) Ley N° 21.252 (retención a trabajadores independientes) o art. 11 letra b) Ley N° 21.323"
                    format LABEL  
                    colSpan 3               
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1790"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1790"
                    format LABEL
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            } 
            row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "PPMA Primera Categoría art. 84 letra a) y 14 letra D) N° 3 letra (k) y N° 8 letra (a) numeral (viii) LIR, con tasa 3%, por reintegro de préstamo tasa 0%, según art. 9 letra c) (art. primero) Ley N° 21.252 (EI)  o art. 11 letra c) Ley N° 21.323"
                    format LABEL  
                    colSpan 3               
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1791"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1791"
                    format LABEL
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            } 
            row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "PPMA Segunda Categoría art. 84 letra b) LIR, con tasa 3%, por reintegro de préstamo  tasa 0%, según art. 7 (art. primero) Ley N° 21.242 y art. 9 letra b) (art. primero) Ley N° 21.252 (trabajadores independientes)  o art. 11 letra b) Ley N° 21.323"
                    format LABEL  
                    colSpan 3               
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1792"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1792"
                    format LABEL
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "-"
                    format LABEL					
                }
            } 
            row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Total retenciones adicionales y PPMA"
                    format LABEL  
                    colSpan 3               
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1793"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1793"
                    format LABEL
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }
            row{
                cell{
                    style "fw-2019-tituloGrupoIzq"
					content "RELIQUIDACIÓN"
					format LABEL
					colSpan 6
                }
            }
            row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Monto a pagar de la(s) cuota(s) después de retenciones adicionales y PPMA"
                    format LABEL  
                    colSpan 3               
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1794"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1794"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "="
                    format LABEL					
                }
            }
            row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Saldo a devolver por retenciones adicionales y PPMA en exceso"
                    format LABEL  
                    colSpan 3               
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1795"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1795"
                    format LABEL
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
            }
            row{
                cell{
                    style "fw-2019-tituloGrupoIzq"
					content " "
					format LABEL
					colSpan 6
                }
            }
            row {
				cell {
                    style "fw-2019-descripcionCampo"
                    content "Monto del código 1795 destinado voluntariamente a pagar el saldo pendiente de los préstamos tasa 0% o futuras cuotas de dichos préstamos"
                    format LABEL                
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1797"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1797"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content "1842"
                    format LABEL
                }
                cell {
                    style "fw-valorCampo"
                    content "$cod1842"
                    format TEXTBOX
                }
                cell {
                    style "fw-2019-codigoCampo"
                    content " "
                    format LABEL					
                }
            }
		}
	}
	#FIN RECUADRO 24

		#Tabla final del F22 : #FILAS PARA RUT REPRESENTANTE Y CONTADOR
		section {
			style "fw-seccionFormulario"
			table{
				style "fw-2019-tablaFormulario"
				width "450px"



				
				row {
					style "fw-filaFormulario"
					cell {
						style "fw-2019-codigoCampo"
						content " "
						format LABEL
						colSpan 5
					}
				}
				row {
					style "fw-filaFormulario"
					cell {
						style "fw-2019-descripcionCampo"
						format LABEL
						content "$rutContador.glosa"
						colSpan 2
					}
					cell {
						style "fw-2019-descripcionCampo"
						format LABEL
						content "$rutRepresentante.glosa"
						colSpan 3
					}

				}      
				row {
					style "fw-filaFormulario"
					cell {
						style "fw-2019-codigoCampo"
						format LABEL
						content "$rutContador.codigo"
					}cell {
						style "fw-valorCampo"
						format TEXTBOX
						content "$rutContador"
						#colSpan 4
					}
					cell {
						style "fw-2019-codigoCampo"
						format LABEL
						content "$rutRepresentante.codigo"
					}
					cell rutRepresentante {
						style "fw-valorCampo"
						format TEXTBOX
						width "100px"
						content "$rutRepresentante"
						#colSpan 1
					}
					
					# JSA: 2020.04.23 - LISTA REPRESENTANTES LEGALES #
					cell lstRepLegal {
						style "fw-valorCampo"
						format LISTBOX {
							"" : "Seleccionar"
						}
						width "305px"
						content "$lstRepLegal"
						#colSpan 4
					}
				}
				#FIN FILAS PARA RUT REPRESENTANTE Y CONTADOR
        }#table
    }# fin section
}#fin layoutFV
