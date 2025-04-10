####28-01-2025#f22_DSL_COMPLETO
# VERSION  "0.0.1"
formulario f22_DSL_COMPLETO_2025
{
    # Tipos de dato: string, entero, fecha_dia, fecha_mes, boolean, decimal
    
    glosa "Impuestos Anuales a la Renta"
    data {
        list nombresParametros( "P42|P08|P01|P344|P82|P03|P48|P64|P60|P61|P63|P59|P37|P11|P12|P16|P31|P24|P25|P62|P28|P04|P22|P474|P27|P13|P56|P57|P58|P30|P175|P176|P177|P178|P179|P180|P181|P182|P183|P358|P456|P80|P85|P87|P84|P641|P647|P654|P651|P656|P583|P704|P390|P34|P103|P02|P722|P715|P720|P721|P92|P725|P648|P728|P729|P343|P568|P481|P732|P655|P311|P312|P738|P736|P737" )
        #Serán convertidos a Moneda Extranjera cuando sea usada en formulario
        list parametrosMonto( "P720|P92|P10|P18|P35|P70|P42|P01|P344|P82|P03|P37|P12|P48|P31|P04|P27|P358|P80|P87|P641|P656|P390|P103|P722|P721|P568|P732|P481|P343|P311|P312|P738|P736")
        list vectoresMonto( "1357|17")

        #lista de códigos que no deben pasarse a decimal
        list codigosNoDecimal( "798|1067|1071|1076|1080|1084|1128")
        map bancos ( ": |CHILE-EDWARDS:CHILE-EDWARDS|BCI-TBANC:BCI-TBANC|DESARROLLO:DESARROLLO|FALABELLA:FALABELLA|INTERNACIONAL:INTERNACIONAL|SANTANDER:SANTANDER|SECURITY:SECURITY|BANCOESTADO:BANCOESTADO|ITAU:ITAU|RIPLEY:RIPLEY|BBVA:BBVA|CITIBANK:CITIBANK|CORPBANCA:CORPBANCA|HSBC:  HSBC|BICE:BICE|SCOTIABANK:SCOTIABANK|TOKYO:TOKYO|CHASE:CHASE|JP MORGAN:JP MORGAN|BANCO CONSORCIO:BANCO CONSORCIO|BANCO COOPEUCH:BANCO COOPEUCH|PREPAGO LOS HEROES:PREPAGO LOS HEROES|TENPO PREPAGO:TENPO PREPAGO") 
        map tiposCuenta ( ":SIN CUENTA|C:CUENTA CORRIENTE|V:CUENTA VISTA|A:CUENTA AHORRO|R:CUENTA RUT") 

        #Lista de codigos a bloquear en Rectificatoria
        list bloqueadosRectificatoria("1797|1842|1784")
    }
    
    # Sección identificacion
    seccion datosIdentificacion {

        campo categoriaContribuyente { 
            glosa "Categoria Contribuyente" 
            tipo entero
            largo 3 
        }
        
        campo aCS14 { 
            glosa "bandera aCS14" 
            tipo entero
            largo 3 
        }
        
        campo aM14A { 
            glosa "bandera aM14A" 
            tipo entero
            largo 3 
        }
        campo aM14G { 
            glosa "bandera aM14G" 
            tipo entero
            largo 3 
        }
        campo a14TT { 
            glosa "bandera a14TT" 
            tipo entero
            largo 3 
        }
        campo a14D1 { 
            glosa "bandera a14D1" 
            tipo entero
            largo 3 
        }
        campo aCSMP { 
            glosa "bandera aCSMP " 
            tipo entero
            largo 3 
        }
        campo aBHEP { 
            glosa "bandera BHEP" 
            tipo entero
            largo 3 
        }

        campo aPSCD { 
            glosa "bandera PSCD" 
            tipo entero
            largo 3 
        }

        campo aPSEI { 
            glosa "bandera PSEI" 
            tipo entero
            largo 3 
        }
        
        campo aPTAO { 
            glosa "bandera PTAO" 
            tipo entero
            largo 3 
        }
        campo aPART { 
            glosa "bandera PART" 
            tipo entero
            largo 3 
        }
        
        campo aS14B {
                glosa "bandera aS14B " 
                tipo entero
                largo 3 
        }
        
        campo aCRRP {
            glosa "bandera aCRRP " 
            tipo entero
            largo 3 
        }

        campo aPCD2 {
            glosa "bandera aPCD2 "
            tipo entero
            largo 3
        }

        campo aPEI2 {
            glosa "bandera aPEI2 "
            tipo entero
            largo 3
        }

        campo aVx011269{ 
            glosa "bandera vector aVx011269" 
            tipo entero
            largo 15
        }
        
        campo aVx011119{ 
            glosa "bandera vector aVx011119" 
            tipo entero
            largo 15
        }

        campo aVx014442{ 
            glosa "bandera vector aVx014442" 
            tipo entero
            largo 15
        }
        
        campo aVx012605 { 
            glosa "bandera vector aVx012605" 
            tipo entero
            largo 15
        }
        
        campo aVx012041{ 
            glosa "bandera vector aVx012041" 
            tipo entero
            largo 15
        }
        
        campo aVx013397{ 
            glosa "valor vector aVx013397" 
            tipo entero
            largo 15
        }
        
        campo aVx012793{ 
            glosa "valor vector aVx012793" 
            tipo entero
            largo 15
        }
        
        campo aVx014380{ 
            glosa "valor vector Vx014380" 
            tipo entero
            largo 15
        }
        
        campo aVx014460{ 
            glosa "valor vector Vx014460" 
            tipo entero
            largo 15
        }
        campo aVx013754{ 
            glosa "valor vector Vx013754" 
            tipo entero
            largo 15
        }
        
        campo aVx010183{
            glosa "valor vector Vx010183"
            tipo entero
            largo 15
        }
        
        campo aVx010011{
            glosa "valor vector Vx010011"
            tipo entero
            largo 15
        }
        
        campo aVx010020{
            glosa "valor vector Vx010020"
            tipo entero
            largo 15
        }
        
        campo aVx010017{
            glosa "valor vector Vx010017"
            tipo entero
            largo 15
        }
        
        campo aVx010659{
            glosa "valor vector Vx010659"
            tipo entero
            largo 15
        }

        campo aVx014454{
            glosa "valor vector Vx014454"
            tipo entero
            largo 15
        }

    
        campo aVx011357{
            glosa "valor vector Vx011357"
            tipo entero
            largo 15
        }

        campo aVx010253{
            glosa "valor vector Vx010253"
            tipo entero
            largo 15
        }
        
        campo aVx014455{
            glosa "valor vector Vx014455"
            tipo entero
            largo 15
        }
        
        campo aVx014456{
            glosa "valor vector Vx014456"
            tipo entero
            largo 15
        }
        
        campo aVx011647{
            glosa "valor vector Vx011647"
            tipo entero
            largo 15
        }
        
        campo aVx010179{
            glosa "valor vector Vx010179"
            tipo entero
            largo 15
        }
        
        campo aVx010861{
            glosa "valor vector Vx010861"
            tipo entero
            largo 15
        }        
        
        campo aVx010084{
            glosa "valor vector Vx010084"
            tipo entero
            largo 15
        }        
        
        campo aVx014448{
            glosa "valor vector Vx014448"
            tipo entero
            largo 15
        }        
    
        campo aVx010655{
            glosa "valor vector Vx010655"
            tipo entero
            largo 15
        }  
    
        campo aVx014511{
            glosa "valor vector Vx014511"
            tipo entero
            largo 15
        }   

        campo aVx014650{
            glosa "valor vector Vx014650"
            tipo entero
            largo 15
        }  
    
        campo aVx014525{
            glosa "valor vector Vx014525"
            tipo entero
            largo 15
        }   

        campo aVx014526{
            glosa "valor vector Vx014526"
            tipo entero
            largo 15
        }   

        campo aVx014527{
            glosa "valor vector Vx014527"
            tipo entero
            largo 15
        } 

        campo aVx014528{
            glosa "valor vector Vx014528"
            tipo entero
            largo 15
        }
        campo aVx010032{ 
            glosa "bandera vector aVx010032"
            tipo entero
            largo 15
        }

        campo aVx010083{ 
            glosa "bandera vector aVx010083"
            tipo entero
            largo 15
        }

        campo aVx010124{ 
            glosa "bandera vector aVx010124"
            tipo entero
            largo 15
        }

        campo aVx010356{ 
            glosa "bandera vector aVx010356"
            tipo entero
            largo 15
        }

        campo aVx010591{ 
            glosa "bandera vector aVx010591"
            tipo entero
            largo 15
        }

        campo aVx010592{ 
            glosa "bandera vector aVx010592"
            tipo entero
            largo 15
        }

        campo aVx011136{ 
            glosa "bandera vector aVx011136"
            tipo entero
            largo 15
        }

        campo aVx011250{ 
            glosa "bandera vector aVx011250"
            tipo entero
            largo 15
        }

        campo aVx011264{ 
            glosa "bandera vector aVx011264"
            tipo entero
            largo 15
        }

        campo aVx013630{ 
            glosa "bandera vector aVx013630"
            tipo entero
            largo 15
        }

        campo aVx013631{ 
            glosa "bandera vector aVx013631"
            tipo entero
            largo 15
        }

        campo aVx013632{ 
            glosa "bandera vector aVx013632"
            tipo entero
            largo 15
        }

        campo aVx014211{ 
            glosa "bandera vector aVx014211"
            tipo entero
            largo 15
        }

        campo aVx014212{ 
            glosa "bandera vector aVx014212"
            tipo entero
            largo 15
        }

        campo aVx014213{ 
            glosa "bandera vector aVx014213"
            tipo entero
            largo 15
        }

        campo aVx014214{ 
            glosa "bandera vector aVx014214"
            tipo entero
            largo 15
        }

        campo aVx014215{ 
            glosa "bandera vector aVx014215"
            tipo entero
            largo 15
        }

        campo aVx014216{ 
            glosa "bandera vector aVx014216"
            tipo entero
            largo 15
        }

        campo aVx014217{ 
            glosa "bandera vector aVx014217"
            tipo entero
            largo 15
        }

        campo aVx014218{ 
            glosa "bandera vector aVx014218"
            tipo entero
            largo 15
        }

        campo aVx014219{ 
            glosa "bandera vector aVx014219"
            tipo entero
            largo 15
        }

        campo aVx014220{ 
            glosa "bandera vector aVx014220"
            tipo entero
            largo 15
        }

        campo aVx014221{ 
            glosa "bandera vector aVx014221"
            tipo entero
            largo 15
        }

        campo aVx014222{ 
            glosa "bandera vector aVx014222"
            tipo entero
            largo 15
        }

        campo aVx014223{ 
            glosa "bandera vector aVx014223"
            tipo entero
            largo 15
        }


        campo aVx014224{ 
            glosa "bandera vector aVx014224"
            tipo entero
            largo 15
        }

        campo aVx014225{ 
            glosa "bandera vector aVx014225"
            tipo entero
            largo 15
        }

        campo aVx014226{ 
            glosa "bandera vector aVx014226"
            tipo entero
            largo 15
        }

        campo aVx014227{ 
            glosa "bandera vector aVx014227"
            tipo entero
            largo 15
        }

        campo aVx014228{ 
            glosa "bandera vector aVx014228"
            tipo entero
            largo 15
        }

        campo aVx014229{ 
            glosa "bandera vector aVx014229"
            tipo entero
            largo 15
        }

        campo aVx014230{ 
            glosa "bandera vector aVx014230"
            tipo entero
            largo 15
        }

        campo aVx014231{ 
            glosa "bandera vector aVx014231"
            tipo entero
            largo 15
        }

        campo aVx014232{ 
            glosa "bandera vector aVx014232"
            tipo entero
            largo 15
        }

        campo aVx014233{ 
            glosa "bandera vector aVx014233"
            tipo entero
            largo 15
        }

        campo aVx014234{ 
            glosa "bandera vector aVx014234"
            tipo entero
            largo 15
        }

        campo aVx014235{ 
            glosa "bandera vector aVx014235"
            tipo entero
            largo 15
        }

        campo aVx014236{ 
            glosa "bandera vector aVx014236"
            tipo entero
            largo 15
        }

        campo aVx014237{ 
            glosa "bandera vector aVx014237"
            tipo entero
            largo 15
        }

        campo aVx014238{ 
            glosa "bandera vector aVx014238"
            tipo entero
            largo 15
        }

        campo aVx014239{ 
            glosa "bandera vector aVx014239"
            tipo entero
            largo 15
        }

        campo aVx014299{ 
            glosa "bandera vector aVx014299"
            tipo entero
            largo 15
        }

        campo aVx014300{ 
            glosa "bandera vector aVx014300"
            tipo entero
            largo 15
        }

        campo aVx014301{ 
            glosa "bandera vector aVx014301"
            tipo entero
            largo 15
        }

        campo aVx014302{ 
            glosa "bandera vector aVx014302"
            tipo entero
            largo 15
        }

        campo aVx014303{ 
            glosa "bandera vector aVx014303"
            tipo entero
            largo 15
        }

        campo aVx014304{ 
            glosa "bandera vector aVx014304"
            tipo entero
            largo 15
        }

        campo aVx014305{ 
            glosa "bandera vector aVx014305"
            tipo entero
            largo 15
        }

        campo aVx014306{ 
            glosa "bandera vector aVx014306"
            tipo entero
            largo 15
        }

        campo aVx014307{ 
            glosa "bandera vector aVx014307"
            tipo entero
            largo 15
        }

        campo aVx014308{ 
            glosa "bandera vector aVx014308"
            tipo entero
            largo 15
        }

        campo aVx014309{ 
            glosa "bandera vector aVx014309"
            tipo entero
            largo 15
        }

        campo aVx014320{ 
            glosa "bandera vector aVx014320"
            tipo entero
            largo 15
        }

        campo aVx014321{ 
            glosa "bandera vector aVx014321"
            tipo entero
            largo 15
        }

        campo aVx014326{ 
            glosa "bandera vector aVx014326"
            tipo entero
            largo 15
        }

        campo aVx014327{ 
            glosa "bandera vector aVx014327"
            tipo entero
            largo 15
        }

        campo aVx014328{ 
            glosa "bandera vector aVx014328"
            tipo entero
            largo 15
        }

        campo aVx014329{ 
            glosa "bandera vector aVx014329"
            tipo entero
            largo 15
        }

        campo aVx014330{ 
            glosa "bandera vector aVx014330"
            tipo entero
            largo 15
        }

        campo aVx014339{ 
            glosa "bandera vector aVx014339"
            tipo entero
            largo 15
        }

        campo aVx014361{ 
            glosa "bandera vector aVx014361"
            tipo entero
            largo 15
        }

        campo aVx014362{ 
            glosa "bandera vector aVx014362"
            tipo entero
            largo 15
        }

        campo aVx014363{ 
            glosa "bandera vector aVx014363"
            tipo entero
            largo 15
        }

        campo aVx014364{ 
            glosa "bandera vector aVx014364"
            tipo entero
            largo 15
        }

        campo aVx014365{ 
            glosa "bandera vector aVx014365"
            tipo entero
            largo 15
        }

        campo aVx014366{ 
            glosa "bandera vector aVx014366"
            tipo entero
            largo 15
        }

        campo aVx014369{ 
            glosa "bandera vector aVx014369"
            tipo entero
            largo 15
        }

        campo aVx014370{ 
            glosa "bandera vector aVx014370"
            tipo entero
            largo 15
        }

        campo aVx014371{ 
            glosa "bandera vector aVx014371"
            tipo entero
            largo 15
        }

        campo aVx014372{ 
            glosa "bandera vector aVx014372"
            tipo entero
            largo 15
        }

        campo aVx014373{ 
            glosa "bandera vector aVx014373"
            tipo entero
            largo 15
        }

        campo aVx014374{ 
            glosa "bandera vector aVx014374"
            tipo entero
            largo 15
        }

        campo aVx014375{ 
            glosa "bandera vector aVx014375"
            tipo entero
            largo 15
        }

        campo aVx014376{ 
            glosa "bandera vector aVx014376"
            tipo entero
            largo 15
        }

        campo aVx014377{ 
            glosa "bandera vector aVx014377"
            tipo entero
            largo 15
        }

        campo aVx014411{ 
            glosa "bandera vector aVx014411"
            tipo entero
            largo 15
        }

        campo aVx014475{ 
            glosa "bandera vector aVx014475"
            tipo entero
            largo 15
        }

        campo aVx014512{ 
            glosa "bandera vector aVx014512"
            tipo entero
            largo 15
        }

        campo aVx014513{ 
            glosa "bandera vector aVx014513"
            tipo entero
            largo 15
        }

        campo aVx014514{ 
            glosa "bandera vector aVx014514"
            tipo entero
            largo 15
        }

        campo aVx014515 { 
            glosa "bandera vector aVx014515 "
            tipo entero
            largo 15
        }

        campo aVx014516{ 
            glosa "bandera vector aVx014516"
            tipo entero
            largo 15
        }

        campo aVx014517{ 
            glosa "bandera vector aVx014517"
            tipo entero
            largo 15
        }

        campo aVx014518{ 
            glosa "bandera vector aVx014518"
            tipo entero
            largo 15
        }

        campo aVx014519{ 
            glosa "bandera vector aVx014519"
            tipo entero
            largo 15
        }

        campo aVx014520{ 
            glosa "bandera vector aVx014520"
            tipo entero
            largo 15
        }

        campo aVx014521{ 
            glosa "bandera vector aVx014521"
            tipo entero
            largo 15
        }

        campo aVx014522{ 
            glosa "bandera vector aVx014522"
            tipo entero
            largo 15
        }

        campo aVx014523{ 
            glosa "bandera vector aVx014523"
            tipo entero
            largo 15
        }

        campo aVx014524{ 
            glosa "bandera vector aVx014524"
            tipo entero
            largo 15
        }

        campo aVx014534{ 
            glosa "bandera vector aVx014534"
            tipo entero
            largo 15
        }

        campo aVx014536{ 
            glosa "bandera vector aVx014536"
            tipo entero
            largo 15
        }

        campo aVx014541{ 
            glosa "bandera vector aVx014541"
            tipo entero
            largo 15
        }

        campo aVx014542{ 
            glosa "bandera vector aVx014542"
            tipo entero
            largo 15
        }

        campo aVx014649{ 
            glosa "bandera vector aVx014649"
            tipo entero
            largo 15
        }

        campo aVx014651{ 
            glosa "bandera vector aVx014651"
            tipo entero
            largo 15
        }

    
        campo rut { 
            glosa "ROL UNICO TRIBUTARIO" 
            codigo "03" 
            tipo string
            largo 10 
        } 
        campo apellidoPaterno { 
            glosa "Primer Apellido o Razón Social" 
            codigo "01" 
            tipo string
            largo 50 
        }
        campo apellidoMaterno { 
            glosa "Segundo Apellido" 
            codigo "02" 
            tipo string
            largo 50 
        }
        campo nombres { 
            glosa "Nombres" 
            codigo "05" 
            tipo string
            largo 50 
        }
        campo tipoContribuyente { 
            glosa "Tipo de Contribuyente" 
            codigo "" 
            tipo entero
            largo 3 
        }
        campo subTipoContribuyente { 
            glosa "SubTipo de Contribuyente" 
            codigo "" 
            tipo entero
            largo 4 
        }
        campo calle { 
            glosa "Calle Nº, Of. Depto" 
            codigo "06" 
            tipo string
            largo 80
            #formula{$auxCalle}
        }

        # nombre de la comuna
        campo comuna { 
            glosa "Comuna" 
            codigo "08" 
            tipo string
            largo 40 
        } 
        # id de la comuna
        campo codigoComuna { 
            glosa "CODIGO COMUNA" 
            codigo "8026" 
            tipo string
            largo 40 
        } 
        campo region { 
            glosa "Región" 
            codigo "53" 
            tipo string
            largo 40 
        } 
        campo telefono { 
            glosa "Teléfono" 
            codigo "09" 
            tipo string
            largo 40 
        }
        campo fax { 
            glosa "Fax" 
            codigo "48" 
            tipo string
            largo 40 
        }
        campo actividadProfesion { 
            glosa "Actividad, Profesión o Giro del Negocio" 
            codigo "13" 
            tipo string
            largo 70 
            #formula{$codActividad}
            #formula{ GET_LIST($codActividad) }

        }
        campo codActividad { 
            glosa "Cód. Actividad Económica" 
            codigo "14" 
            nombreMapa "codigosActividad"
            tipo string
            largo 10 
        }
        campo domPostal { 
            glosa "Domicilio Postal" 
            codigo "44" 
            tipo string
            largo 20 
        }
        campo comPostal { 
            glosa "Comuna Postal" 
            codigo "726" 
            tipo string
            largo 40 
        }
        campo folio { 
            glosa "Folio" 
            codigo "7" 
            tipo string
            largo 15 
        }
        campo cod9929 { 
            glosa "9929" 
            codigo "9929" 
            tipo string
            largo 15 
        }
    }

    seccion camposAdministracion { 
        glosa "Datos constantes de administracion" 
        multivalor FALSE
        
        campo cod9915 { 
            glosa "Codigo Resolucion papel" 
            codigo "9915" 
            tipo string
            largo 40
        }     
        campo cod9991 { 
            glosa "Codigo 91 de la Declaracion Fuera de Plazo en la Unidad. Codigo 91 efectivamente generado" 
            codigo "9991" 
            tipo entero
            largo 15 
        }
        campo cod9021 { 
            glosa "Identificador de Calculo Previsional" 
            codigo "9021" 
            tipo entero
            largo 15 
        }
        campo cod9022 { 
            glosa "Cálculo Previsional seleccionado" 
            codigo "9022" 
            tipo entero
            largo 15 
        }
        campo fechaPresentacion { 
            glosa "FECHA PRESENTACION" 
            codigo "315" 
            tipo fecha_dia
        } 
        campo comuna { 
            glosa "Comuna" 
            codigo "8" 
            tipo string
            largo 40 
        } 
        campo folioRectificatoriaPrimitiva { 
            glosa "Folio Rectificatoria en la primitiva" 
            codigo "9901" 
            tipo string
            largo 40 
        } 
        campo folioFormularioRectificado { 
            glosa "Folio Formulario Rectificado" 
            codigo "9902" 
            tipo string
            largo 40 
        } 
        campo casaSW { 
            glosa "Código casa de software" 
            codigo "8855" 
            tipo string
            largo 40 
        } 
        campo versionCasaSW { 
            glosa "Versión Casa de Software" 
            codigo "8859" 
            tipo string
            largo 40 
        } 
        campo codMonedaDecla { 
            glosa "Código Moneda Declaración" 
            codigo "8811" 
            tipo string
            largo 40 
        }
        campo tipoCambio { 
            glosa "Tipo de Cambio" 
            codigo "8866" 
            tipo entero
            largo 15 
        }
        campo valorCambio { 
            glosa "Valor Cambio" 
            codigo "8833" 
            tipo string
            largo 40 
        } 
        campo codMonedaPago { 
            glosa "Codigo Moneda de Pago" 
            codigo "8877" 
            tipo string
            largo 40 
        }
        campo rutRepresentanteTercerizado { 
            glosa "Rut Representante (Tercerizado)" 
            codigo "8809" 
            tipo string
            largo 40 
        } 
        #campo segmento {
            #glosa "Segmento Contribuyente" 
            #codigo "8812" 
            #tipo string
            #largo 40 
        #} 
        campo unidadAtencion {
            glosa "Unidad de Atención" 
            codigo "8720" 
            tipo string
            largo 40 
            nombreMapa "UnidadAtencion"
        } 
        campo fechaPresentacionPrimitiva {
            glosa "Fecha Persentacion Primitiva (Original)" 
            codigo "9906" 
            tipo fecha_dia
        } 
        campo calle {
            glosa "Calle" 
            codigo "06" 
            tipo string
            largo 40
            # 
        } 
        campo auxCalle { 
            glosa "Calle Nº, Of. Depto" 
            tipo string
            largo 80
            #formula {CONCATENAR($nombreCalle, "||", $numero, "||",$departamento, "||",$ciudad)}
        }
        campo telefono {
            glosa "Telefono" 
            codigo "09" 
            tipo string
            largo 40
        } 
        campo eMail {
            glosa "Correo Electrónico" 
            codigo "55" 
            tipo string
            largo 40
        } 
        campo nombreCalle {
            glosa "Nombre Calle" 
            codigo "8020" 
            tipo string
            largo 40
        } 
        campo numero {
            glosa "Numero" 
            codigo "8021" 
            tipo string
            largo 40
        } 
        campo departamento {
            glosa "Departamento" 
            tipo string
            largo 40
        } 
        campo ciudad {
            glosa "Ciudad" 
            codigo "" 
            tipo string
            largo 40
        } 
        campo villa {
            glosa "Villa" 
            codigo "8023" 
            tipo string
            largo 40
        } 
        campo poblacion {
            glosa "Poblacion" 
            codigo "8024" 
            tipo string
            largo 40
        } 
        campo areaTelefono {
            glosa "Area Telefono" 
            codigo "8025" 
            tipo string
            largo 40
        } 
        campo montoDevUTM {
            glosa "Monto Devolucion en UTM" 
            codigo "8030" 
            tipo string
            largo 40
        } 
        campo valorUTMPeriodo {
            glosa "valor UTM del periodo" 
            codigo "8031" 
            tipo string
            largo 40
        }
        campo montoInteres {
            glosa "Interés" 
            codigo "7016" 
            tipo string
            largo 40
        }
        campo montoCondonaInt {
            glosa "Monto Condonación Interés" 
            codigo "7036" 
            tipo string
            largo 40
        }
        campo porcCondonaInte {
            glosa "% Condonación Interés" 
            codigo "7026" 
            tipo string
            largo 40
        }
        campo montoMulta {
            glosa "Multa" 
            codigo "7046" 
            tipo string
            largo 40
        }
        campo porcCondonaMulta {
            glosa "% Condonación Multa" 
            codigo "7056" 
            tipo string
            largo 40
        }
        campo montoCondonaMulta {
            glosa "Monto Condonación Multa" 
            codigo "7066" 
            tipo string
            largo 40
        }
        campo ajusteTasaCondona {
            glosa "Ajuste de tasa de condonación" 
            codigo "7805" 
            tipo string
            largo 40
        }
        campo porcCondonaTGR {
            glosa "Porcentaje de condonación aplicado por TGR en los Giros" 
            codigo "60" 
            tipo string
            largo 40
        }
        campo periodoSolicitado { 
            glosa "PERIODO SOLICITADO" 
            codigo "15" 
            caracterizable TRUE
            tipo fecha_mes
        }
        campo instBancaria { 
            glosa "Nombre Institución bancaria :" 
            codigo "301" 
            caracterizable TRUE
            tipo string
            nombreMapa "bancos"
        }
        campo nombreBanco {
            glosa "Nombre Institución Bancaria" 
            caracterizable TRUE
            largo 50
            tipo string 
            formula { GET_VALUE("bancos", $instBancaria) }
        }
        campo numeroCuenta { 
            glosa "Número de Cuenta" 
            codigo "306" 
            caracterizable TRUE
            tipo string
            largo 15
        }
        campo tipoCuenta { 
            glosa ""  
            codigo "780" 
            caracterizable TRUE
            tipo string
            formula { GET_VALUE("tiposCuenta", $tiposDeCuenta) }
        }

        campo tiposDeCuenta { 
            glosa "Seleccione Tipo de Cuenta" 
            codigo "780"
            caracterizable TRUE
            nombreMapa "tiposCuenta"
            tipo string
        }

        campo nombreBanco {
            glosa "Nombre Institución Bancaria" 
            codigo "301" 
            caracterizable TRUE
            largo 50
            tipo string 
            formula { GET_VALUE("bancos", $instBancaria) }
        }
        campo cod8806 { 
            glosa "CALLE (DOMICILIO OTRAS FUENTES)" 
            codigo "8806" 
            tipo string
            largo 40 
        }
        campo cod8807 { 
            glosa "COMUNA DOMICILIO OTRAS FUENTES" 
            codigo "8807" 
            tipo string
            largo 40 
        }
        campo cod8808 { 
            glosa "COMUNA DOMICILIO RENTA (DIGITADA)" 
            codigo "8808" 
            tipo string
            largo 40 
        }
        campo cod8812 {
            glosa "% Condonación interés base"
            codigo "8812"
            tipo entero0
            largo 15
        }
        campo cod8813 {
            glosa "% Condonación interés spread"
            codigo "8813"
            tipo entero0
            largo 15
        }
        campo cod8822 { 
            glosa "Moneda Pago" 
            codigo "8822" 
            tipo string
            largo 40 
        }
        campo cod8824 { 
            glosa "Moneda de Devolucion" 
            codigo "8824" 
            tipo string
            largo 40 
        }
        campo cod8851 { 
            glosa "ORDEN DE TRABAJO (UCD)" 
            codigo "8851" 
            tipo string
            largo 40 
        }
        campo cod8852 { 
            glosa "FECHA Y CINTA DE ENVIO" 
            codigo "8852" 
            tipo string
            largo 40 
        }

        campo cod8854 { 
            glosa "FECHA DE MOVIMIENTO REAL(F01)" 
            codigo "8854" 
            tipo fecha_dia
        }
        campo cod8858 { 
            glosa "NUM TRANSACCION INTERNET - BANCO" 
            codigo "8858" 
            tipo string
            largo 40 
        }
        campo cod8878 { 
            glosa "Codigo  Swift" 
            codigo "8878" 
            tipo string
            largo 40 
        }
        campo cod8898 { 
            glosa "TIPO DE SEGMENTACION" 
            codigo "8898" 
            tipo string
            largo 40 
        }
        campo cod8911 { 
            glosa "Monto condonación interés base" 
            codigo "8911" 
            tipo entero0
            largo 15 
        }
        campo cod8912 { 
            glosa "Monto condonación spread" 
            codigo "8912" 
            tipo entero0
            largo 15 
        }
        campo cod9311 { 
            glosa "Monto interés base" 
            codigo "9311" 
            tipo entero0
            largo 15 
        }
        campo cod9312 { 
            glosa "Monto interés base spread" 
            codigo "9312" 
            tipo entero0
            largo 15 
        }
        campo cod9903 { 
            glosa "RUT PRIMITIVA ENGANCHE RECT INTERNET" 
            codigo "9903" 
            tipo string
            largo 40 
        }    
        campo cod9905 { 
            glosa "NUMERO RESOLUCION" 
            codigo "9905" 
            tipo string
            largo 40 
        }
        campo cod9907 { 
            glosa "FECHA RESOLUCION" 
            codigo "9907" 
            tipo fecha_dia
        }
        campo cod9908 { 
            glosa "CODIGO DE COMUNA DEL F01 ASOCIADO" 
            codigo "9908" 
            tipo entero
            largo 15 
        }
        campo cod9909 { 
            glosa "FECHA PRESENTACION FORMULARIO 2117" 
            codigo "9909" 
            tipo fecha_dia 
        }
        campo cod9920 { 
            glosa "IP F22 " 
            codigo "9920" 
            tipo string
            largo 40 
        }
        campo cod9921 { 
            glosa "CONFIRMACION EMAIL" 
            codigo "9921" 
            tipo string
            largo 40 
        }
        campo cod9925 { 
            glosa "CODIGO TRX DEL PAGO INTERNET" 
            codigo "9925" 
            tipo string
            largo 40 
        }
        campo cod9928 { 
            glosa "Autorizacion de Correo" 
            codigo "9928" 
            tipo string
            largo 40 
        }
        campo cod9930 { 
            glosa "Respaldo 301" 
            codigo "9930" 
            tipo string
            largo 40 
        }
        campo cod9931 { 
            glosa "Respaldo 780" 
            codigo "9931" 
            tipo string
            largo 40 
        }
        campo cod9932 { 
            glosa "Respaldo 9306" 
            codigo "9932" 
            tipo string
            largo 40 
        }
        campo cod9933 { 
            glosa "Identificador de Calculo Previsional" 
            codigo "9933" 
            tipo entero
            largo 15 
        }
        campo cod9934 { 
            glosa "Registro de layout f22" 
            codigo "9934" 
            tipo string
            largo 40 
        }
        campo cod8888 { 
            glosa "Codigo Administrativo 14 Cuater" 
            codigo "8888" 
            tipo entero
            largo 15 
        }   
        campo cod8887 { 
            glosa "Codigo 8887" 
            codigo "8887" 
            tipo entero
            largo 15 
        }   		
        campo cod8891 { 
            glosa "TIPO CONTRIBUYENTE" 
            codigo "8891" 
            tipo entero
            largo 15 
        }
        campo cod8892 { 
            glosa "SUBTIPO CONTRIBUYENTE" 
            codigo "8892" 
            tipo entero
            largo 15 
        }
        campo cod8898 { 
            glosa "TIPO DE SEGMENTACION" 
            codigo "8898" 
            tipo string
            largo 40 
        }
        campo cod9306 { 
            glosa "CODIGO BANCO PARA DEPOSITO" 
            codigo "9306" 
            tipo entero
            largo 15 
        }
        campo cod9901 { 
            glosa "ENGANCHE EN LA NEGATIVA" 
            codigo "9901" 
            tipo entero
            largo 15 
        }
        campo cod9902 { 
            glosa "ENGANCHE EN LA POSITIVA/RETROALIMENTADA" 
            codigo "9902" 
            tipo entero
            largo 15 
        }
        campo cod9903 { 
            glosa "RUT PRIMITIVA ENGANCHE RECT INTERNET" 
            codigo "9903" 
            tipo string
            largo 40 
        }
        campo cod9904 { 
            glosa "REMANENTE A DEVOLVER POR RESOLUCION" 
            codigo "9904" 
            tipo entero
            largo 15 
        }    
        campo cod9906 { 
            glosa "Respaldo 306" 
            codigo "9906" 
            tipo string
            largo 40 
        }
        campo cod9908 { 
            glosa "CODIGO DE COMUNA DEL F01 ASOCIADO" 
            codigo "9908" 
            tipo entero
            largo 15 
        }
        campo cod9909 { 
            glosa "FECHA PRESENTACION FORMULARIO 2117" 
            codigo "9909" 
            tipo fecha_dia
        }
        campo cod9919 { 
            glosa "CODIGOS MODIFICADOS (BORRADOR INET)" 
            codigo "9919" 
            tipo string
            largo 40 
        }
        campo cod9920 { 
            glosa "IP F22 " 
            codigo "9920" 
            tipo string
            largo 40 
        }
        campo cod9921 { 
            glosa "CONFIRMACION EMAIL" 
            codigo "9921" 
            tipo string
            largo 40 
        }
        campo cod9925 { 
            glosa "CODIGO TRX DEL PAGO INTERNET" 
            codigo "9925" 
            tipo string
            largo 40 
        }
        campo cod9928 { 
            glosa "Autorizacion de Correo" 
            codigo "9928" 
            tipo string
            largo 40 
        }
        campo cod9930 { 
            glosa "Respaldo 301" 
            codigo "9930" 
            tipo string
            largo 40 
        }
        campo cod9931 { 
            glosa "Respaldo 780" 
            codigo "9931" 
            tipo string
            largo 40 
        }
        campo cod9932 { 
            glosa "Respaldo 9306" 
            codigo "9932" 
            tipo string
            largo 40 
        }

        campo cod3001 { 
            glosa "Auxiliar 3001" 
            codigo "3001" 
            tipo entero
            largo 15 
        }
        campo cod3002 { 
            glosa "Auxiliar 3002" 
            codigo "3002" 
            tipo entero
            largo 15 
        }
        campo cod3003 { 
            glosa "Auxiliar  3003" 
            codigo "3003" 
            tipo entero
            largo 15 
        }
    }    
    seccion atributosAuxiliaresFormulario {
        glosa "Atributos Auxiliares del Formulario" 
        multivalor FALSE
        campo version {
            glosa "Version del set de validaciones implementado"
            codigo ""
            valorPorDefecto "0.0.1"
            tipo string
        }
        
        # Este campo se usa en la función ROUND_DECIMAL
        campo decimales {
            glosa "numero de decimales función ROUND"
            codigo ""
            largo 2
            valorPorDefecto "0"
            tipo entero
            formula {(EXISTE_DATO($codMonedaDecla)  AND $codMonedaDecla!="1")?2:0} 
        }
        
        campo subTitulo {
            glosa "SubTítulo"
            codigo ""
            tipo string
        }
        campo glosaMoneda {
            glosa "Glosa Moneda"
            codigo ""
            tipo string
        }
        campo isRectificatoria {
            glosa "Indica si es rectificatoria"
            codigo ""
            tipo boolean
        }

        campo isPrimitivaDentroPlazo {
            glosa "Indica si la declaración es primitiva dentro de plazo"
            codigo ""
            tipo boolean
        }

        campo rutContador { 
            glosa "Rut del Contador" 
            codigo "650" 
            tipo string
            caracterizable TRUE
            largo 15 
            tipoValor NOMONTO
        }
        campo nombreContador { 
            glosa "Nombre Contador" 
            codigo "10" 
            caracterizable TRUE
            tipo string
            largo 50 
        }
        campo rutRepresentante { 
            glosa "RUT del Representante" 
            codigo "903" 
            tipo string
            caracterizable TRUE
            largo 15 
            tipoValor NOMONTO
        }
        campo lstRepLegal { 
            glosa "Lista de Representantes" 
            codigo "903a" 
            tipo string
        nombreMapa "rutsRepresentantes"
        }
        campo codSIICertSoft { 
            glosa "Código SII de certificación de software para la confección de Form. 22 " 
            codigo "9999991" 
            caracterizable TRUE
            tipo entero
            largo 15 
        }
    }


    seccion montos {
        campo cod600 { 
            glosa "Crédito Retiros Impto 1ra Categoría" 
            codigo "600" 
            tipo entero0
            largo 15 
            caracterizable TRUE
        }
        
        campo cod847 { 
            glosa "Retiros Art. 14 y 14 Bis)" 
            codigo "847" 
            tipo entero0
            largo 15 
            caracterizable TRUE
        }

        campo cod104 {             
            glosa "Retiros o remesas (art.14 letras A y/o D N° 3 de la LIR)"
            codigo "104" 
            tipo entero0
            largo 15 
            caracterizable TRUE
        }
        campo cod601 { 
            glosa "Crédito Dividendos Impto 1ra Categoría" 
            codigo "601" 
            tipo entero0
            largo 15 
            caracterizable TRUE
        } 
        campo cod105 { 
            #glosa "Dividendos afectos al IGC o IA, según art.14 letras A) y/o D) N° 3 LIR" 
            glosa "Dividendos (art.14 letras A y/o D N° 3 de la LIR)"
            codigo "105" 
            tipo entero0
            largo 15 
            caracterizable TRUE
        } 
        
        campo cod106 { 
            glosa "Gastos rechazados pagados y otras partidas a que se refiere el Inc.3° Art. 21." 
            codigo "106" 
            tipo entero0
            largo 15 
            caracterizable TRUE
        }
        
        campo cod602 { 
            glosa "Crédito Gastos Rechazados 1ra Categoría" 
            codigo "602" 
            tipo entero
            largo 15 
            caracterizable TRUE
        } 

        campo cod908 { 
            glosa "Base IA en carácter de único (activos subyacentes), según art. 58 N° 3 LIR" 
            codigo "908" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod909 { 
            glosa "IA en carácter de único (activos subyacentes), según art. 58 N° 3 LIR" 
            codigo "909" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            # [909]	=	[908] * P25
            formula{ ROUND_DECIMAL($cod908 * $p25,$decimales) } 
        }

        campo cod910 {            
            glosa "10% Tasa Adicional de Impuesto Global Complementario, sobre cantidades declaradas en el código 106 (Inc. 3°, art. 21)."
            codigo "910" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            #b.51
            # [910] = POS { P24*[106] - [913]}
            #formula { ROUND_DECIMAL(PSTV(($p24 * $cod106) - $cod913),$decimales) }
        }
        
        campo cod910aux { 
            # POS POS { P24*[106] - [913]}
            glosa "" 
            tipo entero0
            formula { ROUND_DECIMAL(PSTV(($p24 * $cod106) - $cod913),$decimales) }
            caracterizable TRUE
            largo 15 
        }

        campo cod913 { 
            glosa "Tasa adicional de 10% de IA, sobre cantidades declaradas en código 106, según art. 21 inc 3° LIR" 
            codigo "913" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        


        campo cod911 { 
            glosa "Diferencia de IA por crédito indebido por IDPC o por crédito indebido del art. 41 A en caso de empresas acogidas al régimen del art. 14 letras A) y D) N° 3, según art. 74 N° 4 LIR" 
            codigo "911" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod914 { 
            glosa "Sumatoria de códigos 911 y 913" 
            codigo "914" 
            tipo entero0
            #[914]	=	[911] + [913]
            formula { $cod911 + $cod913 }
            caracterizable TRUE
            largo 15 
        }
        

        campo cod923 { 
            glosa "Retención de impuesto sobre gastos rechazados y otras partidas (tasa 45%), según art. 74 N° 4 inc. 11° LIR" 
            codigo "923" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        } 
        
        campo cod924 { 
            glosa "Retención de IA en carácter de único (activos subyacentes) (tasa 20% y/o 35%), según art. 74 N° 4 LIR" 
            codigo "924" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod925 { 
            glosa "Retención de Impuesto declarados en los cód. 923 y 924" 
            codigo "925" 
            tipo entero0
            #[925]	=	[923] + [924] 
            formula { $cod923 + $cod924 }
            caracterizable TRUE
            largo 15 
        }

        
        campo cod954 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ SIN OBLIGACIÓN DE RESTITUCIÓN/ Con derecho a devolución" 
            codigo "954" 
            tipo entero0
            largo 15 
            #[954]=	[1848] + [1851]   + [1856]   + [1861]   + [1872]   + [1864]
            formula { $cod1848 + $cod1851 + $cod1856 + $cod1861 + $cod1872 + $cod1864}
            caracterizable TRUE
        }
        
        campo cod955 {                         
            glosa "Otras Rentas propias y/o de terceros atribuida (Art. 14 letra C N° 1). (Ve detalle)"
            codigo "955" 
            tipo entero0
            largo 15 
            #[955]=	[1849] + [1852]   + [1857]   + [1862]   + [1873]   + [1865]
            formula { $cod1849 + $cod1852 + $cod1857 + $cod1862 + $cod1873 + $cod1865}
            caracterizable TRUE
        }
        
        campo cod956 { 
            glosa "Crédito por Rentas por participación en sociedades que determinadas rentas según contabilidad simplificada (Art. 14 ter), planillas, contratos y otras rentas."
            codigo "956" 
            tipo entero0
            largo 15 
            caracterizable TRUE
        }
        
        campo cod957 { 
            glosa "Rentas por participación en sociedades que determinadas rentas según contabilidad simplificada (Art. 14 ter), planillas, contratos y otras rentas."
            codigo "957" 
            tipo entero0
            largo 15 
            caracterizable TRUE
        }
        
        campo cod603 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ SIN OBLIGACIÓN DE RESTITUCIÓN/ Con derecho a devolución" 
            codigo "603" 
            tipo entero0
            largo 15 
            caracterizable TRUE
        } 
        campo cod108 {             
            glosa "Rentas presuntas propias o de terceros (art. 14 letra B)  N° 2 y art. 34 de la LIR). (Ve detalle)"
            codigo "108" 
            tipo entero0
            largo 15 
            caracterizable TRUE
        } 
        
        campo cod604 { 
            glosa "Total Rentas determinadas según código [604]= códigos [954]+[956]+[958] y código [109]= códigos [955]+[957]+[959]." 
            codigo "604" 
            tipo entero0
            largo 15 
            caracterizable TRUE
            formula {$cod954 + $cod956 + $cod958}
        } 
        
        campo cod109 { 
            glosa "Rentas determinadas según contabilidad simplificada" 
            codigo "109" 
            tipo entero0
            largo 15 
            caracterizable TRUE
            formula {$cod955 + $cod957 + $cod959}
        } 
        campo cod110 {             
            glosa "Rentas de Honorarios y Remuneraciones de Directores S.A. (Ver Recuadro N° 1)"
            codigo "110" 
            tipo entero0
            largo 15 
            caracterizable TRUE
            #[110]  	= POS(POS{[547] - [770]} - [872]-[465]-[494]-[850]) + POS([617]-POS{[770]-[547]}) + [479], si TIPO{[03]} = 1
            #             0, si no
            formula { ($auxRut < 50000000)?(PSTV(PSTV($cod547 - $cod770) - $cod872 - $cod465 - $cod494 - $cod850) + PSTV($cod617 - PSTV($cod770 - $cod547)) + $cod479):0 }
        } 
        
        campo cod605 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ SIN OBLIGACIÓN DE RESTITUCIÓN/ Con derecho a devolución" 
            codigo "605" 
            tipo entero0
            caracterizable TRUE
            formula { $cod1866 }
            largo 15 
        } 

        campo cod155 {             
            glosa "Rentas de capitales mobiliarios, Mayor valor rescate Fondos Mutuos y enajenación de acciones y derechos sociales y retiros de ELD. (Ver detalle)"
            codigo "155" 
            tipo entero0
            caracterizable TRUE
            #[155]	=	[1867] + [1869] + [1871]
            formula { $cod1867 + $cod1869 + $cod1871}
            largo 15 
        } 
        
        campo cod606 { 
            glosa "Rentas exentas del IGC, según art. 54 N° 3 LIR, cred sin restitución" 
            codigo "606" 
            tipo entero0
            caracterizable TRUE
            #[606]	=	[1877] + [1882] + [1888]
            formula { $cod1877 + $cod1882 + $cod1888}
            largo 15 
        } 
        campo cod152 { 
            glosa "Rentas exentas del IGC, según art. 54 N° 3 LIR" 
            codigo "152" 
            tipo entero0
            caracterizable TRUE
            #[152]	=	[1878] + [1883] + [1884] + [1889]
            formula { $cod1878 + $cod1883 + $cod1884 + $cod1889}
            largo 15 
        } 
        
        campo cod161 { 
            #glosa "Rta Art 42 Nro 1" 
            glosa "Rentas de sueldos, pensiones y otras rentas similares."
            codigo "161" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[161]	=	[1098] + [1030]
            formula { $cod1098 + $cod1030 }
        } 
        
        campo cod159 {             
            glosa "Incremento por Impuesto de Primera Categoría."
            codigo "159" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        } 
        
        campo cod748 { 
            #glosa "Incremento por impuestos soportados en el exterior, según art. 41 A LIR" 
            glosa "Incremento por impuestos pagados o retenidos en el exterior."
            codigo "748" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod749 { 
            glosa "Rebajas Por Incremento Impto de Primera Categoría.y/o Impuesto  Exterior" 
            codigo "749" 
            tipo entero0
            largo 16 
            caracterizable TRUE
            valorPorDefecto "0"
            #[749]	=	[159]+ [748]
            formula { $cod159 + $cod748 }
        }
        
        
        campo cod165 { 
            glosa "Impuesto de Primera Categoría pagado en el año 2012." 
            codigo "165" 
            tipo entero
            caracterizable TRUE
            largo 15 
        } 
        
        campo cod166 { 
            glosa "Impuesto Territorial pagado en el año 2024, según art. 55 letra a) LIR" 
            codigo "166" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }

        campo cod907 { 
            glosa "Donaciones, según art. 7° Ley N° 16.282 y D.L. N° 45 de 1973" 
            codigo "907" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }

        campo cod764 { 
            glosa "Impuesto Territorial pagado en el año 2017 y/o Donaciones Art. 7° Ley N° 16.282  y D.L. N°45/73." 
            codigo "764" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            #[764]	=	[166]+ [907]
            formula { $cod166 + $cod907 }
        }
                
        campo cod169 {                    
            #glosa "Pérdida en operaciones de capitales mobiliarios y ganancias de capital según códigos 105, 155,152 ,1032, 1891, 1104 , 1063 y 1989 (arts. 54 N° 1 y 62 LIR)"
            glosa "Pérdida en operaciones de capitales mobiliarios y ganancias de capital."
            codigo "169" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod158 { 
            #glosa "SUB TOTAL (Si declara IA trasladar a código 133 o  32)" 
            glosa "Total rentas afectas al Impuesto Global Complementario y/o Impuesto Único de Segunda Categoría y/o Impuesto Adicional."
            codigo "158" 
            tipo entero0
            largo 16 
            valorPorDefecto "0"
            caracterizable TRUE
            #b.4	    
            #[158]=  POS {[104]   + [105]      + [106]    + [108]     + [955]      + [1632]   + [110]   + [155]   + [152]   + [1032]   + [1891]   + [1104]   + [161]   + [749]   - [166]   - [907]   - [169]   - [1833]}
            formula {PSTV($cod104 +   $cod105  +  $cod106 +   $cod108 +    $cod955 + $cod1632 + $cod110 + $cod155 + $cod152 + $cod1032 + $cod1891 + $cod1104 + $cod161 + $cod749 - $cod166 - $cod907 - $cod169 - $cod1833) }
        }

        campo cod111 { 
            glosa "Cotizaciones previsionales correspondientes al empresario o socio, según art. 55 letra b) LIR" 
            codigo "111" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
            
        campo cod750 { 
            #glosa "Intereses pagados por créditos con garantía hipotecaria, según art. 55 bis LIR" 
            glosa "Intereses pagados por créditos con garantía hipotecaria."
            codigo "750" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        } 
        
        campo cod740 {             
            glosa "Dividendos hipotecarios pagados por viviendas nuevas acogidas al DFL N° 2 según Ley N° 19.622."
            codigo "740" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod751 { 
            glosa "Intereses Pagados Por Cred.C Garantía y/o Rebaja Por Pago Dividendo Vivienda 2/59" 
            codigo "751" 
            tipo entero0
            largo 16 
            caracterizable TRUE
            valorPorDefecto "0"
            #[751]	=	[750]+ [740]
            formula { $cod750 + $cod740 }
        }
        
        
        campo cod822 { 
            #glosa "20% cuotas fondos de inversión adquiridas antes del 04.06.93, según art. 6 Transitorio Ley N° 19.247" 
            glosa "20% Cuotas Fdos. Inversiones adquiridas antes del 04.06.93."
            codigo "822" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        } 
        
        campo cod765 { 
            #glosa "Ahorro previsional, según art.42 bis inc. 1° LIR" 
            glosa "Ahorro Previsional Voluntario según Inciso 1° Art. 42 bis"
            codigo "765" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod766 { 
            glosa "20% Cuotas Fdos. Inversión adquiridas antes del 04.06.93. y/o Ahorro Previsional Voluntario según inciso 1° Art.42 bis." 
            codigo "766" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            #[766]	=	[822]+ [765]
            formula { $cod822 + $cod765 }
        }

        
        campo cod170 {            
            glosa "Base Imponible Anual de Impuesto Global Complementario o Impuesto Único de Segunda Categoría"
            codigo "170" 
            tipo entero0
            caracterizable TRUE
            largo 16
            valorPorDefecto "0"
            #[170]=	POS {[158] - [111]   - [751]   - [822]   - [765]   - [133]   - [32]}  
            formula { PSTV($cod158 - $cod111 - $cod751 - $cod822 - $cod765 - $cod133 - $cod32) }
        }
        

        campo auxImpGlobComp { 
            glosa "Valor auxiliar para el calculo de Impuesto Global Complementario según tabla. (Art. 52)" 
            codigo "" 
            tipo entero
            largo 15
            #1 ; Si (    [104] + [105] + [106] + [108] + [955] + [1632] + [110] + [155] + [1032] + [1891] + [1104] + [166] + [1030] = 0)     .y. { [161]   > 0 .o. [152] > 0}; entonces 1 sino 0
            formula { (($cod104+$cod105+$cod106+$cod108+$cod955+$cod1632+$cod110+$cod155+$cod1032+$cod1891+$cod1104+$cod166+ $cod1030) == 0 AND (($cod161 > 0) OR ($cod152>0)))?1:0 } 
        }
        campo esTGC {
            glosa "Determina si aplicar TGL o TGC"
            codigo ""
            tipo boolean
            formula { ($aVx012793 -($cod765+$cod822+$cod740)) > $p80 } 
        }

        campo prango {
            glosa "prueba de Rango"
            codigo ""
            tipo boolean
            formula { RANGO($p737,$cod1815,($aVx014511 * $p34)) } 
        }

        #[157]	=	"TGL{ [170] - (([152] + [749] - [169] ) * [ lambda ])}
        #[lambda] = Si ([104] + [105] + [106] + [108] + [955] + [1632] + [110] + [155] + [1032] + [1891] + [1104] + [166] + [1030] = 0) .y. { [161] > 0 .o. [152] > 0}; entonces 1
        #sino 0
        campo cod157 {                                    
            glosa "Impuesto Global Complementario o Impuesto Único de Segunda Categoría (Art. 47 o Art. 52 o 52 bis) (según tabla)"
            codigo "157" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            formula { ROUND_DECIMAL($valor157,$decimales) }
        }
        
        campo cod157aux { 
            glosa "Impuesto Global Complementario o IUSC según tabla (Art 47 ó  Art. 52)." 
            tipo entero0
            caracterizable TRUE
            largo 15 
            formula {  ROUND_DECIMAL($valor157,$decimales) }
        }
        
        campo cod201 {             
            glosa "Débito Fiscal por Ahorro Neto Negativo (N°5 letra A y ex letra B Art. 57 bis)." 
            codigo "201" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod135 { 
            glosa "Crédito al IGC por fomento forestal, según D.L. N° 701 de 1974" 
            codigo "135" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod136 {             
            glosa "Crédito proporcional al IGC por rentas exentas declaradas en el código 152 (Art. 56 N° 2)."
            codigo "136" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod171 { 
            glosa "Crédito al IGC por rentas de Fondos Mutuos sin derecho a devolución." 
            codigo "171" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        
        campo cod176 {             
            glosa "Crédito al IGC por Impuesto Tasa Adicional según ex. Art. 21."
            codigo "176" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod607 { 
            glosa "Crédito al IGC o IUSC por donaciones para fines culturales, según art.8 Ley N° 18.985" 
            codigo "607" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod752 { 
            glosa "Crédito al IGC por donaciones para fines deportivos, según art. 62 y sgtes. Ley N° 19.712" 
            codigo "752" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod608 {            
            glosa "Crédito al IGC por Impuesto de Primera Categoría sin derecho a devolución (Arts. 41 A N° 4 letra A y 56 N°3)."
            codigo "608" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[608]	=	"Si { ([32]  + [133]) > 0 .y. [158] > 0} .o. {([104] + [105] + [106] + [955] + [1632] + [110] + [155] + [1032] + [1104]) = 0}; entonces 0 :  sino ([1592] + [1593] + [1594] + [1595] + [1721] + [1596] + [1597] + [1599] + [1633] + [1634] + [1635])"
            formula {( (($cod32 + $cod133) > 0 AND $cod158 > 0) OR (($cod104 + $cod105 + $cod106 + $cod955 + $cod1632 + $cod110 + $cod155 + $cod1032 + $cod1104) == 0) ) ? 0 : ($cod1592 + $cod1593 + $cod1594 + $cod1595 + $cod1721 + $cod1596 + $cod1597 + $cod1599 + $cod1633 + $cod1634 + $cod1635)}

        }
        
        campo cod609 { 
            glosa "Crédito al IGC por donaciones a universidades e institutos profesionales, según art. 69 Ley N° 18.681" 
            codigo "609" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod162 {             
            glosa "Crédito al IGC o IUSC por Impuesto Único de Segunda Categoría (Art. 56 N° 2)."
            codigo "162" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod174 { 
            glosa "Crédito al IGC o IUSC por ahorro neto positivo (Recuadro N° 3), según art. 3° transitorio numeral VI) Ley N° 20.780 (ex. art. 57 bis LIR)" 
            codigo "174" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod610 {            
            glosa "Crédito al IGC o IUSC por Impuesto de Primera Categoría con derecho a devolución (Art. 56 N° 3)." 
            codigo "610" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[610] = Si ([32] + [133]) = 0;     ([1024] + [1025]   + [1026]   + [1027]   + [603]   + [1722]   + [954]   + [1598]   +  [1631]   + [605]   + [1105]   + [606]   + [1031]   + [1890]   + [1914]) sino 0
            formula { ($cod32 + $cod133)==0 ? ($cod1024 + $cod1025 + $cod1026 + $cod1027 + $cod603 + $cod1722 + $cod954 + $cod1598 +  $cod1631 + $cod605 + $cod1105 + $cod606 + $cod1031 + $cod1890 + $cod1914): 0}

        }
        
        campo cod746 {            
            glosa "Crédito al IGC o IUSC por impuestos pagados o retenidos en el exterior (arts. 41 A N° 4 letra A) letra b) LIR)."
            codigo "746" 
            tipo entero0
            # formula {$cod748 + $cod856}
            caracterizable TRUE
            largo 15 
        }
        
        campo cod866 { 
            glosa "Crédito al IGC por donaciones al Fondo Nacional de Reconstrucción, según arts. 5 y 9 Ley N° 20.444" 
            codigo "866" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }

        campo cod304 { 
            #glosa "IGC O IUSC, DÉBITO FISCAL Y/O TASA ADICIONAL DETERMINADO" 
            glosa "Impuesto Global Complementario o Impuesto Único de Segunda Categoría, Débito Fiscal y/o Tasa Adicional luego de la rebaja de créditos."
            codigo "304" 
            tipo entero
            caracterizable TRUE
            largo 16
            valorPorDefecto "0"
            # [304]=	[157] + [1017] + [1033] +  [201] + [1035] + [910] - [1036] - [1101] - [135] - [136] -[176] - [752] - [608] - [1636] - [1637] - [1638] - [895] - [867] - [609] - [1639] - [1018] - [162] - [174] - [610] - [746] - [866] - [607]
            formula { $cod157 + $cod1017 + $cod1033 +  $cod201 + $cod1035 + $cod910 - $cod1036 - $cod1101 - $cod135 - $cod136 -$cod176 - $cod752 - $cod608 - $cod1636 - $cod1637 - $cod1638 - $cod895 - $cod867 - $cod609 - $cod1639 - $cod1018 - $cod162 - $cod174 - $cod610 - $cod746 - $cod866 - $cod607 }
        }
        
        campo cod304aux { 
            glosa "IGC O IUSC, DÉBITO FISCAL Y/O TASA ADICIONAL DETERMINADO" 
            tipo entero
            caracterizable TRUE
            largo 16
            valorPorDefecto "0"
            formula { $cod157+$cod1017+$cod201+$cod910-$cod135-$cod136-$cod176-$cod752-$cod608-$cod895-$cod867-$cod609-$cod1018-$cod162-$cod174-$cod610-$cod746-$cod866-$cod607}
        }

        campo cod31 { 
            glosa "IGC O IUSC ,TASA ADIC  Y/O DEB FIS DET" 
            codigo "31" 
            tipo entero0
            largo 16 
            valorPorDefecto "0"
            caracterizable TRUE
            #[31]	=	POS{ [304] }
            formula { PSTV($cod304) }
        }
        
        campo cod20 { 
            #glosa "Impto. 1° categ. Reg. Propyme"
            glosa "IDPC de empresas acogidas al régimen Pro Pyme, según art. 14 letra D) N° 3 LIR"
            codigo "20" 
            tipo entero0
            caracterizable TRUE
            #[20]	=	POS(P704* [18] Â¿ [19])
            formula { ROUND_DECIMAL(PSTV($p704 * $cod18 - $cod19),$decimales) } 
            largo 15
        }
        
        campo cod20aux { 
            glosa "Impuesto Primera Categoría sobre rentas efectivas." 
            tipo entero
            caracterizable TRUE
            #formula { (($auxRut < 50000000) == $aS14B)?(PSTV($p647 * $cod18 - $cod19)):PSTV($p84 * $cod18 - $cod19) } 
            formula { ($aS14B == 1) ? ROUND_DECIMAL(PSTV($p647 * $cod18 - $cod19),$decimales) : ROUND_DECIMAL(PSTV($p84 * $cod18 - $cod19),$decimales) } 
            largo 15
        }
        
        campo cod18 { 
            glosa "Base imponible IDPC de empresas acogidas al régimen Pro Pyme, según art. 14 letra D) N° 3 LIR" 
            codigo "18" 
            caracterizable TRUE
            tipo entero0
            largo 15 
            #[18]	=	"Si ((Pos {[1440]} > P720)  .y. TIPO{[03]} = 1 .y. atributo = 14D1)          .o. ([1440] > 0 .y. TIPO {[03]} = 2, 3, 4, 5, 6, 7, 8  .y. atributo = 14D1); entonces [1440]
            #Sino 0"
            formula {( (PSTV($cod1440) > $p720  AND $tipoContribuyente == 1 AND ($a14D1!=0)) OR (PSTV($cod1440)>0 AND IN_LIST($tipoContribuyente, "2|3|4|5|6|7|8")  AND ($a14D1!=0))) ? $cod1440 : 0 }
        }
        
        campo cod19 { 
            glosa "Rebajas 1° categ. Reg. Propyme" 
            codigo "19" 
            caracterizable TRUE
            tipo entero0
            largo 15
            #b.89	[19]	=	"Si {atributo = 14D1 .y. ([898] + [373] + [382] + [761] + [773] + [365] + [366] + [392] + [1153] + [984] + [839] + [384] + [390] + [742] + [841] + [855]) > 0}; entonces Min {([18] * P704); ([898] + [373] + [382] + [761] + [773] + [365] + [366] + [392] + [1153] + [984] + [839] + [384] + [390] + [742] + [841] + [855])}
            #Sino 0"
            formula { ($a14D1!=0 AND ($cod898 + $cod373 + $cod382 + $cod761 + $cod773 + $cod365 + $cod366 + $cod392 + $cod1153 + $cod984 + $cod839 + $cod384 + $cod390 + $cod742 + $cod841 + $cod855)>0) ? MINL( ROUND_DECIMAL($cod18 * $p704,$decimales) ,($cod898 + $cod373 + $cod382 + $cod761 + $cod773 + $cod365 + $cod366 + $cod392 + $cod1153 + $cod984 + $cod839 + $cod384 + $cod390 + $cod742 + $cod841 + $cod855)):0} 
        }
        
        campo cod825 { 
            glosa "Impuesto específico a la actividad minera, según ex. art. 64 bis LIR" 
            codigo "825" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod824 { 
            glosa "Base imponible / Impuesto específico a la actividad minera, según ex. art. 64 bis LIR" 
            codigo "824" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod189 { 
            #glosa "IDPC sobre rentas presuntas, según art. 34 LIR" 
            glosa "IDPC sobre rentas presuntas, según art. 34 LIR. (Ver Detalle)"
            codigo "189" 
            #[189]	= 	Si (TIPO{[03]} = 1 .y. [187] < P01); entonces 0
            #Sino POS {P84 * [187] - [188]}
            formula { ($tipoContribuyente == 1 AND $cod187 < $p01 ) ? 0 : (ROUND_DECIMAL(PSTV(($p84 * $cod187) - $cod188),$decimales)) }  
            tipo entero0
            largo 15 
        }
        
        campo cod189aux { 
            glosa "IDPC sobre rentas presuntas, según art. 34 LIR" 
            caracterizable TRUE
            formula { PSTV(($p84 * $cod187) - $cod188) }  
            tipo entero
            largo 15 
        }
        
        campo cod187 { 
            glosa "Base imponible IDPC sobre rentas presuntas, según art. 34 LIR" 
            codigo "187" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod941 {
            glosa "Gastos por Responsabilidad Social "
            codigo "941"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod942 {
            glosa "ELIMINADO"
            codigo "942"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod943 {
            glosa "Cantidad de D° Sociales - Régimen General"
            codigo "943"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod944 {
            glosa "Cantidad de D° Sociales - Régimen Impto. Único 1a Categ."
            codigo "944"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod945 {
            glosa "Monto Total Venta de Derechos Sociales Actualizado."
            codigo "945"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod946 {
            glosa "Monto Total Venta de Derechos Sociales Actualizado."
            codigo "946"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod947 {
            glosa "Costo de Venta Total de Drechos Sociales - Régimen General"
            codigo "947"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod948 {
            glosa "Costo de Venta Total de Drechos Sociales - Régimen Impto. Único 1a Categ."
            codigo "948"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod949 {
            glosa "Depreciación acelerada en 1/10 vida últil, del ejercicio (art. 31 N° 5 bis LIR)"
            codigo "949"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod950 {
            glosa "Total depreciación normal de los bienes con depreciación acelerada y/o instantánea informada en los códigos 938, 949 y 1158"
            codigo "950"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod953 {
            glosa "Remanente para ejercicio siguiente/Donaciones para fines culturales según art. 8° Ley N° 18.985"
            codigo "953"
            tipo entero0
            caracterizable TRUE
            largo 15 
            # [953]	=	POS {[999] Â¿ [998]} 
            formula{ PSTV($cod999 - $cod998) }
        }
        
        campo cod951 {
            glosa "Base Imponible / Impuesto único de 10%, según art. 82 del art. 1° Ley N° 20.712"
            codigo "951"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod952 {
            glosa "Impuesto único de 10%, según art. 82 del art. 1° Ley N° 20.712"
            codigo "952"
            tipo entero0
            caracterizable TRUE
            largo 15
            # [952]	=	[951]*P24
            formula{ ROUND_DECIMAL($cod951 * $p24,$decimales) } 
        }
        
        campo cod188 { 
            glosa "Rebaja IDPC sobre rentas presuntas, según art. 34 LIR" 
            codigo "188" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        

        
        campo cod79 { 
            glosa "Impuesto de 40% empresas del Estado, según art. 2º D.L. N° 2.398 de 1978" 
            codigo "79" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[79]	=	POS { P28 * [77] - [74]}
            formula { ROUND_DECIMAL(PSTV(($p28 * $cod77) - $cod74),$decimales) }
        }
        campo cod79aux { 
            glosa "Impuesto Art.2º D.L. Nº 2398/78." 
            tipo entero0
            caracterizable TRUE
            largo 15 
            formula { PSTV(($p28 * $cod77) - $cod74) }
        }
        campo cod77 { 
            glosa "Base Impuesto de 40% empresas del Estado, según art. 2º D.L. N° 2.398 de 1978" 
            codigo "77" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod74 { 
            glosa "Rebaja Impuesto de 40% empresas del Estado, según art. 2º D.L. N° 2.398 de 1978" 
            codigo "74" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod114 { 
            glosa "Impuesto único de 40% sobre gastos rechazados y otras partidas, según art. 21 inc. 1°, art. 14 letra A) N° 9 LIR" 
            codigo "114" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod113 { 
            glosa "Base Imponible/ Impuesto único de 40% sobre gastos rechazados y otras partidas, según art. 21 inc. 1°, art. 14 letra A) N° 9 LIR" 
            codigo "113" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod120 { 
            glosa "Rebajas al Impuesto Único Inc. 3º Art.21 Ley de la Renta." 
            codigo "120" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        
        campo cod755 { 
            glosa "Impuesto único por exceso de endeudamiento, según art. 41 F LIR" 
            codigo "755" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            # [755]	=	POS{ P62*[753]-[754] }
            formula { ROUND_DECIMAL(PSTV(($p62 * $cod753) - $cod754),$decimales) }
        }
        
        campo cod755aux { 
            glosa "Impuesto Único por Exceso de Endeudamiento. (Art. 41 F)" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            formula { PSTV(($p62 * $cod753) - $cod754) }
        }
        
        campo cod753 { 
            glosa "Base Imponible / Impuesto único por exceso de endeudamiento, según art. 41 F LIR" 
            codigo "753" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod754 { 
            glosa "Crédito / Impuesto único por exceso de endeudamiento, según art. 41 F LIR" 
            codigo "754" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod134 { 
            glosa "Impuesto Adicional según ex-D.L. N° 600 de 1974" 
            codigo "134" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod133 { 
            glosa "Base Imponible IA según ex-D.L. N° 600 de 1974" 
            codigo "133" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod138 { 
            glosa "Rebaja IA según ex-D.L. N° 600 de 1974" 
            codigo "138" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod34 { 
            glosa "IA según arts. 58 N° 1 y 2 y 60 inc. 1° LIR" 
            codigo "34" 
            tipo entero0
            largo 15 
            #b.94	[34]	=	POS {P62 * [32] - [76]}
            formula {PSTV(ROUND_DECIMAL(($p62 * $cod32),$decimales) - $cod76)}
        }
        
        campo cod32 { 
            glosa "B. IMPON. IMPTO. ADICIONAL LEY DE RENTA" 
            codigo "32" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod76 { 
            glosa "Rebaja IA según arts. 58 N° 1 y 2 y 60 inc. 1° LIR" 
            codigo "76" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod25 { 
            glosa "Reliquidación  Impto Único Form. 2514." 
            codigo "25" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        
        campo cod163 { 
            glosa "Reliq. Impuesto Único For. 2514" 
            codigo "163" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        
        campo cod164 { 
            glosa "Rebajas Al Impto" 
            codigo "164" 
            tipo entero
                caracterizable TRUE
            largo 15 
        }
        
        campo cod21 { 
            #glosa "Impuesto único talleres artesanales" 
            glosa "Impuesto Único Talleres Artesanales"
            codigo "21" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod43 { 
            glosa "Impuesto único pescadores artesanales" 
            codigo "43" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod756 { 
            glosa "Impuesto ÚnicoTalleres Artesanales / Impuesto Único Pescadores Artesanales" 
            codigo "756" 
            tipo entero0
            caracterizable TRUE
            valorPorDefecto "0"
            largo 16 
        #[756] 	=	[21] + [43]
            #formula { $cod21 + $cod43 }
        }
        
        campo cod756aux { 
            glosa "" 
            tipo entero0
            caracterizable TRUE
            valorPorDefecto "0"
            largo 16 
            formula { $cod21 + $cod43 }
        }
        
        campo cod767 { 
            #glosa "Impuesto único por retiros de ahorro previsional, según art. 42 bis inc. 1° N° 3 LIR" 
            glosa "Impuesto Único por Retiros de Ahorro Previsional Voluntario (según N° 3 inciso 1° Art. 42 bis)."
            codigo "767" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod862 { 
            glosa "Restitución crédito por gastos de capacitación excesivo, según  art. 6° Ley N° 20.326" 
            codigo "862" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod863 { 
            glosa "Sumatoria Códigos [767] y [862]" 
            codigo "863" 
            tipo entero0
            caracterizable TRUE
            valorPorDefecto "0"
            # [863]	 =	[862]+ [767]
            #formula { $cod862 + $cod767 }
            largo 16 
        }
        
        campo cod863aux { 
            glosa "Restitución Crédito por Gastos de Capacitación Excesivo (Art. 6º Ley 20.326/2009)" 
            tipo entero0
            caracterizable TRUE
            valorPorDefecto "0"
            formula { $cod862 + $cod767 }
            largo 16 
        }

        campo cod71 { 
            glosa "IGC a declarar /  Reliquidación IGC por término de giro de empresa acogida al régimen del art. 14 letras A) y D) N° 3 y 8, según art. 38 bis N° 3 LIR" 
            codigo "71" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod51 { 
            glosa "Base imp. reliq. impt. comp. term giro" 
            codigo "51" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod63 { 
            glosa "Rebajas al impt reliq. g comp. term giro" 
            codigo "63" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod36 { 
            #glosa "Pagos provisionales, según arts. 14 letra D) N° 3 letra (k) y 84 LIR" 
            glosa "Pagos Provisionales (art. 84 y 14 letra D) N° 3 letra (k) LIR) (Ver Detalle)"
            codigo "36" 
            tipo entero0
            caracterizable TRUE
            #          [1904]  + [1905]   + [1906]  + [1916]
            formula { $cod1904 + $cod1905 +$cod1906 + $cod1916 }
            largo 15 
        }
        
        campo cod848 { 
            glosa "Crédito fiscal AFP, según art. 23 D.L. N° 3.500 de 1980" 
            codigo "848" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }

        campo cod849 { 
            glosa "Pago Provisional (Art. 84) / Rebaja Crédito AFP" 
            codigo "849" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            # [849]	 =	[848]+ [36]
            #formula { $cod848 + $cod36 }
        }
        
        campo cod849aux { 
            glosa "" 
            tipo entero
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            formula { $cod848 + $cod36 }
        }

        campo cod82 { 
            #glosa "Crédito por gastos de capacitación, según Ley N° 19.518" 
            glosa "Crédito por Gastos de Capacitación"
            codigo "82" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod768 { 
            glosa "Crédito por Rentas Fondos Mutuos con derecho a devolución ( Art. 108)." 
            codigo "768" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
                
        campo cod83 { 
            glosa "Crédito empresas constructoras" 
            codigo "83" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod173 { 
            glosa "Crédito por reintegro de peajes, según art. 1° Ley N° 19.764" 
            codigo "173" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod612 { 
            glosa "Crédito Empresas Constructoras  / Crédito por Reintegro Peajes. (Ley N° 19.764)" 
            codigo "612" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            #[612]	=	[83]+[173]
            #formula { $cod83 + $cod173 }
        }
        
        campo cod612aux { 
            glosa "" 
            tipo entero
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            formula { $cod83 + $cod173 }
        }
        
        campo cod198 { 
            glosa "Retenciones por rentas declaradas en código 110 (Recuadro N°1)" 
            codigo "198" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            #[198]	=	[619]
            formula { $cod619 }
        }
        
        campo cod54 {            
            glosa "Mayor Retención por sueldos y pensiones declaradas en el código 161"
            codigo "54" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod611 { 
            glosa "Retenciones Recuadro N° 1 / Mayor Retención por sueldo" 
            codigo "611" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            #[611]	=	[198]+[54]
            #formula { $cod198 + $cod54 }
        }

        campo cod832 {             
            glosa "Retenciones por rentas declaradas en los códigos 155 y/o 767."
            codigo "832" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod833 { 
            glosa "Retenciones por rentas declaradas en códigos 104, 106, 108, 955, 1632, 155, 1032, 187, 908, 951, 32 y 1829 " 
            codigo "833" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod834 { 
            glosa "Sumatoria de códigos 832 y 833" 
            codigo "834" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            # [834]	 =	[832] + [833]
            #formula { $cod832 + $cod833 }
        }
        
        campo cod834aux { 
            glosa "" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            formula { $cod832 + $cod833 }
        }

        #campo cod912 { 
        #    glosa "PPUA sin derecho a devolución, según art. 27° transitorio de la Ley N° 21.210" 
        #    codigo "912" 
        #    tipo entero0
        #    caracterizable TRUE
        #    largo 15 
        #}

        
        campo cod181 { 
            glosa "Pago provisional exportadores, según ex-art. 13 Ley N° 18.768" 
            codigo "181" 
            tipo entero0
            caracterizable TRUE
            posDecimales 3
            largo 15 
        }
        
        #campo cod167 { 
        #    glosa "PPUA con derecho a devolución, según art. 27 transitorio de la ley N° 21.210" 
        #    codigo "167" 
        #    tipo entero0
        #    caracterizable TRUE
        #    largo 15 
        #}
        
        #campo cod747 { 
        #    glosa "PPUA POR IMPUESTO PRIMERA CATEGORIA" 
        #    codigo "747" 
        #    tipo entero0
        #    caracterizable TRUE
        #    valorPorDefecto "0"
        #    largo 16
        #    #[747]	=	[912]+[167]
        #    formula { $cod912 + $cod167 }  
        #}
        #campo cod747aux { 
        #    glosa "" 
        #    tipo entero0
        #    caracterizable TRUE
        #    valorPorDefecto "0"
        #    largo 16
        #    formula { $cod912 + $cod167 }  
        #}
        
        campo auxRemanImpInvers1 { 
            glosa "Remanente Impto. Invers./Art.55 bis DFL Nº 2/59, Fdos. Invers. 42 bis y/o 57 bis, prov. líneas 28 y/o 29" 
            codigo "" 
            tipo entero
            largo 15 
            #formula { (($cod750 + $cod740 + $cod822 + $cod765) > 0)?1:0 }
        }
        
        campo auxRemanImpInvers2 { 
            glosa "Remanente Impto. Invers./Art.55 bis DFL Nº 2/59, Fdos. Invers. 42 bis y/o 57 bis, prov. líneas 28 y/o 29" 
            codigo "" 
            tipo entero
            largo 15 
            #formula { ((($cod104 + $cod105 + $cod109) + ($cod110 + $cod155 + $cod159) + $cod161) > 0)?1:0 }
        }
        
        campo cod119 { 
            #glosa "Remanente de crédito por reliquidación del IUSC y/o por ahorro neto positivo, proveniente de códigos 162 y/o 174" 
            glosa "Remanente de crédito por Reliquidación del Impuesto Único de Segunda Categoría y/o por Ahorro Neto Positivo, proveniente de los códigos 162 y/o 174"
            codigo "119" 
            tipo entero0
            caracterizable TRUE
            largo 15
            #b.37	[119]	=	Si {[104] + [105] + [106] + [108] + [955] + [1632] + [110] + [155] + [1032] + [1104] + [166] > 0 .y. 304< 0};   
            #                                                                                                          MIN { {[174] + [162]};  POS{ (NEG[304]) - [1638] - [610] - [746] - [866] }}
            #Si no;                                                                                                                                                                                             MIN { {[174] + [162]};  POS{ (NEG[304]) - [610]  - [866] }}
            formula {( ($cod104+$cod105+$cod106+$cod108+$cod955+$cod1632+$cod110+$cod155+$cod1032+$cod1104+$cod166) > 0 AND $cod304 < 0)? MINL(($cod174 + $cod162 ), PSTV(NEG($cod304) - $cod1638 - $cod610 - $cod746 - $cod866 )):MINL(($cod174 + $cod162 ), PSTV(NEG($cod304) - $cod610 - $cod866 ))} 
        }
        
        campo cod119aux { 
            glosa "Remanente de crédito por Reliquidación del Impuesto Único de Segunda Categoría y/o por Ahorro Neto Positivo, proveniente de líneas 31 y/o  32." 
            tipo entero0
            caracterizable TRUE
            largo 15 
            formula {($cod104 + $cod105 + $cod106 + $cod108 + $cod1029 + $cod955 + $cod959 + $cod110 + $cod155 + $cod1032 + $cod1104 + $cod166 > 0)? MINL(($cod174 + $cod162 ), PSTV(NEG($cod304) - $cod610 - $cod746 - $cod866)):MINL(($cod174 + $cod162),PSTV(NEG($cod304) - $cod610 -$cod866)) } 
        }
        
        campo cod116 { 
            #glosa "Remanente de crédito por IDPC proveniente de códigos 1638 y/o 610" 
            glosa "Remanente de crédito por impuesto de Primera Categoría proveniente del código 610."
            codigo "116" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            #b.36
            # [116]	=	"Si {[104] + [105] + [106] + [108] + [955] + [1632] + [110] + [155] + [1032] + [1104] + [166] > 0 .y. [304] < 0}; 
            # MIN { {[174] + [162]};  POS{ (NEG[304]) - [1638] - [610] - [746] - [866] }}
            # Si no; MIN { {[174] + [162]};  POS{ (NEG[304]) - [610] - [866] }}"
            formula { ($cod104 + $cod105 + $cod106 + $cod108 + $cod955 + $cod1632 + $cod110 + $cod155 + $cod1032 + $cod1104 + $cod166 > 0 AND $cod304 < 0)? 	    MINL(($cod1638 + $cod610), PSTV(NEG($cod304) - $cod746 - $cod866)):MINL(($cod1638 + $cod610), PSTV(NEG($cod304) - $cod866))  }
        }
        
        campo cod116aux { 
            glosa "Remanente de crédito por impuesto de Primera Categoría proveniente de línea 33 y  Exceso de impuesto Único de Segunda Categoría proveniente de línea 34, según instrucciones impartidas en dicha línea." 
            tipo entero0
            caracterizable TRUE
            largo 16 
            formula { ($cod104 + $cod105 + $cod106 + $cod108 + $cod1029 + $cod955 + $cod959 + $cod110 + $cod155 + $cod1032 + $cod1104 + $cod166 > 0)?MINL(PSTV(($cod610)), PSTV((NEG($cod304) - $cod746 - $cod866))):MINL(PSTV(($cod610)), PSTV((NEG($cod304) - $cod866)))  }
        }
        
        campo cod757 { 
            glosa "Remanente código 119 y código 116" 
            codigo "757" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            #valorPorDefecto "0"
            #[757]	=	[116] + [119]
            formula { $cod116 + $cod119 }
        }
        
        campo cod757aux { 
            glosa "Remanente código 119 y código 116" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            #valorPorDefecto "0"
            formula { $cod116 + $cod119 }
        }
        
        campo cod58 { 
            glosa "Créditos puestos a disposición de los socios por la sociedad respectiva, según instrucciones " 
            codigo "58" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod870 { 
            glosa "Crédito por sistemas solares térmicos, según Ley N° 20.365" 
            codigo "870" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod871 { 
            glosa "Créd. puestos a disposición de los socios por la soci. /  Créd.  por Sistemas Solares Térmicos" 
            codigo "871" 
            caracterizable TRUE
            valorPorDefecto "0"
        # [871]	 =	 [58]+ [870]
            #formula { $cod58 + $cod870 }
            tipo entero0
            largo 16 
        }
        
        campo cod871aux { 
            glosa "Créd. puestos a disposición de los socios por la soci. /  Créd.  por Sistemas Solares Térmicos" 
            caracterizable TRUE
            valorPorDefecto "0"
            formula { $cod58 + $cod870 }
            tipo entero0
            largo 16 
        }
        
        campo cod880 { 
            glosa "Crédito por donaciones para fines sociales contribuyentes Impuesto Único de Segunda Categoría (Art. 1° bis Ley N° 19.885/2003)." 
            codigo "880" 
                caracterizable TRUE
            tipo entero
            largo 15 
        }
        
        campo cod881 { 
            glosa "Retenciones sobre intereses, según art. 74 N° 7 LIR" 
            codigo "881" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod882 { 
            glosa "Pago Prov. Export. Art. 13, Ley N° 18.768/88. / Ret. sobre intereses según Art. 74 N° 7." 
            codigo "882" 
            caracterizable TRUE
            valorPorDefecto "0"
        # [882]	 =	 [181]  + [881]
            #formula { $cod181 + $cod881 }
            tipo entero0
            largo 16 
        }
        campo cod882aux { 
            glosa "" 
            caracterizable TRUE
            valorPorDefecto "0"
            formula { $cod181 + $cod881 }
            tipo entero0
            largo 16 
        }
        campo cod305 { 
            glosa "RESULTADO LIQUIDACIÓN ANUAL IMPUESTO A LA RENTA   (si el resultado es negativo o cero, deberá declarar por Internet)" 
            codigo "305" 
            caracterizable TRUE
            tipo entero
            valorPorDefecto "0"
            largo 16 
            #b.25
            #[305]=	[31] + [20]   + [1113]   + [1642]   + [189]   + [1039]   + [79]   + [1041]   + [1042]   + [825]   + [1044]   + [114]   + [1830]   + [1837]   + [909]   + [952]    + [755]   + [134]   + POS{[34]    - [1910]}   + [1644]   + [911]   + {913]   + [923]   + [924]   + [1051]   + [1052]   + [21]   + [43]   + [767]   + [862]   - [71]   - [36]   - [848]   - [82]   - [1123]   - [83]   - [173]   - [198]   - [54]   - [832]   - [1907]   - [833]   - [1908]   - [747]   - [757]   - [58]   - [870]   - [1645]   - [181]   - [881]   - [1646]   - [1647]   - [1915]   + [900]   + [1796]   + [1827]
            formula { $cod31 + $cod20 + $cod1113 + $cod1642 + $cod189 + $cod1039 + $cod79 + $cod1041 + $cod1042 + $cod825 + $cod1044 + $cod114 + $cod1830 + $cod1837 + $cod909 + $cod952  + $cod755 + $cod134 + PSTV($cod34 - $cod1910) + $cod1644 + $cod911 + $cod913 + $cod923 + $cod924 + $cod1051 + $cod1052 + $cod21 + $cod43 + $cod767 + $cod862 - $cod71 - $cod36 - $cod848 - $cod82 - $cod1123 - $cod83 - $cod173 - $cod198 - $cod54 - $cod832 - $cod1907 - $cod833 - $cod1908 - $cod757 - $cod58 - $cod870 - $cod1645 - $cod181 - $cod881 - $cod1646 - $cod1647 - $cod1915 + $cod900 + $cod1796 + $cod1827}
        }
        campo cod305aux { 
            glosa "RESULTADO LIQUIDACION ANUAL IMPUESTO RENTA (Si el resultado es negativo o cero, deberá declarar por Internet)." 
            caracterizable TRUE
            tipo entero
            valorPorDefecto "0"
            largo 16 
            formula { $cod31 + $cod20 + $cod1113 + $cod1642 + $cod189 + $cod1039 + $cod79 + $cod1041 + $cod1042 + $cod825 + $cod1044 + $cod114 + $cod909 + $cod952  + $cod755 + $cod134 + $cod34 + $cod1644 + $cod1135 + $cod1136 + $cod914 + $cod925 + $cod1048 + $cod1053 + $cod756 + $cod863 + $cod71 - $cod849 - $cod1125 - $cod612 - $cod611 - $cod834  - $cod757 - $cod871 - $cod1645 - $cod882 - $cod1648 + $cod1649 + $cod900}
        }
        
        campo cod95 { 
            glosa "Leyes N°s. 18.392 o 19.149 (Navarino y Primavera)" 
            codigo "95" 
            caracterizable TRUE
            tipo boolean 
        }
        
        campo cod787 { 
            glosa "E.I.R.L. (Ley N° 19.857)" 
            codigo "787" 
            caracterizable TRUE
            tipo boolean 
        }
        campo cod73 { 
            glosa "D.S. N° 341 (Zona Franca)" 
            codigo "73" 
            caracterizable TRUE
            tipo boolean 
        }
        campo cod72 { 
            glosa "D.L. N° 701 de 1974 (Fomento Forestal)" 
            codigo "72" 
            caracterizable TRUE
            tipo boolean 
        }

        campo cod786 { 
            glosa "Ley N° 19.709 (Tocopilla)" 
            codigo "786" 
            caracterizable TRUE
            tipo boolean 
        }
        campo cod68 { 
            glosa "D.L. N° 600 de 1974 (E.I.E.)" 
            codigo "68" 
            caracterizable TRUE
            tipo boolean 
            valorPorDefecto "FALSE"
        }
        campo cod69{ 
            glosa "Instituciones art. 40 N°s. 2 y 4 LIR" 
            codigo "69" 
            caracterizable TRUE
            tipo boolean 
        }
        campo cod788{ 
            glosa "Sociedades Plataforma de Negocios (Art. 41 D LIR)" 
            codigo "788" 
            caracterizable TRUE
            tipo boolean 
        }
        campo cod805{ 
            glosa "Opción al régimen" 
            codigo "805" 
            caracterizable TRUE
            tipo boolean 
        }
        campo cod813 { 
            glosa "Retiro del régimen" 
            codigo "813" 
            caracterizable TRUE
            tipo boolean 
        }
        campo cod46 { 
            glosa "Artículo 57 bis LIR" 
            codigo "46" 
                caracterizable TRUE
            tipo boolean 
        }
        campo cod846 { 
            glosa "S.p.A. (Art. 424 y sgte. De C.C.)" 
            codigo "846" 
            caracterizable TRUE
            tipo boolean 
        }

        campo cod613 { 
            glosa "Determinación de Rentas Sin Contabilidad" 
            codigo "613" 
            caracterizable TRUE
            tipo boolean 
        }
        campo cod616 { 
            glosa "Asociación o cuentas en participación" 
            codigo "616" 
            caracterizable TRUE
            tipo boolean 
        }
        campo cod614 { 
            glosa "Determinación de Rentas Contab. Completa" 
            codigo "614" 
            caracterizable TRUE
            tipo boolean 
        }
        campo cod615 { 
            glosa "Determinación de Rentas Contab. Simplif." 
            codigo "615" 
                caracterizable TRUE
            tipo boolean 
        }
        campo cod461 { 
            glosa "Honorarios Anuales Con Retención" 
            codigo "461" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        campo cod492 { 
            glosa "Impuesto Retenido de Honorarios Anuales Con Retención." 
            codigo "492" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod545 { 
            glosa "Honorarios Anuales Sin Retención" 
            codigo "545" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod547 { 
            glosa "Total Ingresos Brutos" 
            codigo "547" 
            caracterizable TRUE
            tipo entero0
            valorPorDefecto "0"
            #[547]	=	[545]+ [461]+ [856] + [1650]
            formula { $cod545 + $cod461 + $cod856 + $cod1650 }
            largo 16 
        }
        
        campo cod547aux { 
            glosa "Total Ingresos Brutos" 
            caracterizable TRUE
            tipo entero
            valorPorDefecto "0"
            formula { $cod545 + $cod461 + $cod856 }
            largo 16 
        }
        
        campo cod617 { 
            glosa "Participación en Soc. de Profes. de 2a Categ." 
            codigo "617" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod865 { 
            glosa "Gastos por donación al FNR (Art. 5 Ley N° 20.444/2010)." 
            codigo "865" 
                caracterizable TRUE
            tipo entero
            largo 15 
        }
        
        campo cod872 { 
            glosa "Gastos por donaciones para fines sociales, según Art. 1° bis Ley N° 19.885" 
            codigo "872" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod770 { 
            glosa "Monto ahorro previsional, según art. 42 bis inc. 1° LIR" 
            codigo "770" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod465 { 
            glosa "Gastos efectivos (solo rebajables del código 547)" 
            codigo "465" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod494 { 
            glosa "Gastos presuntos: 30% sobre el código 547, con tope de 15 UTA" 
            codigo "494" 
            caracterizable TRUE
            tipo entero0
            largo 15 
            # [494]	=	MIN{ P08*[547] ; P42 } ; si   [465] = 0 .y. TIPO{[03]}=1
            formula { ($cod465 == 0 AND $auxRut < 50000000) ? MINL(ROUND_DECIMAL(($p08 * $cod547),$decimales), $p42):0 }
        }
        
        campo cod467{ 
            #a.5 465
            #Si TIPO{[03]} = 2; entonces POS {[547] - [465]}
            #Sino
            #Si [617] > 0 .y. [547] = 0; entonces [617] - [770] - [872]
            #Sino POS{POS{[547] - [465] - [494] - [850]} + [617] - [770] -[872]}
            glosa "Total Honorarios" 
            codigo "467" 
            caracterizable TRUE
            tipo entero
            largo 16 
            valorPorDefecto "0"
            formula { (IN_LIST($tipoContribuyente, "2")) ? 
                PSTV($cod547 - $cod465) :( ($cod617 >0 AND  $cod547==0) ?($cod617 - $cod770 - $cod872):( PSTV(PSTV($cod547 - $cod465 - $cod494 - $cod850) + $cod617 - $cod770 -$cod872) ) )  
            }
        }

        campo cod479 { 
            glosa "Total Remuneraciones Directores S.A." 
            codigo "479" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod491 { 
            glosa "Impuesto retenido de Total Remuneraciones Directores S.A." 
            codigo "491" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod618 { 
            glosa "Total Rentas y Retenciones" 
            codigo "618" 
            caracterizable TRUE
            tipo entero
            largo 16 
            valorPorDefecto "0"
            #[618]	=	POS {[467] + [479]} 
            formula { PSTV($cod467) + $cod479 } 
        }
        
        campo cod619 { 
            glosa "Impuesto Retenido del Total Rentas y Retenciones." 
            codigo "619" 
            caracterizable TRUE
            tipo entero
            largo 16 
            valorPorDefecto "0"
            #[619]	=	[492]+ [491]
            formula { $cod492 + $cod491 }
        }
        
        campo cod850 { 
            glosa "Rebaja por presunción de asignación de zona  D.L. N° 889 de 1975" 
            codigo "850" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod856 { 
            glosa "Incremento por impuestos soportados en el extranjero" 
            codigo "856" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }

        campo cod628 { 
            glosa "Ingresos del Giro Percibidos o Devengados" 
            codigo "628" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod629 { 
            glosa "Intereses Percibidos o Devengados" 
            codigo "629" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod651 { 
            glosa "Otros Ingresos Percibidos o Devengados" 
            codigo "651" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod630 { 
            glosa "Costo Directo de Bienes Y Servicios" 
            codigo "630" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod631 { 
            glosa "Remuneraciones" 
            codigo "631" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod632 { 
            glosa "Depreciación Financiera del ejercicio" 
            codigo "632" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod633 { 
            glosa "Intereses Pagados o Adeudados" 
            codigo "633" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod792 { 
            glosa "Gastos por donaciones para fines sociales" 
            codigo "792" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod793 { 
            glosa "Gastos por donaciones para fines Políticos" 
            codigo "793" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod854 { 
            glosa "Crédito Impto. 1ª Categ. de FUT devengado recibido de sociedades de personas" 
            codigo "854" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        
        campo cod852 { 
            glosa "Gastos por Inversión en Investigación y Desarrollo por Corfo" 
            codigo "852" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        
        campo cod853 { 
            glosa "Costos y Gastos necesarios para producir la Renta de Fuente Extranjera" 
            codigo "853" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod772 { 
            glosa "Total Gasto/Otras donaciones, según art. 10 Ley N° 19.885 (afecta al LGA)" 
            codigo "772" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod635 { 
            glosa "Otros Gastos Deduc. de Ingresos Brutos" 
            codigo "635" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod637 { 
            glosa "Corrección Monetaria Saldo Deudor (Art. 32)" 
            codigo "637" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        campo cod638 { 
            glosa "Corrección Monetaria Saldo Acreedor (Art. 32)" 
            codigo "638" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }

        campo cod926 { 
            glosa "Depreciación Financiera del ejercicio" 
            codigo "926" 
            caracterizable TRUE
            formula { $cod632 }
            tipo entero0
            largo 15 
        }
        
        campo cod927 { 
            glosa "Depreciación Tributaria del ejercicio" 
            codigo "927" 
            caracterizable TRUE
            formula { ($cod785 - $cod950 + $cod938) + ($cod942 + $cod949) }
            tipo entero0
            largo 15 
        }
        
        campo cod928 { 
            glosa "Gastos Rechazados afectos a la tributación del Inc. 1° Art. 21." 
            codigo "928" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod929 { 
            glosa "Gastos Rechazados afectos a la tributación del Inc. 3° Art. 21." 
            codigo "929" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod930 { 
            glosa "Cuota Exenta 10 UTA" 
            codigo "930" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod940 { 
            glosa "Cantidad de Bienes del Activo Inmovilizado" 
            codigo "940" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod938 { 
            glosa "Depreciación acelerada en 1/3  vida util, del ejercicio (art. 31 N° 5 LIR)" 
            codigo "938" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }

        campo cod639 { 
            glosa "Gastos que se deben agregar a la RLI según el N°1 del Art. 33." 
            codigo "639" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        
        campo cod794 { 
            glosa "Gastos rechazados por donaciones para fines sociales." 
            codigo "794" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod812 { 
            glosa " Gastos rechazados por donaciones para fines políticos" 
            codigo "812" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod811 { 
            glosa "Gastos rechazados por otras donaciones según Art. N° 10, Ley N° 19.885." 
            codigo "811" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod875 { 
            glosa "Gastos aceptados por donaciones al FNR (Art. 4° y 9° Ley N° 20.444)" 
            codigo "875" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod868 { 
            glosa "Rentas Exentas de Impuesto de Primera Categoría (Art. 14 quáter y Art. 40 N° 7)." 
            codigo "868" 
            # formula {$cod883}
            tipo entero0
            caracterizable TRUE
            largo 16 
        }
        
        campo cod876 { 
            glosa "Gasto Rechazado/ Donaciones al FNR, según arts. 4° y 9° Ley N° 20.444 (no afectas al LGA)" 
            codigo "876" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod827 { 
            glosa "Impuesto Específico a la Actividad Minera" 
            codigo "827" 
            tipo entero1
            caracterizable TRUE
            largo 15 
        }
        
        campo cod634 { 
            glosa "Pérdidas de Ejercicios Ant. (Art 31 N 3)" 
            codigo "634" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod640 { 
            glosa "Ingresos No Renta (Art. 17)" 
            codigo "640" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod807 { 
            glosa "Otras Partidas" 
            codigo "807" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod641 { 
            glosa "Rentas Exentas Impto 1a Categoría Art 33" 
            codigo "641" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod642 { 
            glosa "Dividendos Y/O Utilidades Soc. Art 33/2" 
            codigo "642" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }

        campo cod758 { 
            glosa "Rentas Afectas Al Impto. Único Primera Categoría" 
            codigo "758" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod808 { 
            glosa "Base Imponible Renta Presunta" 
            codigo "808" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod809 { 
            glosa "Rentas por arriendos de Bienes Raíces Agrícolas" 
            codigo "809" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod759 { 
            glosa "Rentas por arriendos de Bienes Raíces No Agrícolas" 
            codigo "759" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod760 { 
            glosa "Otras Rentas Afectas Al Impto. Primera C" 
            codigo "760" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod851 { 
            glosa "Rentas de Fuente Extranjera" 
            codigo "851" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }

        campo cod101 { 
            glosa "Saldo de caja (sólo dinero en efectivo y documentos al día, según arqueo)" 
            codigo "101" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod784 { 
            glosa "Saldo cuenta corriente bancaria según, conciliación" 
            codigo "784" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod778 { 
            glosa "Cuentas por Cobrar Empresas Relacionadas" 
            codigo "778" 
            tipo entero
                caracterizable TRUE
            largo 15 
        }
        
        campo cod816 { 
            glosa "Cuentas por Cobrar Empresas No Relacionadas" 
            codigo "816" 
            tipo entero
                caracterizable TRUE
            largo 15 
        }
        
        campo cod783 { 
            glosa "Préstamos efectuados a propietarios, socios o accionistas en el ejercicio" 
            codigo "783" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod129 { 
            glosa "Existencia Final" 
            codigo "129" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod647 { 
            glosa "Activo Inmovilizado" 
            codigo "647" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod785 { 
            glosa "Total depreciación normal de los bienes en el ejercicio" 
            codigo "785" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod648 { 
            glosa "Bienes Adquiridos Contrato Leasing" 
            codigo "648" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod815 { 
            glosa "Monto inversión Ley Arica" 
            codigo "815" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod741 { 
            glosa "Monto inversión Ley Austral" 
            codigo "741" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod122 { 
            glosa "Total del Activo" 
            codigo "122" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod779 { 
            glosa "Cuentas por Pagar Empresas Relacionadas" 
            codigo "779" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        
        campo cod817 { 
            glosa "Cuentas por Pagar Empresas No Relacionadas" 
            codigo "817" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        
        campo cod123 { 
            glosa "Total del Pasivo" 
            codigo "123" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod102 { 
            glosa "Capital Efectivo" 
            codigo "102" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod645 { 
            glosa "Capital Propio Tributario Positivo" 
            codigo "645" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[645]	=	Pos ([1145]- [1146]+ [1177] + [893] - [894]+ [1694] - [1695] + [1696] + [1178]  - [1179] + [1180] - [1181] - [1182] - [1697] + [1186] - [1187]- [1700] - [1188] + [1701] + [1702] + [1189] - [1190])
            #formula {PSTV( ($cod1145 - $cod1146 + $cod1177)   + ($cod893 - $cod894 + $cod1694 - $cod1695) + ($cod1696 + $cod1178  - $cod1179 + $cod1180 - $cod1181 - $cod1182 - $cod1697) + ($cod1186 - $cod1187 - $cod1700 - $cod1188 + $cod1701 + $cod1702 + $cod1189 - $cod1190))}
            formula {PSTV( ($cod1145 - $cod1146 + $cod1177)   + ($cod893 - $cod894 + $cod1694 - $cod1695) + ($cod1696 + $cod1178  - $cod1179 + $cod1180  - $cod1182 - $cod1697) + ($cod1186 - $cod1187 - $cod1700 - $cod1188 + $cod1701 + $cod1702 + $cod1189 - $cod1190))}	
        }
        
        campo cod893 { 
            glosa "Aumentos (Efectivos) de capital del ejercicio actualizados" 
            codigo "893" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod894 { 
            glosa "Disminuciones (Efectivas) de capital del ejercicio actualizadas" 
            codigo "894" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
    
        campo cod646 { 
            glosa "Capital Propio Tributario Negativo" 
            codigo "646" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[646]	=	 NEG ([1145]- [1146]+ [1177] + [893] - [894]+ [1694] - [1695] + [1696] + [1178]   - [1179] + [1180] - [1181] - [1182] - [1697] + [1186] - [1187]- [1700] - [1188] + [1701] + [1702] + [1189] - [1190])
            formula {NEG( ($cod1145 - $cod1146 + $cod1177 + $cod893 - $cod894) + ($cod1694 - $cod1695 + $cod1696 + $cod1178  - $cod1179) + ($cod1180  - $cod1182 - $cod1697) + ($cod1186 - $cod1187 - $cod1700 - $cod1188) + ($cod1701 + $cod1702 + $cod1189 - $cod1190))} 			
        }
        
        campo cod843 { 
            glosa "Patrimonio Financiero" 
            codigo "843" 
            tipo entero
                caracterizable TRUE
            largo 15 
        }
        
        campo cod844 { 
            glosa "Total Capital pagado o enterado" 
            codigo "844" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }

        campo cod701 { 
            glosa "Total ahorro neto positivo del ejercicio" 
            codigo "701" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod702 { 
            glosa "A.N.P. UTILIZADO EN EL EJERCICIO" 
            codigo "702" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod703 { 
            glosa "REMANENTE A.N.P. EJERCICIO SIGUIENTE" 
            codigo "703" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            #[703]	=	POS{ [701]-[702] }
            formula { PSTV($cod701 - $cod702) }
        }
        
        campo cod704 { 
            glosa "Total A.N.N. del Ejercicio." 
            codigo "704" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod705 { 
            glosa "Base para débito fiscal del ejercicio a registrar en código 201" 
            codigo "705" 
            tipo entero
            caracterizable TRUE
            largo 15 
            #705	=	Pos ([704] - [930])
            formula { PSTV($cod704 - $cod930)}
        }
        
        campo cod796 { 
            glosa "Regimen General" 
            codigo "796" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod799 { 
            glosa "Acciones vendidas" 
            codigo "799" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod802 { 
            glosa "Costo de Venta Actualizado" 
            codigo "802" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        campo cod797 { 
            glosa "Regimen Impto. unico 1 Cat." 
            codigo "797" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod800 { 
            glosa "Acciones vendidas" 
            codigo "800" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod803 { 
            glosa "Costo de Venta Actualizado" 
            codigo "803" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod798 { 
            glosa "Enajenación de acciones / N° acciones enajenadas / Régimen art. 107 LIR vigente hasta el 01.09.2022" 
            codigo "798" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod801 { 
            glosa "Enajenación de acciones / Precio o valor de enajenación / Régimen art. 107 LIR vigente hasta el 01.09.2022" 
            codigo "801" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod804 { 
            glosa "Costo de Venta Actualizado" 
            codigo "804" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        
        campo cod103 { 
            glosa "Rut Empresa 1 Que Le Puso Crédito" 
            codigo "103" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod62 { 
            glosa "CREDITO PUESTO A DISPOSICION POR LA SOC." 
            codigo "62" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod203 { 
            glosa "Rut Empresa 2 Que Le Dio Crédito" 
            codigo "203" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod64 { 
            glosa "CREDITO PUESTO A DISPOSICION POR LA SOC." 
            codigo "64" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod303 { 
            glosa "Rut Empresa 3 Que Le Dio Crédito" 
            codigo "303" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod66 { 
            glosa "CREDITO PUESTO A DISPOSICION POR LA SOC." 
            codigo "66" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod343 { 
            glosa "Rut Empresa 4 Que Le Dio Crédito" 
            codigo "343" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod246 { 
            glosa "Monto Ppm Puesto a Disposición" 
            codigo "246" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod322 { 
            glosa "Rut Empresa 5 Que Le Dio Crédito" 
            codigo "322" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod254 { 
            glosa "Monto Ppm Puesto a Disposición" 
            codigo "254" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod353 { 
            glosa "Rut Empresa 6 Que Le Dio Crédito" 
            codigo "353" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod266 { 
            glosa "Monto Ppm Puesto a Disposición" 
            codigo "266" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod383 { 
            glosa "RUT EMPRESA 7 QUE LE DIO CREDITO" 
            codigo "383" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod274 { 
            glosa "Monto Ppm Puesto a Disposición" 
            codigo "274" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod342 { 
            glosa "Rut Empresa 8 Que Le Dio Crédito" 
            codigo "342" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod286 { 
            glosa "Monto Ppm Puesto a Disposición" 
            codigo "286" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod393 { 
            glosa "Rut Empresa 9 Que Le Dio Crédito" 
            codigo "393" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod294 { 
            glosa "Monto Ppm Puesto a Disposición" 
            codigo "294" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod583 { 
            glosa "Rut Empresa 10  Que Le Dio Crédito" 
            codigo "583" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod336 { 
            glosa "Monto Ppm Puesto a Disposición" 
            codigo "336" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod344 { 
            glosa "Monto Ppm Puesto a Disposición" 
            codigo "344" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod298 { 
            glosa "Monto Ppm Puesto a Disposición" 
            codigo "298" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod224 { 
            glosa "Remanente Rta E Ingresos Acumulados" 
            codigo "224" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod774 { 
            glosa "Remanente FUT ejercicio anterior con crédito con derecho a devolución" 
            codigo "774" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }

        campo cod931 { 
            glosa "Remanente FUT ejercicio anterior con crédito sin derecho a devolución" 
            codigo "931" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod932 { 
            glosa "Crédito  Total Disponible por Impuestos Extranjeros" 
            codigo "932" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod933 { 
            glosa "Otras Partidas que se deducen" 
            codigo "933" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod934 { 
            glosa "Saldo FUT al 31.12.16, con crédito y sin derecho a devolución." 
            codigo "934" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod935 { 
            glosa "Remanente Crédito Impto 1ª Categ. ejercicio anterior sin derecho a devolución" 
            codigo "935" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod939 { 
            glosa "Crédito Impto. 1ª Categ. del Ejercicio  sin derecho a devolución" 
            codigo "939" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod936 { 
            glosa "Saldo Crédito Impuesto 1° Categ. al 31.12.16, sin derecho a devolución" 
            codigo "936" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod937 { 
            glosa "Crédito por Impuestos Externos Informado en el Ejercicio" 
            codigo "937" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }

        campo cod775 { 
            glosa "Remanente FUT ejercicio anterior sin crédito" 
            codigo "775" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod284 { 
            glosa "Saldo Negativo Ejercicio Anterior Act." 
            codigo "284" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod225 { 
            glosa "Renta Liquida Impon. 1a Categoría" 
            codigo "225" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod883 { 
            glosa "Rentas Exentas de Impuesto de Primera Categoría (Art. 14 quáter y Art. 40 N° 7)." 
            codigo "883" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod229 { 
            glosa "Perdida Tribut. 1a Categoría Ejercicio" 
            codigo "229" 
            tipo entero0
            caracterizable TRUE
            largo 15 

        }
        campo cod623 { 
            glosa "Gastos Rechazados Afectos Al Art 21" 
            codigo "623" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod624 { 
            glosa "Gastos Rechazados  no gravados con la tributación del Art.21" 
            codigo "624" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod227 { 
            glosa "Inversiones recibidas en el ejercicio en el caso del Empresario Individual ( Art.14 )." 
            codigo "227" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod776 { 
            glosa "Diferencia entre depreciación acelerada y normal" 
            codigo "776" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod777 { 
            glosa "Dividendo y retiros recibidos, participaciones en cont. simplificada y otras." 
            codigo "777" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod781 { 
            glosa "Fut devengado sociedades de personas" 
            codigo "781" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod821 { 
            glosa "FUT devengado traspasado a sociedades de personas" 
            codigo "821" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod782 { 
            glosa "Reposición Pérdida Tributaria" 
            codigo "782" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod835 { 
            glosa "Rentas presuntas o participación en rentas presuntas" 
            codigo "835" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod791 { 
            glosa "Otras Partidas que se agregan" 
            codigo "791" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod889 { 
            glosa "Saldo FUT traspasado a sociedad que nace por división" 
            codigo "889" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod275 { 
            glosa "Partidas que se deducen (Rentas presuntas,etc.)" 
            codigo "275" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod226 { 
            glosa "Retiros O Distr. Efectuados en Ejercicio" 
            codigo "226" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod231 { 
            glosa "Saldo FUT al 31.12.16, con crédito y con derecho a devolución." 
            codigo "231" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod318 { 
            glosa "Saldo FUT al 31.12.16, sin crédito." 
            codigo "318" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod232 { 
            glosa "Saldo Negativo Ejercicio Siguiente" 
            codigo "232" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod625 { 
            glosa "Remanente Crédito Impto 1ª Categ. ejercicio anterior con derecho a devolución" 
            codigo "625" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod626 { 
            glosa "Crédito Impto. 1ª Categ. del Ejercicio  con derecho a devolución" 
            codigo "626" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod627 { 
            glosa "Crédito Impto 1a Categ. Utilizado Ejerc." 
            codigo "627" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod838 { 
            glosa "Saldo Crédito Impuesto 1° Categ. al 31.12.16, con derecho a devolución " 
            codigo "838" 
            tipo entero1
            caracterizable TRUE
            largo 16 
        }         
        campo cod845 { 
            glosa "Saldo acumulado por diferencia entre depreciación acelerada y normal (Art. 31 N°5)." 
            codigo "845" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }        
        campo cod818 { 
            glosa "Remanente FUNT ejercicio anterior" 
            codigo "818" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod842 { 
            glosa "Saldo Negativo FUNT ejercicio anterior" 
            codigo "842" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod819 { 
            glosa "FUNT generado en el ejercicio" 
            codigo "819" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod837 { 
            glosa "FUNT negativo generado en el ejercicio" 
            codigo "837" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod820 { 
            glosa "Retiros o Distrib. Imputados al FUNT en el ejercicio" 
            codigo "820" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod840 { 
            glosa "Saldo Negativo FUNT, al 31.12.16.  " 
            codigo "840" 
            tipo entero0
            caracterizable TRUE
            largo 15
            #         (-1) * {[818]-[842] + [980] ? [981] +[819]-[837]-[820]}; 
            # si {[818]-[842] + [980] ? [981] + [819]-[837]-[820]}  < 0
            formula { PSTV(NEG(($cod818 - $cod842 + $cod980 - $cod981 + $cod819 - $cod837 - $cod820))) }
        }
        campo cod836 { 
            glosa "Dividendos y/o retiros afectos no imputados al FUT." 
            codigo "836" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod320 { 
            glosa "Exceso de retiros determinado al 31.12.16 para ejercicios siguientes." 
            codigo "320" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod828 { 
            glosa "Crédito IEAM del ejercicio" 
            codigo "828" 
            tipo entero1
            caracterizable TRUE
            largo 15 
        }
        campo cod830 { 
            glosa "Crédito IEAM utilizado en el ejercicio" 
            codigo "830" 
            tipo entero1
            caracterizable TRUE
            largo 15 
        }
        campo cod829 { 
            glosa "Remanente crédito IEAM a devolver a través de código 36" 
            codigo "829" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            #829	=	[828] - [830]
            formula {$cod828 - $cod830} 
        }

        campo cod365 { 
            glosa "Crédito por impuesto territorial (contribuciones de bienes raíces)" 
            codigo "365" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod368 { 
            glosa "Crédito Por Rentas de Fondos Mutuos" 
            codigo "368" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod373 { 
            glosa "Cred. Donaciones fines culturales" 
            codigo "373" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod382 { 
            glosa "Cred. Donaciones fines educacionales" 
            codigo "382" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod761 { 
            glosa "Cred.donaciones fines deportivos." 
            codigo "761" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod773 { 
            glosa "Cred.Donaciones fines sociales" 
            codigo "773" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod841 { 
            glosa "Crédito por impuestos soportados en el extranjero, según art.41  A LIR" 
            codigo "841" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod392 { 
            glosa "Crédito por rentas de zonas francas." 
            codigo "392" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod366 { 
            glosa "Crédito por bienes físicos del activo inmovilizado del ejercicio" 
            codigo "366" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod839 { 
            glosa "Remanente de crédito por bienes físicos del activo inmovilizado proveniente de inversiones A.T. 1999 - 2002" 
            codigo "839" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod384 { 
            glosa "Cred. Donaciones universidades" 
            codigo "384" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod385 { 
            glosa "Crédito Por Impto 1a Cat. Contrib Art.14" 
            codigo "385" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod390 { 
            glosa "Crédito por inversiones Ley Arica" 
            codigo "390" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod742 { 
            glosa "Crédito Por Inversión Ley Austral" 
            codigo "742" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod387 { 
            glosa "Crédito por impuestos extranjeros, según Arts. 41 A letra B y C y 41 C" 
            codigo "387" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod855 { 
            glosa "Crédito por inversión privada en actividades de investigación y desarrollo Ley N° 20.241" 
            codigo "855" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }

        campo cod236 { 
            glosa "Saldo Crédito Art. 14 Bis" 
            codigo "236" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod238 { 
            glosa "Saldo crédito Impuesto Tasa Adicional ex-art. 21 LIR" 
            codigo "238" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod877 { 
            glosa "Remanente gasto por donación al FNR según Ley N° 20.444/2010 ejercicio anterior" 
            codigo "877" 
            caracterizable TRUE
            tipo entero
            largo 15 
        }
        
        campo cod878 { 
            glosa "Gasto por donación al FNR según Ley 20.444/2010 imputado en el ejercicio." 
            codigo "878" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        
        campo cod879 { 
            glosa "Remanente gasto por donación al FNR según Ley 20.444 ejercicio siguiente." 
            codigo "879" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        
        campo cod859 { 
            glosa "Crédito por gastos de capacitación mensual con derecho a devolución (art. 6 Ley N° 20.326)" 
            codigo "859" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod860 { 
            glosa "Crédito por Gastos de Capacitación según Pre-Contrato con derecho a devolución (Art. 1° Ley N° 20.454/2010)" 
            codigo "860" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        
        campo cod884 { 
            glosa "Agregados a la RLI (o pérdida tributaria) de primera categoría, según ex. art. 64 ter LIR" 
            codigo "884" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod885 { 
            glosa "Deducciones a la RLI (o pérdida tributaria) de primera categoría, según ex. art. 64 ter LIR"
            codigo "885" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod886 { 
            glosa "Ventas expresadas en toneladas métricas de cobre fino, según ex. art. 64 bis LIR" 
            codigo "886" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod887 { 
            glosa "Margen operacional minero según ex. art. 64 bis LIR"
            codigo "887" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod239 { 
            glosa "Saldo Crédito Ex Art. 21 Tasa 30%" 
            codigo "239" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod240 { 
            glosa "Saldo Crédito Ex Art. 21 Tasa 15%" 
            codigo "240" 
            tipo entero
            caracterizable TRUE
            largo 15 
        }

        campo cod85 { 
            glosa "SALDO A FAVOR" 
            codigo "85" 
            tipo entero0
            caracterizable TRUE
            #[85]	=	POS { -[305] }
            formula { PSTV(NEG($cod305)) }            
            largo 15 
        }
        
        campo cod86 { 
            glosa "Menos: saldo puesto a disposición de los socios" 
            codigo "86" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }

        campo cod87 {             
            glosa "Monto Devolución Solicitada"
            codigo "87" 
            tipo entero0
            caracterizable TRUE
            largo 16
            valorPorDefecto "0"
            tipoContable DEVOLUCION
            #[87]	=	POS { [85]-[86] }
            formula { PSTV($cod85 - $cod86) }
        }
        
        campo cod87aux { 
            glosa "DEVOLUCIÓN SOLICITADA" 
            tipo entero0
            caracterizable TRUE
            largo 16
            valorPorDefecto "0"
            tipoContable DEVOLUCION
            formula { PSTV($cod85 - $cod86) }
        }

        campo cod90 { 
            #glosa "Impuesto Adeudado" 
            glosa "Impuesto adeudado"
            codigo "90" 
            caracterizable TRUE
            tipo entero0
            largo 16
            #valorPorDefecto "0"
            #[90]	=	POS { [305] }
            formula { PSTV($cod305) }   
        }
        
        campo cod90aux { 
            glosa "Impuesto Adeudado" 
            caracterizable TRUE
            tipo entero0
            largo 16
            #valorPorDefecto "0"
            formula { PSTV($cod305) }   
        }

        campo reajArt72a { 
            glosa "Reajuste Art.72 línea 67 :" 
            codigo "" 
            tipo entero
            largo 15
            formula { (GET_PERIODO($fechaPresentacion) == GET_PERIODO_ACTUAL_MES(1)) ? ROUND_DECIMAL($p56 * $cod90,$decimales):0 } 
        }
        campo reajArt72b { 
            glosa "Reajuste Art.72 línea 67 :" 
            codigo "" 
            tipo entero
            largo 15
            formula { (GET_PERIODO($fechaPresentacion) == GET_PERIODO_ACTUAL_MES(2)) ? ROUND_DECIMAL($p57 * $cod90,$decimales):0 } 
        }
        campo reajArt72c { 
            glosa "Reajuste Art.72 línea 67 :" 
            codigo "" 
            tipo entero
            largo 15
            formula { (GET_PERIODO($fechaPresentacion) == GET_PERIODO_ACTUAL_MES(3)) ? ROUND_DECIMAL($p58 * $cod90,$decimales):0 } 
        }
        campo reajArt72d { 
            glosa "Reajuste Art.72 línea 67 :" 
            codigo "" 
            tipo entero
            largo 15
            #formula { NOT(GET_PERIODO($fechaPresentacion) == GET_PERIODO_ACTUAL_MES(1) OR GET_PERIODO($fechaPresentacion) == GET_PERIODO_ACTUAL_MES(2) OR GET_PERIODO($fechaPresentacion) == GET_PERIODO_ACTUAL_MES(3)) ? (  ($aVx014442 == 1)? ROUND_DECIMAL($p729 * $cod90,$decimales) :ROUND_DECIMAL($p30 * $cod90,$decimales)  ) : 0 }  
            formula { ROUND_DECIMAL($p30 * $cod90,$decimales) }  
        }
        campo cod39 {             
            glosa "Reajuste Art. 72: %"
            codigo "39" 
            tipo entero0
            caracterizable TRUE
            largo 15
            #b.30
            formula {(EXISTE_DATO($codMonedaDecla) AND $codMonedaDecla!="1")?0:($reajArt72a + $reajArt72b + $reajArt72c + $reajArt72d)} 
        }
        
        campo cod91 {             
            glosa "Monto Impuesto a Pagar"
            codigo "91" 
            caracterizable TRUE
            tipo entero0
            largo 16
            valorPorDefecto "0"
            tipoContable PAGO
            #formula { ($cod305 == 0)?0:($cod90 + $cod39) }
            formula { $cod90 + $cod39 }
        }
        
        campo cod91aux { 
            glosa "TOTAL A PAGAR (Líneas 68+69)" 
            caracterizable TRUE
            tipo entero0
            largo 16
            valorPorDefecto "0"
            tipoContable PAGO
            formula { ($cod305 == 0)?0:($cod90 + $cod39) }
        }
        
        campo cod92 { 
            #glosa "Reajustes Declaración Fuera de Plazo" 
            glosa "Reajuste Fuera de Plazo"
            codigo "92" 
            caracterizable TRUE
            tipo entero0
            largo 15 
            tipoContable REAJUSTE
        }
        
        campo cod93 {             
            glosa "Intereses y Multas declaración Fuera de Plazo"
            codigo "93" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            tipoContable MULTA
        }
        
        campo cod795 { 
            glosa "Menos: Condonación" 
            codigo "795" 
            tipo entero0
            caracterizable TRUE
            largo 15 
            tipoContable CONDONACION
        }
        
        campo cod94 {        
            glosa "Total a Pagar"
            codigo "94" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            #formula { $cod91 + $cod92 + $cod93 }
        }
        
        campo cod98 {             
            glosa "Monto a Pagar de Impuesto"
            codigo "98" 
            caracterizable TRUE
            tipo string
            largo 1 
            #[98]	=	[91] Â¿ [823] ; si [823] > 0
            #no existe ; si no
            formula { ($cod823 > 0)?($cod91 - $cod823):0 }
        }
        
        campo cod823 { 
            #glosa "Valor diferido cancelado" 
            glosa "Monto Pago Diferido"
            codigo "823" 
            caracterizable TRUE
            tipo entero
            largo 15 
            tipoContable DIFERIDO
        }        

        campo cod12 { 
            glosa "FRANQUICIAS TRIB." 
            codigo "12" 
            tipo string
            largo 40 
        }
        campo cod17 { 
            glosa "BASE BS. RS. NO AGRICOLA" 
            codigo "17" 
            tipo entero
            largo 15 
        }
        campo cod22 { 
            glosa "BASE EXPLOT. VEHIC." 
            codigo "22" 
            tipo entero
            largo 15 
        }
        campo cod23 { 
            glosa "REBAJA EXPL. VEHIC." 
            codigo "23" 
            tipo entero
            largo 15 
        }
        campo cod24 { 
            glosa "RTA. EXPLOT. VEHIC." 
            codigo "24" 
            tipo entero
            largo 15 
        }
        campo cod26 { 
            glosa "BASE RTA. 2 CAT." 
            codigo "26" 
            tipo entero
            largo 15 
        }
        campo cod27 { 
            glosa "REBAJA RTA. 2 CAT." 
            codigo "27" 
            tipo entero
            largo 15 
        }
        campo cod28 { 
            glosa "RTA. SEGUNDA CAT." 
            codigo "28" 
            tipo entero
            largo 15 
        }
        campo cod37 { 
            glosa "ART.69 L.18681/87" 
            codigo "37" 
            tipo string
            largo 40 
        }
        campo cod38 { 
            glosa "PAGO PROV. ESPEC." 
            codigo "38" 
            tipo entero
            largo 15 
        }
        campo cod42 { 
            glosa "ARTICULO 14 BIS LIR" 
            codigo "42" 
            tipo string
            largo 40 
        }
        campo cod45 { 
            glosa "IMP. HABITACIONAL" 
            codigo "45" 
            tipo entero
            largo 15 
        }
        campo cod47 { 
            glosa "BASE IMPTO. HABIT." 
            codigo "47" 
            tipo entero
            largo 15 
        }
        campo cod50 { 
            glosa "REBAJA IMP. HABIT." 
            codigo "50" 
            tipo entero
            largo 15 
        }
        campo cod52 { 
            glosa "TOTAL RETENCIONES SIN ACTUALIZAR" 
            codigo "52" 
            tipo entero
            largo 15 
        }
        campo cod70 { 
            glosa "FRANQUICIA DL. 889" 
            codigo "70" 
            tipo string
            largo 40 
        }
        campo cod75 { 
            glosa "OPCION RENTA PRESUNTA AGRICULTORES" 
            codigo "75" 
            tipo string
            largo 40 
        }
        campo cod80 { 
            glosa "TOTAL RETENCIONES ACTUALIZADAS" 
            codigo "80" 
            tipo entero
            largo 15 
        }
        campo cod100 { 
            glosa "PAGO SIN MOVIMIENTO" 
            codigo "100" 
            tipo string
            largo 40 
        }
        campo cod107 { 
            glosa "PREST. PRES. NATUR." 
            codigo "107" 
            tipo entero
            largo 15 
        }
        campo cod112 { 
            glosa "INV. ART. 57 B" 
            codigo "112" 
            tipo entero
            largo 15 
        }
        campo cod115 { 
            glosa "FECHA INVERSION 1" 
            codigo "115" 
            tipo fecha_dia
        }
        campo cod117 { 
            glosa "PAGOS PROVISIONALES" 
            codigo "117" 
            tipo entero
            largo 15 
        }
        campo cod118 { 
            glosa "1% REMUNERACION ANUAL" 
            codigo "118" 
            tipo entero
            largo 15 
        }
        campo cod121 { 
            glosa "TOTAL DEBITOS" 
            codigo "121" 
            tipo entero
            largo 15 
        }
        campo cod124 { 
            glosa "TOTAL COLUMNA PERDIDA" 
            codigo "124" 
            tipo entero
            largo 15 
        }
        campo cod125 { 
            glosa "TOTAL COLUMNA GANANCIAS" 
            codigo "125" 
            tipo entero
            largo 15 
        }
        campo cod126 { 
            glosa "UTILIDAD EJERTCIC." 
            codigo "126" 
            tipo entero
            largo 15 
        }
        campo cod127 { 
            glosa "PERDIDA EJERCIC." 
            codigo "127" 
            tipo entero
            largo 15 
        }
        campo cod128 { 
            glosa "EXISTE INICIAL" 
            codigo "128" 
            tipo entero
            largo 15 
        }
        campo cod130 { 
            glosa "COMPRAS AFECT. IVA" 
            codigo "130" 
            tipo entero
            largo 15 
        }
        campo cod131 { 
            glosa "VENTAS AFECT. IVA" 
            codigo "131" 
            tipo entero
            largo 15 
        }
        campo cod137 { 
            glosa "CRED. IMPTO 1RA CATEG." 
            codigo "137" 
            tipo entero
            largo 15 
        }
        campo cod139 { 
            glosa "PAGO MONEDA EXTRANJERA" 
            codigo "139" 
            tipo entero
            largo 15 
        }
        campo cod140 { 
            glosa "BS. RS. PROP-USUFRU" 
            codigo "140" 
            tipo entero
            largo 15 
        }
        campo cod141 { 
            glosa "BS. RS. AJENOS" 
            codigo "141" 
            tipo entero
            largo 15 
        }
        campo cod142 { 
            glosa "BS. RS. RTA. EFECTIV." 
            codigo "142" 
            tipo entero
            largo 15 
        }
        campo cod143 { 
            glosa "BS. RS. NO AGRICOLAS" 
            codigo "143" 
            tipo entero
            largo 15 
        }
        campo cod144 { 
            glosa "BSRS. NO AGR. INFER." 
            codigo "144" 
            tipo entero
            largo 15 
        }
        campo cod145 { 
            glosa "BSRS. NO AGR. SUPER" 
            codigo "145" 
            tipo entero
            largo 15 
        }
        campo cod147 { 
            glosa "RTA. PROF. OCUP. LUC" 
            codigo "147" 
            tipo entero
            largo 15 
        }
        campo cod148 { 
            glosa "PARTIC. SOC. PROFES." 
            codigo "148" 
            tipo entero
            largo 15 
        }
        campo cod150 { 
            glosa "DISTRIBUCION S.A." 
            codigo "150" 
            tipo entero
            largo 15 
        }
        campo cod151 { 
            glosa "PARTC. DIRECT. S.A." 
            codigo "151" 
            tipo entero
            largo 15 
        }
        campo cod153 { 
            glosa "RTA. COM. IND. Y OTS" 
            codigo "153" 
            tipo entero
            largo 15 
        }
        campo cod154 { 
            glosa "PARTC. SOCIEDADES" 
            codigo "154" 
            tipo entero
            largo 15 
        }
        campo cod156 { 
            glosa "RTAS. VITALICIAS" 
            codigo "156" 
            tipo entero
            largo 15 
        }
        campo cod168 { 
            glosa "PAGO PROV. ART. 20 B" 
            codigo "168" 
            tipo entero
            largo 15 
        }
        campo cod172 { 
            glosa "CRED. POR DONACIONES A UNIVERSIDADES" 
            codigo "172" 
            tipo entero
            largo 15 
        }
        campo cod175 { 
            glosa "CRED. X CARGAS FAM." 
            codigo "175" 
            tipo entero
            posDecimales 3
            largo 15 
        }
        campo cod177 { 
            glosa "CRED. X RTAS. EXENT." 
            codigo "177" 
            tipo entero
            posDecimales 3
            largo 15 
        }
        campo cod178 { 
            glosa "CREDITO POR DONAC. PARA FINES CULTURALES" 
            codigo "178" 
            tipo entero
            posDecimales 3
            largo 15 
        }
        campo cod179 { 
            glosa "PAG PROV. ART. 21.I4" 
            codigo "179" 
            tipo entero
            largo 15 
        }
        campo cod182 { 
            glosa "CRED. DONACIONES (ART. 8 LEY 18985/90)" 
            codigo "182" 
            tipo entero
            posDecimales 3
            largo 15 
        }
        campo cod183 { 
            glosa "20% INV. ACCIONES" 
            codigo "183" 
            tipo entero
            posDecimales 3
            largo 15 
        }
        campo cod184 { 
            glosa "20% INV. PAGAR" 
            codigo "184" 
            tipo entero
            largo 15 
        }
        campo cod185 { 
            glosa "% DIVID. S.A." 
            codigo "185" 
            tipo entero
            largo 15 
        }
        campo cod186 { 
            glosa "% OTROS" 
            codigo "186" 
            tipo entero
            largo 15 
        }
        campo cod190 { 
            glosa "INV. ART. 57 B" 
            codigo "190" 
            tipo entero
            largo 15 
        }
        campo cod192 { 
            glosa "% DIVID. Y ENAJ. DE ACC. S.A. ABIERTAS" 
            codigo "192" 
            tipo entero
            largo 15 
        }
        campo cod197 { 
            glosa "INVERSIONES ART. 57 BIS ACTUALIZADAA" 
            codigo "197" 
            tipo entero
            largo 15 
        }
        campo cod204 { 
            glosa "FECHAS RETIROS 1" 
            codigo "204" 
            tipo fecha_dia
        }
        campo cod205 { 
            glosa "FECHAS RETIROS 2" 
            codigo "205" 
            tipo fecha_dia
        }
        campo cod206 { 
            glosa "FECHAS RETIROS 3" 
            codigo "206" 
            tipo fecha_dia
        }
        campo cod208 { 
            glosa "FECHA RETIRO 4" 
            codigo "208" 
            tipo fecha_dia
        }
        campo cod209 { 
            glosa "FECHA RETIRO 5" 
            codigo "209" 
            tipo fecha_dia
        }
        campo cod210 { 
            glosa "FECHA RETIRO 6" 
            codigo "210" 
            tipo fecha_dia 
        }
        campo cod213 { 
            glosa "RUT EMPRESA QUE SOPORTO RETIRO" 
            codigo "213" 
            tipo string
            largo 40 
        }
        campo cod214 { 
            glosa "MONTO INVERSION" 
            codigo "214" 
            tipo entero
            largo 15 
        }
        campo cod215 { 
            glosa "TIPO DE INVERSION" 
            codigo "215" 
            tipo string
            largo 40 
        }
        campo cod216 { 
            glosa "MONTO INVERSION" 
            codigo "216" 
            tipo entero
            largo 15 
        }
        campo cod217 { 
            glosa "TIPO DE INVERSION" 
            codigo "217" 
            tipo string
            largo 40 
        }
        campo cod218 { 
            glosa "MONTO INVERSION" 
            codigo "218" 
            tipo entero
            largo 15 
        }
        campo cod219 { 
            glosa "TIPO DE INVERSION" 
            codigo "219" 
            tipo string
            largo 40 
        }
        campo cod220 { 
            glosa "MONTO INVERSION" 
            codigo "220" 
            tipo entero
            largo 15 
        }
        campo cod221 { 
            glosa "TIPO DE INVERSION" 
            codigo "221" 
            tipo string
            largo 40 
        }
        campo cod223 { 
            glosa "RUT EMPRESA RECEPTORA INVERSION" 
            codigo "223" 
            tipo string
            largo 40 
        }
        campo cod230 { 
            glosa "GASTOS RECHAZADOS ART 33 N 1 PAGADOS" 
            codigo "230" 
            tipo entero
            largo 15 
        }
        campo cod233 { 
            glosa "RUT EMPRESA QUE SOPORTO RETIRO" 
            codigo "233" 
            tipo string
            largo 40 
        }
        campo cod234 { 
            glosa "REMTE. UTILIDAD-84" 
            codigo "234" 
            tipo entero
            largo 15 
        }
        campo cod234 { 
            glosa "REMTE. UTILIDAD-84" 
            codigo "234" 
            tipo string
            largo 40 
        }
        campo cod235 { 
            glosa "MONTO DE INVERSION 5" 
            codigo "235" 
            tipo entero
            largo 15 
        }
        campo cod237 { 
            glosa "MONTO DE INVERSION 6" 
            codigo "237" 
            tipo entero
            largo 15 
        }
        campo cod242 { 
            glosa "PARTIDAS QUE SE AGREGAN (DIVIDENDOS ETC)" 
            codigo "242" 
            tipo entero
            largo 15 
        }
        campo cod243 { 
            glosa "RUT EMPRESA RECEPTORA INVERSION" 
            codigo "243" 
            tipo string
            largo 40 
        }
        campo cod253 { 
            glosa "RUT EMPRESA QUE SOPORTO RETIRO" 
            codigo "253" 
            tipo string
            largo 40 
        }
        campo cod263 { 
            glosa "RUT EMPRESA RECEPTORA INVERSION" 
            codigo "263" 
            tipo string
            largo 40 
        }
        campo cod273 { 
            glosa "RUT EMPRESA QUE SOPORTO RETIRO" 
            codigo "273" 
            tipo string
            largo 40 
        }
        campo cod283 { 
            glosa "RUT EMPRESA RECEPTORA INVERSION" 
            codigo "283" 
            tipo string
            largo 40 
        }
        campo cod293 { 
            glosa "RUT EMPRESA 5 RET" 
            codigo "293" 
            tipo string
            largo 40 
        }
        campo cod302 { 
            glosa "SUC. O CASA MATR." 
            codigo "302" 
            tipo string
            largo 40 
        }
        campo cod312 { 
            glosa "COD. SII DE CERTIFICACION DE SOFTWARE" 
            codigo "312" 
            tipo string
            largo 40 
        }
        campo cod313 { 
            glosa "RUT EMPRESA 6 RET." 
            codigo "313" 
            tipo string
            largo 40 
        }
        campo cod314 { 
            glosa "TOTAL COMPRAS Y/O SERVICIOS" 
            codigo "314" 
            tipo entero
            largo 15 
        }
        campo cod316 { 
            glosa "CAPITAL PROPIO TRIBUTARIO" 
            codigo "316" 
            tipo entero
            largo 15 
        }
        campo cod317 { 
            glosa "ASIGNACIONES A EJECUTIVOS O DIRECTORES" 
            codigo "317" 
            tipo entero
            largo 15 
        }
        campo cod319 { 
            glosa "TOTAL VENTAS Y/O SERVICIOS" 
            codigo "319" 
            tipo entero
            largo 15 
        }
        campo cod321 { 
            glosa "MONTO INVERSION LEY ARICA ACTUALIZADA" 
            codigo "321" 
            tipo entero
            largo 15 
        }
        campo cod323 { 
            glosa "RUT EMPRES. 5 INVER" 
            codigo "323" 
            tipo string
            largo 40 
        }
        campo cod333 { 
            glosa "RUT EMPRES. 6 INVER" 
            codigo "333" 
            tipo string
            largo 40 
        }
        campo cod334 { 
            glosa "SOC. DE PROFESIONALES DE 2A. CATEGORIA" 
            codigo "334" 
            tipo string
            largo 40 
        }
        campo cod341 { 
            glosa "REMANENTE FUT EJERCICIO ANTERIOR ACTUAL." 
            codigo "341" 
            tipo entero
            largo 15 
        }
        campo cod350 { 
            glosa "NUMERO ROL DE PREDIOS C/OPCION RENTA P" 
            codigo "350" 
            tipo string
            largo 40 
        }
        campo cod351 { 
            glosa "NUMERO ROL DE PREDIOS C/OPCION RENTA P" 
            codigo "351" 
            tipo string
            largo 40 
        }
        campo cod352 { 
            glosa "NUMERO ROL DE PREDIOS C/OPCION RENTA P" 
            codigo "352" 
            tipo string
            largo 40 
        }
        campo cod360 { 
            glosa "AHORRO NETO POSITIVO DEL EJERCICIO" 
            codigo "360" 
            tipo entero
            largo 15 
        }
        campo cod361 { 
            glosa "AHORRO NETO POSITIVO UTILIZADO" 
            codigo "361" 
            tipo entero
            largo 15 
        }
        campo cod362 { 
            glosa "REMANENTE AHORRO POSITIVO EJERCICIO SIGT" 
            codigo "362" 
            tipo entero
            largo 15 
        }
        campo cod363 { 
            glosa "SALDO ARRASTRE DEP. Y RETIROS EJERC. SIG" 
            codigo "363" 
            tipo entero
            largo 15 
        }
        campo cod364 { 
            glosa "TOTAL A.N.N. DEL EJERCICIO" 
            codigo "364" 
            tipo entero
            largo 15 
        }
        campo cod370 { 
            glosa "BASE DEBITO FISCAL DEL EJERCCIO" 
            codigo "370" 
            tipo entero
            largo 15 
        }
        campo cod371 { 
            glosa "A.N.P. EJERCICIO ANTERIOR ACTUALIZADO" 
            codigo "371" 
            tipo entero
            largo 15 
        }
        campo cod372 { 
            glosa "CREDITOS EMPRESAS EMISORAS DE VALORES" 
            codigo "372" 
            tipo entero
            largo 15 
        }
        campo cod374 { 
            glosa "CREDITO A.N.P.EJERCICIO ANTERIOR ACTUAL." 
            codigo "374" 
            tipo entero
            largo 15 
        }
        campo cod413 { 
            glosa "RUT RETENEDOR HONORARIOS" 
            codigo "413" 
            tipo string
            largo 40 
        }
        campo cod414 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "414" 
            tipo string
            largo 40 
        }
        campo cod415 { 
            glosa "FECHA INVERSION 2" 
            codigo "415" 
            tipo fecha_dia
        }
        campo cod416 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "416" 
            tipo string
            largo 40 
        }
        campo cod418 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "418" 
            tipo string
            largo 40 
        }
        campo cod420 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "420" 
            tipo string
            largo 40 
        }
        campo cod422 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "422" 
            tipo string
            largo 40 
        }
        campo cod423 { 
            glosa "RUT RETENEDOR HONORARIOS" 
            codigo "423" 
            tipo string
            largo 40 
        }
        campo cod424 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "424" 
            tipo string
            largo 40 
        }
        campo cod426 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "426" 
            tipo string
            largo 40 
        }
        campo cod428 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "428" 
            tipo string
            largo 40 
        }
        campo cod430 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "430" 
            tipo string
            largo 40 
        }
        campo cod433 { 
            glosa "RUT RETENEDOR HONORARIOS" 
            codigo "433" 
            tipo string
            largo 40 
        }
        campo cod443 { 
            glosa "RUT RETENEDOR HONORARIOS" 
            codigo "443" 
            tipo string
            largo 40 
        }
        campo cod451 { 
            glosa "HONORARIOS ACTUALIZADOS" 
            codigo "451" 
            tipo entero
            largo 15 
        }
        campo cod453 { 
            glosa "RUT RETENEDOR HONORARIOS" 
            codigo "453" 
            tipo string
            largo 40 
        }
        campo cod455 { 
            glosa "HONORARIOS ACTUALIZADOS" 
            codigo "455" 
            tipo entero
            largo 15 
        }
        campo cod457 { 
            glosa "HONORARIOS ACTUALIZADOS" 
            codigo "457" 
            tipo entero
            largo 15 
        }
        campo cod458 { 
            glosa "HONORARIOS ACTUALIZADOS" 
            codigo "458" 
            tipo entero
            largo 15 
        }
        campo cod459 { 
            glosa "HONORARIOS ACTUALIZADOS" 
            codigo "459" 
            tipo entero
            largo 15 
        }
        campo cod463 { 
            glosa "RUT RETENEDOR DIRECTORES S.A." 
            codigo "463" 
            tipo string
            largo 40 
        }
        campo cod469 { 
            glosa "REMUNERACION DIRECTORES S.A. ACTUALIZADA" 
            codigo "469" 
            tipo entero
            largo 15 
        }
        campo cod471 { 
            glosa "REMUNERACION DIRECTORES S.A. ACTUALIZADA" 
            codigo "471" 
            tipo entero
            largo 15 
        }
        campo cod473 { 
            glosa "RUT RETENEDOR DIRECTORES S.A." 
            codigo "473" 
            tipo string
            largo 40 
        }
        campo cod475 { 
            glosa "REMUNERACION DIRECTORES S.A. ACTUALIZADA" 
            codigo "475" 
            tipo entero
            largo 15 
        }
        campo cod477 { 
            glosa "REMUNERACION DIRECTORES S.A. ACTUALIZADA" 
            codigo "477" 
            tipo entero
            largo 15 
        }
        campo cod480 { 
            glosa "IMPTO. RETENIDO ACTUALIZADO" 
            codigo "480" 
            tipo entero
            largo 15 
        }
        campo cod481 { 
            glosa "IMPTO. RETENIDO ACTUALIZADO" 
            codigo "481" 
            tipo entero
            largo 15 
        }
        campo cod482 { 
            glosa "IMPTO. RETENIDO ACTUALIZADO" 
            codigo "482" 
            tipo entero
            largo 15 
        }
        campo cod483 { 
            glosa "RUT RETENEDOR DIRECTORES S.A." 
            codigo "483" 
            tipo string
            largo 40 
        }
        campo cod484 { 
            glosa "IMPTO RETENIDO ACTUALIZADO" 
            codigo "484" 
            tipo entero
            largo 15 
        }
        campo cod485 { 
            glosa "IMPTO. RETENIDO ACTUALIZADO" 
            codigo "485" 
            tipo entero
            largo 15 
        }
        campo cod486 { 
            glosa "IMPTO. RETENIDO ACTUALIZADO" 
            codigo "486" 
            tipo entero
            largo 15 
        }
        campo cod487 { 
            glosa "IMPTO. RETENIDO ACTUALIZADO" 
            codigo "487" 
            tipo entero
            largo 15 
        }
        campo cod489 { 
            glosa "IMPTO. RETENIDO ACTUALIZADO" 
            codigo "489" 
            tipo entero
            largo 15 
        }
        campo cod490 { 
            glosa "IMPTO. RETENIDO ACTUALIZADO" 
            codigo "490" 
            tipo entero
            largo 15 
        }
        campo cod493 { 
            glosa "RUT RETENEDOR DIRECTORES S.A." 
            codigo "493" 
            tipo string
            largo 40 
        }
        campo cod503 { 
            glosa "RUT DE SOCIEDAD A QUE PERTENECE" 
            codigo "503" 
            tipo string
            largo 40 
        }
        campo cod513 { 
            glosa "RUT RETENEDOR SUELDOS Y PENSIONES" 
            codigo "513" 
            tipo string
            largo 40 
        }
        campo cod514 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "514" 
            tipo string
            largo 40 
        }
        campo cod515 { 
            glosa "FECHA INVERSION 3" 
            codigo "515" 
            tipo fecha_dia
        }
        campo cod516 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "516" 
            tipo string
            largo 40 
        }
        campo cod518 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "518" 
            tipo string
            largo 40 
        }
        campo cod520 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "520" 
            tipo string
            largo 40 
        }
        campo cod521 { 
            glosa "SUELDOS Y PENSIONES ACTUALIZADAS" 
            codigo "521" 
            tipo entero
            largo 15 
        }
        campo cod523 { 
            glosa "RUT RETENEDOR SUELDOS Y PENSIONES" 
            codigo "523" 
            tipo string
            largo 40 
        }
        campo cod524 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "524" 
            tipo string
            largo 40 
        }
        campo cod525 { 
            glosa "SUELDOS Y PENSIONES ACTUALIZADAS" 
            codigo "525" 
            tipo entero
            largo 15 
        }
        campo cod526 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "526" 
            tipo string
            largo 40 
        }
        campo cod527 { 
            glosa "SUELDOS Y PENSIONES ACTUALIZADAS" 
            codigo "527" 
            tipo entero
            largo 15 
        }
        campo cod528 { 
            glosa "NUMERO CERTIFICADO" 
            codigo "528" 
            tipo string
            largo 40 
        }
        campo cod529 { 
            glosa "SUELDOS Y PENSIONES ACTUALIZADAS" 
            codigo "529" 
            tipo entero
            largo 15 
        }
        campo cod533 { 
            glosa "RUT RETENEDOR SUELDOS Y PENSIONES" 
            codigo "533" 
            tipo string
            largo 40 
        }
        campo cod535 { 
            glosa "SUELDOS Y PENSIONES ACTUALIZADAS" 
            codigo "535" 
            tipo entero
            largo 15 
        }
        campo cod537 { 
            glosa "HONORARIOS ACTUALIZADOS" 
            codigo "537" 
            tipo entero
            largo 15 
        }
        campo cod539 { 
            glosa "HONORARIOS ACTUALIZADOS" 
            codigo "539" 
            tipo entero
            largo 15 
        }
        campo cod540 { 
            glosa "IMPTO. UNICO RETENIDO ACTUALIZADO" 
            codigo "540" 
            tipo entero
            largo 15 
        }
        campo cod541 { 
            glosa "HONORARIOS ACTUALIZADOS" 
            codigo "541" 
            tipo entero
            largo 15 
        }
        campo cod542 { 
            glosa "IMPTO. UNICO RETENIDO ACTUALIZADO" 
            codigo "542" 
            tipo entero
            largo 15 
        }
        campo cod543 { 
            glosa "RUT RETENEDOR SUELDOS Y PENSIONES" 
            codigo "543" 
            tipo string
            largo 40 
        }
        campo cod544 { 
            glosa "IMPTO. UNICO RETENIDO ACTUALIZADO" 
            codigo "544" 
            tipo entero
            largo 15 
        }
        campo cod546 { 
            glosa "IMPTO. UNICO RETENIDO ACTUALIZADO" 
            codigo "546" 
            tipo entero
            largo 15 
        }
        campo cod550 { 
            glosa "IMPTO. UNICO RETENIDO ACTUALIZADO" 
            codigo "550" 
            tipo entero
            largo 15
        }
        campo cod552 { 
            glosa "IMPTO.RETENIDO ACTUALIZADO" 
            codigo "552" 
            tipo entero
            largo 15 
        }
        campo cod554 { 
            glosa "IMPTO. RETENIDO ACTUALIZADO" 
            codigo "554" 
            tipo entero
            largo 15 
        }
        campo cod556 { 
            glosa "IMPTO. RETENIDO ACTUALIZADO" 
            codigo "556" 
            tipo entero
            largo 15 
        }
        campo cod562 { 
            glosa "CREDITO SOC. CUATR" 
            codigo "562" 
            tipo entero
            largo 15 
        }
        campo cod563 { 
            glosa "RUT RETENEDOR HONORARIOS" 
            codigo "563" 
            tipo string
            largo 40 
        }
        campo cod573 { 
            glosa "RUT RETENEDOR HONORARIOS" 
            codigo "573" 
            tipo string
            largo 40 
        }
        campo cod588 { 
            glosa "RUT RETENEDOR HONORARIOS" 
            codigo "588" 
            tipo string
            largo 40 
        }
        campo cod620 { 
            glosa "RENTA IMPONIBLE ANUAL ACTUALIZADA" 
            codigo "620" 
            tipo entero
            largo 15 
        }
        campo cod621 { 
            glosa "IMPUESTO UNICO ANUAL ACTUALIZADO" 
            codigo "621" 
            tipo entero
            largo 15 
        }
        campo cod622 { 
            glosa "20% INVERSION EN ACC.DE PAGO S.A. ABIER." 
            codigo "622" 
            tipo entero
            largo 15 
        }
        campo cod644 { 
            glosa "RENTAS PRESUNTAS" 
            codigo "644" 
            tipo entero
            largo 15 
        }
        campo cod649 { 
            glosa "SUMATORIA OTRAS INVERSIONES" 
            codigo "649" 
            tipo entero
            largo 15 
        }
        campo cod693 { 
            glosa "CODIGO POR DEFINIR" 
            codigo "693" 
            tipo entero
            largo 15 
        }
        campo cod700 { 
            glosa "50% DIVIDENDO E INT. ART. 5 L 19578/98" 
            codigo "700" 
            tipo entero
            largo 15 
        }
        campo cod706 { 
            glosa "TASA PROMEDIO DE N.5 LETRA B ART. 57 BIS" 
            codigo "706" 
            tipo entero
            largo 15 
        }
        campo cod707 { 
            glosa "RUT S.A. ENAJENACION DE ACCIONES" 
            codigo "707" 
            tipo string
            largo 40 
        }
        campo cod708 { 
            glosa "RUT S.A. ENAJENACION DE ACCIONES" 
            codigo "708" 
            tipo string
            largo 40 
        }
        campo cod709 { 
            glosa "RUT S.A. ENAJENACION DE ACCIONES" 
            codigo "709" 
            tipo string
            largo 40 
        }
        campo cod710 { 
            glosa "RUT S.A. ENAJENACION DE ACCIONES" 
            codigo "710" 
            tipo string
            largo 40 
        }
        campo cod711 { 
            glosa "ACCIONES VENDIDAS ENAJ. ACCIONES" 
            codigo "711" 
            tipo entero
            largo 15 
        }
        campo cod712 { 
            glosa "ACCIONES VENDIDAS ENAJ. ACCIONES" 
            codigo "712" 
            tipo entero
            largo 15 
        }
        campo cod713 { 
            glosa "ACCIONES VENDIDAS ENAJ. ACCIONES" 
            codigo "713" 
            tipo entero
            largo 15 
        }
        campo cod714 { 
            glosa "ACCIONES VENDIDAS ENAJ. ACCIONES" 
            codigo "714" 
            tipo entero
            largo 15 
        }
        campo cod715 { 
            glosa "ACCIONES VENDIDAS ENAJ. ACCIONES" 
            codigo "715" 
            tipo entero
            largo 15 
        }
        campo cod716 { 
            glosa "PRECIO VENTA ACTUALIZADO ENAJ. ACC." 
            codigo "716" 
            tipo entero
            largo 15 
        }
        campo cod717 { 
            glosa "PRECIO VENTA ACTUALIZADO ENAJ. ACC." 
            codigo "717" 
            tipo entero
            largo 15 
        }
        campo cod718 { 
            glosa "PRECIO VENTA ACTUALIZADO ENAJ. ACC." 
            codigo "718" 
            tipo entero
            largo 15 
        }
        campo cod719 { 
            glosa "PRECIO VENTA ACTUALIZADO ENAJ. ACC." 
            codigo "719" 
            tipo entero
            largo 15 
        }
        campo cod720 { 
            glosa "PRECIO VENTA ACTUALIZADO ENAJ. ACC." 
            codigo "720" 
            tipo entero
            largo 15 
        }
        campo cod721 { 
            glosa "COSTO VENTA ACTUALIZADO ENAJ. ACC." 
            codigo "721" 
            tipo entero
            largo 15 
        }
        campo cod722 { 
            glosa "COSTO VENTA ACTUALIZADO ENAJ. ACC." 
            codigo "722" 
            tipo entero
            largo 15 
        }
        campo cod723 { 
            glosa "COSTO VENTA ACTUALIZADO ENAJ. ACC." 
            codigo "723" 
            tipo entero
            largo 15 
        }
        campo cod724 { 
            glosa "COSTO VENTA ACTUALIZADO ENAJ. ACC." 
            codigo "724" 
            tipo entero
            largo 15 
        }
        campo cod725 { 
            glosa "COSTO VENTA ACTUALIZADO ENAJ. ACC." 
            codigo "725" 
            tipo fecha_dia
        }
        campo cod725 { 
            glosa "COSTO VENTA ACTUALIZADO ENAJ. ACC." 
            codigo "725" 
            tipo entero
            largo 15 
        }
        campo cod729 { 
            glosa "CONTABILIDAD COMPUTACIONAL" 
            codigo "729" 
            tipo string
            largo 40 
        }
        campo cod730 { 
            glosa "DIVIDENDO E INT. Y ACCIONES DE PAGO" 
            codigo "730" 
            tipo entero
            largo 15 
        }
        campo cod743 { 
            glosa "REBAJA POR PAGO DIVIDENDO VIVIENDA DFL 2" 
            codigo "743" 
            tipo entero
            largo 15 
        }
        campo cod744 { 
            glosa "DIVID. PAG. VIVIENDAS NVAS DFL 2/59" 
            codigo "744" 
            tipo entero
            largo 15 
        }
        campo cod745 { 
            glosa "REINTEGRO DEV. ANTICIPADA IMPTO L.19697" 
            codigo "745" 
            tipo entero
            largo 15 
        }
        campo cod762 { 
            glosa "UTILIDAD / PERDIDA DE AGENCIAS O ESTABLE" 
            codigo "762" 
            tipo entero
            largo 15 
        }
        campo cod763 { 
            glosa "UTILIDAD(PERDIDA) DE OTRAS INVERSIONES" 
            codigo "763" 
            tipo entero
            largo 15 
        }
        campo cod771 { 
            glosa "GASTOS POR DONACIONES SOCIALES Y POLITIC" 
            codigo "771" 
            tipo entero
            largo 15 
        }
        campo cod789 { 
            glosa "SOC.PROFES DE 1 CATEGORIA" 
            codigo "789" 
            tipo string
            largo 40 
        }
        campo cod790 { 
            glosa "GASTOS RECHAZADOS POR DONACIONES" 
            codigo "790" 
            tipo entero
            largo 15 
        }
        campo cod810 { 
            glosa "Agricultor Presunta Art 2¿ Tr. Ley 19.89" 
            codigo "810" 
            tipo string
            largo 40 
        }
        campo cod814 { 
            glosa "Ingresos por Enajenación de Bienes Físic" 
            codigo "814" 
            tipo entero
            largo 15 
        }
        campo cod831 { 
            glosa "Crédito por Impuesto Específico a la Minería" 
            codigo "831" 
            tipo entero
            largo 15 
        }
        campo cod857 { 
            glosa "Re-integro Dev.Anticipada" 
            codigo "857" 
            tipo entero
            largo 15 
        }
        campo cod858 { 
            glosa "Capital Propio Pat.Municipales" 
            codigo "858" 
            tipo entero
            largo 15 
        }
        campo cod861 { 
            glosa "Beneficio por Capacitacion" 
            codigo "861" 
            tipo entero
            largo 15 
        }
        campo cod864 { 
            glosa "Pagos Prov pagados crédito gastos  capac" 
            codigo "864" 
            tipo entero
            largo 15 
        }
        
        campo cod867 {             
            glosa "Crédito al IGC o IUSC por donaciones para fines sociales (Art. 1° bis Ley N° 19.885)."
            codigo "867" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod869 { 
            glosa "PERD EXIST E INV CAUSA TERREMOTO Y MAREM" 
            codigo "869" 
            tipo entero
            largo 15 
        }
        
        campo cod873 { 
            glosa "Total Gto.donaciones Art. 7 Ley 16.282" 
            codigo "873" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        
        campo cod888 { 
            glosa "Solicitud para acogerse al Art. 14 quáter LIR." 
            codigo "888" 
            tipo boolean
        }

        campo cod890 { 
            glosa "Sistema de contabilidad bajo Full IFRS" 
            codigo "890" 
            tipo string
            largo 40 
        }
        campo cod891 { 
            glosa "Sistema de contabilidad bajo IFRS Pyme" 
            codigo "891" 
            tipo string
            largo 40 
        }
        campo cod892 { 
            glosa "Sistema de contabilidad bajo PCGA" 
            codigo "892" 
            tipo string
            largo 40 
        }
        
        campo cod895 { 
            #glosa "Crédito al IGC o IUSC por gastos en educación, según art. 55 ter LIR" 
            glosa "Crédito al IGC o IUSC por gasto en educación (Art. 55 ter)."
            codigo "895" 
            tipo entero0
            largo 15 
        }
        
        campo cod896 { 
            glosa "Participaciones en ingresos brutos sociedades de profesionales de 2ª Categoría" 
            codigo "896" 
            tipo entero0
            largo 15 
        }
        
        campo cod897 { 
            glosa "Gastos por Inversión en Investigación y Desarrollo no certificados por Corfo" 
            codigo "897" 
            tipo entero0
            largo 15 
        }
        
        campo cod898 { 
            glosa "Crédito/Donaciones al FNR, según arts. 4° y 9° Ley N° 20.444 (no afectas al LGA)" 
            codigo "898" 
            tipo entero0
            largo 15 
        }
        
        campo cod899 { 
            glosa "Ret. Tot., según Arts. 84,88 y 89 LIR." 
            codigo "899" 
            caracterizable TRUE
            tipo entero
            largo 15 
        }
        campo cod900 { 
            #glosa "Cargo por cotizaciones previsionales, según arts. 89 y sgtes. D.L. N° 3.500 de 1980"
            glosa "Cargo por Cotizaciones Previsionales según arts.89 y sgtes. DL N° 3500/80."
            codigo "900" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        campo cod901 { 
            glosa "Cargo Cot. Prev. A89 y sgtes. DL3500/80." 
            codigo "901" 
            caracterizable TRUE
            tipo entero
            largo 15 
        }
        campo cod904 { 
            glosa "Crédito Impto. 1° Categ. informado en el ejercicio sin derecho a devolución" 
            codigo "904" 
            tipo entero0
            largo 15 
        }
        campo cod905 { 
            glosa "Impt. Único Primera Categoría (Tasa 20%)" 
            codigo "905" 
            tipo entero
            largo 15 
        }
        campo cod906 { 
            glosa "Impt. Único Pri. Categoría (Tasa 18,5%)" 
            codigo "906" 
            tipo entero
            largo 15 
        }
        campo cod915 { 
            glosa "FECHA VIGENCIA RESOLUCION" 
            codigo "915" 
            tipo fecha_dia
        }
        campo cod922 { 
            glosa "NUMERO DE RESOLUCION" 
            codigo "922" 
            tipo entero0
            largo 15 
        }
        campo cod995 { 
            glosa "CONDONACIONES" 
            codigo "995" 
            tipo fecha_dia
        }
        campo cod995 { 
            glosa "CONDONACIONES" 
            codigo "995" 
            tipo entero
            largo 15 
        }
        campo cod8772 { 
            glosa "Tipo declaracion (DP,FP)" 
            codigo "8772" 
            tipo entero
            largo 15 
        }
        campo cod8800 { 
            glosa "SECUENCIA RECTIFICATORIA INET" 
            codigo "8800" 
            tipo entero
            largo 15 
        }
        campo cod8844 { 
            glosa "Monto Pago" 
            codigo "8844" 
            tipo entero
            largo 15 
        }
        campo cod8850 { 
            glosa "INDICADOR DE PAGO DE MULTAS FP" 
            codigo "8850" 
            tipo entero
            largo 15 
        }
        campo cod8853 { 
            glosa "FOLIO FORMULARIO F01 (UCD)" 
            codigo "8853" 
            tipo entero
            largo 15 
        }
        campo cod8856 { 
            glosa "NUMERO DE PROCESO BANCO (INTERNET)" 
            codigo "8856" 
            tipo entero
            largo 15 
        }
        campo cod8857 { 
            glosa "ERROR EN SW LIGHT O TOTAL CODIGOS (INET)" 
            codigo "8857" 
            tipo entero
            largo 15 
        }
        campo cod8862 { 
            glosa "INDICADOR DE ANOTACION " 
            codigo "8862" 
            tipo entero
            largo 15 
        }
        campo cod8865 { 
            glosa "codigo 8865" 
            codigo "8865" 
            tipo entero
            largo 15 
        }
        campo cod8876 { 
            glosa "INDICADOR ZONA AFEC. TERREMOTO (tgr=5)" 
            codigo "8876" 
            tipo entero
            largo 15 
        }
        campo cod8891 { 
            glosa "TIPO CONTRIBUYENTE" 
            codigo "8891" 
            tipo entero
            largo 15 
        }
        campo cod8892 { 
            glosa "SUBTIPO CONTRIBUYENTE" 
            codigo "8892" 
            tipo entero
            largo 15 
        }
        campo cod9904 { 
            glosa "REMANENTE A DEVOLVER POR RESOLUCION" 
            codigo "9904" 
            tipo entero
            largo 15 
        }

        campo cod9916 { 
            glosa "PAGO EN EXCESO,A DEVOLVER POR RESOLUCION" 
            codigo "9916" 
            tipo entero
            largo 15 
        }
        campo cod9919 { 
            glosa "CODIGOS MODIFICADOS (BORRADOR INET)" 
            codigo "9919" 
            tipo string
            largo 40 
        }
        
        campo cod9999 { 
            glosa "Liberacion" 
            codigo "9999" 
            tipo entero
            largo 15 
        }
        campo cod8876 { 
            glosa "INDICADOR ZONA AFEC. TERREMOTO (tgr=5)" 
            codigo "8876" 
            tipo entero
            largo 15 
        }
        campo cod9916 { 
            glosa "PAGO EN EXCESO,A DEVOLVER POR RESOLUCION" 
            codigo "9916" 
            tipo entero
            largo 15 
        }

        campo cod9999 { 
            glosa "Liberacion" 
            codigo "9999" 
            tipo entero
            largo 15 
        }
        campo cod3039 { 
            glosa "Cargo por Cotizaciones" 
            codigo "3039" 
            tipo entero
            largo 15 
        }
        campo cod4039 { 
            glosa "Cargo por Cotizaciones Rebajado" 
            codigo "4039" 
            tipo entero
            largo 15 
        }

        #########################################################
        campo cod958 { 
            glosa "Rentas atribuidas propias y/o de terceros, provenientes de empresas sujetas al art. 14 ter letra A) LIR, cred sin restitución" 
            codigo "958" 
            tipo entero0
            largo 15 
        }

        campo cod959 { 
            glosa "Rentas atribuidas propias y/o de terceros, provenientes de empresas sujetas al art. 14 ter letra A) LIR" 
            codigo "959" 
            tipo entero0
            largo 15 
        }
        
        campo cod960 { 
            glosa "Impuesto Primera Categoría sobre rentas efectivas." 
            codigo "960" 
            tipo entero0
            largo 15 
        }
        
        campo cod961 { 
            glosa "IDPC sobre rentas efectivas." 
            codigo "961" 
            tipo entero0
            largo 15 
        }
        
        campo cod962 {
            glosa "IDPC sobre rentas efectivas."
            codigo "962"
            tipo entero0
            largo 15
            # POS (P84 * [960] ? [961])
            # formula{ PSTV(($p84*$cod960) - $cod961)}
            formula{ PSTV(ROUND_DECIMAL($p84 * $cod960,$decimales) - $cod961)}
        }
        
        campo cod963 {
            glosa "IDPC contribuyentes acogidos al régimen del art. 14 ter letra A) LIR, base."
            codigo "963"
            tipo entero0
            largo 15
        }
        
        campo cod964 {
            glosa "Rebaja IDPC letra A del artículo 14 Ter."
            codigo "964"
            tipo entero0
            largo 15
        }
        
        campo cod965 {
            glosa "IDPC contribuyentes acogidos al régimen del art. 14 ter letra A) LIR"
            codigo "965"
            tipo entero0
            largo 15
            # Si Vx012605 > 0, entonces [965] = 0. Si no, [965] = POS (P84 * [963] Â¿ [964])
            #formula { ($aVx012605 <= 0)?(PSTV($p84 * $cod963 - $cod964)):0 }
            formula { ($aVx012605 > 0) ? 0 : (PSTV(ROUND_DECIMAL($p84 * $cod963,$decimales) - $cod964)) }
        }
        
        campo cod966 {
            glosa "Gasto por  Donaciones "
            codigo "966"
            tipo entero0
            largo 15
        }
        campo cod967 {
            glosa "Otros Gastos Financieros"
            codigo "967"
            tipo entero0
            largo 15
        }
        campo cod968 {
            glosa "Gasto por Impuesto Renta e Impuesto Diferido."
            codigo "968"
            tipo entero0
            largo 15
        }
        campo cod969 {
            glosa "Gasto por adquisición en supermercados y negocios similares"
            codigo "969"
            tipo entero0
            largo 15
        }
        campo cod970 {
            glosa "Rentas tributables no reconocidas financieramente "
            codigo "970"
            tipo entero0
            largo 15
        }
        campo cod971 {
            glosa "Gastos agregados por donaciones"
            codigo "971"
            tipo entero0
            largo 15
        }

        campo cod973 {
            glosa "Gastos aceptados por donaciones"
            codigo "973"
            tipo entero0
            largo 15
        }
        
        campo cod974 {
            glosa "Renta imponible extranjera (art. 41 A  N° 3 LIR)"
            codigo "974"
            tipo entero0
            largo 15
        }
        
        campo cod975 {
            glosa "Gastos adeudados o pagados por cuotas de bienes en leasing"
            codigo "975"
            tipo entero0
            largo 15
        }
        
        campo cod976 {
            glosa "Total de cantidades adeudadas, pagadas o abonadas a relacionados en el exterior (arts. 31 inc. 3° y 59 LIR)"
            codigo "976"
            tipo entero0
            largo 15
        }
        campo cod977 {
            glosa "Cuentas por Cobrar  (por Ventas o Servicios)"
            codigo "977"
            tipo entero0
            largo 15
        }
        
        campo cod978 {
            glosa "Cantidades adeudadas, pagadas, abonadas en cuenta o puestas a disposición de relacionados en el exterior, cuyo IA no ha sido enterado (arts. 31 inc.  3° y 59 LIR)"
            codigo "978"
            tipo entero0
            largo 15
        }
        
        campo cod979 {
            glosa "FUT afectado con el Impuesto Sustitutivo"
            codigo "979"
            tipo entero0
            largo 15
        }
        
        campo cod980 {
            glosa "FUNT generado por FUT afectado con el de Impuesto Sustitutivo"
            codigo "980"
            tipo entero0
            largo 15
        }
        
        campo cod981 {
            glosa "Impuesto Sustitutivo que afecto al FUT Historico"
            codigo "981"
            tipo entero0
            largo 15
        }
        
        campo cod982 {
            glosa "Saldo FUR  (cuando no haya sido considerado dentro del valor del capital aportado a la empresa)"
            codigo "982"	
            tipo entero0
            largo 15
        }
        
        campo cod983 {
            glosa "Devoluciones de Capital propiamente tales, según N°7 Art. 17"
            codigo "983"
            tipo entero0
            largo 15
        }
        
        campo cod984 {
            glosa "Otras rebajas especiales"
            codigo "984"
            tipo entero0
            largo 15
        }
        
        campo cod985 {
            glosa "Ventas de relacionados expresadas en toneladas métricas de cobre fino, según ex art. 64 bis LIR"
            codigo "985"
            tipo entero0
            largo 15
        }
        
        campo cod986 {
            glosa "Total Gasto/Donaciones para fines culturales, según art. 8° Ley N° 18.985 (afectas al LGA)"
            codigo "986"
            tipo entero0
            largo 15
        }
        
        campo cod987 {
            glosa "Total Gasto/Donaciones para fines educacionales, según art. 3° Ley N° 19.247 (afectas al LGA)"
            codigo "987"
            tipo entero0
            largo 15
        }
        
        campo cod988 {
            glosa "Total, Gasto/Donaciones para fines deportivos, según art. 62 y sgtes. Ley N° 19.712 (afecta al LGA)"
            codigo "988"
            tipo entero0
            largo 15
        }
        
        campo cod989 {
            glosa "Total gasto/ Donaciones a universidades e institutos profesionales, según art. 69 Ley N° 18.681 (afectas al LGA)"
            codigo "989"
            tipo entero0
            largo 15
        }
        
        campo cod990 {
            glosa "Gasto Rechazado/ Donaciones para fines culturales, según art. 8° Ley N° 18.985 (afectas al LGA)"
            codigo "990"
            tipo entero0
            largo 15
        }
        
        campo cod991 {
            glosa "Gasto Rechazado/ Donaciones para fines educacionales, según art. 3° Ley N° 19.247 (afectas al LGA)"
            codigo "991"
            tipo entero0
            largo 15
        }
        campo cod992 {
            glosa "NUMERO DE RESOLUCION"
            codigo "992"
            tipo entero
            largo 15
        }
        campo cod993 {
            glosa "Gasto Rechazado/Donaciones a universidades e institutos profesionales, según art. 69 Ley N° 18.681 (afectas al LGA)"
            codigo "993"
            tipo entero0
            largo 15
        }
        campo cod994 {
            glosa "Total Gasto/Donaciones al FNR, según arts. 4° y 9° Ley N° 20.444 (no afectas al LGA)"
            codigo "994"
            tipo entero0
            largo 15
        }
        campo cod995 {
            glosa "Respaldo 995"
            codigo "995"
            tipo entero
            largo 15
        }
        campo cod996 {
            glosa "PERIODO TRIBUTARIO (BATCH)"
            codigo "996"
            tipo entero
            largo 15
        }
        campo cod997 {
            glosa "NUMERO CAJA (BATCH)"
            codigo "997"
            tipo entero
            largo 15
        }
        campo cod998 {
            glosa "Imputado en el Ejercicio / Donaciones para fines culturales según art. 8° Ley N° 18.985"
            codigo "998"
            tipo entero0
            largo 15
        }
        campo cod999 {
            glosa "Remanente año anterior/ Donaciones para fines culturales según art. 8° Ley N° 18.985"
            codigo "999"
            tipo entero0
            largo 15
        }
        campo cod1000 {
            glosa "Gasto Goodwill Tributario"
            codigo "1000"
            tipo entero0
            largo 15
        }
        campo cod1001 {
            glosa "Gasto Rechazado/ Donaciones para fines deportivos, según art. 62 y sgtes. Ley N° 19.712 (afecta al LGA)"
            codigo "1001"
            tipo entero0
            largo 15
        }
        campo cod1002 {
            glosa "Gasto Rechazado/ Donaciones, según art. 7° Ley N° 16.282 (no afectas al LGA)"
            codigo "1002"
            tipo entero0
            largo 15
        }
        campo cod1003 {
            glosa "Activo Gasto Diferido Goodwill Tributario"
            codigo "1003"
            tipo entero0
            largo 15
        }
        campo cod1004 {
            glosa "Activo intangible goodwill tributario (Ley N° 20.780)"
            codigo "1004"
            tipo entero0
            largo 15
        }
        campo cod1005 {
            glosa "Utilidades financieras capitalizadas "
            codigo "1005"
            tipo entero0
            largo 15
        }
        campo cod1006 {
            glosa "Remanente por impuestos extranjeros, según Arts. 41 A y 41 C"
            codigo "1006"
            tipo entero0
            largo 15
        }
        campo cod1007 {
            glosa "Credito / Impuesto único de 40% sobre gastos rechazados y otras partidas, según art. 21 inc. 1°, art. 14 letra A) N° 9 LIR"
            codigo "1007"
            tipo entero0
            largo 15
        }
        
        campo cod1008 {
            glosa "Saldo de rentas tributables acumuladas / Saldo de ingreso diferido pendiente de tributación correspondiente a lo dispuesto en el ex art. 14 ter letra A) N° 2 LIR "
            codigo "1008"
            tipo entero0
            largo 15
        }
        
        campo cod1009 {
            glosa "Incremento/Saldo de ingreso diferido pendiente de tributación correspondiente a lo dispuesto en el ex art. 14 ter letra A) N° 2 LIR "
            codigo "1009"
            tipo entero0
            largo 15
        }
        
        campo cod1010 {
            glosa "Crédito  No sujeto a restitución/ Saldo de ingreso diferido pendiente de tributación correspondiente a lo dispuesto en el ex art. 14 ter letra A) N° 2 LIR "
            codigo "1010"
            tipo entero0
            largo 15
        }
        
        campo cod1011 {
            glosa "Saldo Rentas tributables acumulada/ Ingreso  diferido a  imputar  en  el ejercicio "
            codigo "1011"
            tipo entero0
            largo 15
        }
        
        campo cod1012 {
            glosa "Incremento/ Ingreso  diferido a  imputar  en  el ejercicio "
            codigo "1012"
            tipo entero0
            largo 15
        }
        
        campo cod1013 {
            glosa "Crédito No sujeto a restitución/ Ingreso  diferido a  imputar  en  el ejercicio"
            codigo "1013"
            tipo entero0
            largo 15
        }
        
        campo cod1014 {
            glosa "Impuesto sustitutivo sobre rentas acumuladas "
            codigo "1014"
            tipo entero0
            largo 15
        }
        campo cod1015 {
            glosa "Impuesto sustitutivo sobre rentas acumuladas "
            codigo "1015"
            tipo entero0
            largo 15
        }
        campo cod1016 {
            glosa "Impuesto sustitutivo sobre rentas acumuladas "
            codigo "1016"
            tipo entero0
            largo 15
        }
        
        campo cod1017 {
            glosa "IGC sobre intereses y otros rendimientos, según art. 54 bis LIR" 
            codigo "1017"
            tipo entero0
            largo 15
        }
        
        campo cod1018 {
            glosa "Crédito al IUSC o IGC por impuestos soportados en el exterior, según arts. 41 A N°4 letra B) o N° 5 LIR"
            codigo "1018"
            tipo entero0
            largo 15
        }
        
        campo cod1019 {
            glosa "Beneficio antes de Gastos Financieros (EBITDA)"
            codigo "1019"
            tipo entero
            largo 15
        }
        
        campo cod1020 {
            glosa "Total Pasivos Contraídos en Chile"
            codigo "1020"
            tipo entero0
            largo 15
        }

        campo cod1021 {
            glosa "Monto del capital  directa o indirectamente financiado por partes relacionadas"
            codigo "1021"
            tipo entero0
            largo 15
        }	
        
        campo cod1022 {
            glosa "Crédito por IDPC por retiros o dividendos percibidos e ingreso diferido de empresas acogidas al régimen del art. 14 ter letra A) LIR"
            codigo "1022"
            tipo entero0
            largo 15
        }
        
        campo cod1023 {
            glosa "Diferencia entre el CPT y el capital aportado, FUT, FUNT y FUR "
            codigo "1023"
            tipo entero
            largo 15
        }
        
        ### nuevosCodigos 2018
        
        campo cod1024 {
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ CON OBLIGACIÓN DE RESTITUCIÓN/ Con derecho a devolución"
            codigo "1024"
            tipo entero0
            largo 15
        }
        
        campo cod1025 {
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ SIN OBLIGACIÓN DE RESTITUCIÓN/ Con derecho a devolución"
            codigo "1025"
            tipo entero0
            largo 15
        }
        
        campo cod1026 {
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ CON OBLIGACIÓN DE RESTITUCIÓN/ Con derecho a devolución"
            codigo "1026"
            tipo entero0
            largo 15
        }
        
        campo cod1027 {
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ SIN OBLIGACIÓN DE RESTITUCIÓN/ Con derecho a devolución"
            codigo "1027"
            tipo entero0
            largo 15
        }
        
        campo cod1028 {
            glosa "Rentas atribuidas propias y/o de terceros, provenientes de empresas que determinan su renta efectiva con contabilidad completa, según art. 14 letra A) LIR"
            codigo "1028"
            tipo entero0
            largo 15
        }
        
        campo cod1029 {
            glosa "Rentas atribuidas propias y/o de terceros, provenientes de empresas que determinan su renta efectiva con contabilidad completa, según art. 14 letra A) LIR"
            codigo "1029"
            tipo entero0
            largo 15
        }
        
        campo cod1030 {
            glosa "Sueldos y otras rentas similares de fuente extranjera"
            codigo "1030"
            tipo entero0
            largo 15
        }
        
        campo cod1031 {
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A / SIN OBLIGACIÓN DE RESTITUCIÓN / Con derecho a devolución / Otras rentas de fuente chilena afectas al IGC o IA (según instrucciones), cred"
            codigo "1031"
            tipo entero0
            largo 15
        }
        
        campo cod1032 {            
            glosa "Otras rentas de fuente chilena afecta a IGC o IA."
            codigo "1032"
            tipo entero0
            largo 15
        }
        
        campo cod1033 {
            glosa "Reliquidación IGC por ganancias de capital, según art. 17 N° 8 letras a) literal v) y b) LIR"
            codigo "1033"
            tipo entero0
            largo 15
        }
        
        campo cod1034 {
            glosa "Reliquidación IGC por término de giro de empresas acogidas al régimen de los arts. 14 letra A) o 14 ter letra A), según art. 38 bis N° 3 LIR"
            codigo "1034"
            tipo entero0
            largo 15
        }
        
        campo cod1035 {
            glosa "Débito Fiscal por restitución crédito por Impuesto de Primera Categoría, según inciso final Art. 56."
            codigo "1035"
            tipo entero0
            largo 15
            caracterizable TRUE
        }
        
        campo cod1036 {
            glosa "Crédito al IGC, según art. 52 bis LIR"
            codigo "1036"
            tipo entero0
            largo 15
        }
        
        campo cod1037 {
            glosa "IDPC sobre rentas efectivas determinadas sin contabilidad completa, base"
            codigo "1037"
            tipo entero0
            #[1037]	= [1892]   + [1895]   + [1898]   + [1901]   + [1912]
            formula { $cod1892 + $cod1895 + $cod1898 + $cod1901 + $cod1912}
            largo 15
        }

        campo cod1107 {
            glosa "REBAJAS AL IMPUESTO /Impuesto Único de 40% sobre gastos rechazados y otras partidas de acuerdo al art. 21 inc. 1°, art. 14 letra A) N° 9 LIR y al art. 32° transitorio Ley N° 21.210"
            codigo "1107"
            tipo entero0
            largo 15
        }
        
        campo cod1038 {
            glosa "IDPC sobre rentas efectivas determinadas sin contabilidad completa, rebaja"
            codigo "1038"
            tipo entero0
            #[1038]	= [1893]    + [1899]   + [1902]   + [1918]
            formula { $cod1893 + $cod1899 + $cod1902 + $cod1918}
            largo 15
        }

        #b.83
        #[1109]	=	"Si (Pos {[1690]} > P720  .y. TIPO{[03]} = 1 .y. atributo = M14A) .o. ([1690] > 0 .y. TIPO {[03]} = 2, 3, 4, 5, 6, 7, 8  .y. atributo = M14A); entonces [1690]
        #Sino 0"
        #Sino; 0
        campo cod1109 {
            glosa "Renta líquida imponible afecta a IDPC o pérdida tributaria del ejercicio"
            codigo "1109"
            tipo entero0
            largo 15
            formula {( (PSTV($cod1690) > $p720  AND $auxRut < 50000000 AND ($aM14A!=0)) OR ( $cod1690 >0 AND IN_LIST($tipoContribuyente, "2|3|4|5|6|7|8")  AND ($aM14A!=0))) ? $cod1690 : 0 }
        }

        campo cod1111 {
            glosa "REBAJA AL IMPUESTO IDPC de empresas acogidas al régimen de imputación parcial de créditos, según art. 14 letra A) LIR"
            codigo "1111"
            tipo entero0
            largo 15
            #b.88	[1111]	=	"Si {atributo = M14A .y. ([898] + [373] + [382] + [761] + [773] + [365] + [366] + [392] + [1153] + [984] + [839] + [384] + [390] + [742] + [841] + [855]) > 0}; entonces Min {([1109] * P647); ([898] + [373] + [382] + [761] + [773] + [365] + [366] + [392] + [1153] + [984] + [839] + [384] + [390] + [742] + [841] + [855])}
            #Sino 0"
            formula { ($aM14A!=0 AND ($cod898 + $cod373 + $cod382 + $cod761 + $cod773 + $cod365 + $cod366 + $cod392 + $cod1153 + $cod984 + $cod839 + $cod384 + $cod390 + $cod742 + $cod841 + $cod855)>0) ? MINL( ROUND_DECIMAL($cod1109 * $p647,$decimales) ,($cod898 + $cod373 + $cod382 + $cod761 + $cod773 + $cod365 + $cod366 + $cod392 + $cod1153 + $cod984 + $cod839 + $cod384 + $cod390 + $cod742 + $cod841 + $cod855)):0} 

        }

        campo cod1113 {
            glosa "IDPC de empresas acogidas al régimen de imputación parcial de créditos, según art. 14 letra A) LIR"
            codigo "1113"
            tipo entero0
            largo 15
            #[1113]	=	POS(P647 * [1109] Â¿ [1111])
            formula { ROUND_DECIMAL(PSTV(($p647 * $cod1109) - $cod1111),$decimales)      }
        }

        campo cod1114 {
            glosa "Renta percibida en el ejercicio por enajenaciones efectuadas en ejercicio anterior"
            codigo "1114"
            tipo entero0
            largo 15
        }

        campo cod1118 {
            glosa "Renta Líquida Imponible Negativa del Ejercicio"
            codigo "1118"
            tipo entero0
            largo 15
        }

        campo cod1119 {
            glosa "Pérdida Tributaria de Ejercicios Anteriores Actualizada"
            codigo "1119"
            tipo entero0
            largo 15
        }
        campo cod1120 {
            glosa "Otras donaciones / Total gasto / Donaciones, según art. 37 D.L. N° 1.939 de 1977 (no afectas al LGA) y según art. 68 Ley N° 19.300 (no afectas al LGA)"
            codigo "1120"
            tipo entero0
            largo 15
        }
        campo cod1121 {
            glosa "Otras donaciones / Gasto no aceptado / Donaciones, según art. 37 D.L. N° 1.939 de 1977 (no afectas al LGA) y según art. 68 Ley N° 19.300 (no afectas al LGA)"
            codigo "1121"
            tipo entero0
            largo 15
        }
        campo cod1122 {
            glosa "Total Gasto/ Donaciones, según Ley N° 21.015 (no afectas al LGA)"
            codigo "1122"
            tipo entero0
            largo 15
        }

        campo cod1123 {
            glosa "Crédito por desembolsos directos por trazabilidad (art. 60 quinquies Código Tributario)"
            codigo "1123"
            tipo entero0
            largo 15
        }
        campo cod1124 {
            glosa "Gastos rechazados por donaciones según Ley Nº 21.015"
            codigo "1124"
            tipo entero0
            largo 15
        }
        campo cod1125 {
            glosa "Totalizador L74"
            codigo "1125"
            tipo entero0
            largo 15
            #[1125]	=	[82] + [1123]
            #formula { $cod82 + $cod1123}
        }
    
        campo cod1039 {
            #glosa "IDPC sobre rentas efectivas determinadas sin contabilidad completa"
            glosa "IDPC sobre rentas efectivas determinadas sin contabilidad completa. (Ver Detalle)"
            codigo "1039"
            tipo entero0
            largo 15
            caracterizable TRUE
            #[1039]	= [1894]   + [1897]   + [1900]   + [1903]   + [1913]
            formula { $cod1894 + $cod1897 + $cod1900 + $cod1903 + $cod1913}
        }
        
        campo cod1040 {
            glosa "Pago voluntario a título de IDPC, según art. 14 letra A) N° 6 LIR"
            codigo "1040"
            tipo entero0
            largo 15
        }
        
        campo cod1041 {
            glosa "Pago voluntario a título de IDPC, según art. 14 letra A) N° 5 y letra B) N° 3 LIR"
            codigo "1041"
            tipo entero0
            largo 15
            #[1041]	= Si (atributo = M14A);  entonces POS {P647 * [1040]}
            #Sino POS {P704 * [1040]}
            formula { ($aM14A == 1) ? ROUND_DECIMAL(PSTV($p647 * $cod1040),$decimales) : ROUND_DECIMAL(PSTV($p704 * $cod1040),$decimales) } 
        }
        
        campo cod1042 {
            glosa "Diferencia de créditos por IDPC otorgados en forma indebida o en exceso, según art. 14 letra A) N° 7 LIR "
            codigo "1042"
            tipo entero0
            largo 15
        }
        
        campo cod1043 {
            glosa "Base imponible / Impuesto único de 10% por enajenación de bienes raíces, según art. 17 N° 8 letra b) LIR y/o art. 4 Ley N° 21.078"
            codigo "1043"
            tipo entero0
            largo 15
            caracterizable TRUE
            #[1043]	=	[1065]
            formula { $cod1065 }
        }

        campo cod1044 {            
            glosa "Impuesto Único de 10% por enajenación de bienes raíces, según letra b) N° 8 del Art. 17 y/o Art. 4 Ley  N° 21.078."
            codigo "1044"
            tipo entero0
            largo 15
            caracterizable TRUE
            #[1044]	=	POS {(P24 * [1043]) - [1102]}
            formula { ROUND_DECIMAL(PSTV(($p24 * $cod1043) - $cod1102),$decimales) } 
        }
        
        campo cod1045 {
            glosa "Impuesto Único de 40% sobre retiros o dividendos y rentas atribuidas, por incumplimiento de composición societaria, según arts. 14 letra D) N° 1 letra c), 14 ter letra A) N° 6 letra b) y 21 inc. 3° LIR, base."
            codigo "1045"
            tipo entero0
            largo 15
        }
        
        campo cod1046 {
            glosa "Impuesto Único de 40% sobre retiros o dividendos y rentas atribuidas, por incumplimiento de composición societaria, según arts. 14 letra D) N° 1 letra c), 14 ter letra A) N° 6 letra b) y 21 inc. 3° LIR, rebaja."
            codigo "1046"
            tipo entero0
            largo 15
        }
        
        campo cod1047 {
            glosa "Impuesto Único de 40% sobre retiros o dividendos y rentas atribuidas, por incumplimiento de composición societaria, según arts. 14 letra D) N° 1 letra c), 14 ter letra A) N° 6 letra b) y 21 inc. 3° LIR"
            codigo "1047"
            tipo entero0
            largo 15
            caracterizable TRUE
            formula { ROUND_DECIMAL(PSTV(($p28 * $cod1045) - $cod1046),$decimales) }
        }
        
        campo cod1048 {
            glosa "Retención de IA sobre remesas al exterior efectuadas por empresas acogidas al régimen del art. 14 letra A), según art. 74 Nº 4 inc. 2º LIR"
            codigo "1048"
            tipo entero0
            caracterizable TRUE
            largo 15
        }
        
        campo cod1049 {
            glosa "Retención de IA sobre rentas atribuidas por empresas acogidas al régimen del art. 14 letra A), según art. 74 N° 4 inc. 6° LIR"
            codigo "1049"
            tipo entero0
            caracterizable TRUE
            largo 15
        }
        
        campo cod1050 {
            glosa "suma códigos [1048] y [1049]"
            codigo "1050"
            tipo entero0
            caracterizable TRUE
            largo 15
            formula { ($cod1048 + $cod1049) }
        }
        
        campo cod1051 {
            glosa "Retención del IA sobre rentas asignadas empresas acogidas al régimen de los arts. 14 letra B) N° 1, 2 y/o 14 letra D) N° 8, según art. 74 N° 4 LIR"
            codigo "1051"
            tipo entero0
            caracterizable TRUE
            largo 15
        }
        
        campo cod1052 {
            glosa "Débito fiscal por restitución crédito por IDPC, según art. 63 inc. 3° LIR"
            codigo "1052"
            tipo entero0
            caracterizable TRUE
            largo 15
        }
        
        campo cod1053 {
            glosa "suma códigos [1051] y [1052]"
            codigo "1053"
            tipo entero0
            caracterizable TRUE
            largo 15
            #[1053]	=	[1051] + [1052]
            #formula { ($cod1051 + $cod1052) }
        }
        
        campo cod1054 {
            glosa "Régimen sin contabilidad completa (Art. 14 letra C) N° 1 LIR"
            codigo "1054"
            tipo entero
            largo 15
        }
        
        campo cod1055 {
            glosa "Precios de enajenaciones del conjunto de los bienes raíces / según art. 17 N°8 letra b) de la LIR."
            codigo "1055"
            tipo entero0
            largo 15
        }
        
        campo cod1056 {
            glosa "Menos: valor de adquisición de los bienes raíces reajustados"
            codigo "1056"
            tipo entero0
            largo 15
        }
        
        campo cod1057 {
            glosa "Menos: Mejoras que hayan aumentado el valor de los bienes raíces reajustadas"
            codigo "1057"
            tipo entero0
            largo 15
        }
        
        campo cod1058 {
            glosa "Mayor o menor percibido o devengado"
            codigo "1058"
            caracterizable TRUE
            tipo entero
            largo 15
            #[1058]	=	{[1055] - [1056] - [1057]}
            formula { $cod1055 - $cod1056 - $cod1057 }
        }
        
        campo cod1060 {
            glosa "Menos: ingreso no renta equivalente a 8.000 UF o saldo del ejercicio anterior"
            codigo "1060"
            tipo entero0
            largo 15
            caracterizable TRUE
            #formula { ($cod1055 > 0)?($p656):0 }
        }
        
        campo cod1061 {
            glosa "Mayor valor percibido o devengado afecto a impuesto"
            codigo "1061"
            tipo entero0
            largo 15
            caracterizable TRUE
            #[1061]	=	Si [1058] - [1060] > 0, entonces: POS([1058] - [1060]) Sino:[1061] = 0 
            formula { ($cod1058 - $cod1060 > 0)?(PSTV($cod1058 - $cod1060)):0 }
        }
        
        campo cod1062 {
            glosa "Saldo de Ingreso No Renta a utilizar en los ejercicios siguientes"
            codigo "1062"
            tipo entero0
            largo 15
            caracterizable TRUE
            #           [1062]	=	"Si [1058] ? 0; entonces [1060]
            #                            Sino POS {[1060] - [1058]}"
            formula { ($cod1058 < 0) ? ($cod1060) : PSTV($cod1060 - $cod1058) }
        }
        
        campo cod1063 {
            glosa "Mayor valor percibido según códigos 1099, 1114, o devengado según código1987 afectos al IGC o IA, trasladar a códigos 1891; según código 1988 afecto a IDPC e IGC o IA a trasladar a código 1895 o 1912, y a código 1891 / según art. 17 N°8 letra b) de la LIR"
            codigo "1063"
            tipo entero0
            largo 15
        }
        
        campo cod1064 {
            glosa "Mayor valor devengado según código 1061 anterior afecto a IGC a reliquidar, según instrucciones código 1033"
            codigo "1064"
            tipo entero0
            largo 15
        }
        
        campo cod1065 {
            glosa "Mayor valor percibido según códigos 1099 y 1114 anteriores afecto al impuesto único y sustitutivo con tasa 10%, a trasladar a código 1043"
            codigo "1065"
            tipo entero0
            largo 15
        }
        
        #[1066]	=	[938] + [949] + [1158] - [950]
        campo cod1066 {
            glosa "Diferencia entre depreciaciones aceleradas y/o instantáneas y normales del ejercicio, anteriores"
            codigo "1066"
            caracterizable TRUE
            tipo entero
            largo 15
            formula { $cod938 + $cod949 + $cod1158 - $cod950 } 
        }
        
        campo cod1067 {
            glosa "ENAJENACIÓN DE ACCIONES / N° acciones enajenadas / IGC o IA sobre rentas percibidas, según código 155"
            codigo "1067"
            tipo entero0
            largo 15
        }
        
        campo cod1068 {
            glosa "ENAJENACIÓN DE ACCIONES / Precio o valor de enajenación / IGC o IA sobre rentas percibidas, según código 155"
            codigo "1068"
            tipo entero0
            largo 15
        }
        
        campo cod1069 {
            glosa "ENAJENACIÓN DE ACCIONES / Costo tributario actualizado / IGC o IA sobre rentas percibidas, según código 155"
            codigo "1069"
            tipo entero0
            largo 15
        }
        
        campo cod1070 {
            glosa "Enajenación de acciones / Mayor o menor valor determinado / IGC o IA sobre rentas percibidas, según código 155"
            codigo "1070"
            tipo entero
            largo 15
            #a.174	[1070]	=	[1068] - [1069]
            #formula { $cod1068 - $cod1069 } 
        }
        
        campo cod1071 {
            glosa "ENAJENACIÓN DE ACCIONES / N° acciones enajenadas/ Opción por IGC a reliquidar sobre renta devengada según código 1033"
            codigo "1071"
            tipo entero0
            largo 15
        }
        
        campo cod1072 {
            glosa "ENAJENACIÓN DE ACCIONES / Precio o valor  de enajenación/ Opción por IGC a reliquidar sobre renta devengada según código 1033"
            codigo "1072"
            tipo entero0
            largo 15
        }
        
        campo cod1073 {
            glosa "ENAJENACIÓN DE ACCIONES / Costo tributario actualizado/ Opción por IGC a reliquidar sobre renta devengada según código 1033"
            codigo "1073"
            tipo entero0
            largo 15
        }
        
        campo cod1074 {
            glosa "Enajenación de acciones /  Mayor o menor valor determinado / Opción por IGC a reliquidar sobre renta devengada según código 1033"
            codigo "1074"
            tipo entero
            largo 15
            #a.175	[1074]	=	[1072] - [1073]
            #formula { $cod1072 - $cod1073 } 
        }
        
        campo cod1076 {
            glosa "Enajenacion Derechos sociales / N°  de operaciones de derechos sociales enajenados / IGC o IA sobre rentas percibidas, según código 155"
            codigo "1076"
            tipo entero0
            largo 15
        }
        
        campo cod1077 {
            glosa "Enajenacion Derechos sociales / Precio o valor de enajenación / IGC o IA sobre rentas percibidas, según código 155"
            codigo "1077"
            tipo entero0
            largo 15
        }
        
        campo cod1078 {
            glosa "Enajenacion Derechos sociales / Costo tributario actualizado / IGC o IA sobre rentas percibidas, según código 155"
            codigo "1078"
            tipo entero0
            largo 15
        }
        
        campo cod1079 {
            glosa "Enajenacion Derechos sociales /  Mayor o menor valor determinado / IGC o IA sobre rentas percibidas, según código 155"
            codigo "1079"
            tipo entero
            largo 15
            #a.176	[1079]	=	[1077] - [1078]
            #formula { $cod1077 - $cod1078 } 

        }
        
        campo cod1080 {
            glosa "N° de operaciones de derechos sociales enajenados/Opción por IGC a reliquidar sobre renta devengada según código 1033"
            codigo "1080"
            tipo entero0
            largo 15
        }
        
        campo cod1081 {
            glosa "Precio o valor de enajenación/ Opción por IGC a reliquidar sobre renta devengada según código 1033"
            codigo "1081"
            tipo entero0
            largo 15
        }
        
        campo cod1082 {
            glosa "Costo tributario actualizado/ Opción por IGC a reliquidar sobre renta devengada según código 1033"
            codigo "1082"
            tipo entero0
            largo 15
        }
        
        campo cod1083 {
            glosa "Enajenacion Derechos sociales / Mayor o menor valor determinado /Opción por IGC a reliquidar sobre renta devengada según código 1033"
            codigo "1083"
            tipo entero
            largo 15
            #a.177	[1083]	=	[1081] - [1082]
            #formula { $cod1081 - $cod1082 } 
        }
        
        campo cod1084 {
            glosa "N acc  IGC o IA rtas percibidas cód.155"
            codigo "1084"
            tipo entero0
            largo 15
        }
        
        campo cod1085 {
            glosa "Precio IGC o IA rtas percibidas cód.155"
            codigo "1085"
            tipo entero0
            largo 15
        }
        
        campo cod1086 {
            glosa "Costo trib  IGC o IA rtas percibidas cód.155"
            codigo "1086"
            tipo entero0
            largo 15
        }
        
        campo cod1087 {
            glosa "Enajenación o rescate de cuotas de fondos mutuos y/o fondos de inversión /  Mayor o menor valor determinado / IGC o IA sobre rentas percibidas, según código 155"
            codigo "1087"
            tipo entero
            largo 15
            #a.178	[1087]	=	[1085] - [1086]
            #formula { $cod1085 - $cod1086 } 
        }
        
        campo cod1088 {
            glosa "N° Cuota de FFMM régimen Art107 LIR"
            codigo "1088"
            tipo entero0
            largo 15
        }
        
        campo cod1089 {
            glosa "Monto vta de FFMM régimen Art107 LIR"
            codigo "1089"
            tipo entero0
            largo 15
        }

        campo cod1092 {
            glosa "Crédito por IDPC por retiros y dividendos afectos a los IGC o IA percibidos por empresas acogidas al régimen del art. 14 letra A) LIR, de empresas acogidas a dicho régimen"
            codigo "1092"
            tipo entero0
            largo 15
        }
        
        campo cod1093 {
            glosa "Crédito por IDPC por retiros y dividendos afectos a los IGC o IA percibidos por empresas acogidas al régimen del art. 14 letra A) LIR, de empresas acogidas al régimen del art. 14 letra B) de dicha ley, sin obligación de restitución"
            codigo "1093"
            tipo entero0
            largo 15
        }
        
        campo cod1094 {
            glosa "Crédito por IDPC equivalente al 65% por retiros y dividendos afectos a los IGC o IA percibidos por empresas acogidas al régimen del art. 14 letra A) LIR, de empresas acogidas al régimen del art. 14 letra B) de dicha ley"
            codigo "1094"
            tipo entero0
            largo 15
        }
        
        campo cod1095 {
            glosa "Crédito por IDPC por pago voluntario por retiros y dividendos afectos a los IGC o IA percibidos por empresas acogidas al régimen del art. 14 letra A) LIR, de empresas acogidas al régimen del art. 14 letras A) o B) de dicha ley"
            codigo "1095"
            tipo entero0
            largo 15
        }
        
        campo cod1096 {
            glosa "Saldo rentas tributables acumuladas/TOTAL Saldo ingreso diferido a imputar en los ejercicios siguientes"
            codigo "1096"
            tipo entero0
            largo 15
            #[1096]	= Pos (   [1008]-    [1011]+    [1358]-    [1184]+    [1365]-    [1185])
            formula { PSTV($cod1008 - $cod1011 + $cod1358 - $cod1184 + $cod1365 - $cod1185)}
        }
        
        campo cod1097 {
            glosa "Incremento / TOTAL Saldo ingreso diferido a imputar en los ejercicios siguientes"
            codigo "1097"
            tipo entero0
            largo 15
            #[1097]	= Pos (   [1009]-    [1012]+    [1359]-    [1362]+    [1366]-    [1369])
            formula { PSTV($cod1009 - $cod1012 + $cod1359 - $cod1362 + $cod1366 - $cod1369)}
        }
        
        campo cod1098 {
            glosa "Sueldos, pensiones y otras rentas similares de fuente nacional"
            codigo "1098"
            tipo entero0
            largo 15
        }
        
        campo cod1099 {
            glosa "Mayor valor percibido en enajenaciones efectuadas en el ejercicio"
            codigo "1099"
            tipo entero0
            largo 15
        }

        #a.42	[1100] 	=	POS {[1061] - [1099] - [1847]}
        campo cod1100 {
            glosa "Mayor valor devengado y no percibido a declarar en los años tributarios siguientes "
            codigo "1100"
            tipo entero0
            largo 15
            formula { PSTV($cod1061 - $cod1099 - $cod1847) }
        }
        
        campo cod1101 {
            glosa "Crédito por asignaciones por causa de muerte Ley N° 16.271, según art. 17 N° 8 letra b) literal vi) LIR"
            codigo "1101"
            tipo entero0
            largo 15
        }
        
        campo cod1102 {
            glosa "Credito / Impuesto único de 10% por enajenación de bienes raíces, según art. 17 N° 8 letra b) LIR y/o art. 4 Ley N° 21.078"
            codigo "1102"
            tipo entero0
            largo 15
        }
        
        campo cod1103 {
            glosa "Otras Rentas de fuente extranjera afectas al IGC ó IA (según instrucciones)."
            codigo "1103"
            tipo entero0
            largo 15
        }
        
        campo cod1104 {
            glosa "Otras rentas de fuente extranjera afectas al IGC o IA (según instrucciones), rtas y rebajas"
            codigo "1104"
            tipo entero0
            largo 15
        }
        
        campo cod1105 {
            glosa "Rentas exentas del IGC, según art. 54 N° 3 LIR, cred con restitución"
            codigo "1105"
            tipo entero0
            #[1105]	=	[1875] + [1880] + [1886]
            formula { $cod1875 + $cod1880 + $cod1886}
            largo 15
        }
        
        campo cod1106 {
            glosa "Crédito No sujeto a restitución/ TOTAL Saldo ingreso diferido a imputar en los ejercicios siguientes"
            codigo "1106"
            tipo entero0
            largo 15
            #[1106]	=  Pos(   [1010]-    [1013]+    [1360]-    [1363]+    [1367]-    [1370])
            formula { PSTV($cod1010 - $cod1013 + $cod1360 - $cod1363 + $cod1367 - $cod1370)}
        }

        campo cod1128 {
            glosa "N° cuotas de fondos mutuos y/o fondo de inversión enajenados o rescatados/Opción por IGC a reliquidar sobre renta devengada según código 1033"
            codigo "1128"
            tipo entero0
            largo 15
        }

        campo cod1129 {
            glosa "Precio o valor de enajenación/ Opción por IGC a reliquidar sobre renta devengada según código 1033"
            codigo "1129"
            tipo entero0
            largo 15
        }

        campo cod1130 {
            glosa "Costo tributario actualizado/ Opción por IGC a reliquidar sobre renta devengada según código 1033"
            codigo "1130"
            tipo entero0
            largo 15
        }

        campo cod1131 {
            glosa "Enajenación o rescate de cuotas de fondos mutuos y/o fondos de inversión /  Mayor o menor valor determinado / Opción por IGC a reliquidar sobre renta devengada según código 1033"
            codigo "1131"
            tipo entero
            largo 15
            #a.179	[1131]	=	[1129] - [1130]
            #formula { $cod1129 - $cod1130 }
        }

        campo cod1132 { 
            glosa "Reintegro de devolución anticipada de impuesto a la renta, según art. primero N° 2 Ley N° 21.207" 
            codigo "1132" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
    
        campo cod1133 { 
            glosa "IDPC sobre diferencia positiva de renta líquida imponible por rectificación del capital propio tributario, según art. 32º transitorio Ley Nº 21.210" 
            codigo "1133" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        campo cod1134 { 
            glosa "Impuesto Único y Sustitutivo de 20% sobre diferencia de capital propio tributario, según art. 32º transitorio Ley Nº 21.210" 
            codigo "1134" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        campo cod1135 { 
            glosa "" 
            codigo "1135" 
            caracterizable TRUE
            tipo entero0
            largo 15 
        }
        campo cod1136 { 
            glosa "" 
            codigo "1136" 
            caracterizable TRUE
            tipo entero0
        #[1136]	=	[1134]*P22
        #formula{ ROUND_DECIMAL($cod1134 * $p22,$decimales) } 
            largo 15 
        }
        campo cod1137 { 
            glosa "Saldo de crédito por IDPC en carácter de voluntario por rectificación del capital propio tributario, según art. 32° transitorio Ley N° 21.210" 
            codigo "1137" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1138 { 
            glosa "Depreciación instántanea por el 100% del valor de adquisición del bien físico del activo inmovilizado, adquirido en el ejercicio (art. 22° transitorio Ley N° 21.210)" 
            codigo "1138" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1139 { 
            glosa "Depreciación instántanea por el 100% del valor de adquisición del bien físico del activo inmovilizado, adquirido en el ejercicio (art. 22º transitorio Ley Nº 21.210)" 
            codigo "1139" 
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1140 { 
            glosa "Arriendos"
            codigo "1140"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1141 { 
            glosa "Gastos por exigencias medio ambientales"
            codigo "1141"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1142 { 
            glosa "Gasto por indemnización o compensación a clientes o usuarios"
            codigo "1142"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        #campo cod1143 { 
        #    glosa "Pérdida tributaria del ejercicio al 31 de diciembre "
        #    codigo "1143"
        #    tipo entero
        #    caracterizable TRUE
        #    largo 15 
        #    #[1143]	=	Si ([1690] < 0;  NEG([1690] + [1155] + [1156])
        #    #Si no; 0
        #    formula {$cod1690 < 0 ? NEG($cod1690 + $cod1155 + $cod1156):0} 
        #}
        campo cod1144 { 
            glosa "Partidas del inc. 1° no afectas al IU de tasa 40% y del inc. 2° del art. 21 LIR, reajustados"
            codigo "1144"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1145 { 
            glosa "CPT positivo inicial"
            codigo "1145"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1146 { 
            glosa "CPT negativo inicial"
            codigo "1146"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1147 { 
            glosa "Costos y gastos asociados a  ingresos no renta (art. 17 LIR), generados"
            codigo "1147"
            tipo entero0
            valorPorDefecto "0"
            caracterizable TRUE
            largo 15 
        }
        campo cod1148 { 
            glosa "Proporcionalidad gastos imputados a ingresos no renta y/o rentas exentas"
            codigo "1148"
            tipo entero0
            valorPorDefecto "0"
            caracterizable TRUE
            largo 15 
        }
        campo cod1149 { 
            glosa "Intereses devengados por inversiones en bonos del art. 104 LIR "
            codigo "1149"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1150 { 
            glosa "Ingreso diferido por cambio de régimen"
            codigo "1150"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1150]	=	Si atributo = M14A; entonces ([1185] + [1369] + [1184] + [1362])
            #Sino 0            
            formula {$aM14A!=0 ? ($cod1185 + $cod1369 + $cod1184 + $cod1362) : 0 }
        }
        campo cod1151 { 
            glosa "Ingresos devengados por cambio de régimen"
            codigo "1151"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1152 { 
            glosa "Gastos adeudados por cambio de régimen "
            codigo "1152"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1153 { 
            glosa "Crédito por ingreso diferido"
            codigo "1153"
            tipo entero0
            caracterizable TRUE
            largo 15             
            #[1153]	= "Si atributo = M14A .o. 14D1 ; ([1370])
            #Sino; 0"	        
            formula {( $aM14A!=0 OR $a14D1!=0 ) ? ($cod1370) : 0 }
        }
        campo cod1154 { 
            glosa "Incentivo al ahorro según art. 14 letra E) LIR "
            codigo "1154"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        #campo cod1155 { 
        #    glosa "Incremento por IDPC de los dividendos o retiros percibidos afectos a impuestos finales, que absorben la pérdida tributaria"
        #    codigo "1155"
        #    tipo entero0
        #    caracterizable TRUE
        #    largo 15 
        #}
        #campo cod1156 { 
        #    glosa "Incremento por IDPC de los dividendos o retiros percibidos afectos a impuestos finales, que absorben la pérdida tributaria"
        #    codigo "1156"
        #    tipo entero0
        #    caracterizable TRUE
        #    largo 15 
        #}
        campo cod1157 { 
            glosa "Base del IDPC voluntario según  art. 14 letra A) N°  6 LIR y art. 42° transitorio Ley N° 21.210"
            codigo "1157"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1158 { 
            glosa "Depreciación instántanea por el 100% del valor de adquisición del bien físico del activo inmovilizado, adquirido en el ejercicio (art. 22° transitorio bis Ley N° 21.210, incorporado por la Ley N°21.256)"
            codigo "1158"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1159 { 
            glosa "Amortización de intangibles, art. 22° transitorio bis, inc. 4°, 5° y 6° Ley N° 21.210"
            codigo "1159"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1160 { 
            glosa "Remanente FUR ejercicio anterior debidamente reajustado"
            codigo "1160"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1161 { 
            glosa "FUR afectado con IS"
            codigo "1161"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1162 { 
            glosa "IS pagado que afectó al FUR"
            codigo "1162"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1163 { 
            glosa "Rebaja FUR por devolución de capital, enajenación de acciones o derechos sociales y reorganización empresarial, debidamente reajustados"
            codigo "1163"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1164 { 
            glosa "Rebaja FUR acogido a IS por devolución de capital, enajenación de acciones o derechos sociales y reorganización empresarial, debidamente reajustados"
            codigo "1164"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1166 { 
            glosa "Aumento FUR por reorganización empresarial debidamente reajustado"
            codigo "1166"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1167 { 
            glosa "Reclasificación FUR por rentas afectadas IS"
            codigo "1167"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1167]	=	[1161]
            formula {$cod1161} 
        }
        campo cod1168 { 
            glosa "Remanente para el ejercicio siguiente de rentas afectadas con IS"
            codigo "1168"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1169 { 
            glosa "Remanente FUR para el ejercicio siguiente afectos a impuestos finales"
            codigo "1169"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1170 { 
            glosa "Remanente FUR para el ejercicio siguiente exentos e INR"
            codigo "1170"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1171 { 
            glosa "Remanente crédito IDPC ejercicio anterior debidamente reajustado"
            codigo "1171"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1172 { 
            glosa "Crédito por IDPC utilizado en el ejercicio"
            codigo "1172"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1173 { 
            glosa "Crédito por IDPC recibido en el ejercicio"
            codigo "1173"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1174 { 
            glosa "Remanente crédito por IDPC para el ejercicio siguiente"
            codigo "1174"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.50	[1174]	=	1171-1172+1173
            formula {$cod1171 - $cod1172 + $cod1173} 
        }
        campo cod1175 { 
            glosa "Estimación y/o castigos de deudas incobrables, según criterios financieros"
            codigo "1175"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1176 { 
            glosa "Castigo de deudas incobrables, según art. 31 inc. 4° N° 4 LIR "
            codigo "1176"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1177 { 
            glosa "Corrección monetaria capital propio tributario inicial"
            codigo "1177"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1178 { 
            glosa "Rentas exentas del IDPC e ingresos no renta (positivo), generados por la empresa en el ejercicio"
            codigo "1178"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1179 { 
            glosa "Pérdida por rentas exentas del IDPC e ingresos no renta del ejercicio"
            codigo "1179"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1180 { 
            glosa "Retiros o dividendos percibidos en el ejercicio por participaciones en otras empresas"
            codigo "1180"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        #campo cod1181 { 
        #    glosa "Utilidades percibidas afectas a impuestos finales imputadas a la pérdida tributaria del ejercicio"
        #    codigo "1181"
        #    tipo entero0
        #    caracterizable TRUE
        #    largo 15 
        #    #[1181]	=	[1155] 
        #    formula {$cod1155} 			
        #}
        campo cod1182 { 
            glosa "Remesas, retiros o dividendos repartidos en el ejercicio, reajustados"
            codigo "1182"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1182]	=	"Si atributo = M14A = 1 ; [1699]
            #Sino; 0"
            formula {($aM14A!=0) ? $cod1699 : 0 } 
        }
        campo cod1183 { 
            glosa "Dividendos y/o utilidades sociales percibidas o devengadas (art. 33 N° 2 LIR), ingresos no renta"
            codigo "1183"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1184 { 
            glosa "Saldo Rentas tributables acumulada/ Ingreso  diferido a  imputar  en  el ejercicio "
            codigo "1184"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1185 { 
            glosa "Saldo Rentas tributables acumulada/ Ingreso  diferido a  imputar  en  el ejercicio "
            codigo "1185"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1186 { 
            glosa "Aumentos del ejercicio (por reorganizaciones)"
            codigo "1186"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1187 { 
            glosa "Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1187"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1188 { 
            glosa "Crédito total disponible imputable contra impuestos finales (IPE), del ejercicio"
            codigo "1188"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1189 { 
            glosa "Otras partidas a agregar"
            codigo "1189"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1190 { 
            glosa "Otras partidas a deducir"
            codigo "1190"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1191 { 
            glosa "TEX"
            codigo "1191"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1192 { 
            glosa "TEF"
            codigo "1192"
            tipo decimal
            posDecimales 6
            caracterizable TRUE
            largo 15 
        }
        campo cod1193 { 
            glosa "Retiros, remesas o distribuciones afectos a IGC o IA, no Imputados a los RTRE"
            codigo "1193"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1194 { 
            glosa "Retiros, remesas o distribuciones afectos a IGC o IA, imputados a las utilidades de balance en exceso de las tributables (UBET)"
            codigo "1194"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1195 { 
            glosa "Saldo total de rentas exentas de IGC (art. 11 Ley N° 18.401, rentas del capitalismo popular)"
            codigo "1195"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1196 { 
            glosa "Saldo de crédito por IDPC no sujetos a restitución generados hasta el 31.12.2019"
            codigo "1196"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1197 { 
            glosa "Saldo de crédito por IDPC no sujetos a restitución generados a contar del 01.01.2020"
            codigo "1197"
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod1198 { 
            glosa "Sobreprecio obtenido en la colocación de acciones de propia emisión, debidamente reajustado"
            codigo "1198"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1199 { 
            glosa "Rentas afectas a IGC o IA (RAI) del ejercicio"
            codigo "1199"
            tipo entero0
            caracterizable TRUE
            largo 15 
            formula {PSTV($cod1718 - $cod1693- $cod844- $cod982- $cod1198)}			
        }
        campo cod1200 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / RAI / Remanente ejercicio anterior o saldo inicial reajustado (saldo positivo)"
            codigo "1200"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1201 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / RAI / Monto imputado al ISFUT art. 25° transitorio Ley N° 21.210, reajustado"
            codigo "1201"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1201]	=	[1261]
            formula {$cod1261} 
        }
        campo cod1202 { 
            glosa "RAI/Aumentos del ejercicio (por reorganizaciones)"
            codigo "1202"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1203 { 
            glosa "RAI/Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1203"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1204 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / RAI / Reversos y/o disminuciones del ejercicio (propios)"
            codigo "1204"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.181 [1204]=POS ([1200] - [1201] +    [1202] -    [1203])
            #			  POS {[1200] + [1202] - [1203]}				
            formula  {PSTV($cod1200 + $cod1202 - $cod1203)}
        }
        campo cod1205 { 
            glosa "RAI/Aumentos del ejercicio (propios)"
            codigo "1205"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.193	[1205]	=	"Si atributo = M14A; entonces [1199]
            #Sino 0"
            formula {$aM14A!=0 ? $cod1199:0} 
        }
        campo cod1206 { 
            glosa "RAI/Otros aumentos del ejercicio"
            codigo "1206"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1207 { 
            glosa "RAI/Otras disminuciones del ejercicio"
            codigo "1207"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1208 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / RAI / Remesas, retiros o dividendos imputados a los RTRE, reajustados"
            codigo "1208"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1209 { 
            glosa "RRE / RAI / Retiros en exceso y devoluciones de capital imputados en el ejercicio, reajustados"
            codigo "1209"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1210 { 
            glosa "RAI/Remanente ejercicio siguiente (saldo positivo)"
            codigo "1210"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1210]	=	Pos ([1200] - [ 1201] + [1202]   - [1203] - [1204] + [1205] + [1206] - [1207] - [1208] - [1209])            
            formula {PSTV(( $cod1200 + $cod1202 - $cod1203 - $cod1204  +  $cod1205 + $cod1206 - $cod1207 - $cod1208 - $cod1209))}	
        }
        campo cod1211 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / DDAN / Remanente ejercicio anterior o saldo inicial reajustado (saldo positivo)"
            codigo "1211"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1212 { 
            glosa "DDAN/Aumentos del ejercicio (por reorganizaciones)"
            codigo "1212"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1213 { 
            glosa "DDAN/Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1213"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1214 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / DDAN / Reversos y/o disminuciones del ejercicio (propios)"
            codigo "1214"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1215 { 
            glosa "DDAN/Aumentos del ejercicio (propios)"
            codigo "1215"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1216 { 
            glosa "DDAN/Otros aumentos del ejercicio"
            codigo "1216"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1217 { 
            glosa "DDAN/Otras disminuciones del ejercicio"
            codigo "1217"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1218 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / RAI / Remesas, retiros o dividendos imputados a los RTRE, reajustados"
            codigo "1218"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1219 { 
            glosa "RRE / DDAN / Retiros en exceso y devoluciones de capital imputados en el ejercicio, reajustados"
            codigo "1219"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1220 { 
            glosa "DDAN/Remanente ejercicio siguiente (saldo positivo)"
            codigo "1220"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1220]	=	Pos ([1211] + [1212]-  [1213]  -[1214] + [1215] + [1216] - [1217]  -[1218]  -[1219])
            formula {PSTV($cod1211 + $cod1212 -  $cod1213 - $cod1214 + $cod1215 + $cod1216 - $cod1217  -$cod1218  -$cod1219)}			
        }
        campo cod1221 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / RAP Y DIFERENCIA INICIAL EX ART. 14 TER A) LIR / Remanente ejercicio anterior o saldo inicial reajustado (saldo positivo)"
            codigo "1221"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1222 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / RAP Y DIFERENCIA INICIAL EX ART. 14 TER A) LIR / Remanente ejercicio anterior o saldo inicial reajustado (saldo negativo)"
            codigo "1222"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1223 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / ISFUT / Monto imputado al IS art. 25° transitorio Ley N° 21.210, reajustado"
            codigo "1223"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1224 { 
            glosa "REX/RENTAS CON TRIBUTACION CUMPLIDA /Aumentos del ejercicio (por reorganizaciones)"
            codigo "1224"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1225 { 
            glosa "REX/RENTAS CON TRIBUTACION CUMPLIDA /Disminución del ejercicio (por reorganizaciones)"
            codigo "1225"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1226 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / RAP / Reversos y/o disminuciones del ejercicio (propios)"
            codigo "1226"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1227 { 
            glosa "codigo 1227"
            codigo "1227"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1228 { 
            glosa "REX/RENTAS CON TRIBUTACION CUMPLIDA /Otros aumentos del ejercicio"
            codigo "1228"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1229 { 
            glosa "REX/RENTAS CON TRIBUTACION CUMPLIDA /Otras disminuciones del ejercicio"
            codigo "1229"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1230 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / RAP/ Remesas, retiros o dividendos imputados a los RTRE, reajustados"
            codigo "1230"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1231 { 
            glosa "RRE / REX / Rentas con Tributación Cumplida / RAP /Retiros en exceso y devoluciones de capital imputados en el ejercicio, reajustados"
            codigo "1231"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1232 { 
            glosa "REX/RENTAS CON TRIBUTACION CUMPLIDA /Remanente ejercicio siguiente (saldo positivo)"
            codigo "1232"
            tipo entero0
            caracterizable TRUE
            largo 15
            #a.73 
            #[1232]	=	Pos([1221] - [1222] + [1224] - [1225] - [1226]  +[1228] -[1229] -[1230] - [1231]) 
            formula  {PSTV($cod1221 - $cod1222 + $cod1224 - $cod1225 - $cod1226  + $cod1228 -$cod1229 -$cod1230 - $cod1231)} 			
        }
        campo cod1233 { 
            glosa "REX/RENTAS CON TRIBUTACION CUMPLIDA/Remanente ejercicio anterior reajustado (saldo negativo)"
            codigo "1233"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.74
            #[1233]	=NEG([1221] - [1222] + [1224] - [1225] - [1226] + [1228] -[1229] -[1230] - [1231])
            formula {NEG($cod1221 - $cod1222 + $cod1224 - $cod1225 - $cod1226  +$cod1228 -$cod1229 -$cod1230 - $cod1231)} 			
        }
        campo cod1234 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS EXENTAS / Remanente ejercicio anterior o saldo inicial reajustado (saldo positivo)"
            codigo "1234"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1235 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS EXENTAS / Remanente ejercicio anterior o saldo inicial reajustado (saldo negativo)"
            codigo "1235"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1236 { 
            glosa "REX/RENTAS EXENTAS / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1236"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1237 { 
            glosa "REX/RENTAS EXENTAS / Disminución del ejercicio (por reorganizaciones)"
            codigo "1237"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1238 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS EXENTAS / Reversos y/o disminuciones del ejercicio (propios)"
            codigo "1238"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1239 { 
            glosa "REX/RENTAS EXENTAS  / Aumentos del ejercicio propios"
            codigo "1239"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1240 { 
            glosa "REX/RENTAS EXENTAS/ Otros aumentos del ejercicio"
            codigo "1240"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1241 { 
            glosa "REX/RENTAS EXENTAS /Otras disminuciones del ejercicio"
            codigo "1241"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1242 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS EXENTAS / Remesas, retiros o dividendos imputados a los RTRE, reajustados"
            codigo "1242"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1243 { 
            glosa "RRE / REX / Rentas exentas / Retiros en exceso y devoluciones de capital imputados en el ejercicio, reajustados"
            codigo "1243"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1244 { 
            glosa "REX/RENTAS EXENTAS  / Remanente ejercicio siguiente (saldo positivo)"
            codigo "1244"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1244]  	=	Pos([1234] - [1235] + [1236] - [1237] - [1238] + [1239] + [1240] - [1241] - [1242] - [1243])
            formula {PSTV($cod1234 - $cod1235 + $cod1236 - $cod1237 - $cod1238 + $cod1239 + $cod1240 - $cod1241 - $cod1242 - $cod1243)} 			
        }
        campo cod1245 { 
            glosa "REX/RENTAS EXENTAS/ Remanente ejercicio anterior reajustado (saldo negativo)"
            codigo "1245"
            tipo entero0
            caracterizable TRUE
            largo 15 
            # [1245]	=	NEG([1234] - [1235] + [1236]  -[1237] - [1238] + [1239] + [1240] - [1241]  -[1242] - [1243])
            formula {NEG($cod1234 - $cod1235 + $cod1236  -$cod1237 - $cod1238 + $cod1239 + $cod1240 - $cod1241  -$cod1242 - $cod1243)} 			
        }
        campo cod1246 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / INR / Remanente ejercicio anterior o saldo inicial reajustado (saldo positivo)"
            codigo "1246"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1247 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / INR / Remanente ejercicio anterior o saldo inicial reajustado (saldo negativo)"
            codigo "1247"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1248 { 
            glosa "REX/INR / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1248"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1249 { 
            glosa "REX/INR/ Disminución del ejercicio (por reorganizaciones)"
            codigo "1249"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1250 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / INR / Reversos y/o disminuciones del ejercicio (propios)"
            codigo "1250"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1251 { 
            glosa "REX/INR / Aumentos del ejercicio propios"
            codigo "1251"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1252 { 
            glosa "REX/INR/ Otros aumentos del ejercicio"
            codigo "1252"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1253 { 
            glosa "REX/INR/ Otras disminuciones del ejercicio"
            codigo "1253"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1254 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / INR / Remesas, retiros o dividendos imputados a los RTRE, reajustados"
            codigo "1254"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1255 { 
            glosa "RRE / REX / INR / Retiros en exceso y devoluciones de capital imputados en el ejercicio, reajustados"
            codigo "1255"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1256 { 
            glosa "REX/INR/ Remanente ejercicio siguiente (saldo positivo)"
            codigo "1256"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1256]	=	Pos([1246] - [1247] + [1248] - [1249] - [1250]  + [1251] + [1252] - [1253] - [1254] - [1255])
            formula {PSTV($cod1246 - $cod1247 + $cod1248 - $cod1249 - $cod1250  + $cod1251 + $cod1252 - $cod1253 - $cod1254 - $cod1255)} 			
        }
        campo cod1257 { 
            glosa "REX/INR/ Remanente ejercicio anterior reajustado (saldo negativo)"
            codigo "1257"
            tipo entero0
            caracterizable TRUE
            largo 15
            #[1257]	=	NEG([1246] - [1247] + [1248] - [1249] - [1250]  + [1251]  + [1252] - [1253] - [1254] - [1255])
            formula    {NEG($cod1246 - $cod1247 + $cod1248 - $cod1249 - $cod1250  + $cod1251  + $cod1252 - $cod1253 - $cod1254 - $cod1255)}			
        }
        campo cod1258 { 
            glosa "ELIMINADO"
            codigo "1258"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1259 { 
            glosa "ELIMINADO"
            codigo "1259"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1260 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / STUT  / Remanente ejercicio anterior o saldo inicial reajustado (saldo positivo)"
            codigo "1260"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1261 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / STUT / Monto imputado al IS art. 25° transitorio Ley N° 21.210, reajustado"
            codigo "1261"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1262 { 
            glosa "STUT/ Aumentos del ejercicio (por reorganizaciones)"
            codigo "1262"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1263 { 
            glosa "STUT/Disminución del ejercicio (por reorganizaciones)"
            codigo "1263"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1264 { 
            glosa "ELIMINADO"
            codigo "1264"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1265 { 
            glosa "STUT/Otros aumentos del ejercicio"
            codigo "1265"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1266 { 
            glosa "STUT/ Otras disminuciones del ejercicio"
            codigo "1266"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1267 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / STUT / Remesas, retiros o dividendos imputados a los RTRE, reajustados"
            codigo "1267"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1268 { 
            glosa "RRE / STUT / Retiros en exceso y devoluciones de capital imputados en el ejercicio, reajustados"
            codigo "1268"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1269 { 
            glosa "STUT/ Remanente ejercicio siguiente (saldo positivo)"
            codigo "1269"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1269]	=	[1260] + [1262] - [1263] - [1264] + [1265] - [1266] - [1267]  -[1268]
            formula {$cod1260  + $cod1262 - $cod1263 - $cod1264 + $cod1265 - $cod1266 - $cod1267  -$cod1268}			
        }
        campo cod1270 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución  / Sin D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1270"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1271 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución  / Sin D° Devolución / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1271"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1272 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución  / Sin D° Devolución / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1272"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1273 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución  / Sin D° Devolución /  IDPC e IPE retiros o dividendos percibidos"
            codigo "1273"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1274 { 
            glosa "Acumulados a contar desde el 01.01.2017 /No Sujeto a Restitución/Sin D° Devolución/Otros aumentos del ejercicio"
            codigo "1274"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1275 { 
            glosa "Acumulados a contar desde el 01.01.2017 /No Sujeto a Restitución/Sin D° Devolución/Otras disminuciones del ejercicio"
            codigo "1275"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1276 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución  / Sin D° Devolución /  Asignado a remesas, retiros o dividendos efectuados en el ejercicio, reajustados"
            codigo "1276"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1277 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución  / Sin D° Devolución /  Asignado a retiros en exceso y devoluciones de capital efectuados en el ejercicio, reajustados"
            codigo "1277"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1278 { 
            glosa "Acumulados a contar desde el 01.01.2017 /No Sujeto a Restitución/Sin D° Devolución/Remanente ejercicio siguiente (saldo positivo)"
            codigo "1278"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1278]	=Pos([1270] -  [1821] +   [1271] -   [1272]  +  [1273] +   [1274] -   [1275] -   [1276] -   [1277])
            formula {PSTV($cod1270 -$cod1821 + $cod1271 - $cod1272  +$cod1273 + $cod1274 - $cod1275 - $cod1276 - $cod1277)} 			
        }
        campo cod1279 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución  / con D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1279"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1280 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución  / con D° Devolución / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1280"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1281 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución  / con D° Devolución / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1281"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1282 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución  / con D° Devolución /  IDPC e IPE retiros o dividendos percibidos"
            codigo "1282"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1283 { 
            glosa "Acumulados a contar desde el 01.01.2017 /No Sujeto a Restitución/Con D° Devolución/Otros aumentos del ejercicio"
            codigo "1283"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1284 { 
            glosa "Acumulados a contar desde el 01.01.2017 /No Sujeto a Restitución/Con D° Devolución/Otras disminuciones del ejercicio"
            codigo "1284"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1285 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución  / con D° Devolución /  Asignado a remesas, retiros o dividendos efectuados en el ejercicio, reajustados"
            codigo "1285"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1286 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución  / con D° Devolución /  Asignado a retiros en exceso y devoluciones de capital efectuados en el ejercicio, reajustados"
            codigo "1286"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1287 { 
            glosa "Acumulados a contar desde el 01.01.2017 /No Sujeto a Restitución/Con D° Devolución/Remanente ejercicio siguiente (saldo positivo)"
            codigo "1287"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1287]=	Pos( [1279] -  [1822] +   [1280] -   [1281] +   [1282] +   [1283] -   [1284] -   [1285] -   [1286])
            formula {PSTV($cod1279 -$cod1822 + $cod1280 - $cod1281 + $cod1282 + $cod1283 - $cod1284 - $cod1285 - $cod1286)} 			
        }
        campo cod1288 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Sin D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1288"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1289 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Sin D° Devolución /  Remanente ejercicio anterior o saldo inicial (saldo negativo)"
            codigo "1289"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1290 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Sin D° Devolución / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1290"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1291 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Sin D° Devolución / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1291"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1292 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Sin D° Devolución /  IDPC e IPE RLI generada en el ejercicio"
            codigo "1292"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1293 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Sin D° Devolución /  IDPC e IPE retiros o dividendos percibidos"
            codigo "1293"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1294 { 
            glosa "Acumulados a contar desde el 01.01.2017 /Sujeto a Restitución/Sin D° Devolución/Otros aumentos del ejercicio"
            codigo "1294"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1295 { 
            glosa "Acumulados a contar desde el 01.01.2017 /Sujeto a Restitución/Sin D° Devolución/Otras disminuciones del ejercicio"
            codigo "1295"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1296 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Sin D° Devolución /  Asignado a remesas, retiros o dividendos efectuados en el ejercicio, reajustados"
            codigo "1296"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1297 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Sin D° Devolución /  Asignado a retiros en exceso y devoluciones de capital efectuados en el ejercicio, reajustados"
            codigo "1297"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1298 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Sin D° Devolución / IDPC e IPE asignado a gastos rechazados del art. 21 inc. 1° no afectos a IU 40% y del inc. 2° LIR"
            codigo "1298"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1299 { 
            glosa "Acumulados a contar desde el 01.01.2017 /Sujeto a Restitución/Sin D° Devolución/Remanente ejercicio siguiente (saldo negativo)"
            codigo "1299"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1299]	=	NEG([1288] - [1289] + [1290] - [1291] + [1292] + [1293] + [1294] - [1295] - [1296] - [1297] - [1298])
            formula {NEG($cod1288 - $cod1289 + $cod1290 - $cod1291 + $cod1292 + $cod1293 + $cod1294 - $cod1295 - $cod1296 - $cod1297 - $cod1298)} 			
        }
        campo cod1300 { 
            glosa "Acumulados a contar desde el 01.01.2017 /Sujeto a Restitución/Con D° Devolución/Remanente ejercicio siguiente (saldo positivo)"
            codigo "1300"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1300]	=	Pos([1301] - [1302] + [1303] - [1304] + [1305] + [1306] + [1307]  -[1308] - [1309] - [1310] - [1311])
            formula {PSTV($cod1301 - $cod1302 + $cod1303 - $cod1304 + $cod1305 + $cod1306 + $cod1307  -$cod1308 - $cod1309 - $cod1310 - $cod1311)} 			
        }
        campo cod1301 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Con D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1301"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1302 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Con D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo negativo)"
            codigo "1302"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1303 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Con D° Devolución / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1303"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1304 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Con D° Devolución / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1304"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1305 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Con D° Devolución / IDPC e IPE RLI generada en el ejercicio"
            codigo "1305"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1306 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Con D° Devolución / IDPC e IPE retiros o dividendos percibidos"
            codigo "1306"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1307 { 
            glosa "Acumulados a contar desde el 01.01.2017 /Sujeto a Restitución/Con D° Devolución/Otros aumentos del ejercicio"
            codigo "1307"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1308 { 
            glosa "Acumulados a contar desde el 01.01.2017 /Sujeto a Restitución/Con D° Devolución/Otras disminuciones del ejercicio"
            codigo "1308"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1309 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Con D° Devolución /  Asignado a remesas, retiros o dividendos efectuados en el ejercicio, reajustados"
            codigo "1309"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1310 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Con D° Devolución /  Asignado a retiros en exceso y devoluciones de capital efectuados en el ejercicio, reajustados"
            codigo "1310"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1311 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  Sujeto a Restitución  / Con D° Devolución /  IDPC e IPE asignado a gastos rechazados del art. 21 inc. 1° no afectos a IU 40% y del inc. 2° LIR"
            codigo "1311"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1312 { 
            glosa "Acumulados a contar desde el 01.01.2017 /Sujeto a Restitución/Sin D° Devolución/Remanente ejercicio siguiente (saldo positivo)"
            codigo "1312"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1312]	=	Pos([1288] - [1289] + [1290] - [1291] + [1292] + [1293] + [1294] - [1295] - [1296] - [1297] - [1298])
            formula {PSTV($cod1288 - $cod1289 + $cod1290 - $cod1291 + $cod1292 + $cod1293 + $cod1294 - $cod1295 - $cod1296 - $cod1297 - $cod1298)} 			
        }
        campo cod1313 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  IPE / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1313"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1314 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  IPE / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1314"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1315 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  IPE / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1315"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1316 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  IPE / IDPC e IPE RLI generada en el ejercicio"
            codigo "1316"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1317 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  IPE / IDPC e IPE retiros o dividendos percibidos"
            codigo "1317"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1318 { 
            glosa "Acumulados a contar desde el 01.01.2017/IPE/ Otros aumentos del ejercicioAcumulados a contar desde el 01.01.2017/IPE/Otras disminuciones del ejercicio"
            codigo "1318"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1319 { 
            glosa "Acumulados a contar desde el 01.01.2017/IPE/Otras disminuciones del ejercicioAcumulados a contar desde el 01.01.2017/IPE/Asignado a remesas, retiros, o dividendos imputados en el ejercicio, reajustados"
            codigo "1319"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1320 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  IPE / Asignado a remesas, retiros o dividendos efectuados en el ejercicio, reajustados"
            codigo "1320"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1321 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  IPE / Asignado a retiros en exceso y devoluciones de capital efectuados en el ejercicio, reajustados"
            codigo "1321"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1322 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados a contar desde el 01.01.2017 /  IPE / IDPC e IPE asignado a gastos rechazados del art. 21 inc. 1° no afectos a IU 40% y del inc. 2° LIR"
            codigo "1322"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1323 { 
            glosa "Acumulados a contar desde el 01.01.2017/IPE/ Remanente ejercicio siguiente (saldo positivo)Acumulados hasta el 31.12.2016/Sin D° Devolución/ Remanente ejercicio anterior (saldo positivo)"
            codigo "1323"
            tipo entero0
            caracterizable TRUE
            largo 15
            #[1323]	=	[1313] + [1314] - [1315] + [1316] + [1317] + [1318] - [1319] - [1320] -[1321] - [1322]
            formula {$cod1313 + $cod1314 - $cod1315 + $cod1316 + $cod1317 + $cod1318 - $cod1319 - $cod1320 -$cod1321 - $cod1322} 			
        }
        campo cod1324 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Sin D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1324"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1325 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Sin D° Devolución / Monto imputado al IS art. 25° transitorio Ley N° 21.210, reajustado"
            codigo "1325"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1326 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Sin D° Devolución / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1326"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1327 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Sin D° Devolución / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1327"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1328 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Sin D° Devolución / IDPC e IPE retiros o dividendos percibidos"
            codigo "1328"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1329 { 
            glosa "Acumulados hasta el 31.12.2016/Sin D° Devolución/ Otras aumentos del ejercicio"
            codigo "1329"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1330 { 
            glosa "Acumulados hasta el 31.12.2016/Sin D° Devolución/ Otras disminuciones del ejercicioAcumulados hasta el 31.12.2016/Sin D° Devolución/ Asignado a remesas, retiros, o dividendos imputados en el ejercicio, reajustados"
            codigo "1330"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1331 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Sin D° Devolución / Asignado a remesas, retiros o dividendos efectuados en el ejercicio, reajustados"
            codigo "1331"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1332 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Sin D° Devolución / Asignado a retiros en exceso y devoluciones de capital efectuados en el ejercicio, reajustados"
            codigo "1332"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1333 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Sin D° Devolución / IDPC e IPE asignado a gastos rechazados del art. 21 inc. 1° no afectos a IU 40% y del inc. 2° LIR"
            codigo "1333"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1334 { 
            glosa "Acumulados hasta el 31.12.2016/Sin D° Devolución/ Remanente ejercicio siguiente (saldo positivo)Acumulados hasta el 31.12.2016/Con D° Devolución/ Remanente ejercicio anterior (saldo positivo)"
            codigo "1334"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1334]	=	[1324] - [1325] + [1326] - [1327] + [1328] + [1329] - [1330] - [1331] - [1332] - [1333]
            formula {$cod1324 - $cod1325 + $cod1326 - $cod1327 + $cod1328 + $cod1329 - $cod1330 - $cod1331 - $cod1332 - $cod1333}			
        }
        campo cod1335 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Con D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1335"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1336 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Con D° Devolución / Monto imputado al IS art. 25° transitorio Ley N° 21.210, reajustado"
            codigo "1336"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1337 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Con D° Devolución / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1337"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1338 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Con D° Devolución / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1338"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1339 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Con D° Devolución / IDPC e IPE retiros o dividendos percibidos"
            codigo "1339"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1340 { 
            glosa "Acumulados hasta el 31.12.2016/Con D° Devolución/ Otras aumentos del ejercicioAcumulados hasta el 31.12.2016/Con D° Devolución/ Otras disminuciones del ejercicio"
            codigo "1340"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1341 { 
            glosa "Acumulados hasta el 31.12.2016/Con D° Devolución/ Otras disminuciones del ejercicioAcumulados hasta el 31.12.2016/Con D° Devolución/ "
            codigo "1341"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1342 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Con D° Devolución / Asignado a remesas, retiros o dividendos efectuados en el ejercicio, reajustados"
            codigo "1342"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1343 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Con D° Devolución / Asignado a retiros en exceso y devoluciones de capital efectuados en el ejercicio, reajustados"
            codigo "1343"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1344 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  Con D° Devolución / IDPC e IPE asignado a gastos rechazados del art. 21 inc. 1° no afectos a IU 40% y del inc. 2° LIR"
            codigo "1344"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1345 { 
            glosa "Acumulados hasta el 31.12.2016/Con D° Devolución/ Remanente ejercicio siguiente (saldo positivo)Acumulados hasta el 31.12.2016/IPE/ Remanente ejercicio anterior (saldo positivo)"
            codigo "1345"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1345]	=	[1335] - [1336] + [1337] - [1338] + [1339] + [1340] - [1341] - [1342]  -[1343] - [1344]
            formula {$cod1335 - $cod1336 + $cod1337 - $cod1338 + $cod1339 + $cod1340 - $cod1341 - $cod1342  -$cod1343 - $cod1344} 			
        }
        campo cod1346 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  IPE / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1346"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1347 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  IPE / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1347"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1348 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  IPE / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1348"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1349 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  IPE / IDPC e IPE retiros o dividendos percibidos"
            codigo "1349"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1350 { 
            glosa "Acumulados hasta el 31.12.2016/IPE/ Otros aumentos del ejercicioAcumulados hasta el 31.12.2016/IPE/ Otras disminuciones del ejercicio"
            codigo "1350"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1351 { 
            glosa "Acumulados hasta el 31.12.2016/IPE/ Otras disminuciones del ejercicioAcumulados hasta el 31.12.2016/IPE/ Asignado a remesas, retiros, o dividendos imputados en el ejercicio, reajustados"
            codigo "1351"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1352 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  IPE / Asignado a remesas, retiros o dividendos efectuados en el ejercicio, reajustados"
            codigo "1352"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1353 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  IPE / Asignado a retiros en exceso y devoluciones de capital efectuados en el ejercicio, reajustados"
            codigo "1353"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1354 { 
            glosa "REGISTRO SAC (ART. 14 LETRA A) LIR) / Acumulados hasta el 31.12.2016 /  IPE / IDPC e IPE asignado a gastos rechazados del art. 21 inc. 1° no afectos a IU 40% y del inc. 2° LIR"
            codigo "1354"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1355 { 
            glosa "Acumulados hasta el 31.12.2016/IPE/ Remanente ejercicio siguiente (saldo positivo)Ingresos percibidos"
            codigo "1355"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1355]	=	[1346] + [1347] - [1348] + [1349] + [1350] - [1351] - [1352] - [1353] -[1354]
            formula {$cod1346 + $cod1347 - $cod1348 + $cod1349 + $cod1350 - $cod1351 - $cod1352 - $cod1353 -$cod1354} 			
        }
        campo cod1356 { 
            glosa "Crédito/ Saldo de ingreso diferido pendiente de tributación correspondiente a lo dispuesto en el ex art. 14 ter letra A) N° 2 LIR "
            codigo "1356"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1357 { 
            glosa "Crédito / No Sujeto a restitución /Saldo de ingreso diferido pendiente de tributación de acuerdo al art. 15° transitorio de la Ley N° 21.210 "
            codigo "1357"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1358 { 
            glosa "Ingreso diferido / Saldo de rentas tributables acumuladas / Saldo de ingreso diferido pendiente de tributación de acuerdo al art. 14 letra D) N°8, letra (d) de la LIR, art. 40° transitorio  de la Ley N° 21.210 y Circular N° 62 de 2020"
            codigo "1358"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1359 { 
            glosa "Ingreso diferido / Incremento / Saldo de ingreso diferido pendiente de tributación de acuerdo al art. 14 letra D) N°8, letra (d) de la LIR, art. 40° transitorio  de la Ley N° 21.210 y Circular N° 62 de 2020"
            codigo "1359"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1360 { 
            glosa "Ingreso diferido / Crédito / No Sujeto a Restitución / Saldo de ingreso diferido pendiente de tributación de acuerdo al art. 14 letra D) N°8, letra (d) de la LIR, art. 40° transitorio  de la Ley N° 21.210 y Circular N° 62 de 2020"
            codigo "1360"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1361 { 
            glosa "Ingreso diferido / Crédito / Sujeto a Restitución / Saldo de ingreso diferido pendiente de tributación de acuerdo al art. 14 letra D) N°8, letra (d) de la LIR, art. 40° transitorio  de la Ley N° 21.210 y Circular N° 62 de 2020"
            codigo "1361"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1362 { 
            glosa "Incremento/ Ingreso  diferido a  imputar  en  el ejercicio "
            codigo "1362"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1363 { 
            glosa "Crédito / No sujeto a restitución/ Ingreso  diferido a  imputar  en  el ejercicio"
            codigo "1363"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1364 { 
            glosa "Crédito / Sujeto a restitución / Ingreso  diferido a  imputar  en  el ejercicio"
            codigo "1364"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1365 { 
            glosa "Saldo de rentas tributables acumuladas /Saldo de ingreso diferido pendiente de tributación de acuerdo al art. 15° transitorio de la Ley N° 21.210 "
            codigo "1365"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1366 { 
            glosa "Incremento /Saldo de ingreso diferido pendiente de tributación de acuerdo al art. 15° transitorio de la Ley N° 21.210 "
            codigo "1366"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1367 { 
            glosa "Crédito / No Sujeto a restitución /Saldo de ingreso diferido pendiente de tributación de acuerdo al art. 15° transitorio de la Ley N° 21.210 "
            codigo "1367"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1368 { 
            glosa "Acumulados a contar desde el 01.01.2017/No Sujeto a Restitución/Sin D° Devolución /Remanente ejercicio siguiente (saldo negativo) "
            codigo "1368"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1368]	=	NEG ([1495] - [1655] + [1590] - [1444] + [1512] + [1515] + [1523] - [1531] - [1539] - [1549] - [1557])
            #           NEG {[1495] - [1655] + [1590] - [1444] + [1512] + [1515] + [1523] - [1531] - [1539] - [1549] - [1557]}
            formula { NEG($cod1495 - $cod1655 + $cod1590 - $cod1444 + $cod1512 + $cod1515 + $cod1523 - $cod1531 - $cod1539 - $cod1549 - $cod1557)}				
        }
        campo cod1369 { 
            glosa "Incremento/ Ingreso  diferido a  imputar  en  el ejercicio "
            codigo "1369"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1370 { 
            glosa "Crédito / No sujeto a restitución/ Ingreso  diferido a  imputar  en  el ejercicio"
            codigo "1370"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1371 { 
            glosa "Acumulados a contar desde el 01.01.2017/No Sujeto a Restitución/Con D° Devolución /Remanente ejercicio siguiente (saldo negativo) "
            codigo "1371"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1371]	=	NEG ([1496] - [1656] + [1436] - [1447] + [1513] + [1516] + [1524] - [1532] - [1540] - [1550] - [1558])
            #           NEG {[1496] - [1656] + [1436] - [1447] + [1513] + [1516] + [1524] - [1532] - [1540] - [1550] - [1558]}
            formula { NEG($cod1496 - $cod1656 + $cod1436 - $cod1447 + $cod1513 + $cod1516 + $cod1524 - $cod1532 - $cod1540 - $cod1550 - $cod1558)}			
        }
        campo cod1372 { 
            glosa "Crédito / Sujeto a restitución/ TOTAL Saldo ingreso diferido a imputar en los ejercicios siguientes"
            codigo "1372"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1372]=   Pos(   [1356]-    [1357]+    [1361]-    [1364])
            formula { PSTV($cod1356 - $cod1357 + $cod1361 - $cod1364)}
        }
        campo cod1373 { 
            glosa "Acumulados a contar desde el 01.01.2017 /Sujeto a Restitución/Con D° Devolución/Remanente ejercicio siguiente (saldo negativo)"
            codigo "1373"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1373]	=	NEG([1301] - [1302] + [1303] - [1304] + [1305] + [1306] + [1307] -[1308] - [1309] - [1310] - [1311])
            formula {NEG($cod1301 - $cod1302 + $cod1303 - $cod1304 + $cod1305 + $cod1306 + $cod1307 -$cod1308 - $cod1309 - $cod1310 - $cod1311)}			
        }
        campo cod1374 { 
            glosa "Capital aportado empresas que inician actividades en el año comercial que corresponda a esta declaración"
            codigo "1374"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1375 { 
            glosa "Aumentos (efectivos) de capital del ejercicio"
            codigo "1375"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1376 { 
            glosa "Disminuciones (efectivas) de capital del ejercicio"
            codigo "1376"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1377 { 
            glosa "Rentas exentas e ingresos no renta (positivo), generados por la empresa en el ejercicio"
            codigo "1377"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1378 { 
            glosa "Pérdida por rentas exentas e ingresos no renta del ejercicio"
            codigo "1378"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1379 { 
            glosa "Crédito total disponible imputable contra impuestos finales (IPE), del ejercicio"
            codigo "1379"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1380 { 
            glosa "Otras partidas a agregar"
            codigo "1380"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1381 { 
            glosa "Otras partidas a deducir"
            codigo "1381"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1382 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / STUT/ Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1382"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1383 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / STUT/ Monto imputado al IS art. 25° transitorio Ley N°21.210"
            codigo "1383"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1384 { 
            glosa "STUT/Aumentos del ejercicio (por reorganizaciones)STUT/Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1384"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1385 { 
            glosa "STUT/Disminuciones del ejercicio (por reorganizaciones)STUT/Reversos y/o disminuciones del ejercicio (propias)"
            codigo "1385"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1386 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / STUT/ Reversos y/o disminuciones del ejercicio (propios)"
            codigo "1386"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1387 { 
            glosa "STUT/Otros aumentos del ejercicioSTUT/Otras disminuciones del ejercicio"
            codigo "1387"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1388 { 
            glosa "STUT/Otras disminuciones del ejercicioSTUT/Retiros, dividendos o remesas imputados a los RRE"
            codigo "1388"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1389 { 
            glosa "STUT/Retiros, dividendos o remesas imputados a los RTRE"
            codigo "1389"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1390 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / STUT/ Retiros en exceso y devoluciones de capital imputados en el ejercicio"
            codigo "1390"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1391 { 
            glosa "STUT/Remanente ejercicio siguiente (saldo positivo)Acumulados a contar desde el 01.01.2017/No Sujeto a Restitución/"
            codigo "1391"
            tipo entero0
            caracterizable TRUE
            largo 15             
            #[1391]	=	[1382] 			+ [1384] - [1385] - [1386] + [1387] - [1388] - [1389]  -[1390]            
            formula {$cod1382 + $cod1384 - $cod1385 - $cod1386 + $cod1387 - $cod1388 - $cod1389 - $cod1390}	
        }
        campo cod1392 { 
            glosa "RAI/Aumentos del ejercicio (por reorganizaciones)RAI/Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1392"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1393 { 
            glosa "REX/Rentas con tributación cumplida Aumentos del ejercicio (por reorganizaciones)REX/Rentas con tributación cumplida Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1393"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1394 { 
            glosa "REX/Rentas exentas/Aumentos del ejercicio(por reorganizaciones)REX/Rentas exentas /Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1394"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1395 { 
            glosa "REX/INR/Aumentos del ejercicio(por reorganizaciones)REX/INR/Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1395"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1396 { 
            glosa "RAI/Disminuciones del ejercicio (por reorganizaciones)RAI/Reversos y/o disminuciones del ejercicio (propias)"
            codigo "1396"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1397 { 
            glosa "REX/Rentas con tributación cumplida Disminuciones del ejercicio (por reorganizaciones)REX/Rentas con tributación cumplida Reversos y/o disminuciones del ejercicio (propias)"
            codigo "1397"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1398 { 
            glosa "REX/Rentas exentas /Disminuciones del ejercicio (por reorganizaciones)REX/Rentas exentas /Reversos y/o disminuciones del ejercicio (propias)"
            codigo "1398"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1399 { 
            glosa "REX/INR/Disminuciones del ejercicio (por reorganizaciones)REX/INR/Reversos y/o disminuciones del ejercicio (propias)"
            codigo "1399"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1400 { 
            glosa "Ingresos del giro percibidos "
            codigo "1400"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1401 { 
            glosa "Rentas de fuente extranjera percibidas"
            codigo "1401"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1402 { 
            glosa "Intereses y reajustes percibidos por préstamos y otros"
            codigo "1402"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1403 { 
            glosa "Mayor valor percibido por rescate o enajenación de inversiones o bienes no depreciables"
            codigo "1403"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1404 { 
            glosa "Ingreso diferido imputado en el ejercicio, debidamente incrementado y reajustado, cuando corresponda"
            codigo "1404"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.162	[1404]	=	"Si atributo = 14D1 ; ([1185] + [1369] + [1184] + [1362])
            #Sino; 0"
            formula {($a14D1!=0) ?  ($cod1185 + $cod1369 + $cod1184 + $cod1362) : 0 }
        }
        campo cod1405 { 
            glosa "Crédito sobre activos fijos adquiridos en el ejercicio (art. 33 bis LIR)"
            codigo "1405"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1406 { 
            glosa "Gasto por saldo inicial de existencias o insumos del negocio en cambio de régimen, pagados"
            codigo "1406"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1407 { 
            glosa "Gasto por saldo inicial de activos fijos depreciables en cambio de régimen, pagados"
            codigo "1407"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1408 { 
            glosa "Gasto por pérdida tributaria en cambio de régimen"
            codigo "1408"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1409 { 
            glosa "Existencias, insumos y servicios del negocio, pagados"
            codigo "1409"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1410 { 
            glosa "Total de ingresos anuales"
            codigo "1410"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1410]	=	[1400] + [1817] + [1401] + [1402] + [1403] + [1587] + [1588] + [1404] + [1405]
            formula {$cod1400 + $cod1817 + $cod1401 + $cod1402 + $cod1403 + $cod1587 + $cod1588 + $cod1404 + $cod1405}			
        }
        campo cod1411 { 
            glosa "Remuneraciones pagadas"
            codigo "1411"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1412 { 
            glosa "Honorarios pagados"
            codigo "1412"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1413 { 
            glosa "Adquisición de bienes del activo fijo, pagados"
            codigo "1413"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1414 { 
            glosa "Servicios pagados"
            codigo "1414"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1415 { 
            glosa "Arriendos pagados"
            codigo "1415"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1416 { 
            glosa "Gastos por exigencias medio ambientales, pagados"
            codigo "1416"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1417 { 
            glosa "Gastos por inversión privada en investigación y desarrollo no certificados por CORFO"
            codigo "1417"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1418 { 
            glosa "Gastos por inversión privada en investigación y desarrollo certificados por CORFO"
            codigo "1418"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1419 { 
            glosa "Intereses y reajustes pagados por préstamos y otros"
            codigo "1419"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1420 { 
            glosa "Amortización de intangibles, art. 22° transitorio bis, inc. 4°, 5° y 6° Ley N° 21.210"
            codigo "1420"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1421 { 
            glosa "Partidas del art. 21 inc. 1° y 3° LIR pagados"
            codigo "1421"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1422 { 
            glosa "Partidas del art. 21 inc. 1° no afectados con IU 40% y del inc. 2° LIR pagados"
            codigo "1422"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1422]	=	[1431]
            #formula {$cod1431} 			
        }
        campo cod1423 { 
            glosa "Pérdida en rescate o enajenación de inversiones o bienes no depreciables"
            codigo "1423"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1424 { 
            glosa "Otros gastos deducibles de los ingresos"
            codigo "1424"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1425 { 
            glosa "Gastos o egresos pagados o adeudados por operaciones con empresas relacionadas del art. 14 letra A) LIR"
            codigo "1425"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1426 { 
            glosa "Pérdidas tributarias de ejercicios anteriores"
            codigo "1426"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1427 { 
            glosa "Créditos incobrables castigados en el ejercicio (reconocidos sobre ingresos devengados)"
            codigo "1427"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1428 { 
            glosa "Gastos aceptados por donaciones"
            codigo "1428"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1429 { 
            glosa "Gastos de rentas de fuente extranjera, pagados"
            codigo "1429"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1430 { 
            glosa "Total de egresos anuales"
            codigo "1430"
            tipo entero0
            caracterizable TRUE
            largo 15            
            #1430=  [1406] + [1407] + [1408] + [1409] + [1818] + [1429] + [1411] + [1412] + [1413]  + [1415] + [1416] + [1417] + [1418] + [1419] + [1421] + [1422] + [1423] + [1424] + [1425] + [1426] + [1427] + [1428]
            formula { $cod1406 + $cod1407 + $cod1408 + $cod1409 + $cod1818   + $cod1429 + $cod1411 + $cod1412 + $cod1413  + $cod1415 + $cod1416 + $cod1417 + $cod1418 + $cod1419 + $cod1421 + $cod1422 + $cod1423 + $cod1424 + $cod1425 + $cod1426 + $cod1427 + $cod1428}
        }
        campo cod1431 { 
            glosa "Partidas del inc. 1° no afectas al IU de tasa 40% y del inc. 2° del art. 21 LIR (históricos), incluidos en el total de egresos"
            codigo "1431"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.114	[1431]	=	[1422]
            #formula {$cod1422}			
        }
        campo cod1432 { 
            glosa "Incentivo al ahorro según art. 14 letra E) LIR"
            codigo "1432"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1433 { 
            glosa "Base del IDPC voluntario según  art. 14 letra A) N°  6 LIR y art. 42° transitorio Ley N° 21.210"
            codigo "1433"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        #campo cod1434 { 
        #    glosa "Dividendos o retiros percibidos afectos a impuestos finales, que absorben la pérdida tributaria"
        #    codigo "1434"
        #    tipo entero0
        #    caracterizable TRUE
        #    largo 15 
        #}
        #campo cod1435 { 
        #    glosa "Incremento por IDPC de los dividendos o retiros percibidos afectos a impuestos finales, que absorben la pérdida tributaria"
        #    codigo "1435"
        #    tipo entero0
        #    caracterizable TRUE
        #    largo 15 
        #}
        campo cod1436 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Con D° Devolución / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1436"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1437 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / Sujeto a Restitución /  Sin  D° Devolución / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1437"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1438 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / Sujeto a Restitución /  Con  D° Devolución / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1438"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1439 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / IPE / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1439"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1440 { 
            glosa "Base Imponible afecta a IDPC o pérdida tributaria del ejercicio"
            codigo "1440"
            tipo entero
            caracterizable TRUE
            largo 15
            #[1440]	=	Si [1729]>0; Pos([1729]- [1432]-[1433])
            #                   Si no; [1729]
            formula {$cod1729 > 0 ? PSTV($cod1729 - $cod1432 - $cod1433) : $cod1729 }			
        }
        campo cod1441 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Sin D° Devolución / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1441"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1442 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Con D° Devolución / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1442"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1443 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / IPE / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1443"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1444 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Sin D° Devolución / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1444"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1445 { 
            glosa "CPT o CPTS positivo inicial"
            codigo "1445"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1446 { 
            glosa "CPT o CPTS negativo inicial"
            codigo "1446"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1447 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Con D° Devolución / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1447"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1448 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / Sujeto a Restitución /  Sin  D° Devolución / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1448"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1449 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / Sujeto a Restitución /  Con  D° Devolución / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1449"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        #campo cod1450 { 
        #    glosa "Pérdida tributaria del ejercicio al 31 de diciembre "
        #    codigo "1450"
        #    tipo entero0
        #    caracterizable TRUE
        #    largo 15 
        #    #[1450]	=	Si [1440] < 0; NEG ([1440] + [1434] +[1435])
        #    #                   Si no; 0
        #    formula {$cod1440 < 0 ? NEG($cod1440 + $cod1434 +$cod1435) : 0 }			
        #}
        campo cod1451 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / RAI / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1451"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1452 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / RAP Y DIFERENCIA INICIAL EX ART. 14 TER A) LIR / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1452"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1453 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS EXENTAS / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1453"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1454 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / INR / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1454"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1455 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS EXENTAS / Remanente ejercicio anterior o saldo inicial (saldo negativo)"
            codigo "1455"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1456 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / INR / Remanente ejercicio anterior o saldo inicial (saldo negativo)"
            codigo "1456"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1457 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / RAI / Monto imputado al IS art. 25° transitorio Ley N°21.210"
            codigo "1457"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1457]	=	[1383]
            formula {$cod1383} 
        }
        campo cod1458 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / ISFUT / Monto imputado al IS art. 25° transitorio Ley N°21.210"
            codigo "1458"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1459 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / RAI / Reversos y/o disminuciones del ejercicio (propios)"
            codigo "1459"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.182 [1459]=POS ([1451]-  [1457]+    [1392] -  [1396])
            #			  POS {[1451] + [1392] - [1396]}            
            formula  {PSTV($cod1451 + $cod1392 - $cod1396)}
        }
        campo cod1460 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / RAP Y DIFERENCIA INICIAL EX ART. 14 TER A) LIR / Reversos y/o disminuciones del ejercicio (propios)"
            codigo "1460"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1461 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS EXENTAS / Reversos y/o disminuciones del ejercicio (propios)"
            codigo "1461"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1462 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / INR / Reversos y/o disminuciones del ejercicio (propios)"
            codigo "1462"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1463 { 
            glosa "RAI/Aumentos del ejercicio (propios)RAI/Otros aumentos del ejercicio"
            codigo "1463"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1463]	=	[1500]
            formula {$cod1500} 
        }
        campo cod1464 { 
            glosa "ELIMINADO"
            codigo "1464"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1465 { 
            glosa "REX/Rentas exentas /Aumentos del ejercicio (propios)REX/Rentas exentas /Otros aumentos del ejercicio"
            codigo "1465"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1466 { 
            glosa "REX/INR/Aumentos del ejercicio (propios)REX/INR//Otros aumentos del ejercicio"
            codigo "1466"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1467 { 
            glosa "RAI/Otros aumentos del ejercicioRAI/Otras disminuciones del ejercicio"
            codigo "1467"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1468 { 
            glosa "REX/Rentas con tributación cumplida Otros aumentos del ejercicioREX/Rentas con tributación cumplida Otras disminuciones del ejercicio"
            codigo "1468"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1469 { 
            glosa "REX/Rentas exentas /Otros aumentos del ejercicioREX/Rentas exentas /Otras disminuciones del ejercicio"
            codigo "1469"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1470 { 
            glosa "REX/INR//Otros aumentos del ejercicioREX/INR/Otras disminuciones del ejercicio"
            codigo "1470"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1471 { 
            glosa "RAI/Otras disminuciones del ejercicioRAI/Retiros, dividendos o remesas imputados a los RRE"
            codigo "1471"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1472 { 
            glosa "REX/Rentas con tributación cumplida Otras disminuciones del ejercicioREX/Rentas con tributación cumplida Retiros, dividendos o remesas imputados a los RRE"
            codigo "1472"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1473 { 
            glosa "REX/Rentas exentas /Otras disminuciones del ejercicioREX/Rentas exentas /Retiros, dividendos o remesas imputados a los RRE"
            codigo "1473"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1474 { 
            glosa "REX/INR/Otras disminuciones del ejercicioREX/INR/Retiros, dividendos o remesas imputados a los RRE"
            codigo "1474"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1475 { 
            glosa "RAI/Retiros, dividendos o remesas imputados a los RTRE"
            codigo "1475"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1476 { 
            glosa "REX/Rentas con tributación cumplida / RAP y diferencia inicial EX ART. 14 TER A) LIR/ Retiros, dividendos o remesas imputados a los RTRE"
            codigo "1476"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1477 { 
            glosa "REX/Rentas exentas / Retiros, dividendos o remesas imputados a los RTRE"
            codigo "1477"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1478 { 
            glosa "REX / INR / Retiros, dividendos o remesas imputados a los RTRE"
            codigo "1478"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1479 { 
            glosa "Remesas, retiros o dividendos repartidos en el ejercicio"
            codigo "1479"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1479]	=	[1704]
            formula {$cod1704} 			
        }
        campo cod1480 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / RAI / Retiros en exceso y devoluciones de capital imputados en el ejercicio"
            codigo "1480"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1481 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / RAP Y DIFERENCIA INICIAL EX ART. 14 TER A) LIR / Retiros en exceso y devoluciones de capital imputados en el ejercicio"
            codigo "1481"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1482 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS EXENTAS / Retiros en exceso y devoluciones de capital imputados en el ejercicio"
            codigo "1482"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1483 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / INR / Retiros en exceso y devoluciones de capital imputados en el ejercicio"
            codigo "1483"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1484 { 
            glosa "RAI/Remanente ejercicio siguiente (saldo positivo)RAI/Remanente ejercicio siguiente (saldo negativo)"
            codigo "1484"
            tipo entero0
            caracterizable TRUE
            largo 15             
            #[1484] =   POS {[1451] + [1392] - [1396] - [1459] + [1463] + [1467] - [1471] - [1475] - [1480]}            
            formula { PSTV($cod1451 + $cod1392 - $cod1396 - $cod1459 + $cod1463 + $cod1467 - $cod1471 - $cod1475 - $cod1480)}
        }
        campo cod1485 { 
            glosa "REX/Rentas con tributación cumplida Remanente ejercicio siguiente (saldo positivo)REX/Rentas con tributación cumplida Remanente ejercicio siguiente (saldo negativo)"
            codigo "1485"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.119            
            #[1485]	=   POS {[1452] - [1589] + [1393] - [1397] - [1460] + [1468] - [1472] - [1476] - [1481]}
            formula { PSTV($cod1452 - $cod1589 + $cod1393 - $cod1397 - $cod1460 + $cod1468  -$cod1472 - $cod1476 - $cod1481)}			
        }
        campo cod1486 { 
            glosa "REX/Rentas exentas /Remanente ejercicio siguiente (saldo positivo)REX/Rentas exentas /Remanente ejercicio siguiente (saldo negativo)"
            codigo "1486"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1486]	=	Pos ([1453] - [1455] + [1394] - [1398] - [1461] + [1465] + [1469] - [1473] - [1477] - [1482])
            #           POS {[1453] - [1455] + [1394] - [1398] - [1461] + [1465] + [1469] - [1473] - [1477] - [1482]}
            formula { PSTV($cod1453 - $cod1455 + $cod1394 - $cod1398 - $cod1461 + $cod1465 + $cod1469 - $cod1473 - $cod1477 - $cod1482)}			
        }
        campo cod1487 { 
            glosa "REX/INR/Remanente ejercicio siguiente (saldo positivo)REX/INR/Remanente ejercicio siguiente (saldo negativo)"
            codigo "1487"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1487]	=	Pos([1454] - [1456] + [1395] - [1399] - [1462] + [1466] + [1470] -  [1474] - [1478] - [1483]) 
            #			POS{[1454] - [1456] + [1395] - [1399] - [1462] + [1466] + [1470] -  [1474] - [1478] - [1483]} 
            formula { PSTV($cod1454 - $cod1456 + $cod1395 - $cod1399 - $cod1462 + $cod1466 + $cod1470 -  $cod1474 - $cod1478 - $cod1483)}			
        }
        campo cod1489 { 
            glosa "REX/Rentas con tributación cumplida Remanente ejercicio siguiente (saldo negativo)REX/Rentas exentas/Remanente ejercicio anterior (saldo positivo)"
            codigo "1489"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.120
            #[1489]	=	NEG{[1452] - [1589] + [1393] - [1397] - [1460] + [1468]  -[1472] - [1476] - [1481]}
            formula { NEG($cod1452 - $cod1589 + $cod1393 - $cod1397 - $cod1460 + $cod1468  -$cod1472 - $cod1476 - $cod1481)}			
        }
        campo cod1490 { 
            glosa "REX/Rentas exentas /Remanente ejercicio siguiente (saldo negativo)REX/INR/Remanente ejercicio anterior (saldo positivo)"
            codigo "1490"
            tipo entero0
            caracterizable TRUE
            largo 15
            #[1490]	=	NEG ([1453] - [1455] + [1394] - [1398] - [1461] + [1465] + [1469] - [1473] - [1477] - [1482])
            #			NEG {[1453] - [1455] + [1394] - [1398] - [1461] + [1465] + [1469] - [1473] - [1477] - [1482]}
            formula { NEG($cod1453 - $cod1455 + $cod1394 - $cod1398 - $cod1461 + $cod1465 + $cod1469 - $cod1473 - $cod1477 - $cod1482)}			
        }
        campo cod1491 { 
            glosa "REX/INR/Remanente ejercicio siguiente (saldo negativo)STUT/Remanente ejercicio anterior (saldo positivo)"
            codigo "1491"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1491]	=	NEG([1454] - [1456] + [1395] - [1399] - [1462] + [1466] + [1470] -  [1474] - [1478] - [1483])
            #			NEG{[1454] - [1456] + [1395] - [1399] - [1462] + [1466] + [1470] -  [1474] - [1478] - [1483]}
            formula { NEG($cod1454 - $cod1456 + $cod1395 - $cod1399 - $cod1462 + $cod1466 + $cod1470 -  $cod1474 - $cod1478 - $cod1483)}			
        }
        campo cod1492 { 
            glosa "Saldo negativo del registro REX al término del ejercicio"
            codigo "1492"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.185	[1492]	=	NEG {([1452] - [1589] + [1393] - [1397] - [1460] + [1468] - [1472]) + ([1752] + [1458] + [1755] - [1757] - [1759] + [1763] - [1765]) + ([1753] + [1756] - [1758] - [1760] + [1762] + [1764] - [1766]) + ([1453] - [1455] + [1394] - [1398] - [1461] + [1465] + [1469] - [1473]) + ([1454] - [1456] + [1395] - [1399] - [1462] + [1466] + [1470] - [1474])}
            #					NEG {([1452] - [1589] + [1393] - [1397] - [1460] + [1468] - [1472]) + ([1752] + [1755] - [1757] - [1759]  + [1763] - [1765]) + ([1753] -[1845] + [1756] - [1758] - [1760] + [1762] + [1764] - [1766]) + ([1453] - [1455] + [1394] - [1398] - [1461] + [1465] + [1469] - [1473]) + ([1454] - [1456] + [1395] - [1399] - [1462] + [1466] + [1470] - [1474])}
            formula { NEG(  ($cod1452 - $cod1589 + $cod1393 - $cod1397 - $cod1460 + $cod1468 - $cod1472) + ($cod1752 + $cod1458 + $cod1755 - $cod1757 - $cod1759 + $cod1763 - $cod1765) + ($cod1753 - $cod1845 + $cod1756 - $cod1758 - $cod1760 + $cod1762 + $cod1764 - $cod1766) + ($cod1453 - $cod1455 + $cod1394 - $cod1398 - $cod1461 + $cod1465 + $cod1469 - $cod1473) + ($cod1454 - $cod1456 + $cod1395 - $cod1399 - $cod1462 + $cod1466 + $cod1470 - $cod1474)  )}
        }
        campo cod1493 { 
            glosa "Saldo positivo del registro REX al término del ejercicio, antes de imputaciones"
            codigo "1493"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.186	[1493]	= POS{([1452] - [1589] + [1393] - [1397] - [1460]  + [1468] - [1472]) + ([1752] + [1458] + [1755] - [1757] - [1759] + [1763] - [1765]) + ([1753] + [1756] - [1758] - [1760] + [1762] + [1764] - [1766]) + ([1453] - [1455] + [1394] - [1398] - [1461] + [1465] + [1469] - [1473]) + ([1454] - [1456] + [1395] - [1399] - [1462] + [1466] + [1470] - [1474])}
            #				  POS {([1452] - [1589] + [1393] - [1397] - [1460]  + [1468] - [1472]) + ([1752] + [1755] - [1757] - [1759] + [1763] - [1765]) + ([1753] - [1845] + [1756] - [1758] - [1760] + [1762] + [1764] - [1766]) + ([1453] - [1455] + [1394] - [1398] - [1461] + [1465] + [1469] - [1473]) + ([1454] - [1456] + [1395] - [1399] - [1462] + [1466] + [1470] - [1474])}
            formula { PSTV(  ($cod1452 - $cod1589 + $cod1393 - $cod1397 - $cod1460 + $cod1468 - $cod1472) + ($cod1752 + $cod1458 + $cod1755 - $cod1757 - $cod1759 + $cod1763 - $cod1765) + ($cod1753 - $cod1845 + $cod1756 - $cod1758 - $cod1760 + $cod1762 + $cod1764 - $cod1766) + ($cod1453 - $cod1455 + $cod1394 - $cod1398 - $cod1461 + $cod1465 + $cod1469 - $cod1473) + ($cod1454 - $cod1456 + $cod1395 - $cod1399 - $cod1462 + $cod1466 + $cod1470 - $cod1474)  )}
        }
        campo cod1494 { 
            glosa "Capital aportado, histórico (incluye aumentos y disminuciones efectivas)"
            codigo "1494"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1495 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Sin D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1495"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1496 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Con D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1496"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1497 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / Sujeto a Restitución /  Sin  D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1497"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1498 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / Sujeto a Restitución /  Con  D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1498"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1499 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / IPE / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1499"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1500 { 
            glosa "Rentas afectas a IGC o IA (RAI) del ejercicio "
            codigo "1500"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1500]	=	 ([1720] - [1493] - [1494] - [1725] -[1727]) ,
            #                    si ([1720] - [1493] - [1494] - [1725] -[1727]) >0, 
            #                    Sino, 0
            formula {($cod1720 - $cod1493 - $cod1494 - $cod1725 -$cod1727) >0 ? ($cod1720 - $cod1493 - $cod1494 - $cod1725 -$cod1727) : 0 }			
        }
        campo cod1501 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Sin D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1501"
            tipo entero
            caracterizable TRUE
            largo 15 
        }
        campo cod1502 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Con D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1502"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1503 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / IPE / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1503"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1504 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / Sujeto a Restitución /  Sin  D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo negativo)"
            codigo "1504"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1505 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / Sujeto a Restitución /  Con  D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo negativo)"
            codigo "1505"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1506 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Sin D° Devolución / Monto imputado al IS art. 25° transitorio Ley N°21.210"
            codigo "1506"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1507 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Con D° Devolución / Monto imputado al IS art. 25° transitorio Ley N°21.210"
            codigo "1507"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1508 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / IPE / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1508"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1509 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Sin D° Devolución / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1509"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1510 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Con D° Devolución / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1510"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1511 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / IPE / Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1511"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1512 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Sin D° Devolución / IDPC e IPE base imponible generada en el ejercicio"
            codigo "1512"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1513 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Con D° Devolución / IDPC e IPE base imponible generada en el ejercicio"
            codigo "1513"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1514 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / IPE / IDPC e IPE base imponible generada en el ejercicio"
            codigo "1514"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1515 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Sin D° Devolución / IDPC e IPE retiros o dividendos percibidos"
            codigo "1515"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1516 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Con D° Devolución / IDPC e IPE retiros o dividendos percibidos"
            codigo "1516"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1517 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / Sujeto a Restitución /  Sin  D° Devolución /  IDPC e IPE retiros o dividendos percibidos"
            codigo "1517"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1518 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / Sujeto a Restitución /  Con  D° Devolución /  IDPC e IPE retiros o dividendos percibidos"
            codigo "1518"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1519 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / IPE IDPC e IPE retiros o dividendos percibidos"
            codigo "1519"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1520 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Sin D° Devolución / IDPC e IPE retiros o dividendos percibidos"
            codigo "1520"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1521 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Con D° Devolución / IDPC e IPE retiros o dividendos percibidos"
            codigo "1521"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1522 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / IPE / IDPC e IPE retiros o dividendos percibidos"
            codigo "1522"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1523 { 
            glosa "Acumulados a contar desde el 01.01.2017/No Sujeto a Restitución/Sin D° Devolución /Otros aumentos del ejercicio"
            codigo "1523"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1524 { 
            glosa "Acumulados a contar desde el 01.01.2017/No Sujeto a Restitución/Con D° Devolución /Otros aumentos del ejercicio"
            codigo "1524"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1525 { 
            glosa "Acumulados a contar desde el 01.01.2017/No Sujeto a Restitución/Con D° Devolución /Otros aumentos del ejercicio"
            codigo "1525"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1526 { 
            glosa "Acumulados a contar desde el 01.01.2017/No Sujeto a Restitución/Con D° Devolución /Otros aumentos del ejercicio"
            codigo "1526"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1527 { 
            glosa "Acumulados a contar desde el 01.01.2017/IPE/Otros aumentos del ejercicioAcumulados a contar desde el 01.01.2017/IPE/Otras disminuciones del ejercicio"
            codigo "1527"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1528 { 
            glosa "Acumulados hasta 31.12.2016/Sin D° Devolución/Otros aumentos del ejercicioAcumulados hasta 31.12.2016/Sin D° Devolución/Otras disminuciones del ejercicio"
            codigo "1528"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1529 { 
            glosa "Acumulados hasta 31.12.2016/Con D° Devolución/Otros aumentos del ejercicioAcumulados hasta 31.12.2016/Con D° Devolución/Otras disminuciones del ejercicio"
            codigo "1529"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1530 { 
            glosa "Acumulados hasta 31.12.2016/IPE/ Otros aumentos del ejercicioAcumulados hasta 31.12.2016/IPE/ Otras disminuciones del ejercicio"
            codigo "1530"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1531 { 
            glosa "Acumulados a contar desde el 01.01.2017/No Sujeto a Restitución/Sin D° Devolución /Otras disminuciones del ejercicio"
            codigo "1531"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1532 { 
            glosa "Acumulados a contar desde el 01.01.2017/No Sujeto a Restitución/Con D° Devolución /Otras disminuciones del ejercicio"
            codigo "1532"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1533 { 
            glosa "Acumulados a contar desde el 01.01.2017/ Sujeto a Restitución/Sin D° Devolución /Otras disminuciones del ejercicio"
            codigo "1533"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1534 { 
            glosa "Acumulados a contar desde el 01.01.2017/ Sujeto a Restitución/Con D° Devolución /Otras disminuciones del ejercicio"
            codigo "1534"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1535 { 
            glosa "Acumulados a contar desde el 01.01.2017/IPE/Otras disminuciones del ejercicioAcumulados a contar desde el 01.01.2017/IPE/Asignado a remesas, retiros o dividendos imputados en el ejercicio."
            codigo "1535"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1536 { 
            glosa "Acumulados hasta 31.12.2016/Sin D° Devolución/Otras disminuciones del ejercicioAcumulados hasta 31.12.2016/Sin D° Devolución/Asignado a remesas, retiros o dividendos imputados en el ejercicio."
            codigo "1536"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1537 { 
            glosa "Acumulados hasta 31.12.2016/Con D° Devolución/Otras disminuciones del ejercicioAcumulados hasta 31.12.2016/Con D° Devolución/Asignado a remesas, retiros o dividendos imputados en el ejercicio."
            codigo "1537"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1538 { 
            glosa "Acumulados hasta 31.12.2016/IPE/ Otras disminuciones del ejercicioAcumulados hasta 31.12.2016/IPE/ Asignado a remesas, retiros o dividendos imputados en el ejercicio."
            codigo "1538"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1539 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Sin D° Devolución / Asignado a remesas, retiros o dividendos efectuados en el ejercicio"
            codigo "1539"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1540 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Con D° Devolución / Asignado a remesas, retiros o dividendos efectuados en el ejercicio"
            codigo "1540"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1541 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / Sujeto a Restitución /  Sin  D° Devolución /  Asignado a remesas, retiros o dividendos efectuados en el ejercicio"
            codigo "1541"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1542 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / Sujeto a Restitución /  Con  D° Devolución /  Asignado a remesas, retiros o dividendos efectuados en el ejercicio"
            codigo "1542"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1543 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / IPE / Asignado a remesas, retiros o dividendos efectuados en el ejercicio"
            codigo "1543"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1544 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Sin D° Devolución / Asignado a remesas, retiros o dividendos efectuados en el ejercicio"
            codigo "1544"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1545 { 
            glosa "CPTS positivo final"
            codigo "1545"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1545]	=	Pos([1445]  -[1446] + [1374]+  [1375] - [1376] + [1705] - [1706] + [1707]  + [1377]- [1378] + [1726] - [1479]-  [1708] - [1709]- [1379] +[1710]  +[1711] +  [1380] - [1381])            
            formula  { PSTV($cod1445 - $cod1446 + $cod1374 +  $cod1375 - $cod1376 + $cod1705 - $cod1706 + $cod1707 + $cod1377 - $cod1378 + $cod1726  - $cod1479 -  $cod1708 - $cod1709 - $cod1379 + $cod1710 + $cod1711 + $cod1380 - $cod1381) }
        }
        campo cod1546 { 
            glosa "CPTS negativo final"
            codigo "1546"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1546]	=	NEG {[1445] - [1446] + [1374] + [1375] - [1376] + [1705] - [1706] + [1707] + [1377] - [1378] + [1726] - [1479] - [1708] - [1709] - [1379] + [1710] + [1711] + [1380] - [1381]}
            formula  { NEG($cod1445 - $cod1446 + $cod1374 + $cod1375 - $cod1376 + $cod1705 - $cod1706 + $cod1707 + $cod1377 - $cod1378 + $cod1726 - $cod1479 - $cod1708 - $cod1709 - $cod1379 + $cod1710 + $cod1711 + $cod1380 - $cod1381) }			
        }
        campo cod1547 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Con D° Devolución / Asignado a remesas, retiros o dividendos efectuados en el ejercicio"
            codigo "1547"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1548 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / IPE / Asignado a remesas, retiros o dividendos efectuados en el ejercicio"
            codigo "1548"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1549 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Sin D° Devolución / Asignado a retiros en exceso y devoluciones de capital  efectuados en el ejercicio"
            codigo "1549"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1550 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Con D° Devolución / Asignado a retiros en exceso y devoluciones de capital  efectuados en el ejercicio"
            codigo "1550"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1551 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / Sujeto a Restitución /  Sin  D° Devolución / Asignado a retiros en exceso y devoluciones de capital  efectuados en el ejercicio"
            codigo "1551"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1552 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / Sujeto a Restitución /  Con  D° Devolución / Asignado a retiros en exceso y devoluciones de capital  efectuados en el ejercicio"
            codigo "1552"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1553 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / IPE / Asignado a retiros en exceso y devoluciones de capital  efectuados en el ejercicio"
            codigo "1553"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1554 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Sin D° Devolución / Asignado a retiros en exceso y devoluciones de capital  efectuados en el ejercicio"
            codigo "1554"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1555 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Con D° Devolución / Asignado a retiros en exceso y devoluciones de capital  efectuados en el ejercicio"
            codigo "1555"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1556 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / IPE / Asignado a retiros en exceso y devoluciones de capital  efectuados en el ejercicio"
            codigo "1556"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1557 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Sin D° Devolución / IDPC e IPE asignado a gastos rechazados del art. 21 inc. 1° no afectos a IU 40% y del inc. 2° LIR"
            codigo "1557"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1558 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Con D° Devolución / IDPC e IPE asignado a gastos rechazados del art. 21 inc. 1° no afectos a IU 40% y del inc. 2° LIR"
            codigo "1558"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1559 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / IPE / IDPC e IPE asignado a gastos rechazados del art. 21 inc. 1° no afectos a IU 40% y del inc. 2° LIR"
            codigo "1559"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1560 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Sin D° Devolución / IDPC e IPE asignado a gastos rechazados del art. 21 inc. 1° no afectos a IU 40% y del inc. 2° LIR"
            codigo "1560"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1561 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / Con D° Devolución / IDPC e IPE asignado a gastos rechazados del art. 21 inc. 1° no afectos a IU 40% y del inc. 2° LIR"
            codigo "1561"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1562 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados hasta el 31.12.2016 / IPE / IDPC e IPE asignado a gastos rechazados del art. 21 inc. 1° no afectos a IU 40% y del inc. 2° LIR"
            codigo "1562"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1563 { 
            glosa "Acumulados a contar desde el 01.01.2017/No Sujeto a Restitución/Sin D° Devolución /Remanente ejercicio siguiente (saldo positivo)"
            codigo "1563"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1563]	=	Pos([1495] - [1655] + [1590] - [1444] + [1512] + [1515] + [1523] - [1531] - [1539] - [1549] - [1557])
            #           POS{[1495] - [1655] + [1590] - [1444] + [1512] + [1515] + [1523] - [1531] - [1539] - [1549] - [1557]}
            formula { PSTV($cod1495 - $cod1655 + $cod1590 - $cod1444 + $cod1512 + $cod1515 + $cod1523 - $cod1531 - $cod1539 - $cod1549 - $cod1557)}			
        }
        campo cod1564 { 
            glosa "Acumulados a contar desde el 01.01.2017/No Sujeto a Restitución/Con D° Devolución /Remanente ejercicio siguiente (saldo positivo)"
            codigo "1564"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1564]	=	Pos([1496] - [1656] + [1436] - [1447] + [1513] + [1516] + [1524] - [1532] - [1540] - [1550] - [1558])
            #			POS{[1496] - [1656] + [1436] - [1447] + [1513] + [1516] + [1524] - [1532] - [1540] - [1550] - [1558]}
            formula { PSTV($cod1496 - $cod1656 + $cod1436 - $cod1447 + $cod1513 + $cod1516 + $cod1524 - $cod1532 - $cod1540 - $cod1550 - $cod1558)}			
        }
        campo cod1565 { 
            glosa "Acumulados a contar desde el 01.01.2017/Sujeto a Restitución/Sin D° Devolución /Remanente ejercicio siguiente (saldo positivo)"
            codigo "1565"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1565]	=	Pos([1497] - [1504] + [1437] - [1448] + [1517] + [1525] - [1533] - [1541] -[1551])
            #           POS{[1497] - [1504] + [1437] - [1448] + [1517] + [1525] - [1533] - [1541] -[1551]}
            formula { PSTV($cod1497 - $cod1504 + $cod1437 - $cod1448 + $cod1517 + $cod1525 - $cod1533 - $cod1541 -$cod1551)}			
        }
        campo cod1566 { 
            glosa "Acumulados a contar desde el 01.01.2017/Sujeto a Restitución/Con D° Devolución /Remanente ejercicio siguiente (saldo positivo)"
            codigo "1566"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1566]	=	Pos([1498] - [1505]+  [1438] - [1449]  +[1518]+  [1526]  -[1534] - [1542]  -[1552])
            #			POS{[1498] - [1505] +  [1438] - [1449] + [1518] + [1526] - [1534] - [1542] - [1552]}

            formula { PSTV($cod1498 - $cod1505+  $cod1438 - $cod1449  +$cod1518+  $cod1526  -$cod1534 - $cod1542  -$cod1552)}			
        }
        campo cod1567 { 
            glosa "Acumulados a contar desde el 01.01.2017/IPE/Remanente ejercicio siguiente (saldo positivo)Acumulados hasta 31.12.2016/Sin D° Devolución/Remanente ejercicio anterior (saldo positivo)"
            codigo "1567"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1567]	=	Pos ([1499 ] + [1439] - [1508] + [1514] + [1519] + [1527] - [1535] - [1543] - [1553] - [1559])
            #  			POS {[1499 ] + [1439] - [1508] + [1514] + [1519] + [1527] - [1535] - [1543] - [1553] - [1559]}
            formula { PSTV($cod1499  + $cod1439 - $cod1508 + $cod1514 + $cod1519 + $cod1527 - $cod1535 - $cod1543 -$cod1553 - $cod1559)}
        }
        campo cod1568 { 
            glosa "Acumulados hasta 31.12.2016/Sin D° Devolución/Remanente ejercicio siguiente (saldo positivo)Acumulados hasta 31.12.2016/Con D° Devolución/Remanente ejercicio anterior (saldo positivo)"
            codigo "1568"
            tipo entero0
            caracterizable TRUE
            largo 15 	    
            #[1568]	=  POS {[1501]  + [1441]   - [1509]   + [1520]   + [1528]   - [1536]   - [1544]   - [1554]   - [1560]}	    
            formula { PSTV($cod1501 + $cod1441 - $cod1509 + $cod1520 + $cod1528 - $cod1536 - $cod1544 - $cod1554 - $cod1560)}
        }
        campo cod1569 { 
            glosa "Acumulados hasta 31.12.2016/Con D° Devolución/Remanente ejercicio siguiente (saldo positivo)Acumulados hasta 31.12.2016/IPE/ Remanente ejercicio anterior (saldo positivo)"
            codigo "1569"
            tipo entero0
            caracterizable TRUE
            largo 15 	    
            #[1569]	=   POS {[1502] +   [1442] -   [1510] +   [1521] +   [1529] -  [1537] -   [1547] -   [1555] -   [1561]}	    
            formula {   PSTV($cod1502 + $cod1442 - $cod1510 + $cod1521 + $cod1529 - $cod1537 - $cod1547 - $cod1555 - $cod1561)}
        }
        campo cod1570 { 
            glosa "Acumulados hasta 31.12.2016/IPE/Remanente ejercicio siguiente (saldo positivo)Ingresos percibidos"
            codigo "1570"
            tipo entero0
            caracterizable TRUE
            largo 15
            #[1570]	=	Pos ([1503] + [1443] - [1511] + [1522] + [1530] - [1538] - [1548] - [1556]  -[1562])
            #			POS {[1503] + [1443] - [1511] + [1522] + [1530] - [1538] - [1548] - [1556] - [1562]}
            formula { PSTV($cod1503 + $cod1443 - $cod1511 + $cod1522 + $cod1530 - $cod1538 - $cod1548 - $cod1556  -$cod1562)}
        }
        campo cod1571 { 
            glosa "Acumulados a contar desde el 01.01.2017/ Sujeto a Restitución/Sin D° Devolución /Remanente ejercicio siguiente (saldo negativo) "
            codigo "1571"
            tipo entero0
            caracterizable TRUE
            largo 15
            #[1571]	=	NEG ([1497] - [1504] + [1437] - [1448] + [1517] + [1525] - [1533] - [1541] - [1551])
            #           NEG {[1497] - [1504] + [1437] - [1448] + [1517] + [1525] - [1533] - [1541] - [1551]}
            formula { NEG($cod1497 - $cod1504 + $cod1437 - $cod1448 + $cod1517 + $cod1525 - $cod1533 - $cod1541 - $cod1551)}			
        }
        campo cod1572 { 
            glosa "Acumulados a contar desde el 01.01.2017/ Sujeto a Restitución/Con D° Devolución /Remanente ejercicio siguiente (saldo negativo) "
            codigo "1572"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1572]	=	NEG ([1498] - [1505] + [1438] - [1449] + [1518] + [1526] - [1534] - [1542] - [1552])
            #           NEG {[1498] - [1505] + [1438] - [1449] + [1518] + [1526] - [1534] - [1542] - [1552]}
            formula { NEG($cod1498 - $cod1505 + $cod1438 - $cod1449 +$cod1518 + $cod1526 - $cod1534 - $cod1542 - $cod1552)}
        }
        campo cod1573 { 
            glosa "Capital aportado empresas que inician actividades en el año comercial que corresponda a esta declaración"
            codigo "1573"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1574 { 
            glosa "Aumentos (efectivos) de capital del ejercicio"
            codigo "1574"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1575 { 
            glosa "Disminuciones (efectivas) de capital del ejercicio"
            codigo "1575"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1576 { 
            glosa "Remesas, retiros o dividendos repartidos en el ejercicio"
            codigo "1576"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1577 { 
            glosa "Partidas de gastos no aceptados"
            codigo "1577"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1578 { 
            glosa "Crédito por IDPC, por participaciones en otras empresas que incrementaron la BI del ejercicio"
            codigo "1578"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1579 { 
            glosa "ELIMINADO"
            codigo "1579"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1580 { 
            glosa "CPT o CPTS positivo inicial"
            codigo "1580"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1581 { 
            glosa "CPTS positivo final"
            codigo "1581"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.144
            #[1581]	=	Pos([1580] - [1582] + [1573] + [1574] - [1575] + [1712] - [1713]  + [1714] - [1576] - [1715] - [1577] - [1716] - [1578] + [1584] - [1585])
            #           POS{[1580] - [1582] + [1573] + [1574] - [1575] + [1712] - [1713]  + [1714] - [1576] - [1715] - [1577] - [1716] - [1578] + [1584] - [1585]}
            formula { PSTV($cod1580 - $cod1582 + $cod1573 + $cod1574 - $cod1575 + $cod1712 - $cod1713  + $cod1714 - $cod1576 - $cod1715 - $cod1577 - $cod1716 - $cod1578 + $cod1584 - $cod1585)}
        }
        campo cod1582 { 
            glosa "CPT o CPTS negativo inicial"
            codigo "1582"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1583 { 
            glosa "CPTS negativo "
            codigo "1583"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.145
            #[1583]	=	NEG ([1580] - [1582] + [1573] + [1574] - [1575] + [1712] - [1713]  + [1714] - [1576] - [1715] - [1577] - [1716] - [1578] + [1584] - [1585])
            #           NEG {[1580] - [1582] + [1573] + [1574] - [1575] + [1712] - [1713]  + [1714] - [1576] - [1715] - [1577] - [1716] - [1578] + [1584] - [1585]}
            formula { NEG($cod1580 - $cod1582 + $cod1573 + $cod1574 - $cod1575 + $cod1712 - $cod1713  + $cod1714 - $cod1576 - $cod1715 - $cod1577 - $cod1716 - $cod1578 + $cod1584 - $cod1585)}
        }
        campo cod1584 { 
            glosa "Otras partidas a agregar"
            codigo "1584"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1585 { 
            glosa "Otras partidas a deducir"
            codigo "1585"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1586 { 
            glosa "Saldo de excedente base imponible IDPC voluntario a imputar ejercicio siguientes"
            codigo "1586"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1587 { 
            glosa "Ingresos percibidos o devengados por operaciones con empresas relacionadas del art. 14 letra A) LIR"
            codigo "1587"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1588 { 
            glosa "Otros ingresos percibidos o devengados"
            codigo "1588"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1589 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / RAP Y DIFERENCIA INICIAL EX ART. 14 TER A) LIR / Remanente ejercicio anterior o saldo inicial (saldo negativo)"
            codigo "1589"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1590 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Sin D° Devolución / Aumentos del ejercicio (por reorganizaciones)"
            codigo "1590"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        #campo cod1591 { 
        #    glosa "Utilidades percibidas afectas a impuestos finales imputadas a la pérdida tributaria del ejercicio"
        #    codigo "1591"
        #    tipo entero0
        #    caracterizable TRUE
        #    largo 15 
        #    #[1591]	=	[1434] 
        #    formula {$cod1434} 			
        #}
        campo cod1592 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ CON OBLIGACIÓN DE RESTITUCIÓN/ Sin derecho a devolución"
            codigo "1592"
            tipo entero0
            caracterizable TRUE
            largo 15
        }
        campo cod1593 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ SIN OBLIGACIÓN DE RESTITUCIÓN/ Sin derecho a devolución"
            codigo "1593"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1594 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ CON OBLIGACIÓN DE RESTITUCIÓN/ Sin derecho a devolución"
            codigo "1594"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1595 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ SIN OBLIGACIÓN DE RESTITUCIÓN/ Sin derecho a devolución"
            codigo "1595"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1596 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ SIN OBLIGACIÓN DE RESTITUCIÓN/ Sin derecho a devolución"
            codigo "1596"
            tipo entero0
            caracterizable TRUE
            #[1596]=	[1850] + [1855]   + [1860]   + [1863]   + [1917]
            formula { $cod1850 + $cod1855 + $cod1860 + $cod1863 + $cod1917}
            largo 15 
        }
        campo cod1597 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ CON OBLIGACIÓN DE RESTITUCIÓN/ Sin derecho a devolución / Renta asignada propias y/o de terceros, provenientes de empresas sujetas al art. 14 letra D) N° 8 LIR"
            codigo "1597"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1598 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ CON OBLIGACIÓN DE RESTITUCIÓN/ Con derecho a devolución / Renta asignada propias y/o de terceros, provenientes de empresas sujetas al art. 14 letra D) N° 8 LIR"
            codigo "1598"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1599 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ SIN OBLIGACIÓN DE RESTITUCIÓN/ Sin derecho a devolución / Renta asignada propias y/o de terceros, provenientes de empresas sujetas al art. 14 letra D) N° 8 LIR"
            codigo "1599"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1600 { 
            glosa "Ingresos del giro percibidos"
            codigo "1600"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1601 { 
            glosa "Rentas de fuente extranjera percibidas"
            codigo "1601"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1602 { 
            glosa "Intereses y reajustes percibidos por préstamos y otros"
            codigo "1602"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1603 { 
            glosa "Mayor valor percibido por rescate o enajenación de inversiones o bienes no depreciables"
            codigo "1603"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1604 { 
            glosa "Dividendos o retiros percibidos en el ejercicio, por participaciones en otras empresasIncremento por impuesto de primera categoría y crédito total disponible por impuestos pagados en el extranjero"
            codigo "1604"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1605 { 
            glosa "Incremento por IDPC"
            codigo "1605"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1606 { 
            glosa "Ingresos percibidos o devengados por operaciones con empresas relacionadas del art. 14 letra A) LIROtros ingresos percibidos o devengados"
            codigo "1606"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1607 { 
            glosa "Otros ingresos percibidos o devengadosIngreso diferido imputado en el ejercicio, debidamente incrementado y reajustado, cuando corresponda"
            codigo "1607"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1608 { 
            glosa "Ingreso diferido imputado en el ejercicio, debidamente incrementado y reajustado, cuando correspondaCrédito por activos fijos adquiridos en el ejercicio (art. 33 bis LIR, según instrucciones)"
            codigo "1608"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.157
            #[1608]	=	"Si atributo = 14TT ;  entonces ([1184] + [1362] + [1185] + [1369])			
            #Sino; 0"	        
            formula  {($a14TT!=0) ? ($cod1184 + $cod1362 + $cod1185 + $cod1369) : 0 }

        }
        campo cod1609 { 
            glosa "Crédito por activos fijos adquiridos en el ejercicio (art. 33 bis LIR)"
            codigo "1609"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1610 { 
            glosa "Total de ingresos anuales"
            codigo "1610"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1610]=    [1600] +    [1819]+    [1601] +   [1602] +   [1603] + [1604] + [1605] +[  1606] +  [1607] +   [1608] +   [1609]			
            formula {$cod1600  + $cod1819 + $cod1601 + $cod1602 + $cod1603 +$cod1604 + $cod1605 +$cod1606 +$cod1607 + $cod1608 + $cod1609} 
        }
        campo cod1611 { 
            glosa "Gasto por saldo inicial de existencias o insumos del negocio en cambio de régimen, pagados"
            codigo "1611"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1612 { 
            glosa "Gasto por saldo inicial de activos fijos depreciables en cambio de régimen, pagados"
            codigo "1612"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1613 { 
            glosa "Gasto por pérdida tributaria en cambio de régimenExistencias o insumos del negocio, pagados"
            codigo "1613"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1614 { 
            glosa "Existencias, insumos y servicios del negocio, pagados"
            codigo "1614"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1615 { 
            glosa "Gastos de rentas de fuente extranjera, pagados"
            codigo "1615"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1616 { 
            glosa "Remuneraciones pagadasHonorarios pagados"
            codigo "1616"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1617 { 
            glosa "Honorarios pagadosAdquisición de bienes del activo fijo, pagados"
            codigo "1617"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1618 { 
            glosa "Adquisición de bienes del activo fijo, pagadosServicios pagados"
            codigo "1618"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1619 { 
            glosa "Servicios pagadosArriendos pagados"
            codigo "1619"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1620 { 
            glosa "Arriendos pagadosGastos aceptados por responsabilidad social"
            codigo "1620"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1621 { 
            glosa "Gastos por exigencias medio ambientales, pagados"
            codigo "1621"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1622 { 
            glosa "Intereses y reajustes pagados por préstamos y otrosAmortización de intangibles, art. 22° transitorio bis, inc. 4°, 5° y 6° Ley N° 21.210"
            codigo "1622"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1623 { 
            glosa "Amortización de intangibles, art. 22° transitorio bis, inc. 4°, 5° y 6° Ley N° 21.210Pérdida en rescate o enajenación de inversiones o bienes no depreciables"
            codigo "1623"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1624 { 
            glosa "Pérdida en rescate o enajenación de inversiones o bienes no depreciablesOtros gastos deducibles de los ingresos"
            codigo "1624"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1625 { 
            glosa "Otros gastos deducibles de los ingresosGastos o egresos pagados o adeudados por operaciones con empresas relac. del art. 14 letra A) LIR"
            codigo "1625"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1626 { 
            glosa "Gastos o egresos pagados o adeudados por operaciones con empresas relacionadas del art. 14 letra A) LIR"
            codigo "1626"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1627 { 
            glosa "Pérdidas tributarias de ejercicios anteriores"
            codigo "1627"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1628 { 
            glosa "Créditos incobrables castigados en el ejercicio (reconocidos sobre ingresos devengados)Total de Egresos Anuales"
            codigo "1628"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1629 { 
            glosa "Total de egresos anuales"
            codigo "1629"
            tipo entero0
            caracterizable TRUE
            largo 15             
            #[1629]=    [1611] +   [1612] +   [1613] +   [1614] +   [1820] +   [1615] +   [1616] +   [1617] + 	[1618] + 	[1620] +  [1621] +   [1622] +  [1624] +   [1625] +   [1626] +   [1627] +   [1628] + [1909]            
            formula {$cod1611 + $cod1612 + $cod1613 + $cod1614 + $cod1820 + $cod1615 + $cod1616 + $cod1617 + $cod1618 + $cod1620 + $cod1621 + $cod1622 + $cod1624 + $cod1625 + $cod1626 + $cod1627 + $cod1628 + $cod1909} 
        }
        campo cod1630 { 
            glosa "Base imponible a asignar a propietarios que son contribuyentes de impuestos finales, o pérdida tributaria del ejercicio"
            codigo "1630"
            tipo entero
            caracterizable TRUE
            largo 15 
            #[1630]	=	[1610]- [1629]
            formula {$cod1610- $cod1629} 
        }
        campo cod1631 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ SIN OBLIGACIÓN DE RESTITUCIÓN/ con derecho a devolución / Renta asignada propias y/o de terceros, provenientes de empresas sujetas al art. 14 letra D) N° 8 LIR"
            codigo "1631"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1632 {             
            glosa "Rentas asignadas propias y/o de terceros (art.14 letras A y/o D N° 3 de la LIR)"
            codigo "1632"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1633 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ CON OBLIGACIÓN DE RESTITUCIÓN/ Sin derecho a devolución"
            codigo "1633"
            tipo entero0
            caracterizable TRUE
            #[1633]=	[1874] + [1879] + [1885]
            formula { $cod1874 + $cod1879 + $cod1885}
            largo 15 
        }
        campo cod1634 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ SIN OBLIGACIÓN DE RESTITUCIÓN/ Sin derecho a devolución"
            codigo "1634"
            tipo entero0
            caracterizable TRUE
            #[1634]	=	[1876] + [1881] + [1887]
            formula { $cod1876 + $cod1881 + $cod1887}
            largo 15 
        }
        campo cod1635 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ SIN OBLIGACIÓN DE RESTITUCIÓN/ Sin derecho a devolución / Otras rentas de fuente chilena afectas al IGC o IA (según instrucciones), rtas y rebajas"
            codigo "1635"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1636 { 
            glosa "Crédito al IGC del 5% sobre total de retiros o dividendos que excedan de 310 UTA que tengan derecho a crédito por IDPC con obligación de restitución, según art. 56 N° 4 LIR"
            codigo "1636"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1637 {             
            glosa "Crédito al IGC por Impuesto Territorial pagado por explotación de bienes raíces no agrícolas, según art. 56 N° 5 LIR"
            codigo "1637"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1638 {            
            glosa "Crédito al IGC por art. 33 bis, según art. 14 letra D) N°8 letra a) numeral (v) LIR"
            codigo "1638"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1639 {             
            glosa "Crédito al IGC por ingreso diferido, según art. 14 letra D) N°8 letra d) numeral (ii) LIR"
            codigo "1639"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1640 { 
            glosa "BASE IMPONIBLE/ IDPC contribuyentes  o entidades sin vínculo directo o indirecto con propietarios afectos a IGC o IA, según art. 14 letra G) LIR"
            codigo "1640"
            tipo entero
            caracterizable TRUE
            largo 15 
            #[1640]	=	"Si ([1690] > 0 . y. [1109]=0 .y. atributo = M14G); entonces [1690]
            #Sino 0"
            formula {PSTV($cod1690) > 0 AND $cod1109==0 AND ($aM14G!=0)? $cod1690 : 0 }
        }
        campo cod1641 { 
            glosa "REBAJAS AL IMPUESTO/IDPC contribuyentes  o entidades sin vínculo directo o indirecto con propietarios afectos a IGC o IA, según art. 14 letra G) LIR"
            codigo "1641"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #b.90	[1641]	=	"Si {atributo = M14G .y. ([898] + [373] + [382] + [761] + [773] + [365] + [366] + [392] + [1153] + [984] + [839] + [384] + [390] + [742] + [841] + [855]) > 0}; entonces Min {([1640] * P84); ([898] + [373] + [382] + [761] + [773] + [365] + [366] + [392] + [1153] + [984] + [839] + [384] + [390] + [742] + [841] + [855])}
            #Sino 0"
            formula { ($aM14G!=0 AND ($cod898 + $cod373 + $cod382 + $cod761 + $cod773 + $cod365 + $cod366 + $cod392 + $cod1153 + $cod984 + $cod839 + $cod384 + $cod390 + $cod742 + $cod841 + $cod855)>0) ? MINL( ROUND_DECIMAL($cod1640 * $p84,$decimales) ,($cod898 + $cod373 + $cod382 + $cod761 + $cod773 + $cod365 + $cod366 + $cod392 + $cod1153 + $cod984 + $cod839 + $cod384 + $cod390 + $cod742 + $cod841 + $cod855)):0} 
        }
        campo cod1642 { 
            glosa "IDPC contribuyentes  o entidades sin vínculo directo o indirecto con propietarios afectos a IGC o IA, según art. 14 letra G) LIR"
            codigo "1642"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1642]	=	POS(P84*[1640] - [1641])
            formula { PSTV(ROUND_DECIMAL($p84 * $cod1640,$decimales) - $cod1641) }
        }
        campo cod1643 { 
            glosa "Base Imponible / Impuesto único tasa 25% por distribuciones desproporcionadas, según art. 39° transitorio Ley N° 21.210"
            codigo "1643"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1644 { 
            glosa "Impuesto único tasa 25% por distribuciones desproporcionadas, según art. 39° transitorio Ley N° 21.210"
            codigo "1644"
            tipo entero0
            caracterizable TRUE
            largo 15 
        #[1644]	=	[1643] * P64
        formula { ROUND_DECIMAL($cod1643 * $p64,$decimales) }
        }
        campo cod1645 { 
            #glosa "PPM puestos a disposición de los propietarios de empresas del régimen de transparencia tributaria del art. 14 letra D) N° 8 LIR"
            glosa "PPM puestos a disposición de los propietarios de empresas del régimen de transparencia tributaria del art. 14 letra D) N° 8 LIR"
            codigo "1645"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1646 { 
            glosa "Impuestos declarados y pagados en conformidad al art. 69 N° 3 y N° 4 LIR"
            codigo "1646"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1647 { 
            glosa "Excedente crédito por IDPC del código 76"
            codigo "1647"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1648 { 
            glosa "Suma codigos 1647 y 1647"
            codigo "1648"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1648]	=	[1646] + [1647]
            #formula {$cod1646 + $cod1647} 
        }
        campo cod1649 { 
            glosa "ELIMINADO"
            codigo "1649"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1650 { 
            glosa "Honorarios líquidos percibidos de fuente extranjera"
            codigo "1650"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1651 { 
            glosa "Remanente ejercicio anterior"
            codigo "1651"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1652 { 
            glosa "Crédito recibido en el ejercicio"
            codigo "1652"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1653 { 
            glosa "Crédito imputado en el ejercicio"
            codigo "1653"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1654 { 
            glosa "Remanente para ejercicio siguiente"
            codigo "1654"
            tipo entero0
            caracterizable TRUE
            largo 15 
        #[1654]=   Pos(   [1651]+    [1652]-    [1653])
        formula { PSTV($cod1651 + $cod1652 - $cod1653)}
        }
        campo cod1655 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Sin D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo negativo)"
            codigo "1655"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1656 { 
            glosa "REGISTRO SAC (ART. 14 LETRA D) N° 3 LIR) / Acumulados a contar desde el 01.01.2017 / No Sujeto a Restitución /  Con D° Devolución / Remanente ejercicio anterior o saldo inicial (saldo negativo)"
            codigo "1656"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1657 { 
            glosa "Ingresos del giro percibidos o devengados"
            codigo "1657"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1658 { 
            glosa "Rentas de fuente extranjera"
            codigo "1658"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1659 { 
            glosa "Intereses percibidos o devengados"
            codigo "1659"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1660 { 
            glosa "Otros ingresos percibidos o devengados"
            codigo "1660"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1661 { 
            glosa "Costo directo de los bienes y servicios"
            codigo "1661"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1662 { 
            glosa "Remuneraciones"
            codigo "1662"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1663 { 
            glosa "Depreciación financiera del ejercicio"
            codigo "1663"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1664 { 
            glosa "Intereses pagados o adeudados"
            codigo "1664"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1665 { 
            glosa "Gastos por donaciones"
            codigo "1665"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1666 { 
            glosa "Otros gastos financieros"
            codigo "1666"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1667 { 
            glosa "Gastos por inversión privada en investigación y desarrollo certificados por CORFO"
            codigo "1667"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1668 { 
            glosa "Gastos por inversión privada en Investigación y desarrollo no certificados por CORFO"
            codigo "1668"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1669 { 
            glosa "Costos y gastos necesarios para producir las rentas de fuente extranjera"
            codigo "1669"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1670 { 
            glosa "Gastos por impuesto renta e impuesto diferido"
            codigo "1670"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1671 { 
            glosa "Otros gastos deducidos de los ingresos brutos"
            codigo "1671"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1672 { 
            glosa "Resultado financiero "
            codigo "1672"
            tipo entero
            caracterizable TRUE
            largo 15 
            #[1672]	=	 [1657]+     [1658]+     [1659]+   [1660] -   [1661]-   [1662]-   [1140]-   [1663]-   [1664] -   [1665]-   [1666]-   [1667]-   [1668]-   [1141]-   [1142]-   [1669]-   [1670]-   [1671]			
            formula { $cod1657+   $cod1658+   $cod1659+ $cod1660 - $cod1661- $cod1662- $cod1140- $cod1663- $cod1664 - $cod1665- $cod1666- $cod1667- $cod1668- $cod1141- $cod1142- $cod1669- $cod1670- $cod1671} 
        }
        campo cod1673 { 
            glosa "Corrección monetaria saldo deudor (art. 32 N° 1 LIR)"
            codigo "1673"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1674 { 
            glosa "Corrección monetaria saldo acreedor (art. 32 N° 2 LIR)"
            codigo "1674"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1675 { 
            glosa "Depreciación financiera del ejercicio"
            codigo "1675"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1676 { 
            glosa "Rentas tributables no reconocidas financieramente"
            codigo "1676"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1677 { 
            glosa "Gastos agregados por donaciones"
            codigo "1677"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.180	[1677]	=	[1665]
            formula {$cod1665} 
        }
        campo cod1678 { 
            glosa "Gastos que se deben agregar a la RLI según el art. 33 N° 1 LIR"
            codigo "1678"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1679 { 
            glosa "Depreciación tributaria del ejercicio"
            codigo "1679"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1680 { 
            glosa "Gasto goodwill tributario del ejercicio"
            codigo "1680"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1681 { 
            glosa "Impuesto específico a la actividad minera"
            codigo "1681"
            tipo entero0
            largo 15 
            #b.95	[1681]	=	[825]
            formula {$cod825}
        }
        campo cod1682 { 
            glosa "Gastos rechazados afectos a la tributación del art. 21 inc. 1°  LIR "
            codigo "1682"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1683 { 
            glosa "Gastos rechazados afectos a la tributación del art. 21 inc. 3° LIR "
            codigo "1683"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1684 { 
            glosa "Otras partidas"
            codigo "1684"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1685 { 
            glosa "Rentas exentas IDPC (art. 33 N°2 LIR )"
            codigo "1685"
            tipo entero0
        valorPorDefecto "0"
            caracterizable TRUE
            largo 15 
        }
        campo cod1686 { 
            glosa "Dividendos y/o utilidades sociales percibidos o devengados (art. 33 N° 2 LIR)"
            codigo "1686"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1687 { 
            glosa "Gastos aceptados por donaciones"
            codigo "1687"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1688 { 
            glosa "Ingresos no renta, generados (art. 17 LIR)"
            codigo "1688"
            tipo entero0
        valorPorDefecto "0"
            caracterizable TRUE
            largo 15 
        }
        campo cod1689 { 
            glosa "Pérdidas de ejercicios anteriores (art. 31 N° 3 LIR)"
            codigo "1689"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1690 { 
            glosa "Renta líquida imponible afecta a IDPC o pérdida tributaria del ejercicio"
            codigo "1690"
            tipo entero
            caracterizable TRUE
            largo 15
            #[1690]	=	Si [1728] > 0; Pos([1728]- [1154]-[1157])
            #                   Si no; [1728]
            formula {$cod1728 > 0 ? PSTV($cod1728- $cod1154-$cod1157) : $cod1728 }

        }
        campo cod1691 { 
            glosa "Saldo exceso de retiros de 2014, determinados al 31 de diciembre para ejercicios siguientes"
            codigo "1691"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1692 { 
            glosa "Saldo negativo del registro REX al término del ejercicio"
            codigo "1692"
            tipo entero0
            largo 15 
            #a.183	[1692]	=	NEG {([1221] -      [1222] +   [1224] -   [1225] -   [1226] +   [1227] +   [1228] -   [1229]) + ([1730] +      [1223] +   [1733] -   [1735] -   [1737] +   [1739] +   [1741] -   [1743]) + ([1731] +      [1734] -   [1736] -   [1738] +   [1740] +   [1742] -   [1744]) + ([1234] -      [1235] +   [1236] -   [1237] -   [1238] +   [1239] +   [1240] -   [1241]) + ([1246] -      [1247] +   [1248] -   [1249] -   [1250] +   [1251] +   [1252] -   [1253])}
            #					NEG {([1221] - [1222] + [1224] - [1225] - [1226] + [1228] - [1229]) + ([1730] + [1733] - [1735] - [1737] + [1741] - [1743]) + ([1731] - [1843] + [1734] - [1736] - [1738] + [1740] + [1742] - [1744]) + ([1234] - [1235] + [1236] - [1237] - [1238] + [1239] + [1240] - [1241]) + ([1246] - [1247] + [1248] - [1249] - [1250] + [1251] + [1252] - [1253])}					
            formula {NEG(($cod1221 - $cod1222 + $cod1224 - $cod1225 - $cod1226 + $cod1227 + $cod1228 - $cod1229 ) + ($cod1730 + $cod1223 + $cod1733 - $cod1735 - $cod1737 + $cod1739 + $cod1741 - $cod1743 ) +  ($cod1731 - $cod1843 + $cod1734 - $cod1736 - $cod1738 + $cod1740 + $cod1742 - $cod1744)  + ($cod1234 - $cod1235 + $cod1236 - $cod1237 - $cod1238 + $cod1239 + $cod1240 - $cod1241)  + ($cod1246 - $cod1247 + $cod1248 - $cod1249 - $cod1250 + $cod1251 + $cod1252 - $cod1253 ) )}
        }
        campo cod1693 { 
            glosa "Saldo positivo del registro REX al término del ejercicio, antes de imputaciones"
            codigo "1693"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.184	[1693]	=	POS { ([1221] - [1222] + [1224] - [1225] - [1226] + [1227] + [1228] -                 [1229] ) + ([1730] + [1223] + [1733] - [1735] - [1737] + [1739] + [1741] -                  [1743]) + ([1731] + [1734] - [1736] - [1738] + [1740] + [1742] -               [1744])  + ([1234] - [1235] + [1236] - [1237] - [1238] + [1239] + [1240] -                  [1241])  + ([1246] - [1247] + [1248] - [1249] - [1250] + [1251] + [1252] -                  [1253])}
            #					POS {([1221] - [1222] + [1224] - [1225] - [1226] + [1228] - [1229]) + ([1730] + [1733] - [1735] - [1737] + [1741] - [1743]) + ([1731] - [1843] + [1734] - [1736] - [1738] + [1740] + [1742] - [1744]) + ([1234] - [1235] + [1236] - [1237] - [1238] + [1239] + [1240] - [1241]) + ([1246] - [1247] + [1248] - [1249] - [1250] + [1251] + [1252] - [1253])}
            formula {PSTV(           ($cod1221 - $cod1222 + $cod1224 - $cod1225 - $cod1226 + $cod1227 + $cod1228 - $cod1229 ) + ($cod1730 + $cod1223 + $cod1733 - $cod1735 - $cod1737 + $cod1739 + $cod1741 - $cod1743 ) + ($cod1731 - $cod1843 + $cod1734 - $cod1736 - $cod1738 + $cod1740 + $cod1742 - $cod1744)  + ($cod1234 - $cod1235 + $cod1236 - $cod1237 - $cod1238 + $cod1239 + $cod1240 - $cod1241 )  + ($cod1246 - $cod1247 + $cod1248 - $cod1249 - $cod1250 + $cod1251 + $cod1252 - $cod1253 ) )}
        }
        campo cod1694 { 
            glosa "Renta líquida imponible afecta a IDPC del ejercicio"
            codigo "1694"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1694]	=	Pos[1690]
            formula {PSTV($cod1690)} 			
        }
        campo cod1695 { 
            glosa "Pérdida tributaria del ejercicio al 31 de diciembre "
            codigo "1695"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1695]	=	 NEG([1690])
            formula {NEG($cod1690)} 			
        }
        campo cod1696 { 
            glosa "Pérdidas de ejercicios anteriores (art. 31 N° 3 LIR)"
            codigo "1696"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1696]	=	[1689]
            formula {$cod1689} 			
        }
        campo cod1697 { 
            glosa "Partidas del inc. 1° no afectas al IU de tasa 40% y del inc. 2° del art. 21 LIR, reajustados"
            codigo "1697"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1698 { 
            glosa "CPT positivo final (recuadro N° 14)"
            codigo "1698"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1698]	=	"Si atributo = M14A; entonces [645]
            #Sino 0"
            formula {$aM14A!=0 ? $cod645:0} 			
        }
        campo cod1699 { 
            glosa "Remesas, retiros o dividendos repartidos en el ejercicio, reajustados"
            codigo "1699"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1699]	=	"Si atributo = M14A; entonces [1208] + [1218] + [1230] + [1745] + {1746] + [1242] + [1254] + [1193] + [1194] 
            #Sino 0"
            formula {$aM14A!=0 ? ($cod1208 + $cod1218 + $cod1230 + $cod1745 + $cod1746 + $cod1242 + $cod1254 + $cod1193 + $cod1194):0} 			
        }
        campo cod1700 { 
            glosa "Ingreso diferido por cambio de régimen"
            codigo "1700"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1700]	=	[1150]
            formula {$cod1150} 			
        }
        campo cod1701 { 
            glosa "Incentivo al ahorro según art. 14 letra E) LIR"
            codigo "1701"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1701]	=	[1154]
            formula {$cod1154}			
        }
        campo cod1702 { 
            glosa "Base del IDPC voluntario según  art. 14 letra A) N°  6 LIR"
            codigo "1702"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1702]	=	[1157]
            formula {$cod1157} 			
        }
        campo cod1703 { 
            glosa "CPTS positivo"
            codigo "1703"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1703]	=	[1545]
            formula {$cod1545} 	
        }
        campo cod1704 { 
            glosa "Remesas, retiros o dividendos repartidos en el ejercicio, históricos"
            codigo "1704"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1704]	=	Si atributo = 14D1; entonces [1475] + [1476] + [1767] + [1768] + {1477] + [1478] + [1193]
            #Sino 0 
            formula {$a14D1!=0 ? ($cod1475 + $cod1476 + $cod1767 + $cod1768 + $cod1477 + $cod1478 + $cod1193):0} 			
        }
        campo cod1705 { 
            glosa "Base imponible afecta a IDPC del ejercicio"
            codigo "1705"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1705]	=	Pos[1440]
            formula {PSTV($cod1440)} 			
        }
        campo cod1706 { 
            glosa "Pérdida tributaria del ejercicio al 31 de diciembre "
            codigo "1706"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1706]	=	NEG {[1440]}
            formula {NEG($cod1440)}			
        }
        campo cod1707 { 
            glosa "Pérdidas tributarias de ejercicios anteriores"
            codigo "1707"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1707]	=	[1408] + [1426]
            formula {$cod1408 + $cod1426} 
        }
        campo cod1708 { 
            glosa "Partidas del inc. 1° no afectas al IU de tasa 40% y del inc. 2° del art. 21 LIR"
            codigo "1708"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1708]	=	[1422]
            #formula {$cod1422}			
        }
        campo cod1709 { 
            glosa "Ingreso diferido imputado en el ejercicio, debidamente incrementado y reajustado, cuando corresponda"
            codigo "1709"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1709]	=	[1404]
            formula {$cod1404}			
        }
        campo cod1710 { 
            glosa "Incentivo al ahorro según art. 14 letra E) LIR"
            codigo "1710"
            tipo entero0
            caracterizable TRUE
            largo 15
            #[1710]	=	[1432]
            formula {$cod1432} 			
        }
        campo cod1711 { 
            glosa "Base del IDPC voluntario según art. 14 letra A) N° 6 LIR"
            codigo "1711"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1711]	=	[1433]
            formula {$cod1433}			
        }
        campo cod1712 { 
            glosa "Base imponible del ejercicio, asignable a los propietarios"
            codigo "1712"
            tipo entero0
            largo 15 
            #a.169	[1712]	=	"Si ([1580] + [1582] + [1573]) > 0; entonces Pos[1630]
            #Sino 0"
            formula { ($cod1580 + $cod1582 + $cod1573) >0 ? PSTV($cod1630) : 0}
        }
        campo cod1713 { 
            glosa "Pérdida tributaria del ejercicio al 31 de diciembre"
            codigo "1713"
            tipo entero0
            largo 15 
            #a.170	[1713]	=	"Si ([1580] + [1582] + [1573]) > 0; entonces NEG[1630]
            #Sino 0"
            formula { ($cod1580 + $cod1582 + $cod1573) >0 ? NEG($cod1630) : 0}
        }
        campo cod1714 { 
            glosa "Pérdidas tributarias de ejercicios anteriores"
            codigo "1714"
            tipo entero0
            largo 15 
            #a.194	[1714]	=	"Si ([1580] + [1582] + [1573]) > 0; entonces ([1613] + [1627])
            #Sino 0"
            formula { ($cod1580 + $cod1582 + $cod1573) >0 ? ($cod1613 + $cod1627) : 0}
        }
        campo cod1715 { 
            glosa "Ingreso diferido imputado en el ejercicio, debidamente incrementado y reajustado, cuando corresponda"
            codigo "1715"
            tipo entero0
            largo 15 
            #a.172	[1715]	=	"Si ([1580] + [1582] + [1573]) > 0; entonces [1608]
            #Sino 0"
            formula {($cod1580 + $cod1582 + $cod1573)>0 ? $cod1608:0} 	
        }
        campo cod1716 { 
            glosa "Crédito por activos fijos adquiridos en el ejercicio (art. 33 bis LIR)"
            codigo "1716"
            tipo entero0
            largo 15 
            #a.173	[1716]	=	"Si ([1580] + [1582] + [1573]) > 0; entonces [1609]
            #Sino 0"
            formula {($cod1580 + $cod1582 + $cod1573)>0 ? $cod1609:0} 	
        }
        campo cod1717 { 
            glosa "CPT negativo final (recuadro N° 14)"
            codigo "1717"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1717]	=	"Si atributo = M14A; entonces [646]
            #Sino 0"
            formula {$aM14A!=0 ? $cod646:0} 			
        }

        campo cod1718 { 
            glosa "Subtotal"
            codigo "1718"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #     [1718]=	Si 1698 > 0; ([1698] + [1692] + [1699])
            #                   Sino; Pos ([1692] + [1699] - [1717])
            formula {$cod1698 > 0 ? ($cod1698 + $cod1692 + $cod1699) : PSTV($cod1692 + $cod1699 - $cod1717) }			
        }

        campo cod1719 { 
            glosa "CPTS negativo "
            codigo "1719"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1719]	=	[1546]
            formula {$cod1546} 			
        }
        campo cod1720 { 
            glosa "Subtotal"
            codigo "1720"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1720]	=	Pos ([1703]  - [1719] +  [1492] + [1704])
            formula { PSTV($cod1703  - $cod1719 +  $cod1492 + $cod1704)}			
        }
        campo cod1721 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ CON OBLIGACIÓN DE RESTITUCIÓN/ Sin derecho a devolución"
            codigo "1721"
        #[1721]	=	[1853] + [1858]
        formula { $cod1853 + $cod1858}
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1722 { 
            glosa "CRÉDITO POR IMPUESTO DE PRIMERA CATEGOR¿?A/ CON OBLIGACIÓN DE RESTITUCIÓN/ Con derecho a devolución"
            codigo "1722"
            tipo entero0
            caracterizable TRUE
        #[1722]	=	[1854] + [1859]
        formula { $cod1854 + $cod1859}
            largo 15 
        }
        campo cod1723 { 
            glosa "Acumulados a contar desde el 01.01.2017 /No Sujeto a Restitución/Sin D° Devolución/Remanente ejercicio siguiente (saldo negativo)"
            codigo "1723"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1723]=NEG(    [1270] -    [1821] +   [1271] -   [1272] +   [1273] +   [1274] -   [1275] -   [1276] -   [1277])
            formula {NEG($cod1270 -  $cod1821 + $cod1271 - $cod1272 + $cod1273 + $cod1274 - $cod1275 - $cod1276 - $cod1277)}			
        }
        campo cod1724 { 
            glosa "Acumulados a contar desde el 01.01.2017 /No Sujeto a Restitución/Con D° Devolución/ Remanente ejercicio siguiente (saldo negativo)Acumulados a contar desde el 01.01.2017 /Sujeto a Restitución/Sin D° Devolución/ Remanente ejercicio anterior (saldo positivo"
            codigo "1724"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1724]=	NEG([1279] -    [1822] +   [1280] - [  1281] + [  1282] + [  1283] - [  1284] -   [1285] - [  1286])
            formula {NEG($cod1279  - $cod1822 + $cod1280 - $cod1281 + $cod1282 + $cod1283 - $cod1284 - $cod1285 - $cod1286)} 			
        }
        campo cod1725 { 
            glosa "Saldo FUR  (cuando no haya sido considerado dentro del valor del capital aportado a la empresa)"
            codigo "1725"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1726 { 
            glosa "Retiros o dividendos percibidos en el ejercicio por participaciones en otras empresas"
            codigo "1726"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1727 { 
            glosa "Sobreprecio obtenido en la colocación de acciones de propia emisión, histórico"
            codigo "1727"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1728 { 
            glosa "Renta líquida imponible antes de rebaja por incentivo al ahorro (art. 14 letra E) LIR) y/o por pago de IDPC voluntario (art. 14 letra A) N°6 LIR y art. 42° transitorio Ley N° 21.210) o pérdida tributaria"
            codigo "1728"
            tipo entero
            caracterizable TRUE
            largo 15 
            #[1728]=	[1672]-  [1673]+    [1674]+    [1144]+    [1675]+    [1175]+    [1676]+    [1677]+    [1678]+    [1150]+    [1147]+   [1148]+ [1149]+ [1151]- [1152]- [1176] - [1159]- [1679]- [1680]- [1681]- [1682]- [1683]- [1684]- [1685]- [1686]- [1183]- [1687]- [1688]- [1689]			
            formula { $cod1672 - $cod1673 + $cod1674 + $cod1144 + $cod1675 + $cod1175 + $cod1676 + $cod1677 + $cod1678 + $cod1150 + $cod1147 + $cod1148 + $cod1149 + $cod1151 - $cod1152 - $cod1176 - $cod1679 - $cod1680 - $cod1681 - $cod1682 - $cod1683 - $cod1684 - $cod1685 - $cod1686 - $cod1183 - $cod1687 - $cod1688 - $cod1689}
        }
        campo cod1729 { 
            glosa "Base imponible antes de rebaja por incentivo al ahorro (art. 14 letra E) LIR) y/o por pago de IDPC voluntario (art. 14 letra A) N°6 LIR y art. 42° transitorio Ley N° 21.210) o pérdida tributaria"
            codigo "1729"
            tipo entero
            caracterizable TRUE
            largo 15
            #[1729]	=	[1410]- [1430]+ [1431]
            formula {$cod1410- $cod1430+ $cod1431}			
        }
        campo cod1730 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA /  ISFUT / Remanente ejercicio anterior o saldo inicial reajustado (saldo positivo)"
            codigo "1730"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1731 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA /  OTRAS / Remanente ejercicio anterior o saldo inicial reajustado (saldo positivo)"
            codigo "1731"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1732 { 
            glosa "ELIMINADO"
            codigo "1732"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1733 { 
            glosa "REX/Renta con tributación cumplida/ISFUT/ Aumentos del ejercicio (por reorganizaciones)"
            codigo "1733"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1734 { 
            glosa "REX/Renta con tributación cumplida/Otras/ Aumentos del ejercicio (por reorganizaciones)"
            codigo "1734"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1735 { 
            glosa "REX/Renta con tributación cumplida/ISFUT/ Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1735"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1736 { 
            glosa "REX/Renta con tributación cumplida/Otras/ Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1736"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1737 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / ISFUT / Reversos y/o disminuciones del ejercicio (propios)"
            codigo "1737"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1738 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / OTRAS / Reversos y/o disminuciones del ejercicio (propios)"
            codigo "1738"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1739 { 
            glosa "ELIMINADO"
            codigo "1739"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1740 { 
            glosa "REX/Renta con tributación cumplida/Otras/ Aumentos del ejercicio (propios)"
            codigo "1740"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1741 { 
            glosa "REX/Renta con tributación cumplida/ISFUT/ Otros aumentos del ejercicio"
            codigo "1741"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1742 { 
            glosa "REX/Renta con tributación cumplida/Otras/ Otros aumentos del ejercicio"
            codigo "1742"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1743 { 
            glosa "REX/Renta con tributación cumplida/ISFUT/ Otras disminuciones del ejercicio"
            codigo "1743"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1744 { 
            glosa "REX/Renta con tributación cumplida/Otras/ Otras disminuciones del ejercicio"
            codigo "1744"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1745 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / ISFUT/ Remesas, retiros o dividendos imputados a los RTRE, reajustados"
            codigo "1745"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1746 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA A) LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / OTRAS / Remesas, retiros o dividendos imputados a los RTRE, reajustados"
            codigo "1746"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1747 { 
            glosa "RRE / REX / Rentas con Tributación Cumplida / ISFUT /Retiros en exceso y devoluciones de capital imputados en el ejercicio, reajustados"
            codigo "1747"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1748 { 
            glosa "RRE / REX / Rentas con Tributacion Cumplida / OTRAS /Retiros en exceso y devoluciones de capital imputados en el ejercicio, reajustados"
            codigo "1748"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1749 { 
            glosa "REX/Renta con tributación cumplida/ISFUT/ Remanente ejercicio siguiente (saldo positivo)"
            codigo "1749"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.75
            #[1749]	=	[1730] + [1733] - [1735] - [1737] + [1741] - [1743] - [1745] - [1747]	        
            formula {$cod1730 + $cod1733 - $cod1735 - $cod1737 + $cod1741 - $cod1743 - $cod1745 - $cod1747}	
        }
        campo cod1750 { 
            glosa "REX/Renta con tributación cumplida/Otras/ Remanente ejercicio siguiente (saldo positivo)"
            codigo "1750"
            tipo entero0
            caracterizable TRUE
            largo 15
            #[1750]=POS  {[1731]   - [1843]   + [1734]   - [1736]   - [1738]   + [1740]   + [1742]   - [1744]   - [1746]   - [1748]} 
            formula {PSTV($cod1731 - $cod1843 + $cod1734 - $cod1736 - $cod1738 + $cod1740 + $cod1742 - $cod1744 - $cod1746 - $cod1748)} 			
        }
        campo cod1751 { 
            glosa "ELIMINADO"
            codigo "1751"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #[1751]	=	NEG ([1731] - [1732]  + [1734] - [1736] - [1738] + [1740] + [1742] -[1744] - [1746] - [1748])
            #formula {NEG($cod1731 - $cod1732  + $cod1734 - $cod1736 - $cod1738 + $cod1740 + $cod1742 -$cod1744 - $cod1746 - $cod1748)} 			
        }
        campo cod1752 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / ISFUT / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1752"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1753 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / OTRAS / Remanente ejercicio anterior o saldo inicial (saldo positivo)"
            codigo "1753"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1754 { 
            glosa "ELIMINADO"
            codigo "1754"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1755 { 
            glosa "REX/Renta con tributación cumplida/ISFUT/ Aumentos del ejercicio (por reorganizaciones)"
            codigo "1755"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1756 { 
            glosa "REX/Renta con tributación cumplida/Otras/ Aumentos del ejercicio (por reorganizaciones)"
            codigo "1756"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1757 { 
            glosa "REX/Renta con tributación cumplida/ISFUT/ Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1757"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1758 { 
            glosa "REX/Renta con tributación cumplida/Otras/ Disminuciones del ejercicio (por reorganizaciones)"
            codigo "1758"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1759 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / ISFUT / Reversos y/o disminuciones del ejercicio (propios)"
            codigo "1759"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1760 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / OTRAS / Reversos y/o disminuciones del ejercicio (propios)"
            codigo "1760"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1761 { 
            glosa "ELIMINADO"
            codigo "1761"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1762 { 
            glosa "RRE Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / OTRAS / aumentos del ejercicio (propios)"
            codigo "1762"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1763 { 
            glosa "REX/Renta con tributación cumplida/ISFUT/ Otros aumentos del ejercicio"
            codigo "1763"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1764 { 
            glosa "RRE Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / OTRAS / otros aumentos del ejercicio"
            codigo "1764"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1765 { 
            glosa "REX/Renta con tributación cumplida/ISFUT/ Otras disminuciones del ejercicio"
            codigo "1765"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1766 { 
            glosa "REX/Renta con tributación cumplida/Otras/ Otras disminuciones del ejercicio"
            codigo "1766"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1767 { 
            glosa "REX/Rentas con tributación cumplida / ISFUT / Retiros, dividendos o remesas imputados a los RTRE"
            codigo "1767"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1768 { 
            glosa "REX/Rentas con tributación cumplida / Otras / Retiros, dividendos o remesas imputados a los RTRE"
            codigo "1768"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1769 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / ISFUT / Retiros en exceso y devoluciones de capital imputados en el ejercicio"
            codigo "1769"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1770 { 
            glosa "REGISTRO DE RENTAS EMPRESARIALES Y MOVIMIENTO STUT (ART. 14 LETRA D) N° 3 LIR) / REX / RENTAS CON TRIBUTACIÓN CUMPLIDA / OTRAS / Retiros en exceso y devoluciones de capital imputados en el ejercicio"
            codigo "1770"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1771 { 
            glosa "REX/Renta con tributación cumplida/ISFUT/ Remanente ejercicio siguiente (saldo positivo)"
            codigo "1771"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.121	        
            #[1771]	=   POS {[1752] + [1755] - [1757] - [1759] + [1763] - [1765] - [1767] - [1769]}
            formula { PSTV($cod1752 + $cod1755 - $cod1757 - $cod1759 + $cod1763 - $cod1765 - $cod1767 - $cod1769)}			
        }
        campo cod1772 { 
            glosa "REX/Renta con tributación cumplida/Otras/ Remanente ejercicio siguiente (saldo positivo)"
            codigo "1772"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #a.122
            #[1772]	= POS { [1753]  - [1845]   + [1756]   - [1758]   - [1760]   + [1762]   + [1764]   - [1766]   - [1768]   - [1770]}
            formula { PSTV($cod1753 - $cod1845 + $cod1756 - $cod1758 - $cod1760 + $cod1762 + $cod1764 - $cod1766 - $cod1768 - $cod1770)}			
        }
        campo cod1773 { 
            glosa "ELIMINADO"
            codigo "1773"
            tipo entero0
            caracterizable TRUE
            largo 15 
            #1773	=	NEG([1753] - [1754] + [1756] - [1758] - [1760] + [1762] + [1764] - [1766] - [1768] - [1770])
            #formula { NEG($cod1753 - $cod1754 + $cod1756 - $cod1758 - $cod1760 + $cod1762 + $cod1764 - $cod1766 - $cod1768 - $cod1770)}			
        }
        campo cod1774 { 
            glosa "Retiro único y extraordinario de fondos previsionales, establecido en la Ley N° 21.295"
            codigo "1774"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1775 { 
            glosa "Donaciones, según art. 18° Ley N° 21.258 (no afecta al LGA)"
            codigo "1775"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }
        campo cod1776 { 
            glosa "Pago F22 en banco"
            codigo "1776"
            tipo entero0
            caracterizable TRUE
            largo 15 
        }

        campo cod1781 {
            glosa "ELIMINADO"
            codigo "1781"
            tipo entero0
            largo 15
        }

        campo cod1782 {
            glosa "Dep.acel.vehículos eléctricos o híbridos"
            codigo "1782"
            tipo entero0
            largo 15
        }

        campo cod1783 {
            glosa "Dep. normal vehíc. eléctricos o híbridos"
            codigo "1783"
            tipo entero0
            largo 15
        }
        campo aux1784A {
            glosa "Condicion formula 1784"
            codigo ""
            tipo entero0
            largo 15
            formula { 
                (IN_LIST($tipoContribuyente, "1") AND ($aBHEP!=0 OR $aPSCD!=0 OR $aPSEI!=0 OR $aPCD2!=0 OR $aPEI2!=0))
                ?
                (ROUND_DECIMAL($cod170 * $p725,$decimales))
                :
                (
                    ($aVx010183 == 2 AND ($aBHEP!=0 OR $aPSCD!=0 OR $aPSEI!=0 OR $aPCD2!=0 OR $aPEI2!=0))
                    ?
                    ROUND_DECIMAL($cod618 * $p725,$decimales)
                    :
                    0
                )
            } 
        }
        campo cod1784 {
            glosa "5% de las rentas que forman parte de la declaración anual de impuestos a la renta según art. 65 LIR (calculado sobre el código 170)"
            codigo "1784"
            tipo entero0
            largo 15
            #Se modifica en SetValidaciones V3.2 AT2024.
            #a.187    [1784]    =    "Si F22 NO es Rectificatoria;
            #(Si (TIPO{[03]} = 1 .y. (atributo = BHEP .o. PSCD .o. PSEI .o.  PCD2 .o. PEI2)); entonces [170] * P725
            #Sino
            #Si (VX010183 = 2.y. (atributo = BHEP .o. PSCD .o. PSEI .o.  PCD2 .o. PEI2)); entonces [618] * P725
            #Sino f22[1784])  **Se considera [1784] de la primitiva"

            #Rectificatoria = $isRectificatoria
            #TIPO{[03]} = 1 => IN_LIST($tipoContribuyente, "1")
            #.y. = AND
            #.o. = OR

            formula {
                NOT($isRectificatoria) 
                ?
                $aux1784A
                :
                $cod1784 
            }
        }

        campo cod1785 {
            glosa "Cuota anual (30% o 10% del monto del préstamo tasa 0%), según art. 6 (art. primero) Ley N° 21.242 y/o art. 7 (art. primero) Ley N° 21.252 o art. 11 inc. 1° Ley N° 21.323   "
            codigo "1785"
            tipo entero0
            largo 15
        }

        campo cod1786 {
            glosa "Monto a pagar de la(s) cuota(s) / Préstamo AC 2020 (Leyes N° 21.242 y N° 21.252)"
            codigo "1786"
            tipo entero0
            largo 15
            #a.188	[1786]	=	MIN {[1784]; ([1785] + [1798])}
            formula {MINL($cod1784, ($cod1785 + $cod1798))}
        }

        campo cod1787 {
            glosa "Pago anticipado por reintegro del préstamo tasa 0% (F-50, F-10 o códigos 1797 o 1842 del F-22 AT 2024), según el art. 6 (art. primero) Ley N° 21.242 y/o art. 7 (art. primero) Ley N° 21.252 o art. 11 inc. 3° Ley N° 21.323"
            codigo "1787"
            tipo entero0
            largo 15
        }

        campo cod1788 {
            glosa "Monto a pagar de la(s) cuota(s) después de anticipos / Préstamo AC 2020 (Leyes N° 21.242 y N° 21.252)"
            codigo "1788"
            tipo entero0
            largo 15
            #a.189	[1788]	=	POS([1786] + [1802] - [1787])
            formula {PSTV($cod1786 + $cod1802 - $cod1787)}
        }

        campo cod1789 {
            glosa "Retención adicional sobre rentas del art. 42 N° 1 LIR con tasa del 3%, por reintegro del préstamo tasa 0%, según  art. 9 letra a) (art. primero) Ley N° 21.252 (retención a trabajadores dependientes) o art. 11 letra a) Ley N° 21.323"
            codigo "1789"
            tipo entero0
            largo 15
        }

        campo cod1790 {
            glosa "Retención adicional sobre rentas del art. 42 N° 2 LIR con tasa del 3%, por reintegro préstamo tasa 0%, según art. 7 (art. primero) Ley N° 21.242 y art. 9 letra b) (art. primero) Ley N° 21.252 (retenc.  trabaj. independ.) o art. 11 letra b) Ley N° 21.323"
            codigo "1790"
            tipo entero0
            largo 15
        }

        campo cod1791 {
            glosa "PPMA Primera Categoría art. 84 letra a) y 14 letra D) N° 3 letra (k) y N° 8 letra (a) numeral (viii) LIR, con tasa 3%, por reintegro de préstamo tasa 0%, según art. 9 letra c) (art. primero) Ley N° 21.252 (EI)  o art. 11 letra c) Ley N° 21.323"
            codigo "1791"
            tipo entero0
            largo 15
        }

        campo cod1792 {
            glosa "PPMA Segunda Categoría art. 84 letra b) LIR, con tasa 3%, por reintegro de préstamo  tasa 0%, según art. 7 (art. primero) Ley N° 21.242 y art. 9 letra b) (art. primero) Ley N° 21.252 (trabajadores independientes)  o art. 11 letra b) Ley N° 21.323"
            codigo "1792"
            tipo entero0
            largo 15
        }

        campo cod1793 {
            glosa "Total pagos y o retenciones"
            codigo "1793"
            tipo entero0
            largo 15
            #a.190	[1793]	=	[1789] + [1790] + [1791] + [1792]
            formula {$cod1789 + $cod1790 + $cod1791 + $cod1792}
        }

        campo cod1794 {
            glosa "Monto a pagar de la(s) cuota(s) después de retenciones adicionales y PPMA"
            codigo "1794"
            tipo entero0
            largo 15
            #a.191	[1794]	=	POS{[1788] - [1793]}
            formula {PSTV($cod1788 - $cod1793)}
        }

        campo cod1795 {
            #glosa "Saldo a devolver por retenciones adicionales y PPMA en exceso"
            glosa "Monto de excedentes a devolver por retenciones adicionales del 3%"
            codigo "1795"
            tipo entero0
            largo 15
            #a.192	[1795]	=	"Si NEG([1788] - [1793]) > 0; entonces POS(NEG([1788] - [1793])  - [1842])
            #Sino 0"
            formula {NEG($cod1788 - $cod1793)>0 ? (PSTV(NEG($cod1788 - $cod1793) - $cod1842)):0}
        }

        campo cod1796 {            
            glosa "Monto a pagar cuota préstamo Tasa 0%"
            codigo "1796"
            tipo entero0
            largo 15
            #b.91	[1796]	=	[1794]
                        formula {$cod1794}
        }
        
        campo cod1797 {
            #glosa "Monto del código 1795 destinado voluntariamente a pagar el saldo pendiente de los préstamos tasa 0% o futuras cuotas de dichos préstamos / Préstamo AC 2020 (Leyes N° 21.242 y N° 21.252)"
            glosa "Monto destinado voluntariamente a pagar el saldo pendiente del préstamo solidario del Estado para futuras cuotas de Préstamo 2020"
            glosa "1797"
            codigo "1797"
            tipo entero0
            largo 15
        }

        campo cod1798{
            glosa "Saldo pendiente cuota año anterior / Préstamo AC 2020 (Leyes N° 21.242 y N° 21.252)"
            codigo "1798"
            tipo entero0
            largo 15
        }
        campo cod1799{
            glosa "Saldo pendiente cuota año anterior / Préstamo AC 2021 (Ley N° 21.323)"
            codigo "1799"
            tipo entero0
            largo 15
        }
        campo cod1800{
            glosa "ELIMINADO"
            codigo "1800"
            tipo entero0
            largo 15
        }

        campo cod1801{
            glosa "Cuota anual (30% o 10% del monto del préstamo tasa 0%), según art. 6 (art. primero) Ley N° 21.242 y/o art. 7 (art. primero) Ley N° 21.252 o art. 11 inc. 1° Ley N° 21.323 ( Préstamo AC 2021 (Ley N° 21.323)"	
            codigo "1801"
            tipo entero0
            largo 15
        }
        campo cod1802{
            glosa "Monto a pagar de la(s) cuota(s) / Préstamo AC 2021 (Ley N° 21.323)"
            codigo "1802"
            tipo entero0
            largo 15
            #a.197	MIN {[1784]; [1801]}
            #MIN {[1784]; [1801] + [1799]}
            formula { MINL($cod1784, $cod1801 + $cod1799)}
        }
        campo cod1803{
            glosa "ELIMINADO"
            codigo "1803"
            tipo entero0
            largo 15
        }

        campo cod1804{
            glosa "ELIMINADO"
            codigo "1804"
            tipo entero0
            largo 15
        }

        campo cod1805{
            glosa "ELIMINADO"
            codigo "1805"
            tipo entero0
            largo 15
        }

        campo cod1806{
            glosa "ELIMINADO"
            codigo "1806"
            tipo entero0
            largo 15
        }

        campo cod1807{
            glosa "ELIMINADO"
            codigo "1807"
            tipo entero0
            largo 15
        }

        campo cod1808{
            glosa "ELIMINADO"
            codigo "1808"
            tipo entero0
            largo 15
        }

        campo cod1809{
            glosa "Enajenación o rescate de instrumentos afectos al impuesto único del art. 107 LIR vigente a partir del 02.09.2022 /Acciones / Mayor  o menor  valor determinado"
            codigo "1809"
            tipo entero
            largo 15
        }
        campo cod1810{
            glosa "ELIMINADO"
            codigo "1810"
            tipo entero0
            largo 15
        }

        campo cod1811{
            glosa "ELIMINADO"
            codigo "1811"
            tipo entero0
            largo 15
        }

        campo cod1812{
            glosa "ELIMINADO"
            codigo "1812"
            tipo entero0
            largo 15
        }

        campo cod1813{
            glosa "Enajenación o rescate de instrumentos afectos al impuesto único del art. 107 LIR vigente a partir del 02.09.2022 / Cuotas de fondos mutuos y/o fondos de inversión / Mayor  o menor  valor determinado"
            codigo "1813"
            tipo entero
            largo 15
        }
        campo cod1814{
            glosa "Resultado neto de las operaciones del ejercicio"
            codigo "1814"
            tipo entero
            largo 15
            #a.195	[1814]	=	[1809] + [1813]
            formula {$cod1809 + $cod1813}
        }
        campo cod1815{
            glosa "Pérdida de arrastre del ejercicio anterior actualizada"
            codigo "1815"
            tipo enteron
            largo 15
        }
        campo cod1816{
            glosa "Base imponible o pérdida del ejercicio"
            codigo "1816"
            tipo entero
            largo 15
            #a.196	[1816]	=	[1814] + [1815]
            formula {$cod1814 + $cod1815}
        }

        campo cod1817 {
            glosa "Ing. Giro deveng. Ejerc ant y perc ejerc"
            codigo "1817"
            tipo entero0
            largo 15
        }

        campo cod1818 {
            glosa "Exist. Insum servic negoc adeu ejerc ant"
            codigo "1818"
            tipo entero0
            largo 15
        }

        campo cod1819 {
            glosa "Ing. Giro deveng. Ejerc ant y perc ejerc"
            codigo "1819"
            tipo entero0
            largo 15
        }

        campo cod1820 {
            glosa "Exist. Insum servic negoc adeu ejerc ant"
            codigo "1820"
            tipo entero0
            largo 15
        }

        campo cod1821 {
            glosa "REG.SAC/ac/ NSR/Sin D° Dev/ Rem ant neg"
            codigo "1821"
            tipo entero0
            largo 15
        }

        campo cod1822 {
            glosa "REG.SAC/ac/ NSR/Con D° Dev/ Rem ant neg"
            codigo "1822"
            tipo entero0
            largo 15
        }

        campo cod1823 {
            glosa "Saldo, aporte inic,ctas.part. inf gestor"
            codigo "1823"
            tipo entero0
            largo 15
        }

        campo cod1824 {
            glosa "Saldo final ejerc.ctas.part. inf gestor"
            codigo "1824"
            tipo entero0
            largo 15
        }

        campo cod1825 {
            glosa "CIDPC asig ejerc. a partic cuenta partic"
            codigo "1825"
            tipo entero0
            largo 15
        }

        campo cod1826 {
            glosa "CIDPC IPE asig ejer. a partic cta partic"
            codigo "1826"
            tipo entero0
            largo 15
        }
        
        campo cod1827{
            #glosa "Monto a pagar cuota anticipo solidario para pago de cotizaciones, según art. 21 inc. 1° y 3° Ley N° 21.354  "
            glosa "Pago de anticipo solidario por pago de cotizaciones, según art. 21 inc. 3° Ley N° 21.354"
            codigo "1827"
            tipo entero0
            largo 15
        }
        campo cod1828{
            glosa "ELIMINADO"
            codigo "1828"
            tipo entero0
            largo 15
        }

        campo cod1829{
            glosa "Base Imponible / Impuesto único de 10% por enajenación o rescate de acciones de S.A. con presencia bursátil, de cuotas de fondos de inversión y fondos mutuos, según art. 107 LIR vigente a partir del 02.09.2022"
            codigo "1829"
            tipo entero0
            largo 15
            #b.96 [1829] = POS {[1816]}
            formula {PSTV($cod1816)}
        }

        campo cod1830{
            #glosa "Impuesto único de 10% por enajenación o rescate de acciones de S.A. con presencia bursátil, de cuotas de fondos de inversión y fondos mutuos, según art. 107 LIR vigente a partir del 02.09.2022"
            glosa "Impuesto único de 10%, según art. 107 LIR vigente a partir del 02.09.2022"
            codigo "1830"
            tipo entero0
            largo 15
            #b.97 [1830] = [1829] * P24
            formula { ROUND_DECIMAL($cod1829 * $p24,$decimales) }
        }

        campo cod1831{
            glosa "ELIMINADO"
            codigo "1831"
            tipo entero0
            largo 15
        }

        campo cod1832{
            glosa "ELIMINADO"
            codigo "1832"
            tipo entero0
            largo 15
        }

        campo cod1833{
            #glosa "Rebaja por donaciones a entidades sin fines de lucro según Título VIII bis D.L. N° 3.063 de 1979 (incorporado por Ley N° 21.440), efectuadas por contribuyentes del IUSC, IGC o IA"
            glosa "Rebaja por donaciones a entidades sin fines de lucro, efectuadas por contribuyentes del IUSC, IGC o IA"
            codigo "1833"
            tipo entero0
            largo 15
        }
        campo cod1834{
            glosa "ELIMINADO"
            codigo "1834"
            tipo entero0
            largo 15
        }

        campo cod1835{
            glosa "B.I.Contribución desarrollo regional"
            codigo "1835"
            tipo entero0
            largo 15
        }
        campo cod1836{
            glosa "Suspens.contribución desarrollo regional"
            codigo "1836"
            tipo entero0
            largo 15
        }
        campo cod1837{
            glosa "Impto contribución desarrollo regional"
            codigo "1837"
            tipo entero0
            largo 15
        }
        campo cod1838{
            glosa "Total gasto / Donac D.L. N° 3.063"
            codigo "1838"
            tipo entero0
            largo 15
        }
        campo cod1839{
            glosa "Gasto no acept / Donac D.L. N° 3.063"
            codigo "1839"
            tipo entero0
            largo 15
        }
        campo cod1840{
            glosa "ELIMINADO"
            codigo "1840"
            tipo entero0
            largo 15
        }

        campo cod1841{
            glosa "ELIMINADO"
            codigo "1841"
            tipo entero0
            largo 15
        }

        campo cod1842{
            #glosa "Monto destinado voluntario pago cuota"
            glosa "Monto destinado voluntariamente a pagar el saldo pendiente del préstamo solidario del Estado para futuras cuotas de Préstamo 2021"
            codigo "1842"
            tipo entero0
            largo 15
        }
        campo cod1843{
            glosa "Saldo negativo anterior  otras REX"
            codigo "1843"
            tipo entero0
            largo 15
        }
        campo cod1844{
            glosa "Saldo negativo ejerc. sigte. otros  REX"
            codigo "1844"
            tipo entero0
            largo 15
            #[1844]=	 NEG {[1731]  - [1843]   + [1734]   - [1736]   - [1738]   + [1740]   + [1742]   - [1744]   - [1746]   - [1748]}  
            formula {    NEG($cod1731 - $cod1843 + $cod1734 - $cod1736 - $cod1738 + $cod1740 + $cod1742 - $cod1744 - $cod1746 - $cod1748) }
        }
        campo cod1845{
            glosa "Saldo negativo anterior reaj.  otras REX"
            codigo "1845"
            tipo entero0
            largo 15
        }
        campo cod1846{
            glosa "Saldo negativo ejerc. sigte. otros  REX"
            codigo "1846"
            tipo entero0
            largo 15
            #[1846]=  NEG {[1753]  - {1845]   + [1756]   - [1758]   - [1760]   + [1762]   + [1764]   - [1766]   - [1768]   - [1770]}
            formula { NEG($cod1753 - $cod1845 + $cod1756 - $cod1758 - $cod1760 + $cod1762 + $cod1764 - $cod1766 - $cod1768 - $cod1770) }
        }
        campo cod1847{
            glosa "Mayor valor devengado a declarar en el año tributario actual"
            codigo "1847"
            tipo entero0
            largo 15
        }
        campo cod1848{
            glosa "CIDPC / Sin Oblig.Rest. / Con Derecho Dev /a) Rentas del arrendamiento, subarrendamiento, usufructo o cesión de cualquier otra forma del uso o goce temporal de bienes raíces agrícolas y no agrícolas, determinadas mediante el respectivo contrato"
            codigo "1848"
            tipo entero0
            largo 15
        }
        campo cod1849{
            glosa "a) Rentas del arrendamiento, subarrendamiento, usufructo o cesión de cualquier otra forma del uso o goce temporal de bienes raíces agrícolas y no agrícolas, determinadas mediante el respectivo contrato"
            codigo "1849"
            tipo entero0
            largo 15
        }
        campo cod1850{
            glosa "CIDPC / Sin Oblig.Rest. / b) Rentas por participaciones o cuotas de comunidad obtenidas por la empresa que determina su renta efectiva sin contabilidad completa"
            codigo "1850"
            tipo entero0
            largo 15
        }
        campo cod1851{
            glosa "CIDPC / con Oblig.Rest. / b) Rentas por participaciones o cuotas de comunidad obtenidas por la empresa que determina su renta efectiva sin contabilidad completa"
            codigo "1851"
            tipo entero0
            largo 15
        }
        campo cod1852{
            glosa "b) Rentas por participaciones o cuotas de comunidad obtenidas por la empresa que determina su renta efectiva sin contabilidad completa"
            codigo "1852"
            tipo entero0
            largo 15
        }
        campo cod1853{
            glosa "CIDPC / con Oblig.Rest. / sin derecho Dev / c) Rentas por participaciones o cuotas de comunidad obtenida por la empresa que determinan su renta efectiva sin contabilidad completa, provenientes de otras empresas en las que participa"
            codigo "1853"
            tipo entero0
            largo 15
        }
        campo cod1854{
            glosa "CIDPC / con Oblig.Rest. / con derecho Dev / c) Rentas por participaciones o cuotas de comunidad obtenida por la empresa que determinan su renta efectiva sin contabilidad completa, provenientes de otras empresas en las que participa"
            codigo "1854"
            tipo entero0
            largo 15
        }
        campo cod1855{
            glosa "CIDPC / sin Oblig.Rest. / sin derecho Dev / c) Rentas por participaciones o cuotas de comunidad obtenida por la empresa que determinan su renta efectiva sin contabilidad completa, provenientes de otras empresas en las que participa"
            codigo "1855"
            tipo entero0
            largo 15
        }
        campo cod1856{
            glosa "CIDPC / sin Oblig.Rest. / con derecho Dev / c) Rentas por participaciones o cuotas de comunidad obtenida por la empresa que determinan su renta efectiva sin contabilidad completa, provenientes de otras empresas en las que participa"
            codigo "1856"
            tipo entero0
            largo 15
        }
        campo cod1857{
            glosa "c) Rentas por participaciones o cuotas de comunidad obtenida por la empresa que determinan su renta efectiva sin contabilidad completa, provenientes de otras empresas en las que participa"
            codigo "1857"
            tipo entero0
            largo 15
        }
        campo cod1858{
            glosa "CIDPC / con Oblig.Rest. / sin derecho Dev / d) Rentas efectivas de terceros obtenidas por empresas acogidas al régimen de renta presunta"
            codigo "1858"
            tipo entero0
            largo 15
        }
        campo cod1859{
            glosa "CIDPC / con Oblig.Rest. / con derecho Dev / d) Rentas efectivas de terceros obtenidas por empresas acogidas al régimen de renta presunta"
            codigo "1859"
            tipo entero0
            largo 15
        }
        campo cod1860{
            glosa "CIDPC / sin Oblig.Rest. / sin derecho Dev / d) Rentas efectivas de terceros obtenidas por empresas acogidas al régimen de renta presunta"
            codigo "1860"
            tipo entero0
            largo 15
        }
        campo cod1861{
            glosa "CIDPC / sin Oblig.Rest. / con derecho Dev / d) Rentas efectivas de terceros obtenidas por empresas acogidas al régimen de renta presunta"
            codigo "1861"
            tipo entero0
            largo 15
        }
        campo cod1862{
            glosa "d) Rentas efectivas de terceros obtenidas por empresas acogidas al régimen de renta presunta"
            codigo "1862"
            tipo entero0
            largo 15
        }
        campo cod1863{
            glosa "CIDPC / sin Oblig.Rest. / sin derecho Dev / f) Otras rentas propias y/o de terceros"
            codigo "1863"
            tipo entero0
            largo 15
        }
        campo cod1864{
            glosa "CIDPC / sin Oblig.Rest. / con derecho Dev / f) Otras rentas propias y/o de terceros"
            codigo "1864"
            tipo entero0
            largo 15
        }
        campo cod1865{
            glosa "f) Otras rentas propias y/o de terceros"
            codigo "1865"
            tipo entero0
            largo 15
        }
        campo cod1866{
            glosa "CIDPC / sin Oblig.Rest. / con derecho Dev / a) Rentas de capitales mobiliarios (art. 20 N° 2 LIR)"
            codigo "1866"
            tipo entero0
            largo 15
        }
        campo cod1867{
            glosa "a) Rentas de capitales mobiliarios (art. 20 N° 2 LIR)"
            codigo "1867"
            tipo entero0
            largo 15
        }
        campo cod1869{
            glosa "b) Mayor valor obtenido en la enajenación o rescate de cuotas fondos mutuos y fondos de inversión y en la enajenación de acciones y derechos sociales (art. 17 N° 8 LIR) "
            codigo "1869"
            tipo entero0
            largo 15
        }
        campo cod1871{
            glosa "c) Retiros de ELD (arts. 42 ter y quáter LIR)"
            codigo "1871"
            tipo entero0
            largo 15
        }
        campo cod1872{
            glosa "CIDPC / sin Oblig.Rest. / con derecho Dev / e) Rentas esporádicas"
            codigo "1872"
            tipo entero0
            largo 15
        }
        campo cod1873{
            glosa "e) Rentas esporádicas"
            codigo "1873"
            tipo entero0
            largo 15
        }
        campo cod1874{
            glosa "CIDPC / con Oblig.Rest. / sin derecho Dev / a)  Rentas comprendidas en el art. 57 LIR, que no excedan los límites de 20 o 30 UTM, según corresponda"
            codigo "1874"
            tipo entero0
            largo 15
        }
        campo cod1875{
            glosa "CIDPC / con Oblig.Rest. / con derecho Dev / a)  Rentas comprendidas en el art. 57 LIR, que no excedan los límites de 20 o 30 UTM, según corresponda"
            codigo "1875"
            tipo entero0
            largo 15
        }
        campo cod1876{
            glosa "CIDPC / sin Oblig.Rest. / sin derecho Dev / a)  Rentas comprendidas en el art. 57 LIR, que no excedan los límites de 20 o 30 UTM, según corresponda"
            codigo "1876"
            tipo entero0
            largo 15
        }
        campo cod1877{
            glosa "CIDPC / sin Oblig.Rest. / con derecho Dev / a)  Rentas comprendidas en el art. 57 LIR, que no excedan los límites de 20 o 30 UTM, según corresponda"
            codigo "1877"
            tipo entero0
            largo 15
        }
        campo cod1878{
            glosa "a)  Rentas comprendidas en el art. 57 LIR, que no excedan los límites de 20 o 30 UTM, según corresponda"
            codigo "1878"
            tipo entero0
            largo 15
        }
        campo cod1879{
            glosa "CIDPC / con Oblig.Rest. / sin derecho Dev / b) Retiros y/o dividendos informados por las empresas y sociedades administradoras de FI y FM"
            codigo "1879"
            tipo entero0
            largo 15
        }
        campo cod1880{
            glosa "CIDPC / con Oblig.Rest. / con derecho Dev / b) Retiros y/o dividendos informados por las empresas y sociedades administradoras de FI y FM"
            codigo "1880"
            tipo entero0
            largo 15
        }
        campo cod1881{
            glosa "CIDPC / sin Oblig.Rest. / sin derecho Dev / b) Retiros y/o dividendos informados por las empresas y sociedades administradoras de FI y FM"
            codigo "1881"
            tipo entero0
            largo 15
        }
        campo cod1882{
            glosa "CIDPC / sin Oblig.Rest. / con derecho Dev / b) Retiros y/o dividendos informados por las empresas y sociedades administradoras de FI y FM"
            codigo "1882"
            tipo entero0
            largo 15
        }
        campo cod1883{
            glosa "b) Retiros y/o dividendos informados por las empresas y sociedades administradoras de FI y FM"
            codigo "1883"
            tipo entero0
            largo 15
        }
        campo cod1884{
            glosa "c) Retiros de ELD del art. 42 ter LIR efectuados durante el año 2024, que no excedan los límites exentos de impuesto de 200 u 800 UTM"
            codigo "1884"
            tipo entero0
            largo 15
        }
        campo cod1885{
            glosa "CIDPC / con Oblig.Rest. / sin derecho Dev / d) Otras Rentas exentas del IGC, según art. 54 N° 3 LIR"
            codigo "1885"
            tipo entero0
            largo 15
        }
        campo cod1886{
            glosa "CIDPC / con Oblig.Rest. / con derecho Dev / d) Otras Rentas exentas del IGC, según art. 54 N° 3 LIR"
            codigo "1886"
            tipo entero0
            largo 15
        }
        campo cod1887{
            glosa "CIDPC / sin Oblig.Rest. / sin derecho Dev / d) Otras Rentas exentas del IGC, según art. 54 N° 3 LIR"
            codigo "1887"
            tipo entero0
            largo 15
        }
        campo cod1888{
            glosa "CIDPC / sin Oblig.Rest. / con derecho Dev / d) Otras Rentas exentas del IGC, según art. 54 N° 3 LIR"
            codigo "1888"
            tipo entero0
            largo 15
        }
        campo cod1889{
            glosa "d) Otras Rentas exentas del IGC, según art. 54 N° 3 LIR"
            codigo "1889"
            tipo entero0
            largo 15
        }
        campo cod1890{
            glosa "CIDPC / sin Oblig.Rest. / con derecho Dev / Mayor valor en la enajenación de bienes raíces situados en Chile"
            codigo "1890"
            tipo entero0
            largo 15
        }
        campo cod1891{            
            glosa "Mayor valor en la enajenación de bienes raíces situados en Chile"
            codigo "1891"
            tipo entero0
            largo 15
        }
        campo cod1892{
            glosa "Base imponible / a) Rentas del arrendamiento, subarrendamiento, usufructo o cesión de cualquier otra forma de uso o goce temporal de bienes raíces agrícolas y no agrícolas"
            codigo "1892"
            tipo entero0
            largo 15
        }
        campo cod1893{
            glosa "Rebaja al impuesto / a) Rentas del arrendamiento, subarrendamiento, usufructo o cesión de cualquier otra forma de uso o goce temporal de bienes raíces agrícolas y no agrícolas"
            codigo "1893"
            tipo entero0
            largo 15
        }
        campo cod1894{
            glosa "Impuesto / a) Rentas del arrendamiento, subarrendamiento, usufructo o cesión de cualquier otra forma de uso o goce temporal de bienes raíces agrícolas y no agrícolas"
            codigo "1894"
            tipo entero0
            largo 15
            #POS {([1892] * P84) - [1893]}
            formula { PSTV( (ROUND_DECIMAL($cod1892 * $p84,$decimales)) - $cod1893 ) }
        }
        campo cod1895{
            glosa "Base imponible / b) Mayor valor en la enajenación de bienes raíces situados en Chile"
            codigo "1895"
            tipo entero0
            largo 15
        }
        #campo cod1896{
        #    glosa "Rebaja al impuesto /b) Mayor valor en la enajenación de bienes raíces situados en Chile"
        #    codigo "1896"
        #    tipo entero0
        #    largo 15
        #}
        campo cod1897{
            glosa "Impuesto / b) Mayor valor en la enajenación de bienes raíces situados en Chile"
            codigo "1897"
            tipo entero0
            #POS {([1895] * P84) }
            formula { PSTV( (ROUND_DECIMAL($cod1895 * $p84,$decimales)) ) }
            largo 15
        }
        campo cod1898{
            glosa "Base imponible / c) Rentas obtenidas por contribuyentes con contabilidad simplificada"
            codigo "1898"
            tipo entero0
            largo 15
        }
        campo cod1899{
            glosa "Rebaja al impuesto / c) Rentas obtenidas por contribuyentes con contabilidad simplificada"
            codigo "1899"
            tipo entero0
            largo 15
        }
        campo cod1900{
            glosa "Impuesto / c) Rentas obtenidas por contribuyentes con contabilidad simplificada"
            codigo "1900"
            tipo entero0
            #POS {([1898] * P84) - [1899]}
            formula { PSTV( (ROUND_DECIMAL($cod1898 * $p84,$decimales)) - $cod1899 ) }
            largo 15
        }
        campo cod1901{
            glosa "Base imponible / d) Otras rentas efectivas afectas a lDPC e impuestos finales"
            codigo "1901"
            tipo entero0
            largo 15
        }
        campo cod1902{
            glosa "Rebaja al impuesto / d) Otras rentas efectivas afectas a lDPC e impuestos finales"
            codigo "1902"
            tipo entero0
            largo 15
        }
        campo cod1903{
            glosa "Impuesto / d) Otras rentas efectivas afectas a lDPC e impuestos finales"
            codigo "1903"
            tipo entero0
            #POS {([1901] * P84) - [1902]}
            formula { PSTV( (ROUND_DECIMAL($cod1901 * $p84,$decimales)) - $cod1902 ) }
            largo 15
        }
        campo cod1904{
            glosa "a) PPM arts. 84 letras a), c) , e), y h) y 14 D N° 3 letra (k) LIR  y PPM royalty minero según art. 7 Ley N° 21.591"
            codigo "1904"
            tipo entero0
            largo 15
        }
        campo cod1905{
            glosa "b) PPM de segunda categoría art. 84 letra b) LIR"
            codigo "1905"
            tipo entero0
            largo 15
        }
        campo cod1906{
            glosa "c) PPM Voluntario, según art. 88 incs. 1° y 2° LIR"
            codigo "1906"
            tipo entero0
            largo 15
        }
        campo cod1907{                        
            glosa "Retenciones por retiros de seguros de vida con ahorro y seguros dotales, y retenciones efectuadas sobre las rentas de capitales mobiliarios"
            codigo "1907"
            tipo entero0
            largo 15
        }
        campo cod1908{
            glosa "Retenciones por actividades mineras según el N° 6 del art. 74 LIR"
            codigo "1908"
            tipo entero0
            largo 15
        }
        campo cod1909{
            glosa "Gastos aceptados por donaciones"
            codigo "1909"
            tipo entero0
            largo 15
        }
        campo cod1910{
            glosa "Deducción de impuesto por tasas rebajadas en virtud de convenios para evitar la doble tributación"
            codigo "1910"
            tipo entero0
            largo 15
        }
        campo cod1911{
            glosa "Donaciones de bienes inmuebles en apoyo al plan de emergencia habitacional, art. 26 Ley N° 21.450"
            codigo "1911"
            tipo entero0
            largo 15
        }
        campo cod1912{
            glosa "Base imponible / e) Otras rentas de fuente extranjera afectas"
            codigo "1912"
            tipo entero0
            largo 15
        }
        campo cod1913{
            glosa "Impuesto / e) Otras rentas de fuente extranjera afectas"
            codigo "1913"
            tipo entero0
            #POS {([1912] * P84) - [1918]}
            formula { PSTV( (ROUND_DECIMAL($cod1912 * $p84,$decimales)) - $cod1918 ) }
            largo 15
        }
        campo cod1914{
            glosa "Otras rentas de fuente extranjera afectas al IGC o IA (según instrucciones)"
            codigo "1914"
            tipo entero0
            largo 15
        }
        campo cod1915{
            #glosa "Crédito por la compra de viviendas nuevas adquiridas con créditos con garantía hipotecaria, según Ley N° 21.631"
            glosa "Crédito por la compra de viviendas nuevas adquiridas con créditos con garantía hipotecaria, según Ley N° 21.631"
            codigo "1915"
            tipo entero0
            largo 15
        }
        campo cod1916{
            glosa "d) Remanente del IEAM anotado en el código 829 del recuadro N° 8 "
            codigo "1916"
            tipo entero0
            largo 15
            #Si SUBTIPO{[03]} = 112 .o. 113 .o. 411; entonces  =  [829]
            #Sino 0
            formula {IN_LIST($subTipoContribuyente, "112|113|411")  ? $cod829 : 0 }
        }
        campo cod1917{
            glosa "CIDPC / Sin Oblig.Rest. / Sin derecho a devolución / a) Rentas del arrendamiento, subarrendamiento, usufructo o cesión de cualquier otra forma del uso o goce temporal de bienes raíces agrícolas y no agrícolas, determinadas mediante el respectivo contrato"
            codigo "1917"
            tipo entero0
            largo 15
        }
        campo cod1918{
            glosa "Rebaja al impuesto / e) Otras rentas de fuente extranjera afectas"
            codigo "1918"
            tipo entero0
            largo 15
        }
        campo cod1920 {
            glosa "CIDPC / Sin Oblig.Rest. / Con Derecho Dev /a) Rentas propias de actividad de renta presunta "
            codigo "1920"
            tipo entero0
            largo 15
        }
        campo cod1921 {
            glosa "a) Rentas propias de la actividad de renta presunta"
            codigo "1921"
            tipo entero0
            largo 15
        }
        campo cod1922 {
            glosa "CIDPC / Sin Oblig.Rest. / b) Rentas por participaciones o cuotas de comunidades obtenidas por la empresa que determina su renta presunta"
            codigo "1922"
            tipo entero0
            largo 15
        }
        campo cod1923 {
            glosa "b) Rentas por participaciones o cuotas de comunidades obtenidas por la empresa que determina su renta presunta"
            codigo "1923"
            tipo entero0
            largo 15
        }
        campo cod1924 {
            #glosa "Base imponible / a) Rentas propias de actividad de renta presunta agrícola"
            glosa  "Base imponible / a) Rentas propias de actividad de renta presunta agrícola"
            codigo "1924"
            tipo entero0
            largo 15
        }
        campo cod1925 {
            glosa "Rebaja al impuesto / a) Rentas propias de actividad de renta presunta agrícola"
            codigo "1925"
            tipo entero0
            largo 15
        }
        campo cod1926 {
            glosa "Impuesto / a) Rentas propias de actividad de renta presunta agrícola"
            codigo "1926"
            tipo entero0
            largo 15
        }
        campo cod1927 {
            glosa "Base imponible / b) Rentas propias de actividad de renta presunta transporte de pasajeros"
            codigo "1927"
            tipo entero0
            largo 15
        }
        campo cod1928 {
            glosa "Impuesto / b) Rentas propias de actividad de renta presunta transporte de pasajeros"
            codigo "1928"
            tipo entero0
            largo 15
        }
        campo cod1929 {
            glosa "Base imponible / c) Rentas propias de actividad de renta presunta transporte de carga"
            codigo "1929"
            tipo entero0
            largo 15
        }
        campo cod1930 {
            glosa "Impuesto / c) Rentas propias de actividad de renta presunta transporte de carga"
            codigo "1930"
            tipo entero0
            largo 15
        }
        campo cod1931 {
            glosa "Base imponible / d) Rentas propias de actividad de renta presunta minera"
            codigo "1931"
            tipo entero0
            largo 15
        }
        campo cod1932 {
            glosa "Impuesto / d) Rentas propias de actividad de renta presunta minera"
            codigo "1932"
            tipo entero0
            largo 15
        }
        campo cod1933 {
            glosa "Monto acogido al ISIF art 10 Ley N° 21.681, reajustado"
            codigo "1933"
            tipo entero0
            largo 15
        }
        campo cod1934 {
            glosa "Monto acogido al ISIF art 10 Ley N° 21.681, reajustado / ISFUT / ISIF"
            codigo "1934"
            tipo entero0
            largo 15
        }
        campo cod1935 {
            glosa "Monto acogido al ISIF art 10 Ley N° 21.681, reajustado / STUT"
            codigo "1935"
            tipo entero0
            largo 15
        }
        campo cod1936 {
            glosa "Monto extinguido por ISIF art 10  Ley N° 21.681, reajustado"
            codigo "1936"
            tipo entero0
            largo 15
        }
        campo cod1937 {
            glosa "Monto extinguido por ISIF art. 10  Ley N° 21.681, reajustado / Con D° Devolución / No Sujeto a Restitución / Acumulados a contar desde el 01.01.2017"
            codigo "1937"
            tipo entero0
            largo 15
        }
        campo cod1938 {
            glosa "Monto extinguido por ISIF art. 10  Ley N° 21.681, reajustado / Sin D° Devolución / Sujeto a Restitución / Acumulados a contar desde el 01.01.2017"
            codigo "1938"
            tipo entero0
            largo 15
        }
        campo cod1939 {
            glosa "Monto extinguido por ISIF art. 10  Ley N° 21.681, reajustado / Con D° Devolución / Sujeto a Restitución / Acumulados a contar desde el 01.01.2017"
            codigo "1939"
            tipo entero0
            largo 15
        }
        campo cod1940 {
            glosa "Monto extinguido por ISIF art. 10  Ley N° 21.681, reajustado / Sin D° Devolución  / Acumulados hasta el 31.12.2016"
            codigo "1940"
            tipo entero0
            largo 15
        }
        campo cod1941 {
            glosa "Monto extinguido por ISIF art. 10  Ley N° 21.681, reajustado / Con D° Devolución  / Acumulados hasta el 31.12.2016"
            codigo "1941"
            tipo entero0
            largo 15
        }
        campo cod1942 {
            glosa "Monto acogido al ISIF según arts. 10 y 11 Ley N° 21.681"
            codigo "1942"
            tipo entero0
            largo 15
        }
        campo cod1943 {
            glosa "Monto acogido al ISIF según arts. 10 y 11 Ley N° 21.681 / ISFUT / ISIF"
            codigo "1943"
            tipo entero0
            largo 15
        }
        campo cod1944 {
            glosa "Monto acogido al ISIF según arts. 10 y 11 Ley N° 21.681 / STUT"
            codigo "1944"
            tipo entero0
            largo 15
        }
        campo cod1945 {
            glosa "Monto imputado al ISIF arts. 10 y 11 Ley N° 21.681"
            codigo "1945"
            tipo entero0
            largo 15
        }
        campo cod1946 {
            glosa "Monto imputado al ISIF arts. 10 y 11 Ley N° 21.681 / con D° Devolución / No Sujeto a Restitución / Acumulados a contar desde el 01.01.2017"
            codigo "1946"
            tipo entero0
            largo 15
        }
        campo cod1947 {
            glosa "Monto imputado al ISIF arts. 10 y 11 Ley N° 21.681 / Sin D° Devolución / Sujeto a Restitución / Acumulados a contar desde el 01.01.2017"
            codigo "1947"
            tipo entero0
            largo 15
        }
        campo cod1948 {
            glosa "Monto imputado al ISIF arts. 10 y 11 Ley N° 21.681 / con D° Devolución / Sujeto a Restitución / Acumulados a contar desde el 01.01.2017"
            codigo "1948"
            tipo entero0
            largo 15
        }
        campo cod1949 {
            glosa "Monto imputado al ISIF arts. 10 y 11 Ley N° 21.681 / sin D° Devolución / Acumulados hasta el 31.12.2016"
            codigo "1949"
            tipo entero0
            largo 15
        }
        campo cod1950 {
            glosa "Monto imputado al ISIF arts. 10 y 11 Ley N° 21.681 / con D° Devolución / Acumulados hasta el 31.12.2016"
            codigo "1950"
            tipo entero0
            largo 15
        }
        campo cod1951 {
            glosa "Pago anticipado por reintegro del préstamo tasa 0% (F-50, F-10 o códigos 1797 o 1842 del F-22 AT 2024), según el art. 6 (art. primero) Ley N° 21.242 y/o art. 7 (art. primero) Ley N° 21.252 o art. 11 inc. 3° Ley N° 21.323"
            codigo "1951"
            tipo entero0
            largo 15
        }

        campo cod1952 {
            glosa "Monto a pagar de la(s) cuota(s) después de anticipos"
            codigo "1952"
            tipo entero0
            largo 15
        }

        campo cod1953 {
            glosa "Total cuotas a pagar (suma códigos 1952 y 1788)"
            codigo "1953"
            tipo entero0
            largo 15
        }

        campo cod1954 {            
            glosa "Componente del margen minero art. 3 o art. 4 Ley N° 21.591"
            codigo "1954"
            tipo entero0
            largo 15
        }

        campo cod1955 {
            glosa "Costos asociados a Ingresos no operacionales mineros"
            codigo "1955"
            tipo entero0
            largo 15
        }

        campo cod1956 {
            glosa "Gastos asociados a Ingresos no operacionales mineros"
            codigo "1956"
            tipo entero0
            largo 15
        }

        campo cod1957 {
            glosa "Proporción gastos de imputación común que no sean asignables exclusivamente a un determinado tipo de ingresos"
            codigo "1957"
            tipo entero0
            largo 15
        }

        campo cod1958 {
            glosa "Gastos de Intereses"
            codigo "1958"
            tipo entero0
            largo 15
        }

        campo cod1959 {
            glosa "Depreciación Acelerada"
            codigo "1959"
            tipo entero0
            largo 15
        }

        campo cod1960 {
            glosa "Pérdida de ejercicios anteriores"
            codigo "1960"
            tipo entero0
            largo 15
        }
        campo cod1961 {
            glosa "Gastos de organización y puesta en Marcha"
            codigo "1961"
            tipo entero0
            largo 15
        }
        campo cod1962 {
            glosa "Contratos de Avio y otras contraprestaciones"
            codigo "1962"
            tipo entero0
            largo 15
        }
        campo cod1963 {
            glosa "Cierre de Faenas (art 58 de la Ley N° 20.551)"
            codigo "1963"
            tipo entero0
            largo 15
        }
        campo cod1964 {
            glosa "Ingresos no operacionales mineros"
            codigo "1964"
            tipo entero0
            largo 15
        }
        campo cod1965 {
            glosa "Cuota depreciación normal"
            codigo "1965"
            tipo entero0
            largo 15
        }
        campo cod1966 {
            glosa "Cuota Gastos de organización y puesta en marcha"
            codigo "1966"
            tipo entero0
            largo 15
        }
        campo cod1967 {
            glosa "Renta Imponible Operacional Minera Ajustada"
            codigo "1967"
            tipo entero0
            largo 15
        }
        campo cod1968 {
            glosa "Promedio TMCF (incluídos los ingresos de explotadores mineros relacionados) art. 5 Ley N° 21.591"
            codigo "1968"
            tipo entero0
            largo 15
        }
        campo cod1969 {
            glosa "Total ingresos de productos mineros del ejercicio (Indistintamente del mineral de que se trata)"
            codigo "1969"
            tipo entero0
            largo 15
        }
        campo cod1970 {
            glosa "Total ingresos de productos mineros del ejercicio (Sólo Cobre)"
            codigo "1970"
            tipo entero0
            largo 15
        }
        campo cod1971 {
            glosa "Margen operacional minero según art 2 Ley N° 21.591"
            codigo "1971"
            tipo entero0
            largo 15
        }
        campo cod1972 {
            glosa "Tasa margen operacional aplicada según art. 3 o art. 4 Ley N° 21.591"
            codigo "1972"
            tipo entero0
            largo 15
        }
        campo cod1974 {            
            glosa "Componente ad valorem del Royalty Minero según art. 2 Ley N° 21.591"
            codigo "1974"
            tipo entero0
            largo 15
        }
        campo cod1975 {
            glosa "Componente del margen del Royalty Minero según art. 3 o art. 4 Ley N° 21.591"
            codigo "1975"
            tipo entero0
            largo 15
        }
        campo cod1976 {
            glosa "Royalty Minero Ley N° 21.591"
            codigo "1976"
            tipo entero0
            largo 15
        }
        campo cod1977 {
            glosa "Base imponible / a) Componente Ad Valorem según art. 2 Ley N° 21.591 "
            codigo "1977"
            tipo entero0
            largo 15
        }
        campo cod1978 {
            glosa "Royalty Minero Ley 21.591 / a) Componente ad valorem, según art. 2 Ley N° 21.591"
            codigo "1978"
            tipo entero0
            largo 15
        }
        campo cod1979 {
            glosa "Base imponible / b) Componente del margen según art 3 o art 4 N° 21.591"
            codigo "1979"
            tipo entero0
            largo 15
        }
        campo cod1980 {
            glosa "Royalty Minero Ley 21.591 / b) Componente del margen según art 3 o art 4 Ley N° 21.591"
            codigo "1980"
            tipo entero0
            largo 15
        }
        campo cod1981 {
            glosa "Enajenaciones a partes relacionadas / Precios de enajenaciones del conjunto de los bienes raíces"
            codigo "1981"
            tipo entero0
            largo 15
        }
        campo cod1982 {
            glosa "Enajenaciones en menos de 1 o 4 años o BBR situados en el exterior / Precios de enajenaciones del conjunto de los bienes raíces"
            codigo "1982"
            tipo entero0
            largo 15
        }
        campo cod1983 {
            glosa "Enajenaciones a partes relacionadas / Menos: valor de adquisición de los bienes raíces reajustados"
            codigo "1983"
            tipo entero0
            largo 15
        }
        campo cod1984 {
            glosa "Enajenaciones en menos de 1 o 4 años o BBR situados en el exterior / Menos: valor de adquisición de los bienes raíces reajustados"
            codigo "1984"
            tipo entero0
            largo 15
        }
        campo cod1985 {
            glosa "Enajenaciones a partes relacionadas / Menos: mejoras que hayan aumentado el valor de los bienes raíces reajustadas"
            codigo "1985"
            tipo entero0
            largo 15
        }
        campo cod1986 {
            glosa "Enajenaciones en menos de 1 o 4 años o BBR situados en el exterior / Menos: mejoras que hayan aumentado el valor de los bienes raíces reajustadas"
            codigo "1986"
            tipo entero0
            largo 15
        }
        campo cod1987 {
            glosa "Enajenaciones a partes relacionadas / Mayor o menor valor percibido o devengado"
            codigo "1987"
            tipo entero0
            largo 15
        }
        campo cod1988 {
            glosa "Enajenaciones en menos de 1 o 4 años o BBR situados en el exterior / Mayor o menor valor percibido o devengado"
            codigo "1988"
            tipo entero0
            largo 15
        }
        campo cod1989 {
            glosa "Enajenaciones a partes relacionadas / Mayor valor percibido según códigos 1099, 1114, o devengado según código1987 afectos al IGC o IA, trasladar a códigos 1891; según código 1988 afecto a IDPC e IGC o IA a trasladar a código 1895 o 1912, y a código 1891"
            codigo "1989"
            tipo entero0
            largo 15
        }
        campo cod1990 {
            glosa "Otras enajenaciones afectas / Mayor valor percibido según códigos 1099, 1114, o devengado según código 1987 afectos al IGC o IA, trasladar a códigos 1891; según código 1988 afecto a IDPC e IGC o IA a trasladar a código 1895 o 1912, y a código 1891, según corresponda"
            codigo "1990"
            tipo entero0
            largo 15
        }
        campo cod1991 {
            glosa "Ajustes de precios de transferencia, según artículo 41 E LIR"
            codigo "1991"
            tipo entero0
            largo 15
        }
        campo cod1992 {
            glosa "Donaciones, según artículo 157 ter del Código del Trabajo"
            codigo "1992"
            tipo entero0
            largo 15
        }
        campo cod1993 {
            glosa "Para propuesta complementable código1030"
            codigo "1993"
            tipo entero0
            largo 15
        }
        campo cod3050 {
            glosa "3050 - OBLIGADOS F22"
            codigo "3050"
            tipo entero0
            largo 15
        }
        campo cod3051 {
            glosa "3051 - OBLIGADOS F22"
            codigo "3051"
            tipo entero0
            largo 15
        }

        campo cod3052 {
            glosa "3052 - OBLIGADOS F22"
            codigo "3052"
            tipo entero0
            largo 15
        }

        campo cod3053 {
            glosa "3053 - OBLIGADOS F22"
            codigo "3053"
            tipo entero0
            largo 15
        }

        campo cod3054 {
            glosa "3054 - OBLIGADOS F22"
            codigo "3054"
            tipo entero0
            largo 15
        }
        campo cod3055 {
            glosa "3055 - OBLIGADOS F22"
            codigo "3055"
            tipo entero0
            largo 15
        }
        campo cod3056 {
            glosa "3056 - OBLIGADOS F22"
            codigo "3056"
            tipo entero0
            largo 15
        }
        campo cod3057 {
            glosa "3057 - OBLIGADOS F22"
            codigo "3057"
            tipo entero0
            largo 15
        }
        campo cod3058 {
            glosa "3058 - OBLIGADOS F22"
            codigo "3058"
            tipo entero0
            largo 15
        }
        campo cod3059 {
            glosa "3059 - OBLIGADOS F22"
            codigo "3059"
            tipo entero0
            largo 15
        }
        campo cod3060 {
            glosa "3060 - OBLIGADOS F22"
            codigo "3060"
            tipo entero0
            largo 15
        }
        campo cod3061 {
            glosa "3061 - OBLIGADOS F22"
            codigo "3061"
            tipo entero0
            largo 15
        }

        campo cod1777 { 
            glosa "Régimen de imputación parcial de créditos, según art. 14 letra A) LIR"
            codigo "1777"
            tipo boolean 
        }
        campo cod1778 { 
            glosa "Régimen Pro Pyme, según art. 14 letra D) N° 3 LIR"
            codigo "1778"
            tipo boolean 
        }
        campo cod1779 { 
            glosa "Régimen Pro Pyme Transaparente, según art. 14 letra D) N° 8 LIR"
            codigo "1779"
            tipo boolean 
        }
        campo cod1780 { 
            glosa "Contribuyentes no sujetos al artículo 14 (OSFL entre otros)"
            codigo "1780"
            tipo boolean 
        }
        campo fi {
            glosa "fi"
            formula { ($cod104 + $cod105 + $cod106 + $cod108 + $cod110) + ($cod155 + $cod748 + $cod955) }
            codigo ""
            largo 15 
            tipo entero
        }
        
        campo mu {
            glosa "mu"
            largo 15
            codigo ""
            formula {$fi > 0 ? (($fi + $cod152 + $cod159 + $cod161) - $cod765) : $cod161 - $cod765  }
            tipo entero
        }
        campo auxA16 {
            glosa "auxA16"
            largo 15
            codigo ""
            formula {IN_LIST($subTipoContribuyente, "112|113|114|115")  ? ROUND_DECIMAL($p474 * $cod479,$decimales) : ROUND_DECIMAL($p22 * $cod479,$decimales) }
            tipo entero
        }

        campo auxC83 {
            glosa "auxC83"
            largo 15
            codigo ""
            formula {IN_LIST($subTipoContribuyente, "112|113|114|115") ? ROUND_DECIMAL($p474 * $cod479,$decimales) : ROUND_DECIMAL($p22 * $cod479,$decimales) }
            tipo entero
        }
    }

    seccion parametros {
        campo p01 {
            glosa "Parametro 01"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P01") }
        }
        campo p03 {
            glosa "Parametro 03"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P03") }
        }
        campo p311 {
            glosa "Parametro 311"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P311") }
        }
        campo p312 {
            glosa "Parametro 312"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P312") }
        }
        campo p738 {
            glosa "Parametro 738"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P738") }
        }
    
        campo p736 {
            glosa "Parametro 736"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P736") }
        }

        campo p737 {
            glosa "Parametro 737"
            codigo ""
            tipo decimal
            largo 15
        posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P737") }
        }
    
        campo p04 {
            glosa "Parametro 04"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P04") }
        }
        campo p08 {
            glosa "Parametro 08"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P08") }
        }
        campo p11 {
            glosa "Parametro 11"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P11") }
        }
        campo p12 {
            glosa "Parametro 12"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P12") }
        }
        campo p13 {
            glosa "Parametro 13"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P13") }
        }
        campo p16 {
            glosa "Parametro 16"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P16") }
        }
        campo p20 {
            glosa "Parametro 20"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P20") }
        }
        campo p22 {
            glosa "Parametro 22"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P22") }
        }
        campo p24 {
            glosa "Parametro 24"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P24") }
        }
        campo p25 {
            glosa "Parametro 25"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P25") }
        }
        campo p27 {
            glosa "Parametro 27"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P27") }
        }
        campo p28 {
            glosa "Parametro 28"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P28") }
        }
        campo p30 {
            glosa "Parametro 30"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P30") }
        }
        campo p31 {
            glosa "Parametro 31"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P31") }
        }
        campo p37 {
            glosa "Parametro 37"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P37") }
        }
        campo p641 {
            glosa "Parametro 641"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P641") }
        }
        campo p42 {
            glosa "Parametro 42"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P42") }
        }
        campo p56 {
            glosa "Parametro 56"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P56") }
        }
        campo p57 {
            glosa "Parametro 57"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P57") }
        }
        campo p58 {
            glosa "Parametro 58"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P58") }
        }
        campo p59 {
            glosa "Parametro 59"
            codigo ""
            posDecimales 5
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P59") }
        }
        campo p60 {
            glosa "Parametro 60"
            codigo ""
            tipo decimal
            posDecimales 4
            largo 15
            formula { GET_VALUE("parametrosInterno", "P60") }
        }
        campo p61 {
            glosa "Parametro 61"
            codigo ""
            tipo decimal
            posDecimales 4
            largo 15
            formula { GET_VALUE("parametrosInterno", "P61") }
        }
        campo p62 {
            glosa "Parametro 62"
            codigo ""
            tipo decimal
            posDecimales 4
            largo 15
            formula { GET_VALUE("parametrosInterno", "P62") }
        }
        campo p63 {
            glosa "Parametro 63"
            codigo ""
            tipo decimal
            posDecimales 4
            largo 15
            formula { GET_VALUE("parametrosInterno", "P63") }
        }
        campo p64 {
            glosa "Parametro 64"
            codigo ""
            tipo decimal
            posDecimales 4
            largo 15
            formula { GET_VALUE("parametrosInterno", "P64") }
        }
        campo p80 {
            glosa "Parametro 80"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P80") }
        }
        campo p82 {
            glosa "Parametro 82"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P82") }
        }
        campo p48 {
            glosa "Parametro 48"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P48") }
        }
        campo p84 {
            glosa "Parametro 84"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P84") }
        }
        
        campo p85 {
            glosa "Parametro 85"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P85") }
        }
        campo p87 {
            glosa "Parametro 87"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 2
            formula { GET_VALUE("parametrosInterno", "P87") }
        }
        campo p344 {
            glosa "Parametro 344"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P344") }
        }
        campo p358 {
            glosa "Parametro 358"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P358") }
        }
        campo p456 {
            glosa "Parametro 456"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P456") }
        }
        campo p474 {
            glosa "Parametro 474"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 2
            formula { GET_VALUE("parametrosInterno", "P474") }
        }	
        campo p583 {
            glosa "Parametro 583"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P583") }
        }
        campo p656 {
            glosa "Parametro 656"
            codigo ""
            tipo decimal
            largo 15
            formula { GET_VALUE("parametrosInterno", "P656") }
        }
        campo p647{
            glosa "Parametro 647"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { GET_VALUE("parametrosInterno", "P647") }
        }
        campo p654{
            glosa "Parametro 654"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 2
            formula { GET_VALUE("parametrosInterno", "P654") }
        }
        campo p651 {
            glosa "Parametro 651"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P651") }
        }

        campo p390 {
            glosa "Parametro P390"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P390") }
        }

        campo p715 {
            glosa "Parametro P715"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P715") }
        }
        campo p720 {
            glosa "Parametro P720"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P720") }
        }
        campo p728 {
            glosa "Parametro P728"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P728") }
        }
        campo p729 {
            glosa "Parametro P729"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P729") }
        }
        campo p648 {
            glosa "Parametro P648"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P648") }
        }
    
        campo p92 {
            glosa "Parametro P92"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P92") }
        }

        campo p721 {
            glosa "Parametro P721"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P721") }
        }

        campo p722 {
            glosa "Parametro P722"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P722") }
        }

        campo p725 {
            glosa "Parametro P725"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P725") }
        }


        campo p103 {
            glosa "Parametro P103"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P103") }
        }

        campo p02 {
            glosa "Parametro P02"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P02") }
        }
        campo p704 {
            glosa "Parametro P704"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P704") }
        }

        campo p34 {
            glosa "Parametro P34"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P34") }
        }
        campo p343 {
            glosa "Parametro P343"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P343") }
        }
        campo p568 {
            glosa "Parametro P568"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P568") }
        }
        campo p481 {
            glosa "Parametro P481"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P481") }
        }
        campo p732 {
            glosa "Parametro P732"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P732") }
        }
        campo p655 {
            glosa "Parametro P655"
            codigo ""
            tipo decimal
            largo 15
            posDecimales 6
            formula { GET_VALUE("parametrosInterno", "P655") }
        }
        campo montoAutorizadoPagoDiferido {
            glosa "Monto Autorizado Pago Diferido"
            codigo ""
            tipo entero
            largo 15
        }
        
        campo tienePagoDiferido {
            glosa "Variable auxiliar que indica si tiene o no pago diferido"
            codigo ""
            tipo boolean
            valorPorDefecto "FALSE"
        }
    }
    
    seccion auxiliares {
        
        campo valorAux157 { 
            glosa "Valor Aux 157" 
            codigo "" 
            tipo entero
            largo 15
            formula { $cod170 - (($cod152 + $cod749 - $cod169) * $auxImpGlobComp)} 
        }
        campo valor157 { 
            glosa "Valor Aux 157" 
            codigo "" 
            tipo entero
            largo 15
            #formula {$esTGC ? TGC($valorAux157):TGL($valorAux157)}
        formula {$esTGC ? ROUND_DECIMAL(TGC($valorAux157),$decimales) : ROUND_DECIMAL(TGL($valorAux157),$decimales) }
        }

        campo cod170aux { 
            glosa "BASE IMPONIBLE ANUAL DE IUSC o IGC (Registre sólo si diferencia es positiva)" 
            tipo entero0
            caracterizable TRUE
            largo 16
            valorPorDefecto "0"
            formula { PSTV($cod158 - $cod111 - $cod751 - $cod766 - $cod133 - $cod32) }
        }

        
        campo cod766aux { 
            glosa "Ahorro Previsional Voluntario según inciso 1º Art.42 bis." 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            formula { $cod822 + $cod765 }
        }

        campo cod751aux { 
            glosa "Intereses Pagados Por Cred.C Garantía y/o Rebaja Por Pago Dividendo Vivienda 2/59" 
            tipo entero0
            largo 16 
            caracterizable TRUE
            valorPorDefecto "0"
            formula { $cod750 + $cod740 }
        }

        campo cod158aux { 
            glosa "SUB TOTAL (Si declara Impuesto Adicional trasladar a línea 48 ó 49)." 
            tipo entero0
            largo 16 
            valorPorDefecto "0"
            caracterizable TRUE
            formula {PSTV($cod104 + $cod105 + $cod106 + $cod108 + $cod1029 + $cod955 + $cod959 + $cod110 + $cod155 + $cod152 + $cod1032 + $cod1104 + $cod161 + $cod749 - $cod764 - $cod169) }
        }

        campo cod764aux { 
            glosa "Impuesto Territorial pagado en el año 2017 y/o Donaciones Art. 7° Ley N° 16.282  y D.L. N°45/73." 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            formula { $cod166 + $cod907 }
        }
        campo cod749aux { 
            glosa "Incremento por impuestos pagados o retenidos en el exterior." 
            tipo entero0
            largo 16 
            caracterizable TRUE
            valorPorDefecto "0"
            formula { $cod159 + $cod748 }
        }
        campo cod109aux { 
            glosa "Rentas determinadas según contabilidad simplificada" 
            tipo entero0
            largo 15 
            caracterizable TRUE
            formula {$cod955 + $cod957 + $cod959}
        } 

        campo cod604aux { 
            glosa "Total Rentas determinadas según código [604]= códigos [954]+[956]+[958] y código [109]= códigos [955]+[957]+[959]." 
            tipo entero
            largo 15 
            caracterizable TRUE
            formula {$cod954 + $cod956 + $cod958}
        }

        campo cod925aux { 
            glosa "Retención de Impuesto declarados en los cód. 923 y 924" 
            tipo entero0
            formula {$cod923 + $cod924}
            caracterizable TRUE
            largo 15 
        }

        campo cod914aux { 
            glosa "" 
            tipo entero0
            formula {$cod911 + $cod913}
            caracterizable TRUE
            largo 15 
        }

        campo cod913aux { 
        # POS ( P24*[106] - [910] )
            glosa "Tasa adicional de 10% de IA, sobre cantidades declaradas en código 106, según art. 21 inc 3° LIR" 
            tipo entero0
            formula { ROUND_DECIMAL(PSTV(($p24 * $cod106) - $cod910),$decimales) }
            caracterizable TRUE
            largo 15 
        }

        campo alfaC132 { 
            glosa "" 
            tipo entero0
            largo 16
            formula {$cod1592 + $cod1594 + $cod1721 + $cod1597 + $cod1633}
        }
        campo betaC132 { 
            glosa "" 
            tipo entero0
            largo 16
            formula {$cod1024 + $cod1026 + $cod1722 + $cod1598 + $cod1105}
        }

        campo alfaC90 {
            glosa "alfa regla C90"
            codigo ""
            tipo entero0
            largo 15 
            formula { $cod1592 + $cod1594 + $cod1721 + $cod1597 + $cod1633 }
        }
        campo betaC90 {
            glosa "beta regla C90"
            codigo ""
            tipo entero0
            largo 15 
            formula { $cod1024 + $cod1026 + $cod1722 + $cod1598 + $cod1105 }
        }
        campo gammaC90 {
            glosa "gamma regla C90"
            codigo ""
            tipo entero0
            largo 15 
            formula { $cod1593 + $cod1595 + $cod1596 + $cod1599 + $cod1634 + $cod1635}
        }
        campo deltaC90 {
            glosa "delta regla C90"
            codigo ""
            tipo entero0
            largo 15 
            formula { $cod1025 + $cod1027 + $cod603 + $cod954 + $cod1631 + $cod605 + $cod606 + $cod1031}
        }

        campo valor1C90 {
            glosa "Valor 1 c90"
            codigo ""
            tipo entero
            largo 15
            #(MIN ((([157] + [1017] + [1033] + [201] + [910]) * (1 + P59)) * P62); (alfa * P654) + P390
            formula { ROUND_DECIMAL(MINL( (($cod157 + $cod1017 + $cod1033 + $cod201 + $cod910) * (1 + $p59)) * $p62, $alfaC90*$p654 + $p390),$decimales)}
        }
        campo valor2C90 {
            glosa "Valor 2 c90"
            codigo ""
            tipo entero
            largo 15
            #(beta * P654) + P390
            formula { ROUND_DECIMAL($betaC90*$p654,$decimales) + $p390}
        }	

        campo valor3C90 {
            glosa "Valor 3 c90"
            codigo ""
            tipo entero
            largo 15
            #(MIN (([157] + [1017] + [1033] + [201] + [910] + (beta * P654)) * (1 + (P654 / P583))); (beta*P654) + (alfa * P654)) + P390
            formula { ROUND_DECIMAL(MINL(($cod157 + $cod1017 + $cod1033 + $cod201 + $cod910 + ($betaC90 * $p654)) * (1 + ($p654 / $p583) ),(($betaC90 * $p654) + ($alfaC90 * $p654))),$decimales) + $p390}
        }

        campo valor1C132 {
            glosa "Valor 1 c132"
            codigo ""
            tipo entero0
            largo 15
            #POS {((beta - ([1024] * eta))* P654) + MIN {MIN {(alfa -([1592] * eta)) * P654; (((beta - ([1024] * eta)) * P654) + [157] + [1017] + [1033] + [201] + [910]) * (1 + P59) * P654}; [608]} - P390}
            formula { PSTV((($betaC132 - ($cod1024 * $etaC132))* $p654) + MINL(MINL(($alfaC132 -($cod1592 * $etaC132)) * $p654, ((($betaC132 - ($cod1024 * $etaC132)) * $p654) + $cod157 + $cod1017 + $cod1033 + $cod201 + $cod910) * (1 + $p59) * $p654), $cod608) - $p390) }
        }

        campo auxC8 {
            glosa "C8"
            codigo ""
            tipo entero
            largo 15
             formula { $p11 * $cod18 }
        }
        
        campo auxC16 {
            glosa "C16"
            codigo ""
            tipo entero
            largo 15
            formula { ROUND_DECIMAL($p84 * $cod109,$decimales) + $p31 }
        }
        campo auxC19 {
            glosa ""
            codigo ""
            tipo entero
            #[603]+ [1024] + [1025] + [1592] + [1593] + [1026] + [1027] + [1594] + [1595] + [1721] + [1722] + [1596] + [954] + [1597] + [1598] + [1599] + [1631] + [606] + [1105] + [1633] + [1634] + [1031] +[1635] + [605] 
            formula { $cod603+ $cod1024 + $cod1025 + $cod1592 + $cod1593 + $cod1026 + $cod1027 + $cod1594 + $cod1595 + $cod1721 + $cod1722 + $cod1596 + $cod954 + $cod1597 + $cod1598 + $cod1599 + $cod1631 + $cod606 + $cod1105 + $cod1633 + $cod1634 + $cod1031 +$cod1635 + $cod605  }
            largo 15 
        }

        #[169]	£	"( ((([105] + [155] + [152] + [1032] + [1104]) * (1 + P651)) + P390) + [1891])* [ e ]
        #[ e ] = Si {[104] + [105] + [106] + [108] + [955] + [1632] + [110] + [155] + [1032] + [1891] + [1104] + [166] = 0 .y. [161] > 0}; entonces 0 #Sino 1"
        campo epsilonC5 {
            glosa "Epsilon para rC5"
            codigo ""
            tipo entero
            largo 15
            #[ e ] = Si {[104] + [105] + [106] + [108] + [955] + [1632] + [110] + [155] + [1032] + [1891] + [1104] + [166] = 0 .y. [161] > 0}; entonces 0 #Sino 1"
            formula { (($cod104 + $cod105 + $cod106 + $cod108 + $cod955 + $cod1632 + $cod110 + $cod155 + $cod1032 + $cod1891 + $cod1104 + $cod166) == 0 AND $cod161 > 0)?0:1 }
        }


        #[605]	<=	P85*[155] + P390; si [748] = 0
        #               P59*[155] + P390; si no
        campo auxC17a { 
            glosa "" 
            codigo "" 
            tipo entero
            formula { ($cod748 == 0)?(ROUND_DECIMAL($p85*$cod155,$decimales)+$p390):0 }            
            largo 15 
        }
        
        campo auxC17b { 
            glosa "" 
            codigo "" 
            tipo entero
            formula { ($cod748 > 0)?(ROUND_DECIMAL($p59*$cod155,$decimales)+$p390):0 }            
            largo 15 
        }
        #[606]+[1105]+ [1633]+[1634]	<=	 P651*[152] + P390; si [748] = 0
        #                                        P59*[152] + P390 ; si no
        campo auxC18a { 
            glosa "" 
            codigo "" 
            tipo entero
            formula { ($cod748 == 0)?(ROUND_DECIMAL($p651*$cod152,$decimales)+$p390):0 }            
            largo 15 
        }
        
        campo auxC18b { 
            glosa "" 
            codigo "" 
            tipo entero
            formula { ($cod748 > 0)?(ROUND_DECIMAL($p59*$cod152,$decimales)+$p390):0 }            
            largo 15 
        }
        
        campo totalRecuadro2 { 
            glosa "totalRecuadro2" 
            codigo "" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            formula { $cod750 + $cod740 + $cod822 + $cod765}
        }
        campo totalRecuadro4 { 
            glosa "totalRecuadro4" 
            codigo "" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            formula { $cod157 + $cod201 + $cod1035 + $cod910}
        }

        campo totalRecuadro5 { 
            glosa "totalRecuadro5" 
            codigo "" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            formula { $cod1036 + $cod136 + $cod176 + $cod608 + $cod895 + $cod867 + $cod162 + $cod174 + $cod610 + $cod746}
        }	

        campo totalRecuadro7 { 
            glosa "totalRecuadro7" 
            codigo "" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            formula { $cod20 + $cod1113 + $cod1039 + $cod965 + $cod189 + $cod1044 + $cod21 + $cod767}
        }	
        
        campo totalRecuadro8 { 
            glosa "totalRecuadro8" 
            codigo "" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            formula { PSTV($cod304) + $totalRecuadro7}
        }		
        
        campo totalRecuadro9 { 
            glosa "totalRecuadro7" 
            codigo "" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            formula { $cod36 + $cod82 + $cod198 + $cod54 + $cod832 + $cod119 + $cod116 + $cod58}
        }	

        campo totalRecuadro10 { 
            glosa "totalRecuadro10" 
            codigo "" 
            tipo entero0
            caracterizable TRUE
            largo 16 
            valorPorDefecto "0"
            formula { $totalRecuadro8 - $totalRecuadro9}
        }			
        
        
    }

    


    seccion auxiliaresNo {


        campo auxRut { 
            glosa "Parte entera del Rut" 
            codigo "" 
            tipo entero
            largo 10
            formula { $rut }
        } 

        campo auxRutRepresentante { 
            glosa "Parte entera del Rut del Representante" 
            codigo "" 
            tipo entero
            largo 10
            formula { $rutRepresentante }
        } 

        campo auxB2 {
            glosa "Condicion regla B2"
            codigo ""
            tipo boolean
            #formula { ($auxRut < 50000000 AND (($cod547 > 0 AND $cod617 == 0) OR ($cod547 == 0 AND $cod617 > 0))) } 
            formula { ($auxRut < 50000000) } 
        }
        campo auxB2a {
            glosa "Validacion regla B2a"
            codigo ""
            tipo boolean
            #POS(POS{[547]Â¿[770]}Â¿[872]-[465]-[494]-[850]) + POS([617]-POS{[770]-[547]}) + [479], si TIPO{[03]} = 1, 0 si no
            formula { $auxB2 -> ($cod110 == (PSTV(PSTV($cod547 - $cod770) - $cod872 - $cod465 - $cod494 - $cod850)) + PSTV($cod617 - PSTV($cod770 - $cod547)) + $cod479) }
        }
        
        campo auxB2b {
            glosa "Validacion regla B2b"
            codigo ""
            tipo boolean
            formula { $auxRut >= 50000000 -> $cod110 == 0 }
        }
        campo auxB11 {
            glosa "Condicion regla B11"
            codigo ""
            tipo boolean
            formula { (($cod187 + $cod18) > $p01 AND $auxRut < 50000000) }
        }
        campo auxB11b {
            glosa "Validacion regla B11b"
            codigo ""
            tipo boolean
            formula { NOT($auxB11) -> ($cod18 == 0) }
        }
        # campo auxB12 {
        #     glosa "Condicion regla B12"
        #     codigo ""
        #     tipo boolean
        #     formula { ((($cod187 + $cod18) > $p01 AND $auxRut < 50000000) OR $auxRut >= 50000000 OR $cod20 == PSTV(($p84 * $cod18) - $cod19)) }
        # }
        #campo auxB12a {
        #     glosa ""
        #     codigo ""
        #     tipo boolean
        #     formula { $auxB12 -> ($cod20 == PSTV(($p84 * $cod18) - $cod19)) }
        #}
        #campo auxB12b {
        #     glosa ""
        #     codigo ""
        #     tipo boolean
        #     formula { NOT($auxB12) -> ($cod20 == 0) }
        #}
        campo auxB13 {
            glosa "Condicion regla B13"
            codigo ""
            tipo boolean
            formula { ((($cod187 + $cod18) > $p01 AND $auxRut < 50000000) OR $auxRut >= 50000000 OR $cod189 == PSTV(($p84 * $cod187) - $cod188)) }
        }
        campo auxB13a {
            glosa "Validacion regla B13a"
            codigo ""
            tipo boolean
            formula { $auxB13 -> ($cod189 == PSTV(($p84 * $cod187) - $cod188)) }
        }
        campo auxB13b {
            glosa "Validacion regla B13b"
            codigo ""
            tipo boolean
            formula { NOT($auxB13) -> ($cod189 == 0) }
        }

        campo auxB26 {
            glosa "Condicion regla B26"
            codigo ""
            tipo boolean
            formula { ($cod58 <= 0) }
        }
        campo auxB26a {
            glosa "Validacion regla B26a"
            codigo ""
            tipo boolean
            formula { $auxB26 -> ($cod85 == PSTV(NEG($cod305))) }
        }
        campo auxB26b {
            glosa "Validacion regla B26b"
            codigo ""
            tipo boolean
            formula { NOT($auxB26) -> ($cod85 == 0) }
        }
        campo aux1B30 {
            glosa "Condicion 1 regla B30"
            codigo ""
            tipo boolean
            formula { (GET_PERIODO($fechaPresentacion) == GET_PERIODO_ACTUAL_MES(1)) }
        }
        campo aux2B30 {
            glosa "Condicion 2 regla B30"
            codigo ""
            tipo boolean
            formula { (GET_PERIODO($fechaPresentacion) == GET_PERIODO_ACTUAL_MES(2)) }
        }
        campo aux3B30 {
            glosa "Condicion 3 regla B30"
            codigo ""
            tipo boolean
            formula { (GET_PERIODO($fechaPresentacion) == GET_PERIODO_ACTUAL_MES(3)) }
        }
        campo aux4B30 {
            glosa "Condicion 4 regla B30"
            codigo ""
            tipo boolean
            formula { NOT($aux1B30) AND NOT($aux2B30) AND NOT($aux3B30) }
        }
        campo auxB30a {
            glosa "Validacion regla B30a"
            codigo ""
            tipo boolean
            formula { $aux1B30 -> ($cod39 == ($p56 * $cod90)) }
        }
        campo auxB30b {
            glosa "Validacion regla B30b"
            codigo ""
            tipo boolean
            formula { $aux2B30 -> ($cod39 == ($p57 * $cod90)) }
        }
        campo auxB30c {
            glosa "Validacion regla B30c"
            codigo ""
            tipo boolean
            formula { $aux3B30 -> ($cod39 == ($p58 * $cod90)) }
        }
        campo auxB30d {
            glosa "Validacion regla B30d"
            codigo ""
            tipo boolean
            formula { $aux4B30 -> ($cod39 == ($p30 * $cod90)) }
        }

        campo auxC31 {
            glosa "C31"
            codigo ""
            tipo entero
            largo 15
            formula {(($aPTAO!=0) AND ($aVx011357 < $p311)) ? (MAXL($p03,$aVx010017)): ( (($aPTAO!=0) AND ( $aVx011357 >= $p311 AND $aVx011357 <= $p312)) ? ( MAXL(ROUND_DECIMAL($p03/12,$decimales),$aVx010017 )) : 0 )}
        }

        campo auxC4C5 {
            glosa "Lambda para rC4 y rC5"
            codigo ""
            tipo entero
            largo 15
            #Si            [104] + [105]   + [106]       + [108] + [955]    + [1632]    + [110]   + [155]    +  [1032]   + [1891]     + [1104]   + [166]     = 0 .y. [161]    > 0; entonces 1
            formula { ((($cod104 + $cod105 + $cod106) + ($cod108 + $cod955) + ($cod1632 + $cod110 + $cod155) + ($cod1032 + ($cod1891) + $cod1104 + $cod166)) == 0 AND $cod161 > 0)?1:0 }
        }
        campo auxC4 {
            glosa "Condicion regla C4"
            codigo ""
            tipo boolean
            formula { ($cod170 > 0 AND $auxC4C5 == 0) }
        }
        campo auxC4Div {
            glosa ""
            codigo ""
            tipo decimal
            largo 15
            posDecimales 3
            formula { ($cod157 / $cod170) }
        }
        campo auxC4a {
            glosa "Validacion regla C4a"
            codigo ""
            tipo boolean
            #largo 15
            #posDecimales 3
            formula { $auxC4 -> $cod136 <= (($auxC4Div * MAXL(ROUND_DECIMAL($cod152 / $p13,$decimales), $cod152 + $cod606 + $cod1105)) + $p390) }
        }
        campo auxC4b {
            glosa "Validacion regla C4b"
            codigo ""
            tipo boolean
            formula { NOT($auxC4) -> $cod136 == 0 }
        }


        campo auxC12C13 {
            glosa "Condicion regla C12 y C13"
            codigo ""
            tipo boolean
            formula { (($cod51 + $cod63 + $cod71) > 0 AND $cod748 == 0) }
        }
        campo auxC12a {
            glosa "Validacion regla C12a"
            codigo ""
            tipo boolean
            formula { $auxC12C13 -> ($cod600 <= ROUND_DECIMAL(($p85 * $cod104) + $p31,$decimales)) }
        }
        campo auxC12b {
            glosa "Validacion regla C12b"
            codigo ""
            tipo boolean
            formula { NOT($auxC12C13) -> ($cod600 <= ROUND_DECIMAL(($p59 * $cod104) + $p31,$decimales)) }
        }
        campo auxC13a {
            glosa "Validacion regla C13a"
            codigo ""
            tipo boolean
            formula { $auxC12C13 -> ($cod601 <= ROUND_DECIMAL(($p85 * $cod105) + $p31,$decimales)) }
        }
        campo auxC13b {
            glosa "Validacion regla C13b"
            codigo ""
            tipo boolean
            formula { NOT($auxC12C13) -> ($cod601 <= ROUND_DECIMAL(($p59 * $cod105) + $p31,$decimales)) }
        }

        campo auxC38 {
            glosa "Condicion regla C38a"
            codigo ""
            tipo boolean
            formula { ($auxRut < 50000000 AND $cod547 > 0 AND $cod617 > 0) }
        }
        campo auxC38a {
            glosa "Validacion regla C38a"
            codigo ""
            tipo boolean
            formula { $auxC38 -> ($cod110 <= (PSTV(PSTV($cod547 - $cod770) - ($cod872 + $cod465) - ($cod494 + $cod850)) + PSTV($cod617 - PSTV($cod770 - $cod547)) + $cod479)) }
        }
        campo auxC38b {
            glosa "Validacion regla C38a"
            codigo ""
            tipo boolean
            formula { $auxRut >= 50000000 -> $cod110 <= 0 }
        }
        campo auxC39 {
            glosa "Condicion regla C39"
            codigo ""
            tipo boolean
            formula { ($auxRut < 50000000 AND $cod547 > 0 AND $cod617 > 0) }
        }
        campo auxC39a {
            glosa "Validacion regla C39b"
            codigo ""
            tipo boolean
            formula { $auxC39 -> $cod110 >= PSTV(($cod547 + $cod617 - $cod770) - $cod872 - ($cod465 + $cod494)+($cod479 - $cod850) ) }
        }
        campo auxC39b {
            glosa "Validacion regla C38b"
            codigo ""
            tipo boolean
            formula {  $auxRut >= 50000000 -> $cod110 >= 0 }
        }
        campo etaC132 { 
            glosa "" 
            tipo entero0
            largo 16
            formula {(($cod1592 + $cod1024) > 0 AND $cod170 < $p12) ? 1: 0}
        }
        campo cond1C90 {
            glosa "Condicion 1 regla C90"
            codigo ""
            tipo boolean
            #Si  alfa > 0 .y. ([608] - gamma) > 0 .y. ([610] - delta) = 0; 
            formula { ($alfaC90 > 0 AND ($cod608 - $gammaC90) > 0 AND ($cod610 - $deltaC90) == 0) }
        }	
        campo cond2C90 {
            glosa "Condicion 2 regla C90"
            codigo ""
            tipo boolean
            #Si beta > 0 .y. ([608] - gamma) =0 .y. [610] - delta >0;
            formula { ($betaC90 > 0 AND ($cod608 - $gammaC90) == 0 AND ($cod610 - $deltaC90) > 0) }
        }		
        campo cond3C90 {
            glosa "Condicion 3 regla C90"
            codigo ""
            tipo boolean
            #Si alfa > 0 .y. ([608] - gamma)>0 .y.(beta > 0 .y. [610] - delta >0;
            formula { ($alfaC90 > 0 AND ($cod608 - $gammaC90) > 0 AND $betaC90 > 0 AND ($cod610 - $deltaC90) > 0) }
        }

        campo cond1C98 {
            glosa "Condicion 1 regla C98"
            codigo ""
            tipo boolean
            #Si [1111] > 0 .y. [95] ¿ 1 .y. atributo = M14A ; ([365] + [841]); 
            formula { ($cod1111 > 0 AND NOT($cod95) AND $aM14A != 0 ) }
        }
        campo cond2C98 {
            glosa "Condicion 2 regla C98"
            codigo ""
            tipo boolean
            #95] = 1 .y. atributo = M14A; 
            formula { ( $cod95 AND $aM14A != 0 ) }
        }

        campo cond1C132 {
            glosa "Condicion 1 regla C132"
            codigo ""
            tipo boolean
            #Si  TIPO {[03]} = 2, 3, 4, 5, 6, 7, 8  .y. atributo = 14TT .y. atributo ¿  CRRP
            formula { ($cod32==0) }
        }
    }

    #### Reglas de aca hacia abajo.
    
    regla rBloqueo {
         glosa "Debe habilitarse el AT2025. "
         condicion { ""!="" }
         severidad error
     }
     
} 