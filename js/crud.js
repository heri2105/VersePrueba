$(document).ready(function () {
    
    $("#btnbuscar").jqxButton({ width: 120, height: 25,template: "primary" });
    $("#limpiarbusqueda").jqxButton({ width: 120, height: 25,template: "primary" });
    $("#nuevo").jqxButton({ width: 120, height: 25,template: "primary" });
    $("#editar").jqxButton({ width: 120, height: 25,template: "primary" });
    $("#eliminar").jqxButton({ width: 120, height: 25,template: "primary" });
    
    //modal Nuevo
    $("#rfcNuevo").jqxInput({placeHolder: "Favor de Introducir RFC", height: 25, width: 200, minLength: 1 });
    $("#principalNuevo").jqxInput({placeHolder: "", height: 25, width: 200, minLength: 1 });
    $("#businessNuevo").jqxInput({placeHolder: "", height: 25, width: 200, minLength: 1 });
    $("#phoneNuevo").jqxInput({placeHolder: "", height: 25, width: 200, minLength: 1 });
    $("#emailNuevo").jqxInput({placeHolder: "", height: 25, width: 200, minLength: 1 });
    $("#guardar").jqxButton({ width: 120, height: 25,template: "primary" });
    $("#actualizar").jqxButton({ width: 120, height: 25,template: "primary" });
    $("#eliminarreg").jqxButton({ width: 120, height: 25,template: "primary" });
    
    //modal editar
    $("#rfcEditar").jqxInput({placeHolder: "Favor de Introducir RFC", height: 25, width: 200, minLength: 1 });
    $("#principalEditar").jqxInput({placeHolder: "", height: 25, width: 200, minLength: 1 });
    $("#businessEditar").jqxInput({placeHolder: "", height: 25, width: 200, minLength: 1 });
    $("#phoneEditar").jqxInput({placeHolder: "", height: 25, width: 200, minLength: 1 });
    $("#emailEditar").jqxInput({placeHolder: "", height: 25, width: 200, minLength: 1 });
    
    $("#rfcBusqueda").jqxInput({placeHolder: "Favor de Introducir RFC", height: 25, width: 200, minLength: 1 });
    $("#grid").jqxGrid({  
			width: '100%',					
			pageable: true,								
			autoheight: true,
			editable: true,
			theme: 'darkblue',
			altrows: true,
			rowsheight: 29,
			pagesize: 10,
            selectionmode:'singlerow',
			columns: [
            {text: 'RFC', datafield:'rfc',width:'15%', align: 'center', cellsalign: 'center', editable: false},           
            {text: 'Principal Name', datafield:'principalname', width: '25%', align: 'center', cellsalign: 'center', editable: false },		
            {text: 'Business Name', datafield:'businessname', width: '30%', align: 'center', cellsalign: 'center', editable: false },	
            {text: 'Phone', datafield:'phone', width: '10%', align: 'center', cellsalign: 'center', editable: false},
            {text: 'Email', datafield:'EMAIL', width: '10%', align: 'center', cellsalign: 'center', editable: false},
            {text: 'Created Date',datafield:'createddate' , width: '10%', align: 'center', cellsalign: 'center', editable: false},	 
            {text: 'Created Date',datafield:'id_proveedor' , width: '10%', align: 'center', hidden:true, editable: false},	 
			 ]
	}); 
     $('#windowNuevo').jqxWindow({
			position: { x: 200, y: 500} ,
			showCollapseButton: false, 
			maxWidth: 500, 
			minHeight: 350, 
			minWidth: 200, 
            theme: 'darkblue',
			width: "100%",			
		    okButton: $('#seleccionar'),
			initContent: function () {
				$('#windowNuevo').css('display', 'none');
			}
	});
      $('#windowEditar').jqxWindow({
			position: { x: 200, y: 500} ,
			showCollapseButton: false, 
			maxWidth: 500, 
			minHeight: 350, 
			minWidth: 200, 
            theme: 'darkblue',
			width: "100%",			
		    okButton: $('#seleccionar'),
			initContent: function () {
				$('#windowEditar').css('display', 'none');
			}
	});
     $('#windowEliminar').jqxWindow({
			position: { x: 200, y: 500} ,
			showCollapseButton: false, 
			maxWidth: 800, 
			minHeight: 350, 
			minWidth: 200, 
            theme: 'darkblue',
			width: "100%",			
		    okButton: $('#seleccionar'),
			initContent: function () {
				$('#windowEliminar').css('display', 'none');
			}
	});
    
    
    
    //funcionalidad de botonera
    
    $('#btnbuscar').on('click', function () { 
        var value = $('#rfcBusqueda').jqxInput('val');
        if(value.trim()==""){
            alert("Favor de colocar un RFC");
        }else{
            var row = {};
				row['consultarfc'] = "true";
				row['valor'] = value.trim();
			
				var source = {
					datafields: [
                        {name: 'rfc'}, 
                        {name: 'principalname',}, 
                        {name: 'businessname',}, 
                        {name: 'phone',}, 
                        {name: 'EMAIL',}, 
                        {name: 'createddate',}, 
                        {name: 'id_proveedor',}, 

					],
					url: "php/cach_crud.php",
					type: 'POST',
					datatype: "json",
					data: row,
					sort: function () {}
				};
            var dataAdapter = new $.jqx.dataAdapter(source);
            $("#grid").jqxGrid({
                        source: dataAdapter,
            });
        }
    });
    
    
    $('#nuevo').on('click', function () { 
        $('#windowNuevo').jqxWindow('open');
    });
    $('#guardar').on('click', function () { 
        console.log("algo al guardar");
        
        
      /*  var rfc = $('#rfcNuevo').jqxInput('val');
        var principal = $('#principalNuevo').jqxInput('val');
        var business = $('#businessNuevo').jqxInput('val');
        var phone = $('#phoneNuevo').jqxInput('val');
        var email = $('#emailNuevo').jqxInput('val');
        if(phone =="" || )
        var row = {};
        row['consultarfc'] = "true";
		row['valor'] = value.trim();
        
       $.ajax({
                dataType: 'json',
                type: "POST",
                url: list,
                cache: false,
                data: row,
                success: function (data) { 				
                    listado=data;	
                 //   console.log(listado);
                },
                complete:function(){
                    ConsultarRegistroIniciales();
                    $(".loading").css("display","none");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $(".loading").css("display","none");
                    
                }
            });*/
    });
    
    $('#editar').on('click', function () { 
         var row = $("#grid").jqxGrid('selectedrowindexes');
         var datarf = $('#grid').jqxGrid('getrowdata', row);
        console.log(datarf);
        
        
       
        
        $('#windowEditar').jqxWindow('open');
        console.log(datarf.rfc);
       
        $('#rfcEditar').val(datarf.rfc);
        $('#principalEditar').val(datarf.principalname);
        $('#businessEditar').val(datarf.businessname);
        $('#phoneEditar').val(datarf.phone);
        $('#emailEditar').val(datarf.EMAIL);
        $('#idregistros').val(datarf.id_proveedor);
        
        
    });
      $('#eliminar').on('click', function () { 
           var row = $("#grid").jqxGrid('selectedrowindexes');
           var datarf = $('#grid').jqxGrid('getrowdata', row);
          
          $('#windowEliminar').jqxWindow('open');
          $("#rfcMostrarBorrar").html(datarf.rfc);
          $("#businessMostrarBorrar").html(datarf.businessname);
          $("#emailMostrarBorrar").html(datarf.EMAIL);
          
          $('#idregEliminar').val(datarf.id_proveedor);
          
      });
    $('#limpiarbusqueda').on('click', function () {
         ConsultarRegistroIniciales();
        $('#rfcBusqueda').val("");
        
    });
    
    
    ConsultarRegistroIniciales();
    function ConsultarRegistroIniciales(){
                var row = {};
				row['consultaInicial'] = "true";
				row['anio'] = "2018";
				row['mes'] = "05";
				var source = {
					datafields: [
                        {name: 'rfc'}, 
                        {name: 'principalname',}, 
                        {name: 'businessname',}, 
                        {name: 'phone',}, 
                        {name: 'EMAIL',}, 
                        {name: 'createddate',}, 
                        {name: 'id_proveedor',}, 

					],
					url: "php/cach_crud.php",
					type: 'POST',
					datatype: "json",
					data: row,
					sort: function () {}
				};
        var dataAdapter = new $.jqx.dataAdapter(source);
        $("#grid").jqxGrid({
					source: dataAdapter,
        });
        $('#grid').jqxGrid('selectrow', 0);
    }
    
});