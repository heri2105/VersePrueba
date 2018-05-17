function generatedata(rowscount, hasNullValues) {
    // prepare the data
    var data = new Array();
    if (rowscount == undefined) rowscount = 100;
    
	var idRef =
    [
        "45717", "45668", "45666", "45638", "45624", "45617", "45604", "45596", "45570", "45557", "45546", "45542", "45533", "45529", "45528", "45521", "45513", "45511"
    ];
	
    var digital = [
        "0961_001_ENVIO.XML","0961_001_RECIBO.XML","43817.XML","89456.XML","A32000830.027","BL_ENVIO.XML","BL_ENVIO.XML","E32000830.XML","M3200893.XML"
    ]
    
    var documentos_nombre = [
        "LISTA_EMPAQUE.PDF","FACTURA.PDF","3.1.7.PDF","323423423.PDF","1333_160_700010.pdf","ACUSE_COVE.PDF","4654645645.PDF","PROFORMA.PDF"
    ]
    
    var documentos_tipo =[
        "SIR","Factura","Lista Empaque","Interno","BL","BL_Rev"
    ]
    
    var documentos_xp = [
        "OK", "NO"
    ]
    
    var referencia =
    [
        "1702855-10", "1731586-10", "1703028-10", "1703215-10", "1702973-00", "1710974-00", "1703215-20", "1702977-00", "1703017-00", "1702994-00", "1710938-00", "1703013-00", "1703025-00", "1701475-10", "1710972-00", "1701536-10", "1701536-A1", "1702855-10"
    ];
	
	var numClie =
    [
        "4764", "2313", "2167", "3711", "3856", "4264", "3077", "3711", "53", "4729", "2657", "2789", "4515", "4245", "2789", "3919", "3779", "1333"
    ];
	var patente = [
	"3200","3795"
	];
	var pedimentos =
    [
        "6003029", "5000000", "6002173", "6003379", "6001094", "6002223", "6002996", "6002960", "6003460", "6001629", "6000530", "6003495", "6004341", "6003498", "6004309", "6002842", "6003329", "6003498"
    ];
	var fechApertura =
    [
        "2016-01-08", "2016-04-08", "2016-02-13", "2016-03-01", "2016-03-05", "2016-02-04", "2016-04-01", "2016-03-23", "2016-05-08", "2016-07-14", "2016-05-27", "2015-07-24", "2016-03-22", "2016-05-23", "2016-05-23", "2016-05-24", "2016-05-25", "2016-05-26"
    ];
	var fechas =
    [
        "2016-01-08", "2016-04-08", "2016-02-13", "2016-03-01", "2016-03-05", "2016-02-04", "2016-04-01", "2016-03-23", "2016-05-08", "2016-07-14", "2016-05-27", "2015-07-24", "2016-03-22", "2016-05-23", "2016-05-23", "2016-05-24", "2016-05-25", "2016-05-26"
    ];
	var fdespacho =
    [
        "2016-01-08", "2016-04-08", "2016-02-13", "2016-03-01", "2016-03-05", "2016-02-04", "2016-04-01", "2016-03-23", "2016-05-08", "2016-07-14", "2016-05-27", "2015-07-24", "2016-03-22", "2016-05-23", "2016-05-23", "2016-05-24", "2016-05-25", "2016-05-26"
    ];
	var fechETA =
    [
        "2016-01-08", "2016-04-08", "2016-02-13", "2016-03-01", "2016-03-05", "2016-02-04", "2016-04-01", "2016-03-23", "2016-05-08", "2016-07-14", "2016-05-27", "2015-07-24", "2016-03-22", "2016-05-23", "2016-05-23", "2016-05-24", "2016-05-25", "2016-05-26"
    ];
	var fechpago =
    [
        "2016-01-08", "2016-04-08", "2016-02-13", "2016-03-01", "2016-03-05", "2016-02-04", "2016-04-01", "2016-03-23", "2016-05-08", "2016-07-14", "2016-05-27", "2015-07-24", "2016-03-22", "2016-05-23", "2016-05-23", "2016-05-24", "2016-05-25", "2016-05-26"
    ];
	var Status =
	[
		"Pago","Facturado"
	];
	
	var regimen=
	[
		"R1", "A1", "RT", "BM", "IN", "V1", "AF"
	];
	var dnc =
	[
		"0", "1"
	];
	var pnc =
	[
		"0", "1"
	];
	var prev =
	[
		"0", "1"
	];
	var blrev =
	[
		"0", "1"
	];	
	var vobo =
	[
		"0", "1"
	];
	var confondos =
	[
		" ", "1"
	];
	var tPrevio =
	[
		" ","SIN PREVIO", "OCULAR EN PISO", "OCULAR", "DESYCON"
	];
	var ocompras =
    [
        "3029", "5000", "6273", "6379", "6194", "6223", "6296", "6260", "6360", "6129", "6030", "6395", "6441", "6398", "6409", "6242", "6329", "6398"
    ];
	var buques =
    [
        "MAERSK SERANGOON", "MAINE TRADER", "ER SEOUL", "CONTI ARABELLA", "CAP BRETON", "NYKLYRA", "RHLCONSCIENTIA", "EVERLUCKY", "SANTATERESA", "SANTAISABEL", "MSCSILVIA", "1631108-00", "CHASTINEMAERSK", "MSCAGRIGENTO", "HYUNDAIEARTH", "MAERSK KAWASAKI", "HAMMONIA VENETIA", "MAINE TRADER",
		"NORFOLK EXPRES", "CMA CGM JAMAICA", "CENTAURUS", "HEIDELBERG EXPRESS", "NORTHERN DELEGATION", "HS BACH", "CENTAURUS", "BOX TRADER", "NORTHERN GENERAL", "BOX TRADER", "HEIDELBERG EXPRESS V. 73W52"
    ];	
	
	var facturascta =
    [
        "39770", "3365", "39768", "39767", "39779", "19722", "19727", "19726", "3361", "19726", "3367", "3371", "3372", "3398", "3368", "19727", "39774", "19728"
    ];
	var bl =
    [
        "MSCURV169959", "955964922", "OOLU4037281090", "SUDUA6BREZQ0085G", "HLCUFRA160201008", "HBG1106002", "HBG1104899D", "LHV1404137B", "569252462", "HLCUGOA160460641", "NAM2424594", "SUDUA6HAMZQ1123X", "NAM2424594", "MSCUYL090100", "HLCUGOA160460641", "MSCUII961104", "MSCUGG761880", "MSCUPN938019"
    ];
	var facturas = [
	"010012087765","010013004274","010013003686","13000255","010013017080","010013025645","130000466","010013024325","010013028915","010013028916","010013033219","13060040","010013034133","010013035212","010013035217","10013028491","10013038487","10013040142","10013041290","10013039869","010013042505","010013042504","13090079","10013053951","10013059167"
	];
	var facturasmto =
    [
        "41,829.64", "23,856.37", "57,654.75", "232,995.00", "12,712.4", "57,654.75", "100,941.75", "108,421.05", "167,961.02", "116,000.86", "100,941.75", "118,044.22", "165,000.00", "121,056.66", "98,985.2", "409,234.62", "112,200.00", "57,654.75"
    ];

    var saldos =
    [
        "41,829.64", "23,856.37", "57,654.75", "232,995.00", "12,712.4", "57,654.75", "100,941.75", "108,421.05", "167,961.02", "116,000.86", "100,941.75", "118,044.22", "165,000.00", "121,056.66", "98,985.2", "409,234.62", "112,200.00", "57,654.75"
    ];

    var aduanas =
    [
        "VER", "ALT", "LAZCAR", "MEX", "MANZ", "VER", "ALT", "LAZCAR", "MEX", "MANZ", "VER", "ALT"
    ];

	 var pais =
    [
        "POLONIA (REPUBLICA DE)", "ALEMANIA (REPUBLICA FEDERAL DE)", "ARGENTINA (REPUBLICA)", "COLOMBIA (REPUBLICA DE)", "REINO UNIDO DE LA GRAN BRETAÑA E IRLANDA DEL NORTE", "AUSTRIA (REPUBLICA DE)", "BRASIL (REPUBLICA FEDERATIVA DE)", "ITALIA (REPUBLICA ITALIANA)", "URUGUAY (REPUBLICA ORIENTAL DEL)", "TURQUIA (REPUBLICA DE)", "ESPAÑA (REINO DE)", "BELGICA (REINO DE)"
    ];

    var pagos =
    [
         "12,712.40", "5935.29", "69948.37", "15983.50", "4174.00", "5487.98", "3722.57", "63866.75", "9734.04", "4872.00", "5600.00", "3900.00"
    ];
	
	var impuestos =
    [
         "12,712.40", "5935.29", "69948.37", "15983.50", "4174.00", "5487.98", "3722.57", "63866.75", "9734.04", "4872.00", "5600.00", "3900.00"
    ];
	
	var operaciones =
    [
         "EXP", "IMP"
    ];	

	var tipo =
    [
         "1", "0"
    ];
    
    var saleatoria =
    [
         "Rojo", "Verde"
    ];

	var cuentas =
    [
        "41,829.64", "23,856.37", "57,654.75", "232,995.00", "12,712.4", "57,654.75", "100,941.75", "108,421.05", "167,961.02", "116,000.86", "100,941.75", "118,044.22", "165,000.00", "121,056.66", "98,985.2", "409,234.62", "112,200.00", "57,654.75"
    ];
	var proveedor =[
	
		"ARKEMA FRANCE","CECA","MLPC","PETER GREVEN","MLCP INTERNACIONAL","CECALC"
	];
	
	var conmaritimo =[
	
		"LYS/VER/03229", "OOLU3078394280", "MSCUN4674759", "ANT0831334", "HLCULE1130314736", "HLCULE1130423771", "ANT0839552", "LYS/VER/03434", "ANT0842899", "ANT0842775", "HLCULE1130528433", "ANR/VER/18696", "ANT0847435", "MSCUL2917528", "MSCUL2918617", "MSCUL2950057", "MSCUL2950057", "ANT0852236", "MSCUL2969396", "MSCUL2981557", "ANT0853301", "ANT0853914", "ANT0855128", "BAANQHAA 1244323", "ANR/VER/18865", "HAMVER627842", "ANT0863269"
	];
	
	var mercancia = [  
	
		"LUPEROX", "LOTADEX AX8900", "LOTADER 4503 & LOTRYL 29MA03", "LIGALUB 9", "DIANOL", "SILIPORITE SA 1720", "LOTADER 4503 & LOTRYL 29MA03", "OREVAC", "VULTAC TB710", "MMS 21 %", "LOTADER AX8900 LOTRYL 29MA03", "DIANOL 560", "OREVAC18370/825", "NORAMIUM CES80", "VULTAC TB710", "SILIPORITE SA 1720", "ETILDISOPROPILAMINA", "CMA CGM JAMAICA", "VULTAC", "DIANOL", "ETILDISOPROPILAMINA", "CLEARSTRENGTH 350", "LOTADER AX8900, LOTRYL17BA04"
	];
	
	var cantcont =[
	
	"6 BULTOS", "1 X 20 DC", "1 x 40 HC", "2 BULTOS", "1 BULTO", "4 BULTOS", "2 BULTOS", "3 PALLETS", "4 PALLETS", "1X20 ST", "2 PALLETS", "1/40 DC", "1X40 ST", "1 PALLET"
	];
    
    var tamaniocont =[
	
	"20 DC", "40 HC", "1X40 ST"
	];
	
	var numcont =[
		"N/A", "OOLU8215300", "GLDU3537524", "CMAU2151628", "GLDU5640336", "HLXU5147090", "CMAU0186440", "TEMU2434280", "ECMU1683249", "CSQU3178023", "CMAU1265713", "TTNU2337719", "FCIU3998079", "TCLU3003439", "TGHU2986620", "CMAU8192671", "GLDU2219180", "MSCU3538969", "FCIU4389966", "CAXU7342396", "TRLU7279656", "MSCU1541182", "MAXU6272400", "TEMU2351587", "CAMU4239066", "ECMU9872146", "ECMU2193570", "HLXU6464335", "ECMU4522612"
	
	];
	var atraque =
    [
        "2016-01-08", "2016-04-08", "2016-02-13", "2016-03-01", "2016-03-05", "2016-02-04", "2016-04-01", "2016-03-23", "2016-05-08", "2016-07-14", "2016-05-27", "2015-07-24", "2016-03-22", "2016-05-23", "2016-05-23", "2016-05-24", "2016-05-25", "2016-05-26"
    ];
		
	var po = [
	
	"23817","23809","23958","24096","23810","23864","24122","24447","24444","24205","24828","24904","24537","25218","24206","25745","25764","25886","24207","25758","25869","25896","25904","26022","26021"
	];
		
	var destino =[
	"SIGNA SA DE CV","VALLEJO","QUIMICA BETMA","JANEL EDO. MEXICO","PEND. CONFIRMAR","QUIMICA BOSS","PEND. CONFIRMAR","HUTCHINSON","GUANAJUATO","QUIMICA BOSS","MEXICHEM","CORPORACION TELCH ","ATOTO PRODUTION FACILITY","JALISCO","PLANTA1 / QUIMICA BOSS","PLIANT DE MEXICO","SIGNA SA DE CV","MEXICHEN TLAXCALA","SIGNA SA DE CV","DIRECTOO TELCH","VALLEJO","SIGNA SA DE CV","MEXICHEM - TLAXCALA"
		
	];	
	
	var estatus = [
		"PED. CARTA DE USO Y BL  ENDOSADO OK LISTO EXP.", "PAGO PDTO 19.02", "DESPACHO 16.02", "PEND. PREIVO", "EN ESPERA BUQUE", "FALTA BL COMPLETO", "OK DOCTOS", "PEND. EUR 1 PARA REVISIÓN", "DESPACHO 18.07", "ENTREGA 22.07", "PEND DOCUMENTACIOIN", "PEND. CARTA DE INSTRUCCIONES", "DOCTOS RECIBIDOS", "DESPACHADO", "PREVIO PAGO 11.03 SE PAGA SIN EUR 1 SE MANDA PARA CORRECCIÓN EN F.A", "NO SE APLICA EUR 1 OK BL ENDOSADO 14.03", "OK BL ORIGINAL 01.04 NO APLICAR EUR ", "CONFIRMAR DOMICILIO ENTREGA", "PDTE RAVALIDADO", "PROG. PARA DESPACHO Y ENTREGA", "BUQUE EN OPERACIÓN. PROBABLE REVALIDACION", "PDTE PROFORMA", "E RETRASA 1 DÍA POR MAL TIEMPO", "PROFORMA PARA PAGO"		
		
	];	
	
	var transporte = [
		"3 GUERRAS", "T.HH", "T. X WELLDEX", "LEDSCHACO CARGA 13.03", "AUTO. TEC"	
	];
	
	var observaciones = [
		"DATO INEXACTO ", "PREVIO OCULAR -DESPACHO", "EN ESPERA DE BUQUE", "DESPACHO 19.06", "OK DESPACHADO", "NO SE APLICARÁ EUR NO ENVIÓ EL PROVEEDOR", "PEDIMENTO PAGADO ENTREGA 02.07", "DESPACHO 03.07 ENTREGA CLIENTE 05.07", "PROBLEMAS CON ENLACE DE LA ADUANA SE RECORRE DESPACHO SABADO ENTREGA LUNES POR CIERRE DE MES", "OK PEDIMENTO PAGADO Y ENTREGA CLIENTE 09.07.", "PEND. CARTA DE ENCOMIEDA", "SIN COVE PARA TERMINAR PROFORMA Y VALIDAR", "DOCTOS OK.", "DESPACHO 26.06", "SE PAGA 22.07 SE DESPACHA 23.07", "OK DOCUMENTOS COMPLETOS 27.06 PREVIO-DESPACHO 03.07", "PDTE REVALIDAR", "VOBO OKEY"
	
	];
	
    for (var i = 0; i < rowscount; i++) {
        var row = {};
        
        row["id"] = i;        
        row["pedimentos"] = pedimentos[Math.floor(Math.random() * pedimentos.length)];
		row["idRef"] = idRef[Math.floor(Math.random() * idRef.length)];
        row["fpagos"] = fechas[Math.floor(Math.random() * fechas.length)];
        row["referencia"] = referencia[Math.floor(Math.random() * referencia.length)];
        row["facturascta"] = facturascta[Math.floor(Math.random() * facturascta.length)];
		row["facturasmto"] = facturasmto[Math.floor(Math.random() * facturasmto.length)];
        row["saldos"] = saldos[Math.floor(Math.random() * saldos.length)];
        row["aduanas"] = aduanas[Math.floor(Math.random() * aduanas.length)];
		row["aduana"] = aduanas[Math.floor(Math.random() * aduanas.length)];
        row["pagos"] = pagos[Math.floor(Math.random() * pagos.length)];
		row["impuestos"] = impuestos[Math.floor(Math.random() * impuestos.length)];
        row["operaciones"] = operaciones[Math.floor(Math.random() * operaciones.length)];
		row["cuentas"] = cuentas[Math.floor(Math.random() * cuentas.length)];
		row["buques"] = buques[Math.floor(Math.random() * buques.length)];       
        row["fechas"] = fechas[Math.floor(Math.random() * fechas.length)];       
		row["fdespacho"] = fdespacho[Math.floor(Math.random() * fdespacho.length)];       
		row["ocompras"] = ocompras[Math.floor(Math.random() * ocompras.length)];       
		row["bl"] = bl[Math.floor(Math.random() * bl.length)];       
		row["pais"] = pais[Math.floor(Math.random() * pais.length)];       
		row["tipo"] = tipo[Math.floor(Math.random() * tipo.length)];       
		row["patente"] = patente[Math.floor(Math.random() * patente.length)];       
		row["fechApertura"] = fechApertura[Math.floor(Math.random() * fechApertura.length)];
		row["fechETA"] = fechETA[Math.floor(Math.random() * fechETA.length)];       
		row["fechpago"] = fechpago[Math.floor(Math.random() * fechpago.length)];       
		row["Status"] = Status[Math.floor(Math.random() * Status.length)];       
		row["regimen"] = regimen[Math.floor(Math.random() * regimen.length)];       
		row["dnc"] = dnc[Math.floor(Math.random() * dnc.length)];       
		row["pnc"] = pnc[Math.floor(Math.random() * pnc.length)];       
		row["blrev"] = blrev[Math.floor(Math.random() * blrev.length)];       
		row["vobo"] = vobo[Math.floor(Math.random() * vobo.length)];
		row["prev"] = prev[Math.floor(Math.random() * prev.length)];
		row["confondos"] = confondos[Math.floor(Math.random() * confondos.length)];
		row["tPrevio"] = tPrevio[Math.floor(Math.random() * tPrevio.length)];
		row["num_Clie"] = numClie[Math.floor(Math.random() * numClie.length)];
		row["facturas"] = facturas[Math.floor(Math.random() * facturas.length)];
		row["proveedor"] = proveedor[Math.floor(Math.random() * proveedor.length)];
		row["conmaritimo"] = conmaritimo[Math.floor(Math.random() * conmaritimo.length)];
		row["mercancia"] = mercancia[Math.floor(Math.random() * mercancia.length)];
		row["cantcont"] = cantcont[Math.floor(Math.random() * cantcont.length)];
		row["numcont"] = numcont[Math.floor(Math.random() * numcont.length)];
		row["atraque"] = atraque[Math.floor(Math.random() * atraque.length)];
		row["destino"] = destino[Math.floor(Math.random() * destino.length)];
		row["po"] = po[Math.floor(Math.random() * po.length)];
		row["estatus"] = estatus[Math.floor(Math.random() * estatus.length)];
		row["transporte"] =   transporte[Math.floor(Math.random() * transporte.length)];
		row["observaciones"] = observaciones[Math.floor(Math.random() * observaciones.length)];
		row["saleatoria"] = saleatoria[Math.floor(Math.random() * saleatoria.length)];
        row["digital"] = digital[Math.floor(Math.random() * digital.length)];
        row["documentos_nombre"] = documentos_nombre[Math.floor(Math.random() * documentos_nombre.length)];
		row["documentos_tipo"] = documentos_tipo[Math.floor(Math.random() * documentos_tipo.length)];
        row["documentos_xp"] = documentos_xp[Math.floor(Math.random() * documentos_xp.length)];
        data[i] = row;
    }

    return data;
}
function generatecarsdata() {
     var makes = [{ value:"", label: "Any"}, 
        {value:"140", label: "Abarth"},      
        {value:"375", label: "Acura"},      
        {value:"800", label: "Aixam"},      
        {value:"900", label: "Alfa Romeo"},      
        {value:"1100", label: "Alpina"},      
        {value:"121", label: "Artega"},      
        {value:"1750", label: "Asia Motors"},      
        {value:"1700", label: "Aston Martin"},      
        {value:"1900", label: "Audi"},      
        {value:"2000", label: "Austin"},      
        {value:"1950", label: "Austin Healey"},      
        {value:"3100", label: "Bentley"},      
        {value:"3500", label: "BMW"},      
        {value:"3850", label: "Borgward"},      
        {value:"4025", label: "Brilliance"},      
        {value:"4350", label: "Bugatti"},      
        {value:"4400", label: "Buick"},      
        {value:"4700", label: "Cadillac"},      
        {value:"112", label: "Casalini"},      
        {value:"5300", label: "Caterham"},      
        {value:"5600", label: "Chevrolet"},      
        {value:"5700", label: "Chrysler"},      
        {value:"5900", label: "Citroën"},      
        {value:"6200", label: "Cobra"},      
        {value:"6325", label: "Corvette"},      
        {value:"6600", label: "Dacia"},      
        {value:"6800", label: "Daewoo"},      
        {value:"7000", label: "Daihatsu"},      
        {value:"7400", label: "DeTomaso"},      
        {value:"7700", label: "Dodge"},      
        {value:"8600", label: "Ferrari"},      
        {value:"8800", label: "Fiat"},      
        {value:"172", label: "Fisker"},      
        {value:"9000", label: "Ford"},      
        {value:"9900", label: "GMC"},      
        {value:"122", label: "Grecav"},      
        {value:"10850", label: "Holden"},      
        {value:"11000", label: "Honda"},      
        {value:"11050", label: "Hummer"},      
        {value:"11600", label: "Hyundai"},      
        {value:"11650", label: "Infiniti"},      
        {value:"11900", label: "Isuzu"},      
        {value:"12100", label: "Iveco"},      
        {value:"12400", label: "Jaguar"},      
        {value:"12600", label: "Jeep"},      
        {value:"13200", label: "Kia"},      
        {value:"13450", label: "Königsegg"},      
        {value:"13900", label: "KTM"},      
        {value:"14400", label: "Lada"},      
        {value:"14600", label: "Lamborghini"},      
        {value:"14700", label: "Lancia"},      
        {value:"14800", label: "Land Rover"},      
        {value:"14845", label: "Landwind"},      
        {value:"15200", label: "Lexus"},      
        {value:"15400", label: "Ligier"},      
        {value:"15500", label: "Lincoln"},      
        {value:"15900", label: "Lotus"},      
        {value:"16200", label: "Mahindra"},      
        {value:"16600", label: "Maserati"},      
        {value:"16700", label: "Maybach"},      
        {value:"16800", label: "Mazda"},      
        {value:"137", label: "McLaren"},      
        {value:"17200", label: "Mercedes-Benz"},      
        {value:"17300", label: "MG"},      
        {value:"30011", label: "Microcar"},      
        {value:"17500", label: "MINI"},      
        {value:"17700", label: "Mitsubishi"},      
        {value:"17900", label: "Morgan"},      
        {value:"18700", label: "Nissan"},      
        {value:"18875", label: "NSU"},      
        {value:"18975", label: "Oldsmobile"},      
        {value:"19000", label: "Opel"},      
        {value:"149", label: "Pagani"},      
        {value:"19300", label: "Peugeot"},      
        {value:"19600", label: "Piaggio"},      
        {value:"19800", label: "Plymouth"},      
        {value:"20000", label: "Pontiac"},      
        {value:"20100", label: "Porsche"},      
        {value:"20200", label: "Proton"},      
        {value:"20700", label: "Renault"},      
        {value:"21600", label: "Rolls Royce"},      
        {value:"21700", label: "Rover"},      
        {value:"125", label: "Ruf"},      
        {value:"21800", label: "Saab"},      
        {value:"22000", label: "Santana"},      
        {value:"22500", label: "Seat"},      
        {value:"22900", label: "Skoda"},      
        {value:"23000", label: "Smart"},      
        {value:"100", label: "Spyker"},      
        {value:"23100", label: "Ssangyong"},      
        {value:"23500", label: "Subaru"},      
        {value:"23600", label: "Suzuki"},      
        {value:"23800", label: "Talbot"},      
        {value:"23825", label: "Tata"},      
        {value:"135", label: "Tesla"},      
        {value:"24100", label: "Toyota"},      
        {value:"24200", label: "Trabant"},      
        {value:"24400", label: "Triumph"},      
        {value:"24500", label: "TVR"},      
        {value:"25200", label: "Volkswagen"},      
        {value:"25100", label: "Volvo"},      
        {value:"25300", label: "Wartburg"},      
        {value:"113", label: "Westfield"},      
        { value: "25650", label: "Wiesmann" }];

      var fuelType = ["Any", "Diesel", "Electric", "Ethanol (FFV, E85, etc.)", "Gas", "LPG", "Natural Gas", "Hybrid", "Hydrogen", "Petrol"];
      var vehicleType = ["Saloon", "Small Car", "Estate Car", "Van / Minibus", "Off-road Vehicle/Pickup Truck", "Cabriolet / Roadster", "Sports Car/Coupe"];
      var power =
      [
        {value:"24", label: "24 kW (33 PS)"},
        {value:"36", label: "36 kW (49 PS)"},
        {value:"43", label: "43 kW (58 PS)"},
        {value:"54", label: "54 kW (73 PS)"},
        {value:"65", label: "65 kW (88 PS)"},
        {value:"73", label: "73 kW (99 PS)"},
        {value:"86", label: "86 kW (117 PS)"},
        {value:"95", label: "95 kW (129 PS)"},
        {value:"109", label: "109 kW (148 PS)"},
        {value:"146", label: "146 kW (199 PS)"},
        {value:"184", label: "184 kW (250 PS)"},
        {value:"222", label: "222 kW (302 PS)"},
        {value:"262", label: "262 kW (356 PS)"},
        {value:"295", label: "295 kW (401 PS)"},
        {value:"333", label: "333 kW (453 PS)"}
      ];

      var data = new Array();
      for (var i = 0; i < makes.length; i++) {
          var row = {};
          row.make = makes[i].label;
          row.fuelType = fuelType[Math.floor(Math.random() * fuelType.length)];
          row.vehicleType = vehicleType[Math.floor(Math.random() * vehicleType.length)];
          var powerIndex = Math.floor(Math.random() * power.length);
          if (powerIndex == power.length - 1) powerIndex --;
          row.powerFrom = power[powerIndex];
          row.powerTo = power[powerIndex + 1];
          data.push(row);
      }
      return data;
}